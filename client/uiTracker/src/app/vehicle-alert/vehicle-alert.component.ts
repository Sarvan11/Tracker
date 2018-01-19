import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';
import {AlertService} from '../alert-service/alert.service';

@Component({
  selector: 'app-vehicle-alert',
  templateUrl: './vehicle-alert.component.html',
  styleUrls: ['./vehicle-alert.component.css']
})
export class VehicleAlertComponent implements OnInit {


  alerts = [];
  alertCount = [];
  filterCount = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {

    this.alertService.getAlerts()
      .subscribe(alerts => this.alerts = alerts,
        error => console.log(error)
      );

    for (let aa of this.alerts) {
      // Change time to 2000
      if (Math.floor((Date.now() - aa.reading.timestamp) / 60000) <= 120) {
        if (aa.priorityValue === 'HIGH') {
          if (this.alertCount[aa.reading.vin] === 1) {
            this.alertCount[aa.reading.vin] = this.alertCount[aa.reading.vin] + 1;

          } else {
            this.alertCount[aa.reading.vin] = 1;

          }

        }
      }

    }
    // this.bands.sort(function (a, b) {
    //   console.log('hello');
    //   return a[1] - b[1];
    // });

    for (let prop in this.alertCount) {
      console.log(prop, this.alertCount[prop]);
      this.filterCount.push(prop);

    }
  }
}

