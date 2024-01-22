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
  private products: Product[] = [];
  private stores: Store[] = [];
  categories:string[]=[];

  constructor() {}
  getStores() {
    return this.http.get<Store[]>(`${this.endpointUrl}/stores.json`);
  }
  getStoreById(id: number) {
    return this.http
      .get<Store[]>(`${this.endpointUrl}/stores.json`)
      .pipe(map((stores) => stores.find((store) => store.id === id)));
  }
  getProductCategoriesByStore(products:Product[]){
    if (products) {
      this.categories = [...new Set(products.map((product: { category: any; }) => product.category))];
      return this.categories;
    } else {
      return [];
    }
  }
  getProductsByStore(storeId: number){
    return this.getStores().pipe(
      map((stores: Store[]) => {
        const store = stores.find((s) => s.id === storeId);
        // Return the products of the selected store if found, otherwise an empty array
        return store ? store.products || [] : [];
      })
    );
  }
}