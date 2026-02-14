import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TagsEntity } from './tags.entity';
import { InjectRepository } from '@nestjs/typeorm';

//we write reusable things and get from database 

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagsEntity)
    private readonly tagsRepository: Repository<TagsEntity>,
  ) {}

  async findAll(): Promise<TagsEntity[]> {
    return await this.tagsRepository.find();
  }
}
