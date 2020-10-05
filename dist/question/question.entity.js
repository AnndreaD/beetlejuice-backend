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
exports.QuestionEntity = void 0;
const category_entity_1 = require("../category/category.entity");
const language_entity_1 = require("../language/language.entity");
const typeorm_1 = require("typeorm");
let QuestionEntity = class QuestionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 1000, unique: true }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.CategoryEntity, (category) => category.id, {
        nullable: false,
        eager: true,
    }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], QuestionEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToOne(() => language_entity_1.LanguageEntity, (language) => language.id, {
        nullable: false,
        eager: true,
    }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], QuestionEntity.prototype, "language", void 0);
QuestionEntity = __decorate([
    typeorm_1.Entity("question")
], QuestionEntity);
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=question.entity.js.map