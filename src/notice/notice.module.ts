import { Module } from '@nestjs/common';
import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeEntity } from './notice.entity';
import { NoticeApiController } from './notice.api.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeEntity])],
  controllers: [NoticeController, NoticeApiController],
  providers: [NoticeService],
  exports: [NoticeService],
})
export class NoticeModule {}
