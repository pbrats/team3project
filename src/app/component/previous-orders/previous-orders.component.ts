import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-orders',
  standalone: true,
  imports: [],
  templateUrl: './previous-orders.component.html',
  styleUrl: './previous-orders.component.css'
})
export class PreviousOrdersComponent {
  User:any;
  ngOnInit(){
    const storedUser = sessionStorage.getItem('User');
    console.log( storedUser);
    if (storedUser) {
      // Parse the stored JSON string back into a JavaScript object
      this.User = JSON.parse(storedUser);
      console.log(this.User);
      // Now, this.authenticatedUser contains the information of the authenticated user
    } else {
      // Handle the case when no user information is stored in local storage
      console.log('No user information found in local storage');
    }
  }
}
