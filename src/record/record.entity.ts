import { DefaultEntity } from 'src/common/default.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'inbody_record', orderBy: { d: 'ASC' } })
export class RecordEntity extends DefaultEntity {
  @Index()
  @Column('datetime', { comment: '검사일시' })
  d: Date;

  @Column('float', { comment: '인바디점수', default: 0 })
  score: number;

  @Column('float', { comment: '체중(kg)', default: 0 })
  weight: number;

  @Column('float', { comment: '골격근량(kg)', default: 0 })
  muscleMass: number;

  @Column('float', { comment: '체지방량(kg)', default: 0 })
  fatMass: number;

  @Column('float', { comment: 'bmi(kg/m2)', default: 0 })
  bmi: number;

  @Column('float', { comment: '체지방률(%)', default: 0 })
  fatPercent: number;

  @Column('float', { comment: '체수분(L)', default: 0 })
  water: number;

  @Column('float', { comment: '단백질(kg)', default: 0 })
  protein: number;

  @Column('float', { comment: '무기질(%)', default: 0 })
  mineral: number;

  @Column('float', { comment: '복부지방률(%)', default: 0 })
  waistHipRatio: number;

  @Column('int', { comment: '내장지방레벨', default: 0 })
  visceralFatLevel: number;

  @Column('float', { comment: '제지방량(kg)', default: 0 })
  leanBodyMass: number;

  @Column('int', { comment: '기초대사량(kcal)', default: 0 })
  basalMetabolicRate: number;

  @Column('float', { comment: '비만도(%)', default: 0 })
  obesity: number;

  @Column({ nullable: true, comment: '관리자 참고용 메모' })
  memo: string | null;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
