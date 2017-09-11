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
import { SortRecipesPipe } from './pipes/sort-recipes.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { FileService } from './providers/file.service';
import { RouteGuardService } from './providers/route-guard.service';
import { ConfirmDirective } from './directives/confirm-directive/confirm-link.directive';
import { SharedModule } from './shared/shared.module';

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
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(dbConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConfirmDirective
  ],
  providers: [
    AuthService,
    UserService,
    DataService,
    FileService,
    RouteGuardService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
