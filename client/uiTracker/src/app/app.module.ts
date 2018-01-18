import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular-highcharts';
import {FormsModule, NgModel} from '@angular/forms';
import { AppComponent } from './app.component';
import {VehicleService} from './vehicle-service/vehicle.service';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleAlertComponent } from './vehicle-alert/vehicle-alert.component';
import {RouterModule, Routes} from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent },
  {path: 'alerts', component: VehicleAlertComponent},
  {path: '', component: HomePageComponent}
  // { path: '', redirectTo: '/vehicles', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailComponent,
    VehicleAlertComponent,
    VehicleListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey : 'AIzaSyAWwVdPWW2GXQtM1WEwPeJDdTFSkf7ivck' } ),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
