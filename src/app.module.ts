import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tags.module';
import { TagsController } from './tag/tags.controller';
import { TagsService } from './tag/tags.service';

@Module({
  imports: [TagModule],
  controllers: [AppController, TagsController],
  providers: [AppService, TagsService],
})
export class AppModule {}
