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
exports.PostReactionsController = void 0;
const common_1 = require("@nestjs/common");
const post_reactions_service_1 = require("./post-reactions.service");
const create_post_reactions_dto_1 = require("./dto/create-post-reactions.dto");
const update_post_reactions_dto_1 = require("./dto/update-post-reactions.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let PostReactionsController = class PostReactionsController {
    constructor(postReactionsService) {
        this.postReactionsService = postReactionsService;
    }
    create(createPostReactionsDto) {
        return this.postReactionsService.create(createPostReactionsDto);
    }
    findAll(query) {
        return this.postReactionsService.findAll(query);
    }
    findOne(id) {
        return this.postReactionsService.findOne(id);
    }
    update(id, updatePostReactionsDto) {
        return this.postReactionsService.update(id, updatePostReactionsDto);
    }
    remove(id) {
        return this.postReactionsService.remove(id);
    }
};
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create postReactions' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_reactions_dto_1.CreatePostReactionsDto]),
    __metadata("design:returntype", void 0)
], PostReactionsController.prototype, "create", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all postReactions' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostReactionsController.prototype, "findAll", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one postReactions' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostReactionsController.prototype, "findOne", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update postReactions by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_reactions_dto_1.UpdatePostReactionsDto]),
    __metadata("design:returntype", void 0)
], PostReactionsController.prototype, "update", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete postReactions by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostReactionsController.prototype, "remove", null);
PostReactionsController = __decorate([
    (0, swagger_1.ApiTags)('PostReactions'),
    (0, common_1.Controller)('postReactions'),
    __metadata("design:paramtypes", [post_reactions_service_1.PostReactionsService])
], PostReactionsController);
exports.PostReactionsController = PostReactionsController;
//# sourceMappingURL=post-reactions.controller.js.map