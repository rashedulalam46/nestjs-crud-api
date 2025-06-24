export declare class UsersService {
    private readData;
    private writeData;
    findAll(): any;
    findOne(id: number): any;
    create(user: any): any;
    update(id: number, updatedUser: any): any;
    delete(id: number): {
        message: string;
    };
}
