import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostCategoryService } from './post-category.service';
import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';

@Controller('post-categories')
export class PostCategoryController {
  constructor(private readonly postCategoryService: PostCategoryService) {}

  @Post()
  async create(@Body() createPostCategoryDto: CreatePostCategoryDto) {
    return this.postCategoryService.create(createPostCategoryDto);
  }

  @Get()
  async findAll() {
    return this.postCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postCategoryService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostCategoryDto: UpdatePostCategoryDto
  ) {
    return this.postCategoryService.update(+id, updatePostCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postCategoryService.remove(+id);
  }
}
