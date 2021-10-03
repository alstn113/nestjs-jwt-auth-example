import { EntityRepository, Repository } from 'typeorm';
import { CreateReviewDto, UpdateReviewDto } from '@/review/dto/review.dto';
import { Review } from '@/review/entity/review.entity';

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {
  findReviews(): Promise<Review[]> {
    return this.find();
  }
  findReviewById(reviewId: number): Promise<Review> {
    return this.findOne(reviewId);
  }
  createReview(review: CreateReviewDto): void {
    this.insert(review);
  }
  updateReview(reviewId: number, { title, rating }: UpdateReviewDto): void {
    this.update({ id: reviewId }, { ...(title && { title }), ...(rating && { rating }) });
  }
  deleteReview(reviewId: number): void {
    this.delete({ id: reviewId });
  }
}
