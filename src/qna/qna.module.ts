import { Module } from '@nestjs/common';
import { QnaController } from './qna.controller';
import { QnaService } from './qna.service';
import { QnaApiController } from './qna.api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QnaEntity } from './qna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QnaEntity])],
  controllers: [QnaController, QnaApiController],
  providers: [QnaService],
  exports: [QnaService],
})
export class QnaModule {}
