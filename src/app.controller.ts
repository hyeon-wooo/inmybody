import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtPassGuard } from './auth/jwt.guard';
import { Request } from 'express';
import { UserService } from './user/user.service';
import { NoticeService } from './notice/notice.service';
import { dateToStr } from './lib/utils/datetime';
import { ChangelogService } from './changelog/changelog.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
    private noticeService: NoticeService,
    private changelogService: ChangelogService,
  ) {}

  @Get('main')
  @UseGuards(JwtPassGuard)
  async getHello(@Req() { user }: Request) {
    const notices = await this.noticeService.getHomeContents();
    const changelogs = await this.changelogService.getHomeContents();
    return {
      notices: notices.map((notice) => {
        return {
          ...notice,
          createdAt: dateToStr(notice.createdAt),
        };
      }),
      changelogs: changelogs.map((changelog) => {
        return {
          ...changelog,
          createdAt: dateToStr(changelog.createdAt),
        };
      }),
    };
  }

  @Get()
  async timestamp() {
    return { ts: Date.now() };
  }

  @Get('signin')
  @Render('user/signin')
  signInPage() {
    return;
  }

  @Get('signup')
  @Render('user/signup')
  signUpPage() {
    return;
  }
}
