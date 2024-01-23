import { Body, Controller, Post } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDTO } from './notice.dto';

@Controller('api/notice')
export class NoticeApiController {
  constructor(private service: NoticeService) {}

  @Post()
  async create(@Body() body: CreateNoticeDTO) {
    this.service.create(body);
  }
}
