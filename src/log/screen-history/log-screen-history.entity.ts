import { DefaultEntity } from 'src/common/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'log_screen_history', orderBy: { createdAt: 'DESC' } })
export class ScreenHistoryLogEntity extends DefaultEntity {
  @Column('timestamp', {
    comment: 'insert되는 시간(createdAt)이 아닌 api서버에서 측정한 진입시간',
  })
  enteredAt: Date;

  @Column({ nullable: true })
  userId: string;

  @Column({ comment: '진입한 화면ID' })
  screenName: string;

  @Column({})
  launchId: string;

  @Column({})
  deviceId: string;
}
