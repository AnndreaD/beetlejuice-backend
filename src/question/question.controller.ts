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

  @Get("/randomquantity:number")
  async findRandomizedByQuantity(@Param("quantity") quantity: number) {
    return this.service.findRandomizedByQuantity(quantity);
  }

  @Get("/randomquantityqlc:number")
  async findRandomizedByQLC(
    @Param("quantity") quantity: number,
    @Param("languageid") languageid: number,
    @Param("languageid") categoryid: number
  ) {
    return this.service.findByRandomizedQLC(quantity, languageid, categoryid);
  }
}
