import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Store } from '../interfaces/store';
import { Product } from '../interfaces/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private http = inject(HttpClient);
  private endpointUrl = '../assets/sample-data';
  productSelected = new EventEmitter<any>();
  productPreviewed = new EventEmitter<any>();
  categorySelected = new EventEmitter<any>();
  categories = new EventEmitter<any>();
  private products: Product[] = [];
  private stores: Store[] = [];

  constructor() {}

  getStores() {
    return this.http.get<Store[]>(`${this.endpointUrl}/stores.json`);
  }
  getStoreById(id: number) {
    return this.http
      .get<Store[]>(`${this.endpointUrl}/stores.json`)
      .pipe(map((stores) => stores.find((store) => store.id === id)));
  }

  getProductsByCategory(category: string) {
    return this.http
      .get<Product[]>(`${this.endpointUrl}/stores.json`)
      .pipe(
        map((products) =>
          products.filter((product) => product.category === category)
        )
      );
  }
}
