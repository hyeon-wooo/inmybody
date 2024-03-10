import { Controller, Get, Param, Render, Req, UseGuards } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { dateToStr } from 'src/lib/utils/datetime';
import { LogService } from 'src/log/log.service';
import { JwtPassGuard } from 'src/auth/jwt.guard';
import { LaunchID, TLaunchInfo } from 'src/common/aa';
import { Request } from 'express';

@Controller({ path: 'changelog' })
export class ChangelogController {
  constructor(
    private service: ChangelogService,
    private logService: LogService,
  ) {}

  @Get()
  async list() {
    const found = await this.service.findMany({
      select: ['id', 'createdAt', 'versionCode'],
    });

    return {
      changelogs: found,
    };
  }

  @Get('create')
  @Render('changelog/create')
  async create() {
    return {
      headerTitle: '업데이트 변경사항 등록',
    };
  }

  @Get('/:id')
  @UseGuards(JwtPassGuard)
  async detail(
    @Param('id') changelogId: string,
    @Req() { user }: Request,
    @LaunchID() launch: TLaunchInfo,
  ) {
    // log 저장
    if (user)
      this.logService.saveChangelogDetail(
        changelogId,
        user.id,
        launch.launchId,
      );

    const found = await this.service.findOne(changelogId);

    return {
      changelog: found
        ? {
            ...found,
            content: found.content.toString().split(';'),
          }
        : null,
    };
  }
}
