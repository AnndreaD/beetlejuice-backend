import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { LanguageEntity } from "./language.entity";
export declare class LanguageService extends TypeOrmCrudService<LanguageEntity> {
    constructor(repo: any);
}
