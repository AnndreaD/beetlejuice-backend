"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const question_module_1 = require("./question/question.module");
const claim_module_1 = require("./claim/claim.module");
const language_module_1 = require("./language/language.module");
const category_module_1 = require("./category/category.module");
const question_entity_1 = require("./question/question.entity");
const language_entity_1 = require("./language/language.entity");
const category_entity_1 = require("./category/category.entity");
const claim_entity_1 = require("./claim/claim.entity");
const dilemma_entity_1 = require("./dilemma/dilemma.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            question_module_1.QuestionModule,
            claim_module_1.ClaimModule,
            language_module_1.LanguageModule,
            category_module_1.CategoryModule,
            typeorm_1.TypeOrmModule.forFeature([
                question_entity_1.QuestionEntity,
                language_entity_1.LanguageEntity,
                category_entity_1.CategoryEntity,
                claim_entity_1.ClaimEntity,
                dilemma_entity_1.DilemmaEntity
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map