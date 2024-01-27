import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent implements OnInit {
  isSignUpPage=true;
  publisherService = inject(PublisherService);
  signUpForm!: FormGroup;

  constructor(private router: Router) {
    this.isSignUpPage=true;
    this.publisherService.publishData(this.isSignUpPage);
      this.router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          if (event.url.includes('sign-up')){
            this.isSignUpPage=true;
            this.publisherService.publishData(this.isSignUpPage);
          }else{
            this.isSignUpPage=false;
            this.publisherService.publishData(this.isSignUpPage);
          }
        }
      });
  }
  ngOnInit() {
    this.setFormValues();
  }
  setFormValues() {
    this.signUpForm = new FormGroup({
      phone: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      address: new FormControl(""),
      password: new FormControl("")
    }); 
    
  }
  onSubmit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
      localStorage.setItem('alertShown','no');
      sessionStorage.setItem("User",JSON.stringify(this.signUpForm.value));
      // sessionStorage.setItem("phone",this.signUpForm.value.phone);
      // sessionStorage.setItem("email",this.signUpForm.value.email);
      // sessionStorage.setItem("first_name",this.signUpForm.value.first_name);
      // sessionStorage.setItem("last_name",this.signUpForm.value.last_name);
      // sessionStorage.setItem("address",this.signUpForm.value.address);
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}