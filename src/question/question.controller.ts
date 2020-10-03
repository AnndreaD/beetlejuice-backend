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
      type: "uuid",
      primary: true,
    },
  },
})
@Controller("question")
export class QuestionController {
  constructor(public service: QuestionService) {}

  @Get("/randomquantity:number")
  async findRandomizedByQuantity(@Param("id") id: number) {
    return this.service.findRandomizedByQuantity();
  }
}
