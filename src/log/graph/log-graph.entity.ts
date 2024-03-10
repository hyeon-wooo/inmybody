import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'log_graph' })
export class LogGraphEntity extends DefaultEntity {
  @Column({ nullable: true })
  filterStart: string;
  @Column({ nullable: true })
  filterEnd: string;

  @Column()
  userId: string;
  @Column()
  launchId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
