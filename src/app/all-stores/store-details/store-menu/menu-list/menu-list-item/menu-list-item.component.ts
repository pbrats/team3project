import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../../../interfaces/product';
import { StoreService } from '../../../../../services/store.service';

@Component({
  selector: 'app-menu-list-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.css'
})
export class MenuListItemComponent {
@Input() product!: Product;
service=inject(StoreService);

onSelected(){
  this.service.productSelected.emit(this.product)
  }
}
