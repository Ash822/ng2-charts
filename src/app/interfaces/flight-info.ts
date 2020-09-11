export interface FlightInfo {
  MONTH?: number;
  DAY?: number;
  DAY_OF_WEEK: number;
  AIRLINE: string;
  ORIGIN_AIRPORT?: string;
  DESTINATION_AIRPORT?: string;
  SCHEDULED_DEPARTURE?: string;
  DEPARTURE_TIME?: number;
  DEPARTURE_DELAY?: number;
  AIR_TIME?: number;
  DISTANCE?: number;
  SCHEDULED_ARRIVAL?: number;
  ARRIVAL_TIME?: number;
  ARRIVAL_DELAY?: number;
  CANCELLED: string;
  CANCELLATION_REASON?: string;
}
