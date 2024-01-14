import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-category-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './category-product-list.component.html',
  styleUrl: './category-product-list.component.css'
})
export class CategoryProductListComponent implements OnInit {
  @Input() allProducts: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

}