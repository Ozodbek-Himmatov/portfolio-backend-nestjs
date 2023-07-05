"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const addresses_module_1 = require("./addresses/addresses.module");
const admin_module_1 = require("./admin/admin.module");
const post_reactions_module_1 = require("./post-reactions/post-reactions.module");
const posts_module_1 = require("./posts/posts.module");
const projects_module_1 = require("./projects/projects.module");
const reactions_module_1 = require("./reactions/reactions.module");
const skills_module_1 = require("./skills/skills.module");
const auth_module_1 = require("./auth/auth.module");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'swagger-static'),
                serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
            }),
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            addresses_module_1.AddressesModule,
            admin_module_1.AdminModule,
            post_reactions_module_1.PostReactionsModule,
            posts_module_1.PostsModule,
            projects_module_1.ProjectsModule,
            reactions_module_1.ReactionsModule,
            skills_module_1.SkillsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map