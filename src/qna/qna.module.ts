import { Module } from '@nestjs/common';
import { QnaController } from './qna.controller';
import { QnaService } from './qna.service';
import { QnaAdmController } from './qna.adm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QnaEntity } from './qna.entity';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([QnaEntity]), LogModule],
  controllers: [QnaController, QnaAdmController],
  providers: [QnaService],
  exports: [QnaService],
})
export class QnaModule {}
