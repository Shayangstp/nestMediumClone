import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TagsEntity } from './tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagsEntity])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagModule {}
