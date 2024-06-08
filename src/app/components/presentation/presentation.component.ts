import { Component,Input } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;



  constructor() { }

  ngOnInit(): void {
  }

}
