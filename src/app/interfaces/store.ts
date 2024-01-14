import { Product } from "./product";

export interface Store {
    id: number;
    name: string;
    category: string;
    address: string;
    logo: string;
    cover: string;
    products: Product[];
}