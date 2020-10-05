import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QuestionEntity } from "./question.entity";

@Injectable()
export class QuestionService extends TypeOrmCrudService<QuestionEntity> {
  constructor(@InjectRepository(QuestionEntity) repo) {
    super(repo);
  }

  //TODO: need new functions returning  same category and below. now it only ruturns given category
  // nsfw - > all categories
  // middleground -> middleground + easy
  // easy -> only easy

  findRandomizedByQuantity(quantity: number) {
    return this.repo.query(
      `select * from question order by random() limit ${quantity};`
    );
  }

  //find by quantity, language and category - randomized
  findByRandomizedQLC(
    quantity: number,
    languageid: number,
    categoryid: number
  ) {
    return this.repo.query(
      `select * from question where "languageId"=${languageid} and  "categoryId"=${categoryid} order by random() limit ${quantity};`
    );
  }
}
