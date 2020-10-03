import { CategoryEntity } from "src/category/category.entity";
import { LanguageEntity } from "src/language/language.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("question")
export class QuestionEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 1000, unique: true })
  text: string;

  @OneToMany(
    (type) => CategoryEntity,
    (category) => category.name
  )
  category: CategoryEntity;

  @OneToMany(
    (type) => LanguageEntity,
    (language) => language.name
  )
  language: LanguageEntity;
}
