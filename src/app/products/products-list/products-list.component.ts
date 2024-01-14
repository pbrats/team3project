import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductItemComponent } from './category-product-list/product-item/product-item.component';
import { CategoriesComponent } from '../categories/categories.component';
import { Store } from '../../interfaces/store';
import { Product } from '../../interfaces/product';
import { StoreService } from '../../services/store.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryProductListComponent } from './category-product-list/category-product-list.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, 
            ProductItemComponent, 
            CategoriesComponent, 
            FormsModule, 
            CategoryProductListComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
@Input() categories:string[]=[];
category:any;
allProducts: Product[]=[];
service = inject(StoreService);
  activatedRoute = inject(ActivatedRoute);
  id!: number;
  store!: any;

ngOnInit() {
  this.activatedRoute.params.subscribe({
    next: (params: any) => {
      this.id = +params['id'];
      this.service.getProductsByStore(this.id).subscribe({
        next: (res) => {
          this.allProducts = res;
          console.log(this.allProducts);
        }
      })
    },
  });
}
}