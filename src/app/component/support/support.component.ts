import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  publisherService =inject(PublisherService);
  isSupportPage=true;
  FormData!: FormGroup;
  
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
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Comment: new FormControl('', [Validators.required])
    })
  }
  onSubmit(FormData: any) {
    console.log(FormData)
  }
}