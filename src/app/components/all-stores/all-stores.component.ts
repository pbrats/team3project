import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Store } from '../../interfaces/store';
import { StoreItemComponent } from './store-item/store-item.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-all-stores',
  standalone: true,
  imports: [StoreItemComponent, CommonModule],
  templateUrl: './all-stores.component.html',
  styleUrl: './all-stores.component.css'
})
export class AllStoresComponent implements OnInit {
service=inject(StoreService)
stores: Store[]=[];

ngOnInit() {
  this.service.getStores().subscribe({
    next: (res) => (this.stores = res)
  });

}

  


}
