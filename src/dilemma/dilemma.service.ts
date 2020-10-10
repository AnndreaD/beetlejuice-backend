import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { DilemmaEntity } from "./dilemma.entity";



@Injectable()
export class DilemmaService extends TypeOrmCrudService<DilemmaEntity> {
  constructor(@InjectRepository(DilemmaEntity) repo) {
    super(repo);
  }

  //TODO: need new functions returning  same category and below. now it only ruturns given category
  // nsfw - > all categories
  // middleground -> middleground + easy
  // easy -> only easy

  findRandomizedByQuantity(quantity: string) {
    return this.repo.query(
      `select * from dilemma order by random() limit ${quantity};`
    );
  }

  //find by quantity, language and category - randomized
  findByRandomizedQLC(
    quantity: number,
    languageid: number,
    categoryid: number
  ) {
    return this.repo.query(
      `select * from dilemma where "languageId"=${languageid} and "categoryId"=${categoryid} order by random() limit ${quantity};`
    );
  }
}
