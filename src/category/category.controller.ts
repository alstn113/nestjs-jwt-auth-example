import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  CategoryResponseDto,
  CreateCategoryDto,
  FindCategoryResponseDto,
} from './dto/category.dto';

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findCategories(): Promise<FindCategoryResponseDto[]> {
    return await this.categoryService.findCategories();
  }

  @Get()
  async findCategoryById(
    @Param('categoryId') categoryId: string,
  ): Promise<FindCategoryResponseDto> {
    return await this.categoryService.findCategoryById(categoryId);
  }

  @Post()
  async createCategory(@Body() body: CreateCategoryDto): Promise<CategoryResponseDto> {
    return await this.categoryService.createReview(body);
  }

  @Delete()
  async deleteCategory(categoryId: string): Promise<CategoryResponseDto> {
    return await this.categoryService.deleteReview(categoryId);
  }
}
