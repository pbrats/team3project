import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Publisher2Service {

  private publisher2 = new Subject<any>(); 
 
  publishData2(data: any) {
  this.publisher2.next(data);
  }
  listenForData2() {
  return this.publisher2.asObservable();
  }
}
