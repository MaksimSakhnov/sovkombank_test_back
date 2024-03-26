import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('words')
export class WordEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'word', type: 'varchar', nullable: false })
    word: string;

    @Column({ name: 'pos', type: 'varchar', nullable: false })
    pos: string;

    @Column({ name: 'level', type: 'varchar', nullable: false })
    level: string;

    @Column({ name: 'definition_url', type: 'varchar', nullable: false })
    definition_url: string;

    @Column({ name: 'voice_url', type: 'varchar', nullable: false })
    voice_url: string;
}