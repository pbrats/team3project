import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent implements OnInit {
  isSignUpPage!: boolean;
  publisherService = inject(PublisherService);
  // pS = this.publisherService.publishData(this.isSignUpPage);

  form!: FormGroup;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isSignUpPage = true;
        this.publisherService.publishData(this.isSignUpPage);
      });
  }

  ngOnInit() {
    this.setFormValues();
  }

  setFormValues() {
    this.form = new FormGroup({
      phone: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    });

    this.router.events
      .pipe(
        //change boolean
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.isSignUpPage = false;
        this.publisherService.publishData(this.isSignUpPage);
      });
  }

  onSubmit(){
    if(this.form.valid){
      // service backend call
      console.log("valid!");
    } else {
      // error message
      this.form.markAllAsTouched();
      console.log("invalid");
    }
    console.log(this.form);
  }
}
