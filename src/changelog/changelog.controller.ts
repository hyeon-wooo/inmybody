import { Controller, Get, Param, Render } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { dateToStr } from 'src/lib/utils/datetime';

@Controller({ path: 'changelog' })
export class ChangelogController {
  constructor(private service: ChangelogService) {}

  @Get()
  @Render('changelog/list')
  async list() {
    const found = await this.service.findMany({
      select: ['id', 'createdAt', 'versionCode'],
    });

    return {
      headerTitle: '업데이트',
      changelogs: found.map((changelog) => {
        return { ...changelog, createdAt: dateToStr(changelog.createdAt) };
      }),
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
  @Render('changelog/detail')
  async detail(@Param('id') changelogId: string) {
    const found = await this.service.findOne(changelogId);

    return {
      headerTitle: '업데이트',
      changelog: found
        ? {
            ...found,
            createdAt: dateToStr(found.createdAt),
            content: found.content.toString().split(';'),
          }
        : null,
    };
  }
}
