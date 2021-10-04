import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Review } from "@/review/entity/review.entity";
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Review, (review) => review.categories, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "review_id" })
  review: Review;
}
