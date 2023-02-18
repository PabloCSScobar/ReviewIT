import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { PostCategory } from '../post-category/entities/post-category.entity';
import { User } from '../user/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Answer } from './entities/answer.entity';
import { Post } from './entities/post.entity';
import { PaginationOptions, PaginateResponse, PostsFilter } from 'api-interfaces';
import { PAGINATION_OPTIONS, USER_REPUTATION_OPTIONS } from './config';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(Answer) private answerRepository: Repository<Answer>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(PostCategory)
    private postCategoryRepository: Repository<PostCategory>
  ) { }

  async getPostById(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) throw new HttpException('Post Not found', HttpStatus.NOT_FOUND);
    return post;
  }

  async create(createPostDto: CreatePostDto, authorId: number) {
    const categoriesIds = createPostDto.categories;
    const author = await this.userRepository.findOneBy({
      id: authorId,
    });
    if (!author)
      throw new HttpException('User Not found', HttpStatus.BAD_REQUEST);
    const categories = await this.postCategoryRepository.find({
      where: { id: In(categoriesIds) },
    });

    const newPost = {
      ...createPostDto,
      author: author,
      categories,
    };

    author.reputation += USER_REPUTATION_OPTIONS.addPost;
    this.userRepository.save(author);
    return await this.postRepository.save(newPost);
  }

  async findAll(
    searchedTerm: string,
    postFilter: PostsFilter,
    categoryFilter: string,
    page: number,
  ) {
    let query = this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .leftJoinAndSelect('post.categories', 'categories')
      .addSelect(
        `(
        SELECT COALESCE(AVG(reviewed_category.rank), 0)
        FROM answer
        LEFT JOIN reviewed_category ON reviewed_category."answerId" = answer.id
        WHERE answer."postId" = post.id
      ) as post_rank`
      )
      .addSelect(
        `(select count(*) from answer where answer."postId" = post.id) as post_answers_amount`
      );

    if (searchedTerm) {
      query = query.andWhere(
        '(post.title LIKE :searchedTerm OR post.description LIKE :searchedTerm)',
        { searchedTerm: `%${searchedTerm}%` }
      );
    }
    if (categoryFilter) {
      query = query.andWhere(
        'exists (select 1 from post_categories_post_category ppc left join post_category pc on ppc."postCategoryId" = pc.id where pc.name like :categoryFilter and post.id = ppc."postId")',
        { categoryFilter: `%${categoryFilter}%` }
      );
    }

    if (postFilter === PostsFilter.LATEST) {
      query = query.orderBy('post.created', 'DESC');
    } else if (postFilter === PostsFilter.HOT) {
      query = query.orderBy(
        'post.visits * (select count(*) from answer where answer."postId" = post.id)',
        'DESC'
      );
    } else if (postFilter === PostsFilter.HIGHEST_RANK) {
      query = query.orderBy('post_rank', 'DESC');
    } else if (postFilter === PostsFilter.MOST_VISITS) {
      query = query.orderBy('post.visits', 'DESC');
    } else if (postFilter === PostsFilter.MOST_ANSWERS) {
      query = query.orderBy('post_answers_amount', 'DESC');
    } else if (postFilter === PostsFilter.NO_ANSWER) {
      query = query.andWhere(
        'not exists (select 1 from answer where answer."postId" = post.id)'
      );
    }
    const postsCount = await query.getCount();


    let currentPage = page ? page : PAGINATION_OPTIONS.page;
    const lastPage = Math.ceil(postsCount / PAGINATION_OPTIONS.itemsPerPage);
    if (currentPage > lastPage) currentPage = lastPage;

    query = query.skip((currentPage - 1) * PAGINATION_OPTIONS.itemsPerPage).take(PAGINATION_OPTIONS.itemsPerPage);

    const postRawAndEntities = await query.getRawAndEntities();
    const posts = postRawAndEntities.entities.map((post) => {
      const raw = postRawAndEntities.raw.find((raw) => raw.post_id === post.id);
      post.rank = raw.post_rank;
      post.answersAmount = raw.post_answers_amount;
      return post;
    });

    return this.paginateResponse(
      posts,
      postsCount,
      {
        page: currentPage,
        itemsPerPage: PAGINATION_OPTIONS.itemsPerPage
      });
  }

  paginateResponse<T>(results: T[], total: number, paginationOptions: PaginationOptions): PaginateResponse<T> {
    return {
      results,
      pagination: {
        total,
        currentPage: paginationOptions.page,
        itemsPerPage: paginationOptions.itemsPerPage,
        totalPages: Math.ceil(total / paginationOptions.itemsPerPage)

      }
    }
  }

  async findOne(id: number) {
    let query = this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .leftJoinAndSelect('post.categories', 'categories')
      .addSelect(
        `(
        SELECT COALESCE(AVG(reviewed_category.rank), 0)
        FROM answer
        LEFT JOIN reviewed_category ON reviewed_category."answerId" = answer.id
        WHERE answer."postId" = post.id
      ) as post_rank`
      )
      .where('post.id = :id', { id });

    const postRawAndEntity = await query.getRawAndEntities();
    if (!postRawAndEntity.entities.length)
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);

    const postEntity = postRawAndEntity.entities[0];
    const raw = postRawAndEntity.raw[0];
    postEntity.rank = raw.post_rank;
    postEntity.visits += 1;
    await this.postRepository.save(postEntity);
    return postEntity;
  }

  async getAnswersCount(postId: number) {
    return await this.answerRepository.count({
      where: { post: { id: postId } },
    });
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}


