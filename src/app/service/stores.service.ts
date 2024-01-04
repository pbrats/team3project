import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/stores.json";

  constructor() { }

  getStores(){
    return this.http.get(this.endpointUrl);
  }
}
