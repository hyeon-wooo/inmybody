import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RecordModule } from './record/record.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { NoticeModule } from './notice/notice.module';
import { ChangelogModule } from './changelog/changelog.module';
import { UserFcmModule } from './user-fcm/user-fcm.module';
import { QnaModule } from './qna/qna.module';
import { LogModule } from './log/log.module';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config';
import { DBConfigService } from './config/db';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DBConfigService,
    }),
    UserModule,
    AuthModule,
    RecordModule,
    NoticeModule,
    ChangelogModule,
    UserFcmModule,
    QnaModule,
    LogModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
