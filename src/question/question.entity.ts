import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 1000, unique: true })
  text: string;

  @Column('varchar', { length: 500 })
  category: string;
}
