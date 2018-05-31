package io.egen.repository;

import io.egen.entity.Alert;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class AlertRepositoryImpl implements AlertRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public void createAlert(Alert alert) {
        entityManager.persist(alert);
    }

    public List<Alert> getAlerts() {
        TypedQuery<Alert> query = entityManager.createNamedQuery("Alert.getAllVehcles",Alert.class);
        return query.getResultList();
    }

}
