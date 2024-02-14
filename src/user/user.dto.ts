import { ApiProperty, PickType } from '@nestjs/swagger';

export class SignUpDTO {
  @ApiProperty({ description: '입력한 이메일' })
  email: string;

  @ApiProperty({ description: '' })
  name: string;

  @ApiProperty({ description: '입력한 비밀번호' })
  password: string;
}

export class SignInDTO {
  @ApiProperty({ description: '입력한 이메일' })
  email: string;

  @ApiProperty({ description: '입력한 비밀번호' })
  password: string;
}

export class ChangePasswordDTO extends PickType(SignUpDTO, [
  'email',
  'password',
]) {}
