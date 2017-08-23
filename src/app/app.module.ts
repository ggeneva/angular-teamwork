import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {
  MaterialModule,
  MdCoreModule,
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdChipsModule,
  MdListModule,
  MdMenuModule,
  MdInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './providers/auth.service';

export const dbConfig = {
  apiKey: 'AIzaSyCx_YIwr9xkNzKdSgl-wPWsihf7l_RbSKE',
  authDomain: 'angular-teamwork.firebaseapp.com',
  databaseURL: 'https://angular-teamwork.firebaseio.com',
  projectId: 'angular-teamwork',
  storageBucket: 'angular-teamwork.appspot.com',
  messagingSenderId: '824160181965'
};

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    MdCoreModule,
    MdListModule,
    MdMenuModule,
    MdButtonModule,
    AngularFireModule.initializeApp(dbConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [
    AuthService,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
