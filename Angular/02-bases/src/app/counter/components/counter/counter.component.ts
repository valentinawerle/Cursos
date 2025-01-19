// a-component

import { Component } from "@angular/core";


@Component({
  standalone: false,
  selector: 'app-counter',
  template: `

    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="decreaseBy(-1)">-1</button>
    <button (click)="resetBy()">Reset</button>

  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  decreaseBy( value: number ):void {
    this.counter -= value;
  }

  resetBy() {
    this.counter = 10;
  }


}
