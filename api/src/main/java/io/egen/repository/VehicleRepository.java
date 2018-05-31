package io.egen.repository;

import io.egen.entity.Vehicle;

import java.util.List;

public interface VehicleRepository{

    void createVehicle(Vehicle vehicle);

    Vehicle getVehicleByVin(String vin);

    List<Vehicle> getVehicles();

    Vehicle update(Vehicle vehicle);

    void delete(Vehicle vehicle);
}
