import {Component, OnInit, ElementRef} from '@angular/core';
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

  engineRpm_chart: Chart;
  fuel_chart: Chart;
  speed_chart: Chart;
  allAlerts=[];
  allReadings=[];
  filteredAlerts = [];
  readId = [];
  detail_id;
  filteredTime = [];
  engineRpm = [];
  fuelVolume = [];
  speed = [];
  time = [];
  sdate = [];

  constructor(private route: ActivatedRoute, private alertService: AlertService, private readingService: ReadingService) {
  }

  ngOnInit(): any {

    this.route.params.subscribe(params => {
      this.detail_id = params;
      console.log(this.detail_id);
    });

    this.alertService.getAlerts()
      .subscribe(alts =>  this.allAlerts = alts,
        error => console.log(error)
        );
    console.log(this.allAlerts);

    this.readingService.getReadings()
      .subscribe(readings => this.allReadings = readings,
        error => console.log(error)
      );
    console.log(this.allReadings);



    for (let tin of this.allAlerts) {
      if (tin.reading.vin === this.detail_id.id) {
        this.filteredAlerts.push(tin);
        if (Math.floor((Date.now() - tin.reading.timestamp) / 60000) <= 30) {
          this.filteredTime.push(tin);
        }
      }
    }


    for (let read of this.allReadings) {
      if (read.vin === this.detail_id.id) {

        this.engineRpm.push(read.engineRpm);
        this.readId.push(read);
        console.log(read);
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
    this.engineRpm_chart = chart;


    let fuels = new Chart({
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
    this.fuel_chart = fuels;


    let speeds = new Chart({
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
    this.speed_chart = speeds;
  }
  // assignReading(fat){
  //   // this.fate= fat;
  //   console.log('hello');
  // }
}
