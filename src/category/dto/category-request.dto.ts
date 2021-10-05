import { IsNotEmpty } from "class-validator";

export class CreateCategoryPostRequest {
  @IsNotEmpty()
  name: string;
  reviewId: number;
}

export class CategoryPostRequest {
  @IsNotEmpty()
  name: string;
  review: {
    id: number;
  };
}
