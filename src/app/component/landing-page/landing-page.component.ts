import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    (trigger('moveHeading', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('700ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ])),
    (trigger('moveButton', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('750ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ])),(trigger('moveImage', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('850ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ]))
  ]
})
export class LandingPageComponent implements OnInit {
  animateHeading = false;
  animateButton = false;
  animateImage = false;

  isWelcomePage=true;
  publisherService =inject(PublisherService);
  pS=this.publisherService.publishData(this.isWelcomePage);

  buttonOrderClicked=false;
  @Output() actionEventEmitter =new EventEmitter();
  
  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle("Welcome");
  }

  ngOnInit(){
    this. triggerAnimation();
    
    // console.log(isWelcomePage);
    // this.router.events.subscribe((event) => console.log(event));
  
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.isWelcomePage=false;
      // console.log(isWelcomePage);
      this.publisherService.publishData(this.isWelcomePage);
    });

    // if (event instanceof NavigationEnd) {
    //   this.isWelcomePage=false;
    //   // console.log(isWelcomePage);
    //   this.publisherService.publishData(this.isWelcomePage);
      
    // }
  }

  triggerAnimation() {
    this.animateHeading = true;
    this.animateButton = true;
    this.animateImage = true;
  }
  selectedbuttonOrder(){
  
    this.buttonOrderClicked=true;
    console.log(this.buttonOrderClicked);
   
    this.actionEventEmitter.emit(this.buttonOrderClicked);
    
  }
}
