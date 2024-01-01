import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Store } from '../../interfaces/store';
import { StoreDetailsComponent } from '../store-details/store-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [StoreDetailsComponent, FormsModule, CommonModule],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.css'
})
export class StoreItemComponent implements OnInit  {
service=inject(StoreService);
@Input() store?: Store;
selectedStore: any;
router: Router = inject(Router);


ngOnInit() {
  
    }

onStoreSelected() {
this.service.storeSelected.emit(this.store);

}   

viewStoreDetails(id: number){
  this.router.navigate(["stores", id]);
}

}

