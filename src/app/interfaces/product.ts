export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    // Add a new property for quantity
    quantity?: number;
    photo: string;
  }