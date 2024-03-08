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

  async register(userId: string, fcm: string) {
    const already = await this.findMany({ where: { userId, active: true } });
    if (already.length) {
      // 이미 활성화된 fcm이 다시 들어오면 무시
      if (fcm === already.find((a) => a.active).token) return;

      await this.updateWithWhere({ userId, active: true }, { active: false });
    }

    await this.create({ userId, token: fcm });
    return;
  }
}
