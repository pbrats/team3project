import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Store } from '../interfaces/store';
import { StoreItemComponent } from './store-item/store-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreMenuComponent } from './store-details/store-menu/store-menu.component';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-all-stores',
  standalone: true,
  imports: [StoreItemComponent, FormsModule, CommonModule, StoreDetailsComponent, StoreMenuComponent],
  templateUrl: './all-stores.component.html',
  styleUrl: './all-stores.component.css'
})
export class AllStoresComponent implements OnInit {
  service=inject(StoreService)
  stores: Store[] = [];
  selectedStore!: Store;

  constructor() {
    
  }
  ngOnInit() {
    
    this.service.storeSelected.subscribe({
      next: (res: any) => {
        (this.selectedStore = res);
        console.log(res);
      }
    });
    
  }

  ngChange() {
    this.service.getStore().subscribe({
      next: (res: any) => {
        (this.stores = res)
        console.log(this.stores);
      }
    });
  }
  
  
}
