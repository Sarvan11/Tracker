package io.egen.repository;

import io.egen.entity.Vehicle;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;
@Repository
public class VehicleRepositoryImpl implements VehicleRepository {
    public List<Vehicle> findAll() {
        Vehicle v1=new Vehicle();
        v1.setVin("1");
        v1.setMake("Honda");
        v1.setModel("Bolero");
        v1.setYear(2015);
        v1.setRedlineRpm(5000);
        v1.setMaxFuelVolume(15);
        v1.setLastServiceDate("12/12/12");

        Vehicle v2=new Vehicle();
        v2.setVin("2");
        v2.setMake("Toyota");
        v2.setModel("Camry");
        v2.setYear(2014);
        v2.setRedlineRpm(9000);
        v2.setMaxFuelVolume(17);
        v2.setLastServiceDate("1/1/12");

        return Arrays.asList(v1,v2);
    }

    public Vehicle findOne(String vin) {
        Vehicle v1=new Vehicle();
        v1.setVin("1");
        v1.setMake("Honda");
        v1.setModel("Bolero");
        v1.setYear(2015);
        v1.setRedlineRpm(5000);
        v1.setMaxFuelVolume(15);
        v1.setLastServiceDate("12/12/12");
    return v1;
    }

    public Vehicle create(Vehicle vehicle) {
        return null;
    }

    public Vehicle update(Vehicle vehicle) {
        return null;
    }

    public void delete(Vehicle vehicle) {

    }
}
