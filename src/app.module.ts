import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionModule } from "./question/question.module";
import { ClaimModule } from "./claim/claim.module";
import { LanguageModule } from "./language/language.module";
import { CategoryModule } from "./category/category.module";
import { QuestionEntity } from "./question/question.entity";
import { LanguageEntity } from "./language/language.entity";
import { CategoryEntity } from "./category/category.entity";
import { ClaimEntity } from "./claim/claim.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    QuestionModule,
    ClaimModule,
    LanguageModule,
    CategoryModule,
    TypeOrmModule.forFeature([
      QuestionEntity,
      LanguageEntity,
      CategoryEntity,
      ClaimEntity,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
