import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LineNotifyService {
  private readonly LINE_NOTIFY_API_URL =
    'https://notify-api.line.me/api/notify';

  async sendNotification(message: string): Promise<void> {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.LINE_NOTIFY_ACCESS_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      const data = new URLSearchParams();
      data.append('message', message);
      await axios.post(this.LINE_NOTIFY_API_URL, data, config);
    } catch (error) {
      console.log('Error sendNotification: ', error);
    }
  }
}
