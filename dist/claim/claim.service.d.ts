import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ClaimEntity } from "./claim.entity";
export declare class ClaimService extends TypeOrmCrudService<ClaimEntity> {
    constructor(repo: any);
    findRandomizedByQuantity(quantity: number): Promise<any>;
    findByRandomizedQLC(quantity: number, languageid: number, categoryid: number): Promise<any>;
}
