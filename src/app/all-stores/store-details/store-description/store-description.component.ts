import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../../../interfaces/store';

@Component({
  selector: 'app-store-description',
  standalone: true,
  imports: [],
  templateUrl: './store-description.component.html',
  styleUrl: './store-description.component.css'
})
export class StoreDescriptionComponent implements OnInit{
@Input() store!: Store;

ngOnInit() {
  console.log(this.store)
    
  }
}


