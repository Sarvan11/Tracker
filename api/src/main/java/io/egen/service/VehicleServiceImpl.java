package io.egen.service;

import io.egen.entity.Vehicle;
import io.egen.exception.BadRequestException;
import io.egen.exception.ResourceNotFoundException;
import io.egen.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepository vehicleRepository;

    @Transactional(readOnly = true)
    public List<Vehicle> findAllVehicles() {
        List<Vehicle> vehicleList = vehicleRepository.getVehicles();
        if (vehicleList == null) {
            throw new ResourceNotFoundException("There are no vehicles created in the database");
        }
        return vehicleList;
    }

    @Transactional(readOnly = true)
    public Vehicle findVehicleByVin(String vehicleVin) {
        Vehicle existingVehicle = vehicleRepository.getVehicleByVin(vehicleVin);
        if (existingVehicle == null) {
            throw new ResourceNotFoundException("Vehicle with Vin: " + vehicleVin + " doesn't exist");
        }
        return existingVehicle;
    }

    @Transactional
    public void createVehicle(List<Vehicle> vehicleList) {
        if (vehicleList == null) {
            throw new BadRequestException("Vehicle list is Empty");
        }
        for (Vehicle vehicle : vehicleList) {
            Vehicle existingVehicle = vehicleRepository.getVehicleByVin(vehicle.getVin());
            if (existingVehicle == null) {
                vehicleRepository.createVehicle(vehicle);
            } else {
                vehicleRepository.update(vehicle);
            }
        }
    }


    @Transactional
    public Vehicle updateVehicle(String vehicleVin, Vehicle vehicle) {
        Vehicle existingVehicle = vehicleRepository.getVehicleByVin(vehicleVin);
        if (existingVehicle == null) {
            throw new ResourceNotFoundException("Vehicle with " + vehicleVin + " doesn't exist");
        }
        return vehicleRepository.update(vehicle);
    }

    @Transactional
    public void delete(String vehicleVin) {
        Vehicle existingVehicle = vehicleRepository.getVehicleByVin(vehicleVin);
        if (existingVehicle == null) {
            throw new ResourceNotFoundException("Vehicle with vin=" + vehicleVin + "not found");
        }
        vehicleRepository.delete(existingVehicle);
    }
}
