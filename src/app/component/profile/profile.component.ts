import { Component } from '@angular/core';

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


  ngOnInit(){ //get user data from session storage
    this.phone = JSON.stringify(sessionStorage.getItem("phone")).replace(/"/g, "");
    this.email = JSON.stringify(sessionStorage.getItem("email")).replace(/"/g, "");
    this.first_name = JSON.stringify(sessionStorage.getItem("first_name")).replace(/"/g, "");
    this.last_name = JSON.stringify(sessionStorage.getItem("last_name")).replace(/"/g, "");
    this.address = JSON.stringify(sessionStorage.getItem("address")).replace(/"/g, "");
  }

  updateAddress(newAddress: string){
    sessionStorage.setItem("address", newAddress);
    this.address = JSON.stringify(sessionStorage.getItem("address")).replace(/"/g, "");
  }
}
