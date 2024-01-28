import { Component, Input, SimpleChange, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
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
  ngOnInit(){
    // console.log(this.products);
  }
  ngOnChanges(change:SimpleChange) {
    // console.log(this.products);
  }
  ngOnDestroy(){
    this.products = this.cartService.clearCart();
  }
  constructor() {
    // Initialize cartItems with the items from the CartService
    this.products = this.cartService.getCart();
  }

  onClearOrder() {
    this.products = this.cartService.clearCart();

  }
}