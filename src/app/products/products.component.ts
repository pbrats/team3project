import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from '../services/store.service';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreDescriptionComponent } from '../all-stores/store-details/store-description/store-description.component';
import { Store } from '../interfaces/store';
import { Product } from '../interfaces/product';
import { map } from 'rxjs';
import { StoreDetailsComponent } from '../all-stores/store-details/store-details.component';

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
    StoreDescriptionComponent,
    StoreDetailsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
service=inject(StoreService)
stores: Store[]=[];
products: Product[]=[];
selectedProduct: any;
previewedProduct: any;
id!:number;
  hasLoaded: boolean= false;
  selectedStore: any;

constructor() {
  
}
  ngOnInit() {
    this.service.getStore().subscribe({
      next: (res: any) => (this.stores = res)
    });
    this.service.getProducts()
    .pipe(map((response: any) => response.products))
    .subscribe({
      next: response => {
          console.log(response);
          this.products = response;
          this.hasLoaded = true;
      }
    })
    
    this.service.productSelected.subscribe({
      next: (res: any) => (this.selectedProduct = res),
    });
    this.service.productPreviewed.subscribe({
      next: (res: any) => (this.previewedProduct = res),
    });
    this.service.storeSelected.subscribe({
      next: (res: any) => (this.selectedStore = res),
    });
  }
}
