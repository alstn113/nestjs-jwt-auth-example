import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindReviewResponseDto } from './dto/review.dto';
import { Review } from '@/review/entity/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  findAll(): Promise<FindReviewResponseDto[]> {
    return this.reviewsRepository.find();
  }
}
