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
      phone: new FormControl("", [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required,Validators.minLength(4)])
    }); 
    
  }
  onSubmit(){
    if(this.signUpForm.valid){
      localStorage.setItem('alertShown','no');
      sessionStorage.setItem("User",JSON.stringify(this.signUpForm.value));
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }

}