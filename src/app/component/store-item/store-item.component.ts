import { Component, Input, inject } from '@angular/core';
import { Store } from '../../interfaces/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css'
})
export class StoreItemComponent {
@Input() store!: Store;

router: Router = inject(Router);

onViewStoreDetails(id: number) {
  console.log("hello");
    this.router.navigate(["stores", id]);
}

}
