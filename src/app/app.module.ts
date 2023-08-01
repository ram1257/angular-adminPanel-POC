import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ManageNotificationModule } from './dashboard/manage-notification/manage-notification.module';
import { MangeUsersTableComponent } from './dashboard/mange-users/mange-users-table/mange-users-table.component';
import { ManageUsersComponent } from './dashboard/mange-users/manage-users.component';
@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainLayoutComponent, ManageUsersComponent, ProfileComponent, MangeUsersTableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ManageNotificationModule],
  exports:[ManageNotificationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
