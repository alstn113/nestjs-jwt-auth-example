export class FindReviewResponseDto {
  id: number;
  title: string;
  rating: number;
}

export class CreateReviewDto {
  title: string;
  rating: number;
}

export class UpdateReviewDto {
  title?: string;
  rating?: number;
}
