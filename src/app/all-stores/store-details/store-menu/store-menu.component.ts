import { Component, Input, OnInit, inject } from '@angular/core';
import { MenuListComponent } from './menu-list/menu-list.component';
import { StoreService } from '../../../services/store.service';
import { map } from 'rxjs';
import { Store } from '../../../interfaces/store';

@Component({
  selector: 'app-store-menu',
  standalone: true,
  imports: [MenuListComponent],
  templateUrl: './store-menu.component.html',
  styleUrl: './store-menu.component.css'
})
export class StoreMenuComponent implements OnInit {
@Input() store!: Store;
service=inject(StoreService);
products:any;
  selectedProduct: any;
  previewedProduct: any;

ngOnInit() {
 
 
}

}
