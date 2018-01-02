package io.egen.controller;

import io.egen.entity.Alert;
import io.egen.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://mocker.egen.io", maxAge = 3600)
@RestController
@RequestMapping(value = "alerts")
public class AlertController {

    @Autowired
    AlertService alertService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Alert> findAllAlerts() {
        return alertService.findAllAlerts();
    }
}
