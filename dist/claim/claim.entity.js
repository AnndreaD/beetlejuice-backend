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
exports.ClaimEntity = void 0;
const category_entity_1 = require("../category/category.entity");
const language_entity_1 = require("../language/language.entity");
const typeorm_1 = require("typeorm");
let ClaimEntity = class ClaimEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ClaimEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 1000, unique: true }),
    __metadata("design:type", String)
], ClaimEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.OneToMany((type) => category_entity_1.CategoryEntity, (category) => category.name),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ClaimEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.OneToMany((type) => language_entity_1.LanguageEntity, (language) => language.name),
    __metadata("design:type", language_entity_1.LanguageEntity)
], ClaimEntity.prototype, "language", void 0);
ClaimEntity = __decorate([
    typeorm_1.Entity("question")
], ClaimEntity);
exports.ClaimEntity = ClaimEntity;
//# sourceMappingURL=claim.entity.js.map