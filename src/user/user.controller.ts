import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  NotFoundException,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { SignInDTO, SignUpDTO } from './user.dto';
import { AuthService } from 'src/auth/auth.service';
import { Response } from 'express';

@Controller('api/user')
export class UserController {
  constructor(
    private service: UserService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  @ApiOperation({ summary: '회원가입' })
  async signUp(@Body() body: SignUpDTO) {
    const found = await this.service.findOne({ email: body.email });
    if (found) throw new HttpException('이미 가입된 이메일입니다', 400);

    const created = await this.service.createUser(body);
    const { password, salt, ...responseUser } = created;
    return { user: responseUser };
  }

  @Post('/signin')
  @ApiOperation({ summary: '로그인' })
  async signIn(@Body() body: SignInDTO) {
    const user = await this.service.findOne({ email: body.email });
    if (!user)
      throw new NotFoundException('로그인 정보와 일치하는 사용자가 없습니다.');

    const { password, salt } = user;
    if (!this.authService.validateUser(password, salt, body.password))
      throw new NotFoundException('로그인 정보와 일치하는 사용자가 없습니다.');

    const { id, level, name } = user;
    const token = await this.authService.generateToken({
      id,
      level,
      name,
    });

    return { token: token.access_token };
  }
}
