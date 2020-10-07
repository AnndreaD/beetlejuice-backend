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

  @Get("/randomquantityqlc:number")
  async findRandomizedByQLC(
    @Param("quantity") quantity: number,
    @Param("language") language: number,
    @Param("category") category: number
  ) {
    return this.service.findByRandomizedQLC(quantity, language, category);
  }
}
