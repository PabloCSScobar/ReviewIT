import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { PostCategory } from '../post-category/entities/post-category.entity';
import { User } from '../user/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(PostCategory)
    private postCategoryRepository: Repository<PostCategory>
  ) {}

  async getPostById(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) throw new HttpException('Post Not found', HttpStatus.NOT_FOUND);
    return post;
  }

  async create(createPostDto: CreatePostDto) {
    const categoriesIds = createPostDto.categories;
    const author = await this.userRepository.findOneBy({ id: 1 });
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

  findAll() {
    return this.postRepository.find({ relations: ['author', 'categories'] });
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['author', 'categories'],
    });
    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);

    return post;
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
