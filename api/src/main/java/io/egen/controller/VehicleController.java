package io.egen.controller;

import io.egen.entity.Vehicle;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

public class VehicleController {

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Vehicle> findAll(){

        return null;
    }
    @RequestMapping(method = RequestMethod.GET, value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Vehicle findOne(@PathVariable("vin") String id){

        return null;
    }
    @RequestMapping(method = RequestMethod., value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Vehicle create(){

        return null;
    }

    public Vehicle update(){

        return null;

    }

    public Void delete(){
    }
}
