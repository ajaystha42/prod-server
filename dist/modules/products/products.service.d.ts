import { Product } from './products';
export declare class ProductsService {
    getProducts(): Product[];
    getProductById(id: string): Product | null;
}
