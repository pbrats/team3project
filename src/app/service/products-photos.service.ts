import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsPhotosService {
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/products-photos.json";

 getProductsPhotos(){
    return this.http.get(this.endpointUrl);
  }
}