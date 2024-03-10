import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { LogGraphEntity } from './log-graph.entity';

@Injectable()
export class LogGraphService extends CRUDService<LogGraphEntity> {
  constructor(
    @InjectRepository(LogGraphEntity) repo: Repository<LogGraphEntity>,
  ) {
    super(repo);
  }
}
