import { ApiProperty, PickType } from '@nestjs/swagger';
import { DefaultDTO } from 'src/common/default.dto';

export class ChangelogDTO extends DefaultDTO {
  @ApiProperty({ description: '버전코드. ex: 0.1.2' })
  versionCode: string;
  @ApiProperty({
    description: '변경내용. 여러 변경내용을 ";"로 이어붙인 문자열',
  })
  content: string;
  @ApiProperty({ description: '업데이트 참고사항', nullable: true })
  ps: string | null;
  @ApiProperty({ description: '관리자 참고용 메모', nullable: true })
  memo: string | null;
}

export class CreateChangelogDTO extends PickType(ChangelogDTO, [
  'versionCode',
  'content',
  'ps',
  'memo',
]) {}
