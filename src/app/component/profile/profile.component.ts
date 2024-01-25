import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  phone!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
  address!: string;

  addressForm!: FormGroup;

  newAddressBlock: boolean = false;

  ngOnInit() {
    //get user data from session storage
    this.phone = JSON.stringify(sessionStorage.getItem('phone')).replace(
      /"/g,
      ''
    );
    this.email = JSON.stringify(sessionStorage.getItem('email')).replace(
      /"/g,
      ''
    );
    this.first_name = JSON.stringify(
      sessionStorage.getItem('first_name')
    ).replace(/"/g, '');
    this.last_name = JSON.stringify(
      sessionStorage.getItem('last_name')
    ).replace(/"/g, '');
    this.address = JSON.stringify(sessionStorage.getItem('address')).replace(
      /"/g,
      ''
    );

    this.addressForm = new FormGroup({
      address: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      sessionStorage.setItem("address", this.addressForm.value.address);
      this.address = JSON.stringify(sessionStorage.getItem('address')).replace(
        /"/g,
        ''
      );
    }
    else{
      this.addressForm.markAllAsTouched();
    }
  }

  showNewAddress() {
    this.newAddressBlock = true;
  }
}
