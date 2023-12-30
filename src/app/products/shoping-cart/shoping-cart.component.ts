import { Component, Input, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent {
  @Input() product: any;
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
