import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../../users.json');

@Injectable()
export class UsersService {
  private readData() {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  private writeData(data: any) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  findAll() {
    return this.readData();
  }

  findOne(id: number) {
    const users = this.readData();
    const user = users.find(u => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(user: any) {
    const users = this.readData();
    const newUser = { id: Date.now(), ...user };
    users.push(newUser);
    this.writeData(users);
    return newUser;
  }

  update(id: number, updatedUser: any) {
    const users = this.readData();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException('User not found');
    users[index] = { ...users[index], ...updatedUser };
    this.writeData(users);
    return users[index];
  }

  delete(id: number) {
    const users = this.readData();
    const newUsers = users.filter(u => u.id !== id);
    if (newUsers.length === users.length)
      throw new NotFoundException('User not found');
    this.writeData(newUsers);
    return { message: 'User deleted' };
  }
}
