import { QuestionService } from "./question.service";
export declare class QuestionController {
    service: QuestionService;
    constructor(service: QuestionService);
    findRandomizedByQuantity(quantity: string): Promise<any>;
    findRandomizedByQLC(quantity: number, language: number, category: number): Promise<any>;
}
