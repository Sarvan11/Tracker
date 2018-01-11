package io.egen.repository;

import io.egen.entity.Reading;

import java.util.List;

public interface ReadingRepository {
    List<Reading> getAllReadings();

    void createReading(Reading reading);

    List<Reading> getReadingByVin(String vehicleVin);

}
