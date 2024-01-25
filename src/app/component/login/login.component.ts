import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isWelcomePage!: boolean;
  publisherService = inject(PublisherService);
  router = inject(Router);

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
    if(this.form.valid){
      console.log("valid!");
    } else {
      this.form.markAllAsTouched();
      console.log("invalid");
    }
    console.log(this.form);
    this.isWelcomePage=false;
    console.log("isWelcomePage: " + this.isWelcomePage);
    this.publisherService.publishData(this.isWelcomePage);
    
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        if (event.url.includes('sign-up')){
          this.isWelcomePage=true;
          this.publisherService.publishData(this.isWelcomePage);
        }else{
          this.isWelcomePage=false;
          this.publisherService.publishData(this.isWelcomePage);
        }
      }
    });
  }


}
