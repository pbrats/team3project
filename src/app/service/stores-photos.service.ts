import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresPhotosService {
  
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/stores-photos.json";

  getStoresPhotos(){
    return this.http.get(this.endpointUrl);
  }
}
