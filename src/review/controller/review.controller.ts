import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from "@nestjs/common";
import { ReviewService } from "@/review/service/review.service";
import {
  CreateReviewPostRequest,
  UpdateReviewPatchRequest,
} from "@/review/dto/review-request.dto";
import { ReviewResponse } from "@/review/dto/review-response.dto";

@Controller("/reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findReviews(): Promise<ReviewResponse[]> {
    return this.reviewService.findReviews();
  }

  @Get("/:reviewId")
  findReviewById(@Param("reviewId") reviewId: number): Promise<ReviewResponse> {
    return this.reviewService.findReviewById(reviewId);
  }

  @Post()
  async createReview(
    @Body(ValidationPipe) body: CreateReviewPostRequest
  ): Promise<string> {
    return await this.reviewService.createReview(body);
  }

  @Patch("/:reviewId")
  async updateReview(
    @Param("reviewId") reviewId: number,
    @Body() body: UpdateReviewPatchRequest
  ): Promise<string> {
    return await this.reviewService.updateReview(reviewId, body);
  }

  @Delete("/:reviewId")
  async deleteReviewById(@Param("reviewId") reviewId: number): Promise<string> {
    return await this.reviewService.deleteReview(reviewId);
  }
}
