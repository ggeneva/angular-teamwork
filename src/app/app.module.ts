import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';
import { DataService } from './providers/data.service';
import { FilterRecipesPipe } from './pipes/filter-recipes.pipe';
import { SortRecipesPipe } from './pipes/sort-recipes.pipe';
import { FooterComponent } from './shared/footer/footer.component';

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
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(dbConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    AuthService,
    UserService,
    DataService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
