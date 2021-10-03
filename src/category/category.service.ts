import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CategoryResponseDto,
  CreateCategoryDto,
  FindCategoryResponseDto,
} from './dto/category.dto';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findCategories(): Promise<FindCategoryResponseDto[]> {
    return await this.categoriesRepository.find();
  }

  async findCategoryById(categoryId: number): Promise<FindCategoryResponseDto> {
    try {
      const category = await this.categoriesRepository.findOneOrFail(categoryId);
      return category;
    } catch (err) {
      throw err;
    }
  }

  async createReview(categoryBody: CreateCategoryDto): Promise<CategoryResponseDto> {
    const newCategory = await this.categoriesRepository.create({ ...categoryBody });
    return this.categoriesRepository.save(newCategory);
  }

  async deleteReview(categoryId: number): Promise<CategoryResponseDto> {
    const category = await this.findCategoryById(categoryId);
    await this.categoriesRepository.delete(category);
    return category;
  }
}
