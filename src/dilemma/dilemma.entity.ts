import { CategoryEntity } from "src/category/category.entity";
import { LanguageEntity } from "src/language/language.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";

@Entity("dilemma")
export class DilemmaEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 1000, unique: true })
  text: string;

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.id,
    {
      nullable: false,
      eager: true,
    }
  )
  category: CategoryEntity;

  @ManyToOne(
    () => LanguageEntity,
    (language) => language.id,
    {
      nullable: false,
      eager: true,
    }
  )
  language: LanguageEntity;
}
