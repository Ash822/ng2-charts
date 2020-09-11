import { ChartData } from './../interfaces/chart-data';
import { DayOfWeek } from '../enum/day-of-week.enum';
import { Injectable } from '@angular/core';
import { FlightInfo } from '../interfaces/flight-info';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor() {}

  getChartData(flightInfoList: Array<FlightInfo>): Array<ChartData> {
    const groupedList = this.groupByDOW(flightInfoList);
    return Object.keys(groupedList).map(function (key, index) {
      const obj = {} as ChartData;
      obj.id = key;
      obj.dayOfWeek = DayOfWeek[index];
      obj.numOfFlights = groupedList[key].length;
      obj.data = groupedList[key];
      return obj;
    });
  }

  private groupByDOW(data: Array<FlightInfo>) {
    return data
      .filter(record => !Number.parseInt(record.CANCELLED))
      .reduce( (acc, obj) => {
      var key = obj['DAY_OF_WEEK'];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
}
