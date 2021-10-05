import { EntityRepository, Repository } from "typeorm";
import { CategoryPostRequest } from "@/category/dto/category.dto";
import { Category } from "@/category/entity/category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  findCategories(): Promise<Category[]> {
    return this.find({ relations: ["review"] });
  }
  findCategoryById(categoryId: number): Promise<Category | undefined> {
    return this.findOne(categoryId, { relations: ["review"] });
  }
  createCategory(category: CategoryPostRequest): void {
    this.insert(category);
  }
  deleteCategory(categoryId: number): void {
    this.delete(categoryId);
  }
}
