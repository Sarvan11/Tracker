import { Component, OnInit, ElementRef  } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';
import {ActivatedRoute} from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit{
chartss=[15,30,60,120];
engineRPM: Chart;
fue: Chart;
spe: Chart;
alts;
salts=[];
readId=[]; //Reading of selected id
id;
malts=[];
readings;
engineRpm=[];
fuelVolume=[];
speed=[];
time=[];
sdate = [];
swit=15;
  constructor(private elementRef: ElementRef, private route: ActivatedRoute, private vehicleService: VehicleService) {
    // vehicleService.getVehicles()
    //   .subscribe(readings => this.readings = readings
    //   );



    this.route.params.subscribe(params=>{
      console.log(params);
      this.id=params;
    });

    this.alts= vehicleService.getAlerts();
    for(let tin of this.alts){
      // console.log(this.id);
      if (tin.reading.vin === this.id.id) {
        this.salts.push(tin);
      if (Math.floor((Date.now() - tin.reading.timestamp) / 60000) <= 30) {
        // console.log(tin.reading.timestamp);
        this.malts.push(tin);
      }
      }
    }
    // console.log(this.malts);

    this.readings = vehicleService.getReadings();
    // console.log(this.readings);
    for (let read of this.readings) {
      if (read.vin === this.id.id) {

        this.engineRpm.push(read.engineRpm);
        this.readId.push(read);
        console.log('hello');
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
      let jsdate = new Date(res)
      this.sdate.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}));
      console.log(this.sdate);
    });




  }
  addTime(swt){
    this.swit=swt;
  }

  ngOnInit() {
    this.init();
  }
  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: this.sdate
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
    this.engineRPM = chart;


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
          // color: 'blue',
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
