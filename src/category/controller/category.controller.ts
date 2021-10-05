import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CategoryService } from "@/category/service/category.service";
import { CreateCategoryPostRequest } from "@/category/dto/category-request.dto";
import { CategoryResponse } from "../dto/category-response.dto";

@Controller("/categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findCategories(): Promise<CategoryResponse[]> {
    return await this.categoryService.findCategories();
  }

  @Get("/:categoryId")
  async findCategoryById(
    @Param("categoryId") categoryId: number
  ): Promise<CategoryResponse> {
    return await this.categoryService.findCategoryById(categoryId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(
    @Body() body: CreateCategoryPostRequest
  ): Promise<string> {
    return await this.categoryService.createCategory(body);
  }

  @Delete("/:categoryId")
  async deleteCategory(
    @Param("categoryId") categoryId: number
  ): Promise<string> {
    return await this.categoryService.deleteCategory(categoryId);
  }
}
