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
import {
  CreateCategoryPostRequest,
  FindCategoryGETResponse,
} from "@/category/dto/category.dto";

@Controller("/categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findCategories(): Promise<FindCategoryGETResponse[]> {
    return this.categoryService.findCategories();
  }

  @Get("/:categoryId")
  findCategoryById(
    @Param("categoryId") categoryId: number
  ): Promise<FindCategoryGETResponse> {
    return this.categoryService.findCategoryById(categoryId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(
    @Body() body: CreateCategoryPostRequest
  ): Promise<string> {
    return this.categoryService.createCategory(body);
  }

  @Delete("/:categoryId")
  deleteCategory(@Param("categoryId") categoryId: number): string {
    return this.categoryService.deleteCategory(categoryId);
  }
}
