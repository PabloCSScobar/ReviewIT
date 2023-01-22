import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private answerService: AnswerService
  ) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @Post(':id/answers')
  addAnswer(@Param('id') id: string, @Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(+id, createAnswerDto);
  }

  @Post(':id/answers/:answerId/mark_as_top')
  markAnswerAsTop(@Param('answerId') answerId: string) {
    return this.answerService.markAnswerAsTop(+answerId);
  }

  @Delete(':id/answers/:answerId')
  deleteAnswer(@Param('answerId') answerId: string) {
    return this.answerService.deleteAnswer(+answerId);
  }

  @Get(':id/answers')
  async getAnswers(@Param('id') id: string) {
    return await this.answerService.getAnswers(+id);
  }
}
