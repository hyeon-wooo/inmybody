import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private service: NotificationService) {}

  @Post()
  async send(@Body() body: { token: string; title: string; msg: string }) {
    this.service.sendViaAdmin([body.token], {
      notification: { title: body.title, body: body.msg },
    });
  }
}
