import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInformationService } from 'src/app/services/user-information.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  userId: string;
  userForm: FormGroup;
  userData: any; 
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private userInformation: UserInformationService) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this.userInformation.getUser(this.userId).subscribe((data) => {
      this.userData = data[0]
      console.log(this.userData,"userData")
      this.userForm.patchValue({
        firstName:this.userData?.firstName,
        lastName:this.userData.lastName,
        email:this.userData.emailId,
        mobileNumber:this.userData.mobileNo,
        country:this.userData.country
      })
      console.log(data,"data form");
    });
  }
}
