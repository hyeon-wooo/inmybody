import { Module } from '@nestjs/common';
import { ChangelogController } from './changelog.controller';
import { ChangelogService } from './changelog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangelogEntity } from './changelog.entity';
import { ChangelogApiControlller } from './changelog.api.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChangelogEntity])],
  controllers: [ChangelogController, ChangelogApiControlller],
  providers: [ChangelogService],
  exports: [ChangelogService],
})
export class ChangelogModule {}
