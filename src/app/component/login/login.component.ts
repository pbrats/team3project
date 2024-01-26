import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PublisherService } from '../../service/publisher.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  publisherService = inject(PublisherService);
  router = inject(Router);
  userService: UsersService=inject(UsersService);
  showErrorAlert = false;
  form!: FormGroup;

  constructor(){}
  ngOnInit(){
    this.setFormValues();
  }
  setFormValues(){
    this.form = new FormGroup({
      phone: new FormControl("", [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email])
    })
  }
  onSubmit(){
    let email = this.form.value.email;
    let phone = this.form.value.phone;
    this.userService.authenticate(email, phone).subscribe(authenticatedUser => {
      console.log(authenticatedUser)
      if (authenticatedUser) {
        // Authentication successful, you can navigate or perform other actions
        console.log('Login successful!');
        console.log(authenticatedUser)
        this.showErrorAlert = false;
        sessionStorage.setItem('User', JSON.stringify(authenticatedUser));
        this.router.navigate(["discovery"]);
      } else {
        // Authentication failed, show error message or take appropriate action
        console.log('Invalid email or password');
        console.log(authenticatedUser)
        this.showErrorAlert = true;
      }
    });
    if(this.form.valid){
      console.log("valid!");
    } else {
      this.form.markAllAsTouched();
      console.log("invalid");
    }
    this.form.reset();
    // console.log(this.form);
  }
  closeErrorAlert() {
    this.showErrorAlert = false;
  }
}