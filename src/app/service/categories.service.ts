import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/most_famous_stores_in_general.json";

  getCategories(): Observable<any> {
    return this.http.get(this.endpointUrl);
  }
}