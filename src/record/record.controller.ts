import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordBodyDTO, MyRecordQueryDTO } from './record.dto';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { LaunchID, TLaunchInfo } from 'src/common/aa';
import { LogService } from 'src/log/log.service';

@Controller('record')
export class RecordController {
  constructor(
    private service: RecordService,
    private logService: LogService,
  ) {}

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

  @Get('mine')
  @UseGuards(JwtAuthGuard)
  async myRecord(
    @Query() query: MyRecordQueryDTO,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    // log 저장
    // TODO: filterStart, filterEnd 전달 (기간필터 기능 개발 시)
    this.logService.saveGraph(user.id, launch.launchId, {});

    const found = await this.service.findMany({ where: { userId: user.id } });

    return {
      list: found,
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async add(@Body() body: CreateRecordBodyDTO, @Req() { user }: Request) {
    const created = await this.service.create({ ...body, userId: user.id });
    return { success: true };
  }
}
