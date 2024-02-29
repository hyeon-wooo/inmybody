import { ApiProperty } from '@nestjs/swagger';

export class SaveScreenHistoryDTO {
  @ApiProperty({})
  screenName: string;
}
