import { Injectable } from "@nestjs/common";
import {
  CreateReviewDto,
  FindReviewResponseDto,
  UpdateReviewDto,
} from "@/review/dto/review.dto";
import { ReviewRepository } from "@/review/review.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewRepository)
    private readonly reviewRepository: ReviewRepository
  ) {}

  findReviews(): Promise<FindReviewResponseDto[]> {
    try {
      return this.reviewRepository.findReviews();
    } catch (err) {
      throw new Error("404 findReviews Failed");
    }
  }

  findReviewById(reviewId: number): Promise<FindReviewResponseDto> {
    try {
      return this.reviewRepository.findReviewById(reviewId);
    } catch (err) {
      throw new Error("404 findReviewById Failed");
    }
  }

  createReview(reviewBody: CreateReviewDto): string {
    try {
      this.reviewRepository.createReview({ ...reviewBody });
      return "200 createReview Success";
    } catch (err) {
      throw new Error("400 createReview Failed");
    }
  }

  updateReview(reviewId: number, reviewBody: UpdateReviewDto): string {
    try {
      this.reviewRepository.updateReview(reviewId, reviewBody);
      return "200 updateReview Success";
    } catch (err) {
      throw new Error("400 updateReview Failed");
    }
  }

  deleteReview(reviewId: number): string {
    try {
      this.reviewRepository.deleteReview(reviewId);
      return "200 deleteReview Success";
    } catch (err) {
      throw new Error("404 deleteReview Failed");
    }
  }
}
