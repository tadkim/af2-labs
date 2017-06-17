import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page404.component';


import { LabsComponent } from './labs/labs.component';
import { L1StartComponent } from './labs/l1-start/l1-start.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LabsComponent,
    L1StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
