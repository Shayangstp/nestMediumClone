import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'wolfi',
      password: 'Shayan5262',
      database: 'mediumclone',
      autoLoadEntities: true,
      synchronize: false, // use migration instead
    }),

    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
