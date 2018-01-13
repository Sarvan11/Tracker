import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {

  }
  alerts= [
    {
      "alertId": 31,
      "reading": {
        "readingId": 34,
        "vin": "WP1AB29P63LA60179",
        "latitude": 46.5809,
        "longitude": -75.628,
        "timestamp": 1515856707829,
        "fuelVolume": 9,
        "speed": 107,
        "engineHp": 398,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4783,
        "tires": {
          "frontLeft": 38,
          "frontRight": 37,
          "rearLeft": 26,
          "rearRight": 29
        }
      },
      "vehicle": {
        "vin": "WP1AB29P63LA60179",
        "make": "PORSCHE",
        "model": "CAYENNE",
        "year": 2015,
        "redlineRpm": 6700,
        "maxFuelVolume": 26.4,
        "lastServiceDate": 1500912634674
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 32,
      "reading": {
        "readingId": 35,
        "vin": "1HGCR2F3XFA027534",
        "latitude": -88.8801,
        "longitude": -123.4571,
        "timestamp": 1515856707827,
        "fuelVolume": 5,
        "speed": 77,
        "engineHp": 186,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4208,
        "tires": {
          "frontLeft": 29,
          "frontRight": 40,
          "rearLeft": 29,
          "rearRight": 38
        }
      },
      "vehicle": {
        "vin": "1HGCR2F3XFA027534",
        "make": "HONDA",
        "model": "ACCORD",
        "year": 2015,
        "redlineRpm": 6000,
        "maxFuelVolume": 17.2,
        "lastServiceDate": 1499263072029
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 33,
      "reading": {
        "readingId": 36,
        "vin": "1VWAP7A35CC020276",
        "latitude": 76.7223,
        "longitude": -159.0448,
        "timestamp": 1515856707834,
        "fuelVolume": 15,
        "speed": 109,
        "engineHp": 334,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 6056,
        "tires": {
          "frontLeft": 30,
          "frontRight": 30,
          "rearLeft": 39,
          "rearRight": 28
        }
      },
      "vehicle": {
        "vin": "1VWAP7A35CC020276",
        "make": "VOLKSWAGEN",
        "model": "PASSAT",
        "year": 2012,
        "redlineRpm": 6200,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1486623054001
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 37,
      "reading": {
        "readingId": 52,
        "vin": "WBAFR1C50BC747531",
        "latitude": -45.5466,
        "longitude": 135.6805,
        "timestamp": 1515856707958,
        "fuelVolume": 1,
        "speed": 108,
        "engineHp": 357,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4169,
        "tires": {
          "frontLeft": 28,
          "frontRight": 40,
          "rearLeft": 40,
          "rearRight": 32
        }
      },
      "vehicle": {
        "vin": "WBAFR1C50BC747531",
        "make": "BMW",
        "model": "528",
        "year": 2011,
        "redlineRpm": 7000,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1492725911899
      },
      "priorityValue": "MEDIUM",
      "alertType": "FUELVOLUME"
    },
    {
      "alertId": 38,
      "reading": {
        "readingId": 44,
        "vin": "3GCRKSE30AG105585",
        "latitude": -54.1449,
        "longitude": -35.257,
        "timestamp": 1515856707964,
        "fuelVolume": 24,
        "speed": 68,
        "engineHp": 284,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4432,
        "tires": {
          "frontLeft": 39,
          "frontRight": 38,
          "rearLeft": 32,
          "rearRight": 27
        }
      },
      "vehicle": {
        "vin": "3GCRKSE30AG105585",
        "make": "CHEVROLET",
        "model": "SILVERADO",
        "year": 2010,
        "redlineRpm": 6000,
        "maxFuelVolume": 26,
        "lastServiceDate": 1508579719129
      },
      "priorityValue": "LOW",
      "alertType": "ENGINELIGHTSON"
    },
    {
      "alertId": 39,
      "reading": {
        "readingId": 55,
        "vin": "5J6RM3H50DL032829",
        "latitude": -88.8991,
        "longitude": -78.046,
        "timestamp": 1515856707994,
        "fuelVolume": 11,
        "speed": 118,
        "engineHp": 355,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7343,
        "tires": {
          "frontLeft": 35,
          "frontRight": 40,
          "rearLeft": 26,
          "rearRight": 37
        }
      },
      "vehicle": {
        "vin": "5J6RM3H50DL032829",
        "make": "HONDA",
        "model": "CR-V",
        "year": 2013,
        "redlineRpm": 6400,
        "maxFuelVolume": 14,
        "lastServiceDate": 1484751715283
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 40,
      "reading": {
        "readingId": 46,
        "vin": "2T1BU4EE4DC919097",
        "latitude": 62.2605,
        "longitude": 57.5852,
        "timestamp": 1515856707985,
        "fuelVolume": 8,
        "speed": 75,
        "engineHp": 216,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 3728,
        "tires": {
          "frontLeft": 25,
          "frontRight": 36,
          "rearLeft": 35,
          "rearRight": 30
        }
      },
      "vehicle": {
        "vin": "2T1BU4EE4DC919097",
        "make": "TOYOTA",
        "model": "COROLLA",
        "year": 2013,
        "redlineRpm": 6500,
        "maxFuelVolume": 13.2,
        "lastServiceDate": 1503953778139
      },
      "priorityValue": "LOW",
      "alertType": "ENGINELIGHTSON"
    },
    {
      "alertId": 41,
      "reading": {
        "readingId": 44,
        "vin": "3GCRKSE30AG105585",
        "latitude": -54.1449,
        "longitude": -35.257,
        "timestamp": 1515856707964,
        "fuelVolume": 24,
        "speed": 68,
        "engineHp": 284,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4432,
        "tires": {
          "frontLeft": 39,
          "frontRight": 38,
          "rearLeft": 32,
          "rearRight": 27
        }
      },
      "vehicle": {
        "vin": "3GCRKSE30AG105585",
        "make": "CHEVROLET",
        "model": "SILVERADO",
        "year": 2010,
        "redlineRpm": 6000,
        "maxFuelVolume": 26,
        "lastServiceDate": 1508579719129
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 42,
      "reading": {
        "readingId": 45,
        "vin": "WA1CMAFE6BD002500",
        "latitude": 77.9468,
        "longitude": -91.4351,
        "timestamp": 1515856707966,
        "fuelVolume": 9,
        "speed": 89,
        "engineHp": 188,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4130,
        "tires": {
          "frontLeft": 32,
          "frontRight": 31,
          "rearLeft": 27,
          "rearRight": 32
        }
      },
      "vehicle": {
        "vin": "WA1CMAFE6BD002500",
        "make": "AUDI",
        "model": "Q7",
        "year": 2011,
        "redlineRpm": 4750,
        "maxFuelVolume": 22.5,
        "lastServiceDate": 1508090535546
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 43,
      "reading": {
        "readingId": 46,
        "vin": "2T1BU4EE4DC919097",
        "latitude": 62.2605,
        "longitude": 57.5852,
        "timestamp": 1515856707985,
        "fuelVolume": 8,
        "speed": 75,
        "engineHp": 216,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 3728,
        "tires": {
          "frontLeft": 25,
          "frontRight": 36,
          "rearLeft": 35,
          "rearRight": 30
        }
      },
      "vehicle": {
        "vin": "2T1BU4EE4DC919097",
        "make": "TOYOTA",
        "model": "COROLLA",
        "year": 2013,
        "redlineRpm": 6500,
        "maxFuelVolume": 13.2,
        "lastServiceDate": 1503953778139
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 47,
      "reading": {
        "readingId": 55,
        "vin": "5J6RM3H50DL032829",
        "latitude": -88.8991,
        "longitude": -78.046,
        "timestamp": 1515856707994,
        "fuelVolume": 11,
        "speed": 118,
        "engineHp": 355,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7343,
        "tires": {
          "frontLeft": 35,
          "frontRight": 40,
          "rearLeft": 26,
          "rearRight": 37
        }
      },
      "vehicle": {
        "vin": "5J6RM3H50DL032829",
        "make": "HONDA",
        "model": "CR-V",
        "year": 2013,
        "redlineRpm": 6400,
        "maxFuelVolume": 14,
        "lastServiceDate": 1484751715283
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 48,
      "reading": {
        "readingId": 54,
        "vin": "1FMYU02143KB34432",
        "latitude": -40.651,
        "longitude": -178.3451,
        "timestamp": 1515856707991,
        "fuelVolume": 12,
        "speed": 93,
        "engineHp": 182,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 6711,
        "tires": {
          "frontLeft": 32,
          "frontRight": 26,
          "rearLeft": 39,
          "rearRight": 36
        }
      },
      "vehicle": {
        "vin": "1FMYU02143KB34432",
        "make": "FORD",
        "model": "ESCAPE",
        "year": 2003,
        "redlineRpm": 6500,
        "maxFuelVolume": 15.7,
        "lastServiceDate": 1485090191892
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 49,
      "reading": {
        "readingId": 52,
        "vin": "WBAFR1C50BC747531",
        "latitude": -45.5466,
        "longitude": 135.6805,
        "timestamp": 1515856707958,
        "fuelVolume": 1,
        "speed": 108,
        "engineHp": 357,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4169,
        "tires": {
          "frontLeft": 28,
          "frontRight": 40,
          "rearLeft": 40,
          "rearRight": 32
        }
      },
      "vehicle": {
        "vin": "WBAFR1C50BC747531",
        "make": "BMW",
        "model": "528",
        "year": 2011,
        "redlineRpm": 7000,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1492725911899
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 50,
      "reading": {
        "readingId": 53,
        "vin": "1ZVBP8JS8A5159269",
        "latitude": -89.9492,
        "longitude": -15.2639,
        "timestamp": 1515856707996,
        "fuelVolume": 15,
        "speed": 64,
        "engineHp": 150,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 5677,
        "tires": {
          "frontLeft": 38,
          "frontRight": 35,
          "rearLeft": 31,
          "rearRight": 36
        }
      },
      "vehicle": {
        "vin": "1ZVBP8JS8A5159269",
        "make": "FORD",
        "model": "MUSTANG",
        "year": 2010,
        "redlineRpm": 8200,
        "maxFuelVolume": 16,
        "lastServiceDate": 1513448966848
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 51,
      "reading": {
        "readingId": 54,
        "vin": "1FMYU02143KB34432",
        "latitude": -40.651,
        "longitude": -178.3451,
        "timestamp": 1515856707991,
        "fuelVolume": 12,
        "speed": 93,
        "engineHp": 182,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 6711,
        "tires": {
          "frontLeft": 32,
          "frontRight": 26,
          "rearLeft": 39,
          "rearRight": 36
        }
      },
      "vehicle": {
        "vin": "1FMYU02143KB34432",
        "make": "FORD",
        "model": "ESCAPE",
        "year": 2003,
        "redlineRpm": 6500,
        "maxFuelVolume": 15.7,
        "lastServiceDate": 1485090191892
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 56,
      "reading": {
        "readingId": 59,
        "vin": "1HGCR2F3XFA027534",
        "latitude": 35.2785,
        "longitude": -26.5096,
        "timestamp": 1515856711644,
        "fuelVolume": 12,
        "speed": 106,
        "engineHp": 362,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": true,
        "engineRpm": 3961,
        "tires": {
          "frontLeft": 26,
          "frontRight": 27,
          "rearLeft": 29,
          "rearRight": 26
        }
      },
      "vehicle": {
        "vin": "1HGCR2F3XFA027534",
        "make": "HONDA",
        "model": "ACCORD",
        "year": 2015,
        "redlineRpm": 6000,
        "maxFuelVolume": 17.2,
        "lastServiceDate": 1499263072029
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 57,
      "reading": {
        "readingId": 61,
        "vin": "WP1AB29P63LA60179",
        "latitude": 89.2062,
        "longitude": -32.7003,
        "timestamp": 1515856711645,
        "fuelVolume": 13,
        "speed": 112,
        "engineHp": 398,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 3077,
        "tires": {
          "frontLeft": 32,
          "frontRight": 32,
          "rearLeft": 27,
          "rearRight": 25
        }
      },
      "vehicle": {
        "vin": "WP1AB29P63LA60179",
        "make": "PORSCHE",
        "model": "CAYENNE",
        "year": 2015,
        "redlineRpm": 6700,
        "maxFuelVolume": 26.4,
        "lastServiceDate": 1500912634674
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 58,
      "reading": {
        "readingId": 60,
        "vin": "1VWAP7A35CC020276",
        "latitude": -12.1349,
        "longitude": 55.3623,
        "timestamp": 1515856711645,
        "fuelVolume": 10,
        "speed": 120,
        "engineHp": 396,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 5331,
        "tires": {
          "frontLeft": 29,
          "frontRight": 38,
          "rearLeft": 25,
          "rearRight": 30
        }
      },
      "vehicle": {
        "vin": "1VWAP7A35CC020276",
        "make": "VOLKSWAGEN",
        "model": "PASSAT",
        "year": 2012,
        "redlineRpm": 6200,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1486623054001
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 62,
      "reading": {
        "readingId": 64,
        "vin": "WBAFR1C50BC747531",
        "latitude": -5.2904,
        "longitude": -85.7257,
        "timestamp": 1515856711702,
        "fuelVolume": 8,
        "speed": 114,
        "engineHp": 138,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 3552,
        "tires": {
          "frontLeft": 36,
          "frontRight": 39,
          "rearLeft": 31,
          "rearRight": 30
        }
      },
      "vehicle": {
        "vin": "WBAFR1C50BC747531",
        "make": "BMW",
        "model": "528",
        "year": 2011,
        "redlineRpm": 7000,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1492725911899
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 63,
      "reading": {
        "readingId": 66,
        "vin": "3GCRKSE30AG105585",
        "latitude": -79.7667,
        "longitude": 76.7089,
        "timestamp": 1515856711709,
        "fuelVolume": 19,
        "speed": 81,
        "engineHp": 246,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7003,
        "tires": {
          "frontLeft": 27,
          "frontRight": 39,
          "rearLeft": 36,
          "rearRight": 32
        }
      },
      "vehicle": {
        "vin": "3GCRKSE30AG105585",
        "make": "CHEVROLET",
        "model": "SILVERADO",
        "year": 2010,
        "redlineRpm": 6000,
        "maxFuelVolume": 26,
        "lastServiceDate": 1508579719129
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 65,
      "reading": {
        "readingId": 66,
        "vin": "3GCRKSE30AG105585",
        "latitude": -79.7667,
        "longitude": 76.7089,
        "timestamp": 1515856711709,
        "fuelVolume": 19,
        "speed": 81,
        "engineHp": 246,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7003,
        "tires": {
          "frontLeft": 27,
          "frontRight": 39,
          "rearLeft": 36,
          "rearRight": 32
        }
      },
      "vehicle": {
        "vin": "3GCRKSE30AG105585",
        "make": "CHEVROLET",
        "model": "SILVERADO",
        "year": 2010,
        "redlineRpm": 6000,
        "maxFuelVolume": 26,
        "lastServiceDate": 1508579719129
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 67,
      "reading": {
        "readingId": 68,
        "vin": "WA1CMAFE6BD002500",
        "latitude": 12.4647,
        "longitude": -95.7611,
        "timestamp": 1515856711768,
        "fuelVolume": 11,
        "speed": 109,
        "engineHp": 242,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4604,
        "tires": {
          "frontLeft": 40,
          "frontRight": 25,
          "rearLeft": 39,
          "rearRight": 32
        }
      },
      "vehicle": {
        "vin": "WA1CMAFE6BD002500",
        "make": "AUDI",
        "model": "Q7",
        "year": 2011,
        "redlineRpm": 4750,
        "maxFuelVolume": 22.5,
        "lastServiceDate": 1508090535546
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 69,
      "reading": {
        "readingId": 70,
        "vin": "2T1BU4EE4DC919097",
        "latitude": 75.0749,
        "longitude": 28.3969,
        "timestamp": 1515856711784,
        "fuelVolume": 8,
        "speed": 75,
        "engineHp": 363,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4221,
        "tires": {
          "frontLeft": 34,
          "frontRight": 40,
          "rearLeft": 28,
          "rearRight": 39
        }
      },
      "vehicle": {
        "vin": "2T1BU4EE4DC919097",
        "make": "TOYOTA",
        "model": "COROLLA",
        "year": 2013,
        "redlineRpm": 6500,
        "maxFuelVolume": 13.2,
        "lastServiceDate": 1503953778139
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 71,
      "reading": {
        "readingId": 73,
        "vin": "1FMYU02143KB34432",
        "latitude": 82.7066,
        "longitude": -154.4116,
        "timestamp": 1515856711860,
        "fuelVolume": 1,
        "speed": 66,
        "engineHp": 177,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 5443,
        "tires": {
          "frontLeft": 40,
          "frontRight": 33,
          "rearLeft": 30,
          "rearRight": 25
        }
      },
      "vehicle": {
        "vin": "1FMYU02143KB34432",
        "make": "FORD",
        "model": "ESCAPE",
        "year": 2003,
        "redlineRpm": 6500,
        "maxFuelVolume": 15.7,
        "lastServiceDate": 1485090191892
      },
      "priorityValue": "MEDIUM",
      "alertType": "FUELVOLUME"
    },
    {
      "alertId": 72,
      "reading": {
        "readingId": 73,
        "vin": "1FMYU02143KB34432",
        "latitude": 82.7066,
        "longitude": -154.4116,
        "timestamp": 1515856711860,
        "fuelVolume": 1,
        "speed": 66,
        "engineHp": 177,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 5443,
        "tires": {
          "frontLeft": 40,
          "frontRight": 33,
          "rearLeft": 30,
          "rearRight": 25
        }
      },
      "vehicle": {
        "vin": "1FMYU02143KB34432",
        "make": "FORD",
        "model": "ESCAPE",
        "year": 2003,
        "redlineRpm": 6500,
        "maxFuelVolume": 15.7,
        "lastServiceDate": 1485090191892
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 74,
      "reading": {
        "readingId": 76,
        "vin": "5J6RM3H50DL032829",
        "latitude": 56.548,
        "longitude": 47.7038,
        "timestamp": 1515856711935,
        "fuelVolume": 1,
        "speed": 59,
        "engineHp": 174,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4364,
        "tires": {
          "frontLeft": 30,
          "frontRight": 28,
          "rearLeft": 35,
          "rearRight": 29
        }
      },
      "vehicle": {
        "vin": "5J6RM3H50DL032829",
        "make": "HONDA",
        "model": "CR-V",
        "year": 2013,
        "redlineRpm": 6400,
        "maxFuelVolume": 14,
        "lastServiceDate": 1484751715283
      },
      "priorityValue": "MEDIUM",
      "alertType": "FUELVOLUME"
    },
    {
      "alertId": 75,
      "reading": {
        "readingId": 76,
        "vin": "5J6RM3H50DL032829",
        "latitude": 56.548,
        "longitude": 47.7038,
        "timestamp": 1515856711935,
        "fuelVolume": 1,
        "speed": 59,
        "engineHp": 174,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 4364,
        "tires": {
          "frontLeft": 30,
          "frontRight": 28,
          "rearLeft": 35,
          "rearRight": 29
        }
      },
      "vehicle": {
        "vin": "5J6RM3H50DL032829",
        "make": "HONDA",
        "model": "CR-V",
        "year": 2013,
        "redlineRpm": 6400,
        "maxFuelVolume": 14,
        "lastServiceDate": 1484751715283
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 77,
      "reading": {
        "readingId": 78,
        "vin": "1ZVBP8JS8A5159269",
        "latitude": 70.8837,
        "longitude": -115.3727,
        "timestamp": 1515856712006,
        "fuelVolume": 5,
        "speed": 77,
        "engineHp": 339,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 5284,
        "tires": {
          "frontLeft": 37,
          "frontRight": 26,
          "rearLeft": 28,
          "rearRight": 35
        }
      },
      "vehicle": {
        "vin": "1ZVBP8JS8A5159269",
        "make": "FORD",
        "model": "MUSTANG",
        "year": 2010,
        "redlineRpm": 8200,
        "maxFuelVolume": 16,
        "lastServiceDate": 1513448966848
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 79,
      "reading": {
        "readingId": 81,
        "vin": "1HGCR2F3XFA027534",
        "latitude": -5.4549,
        "longitude": 164.5119,
        "timestamp": 1515856714643,
        "fuelVolume": 13,
        "speed": 86,
        "engineHp": 269,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": true,
        "engineRpm": 5250,
        "tires": {
          "frontLeft": 39,
          "frontRight": 36,
          "rearLeft": 25,
          "rearRight": 34
        }
      },
      "vehicle": {
        "vin": "1HGCR2F3XFA027534",
        "make": "HONDA",
        "model": "ACCORD",
        "year": 2015,
        "redlineRpm": 6000,
        "maxFuelVolume": 17.2,
        "lastServiceDate": 1499263072029
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 80,
      "reading": {
        "readingId": 83,
        "vin": "WP1AB29P63LA60179",
        "latitude": 87.4698,
        "longitude": 105.8978,
        "timestamp": 1515856714646,
        "fuelVolume": 19,
        "speed": 99,
        "engineHp": 235,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7940,
        "tires": {
          "frontLeft": 40,
          "frontRight": 35,
          "rearLeft": 39,
          "rearRight": 27
        }
      },
      "vehicle": {
        "vin": "WP1AB29P63LA60179",
        "make": "PORSCHE",
        "model": "CAYENNE",
        "year": 2015,
        "redlineRpm": 6700,
        "maxFuelVolume": 26.4,
        "lastServiceDate": 1500912634674
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 82,
      "reading": {
        "readingId": 83,
        "vin": "WP1AB29P63LA60179",
        "latitude": 87.4698,
        "longitude": 105.8978,
        "timestamp": 1515856714646,
        "fuelVolume": 19,
        "speed": 99,
        "engineHp": 235,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7940,
        "tires": {
          "frontLeft": 40,
          "frontRight": 35,
          "rearLeft": 39,
          "rearRight": 27
        }
      },
      "vehicle": {
        "vin": "WP1AB29P63LA60179",
        "make": "PORSCHE",
        "model": "CAYENNE",
        "year": 2015,
        "redlineRpm": 6700,
        "maxFuelVolume": 26.4,
        "lastServiceDate": 1500912634674
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 84,
      "reading": {
        "readingId": 93,
        "vin": "1VWAP7A35CC020276",
        "latitude": -65.3361,
        "longitude": 120.4812,
        "timestamp": 1515856714648,
        "fuelVolume": 10,
        "speed": 53,
        "engineHp": 223,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7162,
        "tires": {
          "frontLeft": 37,
          "frontRight": 35,
          "rearLeft": 40,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "1VWAP7A35CC020276",
        "make": "VOLKSWAGEN",
        "model": "PASSAT",
        "year": 2012,
        "redlineRpm": 6200,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1486623054001
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 85,
      "reading": {
        "readingId": 93,
        "vin": "1VWAP7A35CC020276",
        "latitude": -65.3361,
        "longitude": 120.4812,
        "timestamp": 1515856714648,
        "fuelVolume": 10,
        "speed": 53,
        "engineHp": 223,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7162,
        "tires": {
          "frontLeft": 37,
          "frontRight": 35,
          "rearLeft": 40,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "1VWAP7A35CC020276",
        "make": "VOLKSWAGEN",
        "model": "PASSAT",
        "year": 2012,
        "redlineRpm": 6200,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1486623054001
      },
      "priorityValue": "LOW",
      "alertType": "ENGINELIGHTSON"
    },
    {
      "alertId": 86,
      "reading": {
        "readingId": 98,
        "vin": "WBAFR1C50BC747531",
        "latitude": 50.7076,
        "longitude": 125.2532,
        "timestamp": 1515856714650,
        "fuelVolume": 2,
        "speed": 107,
        "engineHp": 350,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 8136,
        "tires": {
          "frontLeft": 39,
          "frontRight": 36,
          "rearLeft": 32,
          "rearRight": 39
        }
      },
      "vehicle": {
        "vin": "WBAFR1C50BC747531",
        "make": "BMW",
        "model": "528",
        "year": 2011,
        "redlineRpm": 7000,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1492725911899
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 87,
      "reading": {
        "readingId": 95,
        "vin": "3GCRKSE30AG105585",
        "latitude": -2.2807,
        "longitude": 121.7827,
        "timestamp": 1515856714654,
        "fuelVolume": 26,
        "speed": 67,
        "engineHp": 184,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 6413,
        "tires": {
          "frontLeft": 30,
          "frontRight": 31,
          "rearLeft": 33,
          "rearRight": 36
        }
      },
      "vehicle": {
        "vin": "3GCRKSE30AG105585",
        "make": "CHEVROLET",
        "model": "SILVERADO",
        "year": 2010,
        "redlineRpm": 6000,
        "maxFuelVolume": 26,
        "lastServiceDate": 1508579719129
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 88,
      "reading": {
        "readingId": 93,
        "vin": "1VWAP7A35CC020276",
        "latitude": -65.3361,
        "longitude": 120.4812,
        "timestamp": 1515856714648,
        "fuelVolume": 10,
        "speed": 53,
        "engineHp": 223,
        "checkEngineLightOn": true,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7162,
        "tires": {
          "frontLeft": 37,
          "frontRight": 35,
          "rearLeft": 40,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "1VWAP7A35CC020276",
        "make": "VOLKSWAGEN",
        "model": "PASSAT",
        "year": 2012,
        "redlineRpm": 6200,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1486623054001
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 89,
      "reading": {
        "readingId": 94,
        "vin": "WA1CMAFE6BD002500",
        "latitude": -25.1564,
        "longitude": -53.9065,
        "timestamp": 1515856714819,
        "fuelVolume": 23,
        "speed": 118,
        "engineHp": 260,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 3765,
        "tires": {
          "frontLeft": 26,
          "frontRight": 28,
          "rearLeft": 36,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "WA1CMAFE6BD002500",
        "make": "AUDI",
        "model": "Q7",
        "year": 2011,
        "redlineRpm": 4750,
        "maxFuelVolume": 22.5,
        "lastServiceDate": 1508090535546
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 90,
      "reading": {
        "readingId": 95,
        "vin": "3GCRKSE30AG105585",
        "latitude": -2.2807,
        "longitude": 121.7827,
        "timestamp": 1515856714654,
        "fuelVolume": 26,
        "speed": 67,
        "engineHp": 184,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 6413,
        "tires": {
          "frontLeft": 30,
          "frontRight": 31,
          "rearLeft": 33,
          "rearRight": 36
        }
      },
      "vehicle": {
        "vin": "3GCRKSE30AG105585",
        "make": "CHEVROLET",
        "model": "SILVERADO",
        "year": 2010,
        "redlineRpm": 6000,
        "maxFuelVolume": 26,
        "lastServiceDate": 1508579719129
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 91,
      "reading": {
        "readingId": 99,
        "vin": "1FMYU02143KB34432",
        "latitude": 57.9183,
        "longitude": 99.4051,
        "timestamp": 1515856714826,
        "fuelVolume": 4,
        "speed": 90,
        "engineHp": 164,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 3218,
        "tires": {
          "frontLeft": 39,
          "frontRight": 32,
          "rearLeft": 35,
          "rearRight": 28
        }
      },
      "vehicle": {
        "vin": "1FMYU02143KB34432",
        "make": "FORD",
        "model": "ESCAPE",
        "year": 2003,
        "redlineRpm": 6500,
        "maxFuelVolume": 15.7,
        "lastServiceDate": 1485090191892
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 92,
      "reading": {
        "readingId": 98,
        "vin": "WBAFR1C50BC747531",
        "latitude": 50.7076,
        "longitude": 125.2532,
        "timestamp": 1515856714650,
        "fuelVolume": 2,
        "speed": 107,
        "engineHp": 350,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 8136,
        "tires": {
          "frontLeft": 39,
          "frontRight": 36,
          "rearLeft": 32,
          "rearRight": 39
        }
      },
      "vehicle": {
        "vin": "WBAFR1C50BC747531",
        "make": "BMW",
        "model": "528",
        "year": 2011,
        "redlineRpm": 7000,
        "maxFuelVolume": 18.5,
        "lastServiceDate": 1492725911899
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 96,
      "reading": {
        "readingId": 101,
        "vin": "2T1BU4EE4DC919097",
        "latitude": 71.6628,
        "longitude": -30.654,
        "timestamp": 1515856714821,
        "fuelVolume": 1,
        "speed": 104,
        "engineHp": 384,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7283,
        "tires": {
          "frontLeft": 28,
          "frontRight": 34,
          "rearLeft": 31,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "2T1BU4EE4DC919097",
        "make": "TOYOTA",
        "model": "COROLLA",
        "year": 2013,
        "redlineRpm": 6500,
        "maxFuelVolume": 13.2,
        "lastServiceDate": 1503953778139
      },
      "priorityValue": "HIGH",
      "alertType": "ENGINERPM"
    },
    {
      "alertId": 97,
      "reading": {
        "readingId": 101,
        "vin": "2T1BU4EE4DC919097",
        "latitude": 71.6628,
        "longitude": -30.654,
        "timestamp": 1515856714821,
        "fuelVolume": 1,
        "speed": 104,
        "engineHp": 384,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7283,
        "tires": {
          "frontLeft": 28,
          "frontRight": 34,
          "rearLeft": 31,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "2T1BU4EE4DC919097",
        "make": "TOYOTA",
        "model": "COROLLA",
        "year": 2013,
        "redlineRpm": 6500,
        "maxFuelVolume": 13.2,
        "lastServiceDate": 1503953778139
      },
      "priorityValue": "MEDIUM",
      "alertType": "FUELVOLUME"
    },
    {
      "alertId": 100,
      "reading": {
        "readingId": 101,
        "vin": "2T1BU4EE4DC919097",
        "latitude": 71.6628,
        "longitude": -30.654,
        "timestamp": 1515856714821,
        "fuelVolume": 1,
        "speed": 104,
        "engineHp": 384,
        "checkEngineLightOn": false,
        "engineCoolantLow": false,
        "cruiseControlOn": false,
        "engineRpm": 7283,
        "tires": {
          "frontLeft": 28,
          "frontRight": 34,
          "rearLeft": 31,
          "rearRight": 40
        }
      },
      "vehicle": {
        "vin": "2T1BU4EE4DC919097",
        "make": "TOYOTA",
        "model": "COROLLA",
        "year": 2013,
        "redlineRpm": 6500,
        "maxFuelVolume": 13.2,
        "lastServiceDate": 1503953778139
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 102,
      "reading": {
        "readingId": 106,
        "vin": "5J6RM3H50DL032829",
        "latitude": -59.6882,
        "longitude": 6.3421,
        "timestamp": 1515856714829,
        "fuelVolume": 7,
        "speed": 63,
        "engineHp": 347,
        "checkEngineLightOn": false,
        "engineCoolantLow": true,
        "cruiseControlOn": true,
        "engineRpm": 5878,
        "tires": {
          "frontLeft": 29,
          "frontRight": 31,
          "rearLeft": 38,
          "rearRight": 31
        }
      },
      "vehicle": {
        "vin": "5J6RM3H50DL032829",
        "make": "HONDA",
        "model": "CR-V",
        "year": 2013,
        "redlineRpm": 6400,
        "maxFuelVolume": 14,
        "lastServiceDate": 1484751715283
      },
      "priorityValue": "LOW",
      "alertType": "ENGINECOOLANTLOW"
    },
    {
      "alertId": 103,
      "reading": {
        "readingId": 107,
        "vin": "1ZVBP8JS8A5159269",
        "latitude": -0.4103,
        "longitude": -93.6633,
        "timestamp": 1515856714837,
        "fuelVolume": 4,
        "speed": 74,
        "engineHp": 287,
        "checkEngineLightOn": false,
        "engineCoolantLow": true,
        "cruiseControlOn": true,
        "engineRpm": 7418,
        "tires": {
          "frontLeft": 30,
          "frontRight": 33,
          "rearLeft": 37,
          "rearRight": 26
        }
      },
      "vehicle": {
        "vin": "1ZVBP8JS8A5159269",
        "make": "FORD",
        "model": "MUSTANG",
        "year": 2010,
        "redlineRpm": 8200,
        "maxFuelVolume": 16,
        "lastServiceDate": 1513448966848
      },
      "priorityValue": "LOW",
      "alertType": "ENGINECOOLANTLOW"
    },
    {
      "alertId": 104,
      "reading": {
        "readingId": 106,
        "vin": "5J6RM3H50DL032829",
        "latitude": -59.6882,
        "longitude": 6.3421,
        "timestamp": 1515856714829,
        "fuelVolume": 7,
        "speed": 63,
        "engineHp": 347,
        "checkEngineLightOn": false,
        "engineCoolantLow": true,
        "cruiseControlOn": true,
        "engineRpm": 5878,
        "tires": {
          "frontLeft": 29,
          "frontRight": 31,
          "rearLeft": 38,
          "rearRight": 31
        }
      },
      "vehicle": {
        "vin": "5J6RM3H50DL032829",
        "make": "HONDA",
        "model": "CR-V",
        "year": 2013,
        "redlineRpm": 6400,
        "maxFuelVolume": 14,
        "lastServiceDate": 1484751715283
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    },
    {
      "alertId": 105,
      "reading": {
        "readingId": 107,
        "vin": "1ZVBP8JS8A5159269",
        "latitude": -0.4103,
        "longitude": -93.6633,
        "timestamp": 1515856714837,
        "fuelVolume": 4,
        "speed": 74,
        "engineHp": 287,
        "checkEngineLightOn": false,
        "engineCoolantLow": true,
        "cruiseControlOn": true,
        "engineRpm": 7418,
        "tires": {
          "frontLeft": 30,
          "frontRight": 33,
          "rearLeft": 37,
          "rearRight": 26
        }
      },
      "vehicle": {
        "vin": "1ZVBP8JS8A5159269",
        "make": "FORD",
        "model": "MUSTANG",
        "year": 2010,
        "redlineRpm": 8200,
        "maxFuelVolume": 16,
        "lastServiceDate": 1513448966848
      },
      "priorityValue": "LOW",
      "alertType": "TIREPRESSURE"
    }
  ]

  getVehicles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/vehicles');
    // .map(response => JSON.parse(response))
    // .catch(error => Observable.throw(error.statusText));
  }

  // getAlerts(): Observable<any> {
  //   return this.http.get('http://mocker.egen.io/users');
  // }



  getAlerts() {
    return this.alerts;
  }
}
