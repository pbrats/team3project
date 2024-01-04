import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Store } from '../interfaces/store';
import { Product } from '../interfaces/product';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class StoreService {
  private http = inject(HttpClient);
  private endpointUrl = "../assets/sample-data";
  private endpointUrl2 = "../assets/sample-data/";
  productSelected = new EventEmitter<any>();
  productPreviewed = new EventEmitter<any>();
  private products: Product[] = [];
  private stores: Store[] = [];

  constructor() { }

  getStores() {
    return this.http.get<Store[]>(`${this.endpointUrl}/stores.json`);
  }
  getStoreById(id:number){
    return this.http.get<Store[]>(`${this.endpointUrl}/stores.json`)
  }

  getProducts(){
    return this.http.get<Product[]>(`${this.endpointUrl}/store.json`)
  }

 
  getCategories(){
    return this.http.get<{ products: Product[] }>(`${this.endpointUrl}/store.json`).pipe(
      map((response) => {
        const products = response.products;
        return [...new Set(products.map((product) => product.category))]
  }))
  }

  getProductsByCategory(category: string){
    return this.http.get<Product[]>(`${this.endpointUrl}/store.json`).pipe(
      map((products) => products.filter((product) => product.category === category))
    );
  }
}
