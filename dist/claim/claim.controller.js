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
exports.ClaimController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const claim_service_1 = require("./claim.service");
const claim_entity_1 = require("./claim.entity");
let ClaimController = class ClaimController {
    constructor(service) {
        this.service = service;
    }
};
ClaimController = __decorate([
    crud_1.Crud({
        model: {
            type: claim_entity_1.ClaimEntity,
        },
        params: {
            id: {
                field: "id",
                type: "uuid",
                primary: true,
            },
        },
    }),
    common_1.Controller("claim"),
    __metadata("design:paramtypes", [claim_service_1.ClaimService])
], ClaimController);
exports.ClaimController = ClaimController;
//# sourceMappingURL=claim.controller.js.map