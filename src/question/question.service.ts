import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QuestionEntity } from "./question.entity";

@Injectable()
export class QuestionService extends TypeOrmCrudService<QuestionEntity> {
  constructor(@InjectRepository(QuestionEntity) repo) {
    super(repo);
  }

  findRandomizedByQuantity() {
    return this.repo.query("select * from question order by random() limit 5;");
  }
}
