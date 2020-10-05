import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClaimEntity } from "./claim.entity";
import { ClaimController } from "./claim.controller";
import { ClaimService } from "./claim.service";

@Module({
  imports: [TypeOrmModule.forFeature([ClaimEntity])],
  controllers: [ClaimController],
  providers: [ClaimService],
  exports: [TypeOrmModule],
})
export class ClaimModule {}
