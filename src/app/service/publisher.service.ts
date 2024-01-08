import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  
  private publisher = new Subject<any>(); 
 
  publishData(data: any) {
  this.publisher.next(data);
  }
  
  listenForData() {
  return this.publisher.asObservable();
  }
}
