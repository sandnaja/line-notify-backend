import { Module } from "@nestjs/common";
import { Linenotify } from "./line-notify/linenotify.module";

@Module({
    imports: [
        Linenotify,
    ],
})
export class ApiModule {}