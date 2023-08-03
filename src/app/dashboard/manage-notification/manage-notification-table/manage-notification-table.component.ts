import { Component } from '@angular/core';
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
  selector: 'app-manage-notification-table',
  templateUrl: './manage-notification-table.component.html',
  styleUrls: ['./manage-notification-table.component.css'],
})
export class ManageNotificationTableComponent {
  showPopup: boolean = false;
  SelectedUser: any;
  notificationList: any;
  constructor(private notificationService: UserInformationService) {}

  togglePopUP() {
    this.showPopup = !this.showPopup;
  }

  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      dob: '1990-01-01',
      phoneNumber: '123-456-7890',
      username: 'johndoe',
    },
    {
      firstName: 'John01',
      lastName: 'Doe01',
      location: 'New York01',
      dob: '1990-01-01',
      phoneNumber: '123-456-789001',
      username: 'johndoe01',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      dob: '1990-01-01',
      phoneNumber: '123-456-7890',
      username: 'johndoe',
    },
  ];

  ngOnInit() {
    console.log(this.notificationService.getNotificationList().subscribe(data=>{
      this.notificationList = data
      console.log(this.notificationList,"notification")
    }));
    
  }

  deleteUser(user: User): void {
    // Implement the logic to delete the user from the users array or perform an API call to delete the user from the backend
    // For example: this.users = this.users.filter(u => u !== user);
  }

  viewUser(user): void {
    this.showPopup = true;
    this.SelectedUser = user;
  }
}
