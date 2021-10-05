import { HttpException, Injectable } from "@nestjs/common";
import {
  CreateReviewDto,
  FindReviewResponseDto,
  UpdateReviewDto,
} from "@/review/dto/review.dto";
import { ReviewRepository } from "@/review/repository/review.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { messages } from "@/config/messages.config";

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
      throw new HttpException(messages.FAILED.TO_FIND_REVIEWS, 400);
    }
  }

  findReviewById(reviewId: number): Promise<FindReviewResponseDto> {
    try {
      return this.reviewRepository.findReviewById(reviewId);
    } catch (err) {
      throw new HttpException(messages.FAILED.TO_FIND_REVIEW_BY_ID, 400);
    }
  }

  createReview(reviewBody: CreateReviewDto): string {
    try {
      this.reviewRepository.createReview(reviewBody);
      return messages.SUCCESS.TO_CREATE_REVIEW;
    } catch (err) {
      throw new HttpException(messages.FAILED.TO_CREATE_REVIEW, 400);
    }
  }

  async updateReview(
    reviewId: number,
    reviewBody: UpdateReviewDto
  ): Promise<string> {
    try {
      await this.findReviewById(reviewId);
      await this.reviewRepository.updateReview(reviewId, reviewBody);
      return messages.SUCCESS.TO_UPDATE_REVIEW;
    } catch (err) {
      if (err.status === 404) {
        throw err;
      } else {
        throw new HttpException(messages.FAILED.TO_UPDATE_REVIEW, 400);
      }
    }
  }

  async deleteReview(reviewId: number): Promise<string> {
    try {
      await this.findReviewById(reviewId);
      await this.reviewRepository.deleteReview(reviewId);
      return messages.SUCCESS.TO_DELETE_REVIEW;
    } catch (err) {
      if (err.status === 404) {
        throw err;
      } else {
        throw new HttpException(messages.FAILED.TO_DELETE_REVIEW, 400);
      }
    }
  }
}
