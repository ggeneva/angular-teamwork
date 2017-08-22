import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UserRoutingModule { }
