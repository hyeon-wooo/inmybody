import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtPassGuard } from './auth/jwt.guard';
import { Request } from 'express';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  @Render('index')
  @UseGuards(JwtPassGuard)
  async getHello(@Req() { user }: Request) {
    return { message: 'hello' };
  }

  @Get('signin')
  @Render('user/signin')
  signInPage() {
    return;
  }

  @Get('signup')
  @Render('user/signup')
  signUpPage() {
    return;
  }
}
