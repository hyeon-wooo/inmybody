import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordEntity } from './record.entity';
import { RecordApiController } from './record.api.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RecordEntity])],
  controllers: [RecordController, RecordApiController],
  providers: [RecordService],
})
export class RecordModule {}
