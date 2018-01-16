import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent {

alts;
salts=[];
id;
malts=[];
  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.id=params;
    });
    this.alts= vehicleService.getAlerts();
    for(let tin of this.alts){
      // console.log(this.id);
      if (tin.reading.vin === this.id.id){
        this.salts.push(tin);
      if (Math.floor((Date.now() - tin.reading.timestamp)/60000) <= 30) {
        // console.log(tin.reading.timestamp);
        this.malts.push(tin);
      }
      }
    }
    console.log(this.malts);
  }


}
