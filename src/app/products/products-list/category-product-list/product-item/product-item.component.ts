
import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../../../../services/store.service';
import { Product } from '../../../../interfaces/product';
import { CartService } from '../../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../../../../interfaces/store';
import { CategoryProductListComponent } from '../category-product-list.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryProductListComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  ngOnInit(){
   
  }
  service = inject(StoreService);
  @Input() product!: Product;
  cartService=inject(CartService);

  
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
  

