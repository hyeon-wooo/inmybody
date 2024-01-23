import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDTO } from './notice.dto';
import { dateToStr } from 'src/lib/utils/datetime';

@Controller('notice')
export class NoticeController {
  constructor(private service: NoticeService) {}

  @Get()
  @Render('notice/list')
  async list() {
    const found = await this.service.findMany({
      select: ['id', 'createdAt', 'title', 'fixed'],
      order: { fixed: 'DESC', createdAt: 'DESC' }, // 상단고정 먼저.
    });

    return {
      headerTitle: '공지사항',
      notices: found.map((notice) => {
        return { ...notice, createdAt: dateToStr(notice.createdAt) };
      }),
    };
  }

  @Get('create')
  @Render('notice/create')
  async create() {
    return {
      headerTitle: '공지사항 등록',
    };
  }

  @Get('/:id')
  @Render('notice/detail')
  async detail(@Param('id') noticeId: string) {
    const found = await this.service.findOne(noticeId);

    return {
      headerTitle: '공지사항',
      notice: found
        ? {
            ...found,
            createdAt: dateToStr(found.createdAt),
          }
        : null,
    };
  }
}
