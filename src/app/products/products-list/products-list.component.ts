import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, CategoriesComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
@Input() store: any;

}
