import { ClaimEntity } from "src/claim/claim.entity";
import { QuestionEntity } from "src/question/question.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity("language")
export class LanguageEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column("varchar", { length: 100, unique: true })
  name: string;

  @ManyToOne(
    (type) => QuestionEntity,
    (question) => question.id
  )
  questions: QuestionEntity[];

  @ManyToOne(
    (type) => ClaimEntity,
    (claim) => claim.id
  )
  claims: ClaimEntity[];
}
