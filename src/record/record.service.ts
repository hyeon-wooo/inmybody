import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { RecordEntity } from './record.entity';

@Injectable()
export class RecordService extends CRUDService<RecordEntity> {
  constructor(@InjectRepository(RecordEntity) repo: Repository<RecordEntity>) {
    super(repo);
  }
}
