import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'log_qna_detail' })
export class LogQnaDetailEntity extends DefaultEntity {
  @Column('datetime')
  enteredAt: Date;

  @Column()
  qnaId: string;
  @Column()
  userId: string;
  @Column()
  launchId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
