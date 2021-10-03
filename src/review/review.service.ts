import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateReviewDto,
  FindReviewResponseDto,
  ReviewResponseDto,
  UpdateReviewDto,
} from './dto/review.dto';
import { Review } from '@/review/entity/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  async findReviews(): Promise<FindReviewResponseDto[]> {
    return await this.reviewsRepository.find();
  }

  async findReviewById(reviewId: string): Promise<FindReviewResponseDto> {
    try {
      const review = await this.reviewsRepository.findOneOrFail(reviewId);
      return review;
    } catch (err) {
      throw err;
    }
  }

  async createReview(reviewBody: CreateReviewDto): Promise<ReviewResponseDto> {
    const newReview = await this.reviewsRepository.create({ ...reviewBody });
    return this.reviewsRepository.save(newReview);
  }

  async updateReview(reviewBody: UpdateReviewDto, reviewId: string): Promise<ReviewResponseDto> {
    const review = await this.findReviewById(reviewId);
    review.title = reviewBody.title;
    return this.reviewsRepository.save(review);
  }

  async deleteReview(reviewId: string): Promise<ReviewResponseDto> {
    const review = await this.findReviewById(reviewId);
    await this.reviewsRepository.remove(review);
    return review;
  }
}
