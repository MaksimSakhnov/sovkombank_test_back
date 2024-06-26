import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();


@Module({
  imports: [
    NestTypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: Number(process.env.POSTGRES_PORT),
      username: String(process.env.POSTGRES_USERNAME),
      password: String(process.env.POSTGRES_PASSWORD),
      database: String(process.env.POSTGRES_DATABASE),
      entities: ['dist/modules/**/*.entity.js'],
      synchronize: true,
      autoLoadEntities: true,
      // migrations: [ 'dist/db/migrations/**/*.js' ],
      // cli: { migrationsDir: 'src/db/migrations' },
    }),
  ],
})
export class TypeOrmModule {}
