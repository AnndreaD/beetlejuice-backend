import { Controller, Get, Query } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { LanguageEntity } from "./language.entity";
import { LanguageService } from "./language.service";

@Crud({
  model: {
    type: LanguageEntity,
  },
  params: {
    id: {
      field: "id",
      primary: true,
    },
  },
})
@Controller("language")
export class LanguageController {
  constructor(public service: LanguageService) {}
}
