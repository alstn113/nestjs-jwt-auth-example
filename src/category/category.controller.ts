import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from '@/category/category.service';
import { CreateCategoryDto, FindCategoryResponseDto } from '@/category/dto/category.dto';

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findCategories(): Promise<FindCategoryResponseDto[]> {
    return this.categoryService.findCategories();
  }

  @Get('/:categoryId')
  findCategoryById(@Param('categoryId') categoryId: number): Promise<FindCategoryResponseDto> {
    return this.categoryService.findCategoryById(categoryId);
  }

  @Post()
  createCategory(@Body() body: CreateCategoryDto): string {
    return this.categoryService.createCategory(body);
  }

  @Delete('/:categoryId')
  deleteCategory(@Param('categoryId') categoryId: number): string {
    return this.categoryService.deleteCategory(categoryId);
  }
}
