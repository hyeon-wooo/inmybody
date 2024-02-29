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
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      synchronize: true,
      entities: ['dist/**/*.entity.js'],
    }),
    UserModule,
    AuthModule,
    RecordModule,
    NoticeModule,
    ChangelogModule,
    UserFcmModule,
    QnaModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
