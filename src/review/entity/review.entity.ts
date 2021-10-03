import { Category } from '@/category/entity/category.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Category, (category) => category.reviews)
  categories: Category[];
}
