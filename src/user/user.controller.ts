import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './CreateUser.dto';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  // DTO is createUser Body
  @Post('users')
  async createUser(@Body('user') createUserDto: CreateUserDto) {
    return this.UserService.createUser(createUserDto);
  }
}
