import { Component } from '@angular/core';

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
  templateUrl: './mange-users-table.component.html',
  styleUrls: ['./mange-users-table.component.css'],
})
export class MangeUsersTableComponent {
  selectedUser: User;
  showPopup: boolean = false;

  togglePopUP() {
    this.showPopup = !this.showPopup;
  }

  users: User[] = [
    // Your user data goes here
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      dob: '1990-01-01',
      phoneNumber: '123-456-7890',
      username: 'johndoe',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      dob: '1990-01-01',
      phoneNumber: '123-456-7890',
      username: 'johndoe',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      dob: '1990-01-01',
      phoneNumber: '123-456-7890',
      username: 'johndoe',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      dob: '1990-01-01',
      phoneNumber: '123-456-7890',
      username: 'johndoe',
    },
    // Add more user data as needed
  ];

  deleteUser(user: User): void {
    // Implement the logic to delete the user from the users array or perform an API call to delete the user from the backend
    // For example: this.users = this.users.filter(u => u !== user);
  }

  editUser(user: User): void {
    // Implement the logic to handle editing a user's information
    // For example: navigate to the edit user page or open a modal for editing
  }

  viewUser(user: User) {
    this.selectedUser = user;
    this.showPopup = true;
  }
}
