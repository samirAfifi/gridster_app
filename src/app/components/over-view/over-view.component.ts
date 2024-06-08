import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface } from 'angular-gridster2';
@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css'],
  
})
export class OverViewComponent  {
  @ViewChild('gridsterItem') gridItem: GridsterItemComponent;
  
  public options: GridsterConfig;
  public unitHeight: number;
  public item1: GridsterItem;
  public item2: GridsterItem;
  public item3: GridsterItem;
  public item4: GridsterItem;
  public item5: GridsterItem;
  public item6: GridsterItem;
  constructor() {
    this.unitHeight = 0;
    this.item1 = { x: 3, y: 1, rows: 3, cols: 5 };
    this.item2 = { x: 8, y: 1, rows: 3, cols: 4 };
    this.item3 = { x: 3, y: 4, rows: 3, cols: 5};
    this.item4 = { x: 3, y: 4, rows: 3, cols: 4 };
    this.item5 = { x: 3, y: 7, rows: 3, cols: 9 };
    this.item6 = { x: 3, y: 10, rows: 3, cols: 9 };
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
