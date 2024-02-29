import { Global, Module } from '@nestjs/common';
import { UserFcmController } from './user-fcm.controller';
import { UserFcmService } from './user-fcm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFcmEntity } from './user-fcm.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserFcmEntity])],
  controllers: [UserFcmController],
  providers: [UserFcmService],
  exports: [UserFcmService],
})
export class UserFcmModule {}
