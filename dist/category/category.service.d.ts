import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { CategoryEntity } from "./category.entity";
export declare class CategoryService extends TypeOrmCrudService<CategoryEntity> {
    constructor(repo: any);
}
