
import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../service/cart.service';
import { StoreService } from '../../../service/store.service';
import { ProductsPhotosService } from '../../../service/products-photos.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  productPhotos: any;
  productPhotoService:  ProductsPhotosService=inject(ProductsPhotosService);
  @Input() product!: any;
  allCategories!: any;
  service = inject(StoreService);
  @Input() allProducts!: any;
  cartService=inject(CartService);

  ngOnInit(){
    this.productPhotoService.getProductsPhotos().subscribe((response) => {
      this.productPhotos = response;
    });

    
   
  }
  

  
  onSelected(){
  this.service.productSelected.emit(this.product)
  }
   onPreview() {
    this.service.productPreviewed.emit(this.product)
   }

   onAddToCart(product: Product): void {
    // this.service.productSelected.emit(this.product)
    this.cartService.addToCart(product);
  }

  
  
  }
  

