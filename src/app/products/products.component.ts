import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from '../services/store.service';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreDescriptionComponent } from './store-description/store-description.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../interfaces/store';
import { map } from 'rxjs';
import { Product } from '../interfaces/product';
import { CategoriesComponent } from './categories/categories.component';

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
    CategoriesComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
service=inject(StoreService)
activatedRoute = inject(ActivatedRoute);

selectedProduct: any;
previewedProduct: any;
store:any;
products: Product[] = [];
categories: string[] = [];
  id: number = 0;

constructor() {
  
}
  ngOnInit() {
    this.activatedRoute.params
    .subscribe({
      next: (params: any) => {
        let id = params.id;
        console.log(params.id);
        this.service.getStoreById(id)
        .subscribe({
          next: res => {
              console.log(res);
              this.store = res;
          }
        })
      }
    })

    this.service.getCategories().subscribe(
      (categories: string[]) => {
        console.log(categories)
        this.categories = categories;
      }
    );

    this.service.getProducts()
    .pipe(map((response: any) => response.products))
    .subscribe({
      next: response => {
        console.log(response)
        this.products = response;
      }
    });
      

    this.service.productSelected.subscribe({
      next: (res: any) => (this.selectedProduct = res),
    });

    this.service.productPreviewed.subscribe({
      next: (res: any) => (this.previewedProduct = res),
    });
    
  }
}
