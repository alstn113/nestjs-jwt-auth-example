import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CategoryRepository } from "@/category/repository/category.repository";
import { CreateCategoryPostRequest } from "@/category/dto/category-request.dto";
import { CategoryResponse } from "@/category/dto/category-response.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { messages } from "@/config/messages.config";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository
  ) {}

  async findCategories(): Promise<CategoryResponse[]> {
    return await this.categoryRepository.findCategories();
  }

  async findCategoryById(categoryId: number): Promise<CategoryResponse> {
    const category = await this.categoryRepository.findCategoryById(categoryId);
    if (!category) {
      throw new HttpException(
        messages.FAILED.TO_FIND_CATEGORY_BY_ID,
        HttpStatus.NOT_FOUND
      );
    }
    return category;
  }

  async createCategory(
    categoryBody: CreateCategoryPostRequest
  ): Promise<string> {
    await this.categoryRepository.createCategory({
      ...categoryBody,
      review: { id: categoryBody.reviewId },
    });
    return messages.SUCCESS.TO_CREATE_CATEGORY;
  }

  async deleteCategory(categoryId: number): Promise<string> {
    await this.findCategoryById(categoryId);
    await this.categoryRepository.deleteCategory(categoryId);
    return messages.SUCCESS.TO_DELETE_CATEGORY;
  }
}
