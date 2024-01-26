import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';

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
 
  ngOnInit(){
    
    this.publisherService.publishData(this.isWelcomePage);
    const storedUser = sessionStorage.getItem('User');
    console.log( storedUser);
    if (storedUser) {
      // Parse the stored JSON string back into a JavaScript object
      this.User = JSON.parse(storedUser);
      console.log(this.User);
      if(this.User.previous_orders){
        console.log("e")
      }else{
        console.log("o")
      }
      // Now, this.authenticatedUser contains the information of the authenticated user
    } else {
      // Handle the case when no user information is stored in local storage
      console.log('No user information found in local storage');
    }
  }
}
