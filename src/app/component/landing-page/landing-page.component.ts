import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { PublisherService } from '../../service/publisher.service';
import { Subject, interval, takeUntil } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, LoginComponent],
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
    ])),
    (trigger('moveImage', [
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
  publisherService =inject(PublisherService);
  isWelcomePage=true;
  buttonOrderClicked=false;
  @Output() actionEventEmitter =new EventEmitter();
  private destroy$ = new Subject<void>();
  orderTexts: string[] = ['Pizza', 'Burger', 'Asian', 'Donut', 'Coffee','Fast Food'];
  currentIndex = 0;
  orderText: string = this.orderTexts[0];
  
  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle("Welcome");
    this.isWelcomePage=true;
    this.publisherService.publishData(this.isWelcomePage);
    console.log(this.isWelcomePage);
    this.router.events.subscribe((event) => console.log(event));
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        if (event.url.includes('welcome')||event.url.includes('')){
          this.isWelcomePage=true;
          this.publisherService.publishData(this.isWelcomePage);
        }else{
          this.isWelcomePage=false;
          this.publisherService.publishData(this.isWelcomePage);
        }
      }
    });
  }
  ngOnInit(){
    this. triggerAnimation();
    this.startUpdatingText();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
  private startUpdatingText() {
    interval(700)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.orderText = this.orderTexts[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.orderTexts.length;
      });
  }
  
}