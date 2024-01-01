import { Component, Input } from '@angular/core';
import { Store } from '../../interfaces/store';

@Component({
  selector: 'app-store-description',
  standalone: true,
  imports: [],
  templateUrl: './store-description.component.html',
  styleUrl: './store-description.component.css'
})
export class StoreDescriptionComponent {
@Input() store!: Store;
}
