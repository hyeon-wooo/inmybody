import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { join } from 'path';
import { IPushPayload } from './notification.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationService {
  private app: admin.app.App;

  constructor(private readonly configService: ConfigService) {
    if (admin.apps.length === 0)
      this.app = admin.initializeApp(
        {
          credential: admin.credential.cert(
            join(
              process.cwd(),
              configService.get('FIREBASE_SDK_KEY_FILE_NAME'),
            ),
          ),
        },
        'main-firebase',
      );
  }

  async sendViaAdmin(
    tokens: string[],
    payload?: IPushPayload,
    iosOptions?: {
      badge?: number;
    },
  ) {
    const messageBody: {
      notification?: { title?: string; body?: string };
      data?: Record<string, string>;
    } = payload ?? {};

    const sendResult = await this.app.messaging().sendEachForMulticast({
      ...messageBody,
      android: {
        priority: 'high',
        notification: payload.notification,
        ttl: 60 * 60 * 24,
      },
      apns: {
        payload: {
          aps: {
            contentAvailable: true,
            ...(iosOptions ?? {}),
          },
        },
      },
      tokens,
    });

    return;
  }
}
