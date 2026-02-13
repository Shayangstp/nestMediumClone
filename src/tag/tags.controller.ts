import { Controller, Get } from '@nestjs/common';
import { TagsService } from './tags.service';

//define all our API's

//no buisines or logic in here also database all in sevice

@Controller('tags') // all controllers retrun tags URL prefix
export class TagsController {
  //for service should define this
  constructor(private readonly tagService: TagsService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }
}
