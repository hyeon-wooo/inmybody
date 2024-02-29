import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { LogoutLogEntity } from './log-logout.entity';

@Injectable()
export class LogoutLogService extends CRUDService<LogoutLogEntity> {
  constructor(
    @InjectRepository(LogoutLogEntity) repo: Repository<LogoutLogEntity>,
  ) {
    super(repo);
  }
}
