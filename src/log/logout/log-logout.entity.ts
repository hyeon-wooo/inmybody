import { DefaultEntity } from 'src/common/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'log_logout', orderBy: { createdAt: 'DESC' } })
export class LogoutLogEntity extends DefaultEntity {
  @Column()
  userId: string;
}
