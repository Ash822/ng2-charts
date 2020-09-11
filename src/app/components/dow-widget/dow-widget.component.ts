import { ChartData } from './../../interfaces/chart-data';
import { ChartDataService } from './../../service/chart-data.service';
import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from './../../service/csv-reader.service';
import { Router } from '@angular/router';
import { Color } from 'ng2-charts';

@Component({
  selector: 'dow-widget',
  templateUrl: './dow-widget.component.html',
  styleUrls: ['./dow-widget.component.scss'],
})
export class DowWidgetComponent implements OnInit {
  public chartData: Array<ChartData> = [];
  public doughnutChartLabels: Array<string> = [];
  public doughnutChartData: Array<number> = [];
  public doughnutChartColors: Array<Color> = [];

  public isDataLoaded: boolean = false;
  public doughnutChartOptions = {
    responsive: true,
    legend: {
      display: true,
      align: 'start',
      position: 'right',
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const total = dataset.data.reduce((sum, val) => sum + val);

          const currentValue = dataset.data[tooltipItem.index];
          const percentage = ((currentValue / total) * 100).toFixed(2);

          return ` ${currentValue}  (${percentage}%)`;
        },
      },
    },
  };

  constructor(
    private chartDataService: ChartDataService,
    private csvReaderService: CsvReaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private getColors(): Array<string> {
    return [
      '#CC3300',
      '#009933',
      '#0099FF',
      '#FF7733',
      '#8000FF',
      '#008080',
      '#FFCC00',
    ];
  }

  private fetchData(): void {
    this.csvReaderService.getData().subscribe((result) => {
      this.chartData = this.chartDataService.getChartData(result);

      console.log(this.chartData);

      if (this.chartData) {
        // 1. Labels: Days of week
        this.doughnutChartLabels = this.chartData.map((data) => data.dayOfWeek);

        // 2. Data: numOfFlights per day
        this.doughnutChartData = this.chartData.map(
          (data) => data.numOfFlights
        );

        // 3. Color
        this.doughnutChartColors = [
          {
            backgroundColor: this.getColors(),
          },
        ];
      }

      this.isDataLoaded = true;
    });
  }

  chartClicked(e: any): void {
    if (e.active.length > 0) {
      const activeElem = e.active[0]._chart.getElementAtEvent(e.event);
      if (activeElem.length > 0) {
        this.gotoDayView(activeElem[0]._index);
      }
    }
  }

  /**
   * Navigates to day-view along with Day, data, color of slice
   * @param index
   */
  private gotoDayView(index: number): void {
    this.router.navigate(['/day-view'], {
      state: {
        data: {
          day: this.chartData[index].dayOfWeek,
          chartData: this.chartData[index].data,
          color: this.getColors()[index],
        },
      },
    });
  }
}
