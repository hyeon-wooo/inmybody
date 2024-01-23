import { ApiProperty, PickType } from '@nestjs/swagger';
import { DefaultDTO } from 'src/common/default.dto';

export class NoticeDTO extends DefaultDTO {
  @ApiProperty({ description: '제목' })
  title: string;
  @ApiProperty({ description: '내용' })
  content: string;
  @ApiProperty({ description: '상단 고정 여부' })
  fixed: boolean;
  @ApiProperty({ nullable: true, description: '관리자 참고용 메모' })
  memo: string | null;
}

export class CreateNoticeDTO extends PickType(NoticeDTO, [
  'title',
  'content',
  'fixed',
  'memo',
]) {}
