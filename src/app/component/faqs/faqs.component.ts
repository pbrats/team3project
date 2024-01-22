import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  publisherService =inject(PublisherService);
  isFaqsPage=true;

  constructor(private titleService: Title,private router: Router) {
    titleService.setTitle("FAQs");
    this.isFaqsPage=true;
    this.publisherService.publishData(this.isFaqsPage);
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        if (event.url.includes('faqs')){
          this.isFaqsPage=true;
          this.publisherService.publishData(this.isFaqsPage);
        }else{
          this.isFaqsPage=false;
          this.publisherService.publishData(this.isFaqsPage);
        }
      }
    });
  }
}