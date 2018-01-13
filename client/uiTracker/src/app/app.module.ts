import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {VehicleService} from './vehicle-service/vehicle.service';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleAlertComponent } from './vehicle-alert/vehicle-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailComponent,
    VehicleAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
