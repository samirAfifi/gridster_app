import { Component, Input} from '@angular/core';
import * as Highcharts from "highcharts/highstock";
import { GridsterItem } from 'angular-gridster2';



@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;


  Highcharts: typeof Highcharts = Highcharts;

  getText() {
    return 'some text'
  }

  chartOptions: Highcharts.Options = {
    chart:{
      events:{
        render: (e) => { 
          const chart = e.target

          console.log(chart)
          console.log(this.getText())

        }
      }
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

}
