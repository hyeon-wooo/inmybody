import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { LogQnaDetailEntity } from './log-qna-detail.entity';

@Injectable()
export class LogQnaDetailService extends CRUDService<LogQnaDetailEntity> {
  constructor(
    @InjectRepository(LogQnaDetailEntity) repo: Repository<LogQnaDetailEntity>,
  ) {
    super(repo);
  }
}
