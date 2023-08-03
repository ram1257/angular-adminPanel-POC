import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServicesService } from '../../services/login-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private loginServices: LoginServicesService,
    private router: Router
  ) {}
  handleSubmit(formData: NgForm) {
    this.loginServices.login(formData.value).subscribe({
      next: (res) => {
        if (res) {
          this.loginServices.setUserinfo(res);
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate(['/dashboard/manage-users']);
        }
      },
      error: (error) => {
        alert(error?.error?.message);
      },
    });
  }
}
