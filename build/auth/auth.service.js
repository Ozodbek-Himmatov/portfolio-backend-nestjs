"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const admin_service_1 = require("../admin/admin.service");
let AuthService = class AuthService {
    constructor(adminService, jwtService) {
        this.adminService = adminService;
        this.jwtService = jwtService;
    }
    async login(createAdminDto, res) {
        const { username, password } = createAdminDto;
        const admins = await this.adminService.findOneLogin(username);
        if (!admins) {
            throw new common_1.HttpException({ msg: `Bunday foydalanuvchi yo'q !!!` }, common_1.HttpStatus.BAD_REQUEST);
        }
        const isMatchPass = await bcrypt.compare(password, admins.password);
        if (!isMatchPass) {
            throw new common_1.UnauthorizedException({
                msg: `Parol yoki Login xato kiritilgan !!!`,
            });
        }
        const tokens = await this.getToken(admins.id, 'ADMIN');
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.adminService.update(admins.id, {
            token: hashed_refresh_token,
        });
        res.cookie('token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            status: 200,
            msg: 'Success!',
            admins: updatedUser,
            tokens,
        };
        return response;
    }
    async getToken(id, role) {
        const payload = { id, role };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return { access_token: accessToken, refresh_token: refreshToken };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map