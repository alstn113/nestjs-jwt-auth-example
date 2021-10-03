import { Category } from '@/category/entity/category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  rating: number;

  @OneToMany(() => Category, (category) => category.review)
  categories: Category[];
}
