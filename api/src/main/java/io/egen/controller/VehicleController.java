package io.egen.controller;

import io.egen.entity.Vehicle;
import io.egen.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/vehicles")
public class VehicleController {

    @Autowired
    VehicleService service;

    @RequestMapping(method = RequestMethod.GET)
    public List<Vehicle> findAll(){

        return service.findAll();
    }
    @RequestMapping(method = RequestMethod.GET, value = "/{vin}")
    public Vehicle findOne(@PathVariable("vin") String id){

        return service.findOne(id);
    }
    @RequestMapping(method = RequestMethod.POST)
    public Vehicle create(@RequestBody Vehicle vehicle){

        return service.create(vehicle);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/{vin}")
    public Vehicle update(@PathVariable("vin") String id, @RequestBody Vehicle vehicle){

        return service.update(id,vehicle);

    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/{vin}")
    public void delete(@PathVariable("vin") String id){
    }
}
