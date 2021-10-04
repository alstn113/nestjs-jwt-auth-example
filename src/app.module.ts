import { Module } from "@nestjs/common";
import { ReviewModule } from "@/review/review.module";
import { CategoryModule } from "@/category/category.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(), ReviewModule, CategoryModule],
})
export class AppModule {}
