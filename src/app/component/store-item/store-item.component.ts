import { Component, Input, inject } from '@angular/core';
import { Store } from '../../interfaces/store';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoresInfosService } from '../../service/stores-infos.service';
import { StoresService } from '../../service/stores.service';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css'
})
export class StoreItemComponent {
@Input() store!: Store;
router: Router = inject(Router);
storeInfosService: StoresInfosService =inject(StoresInfosService);
storeInfos: any;
stores:any;
storeService: StoresService =inject(StoresService);

ngOnInit() {
  this.storeInfosService.getStoresInfos().subscribe((response) => {
    this.storeInfos = response;
  });
  this.storeService.getStores().subscribe((response) => {
    this.stores = response;
  });
}
  onViewStoreDetails(idClicked: number) {
    const foundStore = this.stores.find((store: any) => store.id === idClicked);
    console.log(foundStore);
    if (foundStore){
      this.router.navigate(["stores",idClicked]);
    }else{
      this.router.navigate(["menu-not-found"]);
    }
  }
}