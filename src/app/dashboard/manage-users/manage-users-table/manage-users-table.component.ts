import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserInformationService } from 'src/app/services/user-information.service';

interface User {
  firstName: string;
  lastName: string;
  location: string;
  dob: string;
  phoneNumber: string;
  username: string;
}

@Component({
  selector: 'app-mange-users-table',
  templateUrl: './manage-users-table.component.html',
  styleUrls: ['./manage-users-table.component.css'],
})
export class MangeUsersTableComponent {
  selectedUser: any;
  showPopup: boolean = false;
  users: any[];

  constructor(
    private userInfoService: UserInformationService,
    private router: Router
  ) {}

  togglePopUP() {
    this.showPopup = !this.showPopup;
  }

  getUserData() {
    this.userInfoService.getUserList().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.getUserData();
  }

  deleteUser(user: any): void {
    this.userInfoService.deleteUser(user.userId).subscribe({
      next: (val: any) => {
        alert('Employee deleted');
        this.getUserData();
      },
      error: (err: any) => console.log(err),
    });
  }

  editUser(user): void {
    console.log(user, 'users');
  }

  viewUser(user: User) {
    this.selectedUser = user;
    this.showPopup = true;
  }
}
