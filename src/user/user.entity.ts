import { DefaultEntity } from 'src/common/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends DefaultEntity {
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  salt: string;

  @Column({ nullable: true, comment: '관리자 참고용 메모' })
  memo: string | null;

  @Column('int', { comment: 'USR: 1~99, ADM: 100~', default: 1 })
  level: number;
}
