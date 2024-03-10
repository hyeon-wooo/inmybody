import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'log_notice_detail' })
export class LogNoticeDetailEntity extends DefaultEntity {
  @Column('datetime')
  enteredAt: Date;

  @Column()
  noticeId: string;
  @Column()
  userId: string;
  @Column()
  launchId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
