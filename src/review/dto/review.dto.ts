export class FindReviewResponseDto {
  id: string;
  title: string;
  rating: number;
}

export class ReviewResponseDto {
  id: string;
  title: string;
  rating: number;
}

export class CreateReviewDto {
  title: string;
  rating: number;
}

export class UpdateReviewDto {
  title: string;
  rating: number;
}
