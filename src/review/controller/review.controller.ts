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
  CreateReviewDto,
  FindReviewResponseDto,
  UpdateReviewDto,
} from "@/review/dto/review.dto";

@Controller("/reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findReviews(): Promise<FindReviewResponseDto[]> {
    return this.reviewService.findReviews();
  }

  @Get("/:reviewId")
  findReviewById(
    @Param("reviewId") reviewId: number
  ): Promise<FindReviewResponseDto> {
    return this.reviewService.findReviewById(reviewId);
  }

  @Post()
  createReview(@Body(ValidationPipe) body: CreateReviewDto): string {
    return this.reviewService.createReview(body);
  }

  @Patch("/:reviewId")
  async updateReview(
    @Param("reviewId") reviewId: number,
    @Body() body: UpdateReviewDto
  ): Promise<string> {
    return await this.reviewService.updateReview(reviewId, body);
  }

  @Delete("/:reviewId")
  async deleteReviewById(@Param("reviewId") reviewId: number): Promise<string> {
    return await this.reviewService.deleteReview(reviewId);
  }
}
