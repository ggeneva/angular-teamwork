import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { UserRoutingModule } from "./user-routing.module";
import { MdInputModule, MaterialModule } from "@angular/material";
=======
import { UserRoutingModule } from './user-routing.module';
>>>>>>> a417fe5ab58b3df2c1436b0a827b2bb47b9096a4

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
