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
