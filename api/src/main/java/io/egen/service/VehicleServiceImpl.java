package io.egen.service;

import io.egen.entity.Vehicle;
import io.egen.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepository repository;

    public List<Vehicle> findAll() {

    return repository.findAll();
    }

    public Vehicle findOne(String vin) {
        Vehicle v=repository.findOne(vin);
        if(v==null){
            //Exception
        }
        return v;
    }

    public Vehicle create(Vehicle vehicle) {

        Vehicle v=repository.findOne(vehicle.getVin());
        if(v !=null) {
            //Exception
        }
        return repository.create(v);
    }

    public Vehicle update(String vin, Vehicle vehicle) {
        Vehicle v=repository.findOne(vin);
        if(v==null){
            //Exception
        }

        return repository.update(vehicle);
    }

    public void delete(String vin) {
        Vehicle v=repository.findOne(vin);
        if(v==null){
            //Exception
        }
        repository.delete(v);

    }
}
