import { IsInt, IsNotEmpty, Max, Min } from "class-validator";

export class FindReviewResponseDto {
  id: number;
  title: string;
  rating: number;
}

export class CreateReviewDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;
}

export class UpdateReviewDto {
  title?: string;
  rating?: number;
}
