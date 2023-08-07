import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userInformation: UserInformationService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      resident: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      mobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    console.log(this.userId, 'userId');
    this.userInformation.getUser(this.userId).subscribe((data) => {
      this.userData = data[0];
      this.userForm.patchValue({
        firstName: this.userData?.firstName,
        lastName: this.userData.lastName,
        emailId: this.userData.emailId,
        mobileNo: this.userData.mobileNo,
        resident: this.userData.country,
      });
      console.log(data, 'data form');
    });
  }

  logFormErrors() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      const errors = control.errors;
      if (errors) {
        console.log(`Form control '${field}' has errors:`, errors);
      }
    });
  }

  handleSubmit() {
    console.log(this.userForm,this.userForm.valid)
    this.logFormErrors()
    this.submitted = true;
    if (this.userForm.valid) {
      this.userInformation
        .updateUser(this.userId, this.userForm.value)
        .subscribe({
          next: (data) => {
            alert('user details are updated !');
            this.router.navigate(['../../'], { relativeTo: this.route });
          },
        });
    }
  }
}
