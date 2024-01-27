import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  animations: [
    (trigger('moveHeading', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1000ms ease-in', style({ transform: 'translateY(0%)'})),
      ]),
    ])),
    (trigger('moveImage', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1000ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
    ]))
  ]
})

export class NotFoundComponent {
  animateHeading = false;
  publisherService =inject(PublisherService);
  isWelcomePage=false;

  triggerAnimation() {
    this.animateHeading = true;
  }
  constructor(private router: Router,private titleService: Title) {
    titleService.setTitle("404 Page not found");
  }
  ngOnInit() {
    this. triggerAnimation();
    this.publisherService.publishData(this.isWelcomePage);
  }
}
