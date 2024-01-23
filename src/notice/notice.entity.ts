import { DefaultEntity } from 'src/common/default.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'notice', orderBy: { createdAt: 'DESC' } })
export class NoticeEntity extends DefaultEntity {
  @Column({ comment: '제목' })
  title: string;
  @Column('longblob', { comment: '내용' })
  content: string;

  @Column('boolean', { comment: '상단 고정 여부', default: false })
  fixed: boolean;

  @Column({ nullable: true, comment: '관리자 참고용 메모' })
  memo: string | null;
}
