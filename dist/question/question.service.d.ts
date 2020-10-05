import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QuestionEntity } from "./question.entity";
export declare class QuestionService extends TypeOrmCrudService<QuestionEntity> {
    constructor(repo: any);
    findRandomizedByQuantity(quantity: number): Promise<any>;
    findByRandomizedQLC(quantity: number, languageid: number, categoryid: number): Promise<any>;
}
