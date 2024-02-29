import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LogService } from './log.service';
import { JwtPassGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { SaveScreenHistoryDTO } from './log.dto';
import { LaunchID, TLaunchInfo } from 'src/common/aa';

@Controller('log')
export class LogController {
  constructor(private service: LogService) {}

  @Post('screen')
  @UseGuards(JwtPassGuard)
  async screen(
    @Body() body: SaveScreenHistoryDTO,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    this.service.saveScreenHistory(user.id, body.screenName, launch);
  }
}
