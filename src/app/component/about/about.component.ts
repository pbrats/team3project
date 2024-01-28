import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  publisherService =inject(PublisherService);
  isAboutPage=true;

  constructor(private titleService: Title,private router: Router) {
    titleService.setTitle("About us");
    this.isAboutPage=true;
    this.publisherService.publishData(this.isAboutPage);
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        if (event.url.includes('about')){
          this.isAboutPage=true;
          this.publisherService.publishData(this.isAboutPage);
        }else{
          this.isAboutPage=false;
          this.publisherService.publishData(this.isAboutPage);
        }
      }
    });
  }
}