import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamousStoresGeneralService {
  
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/most_famous_stores_in_general.json";

  constructor() { }

  getFamousStoresGeneral(){
    return this.http.get(this.endpointUrl);
  }
}
