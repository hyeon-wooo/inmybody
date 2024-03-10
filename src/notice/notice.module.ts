import { Module } from '@nestjs/common';
import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeEntity } from './notice.entity';
import { NoticeAdmController } from './notice.adm.controller';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeEntity]), LogModule],
  controllers: [NoticeController, NoticeAdmController],
  providers: [NoticeService],
  exports: [NoticeService],
})
export class NoticeModule {}
