import { EntityRepository, Repository } from "typeorm";
import { CreateReviewDto, UpdateReviewDto } from "@/review/dto/review.dto";
import { Review } from "@/review/entity/review.entity";
import { HttpException, HttpStatus } from "@nestjs/common";
import { messages } from "@/config/messages.config";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {
  findReviews(): Promise<Review[]> {
    return this.find();
  }
  async findReviewById(reviewId: number): Promise<Review | undefined> {
    const review = await this.findOne(reviewId);
    if (!review) {
      throw new HttpException(
        messages.FAILED.TO_FIND_REVIEW_BY_ID,
        HttpStatus.NOT_FOUND
      );
    }
    return review;
  }
  createReview(review: CreateReviewDto): void {
    this.insert(review);
  }
  updateReview(reviewId: number, { title, rating }: UpdateReviewDto): void {
    this.update(
      { id: reviewId },
      { ...(title && { title }), ...(rating && { rating }) }
    );
  }
  deleteReview(reviewId: number): void {
    this.delete({ id: reviewId });
  }
}
