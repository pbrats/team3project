import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
export class LandingPageComponent {
  animateHeading = false;
  animateButton = false;
  animateImage = false;
  ngOnInit(){
    this. triggerAnimation();
  }

  triggerAnimation() {
    this.animateHeading = true;
    this.animateButton = true;
    this.animateImage = true;
  }

}