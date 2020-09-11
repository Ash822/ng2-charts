import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface DoughnutChartData {
  dataset: Array<ChartDataSets>;
  labels: Array<Label>;
}
