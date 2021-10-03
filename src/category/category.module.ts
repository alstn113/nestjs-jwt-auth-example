import { Module } from '@nestjs/common';
import { CategoryService } from '@/category/category.service';
import { CategoryController } from '@/category/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '@/category/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
