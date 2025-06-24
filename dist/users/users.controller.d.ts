import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): any;
    getOne(id: number): any;
    create(body: any): any;
    update(id: number, body: any): any;
    delete(id: number): {
        message: string;
    };
}
