import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    const existingProduct = this.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, initialize quantity if undefined
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
    } else {
      // Add the product with quantity 1 if not in the cart
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  clearCart(): Product[] {
    return this.cart=[];
  }
}
