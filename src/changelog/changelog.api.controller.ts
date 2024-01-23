import { Body, Controller, Post } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { CreateChangelogDTO } from './changelog.dto';

@Controller({ path: 'api/changelog' })
export class ChangelogApiControlller {
  constructor(private service: ChangelogService) {}

  @Post()
  async create(@Body() body: CreateChangelogDTO) {
    this.service.create(body);
  }
}
