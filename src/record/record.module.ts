import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordEntity } from './record.entity';
import { RecordAdmController } from './record.adm.controller';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([RecordEntity]), LogModule],
  controllers: [RecordController, RecordAdmController],
  providers: [RecordService],
})
export class RecordModule {}
