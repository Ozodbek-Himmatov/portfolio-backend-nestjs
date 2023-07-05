"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionsModule = void 0;
const common_1 = require("@nestjs/common");
const reactions_service_1 = require("./reactions.service");
const reactions_controller_1 = require("./reactions.controller");
const mongoose_1 = require("@nestjs/mongoose");
const reactions_schema_1 = require("./schemas/reactions.schema");
const jwt_1 = require("@nestjs/jwt");
let ReactionsModule = class ReactionsModule {
};
ReactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: reactions_schema_1.Reactions.name, schema: reactions_schema_1.ReactionsSchema }]),
            jwt_1.JwtModule,
        ],
        controllers: [reactions_controller_1.ReactionsController],
        providers: [reactions_service_1.ReactionsService],
    })
], ReactionsModule);
exports.ReactionsModule = ReactionsModule;
//# sourceMappingURL=reactions.module.js.map