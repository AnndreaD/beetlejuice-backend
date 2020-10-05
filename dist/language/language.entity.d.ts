import { ClaimEntity } from "src/claim/claim.entity";
import { QuestionEntity } from "src/question/question.entity";
export declare class LanguageEntity {
    id: string;
    name: string;
    questions: QuestionEntity[];
    claims: ClaimEntity[];
}
