import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { MaterialModule } from "./material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomDatePipe} from '../custom.datepipe';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    CustomDatePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
