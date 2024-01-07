import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { CreateRecordBodyDTO, MyRecordQueryDTO } from './record.dto';
import { IJwtPayload } from 'src/auth/auth.interface';

@Controller('/api/record')
export class RecordApiController {
  constructor(private service: RecordService) {}

  @Post('/register')
  @UseGuards(JwtAuthGuard)
  async add(@Body() body: CreateRecordBodyDTO, @Req() { user }: Request) {
    const created = await this.service.create({ ...body, userId: user.id });
    return { record: created[0] };
  }

  @Get('mine')
  @UseGuards(JwtAuthGuard)
  async myRecord(@Query() query: MyRecordQueryDTO, @Req() { user }: Request) {
    const found = await this.service.findMany({ where: { userId: user.id } });

    return {
      list: found,
    };
  }
}
