import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {WordEntity} from "@modules/word/word.entity";
import {FilterOperator, FilterSuffix, paginate, Paginated, PaginateQuery} from 'nestjs-paginate';


@Injectable()
export class WordService {
    constructor(
        @InjectRepository(WordEntity)
        private readonly repo: Repository<WordEntity>,
    ) {}

    public async getAll(query: PaginateQuery): Promise<Paginated<WordEntity>>  {
        return   paginate(query, this.repo, {
            sortableColumns: ['id', 'word', 'level', 'pos'],
            nullSort: 'last',
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['word', 'pos'],
            select: ['id', 'word', 'definition_url', 'level', 'pos', 'voice_url'],
            filterableColumns: {
                name: [FilterOperator.EQ, FilterSuffix.NOT],
                pos: true,
            },
        })
    }



}