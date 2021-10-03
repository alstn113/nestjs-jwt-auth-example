import { EntityRepository, Repository } from 'typeorm';
import { CreateReviewDto, UpdateReviewDto } from './dto/review.dto';
import { Review } from './entity/review.entity';

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {
  findReviews(): Promise<Review[]> {
    return this.find();
  }
  //이거 오류전달이 안 됨.
  findReviewById(reviewId: number): Promise<Review> {
    return this.findOne(reviewId);
  }
  createReview(review: CreateReviewDto): void {
    this.insert(review);
  }
  updateReview(reviewId: number, { title, rating }: UpdateReviewDto) {
    return this.update({ id: reviewId }, { ...(title && { title }), ...(rating && { rating }) });
  }
  deleteReview(reviewId: number): void {
    this.delete({ id: reviewId });
  }
}
