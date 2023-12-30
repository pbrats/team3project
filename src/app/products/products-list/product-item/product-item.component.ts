
import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;

  service=inject(StoreService)
  
  ngOnInit() {
  
  }
  onSelected(){
  this.service.productSelected.emit(this.product)
  }
   onPreview() {
    this.service.productPreviewed.emit(this.product)
   }
  
  }
  

