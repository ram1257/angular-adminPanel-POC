import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ManageUsersComponent } from './dashboard/manage-users/manage-users.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ManageNotificationModule } from './dashboard/manage-notification/manage-notification.module';
@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainLayoutComponent, ManageUsersComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ManageNotificationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
