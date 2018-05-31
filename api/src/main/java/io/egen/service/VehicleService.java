package io.egen.service;

import io.egen.entity.Vehicle;

import java.util.List;

public interface VehicleService {

    List<Vehicle> findAllVehicles();

    Vehicle findVehicleByVin(String vehicleVin);

    void createVehicle(List<Vehicle> vehicleList);

    Vehicle updateVehicle(String vehicleVin, Vehicle vehicle);

    void delete(String vin);
}
