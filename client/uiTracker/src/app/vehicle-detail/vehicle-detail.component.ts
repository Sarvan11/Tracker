import {Component, OnInit, ElementRef} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';
import {ActivatedRoute} from '@angular/router';
import {Chart} from 'angular-highcharts';
import {AlertService} from '../alert-service/alert.service';
import {ReadingService} from '../reading-service/reading.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  eng: Chart;
  fue: Chart;
  spe: Chart;
  alts;
  salts = [];
  readId = [];
  id;
  malts = [];
  readings;
  engineRpm = [];
  fuelVolume = [];
  speed = [];
  time = [];
  sdate = [];

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private alertService: AlertService, private readingService: ReadingService) {
    this.route.params.subscribe(params => {
      this.id = params;
    });

      alertService.getAlerts()
        .subscribe(alts => this.alts = alts,
    error => console.log(error)
        );

      readingService.getReadings()
        .subscribe(readings => this.readings = readings,
    error => console.log(error)
        );

    // this.alts = vehicleService.getAlerts();
    // this.readings = vehicleService.getReadings();
  }

  ngOnInit(): any {
    for (let tin of this.alts) {
      if (tin.reading.vin === this.id.id) {
        this.salts.push(tin);
        if (Math.floor((Date.now() - tin.reading.timestamp) / 60000) <= 30) {
          this.malts.push(tin);
        }
      }
    }


    for (let read of this.readings) {
      if (read.vin === this.id.id) {

        this.engineRpm.push(read.engineRpm);
        this.readId.push(read);
      }
    }

    for (let reads of this.readId) {
      this.time.push(reads.timestamp);
    }

    for (let speeds of this.readId) {
      this.speed.push(speeds.speed);
    }
    for (let fuel of this.readId) {
      this.fuelVolume.push(fuel.fuelVolume);
    }

    this.time.forEach((res) => {
      let jsdate = new Date(res);
      this.sdate.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}));
    });


    this.init();
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: this.sdate,
      },

      title: {
        text: 'Engine RPM'
      },
      credits: {
        enabled: false
      },
      series: [{
        color: 'red',
        name: 'Engine RPM',
        data: this.engineRpm
      }
      ]
    });
    this.eng = chart;


    let fue = new Chart({
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: this.sdate
      },

      title: {
        text: 'Fuel Volume'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          color: 'blue',
          name: 'Fuel Volume',
          data: this.fuelVolume
        }
      ]
    });
    this.fue = fue;


    let spe = new Chart({
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: this.sdate
      },

      title: {
        text: 'Speed'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          color: 'green',
          name: 'Speed',
          data: this.speed
        }
      ]
    });
    this.spe = spe;
  }

}
