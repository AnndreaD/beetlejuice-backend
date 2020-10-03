import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { LanguageEntity } from "./language.entity";

@Injectable()
export class LanguageService extends TypeOrmCrudService<LanguageEntity> {
  constructor(@InjectRepository(LanguageEntity) repo) {
    super(repo);
  }
}
