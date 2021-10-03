import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewService } from '@/review/review.service';
import { CreateReviewDto, FindReviewResponseDto, UpdateReviewDto } from '@/review/dto/review.dto';

@Controller('/reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findReviews(): Promise<FindReviewResponseDto[]> {
    return this.reviewService.findReviews();
  }

  @Get('/:reviewId')
  findReviewById(@Param('reviewId') reviewId: number): Promise<FindReviewResponseDto> {
    return this.reviewService.findReviewById(reviewId);
  }

  @Post()
  createReview(@Body() body: CreateReviewDto): string {
    return this.reviewService.createReview(body);
  }

  @Patch('/:reviewId')
  updateReview(@Param('reviewId') reviewId: number, @Body() body: UpdateReviewDto): string {
    return this.reviewService.updateReview(reviewId, body);
  }

  @Delete('/:reviewId')
  deleteReviewById(@Param('reviewId') reviewId: number): string {
    return this.reviewService.deleteReview(reviewId);
  }
}
