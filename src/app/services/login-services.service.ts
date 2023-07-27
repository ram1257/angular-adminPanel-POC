import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServicesService {
  mySubject = new Subject<any>();
  constructor(private Http: HttpClient) {}

  setUserinfo(user: any) {
    this.mySubject.next(user);  
  }

  login(userInfo: { email: string; password: string }) {
    return this.Http.post('https://dummyjson.com/auth/login', {
      username: userInfo.email,
      password: userInfo.password,
    });
  }
}
