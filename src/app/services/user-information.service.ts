import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private _http: HttpClient) { }

  getUserList(): Observable<any> {
    return this._http.get('http://localhost:3000/userInfo');
  }
  getUser(userId:string): Observable<any> {
    return this._http.get('http://localhost:3000/userInfo?id='+userId);
  }
  
  getNotificationList(): Observable<any> {
    return this._http.get('http://localhost:3000/notification');
  }

  deleteUser(userId: string): Observable<any> {
    return this._http.delete(`http://localhost:3000/userInfo/${userId}`);
  }

  updateUser(id: string, data: any): Observable<any> {
    console.log(id, data, 'data test');
    return this._http.patch(`http://localhost:3000/userInfo/${id}`, data);
  }

  deleteNotification(userId: string): Observable<any> {
    return this._http.delete(`http://localhost:3000/notification/${userId}`);
  }
}
