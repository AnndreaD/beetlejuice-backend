import { Controller, Get, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { QuestionService } from "./question.service";
import { QuestionEntity } from "./question.entity";

@Crud({
  model: {
    type: QuestionEntity,
  },
  params: {
    id: {
      field: "id",
      primary: true,
    },
  },
})
@Controller("question")
export class QuestionController {
  constructor(public service: QuestionService) {}

  @Get("/randomquantity/:quantity")
  async findRandomizedByQuantity(@Param("quantity") quantity: string) {
    return this.service.findRandomizedByQuantity(quantity);
  }

  @Get("/randomquantity/:quantity/:languageid/:categoryid")
  async findRandomizedByQLC(
    @Param("quantity") quantity: number,
    @Param("languageid") languageid: number,
    @Param("categoryid") categoryid: number
  ) {
    return this.service.findByRandomizedQLC(quantity, languageid, categoryid);
  }
}
