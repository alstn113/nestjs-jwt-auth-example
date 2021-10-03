import { Controller, Get } from '@nestjs/common';
import { ReviewService } from '@/review/review.service';
import { FindReviewResponseDto } from './dto/review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reveiwService: ReviewService) {}

  @Get()
  getReviews(): Promise<FindReviewResponseDto[]> {
    return this.reveiwService.findAll();
  }
}
