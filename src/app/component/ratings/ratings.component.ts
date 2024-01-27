import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {
  @Input() wantedRatings:any;
}