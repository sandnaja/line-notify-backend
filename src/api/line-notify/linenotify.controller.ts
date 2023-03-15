import { Controller, Post, Body } from '@nestjs/common';
import { LineNotifyService } from './linenotify.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LineNotifyDto } from './linenotify.dto';
@ApiTags('LineNotifications')
@Controller('LineNotifications')
export class LineNotificationController {
  constructor(private readonly lineNotifyService: LineNotifyService) {}

  @Post('send-notify')
  @ApiBody({
    description:
      'The Description for the Post Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.',
    examples: {
      a: {
        summary: 'Example Body',
        description: 'Description for when an empty body is used',
        value: {
          companyname: 'companyname',
          soid: 'soid',
          url: 'url',
        },
      },
    },
  })
  async sendNotification(@Body() lineNotifyDto: LineNotifyDto): Promise<void>{
    return await this.lineNotifyService.sendNotification(lineNotifyDto);
  }
}
