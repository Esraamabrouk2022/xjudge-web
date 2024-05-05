import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('userToken')}`);
  constructor(private _HttpClient: HttpClient) { }

  getUserDetails(handle: string, email:string): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:7070/user/${handle}`,
      { headers: this.headers }
    );
  }

  updateUser(data: any) {
    return this._HttpClient.put(
      `http://localhost:7070/user`,
      data,
      { headers: this.headers }
    );
  }
  
}
