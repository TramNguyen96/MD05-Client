import { Category } from "./Category";
import { ProductPicture } from "./ProductPicture";

export interface Product {
    id: string;
    name: string;
    des: string;
    status: boolean;
    categoryId: string;
    category: Category;
    // picture: ProductPicture[];
    price: number;
}


