import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { LogChangelogDetailEntity } from './log-changelog-detail.entity';

@Injectable()
export class LogChangelogDetailService extends CRUDService<LogChangelogDetailEntity> {
  constructor(
    @InjectRepository(LogChangelogDetailEntity)
    repo: Repository<LogChangelogDetailEntity>,
  ) {
    super(repo);
  }
}
