import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle-service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles;

  constructor(vehicleService: VehicleService) {

    vehicleService.getVehicles()
      .subscribe(vehicles => this.vehicles = vehicles
    // error => console.log(error)
     );

    console.log(this.vehicles);
  }

  ngOnInit() {
  }
}
