import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadOrderService {
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/order-history.json";

  constructor() { }  
  getOrders(){
    return this.http.get(`${this.endpointUrl}/order-history.json`);
  }
}