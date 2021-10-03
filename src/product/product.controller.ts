import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '@/product/product.service';
import {
  FindProductResponseDto,
  ProductResponseDto,
  CreateProductDto,
  UpdateProductDto,
} from '@/product/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<FindProductResponseDto[]> {
    return await this.productService.getProducts();
  }

  @Get('/:productId')
  async getProductById(@Param('productId') productId: string): Promise<FindProductResponseDto> {
    return await this.getProductById(productId);
  }

  @Post()
  async createProduct(@Body() body: CreateProductDto): Promise<ProductResponseDto> {
    return await this.createProduct(body);
  }

  @Put('/:productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() body: UpdateProductDto,
  ): Promise<ProductResponseDto> {
    return await this.productService.updateStudent(body, productId);
  }

  @Delete('/:productId')
  async deleteProduct(@Param('productId') productId: string): Promise<ProductResponseDto> {
    return await this.productService.deleteProduct(productId);
  }
}
