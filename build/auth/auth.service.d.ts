import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
export declare class AuthService {
    private readonly adminService;
    private readonly jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    login(createAdminDto: CreateAdminDto, res: Response): Promise<{
        status: number;
        msg: string;
        admins: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../admin/schemas/admin.schema").Admin> & Omit<import("../admin/schemas/admin.schema").Admin & {
            _id: import("mongoose").Types.ObjectId;
        }, never>> & Omit<import("mongoose").Document<unknown, {}, import("../admin/schemas/admin.schema").Admin> & Omit<import("../admin/schemas/admin.schema").Admin & {
            _id: import("mongoose").Types.ObjectId;
        }, never> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    private getToken;
}
