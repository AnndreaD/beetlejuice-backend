import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { DilemmaEntity } from "./dilemma.entity";
export declare class DilemmaService extends TypeOrmCrudService<DilemmaEntity> {
    constructor(repo: any);
    findRandomizedByQuantity(quantity: string): Promise<any>;
    findByRandomizedQLC(quantity: number, languageid: number, categoryid: number): Promise<any>;
}
