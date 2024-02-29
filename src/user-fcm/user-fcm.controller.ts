import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserFcmService } from './user-fcm.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';

@Controller('user-fcm')
export class UserFcmController {
  constructor(private serivce: UserFcmService) {}

  @Post('register')
  @UseGuards(JwtAuthGuard)
  async register(@Body() body: { fcm: string }, @Req() { user }: Request) {
    this.serivce.register(user.id, body.fcm);
    return true;
  }
}
