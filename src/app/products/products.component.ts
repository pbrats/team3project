import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from '../services/store.service';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreDescriptionComponent } from './store-description/store-description.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    ShopingCartComponent,
    ProductsListComponent,
    ProductItemComponent,
    CommonModule,
    FormsModule,
    StoreDescriptionComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
service=inject(StoreService)
store: any;
selectedProduct: any;
previewedProduct: any;

constructor() {
  this.service.getProducts().subscribe({
    next: (res: any) => (this.store = res)
  });
}
  ngOnInit() {
    console.log(this.store)
    this.service.productSelected.subscribe({
      next: (res: any) => (this.selectedProduct = res),
    });
    this.service.productPreviewed.subscribe({
      next: (res: any) => (this.previewedProduct = res),
    });
  }
}
