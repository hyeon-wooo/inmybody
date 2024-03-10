import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LogService } from './log.service';
import { JwtPassGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { SaveLaunchDTO, SaveScreenHistoryDTO } from './log.dto';
import { LaunchID, TLaunchInfo } from 'src/common/aa';

@Controller('log')
export class LogController {
  constructor(private service: LogService) {}

  @Post('launch')
  @UseGuards(JwtPassGuard)
  async launch(
    @Body() body: SaveLaunchDTO,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    this.service.saveLaunch(launch, body, user?.id);

    return true;
  }

  @Post('screen')
  @UseGuards(JwtPassGuard)
  async screen(
    @Body() body: SaveScreenHistoryDTO,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    if (body.screenName === 'Splash') {
      const { screenName, deviceName, os, version } = body;
      if (deviceName && os && version)
        this.service.saveLaunch(launch, { deviceName, os, version }, user?.id);
    }

    this.service.saveScreenHistory(
      user?.id ?? 'unknown',
      body.screenName,
      launch,
    );

    return true;
  }
}
