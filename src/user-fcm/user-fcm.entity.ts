import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'user_fcm' })
export class UserFcmEntity extends DefaultEntity {
  @Column({ comment: 'FCM토큰' })
  token: string;

  @Column('boolean', {
    default: true,
    comment: '활성화 여부. 사용자당 두개 이상의 토큰이 활성화될 수 없음.',
  })
  active: boolean;

  @Column({ comment: '사용자ID (user.id)' })
  userId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
