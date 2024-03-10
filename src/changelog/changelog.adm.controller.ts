import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { CreateChangelogDTO } from './changelog.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Roles } from 'src/auth/role/role.decorator';
import { ERole } from 'src/auth/role/role.enum';
import { RolesGuard } from 'src/auth/role/role.guard';

@Controller({ path: 'adm/changelog' })
@Roles(ERole.ADM)
@UseGuards(JwtAuthGuard)
export class ChangelogAdmControlller {
  constructor(private service: ChangelogService) {}

  @Post()
  async create(@Body() body: CreateChangelogDTO) {
    this.service.create(body);
  }
}
