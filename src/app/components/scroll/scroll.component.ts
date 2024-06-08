import { Component,Input } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;


  
  slides: string [] = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here    
  getNext() {
      this.i = this.i===this.slides.length-1 ? this.i : this.i + 1;
  }

}
