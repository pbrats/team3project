import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';
import { Title } from '@angular/platform-browser';
import { StoresInfosService } from '../../service/stores-infos.service';
import { StoresService } from '../../service/stores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previous-orders.component.html',
  styleUrl: './previous-orders.component.css'
})
export class PreviousOrdersComponent {
  User:any;
  publisherService =inject(PublisherService);
  isWelcomePage=false;
  storeInfosService =inject(StoresInfosService);
  storesInfos:any;
  stores:any;
  storeService: StoresService =inject(StoresService);
  router: Router =inject(Router);
  
  constructor(private titleService: Title) {
    titleService.setTitle("Previous Orders");
  }
 
  ngOnInit(){
    this.storeInfosService.getStoresInfos().subscribe((response) => {
      this.storesInfos = response;
    });
    this.storeService.getStores().subscribe((response) => {
      this.stores = response;
    });
    
    this.publisherService.publishData(this.isWelcomePage);
    const storedUser = sessionStorage.getItem('User');
    // console.log( storedUser);
    if (storedUser) {
      // Parse the stored JSON string back into an object
      this.User = JSON.parse(storedUser);
      // console.log(this.User);
      // Now, this.User contains the information of the authenticated user
    } else {
      // Handle the case when no user information is stored in local storage
      console.log('No user information found in local storage');
    }
  }
  onViewStoreDetails(idClicked: number) {
    const foundStore = this.stores.find((store: any) => store.id === idClicked);
    // console.log(foundStore);
    if (foundStore){
      this.router.navigate(["stores",idClicked]);
    }else{
      this.router.navigate(["menu-not-found"]);
    }
  }
}
