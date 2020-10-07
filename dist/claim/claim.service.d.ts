import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ClaimEntity } from "./claim.entity";
export declare class ClaimService extends TypeOrmCrudService<ClaimEntity> {
    constructor(repo: any);
    findRandomizedByQuantity(quantity: string): Promise<any>;
    findByRandomizedQLC(quantity: number, language: number, category: number): Promise<any>;
}
