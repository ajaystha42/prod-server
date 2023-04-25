import { ProductsService } from './products.service';
import { Product } from './products';
export declare class ProductsController {
    private readonly prodService;
    constructor(prodService: ProductsService);
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
}
