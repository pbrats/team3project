import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../service/store.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/category-product-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreDescriptionComponent } from './store-description/store-description.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../interfaces/store';
import { Product } from '../interfaces/product';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryProductListComponent } from './products-list/category-product-list/category-product-list.component';

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
    CategoriesComponent,
    CategoryProductListComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  service = inject(StoreService);
  activatedRoute = inject(ActivatedRoute);

  selectedProduct: any;
  previewedProduct: any;
  store: any;
  products: any[] = [];
  categoryProducts: Product[] = [];
  id!: number;
  selectedCategory: any;
  stores: Store[] = [];
  allProducts: any;
  cats: any;
  categories: string[] = [];
  @Input() category!:string;

  constructor() {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.id = +params['id'];
        this.service.getStoreById(this.id).subscribe({
          next: (res) => {
            this.store = res;
            console.log(this.store);
            this.categories=this.service.getProductCategoriesByStore(this.store.products);
            console.log(this.categories)
          }
        });
        this.service.getProductsByStore(this.id).subscribe({
          next: (res) => {
            this.allProducts = res;
            console.log(this.allProducts);
          }
        })
      },
    });


    this.service.categorySelected.subscribe({
      next: (res: any) => (this.selectedCategory = res),
    });

    this.service.productSelected.subscribe({
      next: (res: any) => (this.selectedProduct = res),
    });

    this.service.productPreviewed.subscribe({
      next: (res: any) => (this.previewedProduct = res),
    });

  }

}




