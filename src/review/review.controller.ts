import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewService } from '@/review/review.service';
import {
  CreateReviewDto,
  FindReviewResponseDto,
  ReviewResponseDto,
  UpdateReviewDto,
} from './dto/review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reveiwService: ReviewService) {}

  @Get()
  async findReviews(): Promise<FindReviewResponseDto[]> {
    return await this.reveiwService.findReviews();
  }

  @Get('/:reviewId')
  async findReviewById(@Param('reviewId') reviewId: string): Promise<FindReviewResponseDto> {
    return await this.reveiwService.findReviewById(reviewId);
  }

  @Post()
  async createReview(@Body() body: CreateReviewDto): Promise<ReviewResponseDto> {
    return await this.reveiwService.createReview(body);
  }

  @Put('/:reviewId')
  async updateReview(
    @Param('reviewId') reviewId: string,
    @Body() body: UpdateReviewDto,
  ): Promise<ReviewResponseDto> {
    return await this.reveiwService.updateReview(body, reviewId);
  }

  @Delete('/:reviewId')
  async deleteReviewById(@Param('reviewId') reviewId: string): Promise<ReviewResponseDto> {
    return await this.reveiwService.deleteReview(reviewId);
  }
}
