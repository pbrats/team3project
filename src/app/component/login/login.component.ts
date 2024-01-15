import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup;

  constructor(){}

  ngOnInit(){
    this.setFormValues();
  }

  setFormValues(){
    this.form = new FormGroup({
      phone: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
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
  }

}
