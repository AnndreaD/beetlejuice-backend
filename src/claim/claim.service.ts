import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ClaimEntity } from "./claim.entity";

@Injectable()
export class ClaimService extends TypeOrmCrudService<ClaimEntity> {
  constructor(@InjectRepository(ClaimEntity) repo) {
    super(repo);
  }

  //TODO: need new functions returning  same category and below. now it only ruturns given category
  // nsfw - > all categories
  // middleground -> middleground + easy
  // easy -> only easy

  findRandomizedByQuantity(quantity: string) {
    return this.repo.query(
      `select * from claim order by random() limit ${quantity};`
    );
  }

  //find by quantity, language and category - randomized
  findByRandomizedQLC(
    quantity: number,
    languageid: number,
    categoryid: number
  ) {
    return this.repo.query(
      `select * from claim where "languageId"=${languageid} and  "categoryId"=${categoryid} order by random() limit ${quantity};`
    );
  }
}
