import { Module } from '@nestjs/common';
import { ChangelogController } from './changelog.controller';
import { ChangelogService } from './changelog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangelogEntity } from './changelog.entity';
import { ChangelogAdmControlller } from './changelog.adm.controller';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([ChangelogEntity]), LogModule],
  controllers: [ChangelogController, ChangelogAdmControlller],
  providers: [ChangelogService],
  exports: [ChangelogService],
})
export class ChangelogModule {}
