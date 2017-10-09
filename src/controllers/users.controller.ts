import { Controller, Get, Post, Req, Res, Next, Body} from '@nestjs/common';
import {User} from '../models/user';


@Controller('users')
export class UsersController {
  /* @Get()
  findAll(@Req() req, @Res() res, @Next() next, @Body() body) {
    return [];
  } */
  private users = [
      new User("Rohit", "9023288257"),
      new User("Mohit", "9780231456"),
  ];

  @Get()
  getUsers() {
      return this.users;
  }

  @Post()
  createUser(@Body() user: User) {
      this.users.push(user);
  }
}