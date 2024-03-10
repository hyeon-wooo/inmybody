import { Injectable } from '@nestjs/common';
import { LogoutLogService } from './logout/log-logout.service';
import { ScreenHistoryLogService } from './screen-history/log-screen-history.service';
import { TLaunchInfo } from 'src/common/aa';
import { SaveLaunchDTO } from './log.dto';
import { LaunchService } from './launch/launch.service';
import { LogChangelogDetailService } from './changelog-detail/log-changelog-detail.service';
import { LogNoticeDetailService } from './notice-detail/log-notice-detail.service';
import { LogQnaDetailService } from './qna-detail/log-qna-detail.service';
import { LogGraphService } from './graph/log-graph.service';

@Injectable()
export class LogService {
  constructor(
    private launchService: LaunchService,
    private logoutService: LogoutLogService,
    private screenService: ScreenHistoryLogService,
    private changelogDetailService: LogChangelogDetailService,
    private noticeDetailService: LogNoticeDetailService,
    private qnaDetailService: LogQnaDetailService,
    private graphService: LogGraphService,
  ) {}

  saveLaunch(launch: TLaunchInfo, device: SaveLaunchDTO, userId?: string) {
    const { launchId, launchTimeISO, deviceId } = launch;

    const [os, osVersion] = device.os.split(':');

    this.launchService.create({
      id: launchId,
      launchedAt: new Date(launchTimeISO),
      deviceId,
      deviceName: device.deviceName,
      os: os === 'android' ? 'a' : 'i',
      osVersion,
      appVersion: device.version,
      userId,
    });
  }

  saveLogout(userId: string) {
    return this.logoutService.create({ userId });
  }

  saveScreenHistory(userId: string, screenName: string, launch: TLaunchInfo) {
    if (!launch) return false;

    return this.screenService.create({
      userId,
      screenName,
      launchId: launch.launchId,
      enteredAt: new Date(launch.launchTimeISO),
    });
  }

  saveChangelogDetail(changelogId: string, userId: string, launchId: string) {
    return this.changelogDetailService.create({
      changelogId,
      userId,
      launchId,
      enteredAt: new Date(),
    });
  }

  saveNoticeDetail(noticeId: string, userId: string, launchId: string) {
    return this.noticeDetailService.create({
      noticeId,
      userId,
      launchId,
      enteredAt: new Date(),
    });
  }

  saveQnaDetail(qnaId: string, userId: string, launchId: string) {
    return this.qnaDetailService.create({
      qnaId,
      userId,
      launchId,
      enteredAt: new Date(),
    });
  }

  saveGraph(
    userId: string,
    launchId: string,
    filter: {
      start?: string;
      end?: string;
    },
  ) {
    return this.graphService.create({
      filterStart: filter.start ?? null,
      filterEnd: filter.end ?? null,
      userId,
      launchId,
    });
  }
}
