import { Component, inject } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  phone!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
  address!: string;
  User:any;
  publisherService =inject(PublisherService);
  isWelcomePage=false;
  constructor(private titleService: Title) {
    titleService.setTitle("Profile");
  }
  ngOnInit(){ 
    this.publisherService.publishData(this.isWelcomePage);
    //get user data from session storage
    // this.phone = JSON.stringify(sessionStorage.getItem("phone")).replace(/"/g, "");
    // this.email = JSON.stringify(sessionStorage.getItem("email")).replace(/"/g, "");
    // this.first_name = JSON.stringify(sessionStorage.getItem("first_name")).replace(/"/g, "");
    // this.last_name = JSON.stringify(sessionStorage.getItem("last_name")).replace(/"/g, "");
    // this.address = JSON.stringify(sessionStorage.getItem("address")).replace(/"/g, "");
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
  updateAddress(newAddress: string){
    sessionStorage.setItem("address", newAddress);
    this.address = JSON.stringify(sessionStorage.getItem("address")).replace(/"/g, "");
  }
}
