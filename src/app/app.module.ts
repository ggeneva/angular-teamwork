import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import 'hammerjs';

import { MaterialModule, MdMenuModule, MdToolbarModule } from '@angular/material';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
