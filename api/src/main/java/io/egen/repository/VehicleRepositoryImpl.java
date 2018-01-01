package io.egen.repository;

import io.egen.entity.Vehicle;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
@Repository
public class VehicleRepositoryImpl implements VehicleRepository {
    @javax.persistence.PersistenceContext
    private EntityManager entityManager;

    public List<Vehicle> getVehicles() {
        TypedQuery<Vehicle> query = entityManager.createNamedQuery("Vehicle.getAllVehcles",Vehicle.class);
        return query.getResultList();
    }

    public Vehicle getVehicleByVin(String vin) {
        return entityManager.find(Vehicle.class, vin);
    }

    public void createVehicle(Vehicle vehicle) {
        entityManager.persist(vehicle);
    }

    public Vehicle update(Vehicle vehicle) {
        return entityManager.merge(vehicle);
    }

    public void delete(Vehicle vehicle) {
        entityManager.remove(vehicle);

    }
}
