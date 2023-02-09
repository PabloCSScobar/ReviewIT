import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from 'typeorm';
import { PostCategory } from '../post-category/entities/post-category.entity';
import { User } from '../user/entities/user.entity';
import { AnswerService } from './answer.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Answer } from './entities/answer.entity';
import { Post } from './entities/post.entity';
import { ReviewedCategory } from './entities/reviewed-category.entity';

export enum PostsFilter {
  LATEST = 'latest',
  HOT = 'hot',
  HIGHEST_RANK = 'highest_rank',
  MOST_VISITS = 'most_visits',
  MOST_ANSWERS = 'most_answers',
  NO_ANSWER = 'no_answer',
}

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(Answer) private answerRepository: Repository<Answer>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(PostCategory)
    private postCategoryRepository: Repository<PostCategory>,
  ) {}

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
    return await this.postRepository.save(newPost);
  }

  async findAll(searchedTerm: string, postFilter: PostsFilter, categoryFilter: string) {
    let query = this.postRepository.createQueryBuilder('post')
    .leftJoinAndSelect('post.author', 'author')
    .leftJoinAndSelect('post.categories', 'categories');

    if (searchedTerm) {
      query = query.andWhere('(post.title LIKE :searchedTerm OR post.description LIKE :searchedTerm)', { searchedTerm: `%${searchedTerm}%` });
    }
    if(categoryFilter) {
      query = query.andWhere('exists (select 1 from post_categories_post_category ppc left join post_category pc on ppc."postCategoryId" = pc.id where pc.name like :categoryFilter and post.id = ppc."postId")', { categoryFilter: `%${categoryFilter}%` });
    }
    
    const posts = await query.getMany();
    await Promise.all(
      posts.map(async (post) => {
        post.hasTopAnswer = post.getHasTopAnswer();
        post.answersAmount = await this.getAnswersCount(post.id);
      })
    );
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['author', 'categories'],
    });
    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    post.visits +=1;
    await this.postRepository.save(post);
    post.hasTopAnswer = post.getHasTopAnswer();
    post.answersAmount = await this.getAnswersCount(post.id);
    return post;
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
