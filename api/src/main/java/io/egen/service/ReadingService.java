package io.egen.service;

import io.egen.entity.Reading;

import java.util.List;

public interface ReadingService {
    void createReading(Reading reading);

    List<Reading> getReadingByVin(String readingVin);

    List<Reading> getAllReadings();

}
