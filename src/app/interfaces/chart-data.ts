import { FlightInfo } from './flight-info';

export interface ChartData {
  id: string;
  dayOfWeek: string;
  numOfFlights: number;
  data: Array<FlightInfo>;
}
