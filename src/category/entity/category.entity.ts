import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from '@/review/entity/review.entity';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Review, (review) => review.categories)
  reviews: Review[];
}
