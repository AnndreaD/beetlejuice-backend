import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionModule } from "./question/question.module";
import { ClaimModule } from "./claim/claim.module";

@Module({
  imports: [TypeOrmModule.forRoot(), QuestionModule, ClaimModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
