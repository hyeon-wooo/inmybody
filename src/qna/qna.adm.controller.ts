import { Controller, UseGuards } from '@nestjs/common';
import { QnaService } from './qna.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Roles } from 'src/auth/role/role.decorator';
import { ERole } from 'src/auth/role/role.enum';

@Controller({ path: 'adm/qna' })
@Roles(ERole.ADM)
@UseGuards(JwtAuthGuard)
export class QnaAdmController {
  constructor(private service: QnaService) {}
}
