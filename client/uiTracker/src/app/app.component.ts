import { Component } from '@angular/core';
import {VehicleService} from './vehicle-service/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= 'Car Tracker';
  vehicles;
  constructor(vehicleService: VehicleService) {
    vehicleService.getVehicles()
      .subscribe(vehicles => this.vehicles = vehicles
      );
  }

}
