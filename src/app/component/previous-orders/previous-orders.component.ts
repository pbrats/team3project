import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';
import { Title } from '@angular/platform-browser';
import { StoresInfosService } from '../../service/stores-infos.service';

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

  constructor(private titleService: Title) {
    titleService.setTitle("Previous Orders");
  }
 
  ngOnInit(){
    this.storeInfosService.getStoresInfos().subscribe((response) => {
      this.storesInfos = response;
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
}
