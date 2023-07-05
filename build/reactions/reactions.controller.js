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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionsController = void 0;
const common_1 = require("@nestjs/common");
const reactions_service_1 = require("./reactions.service");
const create_reactions_dto_1 = require("./dto/create-reactions.dto");
const update_reactions_dto_1 = require("./dto/update-reactions.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let ReactionsController = class ReactionsController {
    constructor(reactionsService) {
        this.reactionsService = reactionsService;
    }
    create(createReactionsDto) {
        return this.reactionsService.create(createReactionsDto);
    }
    findAll(query) {
        return this.reactionsService.findAll(query);
    }
    findOne(id) {
        return this.reactionsService.findOne(id);
    }
    update(id, updateReactionsDto) {
        return this.reactionsService.update(id, updateReactionsDto);
    }
    remove(id) {
        return this.reactionsService.remove(id);
    }
};
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create reactions' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reactions_dto_1.CreateReactionsDto]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "create", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all reactions' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "findAll", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one reactions' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "findOne", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update reactions by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reactions_dto_1.UpdateReactionsDto]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "update", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete reactions by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "remove", null);
ReactionsController = __decorate([
    (0, swagger_1.ApiTags)('Reactions'),
    (0, common_1.Controller)('reactions'),
    __metadata("design:paramtypes", [reactions_service_1.ReactionsService])
], ReactionsController);
exports.ReactionsController = ReactionsController;
//# sourceMappingURL=reactions.controller.js.map