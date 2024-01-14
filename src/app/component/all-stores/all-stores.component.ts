import { Component, inject } from '@angular/core';
import { StoreService } from '../../service/store.service';
import { Store } from '../../interfaces/store';
import { StoreItemComponent } from '../../component/store-item/store-item.component';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

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
  hasLoadedStores : boolean= false;

ngOnInit() {
  this.service.getStores().subscribe({
    next: (res) => {
      setTimeout(() =>{
        (this.stores = res)
        this.hasLoadedStores=true;
      },500);
    }
  });
}
constructor(private titleService: Title) {
  titleService.setTitle("Stores");
}
}
