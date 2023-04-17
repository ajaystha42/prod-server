import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products';

@Controller('products')
export class ProductsController {
  constructor(private readonly prodService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.prodService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.prodService.getProductById(id);
  }
}
