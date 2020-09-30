"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const claim_entity_1 = require("./claim.entity");
const claim_controller_1 = require("./claim.controller");
const claim_service_1 = require("./claim.service");
let ClaimModule = class ClaimModule {
};
ClaimModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([claim_entity_1.ClaimEntity])],
        controllers: [claim_controller_1.ClaimController],
        providers: [claim_service_1.ClaimService],
        exports: [],
    })
], ClaimModule);
exports.ClaimModule = ClaimModule;
//# sourceMappingURL=claim.module.js.map