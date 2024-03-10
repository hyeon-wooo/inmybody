import { Global, Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogoutLogService } from './logout/log-logout.service';
import { LogoutLogEntity } from './logout/log-logout.entity';
import { ScreenHistoryLogEntity } from './screen-history/log-screen-history.entity';
import { ScreenHistoryLogService } from './screen-history/log-screen-history.service';
import { LogChangelogDetailEntity } from './changelog-detail/log-changelog-detail.entity';
import { LogChangelogDetailService } from './changelog-detail/log-changelog-detail.service';
import { LaunchEntity } from './launch/launch.entity';
import { LaunchService } from './launch/launch.service';
import { LogNoticeDetailEntity } from './notice-detail/log-notice-detail.entity';
import { LogQnaDetailEntity } from './qna-detail/log-qna-detail.entity';
import { LogGraphEntity } from './graph/log-graph.entity';
import { LogNoticeDetailService } from './notice-detail/log-notice-detail.service';
import { LogQnaDetailService } from './qna-detail/log-qna-detail.service';
import { LogGraphService } from './graph/log-graph.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      LaunchEntity,
      LogoutLogEntity,
      ScreenHistoryLogEntity,
      LogChangelogDetailEntity,
      LogNoticeDetailEntity,
      LogQnaDetailEntity,
      LogGraphEntity,
    ]),
  ],
  controllers: [LogController],
  providers: [
    LaunchService,
    LogService,
    LogoutLogService,
    ScreenHistoryLogService,
    LogChangelogDetailService,
    LogNoticeDetailService,
    LogQnaDetailService,
    LogGraphService,
  ],
  exports: [LogService],
})
export class LogModule {}
