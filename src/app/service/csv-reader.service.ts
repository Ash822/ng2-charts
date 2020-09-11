import { FlightInfo } from './../interfaces/flight-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvReaderService {

  uri: string = 'assets/flights_2015_sample.csv';

  constructor(private http: HttpClient) {}

  getData(): Observable<Array<FlightInfo>> {
    return this.http
      .get(this.uri, { responseType: 'text' })
      .pipe(map((result) => this.convertToJson(result)));
  }

  private convertToJson(csv: string): Array<FlightInfo> {
    const filghtInfoList: FlightInfo[] = [];
    const data: string[] = csv.split('\n');
    const headers = data[0].split(',');

    const [, ...records] = data;

    // remove the last empty line
    records.pop();

    records.forEach(function (value) {
      const obj = {};
      const properties: string[] = value.split(',');
      for (let i = 0; i < headers.length; i++) {
        obj[headers[i]] = properties[i];
      }
      filghtInfoList.push(obj as FlightInfo);
    });
    return filghtInfoList;
  }
}
