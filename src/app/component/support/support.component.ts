import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  publisherService =inject(PublisherService);
  isSupportPage=true;
  constructor(private titleService: Title,private router: Router) {
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
}