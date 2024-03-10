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

@Controller('/adm/record')
export class RecordAdmController {
  constructor(private service: RecordService) {}
}
