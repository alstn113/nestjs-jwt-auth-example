import { EntityRepository, Repository } from 'typeorm';
import { CreateCategoryDto } from '@/category/dto/category.dto';
import { Category } from '@/category/entity/category.entity';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  findCategories(): Promise<Category[]> {
    return this.find();
  }
  findCategoryById(categoryId: number): Promise<Category> {
    return this.findOne({ id: categoryId });
  }
  createCategory(category: CreateCategoryDto): void {
    this.insert(category);
  }
  deleteCategory(categoryId: number): void {
    this.delete({ id: categoryId });
  }
}
