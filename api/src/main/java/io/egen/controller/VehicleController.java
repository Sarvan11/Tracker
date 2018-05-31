package io.egen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import io.egen.entity.Vehicle;
import io.egen.service.VehicleService;

@CrossOrigin(origins = "http://mocker.egen.io", maxAge = 3600)
@RestController
@RequestMapping(value = "vehicles")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Vehicle> findAllVehicles() {
        return vehicleService.findAllVehicles();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Vehicle findVehicleByVin(@PathVariable("id") String vehicleVin) {
        return vehicleService.findVehicleByVin(vehicleVin);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void create(@RequestBody List<Vehicle> vehicleList) {
        vehicleService.createVehicle(vehicleList);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Vehicle update(@PathVariable("id") String vehicleVin, @RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(vehicleVin, vehicle);
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/{id}")
    public void delete(@PathVariable("id") String vehicleVin){
        vehicleService.delete(vehicleVin);
    };
}
