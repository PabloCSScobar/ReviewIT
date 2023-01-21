import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostCategory } from '../post-category/entities/post-category';
import { User } from '../user/entities/user.entity';
import { Answer } from './entities/answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Answer, PostCategory, User])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
