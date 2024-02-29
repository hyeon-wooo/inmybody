import { Injectable } from '@nestjs/common';
import { LogoutLogService } from './logout/log-logout.service';
import { ScreenHistoryLogService } from './screen-history/log-screen-history.service';
import { TLaunchInfo } from 'src/common/aa';

@Injectable()
export class LogService {
  constructor(
    private logoutService: LogoutLogService,
    private screenService: ScreenHistoryLogService,
  ) {}

  saveLogout(userId: string) {
    return this.logoutService.create({ userId });
  }

  saveScreenHistory(userId: string, screenName: string, launch: TLaunchInfo) {
    if (!launch) return false;

    return this.screenService.create({
      userId,
      screenName,
      launchId: launch.launchId,
      deviceId: launch.deviceId,
      enteredAt: new Date(launch.launchTimeISO),
    });
  }
}
