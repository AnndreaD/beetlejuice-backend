import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("language")
export class LanguageEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column("varchar", { length: 100, unique: true })
  name: string;
}
