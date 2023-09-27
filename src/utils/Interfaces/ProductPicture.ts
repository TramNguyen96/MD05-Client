import { Product } from "./Product";

export interface ProductPicture {
    id: string;
    path: string;
    productId: string;
    product: Product;
}