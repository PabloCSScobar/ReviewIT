import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async addUser(@Body() user: CreateUserDto) {
    return await this.userService.addUser(user);
  }

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    await this.userService.removeUser(id);
  }
}
