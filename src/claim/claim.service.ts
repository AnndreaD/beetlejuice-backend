import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ClaimEntity } from "./claim.entity";

@Injectable()
export class ClaimService extends TypeOrmCrudService<ClaimEntity> {
  constructor(@InjectRepository(ClaimEntity) repo) {
    super(repo);
  }
}
