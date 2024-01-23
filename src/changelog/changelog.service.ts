import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { ChangelogEntity } from './changelog.entity';

@Injectable()
export class ChangelogService extends CRUDService<ChangelogEntity> {
  constructor(
    @InjectRepository(ChangelogEntity) repo: Repository<ChangelogEntity>,
  ) {
    super(repo);
  }

  getHomeContents() {
    return this.findMany({
      select: ['id', 'createdAt', 'versionCode'],
      take: 5,
    });
  }
}
