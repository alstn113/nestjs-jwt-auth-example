import { Injectable } from '@nestjs/common';
import { CreateReviewDto, FindReviewResponseDto, UpdateReviewDto } from '@/review/dto/review.dto';
import { ReviewRepository } from '@/review/review.repository';

@Injectable()
export class ReviewService {
  constructor(private readonly reviews: ReviewRepository) {}

  findReviews(): Promise<FindReviewResponseDto[]> {
    try {
      return this.reviews.findReviews();
    } catch (err) {
      throw new Error('404 findReviews Failed');
    }
  }

  findReviewById(reviewId: number): Promise<FindReviewResponseDto> {
    try {
      return this.reviews.findReviewById(reviewId);
    } catch (err) {
      throw new Error('404 findReviewById Failed');
    }
  }

  createReview(reviewBody: CreateReviewDto): string {
    try {
      this.reviews.createReview({ ...reviewBody });
      return '200 createReview Success';
    } catch (err) {
      throw new Error('400 createReview Failed');
    }
  }

  updateReview(reviewId: number, reviewBody: UpdateReviewDto): string {
    try {
      this.reviews.updateReview(reviewId, reviewBody);
      return '200 updateReview Success';
    } catch (err) {
      throw new Error('400 updateReview Failed');
    }
  }

  deleteReview(reviewId: number): string {
    try {
      this.reviews.deleteReview(reviewId);
      return '200 deleteReview Success';
    } catch (err) {
      throw new Error('404 deleteReview Failed');
    }
  }
}
