import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDTO } from './notice.dto';
import { dateToStr } from 'src/lib/utils/datetime';
import { LogService } from 'src/log/log.service';
import { JwtPassGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { LaunchID, TLaunchInfo } from 'src/common/aa';

@Controller('notice')
export class NoticeController {
  constructor(
    private service: NoticeService,
    private logService: LogService,
  ) {}

  @Get()
  async list() {
    const found = await this.service.findMany({
      select: ['id', 'createdAt', 'title', 'fixed'],
      order: { fixed: 'DESC', createdAt: 'DESC' }, // 상단고정 먼저.
    });

    return {
      notices: found.map((notice) => {
        return { ...notice, createdAt: dateToStr(notice.createdAt) };
      }),
    };
  }

  @Get('/:id')
  @UseGuards(JwtPassGuard)
  async detail(
    @Param('id') noticeId: string,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    // log 저장
    if (user)
      this.logService.saveNoticeDetail(noticeId, user.id, launch.launchId);

    const found = await this.service.findOne(noticeId);

    return {
      notice: found,
    };
  }

  @Get('create')
  @Render('notice/create')
  async create() {
    return {
      headerTitle: '공지사항 등록',
    };
  }
}
