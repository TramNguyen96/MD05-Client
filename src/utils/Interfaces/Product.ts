

export interface Picture {
    id: string;
    optionId: string;
    icon: string;
    avatar: string
}

export interface Option {
    id: string;
    productId: string;
    price: number;
    status: boolean;
    title: string;
    pictures: Picture[]
    product: Product
}

export interface Product {
    id: string;
    categoryId: string;
    name: string;
    des: string;
    options: Option[];
}