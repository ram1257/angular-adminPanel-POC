import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { ManageNotificationComponent } from './dashboard/manage-notification/manage-notification.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ManageUsersComponent } from './dashboard/manage-users/manage-users.component';
import { EditUserComponent } from './dashboard/manage-users/edit-user/edit-user.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'dashboard',component:MainLayoutComponent,children:[
    {path:'manage-users',component:ManageUsersComponent},
    {path:'manage-users/edit/:id',component:EditUserComponent},
    {path:'manage-notification',component:ManageNotificationComponent},
    {path:'profile',component:ProfileComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
