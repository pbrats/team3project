import { Component, inject } from '@angular/core';
import { PublisherService } from '../../service/publisher.service';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
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
    const storedUser = sessionStorage.getItem('User');
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

  SignOut(){
    sessionStorage.clear();
  }

}
