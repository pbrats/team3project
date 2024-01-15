import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ProductsPhotosService } from '../../service/products-photos.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product: any;
  productPhotos: any;
  productPhotoService:  ProductsPhotosService=inject(ProductsPhotosService);
  ngOnInit() {
    this.productPhotoService.getProductsPhotos().subscribe((response) => {
      this.productPhotos = response;
    });
}
}