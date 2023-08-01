import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageNotificationComponent } from './manage-notification.component';
import { ManageNotificationTableComponent } from './manage-notification-table/manage-notification-table.component';
import { PopupModalComponent } from '../common/popup-modal/popup-modal.component';

@NgModule({
  declarations: [ManageNotificationComponent,ManageNotificationTableComponent,PopupModalComponent],
  imports: [CommonModule],
  exports:[PopupModalComponent]
})
export class ManageNotificationModule {}
