import { IsNotEmpty } from "class-validator";

export class FindCategoryGETResponse {
  id: number;
  name: string;
}

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
