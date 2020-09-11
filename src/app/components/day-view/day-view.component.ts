import { Color } from 'ng2-charts';
import { FlightInfo } from './../../interfaces/flight-info';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
})
export class DayViewComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Airlines',
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Number of flights',
          },
        },
      ],
    },
  };

  public barChartLabels = [];
  public barChartData = [];

  public day: string;
  public barChartColor: Array<Color> = [];
  public isDataLoaded: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (history.state.data) {
      let { day, chartData, color } = history.state.data;
      this.populate(day, chartData, color);
    } else {
      this.gotoDOW();
    }
  }

  private populate(
    day: string,
    chartData: Array<FlightInfo>,
    color: string
  ): void {
    this.day = 'Number of flights on ' + day + ' from different airlines:';

    const barchartData = this.getBarchartData(chartData);

    if (Object.keys(barchartData).length) {
      // 1. Labels: Airlines
      this.barChartLabels = [...Object.keys(barchartData)];

      // 2. Data: NumOfFlights
      this.barChartData = [...Object.values(barchartData)];

      // 3. BGColor: Color from the DoughnutChart segment
      this.barChartColor = [
        {
          backgroundColor: Array(this.barChartLabels.length).fill(color),
        },
      ];
      this.isDataLoaded = true;
    } else {
      this.gotoDOW();
    }
  }

  /**
   * Returns object of airlines as key and count as value
   * @param chartData
   */
  private getBarchartData(flightInfoList: Array<FlightInfo>) {
    /***
     * Expected output:
     * {
     *    "Airline" : "NumOfFlights"
     * }
     */

    if (flightInfoList) {
      const data = flightInfoList.reduce((obj, item) => {
        obj[item.AIRLINE] = (obj[item.AIRLINE] || 0) + 1;
        return obj;
      }, {});
      return this.sortedByAirline(data);
    } else {
      return {};
    }
  }

  /**
   * Returns an object sorted by Airline
   *
   * @param data
   */
  private sortedByAirline(data) {
    const sortedData = {};

    if (data) {
      Object.keys(data)
        .sort()
        .forEach(function (key) {
          sortedData[key] = data[key];
        });
    }

    return sortedData;
  }

  /**
   * Return to DOW-widget
   */
  private gotoDOW(): void {
    this.router.navigate(['/dow-widget']);
  }
}
