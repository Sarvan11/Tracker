package io.egen.repository;

import io.egen.entity.Alert;

import java.util.List;

public interface AlertRepository {
    void createAlert(Alert alert);
    List<Alert> getAlerts();

}
