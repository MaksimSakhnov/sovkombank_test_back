import {
    Controller,
    Get,

    Req,
} from '@nestjs/common';
import {WordService} from "@modules/word/word.service";
import {Paginate, Paginated, PaginateQuery} from "nestjs-paginate";
import {WordEntity} from "@modules/word/word.entity";

@Controller('words')
export class WordController {
    constructor(private serv:WordService ) {}

    @Get()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getAllWarehouses(@Paginate() query: PaginateQuery): Promise<Paginated<WordEntity>> {
        return this.serv.getAll(query)
    }


}