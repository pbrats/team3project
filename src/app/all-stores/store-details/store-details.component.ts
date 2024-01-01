import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '../../interfaces/store';
import { StoreService } from '../../services/store.service';
import { StoreDescriptionComponent } from './store-description/store-description.component';
import { StoreMenuComponent } from './store-menu/store-menu.component';
import { CartComponent } from './cart/cart.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    StoreDescriptionComponent,
    StoreMenuComponent,
    CartComponent,
  ],
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.css',
})
export class StoreDetailsComponent implements OnInit {
  @Input() storeSel: any;
  store!: Store;
  service = inject(StoreService);
  selectedProduct: any;
  previewedProduct: any;
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params
    .subscribe({
      next: (params: any) => {
        let id = params.id;
        console.log(params.id);
        this.service.getStoreById(id)
        .pipe(map((response: any) => response.products))
        .subscribe({
          next: products => {
              console.log(products);
              this.store = products;
          }
        })
      }
    })
    this.service.productSelected.subscribe({
      next: (res: any) => (this.selectedProduct = res),
    });
    this.service.productPreviewed.subscribe({
      next: (res: any) => (this.previewedProduct = res),
    });
  }
}
