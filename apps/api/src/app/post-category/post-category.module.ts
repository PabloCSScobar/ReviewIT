import { Module } from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { PostCategoryController } from './post-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCategory } from './entities/post-category';

@Module({
  imports: [TypeOrmModule.forFeature([PostCategory])],
  controllers: [PostCategoryController],
  providers: [PostCategoryService],
})
export class PostCategoryModule {}
