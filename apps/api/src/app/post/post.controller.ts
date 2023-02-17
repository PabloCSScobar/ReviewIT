import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { PostService, PostsFilter } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestWithUser } from '../user/user-request.type';
import { Public } from '../auth/public-endpoint';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private answerService: AnswerService
  ) {}

  @Post()
  create(
    @Request() req: RequestWithUser,
    @Body() createPostDto: CreatePostDto
  ) {
    const authorId = req.user.userId;
    return this.postService.create(createPostDto, authorId);
  }

  @Public()
  @Get()
  findAll(
    @Query('searchedTerm') searchedTerm: string,
    @Query('postFilter') postFilter: PostsFilter,
    @Query('categoryFilter') categoryFilter: string
  ) {
    return this.postService.findAll(searchedTerm, postFilter, categoryFilter);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @Post(':id/answers')
  addAnswer(
    @Request() req: RequestWithUser,
    @Param('id') id: string,
    @Body() createAnswerDto: CreateAnswerDto
  ) {
    const authorId = req.user.userId;
    return this.answerService.create(+id, createAnswerDto, authorId);
  }

  @Post(':id/answers/:answerId/mark_as_top')
  markAnswerAsTop(@Param('answerId') answerId: string) {
    return this.answerService.markAnswerAsTop(+answerId);
  }

  @Delete(':id/answers/:answerId')
  deleteAnswer(@Param('answerId') answerId: string) {
    return this.answerService.deleteAnswer(+answerId);
  }

  @Public()
  @Get(':id/answers')
  async getAnswers(@Param('id') id: string) {
    return await this.answerService.getAnswers(+id);
  }
}
