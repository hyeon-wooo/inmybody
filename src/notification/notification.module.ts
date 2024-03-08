import { Global, Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Global()
@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
