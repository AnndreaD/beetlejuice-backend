"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const language_controller_1 = require("./language.controller");
const language_entity_1 = require("./language.entity");
const language_service_1 = require("./language.service");
let LanguageModule = class LanguageModule {
};
LanguageModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([language_entity_1.LanguageEntity])],
        controllers: [language_controller_1.LanguageController],
        providers: [language_service_1.LanguageService],
        exports: [typeorm_1.TypeOrmModule],
    })
], LanguageModule);
exports.LanguageModule = LanguageModule;
//# sourceMappingURL=language.module.js.map