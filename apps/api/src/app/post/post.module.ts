import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostCategory } from '../post-category/entities/post-category.entity';
import { User } from '../user/entities/user.entity';
import { Answer } from './entities/answer.entity';
import { AnswerService } from './answer.service';
import { ReviewedCategoryNode } from './entities/reviewed-category-node.entity';
import { ReviewedCategory } from './entities/reviewed-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Post,
      Answer,
      PostCategory,
      User,
      ReviewedCategoryNode,
      ReviewedCategory,
    ]),
  ],
  controllers: [PostController],
  providers: [PostService, AnswerService],
})
export class PostModule {}
