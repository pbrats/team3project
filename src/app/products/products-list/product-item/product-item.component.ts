
import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Product } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  service=inject(StoreService);
  cartService=inject(CartService);

  ngOnInit() {
  
  }
  onSelected(){
  this.service.productSelected.emit(this.product)
  }
   onPreview() {
    this.service.productPreviewed.emit(this.product)
   }

   addToCart(product: Product): void {
    this.service.productSelected.emit(this.product)
    this.cartService.addToCart(product);
  }
  
  }
  

