import { Controller, Get, Query } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { CategoryEntity } from "./category.entity";
import { CategoryService } from "./category.service";

@Crud({
  model: {
    type: CategoryEntity,
  },
  params: {
    id: {
      field: "id",
      primary: true,
    },
  },
})
@Controller("category")
export class CategoryController {
  constructor(public service: CategoryService) {}
}
