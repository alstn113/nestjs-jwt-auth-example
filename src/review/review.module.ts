import { Module } from "@nestjs/common";
import { ReviewController } from "@/review/review.controller";
import { ReviewService } from "@/review/review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewRepository } from "@/review/review.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ReviewRepository])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
