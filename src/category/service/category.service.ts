import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "@/category/repository/category.repository";
import {
  CreateCategoryPostRequest,
  FindCategoryGETResponse,
} from "@/category/dto/category.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository
  ) {}

  findCategories(): Promise<FindCategoryGETResponse[]> {
    try {
      return this.categoryRepository.findCategories();
    } catch (err) {
      throw new Error("404 findCategories Failed");
    }
  }

  async findCategoryById(categoryId: number): Promise<FindCategoryGETResponse> {
    try {
      return this.categoryRepository.findCategoryById(categoryId);
    } catch (err) {
      throw new Error("404 findCategoryById Failed");
    }
  }

  async createCategory(
    categoryBody: CreateCategoryPostRequest
  ): Promise<string> {
    try {
      await this.categoryRepository.createCategory({
        ...categoryBody,
        review: { id: categoryBody.reviewId },
      });
      return "200 createCategory Success";
    } catch (err) {
      throw new Error("404 createCategory Failed");
    }
  }

  deleteCategory(categoryId: number): string {
    try {
      this.categoryRepository.deleteCategory(categoryId);
      return "200 deleteCategory Success";
    } catch (err) {
      throw new Error("404 deleteCategory Failed");
    }
  }
}
