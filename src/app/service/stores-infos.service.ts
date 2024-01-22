import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresInfosService {
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/most_famous_stores_in_general.json";

  getStoresInfos(){
    return this.http.get(this.endpointUrl);
  }
}