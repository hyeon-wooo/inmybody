import { Controller, Get, Render } from '@nestjs/common';
import { QnaService } from './qna.service';

@Controller('qna')
export class QnaController {
  constructor(private service: QnaService) {}

  @Get('/')
  @Render('qna/list')
  async getQnaList() {}
}
