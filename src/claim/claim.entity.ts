import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("question")
export class ClaimEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 1000, unique: true })
  text: string;

  @Column("varchar", { length: 100 })
  category: string;
}
