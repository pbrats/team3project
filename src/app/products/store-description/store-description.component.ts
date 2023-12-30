import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-description',
  standalone: true,
  imports: [],
  templateUrl: './store-description.component.html',
  styleUrl: './store-description.component.css'
})
export class StoreDescriptionComponent {
@Input() store: any;
}
