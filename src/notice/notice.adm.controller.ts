import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDTO } from './notice.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/role/role.decorator';
import { ERole } from 'src/auth/role/role.enum';

@Controller('adm/notice')
@Roles(ERole.ADM)
@UseGuards(JwtAuthGuard, RolesGuard)
export class NoticeAdmController {
  constructor(private service: NoticeService) {}

  @Post()
  async create(@Body() body: CreateNoticeDTO) {
    this.service.create(body);
  }
}
