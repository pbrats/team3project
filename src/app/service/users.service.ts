import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http=inject(HttpClient);
  private endpointUrl="assets/sample-data/users.json";
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.endpointUrl);
  }
  authenticate(email: string, phone: string): Observable<any> {
    return this.getUsers().pipe(
      map(users => users.find((u: { email: string; phone: string; }) => u.email === email && u.phone === phone))
    );
    }
}