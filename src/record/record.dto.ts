import { ApiProperty, OmitType } from '@nestjs/swagger';
import { DefaultDTO } from 'src/common/default.dto';

export class RecordDTO extends DefaultDTO {
  @ApiProperty({ description: '검사일시' })
  d: Date;

  @ApiProperty({ description: '인바디점수', default: 0 })
  score: number;

  @ApiProperty({ description: '체중(kg)', default: 0 })
  weight: number;

  @ApiProperty({ description: '골격근량(kg)', default: 0 })
  muscleMass: number;

  @ApiProperty({ description: '체지방량(kg)', default: 0 })
  fatMass: number;

  @ApiProperty({ description: 'bmi(kg/m2)', default: 0 })
  bmi: number;

  @ApiProperty({ description: '체지방률(%)', default: 0 })
  fatPercent: number;

  @ApiProperty({ description: '체수분(L)', default: 0 })
  water: number;

  @ApiProperty({ description: '단백질(kg)', default: 0 })
  protein: number;

  @ApiProperty({ description: '무기질(%)', default: 0 })
  mineral: number;

  @ApiProperty({ description: '복부지방률(%)', default: 0 })
  waistHipRatio: number;

  @ApiProperty({ description: '내장지방레벨', default: 0 })
  visceralFatLevel: number;

  @ApiProperty({ description: '제지방량(kg)', default: 0 })
  leanBodyMass: number;

  @ApiProperty({ description: '기초대사량(kcal)', default: 0 })
  basalMetabolicRate: number;

  @ApiProperty({ description: '비만도(%)', default: 0 })
  obesity: number;

  @ApiProperty()
  userId: string;
}

export class CreateRecordBodyDTO extends OmitType(RecordDTO, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'userId',
]) {}

export class MyRecordQueryDTO {}
