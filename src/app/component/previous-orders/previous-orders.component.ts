import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';
import { Title } from '@angular/platform-browser';

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
store_name: any;
  filteredOrders: any[] = [];
  orders: any;
  totalOrders: any;
  famousService: any;
  famousStores: any;
  
  constructor(private titleService: Title) {
    titleService.setTitle("Previous Orders");
  }
 
  ngOnInit(){
    
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
    
    

  

}};

