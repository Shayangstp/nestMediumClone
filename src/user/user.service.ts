import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './CreateUser.dto';

@Injectable()
export class UserService {
  async createUser(createDto: CreateUserDto) {
    console.log(createDto);
    return 'create user from service';
  }
}
