import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PublisherService } from '../../service/publisher.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  publisherService =inject(PublisherService);
  isTermsPage=true;

  constructor(private titleService: Title,private router: Router) {
    titleService.setTitle("Terms of use");
    this.isTermsPage=true;
    this.publisherService.publishData(this.isTermsPage);
      this.router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          if (event.url.includes('terms-of-use')){
            this.isTermsPage=true;
            this.publisherService.publishData(this.isTermsPage);
          }else{
            this.isTermsPage=false;
            this.publisherService.publishData(this.isTermsPage);
          }
        }
      });
  }
}