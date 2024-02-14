import { Controller } from '@nestjs/common';
import { QnaService } from './qna.service';

@Controller({ path: 'api/qna' })
export class QnaApiController {
  constructor(private service: QnaService) {}
}
