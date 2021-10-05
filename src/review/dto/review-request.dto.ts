import { IsInt, IsNotEmpty, Max, Min } from "class-validator";

export class CreateReviewPostRequest {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;
}

export class ReviewPostRequest {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;
}

export class UpdateReviewPatchRequest {
  title?: string;
  rating?: number;
}

export class ReviewPatchRequest {
  title?: string;
  rating?: number;
}
