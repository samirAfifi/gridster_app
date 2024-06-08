import { Component, Input, } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        pointInterval: 24 * 3600 * 1000,
        data: [1, 2, 3, 4, 5, 12, 5, 84, 60, 4, 12],
      },
    ],
  };

}
