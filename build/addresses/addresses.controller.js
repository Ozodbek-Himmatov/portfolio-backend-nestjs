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
exports.AddressesController = void 0;
const common_1 = require("@nestjs/common");
const addresses_service_1 = require("./addresses.service");
const create_addresses_dto_1 = require("./dto/create-addresses.dto");
const update_addresses_dto_1 = require("./dto/update-addresses.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let AddressesController = class AddressesController {
    constructor(addressesService) {
        this.addressesService = addressesService;
    }
    create(createAddressesDto) {
        return this.addressesService.create(createAddressesDto);
    }
    findAll(query) {
        return this.addressesService.findAll(query);
    }
    findOne(id) {
        return this.addressesService.findOne(id);
    }
    update(id, updateAddressesDto) {
        return this.addressesService.update(id, updateAddressesDto);
    }
    remove(id) {
        return this.addressesService.remove(id);
    }
};
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Create addresses' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_addresses_dto_1.CreateAddressesDto]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "create", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find all addresses' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "findAll", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Get one addresses' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "findOne", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Update addresses by id' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_addresses_dto_1.UpdateAddressesDto]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "update", null);
__decorate([
    (0, common_2.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Delete addresses by id' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "remove", null);
AddressesController = __decorate([
    (0, swagger_1.ApiTags)('Addresses'),
    (0, common_1.Controller)('addresses'),
    __metadata("design:paramtypes", [addresses_service_1.AddressesService])
], AddressesController);
exports.AddressesController = AddressesController;
//# sourceMappingURL=addresses.controller.js.map