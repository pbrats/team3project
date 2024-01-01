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

  productSelected = new EventEmitter<any>();
  productPreviewed = new EventEmitter<any>();

  storeSelected = new EventEmitter<any>();

  constructor() { }

  getProducts(){
    return this.http.get<Product>(this.endpointUrl);
  }
  getStore(){
    return this.http.get<Store[]>(this.endpointUrl);
  }

  getStoreById(id:number){
    return this.http.get<Store[]>(this.endpointUrl + "/" + id);
  }
}