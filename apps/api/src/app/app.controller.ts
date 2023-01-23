import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './user/entities/user.entity';
import { RequestWithUser } from './user/user-request.type';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: Request & { user: User }) {
    return this.authService.login(req.user);
  }
}
