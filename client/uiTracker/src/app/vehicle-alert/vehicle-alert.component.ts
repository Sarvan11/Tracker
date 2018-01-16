import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-alert',
  templateUrl: './vehicle-alert.component.html',
  styleUrls: ['./vehicle-alert.component.css']
})
export class VehicleAlertComponent {



  // alerts;
  // constructor(vehicleService: VehicleService) {
  //   vehicleService.getAlerts()
  //     .subscribe(alerts => this.alerts = alerts
  //     );
  // }

  alerts;
  bands=[];
  nands=[];
constructor(vehicleService: VehicleService) {
  this.alerts = vehicleService.getAlerts();

  for (const aa of this.alerts){
     // Change time to 2000
    if (Math.floor((Date.now() - aa.reading.timestamp)/60000) <= 120) {
      // console.log(Date.now() - aa.reading.timestamp);
      if (aa.priorityValue === 'HIGH') {
        // this.nand='{aa.reading.vin}',1;
        if (this.bands[aa.reading.vin] === 1) {
          this.bands[aa.reading.vin] = this.bands[aa.reading.vin] + 1;

        } else {
          this.bands[aa.reading.vin] = 1;

        }

      }
      }

    }
  // this.bands.sort(function (a, b) {
  //   console.log('hello');
  //   return a[1] - b[1];
  // });

  for (let prop in this.bands) {
    console.log(prop,this.bands[prop]);
    this.nands.push(prop);

  }

  console.log(this.bands);
  console.log(this.nands);

}

}

// console.log(aa.reading.vin);
//         if (this.high[aa.reading.vin] >= 1) {
//           this.high = this.high.vin +1 ;
//         }
//         else {
// this.high[aa.reading.vin] = 1 ;
