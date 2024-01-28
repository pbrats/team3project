import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  publisherService =inject(PublisherService);
  isSupportPage=true;
  FormData!: FormGroup;
  showAlertFlag: boolean = false;
  showAlert() {
    this.showAlertFlag = true;
    // timeout to hide the alert after a certain duration
    setTimeout(() => {
      this.showAlertFlag = false;
    }, 5000); 
  }
  constructor(private titleService: Title,private router: Router,private builder: FormBuilder) {
    titleService.setTitle("Support");
    this.isSupportPage=true;
    this.publisherService.publishData(this.isSupportPage);
      this.router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          if (event.url.includes('support')){
            this.isSupportPage=true;
            this.publisherService.publishData(this.isSupportPage);
          }else{
            this.isSupportPage=false;
            this.publisherService.publishData(this.isSupportPage);
          }
        }
      });
  }
  ngOnInit() {
    this.setFormValues();
  }
  setFormValues(){
    this.FormData= new FormGroup({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', (Validators.compose([Validators.required, Validators.email]))),
    Comment: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    // console.log(this.FormData.value)
    this.FormData.reset();
    // alert("your form was submitted");
  }
}