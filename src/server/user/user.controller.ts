import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  public findAll() {
    return this.userService.getAll();
  }
}
