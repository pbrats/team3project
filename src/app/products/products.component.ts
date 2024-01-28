import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../service/store.service';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreDescriptionComponent } from './store-description/store-description.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../interfaces/store';
import { Product } from '../interfaces/product';
import { CategoriesComponent } from './categories/categories.component'
import { Title } from '@angular/platform-browser';
import { ProductDetailsComponent } from './product-details/product-details.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ShopingCartComponent,
    ProductsListComponent,
    ProductItemComponent,
    CommonModule,
    FormsModule,
    StoreDescriptionComponent,
    CategoriesComponent,
    ProductDetailsComponent
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
  catProducts:any[]=[];

  constructor(private titleService: Title) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.id = +params['id'];
        this.service.getStoreById(this.id).subscribe({
          next: (res) => {
            this.store = res;
            console.log(this.store);
            this.titleService.setTitle(`${this.store.name}`);
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
    this.service.getProductsByCategoryForStore(this.id).subscribe(productsByCategory => {
      console.log(productsByCategory);
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
  sortStoresByPriceDescending(): void {
    
    this.allProducts.sort((a: { price: number; }, b: { price: number; }) =>  a.price - b.price);
    //   console.log(categoryGroup)
    //   categoryGroup.products.sort((a, b) => b.price - a.price);
    // });
  }
  sortStoresByPriceAscending():void {
    this.allProducts.sort((a: { price: number; }, b: { price: number; }) =>  b.price - a.price);
  }
  sortStoresAlphabetically():void {
    this.allProducts.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));
  }
  sortStoresZtoA():void {
    this.allProducts.sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name));
  }

  getProductsByCat(categories:any,products:any) {
    for (let cat of categories){
      for (let pro of products){
        if (pro.category == cat) {
          this.catProducts.push(pro);
          console.log(this.catProducts);
        }
      }
    }
  }
}


