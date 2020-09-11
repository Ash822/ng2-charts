import { Injectable } from '@angular/core';
import { FlightInfo } from '../interfaces/flight-info';

@Injectable({
  providedIn: 'root'
})
export class RouteDataService {

  constructor() { }

  getRouteData(flightInfoList: Array<FlightInfo>): any {
    console.log("Test!")
    const groupedList = this.groupByRoute(flightInfoList);
    console.log(groupedList);

    /*
    Object.keys(groupedList).map(function (key, index) {
      const obj = {};
      obj.id = key;
      obj.dayOfWeek = DayOfWeek[index];
      obj.numOfFlights = groupedList[key].length;
      obj.data = groupedList[key];
      return obj;
    });
    */

    return groupedList;
  }

  private groupByRoute(data: Array<FlightInfo>) {
    return data
      .filter((record) => !Number.parseInt(record.CANCELLED))
      .reduce(function (acc, record) {

        if (
          !/^\d+$/.test(record.ORIGIN_AIRPORT) ||
          !/^\d+$/.test(record.DESTINATION_AIRPORT)
        ) {
          const key = record.ORIGIN_AIRPORT + '-' + record.DESTINATION_AIRPORT;

          if (!acc[key]) {
            acc[key] = {};
            acc[key].count = 0;
          }
          acc[key].origin = record.ORIGIN_AIRPORT;
          acc[key].destination = record.DESTINATION_AIRPORT;
          acc[key].count += 1;
        }
        return acc;
      }, {});
  }
}
