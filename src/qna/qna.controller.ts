import {
  Body,
  Controller,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Post,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { QnaService } from './qna.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { LaunchID, TLaunchInfo } from 'src/common/aa';
import { ApplyQnaDTO } from './qna.dto';
import { LogService } from 'src/log/log.service';

@Controller('qna')
export class QnaController {
  constructor(
    private service: QnaService,
    private logService: LogService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getQnaList(@Req() { user }: Request) {
    const found = await this.service.findMany({
      where: { userId: user.id },
      select: ['id', 'createdAt', 'title'],
    });
    return {
      list: found,
    };
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async getQnaDetail(
    @Param('id') qnaId: string,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    // log 저장
    this.logService.saveQnaDetail(qnaId, user.id, launch.launchId);

    const found = await this.service.findOne({ userId: user.id, id: qnaId });
    if (!found) throw new HttpException('존재하지 않는 문의입니다.', 404);

    return {
      qna: found,
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: ApplyQnaDTO, @Req() { user }: Request) {
    await this.service.create({
      ...body,
      userId: user.id,
    });

    return true;
  }
}
