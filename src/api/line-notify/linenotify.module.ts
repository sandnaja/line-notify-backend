import { Module } from "@nestjs/common";
import { LineNotificationController } from "./linenotify.controller";
import { LineNotifyService } from "./linenotify.service";

@Module({
    imports: [],
    controllers: [LineNotificationController],
    providers: [LineNotifyService],
})
export class Linenotify {}