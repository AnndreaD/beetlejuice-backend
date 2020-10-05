import { CategoryEntity } from "src/category/category.entity";
import { LanguageEntity } from "src/language/language.entity";
export declare class ClaimEntity {
    id: number;
    text: string;
    category: CategoryEntity;
    language: LanguageEntity;
}
