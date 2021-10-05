import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  CreateReviewPostRequest,
  UpdateReviewPatchRequest,
} from "@/review/dto/review-request.dto";
import { ReviewResponse } from "@/review/dto/review-response.dto";
import { ReviewRepository } from "@/review/repository/review.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { messages } from "@/config/messages.config";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewRepository)
    private readonly reviewRepository: ReviewRepository
  ) {}

  async findReviews(): Promise<ReviewResponse[]> {
    return await this.reviewRepository.findReviews();
  }

  async findReviewById(reviewId: number): Promise<ReviewResponse> {
    const review = await this.reviewRepository.findReviewById(reviewId);
    if (!review) {
      throw new HttpException(
        messages.FAILED.TO_FIND_REVIEW_BY_ID,
        HttpStatus.NOT_FOUND
      );
    }
    return review;
  }

  async createReview(reviewBody: CreateReviewPostRequest): Promise<string> {
    await this.reviewRepository.createReview(reviewBody);
    return messages.SUCCESS.TO_CREATE_REVIEW;
  }

  async updateReview(
    reviewId: number,
    reviewBody: UpdateReviewPatchRequest
  ): Promise<string> {
    await this.findReviewById(reviewId);
    await this.reviewRepository.updateReview(reviewId, reviewBody);
    return messages.SUCCESS.TO_UPDATE_REVIEW;
  }

  async deleteReview(reviewId: number): Promise<string> {
    await this.findReviewById(reviewId);
    await this.reviewRepository.deleteReview(reviewId);
    return messages.SUCCESS.TO_DELETE_REVIEW;
  }
}
