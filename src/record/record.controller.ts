import { Controller, Get, Render } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private service: RecordService) {}

  @Get('/register')
  @Render('record/register')
  recordAddPage() {
    return {
      headerTitle: '인바디 결과 등록',
    };
  }

  @Get('/graph')
  @Render('record/graph')
  recordGraphPage() {
    return {
      headerTitle: '나의 인바디 변화',
    };
  }
}
