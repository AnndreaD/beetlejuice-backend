import { CategoryEntity } from "src/category/category.entity";
import { LanguageEntity } from "src/language/language.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("claim")
export class ClaimEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 1000, unique: true })
  text: string;

  @ManyToOne(
    (type) => CategoryEntity,
    (category) => category.id,
    {
      nullable: false,
      eager: true,
    }
  )
  category: CategoryEntity;

  @ManyToOne(
    (type) => LanguageEntity,
    (language) => language.id,
    {
      nullable: false,
      eager: true,
    }
  )
  @JoinColumn()
  language: LanguageEntity;
}
