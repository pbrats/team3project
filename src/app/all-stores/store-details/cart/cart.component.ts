import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
@Input() product!: Product;
products: any[]=[];
  service=inject(StoreService)

  ngOnInit() {
    this.products = [this.product];
    this.service.productSelected
      .subscribe(
        (product) => {
          this.products.push(product);
        }
      );

  }
}
