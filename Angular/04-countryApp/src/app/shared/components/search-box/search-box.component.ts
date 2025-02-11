import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string= '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string):void{
    this.onValue.emit( value );
  }

}
