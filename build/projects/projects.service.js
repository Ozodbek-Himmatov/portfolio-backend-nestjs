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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const projects_schema_1 = require("./schemas/projects.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProjectsService = class ProjectsService {
    constructor(projectsModel) {
        this.projectsModel = projectsModel;
    }
    async create(createProjectsDto) {
        const res = await new this.projectsModel(createProjectsDto).save();
        return res;
    }
    async findAll(query) {
        const res = await this.projectsModel.find().exec();
        return res;
    }
    async findOne(id) {
        return this.projectsModel.findById(id).exec();
    }
    async update(id, updateProjectsDto) {
        return this.projectsModel
            .findByIdAndUpdate(id, updateProjectsDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.projectsModel.findByIdAndDelete(id).exec();
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(projects_schema_1.Projects.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map