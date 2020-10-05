import { ClaimEntity } from "src/claim/claim.entity";
import { QuestionEntity } from "src/question/question.entity";
export declare class CategoryEntity {
    id: string;
    name: string;
    questions: QuestionEntity[];
    claims: ClaimEntity[];
}
