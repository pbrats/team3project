import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Store } from '../interfaces/store';

@Injectable({
    providedIn: 'root'
})

export class StoreService {
  private http = inject(HttpClient);
  private endpointUrl = "../assets/sample-data/stores.json";
  private endpointUrl2 = "../assets/sample-data/store.json";
  productSelected = new EventEmitter<any>();
  productPreviewed = new EventEmitter<any>();

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
}