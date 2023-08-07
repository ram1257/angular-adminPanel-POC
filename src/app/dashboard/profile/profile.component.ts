import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userInfoSub: Subscription;
  activeTab: 'editProfile' | 'changePassword' = 'editProfile';
  userData: any;
  userName: string = 'John Doe';
  email: string = 'johndoe@example.com';
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  profileImg: string = '';

  constructor(private loginService: LoginServicesService) {
    this.userInfoSub = loginService.mySubject.subscribe((data) => {
      console.log(data, 'profile Image', data);
      this.userData = data
      this.profileImg = data?.image;
      this.userName = data?.username;
    });
  }

  saveProfile() {
    this.loginService.setUserinfo({...this.userData,username:this.userName})
    console.log('Profile saved:', this.userName, this.email);
  }

  cancelProfileEdit() {
    // Logic to cancel profile editing
    console.log('Profile editing canceled.');
  }

  savePassword() {
    // Logic to save the changed password
    if (this.newPassword === this.confirmNewPassword) {
      console.log('Password changed:', this.oldPassword, this.newPassword);
    } else {
      console.log('New password and confirm password do not match.');
    }
  }

  cancelPasswordChange() {
    // Logic to cancel password change
    console.log('Password change canceled.');
  }

  onDestroy() {
    this.userInfoSub.unsubscribe();
  }
}
