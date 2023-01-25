import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { RequestWithUser } from './user-request.type';
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

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req: RequestWithUser) {
    return await this.userService.findOne(req.user.username);
  }
  @Delete(':id')
  async removeUser(@Param('id', ParseIntPipe) id: number) {
    await this.userService.removeUser(id);
  }
}
