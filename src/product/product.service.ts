import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '@/Product/entity/product.entity';
import { CreateProductDto, ProductResponseDto, UpdateProductDto } from '@/Product/dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<ProductResponseDto[]> {
    return await this.productsRepository.find();
  }
  async getProductById(productId: string): Promise<ProductResponseDto> {
    try {
      const product = await this.productsRepository.findOneOrFail(productId);
      return product;
    } catch (err) {
      throw err;
    }
  }
  async createStudent(productBody: CreateProductDto): Promise<ProductResponseDto> {
    const newProduct = await this.productsRepository.create({ ...productBody });
    return this.productsRepository.save(newProduct);
  }

  async updateStudent(
    productBody: UpdateProductDto,
    productId: string,
  ): Promise<ProductResponseDto> {
    const product = await this.getProductById(productId);
    product.name = productBody.name;
    return this.productsRepository.save(product);
  }

  async deleteProduct(productId: string): Promise<ProductResponseDto> {
    const product = await this.getProductById(productId);
    await this.productsRepository.remove(product);
    return product;
  }
}
