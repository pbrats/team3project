import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesPhotosService {
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/categories-photos.json";

  getCategoriesPhotos(){
    return this.http.get(this.endpointUrl);
  }
}