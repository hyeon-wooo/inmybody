import { Controller, Get, Param, Render } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { dateToStr } from 'src/lib/utils/datetime';

@Controller({ path: 'changelog' })
export class ChangelogController {
  constructor(private service: ChangelogService) {}

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
  async detail(@Param('id') changelogId: string) {
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
