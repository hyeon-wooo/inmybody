import { Global, Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogoutLogService } from './logout/log-logout.service';
import { LogoutLogEntity } from './logout/log-logout.entity';
import { ScreenHistoryLogEntity } from './screen-history/log-screen-history.entity';
import { ScreenHistoryLogService } from './screen-history/log-screen-history.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([LogoutLogEntity, ScreenHistoryLogEntity]),
  ],
  controllers: [LogController],
  providers: [LogService, LogoutLogService, ScreenHistoryLogService],
  exports: [LogService],
})
export class LogModule {}
