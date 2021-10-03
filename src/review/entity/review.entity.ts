import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;
}
