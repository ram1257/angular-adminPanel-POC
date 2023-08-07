import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userInfoSub: Subscription;
  profileEdit: FormGroup;
  activeTab: 'editProfile' | 'changePassword' = 'editProfile';
  userData: any;
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  profileImg: string = '';
  emailDisable:boolean = true
  submitted  = false

  constructor(
    private loginService: LoginServicesService,
    private formBuilder: FormBuilder
  ) {
    this.profileEdit = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
    });

    
  }

  
  ngOnInit() {
    this.userInfoSub = this.loginService.mySubject.subscribe((data) => {
      console.log(data, 'profile Image', data);
      this.userData = data;
      this.profileImg = data?.image;
      this.profileEdit.patchValue({
        username: data?.username,
        email: data?.email
      })
    });
    this.profileEdit.get('email').disable()
  }

  saveProfile() {
    this.submitted = true
    this.loginService.setUserinfo({
      ...this.userData,
      username: this.profileEdit.get('username').value,
    });
    console.log('Profile saved:', {...this.userData,username: this.profileEdit.get('username').value});
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
