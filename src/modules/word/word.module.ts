import {WordEntity} from "@modules/word/word.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {WordController} from "@modules/word/word.controller";
import {WordService} from "@modules/word/word.service";

@Module({
    imports: [TypeOrmModule.forFeature([WordEntity])],
    controllers: [WordController],
    providers: [WordService]
})


export class WordModule{}