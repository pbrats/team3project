import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Store } from '../interfaces/store';
import { Product } from '../interfaces/product';

@Injectable({
    providedIn: 'root'
})

export class StoreService {
  private http = inject(HttpClient);
  private endpointUrl = "../assets/sample-data/stores.json";
  private endpointUrl2 = "../assets/sample-data/store.json";
  productSelected = new EventEmitter<any>();
  productPreviewed = new EventEmitter<any>();
  private products: Product[] = [];
  private stores: Store[] = [];

  constructor() { }

  getStores() {
    return this.http.get<Store[]>(this.endpointUrl);
  }
  getStoreById(id:number){
    return this.http.get<Store>(this.endpointUrl2);
  }

  getProducts(){
    return this.http.get<Store[]>(this.endpointUrl);
  }

 
  getCategories(): string[] {
    // Implement logic to extract unique categories from your products
    return [...new Set(this.products.map(product => product.category))];
  }

  getProductsByCategory(category: string): Product[] {
    // Implement logic to filter products by category
    return this.products.filter(product => product.category === category);
  }
}
