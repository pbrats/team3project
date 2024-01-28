import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoriesComponent } from '../categories/categories.component';
import { Product } from '../../interfaces/product';
import { StoreService } from '../../service/store.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, 
            ProductItemComponent, 
            CategoriesComponent, 
            FormsModule, 
            ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  @Input() categories!:string[];
  category:any;
  allProducts!: any;
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
        });
      },
    });
  }
}