import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface } from 'angular-gridster2';


@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent{
  

  @ViewChild('gridsterItem') gridItem: GridsterItemComponent;
  
  public options: GridsterConfig;
  public unitHeight: number;
  public item1: GridsterItem;
  public item2: GridsterItem;
  
  constructor() {
    this.unitHeight = 0;
    this.item1 = { x: 3, y: 1, rows: 5, cols: 5 };
    this.item2 = { x: 5, y: 6, rows: 4, cols: 7 };
 
    this.options = {
      itemResizeCallback: this.itemResize.bind(this),
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,
      gridType: 'scrollVertical',
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
  }
  public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.log('update', item);

    if (itemComponent.gridster.curRowHeight > 1) {
      
      this.unitHeight = itemComponent.gridster.curRowHeight;
      
    }
    
    itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
  }
}
