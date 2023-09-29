export interface Picture {
    id: string;
    optionId: string;
    icon: string;
}

export interface Option {
    id: string;
    productId: string;
    price: number;
    status: boolean;
    title: string;
    pictures: Picture[]
}



export interface Product {
    id: string;
    categoryId: string;
    name: string;
    des: string;
    options: Option[]
}