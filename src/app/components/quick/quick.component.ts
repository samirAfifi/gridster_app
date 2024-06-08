import { Component, Input, } from '@angular/core';

import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;

  constructor() { }

 
}
