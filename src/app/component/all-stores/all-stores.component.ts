import { Component, inject } from '@angular/core';
import { StoreService } from '../../service/store.service';
import { StoreItemComponent } from '../../component/store-item/store-item.component';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { StoresInfosService } from '../../service/stores-infos.service';

@Component({
  selector: 'app-all-stores',
  standalone: true,
  imports: [StoreItemComponent, CommonModule],
  templateUrl: './all-stores.component.html',
  styleUrl: './all-stores.component.css'
})
export class AllStoresComponent {
  service=inject(StoreService)
  stores: any;
  hasLoadedStores : boolean= false;
  storeInfosService: StoresInfosService =inject(StoresInfosService);
  storeInfos: any;

ngOnInit() {
  this.storeInfosService.getStoresInfos().subscribe((response) => {
    this.storeInfos = response;
  });
  this.service.getStores().subscribe({
    next: (res) => {
      setTimeout(() =>{
        (this.stores = res)
        this.hasLoadedStores=true;
      },10);
    }
  });
}
  constructor(private titleService: Title) {
    titleService.setTitle("Stores");
  }
  sortStoresByRating(): void {
    this.stores.forEach((restaurant: any) => {
      const matchingStore = this.storeInfos.find((store: { name: any; }) => store.name === restaurant.name);
      if (matchingStore) {
        restaurant.rating = matchingStore.rating;
      }
    });
    this.stores.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
  }
  sortStoresByDeliveryTime():void {
    this.stores.forEach((restaurant: any) => {
      const matchingStore = this.storeInfos.find((store: { name: any; }) => store.name === restaurant.name);
      if (matchingStore) {
        restaurant.delivery_time = matchingStore.delivery_time;
      }
    });
    this.stores.sort((a: { delivery_time: number; }, b: { delivery_time: number; }) =>  a.delivery_time - b.delivery_time);
  }
  sortStoresAlphabetically():void {
    this.stores.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name));
  }
  sortStoresZtoA():void {
    this.stores.sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name));
  }
}