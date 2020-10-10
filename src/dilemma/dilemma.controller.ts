import { Controller, Get, Query, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { DilemmaEntity } from "./dilemma.entity";
import { DilemmaService } from "./dilemma.service";

@Crud({
  model: {
    type: DilemmaEntity,
  },
  params: {
    id: {
      field: "id",
      primary: true,
    },
  },
})
@Controller("dilemma")
export class DilemmaController {
  constructor(public service: DilemmaService) {}

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
