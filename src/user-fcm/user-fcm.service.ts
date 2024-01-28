import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { UserFcmEntity } from './user-fcm.entity';

@Injectable()
export class UserFcmService extends CRUDService<UserFcmEntity> {
  constructor(
    @InjectRepository(UserFcmEntity) repo: Repository<UserFcmEntity>,
  ) {
    super(repo);
  }
}
