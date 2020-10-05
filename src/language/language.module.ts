import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguageController } from "./language.controller";
import { LanguageEntity } from "./language.entity";
import { LanguageService } from "./language.service";

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  controllers: [LanguageController],
  providers: [LanguageService],
  exports: [TypeOrmModule],
})
export class LanguageModule {}
