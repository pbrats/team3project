import { Component, Input, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent {
  @Input() product: any;
  products: Product[]=[];
  cartService=inject(CartService);

  // ngOnInit() {
  //   this.products = [this.product];
  //   this.service.productSelected
  //     .subscribe(
  //       (product) => {
  //         this.products.push(product);
  //       }
  //     );

  // }
 

  constructor() {
    // Initialize cartItems with the items from the CartService
    this.products = this.cartService.getCart();
  }
}
