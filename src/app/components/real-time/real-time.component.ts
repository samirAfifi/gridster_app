import { Component, Input, } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;

  constructor() { }

  ngOnInit(): void {
  }

}
