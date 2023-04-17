import { Injectable } from '@nestjs/common';
import products, { Product } from './products';

@Injectable()
export class ProductsService {
  getProducts(): Product[] {
    return products;
  }

  getProductById(id: string): Product | null {
    const product = products.find((x) => x.id === +id);
    if (product) return product;
    else return null;
  }
}
