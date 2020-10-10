import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DilemmaController } from "./dilemma.controller";
import { DilemmaEntity } from "./dilemma.entity";
import { DilemmaService } from "./dilemma.service";


@Module({
  imports: [TypeOrmModule.forFeature([DilemmaEntity])],
  controllers: [DilemmaController],
  providers: [DilemmaService],
  exports: [TypeOrmModule],
})
export class QuestionModule {}
