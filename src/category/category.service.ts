import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { CategoryEntity } from "./category.entity";

@Injectable()
export class CategoryService extends TypeOrmCrudService<CategoryEntity> {
  constructor(@InjectRepository(CategoryEntity) repo) {
    super(repo);
  }
}
