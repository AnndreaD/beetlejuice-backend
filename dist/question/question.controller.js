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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const question_service_1 = require("./question.service");
const question_entity_1 = require("./question.entity");
let QuestionController = class QuestionController {
    constructor(service) {
        this.service = service;
    }
    async findRandomizedByQuantity(quantity) {
        return this.service.findRandomizedByQuantity(quantity);
    }
    async findRandomizedByQLC(quantity, languageid, categoryid) {
        return this.service.findByRandomizedQLC(quantity, languageid, categoryid);
    }
};
__decorate([
    common_1.Get("/randomquantity:number"),
    __param(0, common_1.Param("quantity")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findRandomizedByQuantity", null);
__decorate([
    common_1.Get("/randomquantityqlc:number"),
    __param(0, common_1.Param("quantity")),
    __param(1, common_1.Param("languageid")),
    __param(2, common_1.Param("languageid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findRandomizedByQLC", null);
QuestionController = __decorate([
    crud_1.Crud({
        model: {
            type: question_entity_1.QuestionEntity,
        },
        params: {
            id: {
                field: "id",
                primary: true,
            },
        },
    }),
    common_1.Controller("question"),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map