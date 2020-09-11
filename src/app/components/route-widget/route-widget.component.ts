import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from './../../service/csv-reader.service';
import { RouteDataService } from './../../service/route-data.service';

@Component({
  selector: 'route-widget',
  templateUrl: './route-widget.component.html',
  styleUrls: ['./route-widget.component.scss'],
})
export class RouteWidgetComponent implements OnInit {
  public routeData: any = {};

  constructor(
    private csvReaderService: CsvReaderService,
    private routeDataService: RouteDataService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.csvReaderService.getData().subscribe((data) => {
      this.routeData = this.routeDataService.getRouteData(data);
    });
  }
}
