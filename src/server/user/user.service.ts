import { Injectable } from '@nestjs/common';

const users = ['geon', 'shaheem'];

@Injectable()
export class UserService {
  getAll() {
    return users;
  }
}
