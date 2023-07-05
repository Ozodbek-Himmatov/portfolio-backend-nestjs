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
exports.SkillsSchema = exports.Skills = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Skills = class Skills {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Skills.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Skills.prototype, "icon", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Skills.prototype, "rating", void 0);
Skills = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Skills);
exports.Skills = Skills;
exports.SkillsSchema = mongoose_1.SchemaFactory.createForClass(Skills);
//# sourceMappingURL=skills.schema.js.map