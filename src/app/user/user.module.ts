import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    LogoutComponent,
    ProfileComponent,
  ]
})
export class UserModule { }
