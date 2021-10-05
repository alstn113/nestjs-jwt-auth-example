import { EntityRepository, Repository } from "typeorm";
import {
  ReviewPatchRequest,
  ReviewPostRequest,
} from "@/review/dto/review-request.dto";
import { Review } from "@/review/entity/review.entity";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {
  findReviews(): Promise<Review[]> {
    return this.find();
  }
  findReviewById(reviewId: number): Promise<Review | undefined> {
    return this.findOne(reviewId);
  }
  createReview(review: ReviewPostRequest): void {
    this.insert(review);
  }
  updateReview(reviewId: number, { title, rating }: ReviewPatchRequest): void {
    this.update(
      { id: reviewId },
      { ...(title && { title }), ...(rating && { rating }) }
    );
  }
  deleteReview(reviewId: number): void {
    this.delete({ id: reviewId });
  }
}
