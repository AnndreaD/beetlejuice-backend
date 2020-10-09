import { Controller, Get, Query, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { ClaimService } from "./claim.service";
import { ClaimEntity } from "./claim.entity";
@Crud({
  model: {
    type: ClaimEntity,
  },
  params: {
    id: {
      field: "id",
      primary: true,
    },
  },
})
@Controller("claim")
export class ClaimController {
  constructor(public service: ClaimService) {}

  @Get("/randomquantity/:quantity")
  async findRandomizedByQuantity(@Param("quantity") quantity: string) {
    return this.service.findRandomizedByQuantity(quantity);
  }

  @Get("/randomquantityqlc/:quantity/:languageid/:categoryid")
  async findRandomizedByQLC(
    @Param("quantity") quantity: number,
    @Param("languageid") languageid: number,
    @Param("categoryid") categoryid: number
  ) {
    return this.service.findByRandomizedQLC(quantity, languageid, categoryid);
  }
}
