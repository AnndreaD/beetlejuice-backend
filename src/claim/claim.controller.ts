import { Controller } from "@nestjs/common";
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
      type: "uuid",
      primary: true,
    },
  },
})
@Controller("claim")
export class ClaimController {
  constructor(public service: ClaimService) {}
}
