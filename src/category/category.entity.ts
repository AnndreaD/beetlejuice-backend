import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("category")
export class CategoryEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column("varchar", { length: 100, unique: true })
  name: string;
}
