"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dilemma_controller_1 = require("./dilemma.controller");
const dilemma_entity_1 = require("./dilemma.entity");
const dilemma_service_1 = require("./dilemma.service");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([dilemma_entity_1.DilemmaEntity])],
        controllers: [dilemma_controller_1.DilemmaController],
        providers: [dilemma_service_1.DilemmaService],
        exports: [typeorm_1.TypeOrmModule],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=dilemma.module.js.map