import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { LogNoticeDetailEntity } from './log-notice-detail.entity';

@Injectable()
export class LogNoticeDetailService extends CRUDService<LogNoticeDetailEntity> {
  constructor(
    @InjectRepository(LogNoticeDetailEntity)
    repo: Repository<LogNoticeDetailEntity>,
  ) {
    super(repo);
  }
}
