package io.egen.service;

import io.egen.entity.Vehicle;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
@Service
public class VehicleServiceImpl implements VehicleService {
    public List<Vehicle> findAll() {

        Vehicle v1=new Vehicle();
        v1.setVin("1");
        v1.setMake("Honda");
        v1.setModel("Bolero");
        v1.setYear(2015);
        v1.setRedlineRpm(5000);
        v1.setMaxFuelVolume(15);
        v1.setLastServiceDate("12/12/12");
        return Arrays.asList(v1);
    }

    public Vehicle findOne(String vin) {
        return null;
    }

    public Vehicle create(Vehicle vehicle) {
        return null;
    }

    public Vehicle update(String vin, Vehicle vehicle) {
        return null;
    }

    public void delete(String vin) {

    }
}
