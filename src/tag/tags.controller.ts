import { Controller, Get } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsEntity } from './tags.entity';

//define all our API's for api view but if too long we do it from service

//no buisines or logic in here also database all in sevice

@Controller('tags') // all controllers retrun tags URL prefix
export class TagsController {
  //for service should define this
  constructor(private readonly tagService: TagsService) {}

  @Get()
  // async findAll(): Promise<TagsEntity[]> {
  // from database
  // return await this.tagService.findAll();

  // formated version
  async findAll(): Promise<{ tags: string[] }> {
    const tags = this.tagService.findAll();

    return {
      tags: (await tags).map((tag) => tag.name),
    };
  }
}
