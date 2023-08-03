import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ManageNotificationModule } from './dashboard/manage-notification/manage-notification.module';
import { MangeUsersTableComponent } from './dashboard/manage-users/manage-users-table/manage-users-table.component';
import { ManageUsersComponent } from './dashboard/manage-users/manage-users.component';
import { EditUserComponent } from './dashboard/manage-users/edit-user/edit-user.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainLayoutComponent, ManageUsersComponent, ProfileComponent, MangeUsersTableComponent, EditUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ManageNotificationModule,ReactiveFormsModule],
  exports:[ManageNotificationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
