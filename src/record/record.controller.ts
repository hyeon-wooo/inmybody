import { Controller, Get, Render } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private service: RecordService) {}

  @Get('/register')
  @Render('record/register')
  recordAddPage() {
    return;
  }

  @Get('/graph')
  @Render('record/graph')
  recordGraphPage() {
    return;
  }
}
