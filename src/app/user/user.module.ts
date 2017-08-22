import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from "./user-routing.module";
import { MdInputModule, MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    UserRoutingModule,
    CommonModule,
    MaterialModule,
    MdInputModule,
    
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    LogoutComponent,
    ProfileComponent
  ]
})
export class UserModule { }
