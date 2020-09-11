import { TestBed } from '@angular/core/testing';

import { ChartDataService } from './chart-data.service';
import { FlightInfo } from './../interfaces/flight-info';

describe('ChartDataService', () => {
  let service: ChartDataService;

  const MOCK_DATA: Array<FlightInfo> = [
    {
      DAY_OF_WEEK: 1,
      AIRLINE: 'AR',
      CANCELLED: "1",
    },
    {
      DAY_OF_WEEK: 3,
      AIRLINE: 'IT',
      CANCELLED: "0",
    },
    {
      DAY_OF_WEEK: 1,
      AIRLINE: 'RU',
      CANCELLED: "0",
    },
    {
      DAY_OF_WEEK: 2,
      AIRLINE: 'UY',
      CANCELLED: "1",
    },
    {
      DAY_OF_WEEK: 2,
      AIRLINE: 'BR',
      CANCELLED: "1",
    },
    {
      DAY_OF_WEEK: 2,
      AIRLINE: 'FR',
      CANCELLED: "0",
    },
    {
      DAY_OF_WEEK: 2,
      AIRLINE: 'PT',
      CANCELLED: "0",
    },
    {
      DAY_OF_WEEK: 1,
      AIRLINE: 'CN',
      CANCELLED: "1",
    },
    {
      DAY_OF_WEEK: 2,
      AIRLINE: 'ID',
      CANCELLED: "0",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be handle empty array as input', () => {
    expect(service.getChartData([]).length).toEqual(0);
  });

  it('should be handle array of FlightInfo objects as input', () => {
    expect(service.getChartData(MOCK_DATA).length).toEqual(3);
  });

  it('should filter cancelled flights', () => {
    const data = [...MOCK_DATA];

    data.push({
      DAY_OF_WEEK: 4,
      AIRLINE: 'AC',
      CANCELLED: '1'
    });

    expect(service.getChartData(data).length).toEqual(3);
  });
});
