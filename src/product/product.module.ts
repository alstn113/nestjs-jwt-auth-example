import { Module } from '@nestjs/common';
import { ProductService } from '@/product/product.service';
import { ProductController } from '@/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
