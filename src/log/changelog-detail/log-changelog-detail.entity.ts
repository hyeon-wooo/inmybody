import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'log_changelog_detail' })
export class LogChangelogDetailEntity extends DefaultEntity {
  @Column('datetime')
  enteredAt: Date;

  @Column()
  changelogId: string;
  @Column()
  userId: string;
  @Column()
  launchId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
