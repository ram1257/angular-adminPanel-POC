import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent{
  userInfoSub: Subscription;
  activeTab: 'editProfile' | 'changePassword' = 'editProfile';
  userName: string = 'John Doe';
  email: string = 'johndoe@example.com';
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  profileImg: string = '';

  constructor(private loginService: LoginServicesService) {
    this.userInfoSub = loginService.mySubject.subscribe((data) => {
      console.log(data,"profile Image",data.image)
      this.profileImg = data?.image;
    });
  }

  saveProfile() {
    // Logic to save the edited profile (username and email)
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
