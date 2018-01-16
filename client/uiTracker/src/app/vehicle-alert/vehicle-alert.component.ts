import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-alert',
  templateUrl: './vehicle-alert.component.html',
  styleUrls: ['./vehicle-alert.component.css']
})
export class VehicleAlertComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;

  // alerts;
  // constructor(vehicleService: VehicleService) {
  //   vehicleService.getAlerts()
  //     .subscribe(alerts => this.alerts = alerts
  //     );
  // }

  alerts;
  bands=[];
  nand={};
constructor(vehicleService: VehicleService) {
  this.alerts = vehicleService.getAlerts();

  for (const aa of this.alerts){
     // Change time to 2000
    if ((Date.now() - aa.reading.timestamp) <= 20000000000) {
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
  // this.bands.sort(function (a, b){
  //   return( a[1] - b[1]);
  // })
  for (let prop in this.bands) {
    console.log(prop,this.bands[prop]);

  }
    console.log(this.bands);
  // console.log(Object.values(this.bands));
  }

}

// console.log(aa.reading.vin);
//         if (this.high[aa.reading.vin] >= 1) {
//           this.high = this.high.vin +1 ;
//         }
//         else {
// this.high[aa.reading.vin] = 1 ;
