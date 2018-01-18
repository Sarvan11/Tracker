import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';
import {AlertService} from '../alert-service/alert.service';

@Component({
  selector: 'app-vehicle-alert',
  templateUrl: './vehicle-alert.component.html',
  styleUrls: ['./vehicle-alert.component.css']
})
export class VehicleAlertComponent implements OnInit {


  alerts;
  bands = [];
  nands = [];

  constructor(vehicleService: VehicleService, private alertService: AlertService) {
    // this.alerts = vehicleService.getAlerts();

    alertService.getAlerts()
      .subscribe(alerts => this.alerts = alerts,
        error => console.log(error)
      );
  }

  ngOnInit(): any {
      for (const aa of this.alerts) {
        // Change time to 2000
        if (Math.floor((Date.now() - aa.reading.timestamp) / 60000) <= 120) {
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
        console.log(prop, this.bands[prop]);
        this.nands.push(prop);

      }

    }
}

