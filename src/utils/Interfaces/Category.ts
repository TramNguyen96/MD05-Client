import { Product } from "./Product";

export interface Category {
    id: string;
    title: string;
    status: boolean;
    avatar: string;
    products: Product[];
}