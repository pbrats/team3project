import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
// @Input() categories: string[] | undefined;
@Input() products: Product[]=[];
  categories: string[]=[];
  service = inject(StoreService)

ngOnInit() { 
  this.categories=this.products
  .map(product => product.category)
  .filter((value, index, self) => self.indexOf(value) === index)
  console.log(this.products)
  console.log(this.categories)
  this.service.categories.emit(this.categories)
}

onSelectCategory() {

}

}
