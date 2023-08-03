import { Component } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-manage-notification-table',
  templateUrl: './manage-notification-table.component.html',
  styleUrls: ['./manage-notification-table.component.css'],
})
export class ManageNotificationTableComponent {
  showPopup: boolean = false;
  SelectedUser: any;
  notificationList: any;
  constructor(
    private notificationService: UserInformationService,
    private userInfoService: UserInformationService
  ) {}

  togglePopUP() {
    this.showPopup = !this.showPopup;
  }
  
  getNotificationData() {
    this.notificationService.getNotificationList().subscribe((data) => {
      this.notificationList = data;
      console.log(this.notificationList, 'notification');
    });
  }

  ngOnInit() {
    this.getNotificationData();
  }

  deleteUser(user: any): void {
    this.userInfoService.deleteNotification(user.id).subscribe({
      next: (val: any) => {
        alert('Notification deleted successfully');
        this.getNotificationData();
      },
      error: (err: any) => console.log(err),
    });
  }

  viewUser(user): void {
    this.showPopup = true;
    this.SelectedUser = user;
  }
}
