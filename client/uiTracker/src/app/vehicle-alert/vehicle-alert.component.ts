import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-alert',
  templateUrl: './vehicle-alert.component.html',
  styleUrls: ['./vehicle-alert.component.css']
})
export class VehicleAlertComponent{

  alerts;
  constructor(vehicleService: VehicleService) {
    vehicleService.getAlerts()
      .subscribe(alerts => this.alerts = alerts
      );
  }
}
