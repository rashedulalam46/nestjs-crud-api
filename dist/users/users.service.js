"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, '../../users.json');
let UsersService = class UsersService {
    readData() {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    writeData(data) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
    findAll() {
        return this.readData();
    }
    findOne(id) {
        const users = this.readData();
        const user = users.find(u => u.id === id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    create(user) {
        const users = this.readData();
        const newUser = { id: Date.now(), ...user };
        users.push(newUser);
        this.writeData(users);
        return newUser;
    }
    update(id, updatedUser) {
        const users = this.readData();
        const index = users.findIndex(u => u.id === id);
        if (index === -1)
            throw new common_1.NotFoundException('User not found');
        users[index] = { ...users[index], ...updatedUser };
        this.writeData(users);
        return users[index];
    }
    delete(id) {
        const users = this.readData();
        const newUsers = users.filter(u => u.id !== id);
        if (newUsers.length === users.length)
            throw new common_1.NotFoundException('User not found');
        this.writeData(newUsers);
        return { message: 'User deleted' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map