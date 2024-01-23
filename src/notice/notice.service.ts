import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/common/crud.service';
import { Repository } from 'typeorm';
import { NoticeEntity } from './notice.entity';

@Injectable()
export class NoticeService extends CRUDService<NoticeEntity> {
  constructor(@InjectRepository(NoticeEntity) repo: Repository<NoticeEntity>) {
    super(repo);
  }

  async getHomeContents() {
    const fields: (keyof NoticeEntity)[] = [
      'id',
      'createdAt',
      'title',
      'fixed',
    ];

    const fixed = await this.findMany({
      select: fields,
      where: { fixed: true },
    });
    const notFixed = await this.findMany({
      take: 5,
      select: fields,
      where: { fixed: false },
    });
    return [...fixed, ...notFixed];
  }
}
