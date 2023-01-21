import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { PostCategory } from '../post-category/entities/post-category';
import { User } from '../user/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(PostCategory)
    private postCategoryRepository: Repository<PostCategory>
  ) {}
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

  findOne(id: number) {
    return this.postRepository.findOne({
      where: { id },
      relations: ['author', 'categories'],
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}