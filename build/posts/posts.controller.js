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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const create_posts_dto_1 = require("./dto/create-posts.dto");
const update_posts_dto_1 = require("./dto/update-posts.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    create(createPostsDto) {
        return this.postsService.create(createPostsDto);
    }
    findAll(query) {
        return this.postsService.findAll(query);
    }
    findOne(id) {
        return this.postsService.findOne(id);
    }
    update(id, updatePostsDto) {
        return this.postsService.update(id, updatePostsDto);
    }
    remove(id) {
        return this.postsService.remove(id);
    }
};
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create posts' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_posts_dto_1.CreatePostsDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all posts' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one posts' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findOne", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update posts by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_posts_dto_1.UpdatePostsDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "update", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete posts by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "remove", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map