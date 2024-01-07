import { Component, OnInit,inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Store } from '../../interfaces/store';
import { StoreItemComponent } from '../../component/store-item/store-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-stores',
  standalone: true,
  imports: [StoreItemComponent, CommonModule],
  templateUrl: './all-stores.component.html',
  styleUrl: './all-stores.component.css'
})
export class AllStoresComponent {
  service=inject(StoreService)
stores: Store[]=[];

ngOnInit() {
  this.service.getStores().subscribe({
    next: (res) => (this.stores = res)
  });
}
}
