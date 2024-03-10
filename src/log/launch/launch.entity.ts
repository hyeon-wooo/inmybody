import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'launch' })
export class LaunchEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column('datetime')
  launchedAt: Date;

  @Column()
  deviceId: string;

  @Column()
  deviceName: string;

  @Column()
  os: string;

  @Column()
  osVersion: string;

  @Column()
  appVersion: string;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
