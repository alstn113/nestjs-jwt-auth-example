import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@/category/category.repository';
import { CreateCategoryDto, FindCategoryResponseDto } from '@/category/dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categories: CategoryRepository) {}

  findCategories(): Promise<FindCategoryResponseDto[]> {
    try {
      return this.categories.findCategories();
    } catch (err) {
      throw new Error('404 findCategories Failed');
    }
  }

  async findCategoryById(categoryId: number): Promise<FindCategoryResponseDto> {
    try {
      return this.categories.findCategoryById(categoryId);
    } catch (err) {
      throw new Error('404 findCategoryById Failed');
    }
  }

  createCategory(categoryBody: CreateCategoryDto): string {
    try {
      this.categories.createCategory({ ...categoryBody });
      return '200 createCategory Success';
    } catch (err) {
      throw new Error('404 createCategory Failed');
    }
  }

  deleteCategory(categoryId: number): string {
    try {
      this.categories.deleteCategory(categoryId);
      return '200 deleteCategory Success';
    } catch (err) {
      throw new Error('404 deleteCategory Failed');
    }
  }
}
