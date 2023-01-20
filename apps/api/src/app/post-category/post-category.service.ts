import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';
import { PostCategory } from './entities/post-category';

@Injectable()
export class PostCategoryService {
  constructor(
    @InjectRepository(PostCategory)
    private repository: Repository<PostCategory>
  ) {}

  create(createPostCategoryDto: CreatePostCategoryDto) {
    const category = this.repository.create(createPostCategoryDto);
    return this.repository.save(category);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updatePostCategoryDto: UpdatePostCategoryDto) {
    return this.repository.update({ id }, { ...updatePostCategoryDto });
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
