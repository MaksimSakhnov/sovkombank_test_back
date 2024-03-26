import { Module } from '@nestjs/common';
import {ConfigModule} from "./config.module";
import {TypeOrmModule} from "@db/typeorm.module";
import {WordModule} from "@modules/word/word.module";


@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    WordModule
  ],
})
export class AppModule {}
