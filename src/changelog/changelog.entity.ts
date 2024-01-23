import { DefaultEntity } from 'src/common/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'change_log', orderBy: { versionCode: 'DESC' } })
export class ChangelogEntity extends DefaultEntity {
  @Column({ comment: '버전코드. ex: 0.1.2' })
  versionCode: string;
  @Column('blob', {
    comment: '변경내용. 여러 변경내용을 ";"로 이어붙인 문자열',
  })
  content: string;
  @Column({ comment: '업데이트 참고사항', nullable: true })
  ps: string | null;
  @Column({ comment: '관리자 참고용 메모', nullable: true })
  memo: string | null;
}
