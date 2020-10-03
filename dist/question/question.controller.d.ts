import { QuestionService } from "./question.service";
export declare class QuestionController {
    service: QuestionService;
    constructor(service: QuestionService);
    findRandomizedByQuantity(id: number): Promise<any>;
}
