import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteGuardService } from '../providers/route-guard.service';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent,
    data: { requiresNotLoggedIn: true },
    canActivate: [RouteGuardService]
  },
  {
    path: 'login', component: LoginComponent,
    data: { requiresNotLoggedIn: true },
    canActivate: [RouteGuardService]
  },
  {
    path: 'logout', component: LogoutComponent,
    data: { requiresLogin: true },
    canActivate: [RouteGuardService]
  },
  {
    path: 'profile', component: ProfileComponent,
    data: { requiresLogin: true },
    canActivate: [RouteGuardService]
  }
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
