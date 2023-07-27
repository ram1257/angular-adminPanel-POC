import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  showSideBar = false;
  userInfoSub:Subscription
  userName?: any;

  constructor(
    private loginService: LoginServicesService
  ) {
   this.userInfoSub =  this.loginService.mySubject.subscribe((res) => {
      this.userName = res.username;
      console.log(res, 'response');
    });
  }

  logout() {
    console.log('Logout clicked');
  }

  ngOnInit() {
    const user = localStorage?.getItem('user');
    if (user) {
      this.loginService.setUserinfo(JSON.parse(user));
    }
  }

  // Toggle the sidebar button visibility when clicking on the humburger icon
  toggleSideBarButton() {
    this.showSideBar = !this.showSideBar;
  }

  ngOnDestroy(){
    this.userInfoSub.unsubscribe()
  }
}
