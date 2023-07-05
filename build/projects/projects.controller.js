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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const create_projects_dto_1 = require("./dto/create-projects.dto");
const update_projects_dto_1 = require("./dto/update-projects.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    create(createProjectsDto) {
        return this.projectsService.create(createProjectsDto);
    }
    findAll(query) {
        return this.projectsService.findAll(query);
    }
    findOne(id) {
        return this.projectsService.findOne(id);
    }
    update(id, updateProjectsDto) {
        return this.projectsService.update(id, updateProjectsDto);
    }
    remove(id) {
        return this.projectsService.remove(id);
    }
};
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create projects' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_projects_dto_1.CreateProjectsDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all projects' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one projects' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update projects by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_projects_dto_1.UpdateProjectsDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete projects by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
ProjectsController = __decorate([
    (0, swagger_1.ApiTags)('Projects'),
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map