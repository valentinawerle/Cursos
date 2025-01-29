import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl:'./list.component.html',
  styleUrl: './list.component.css',


  

})

export class ListComponent { 

  @Input()
  public characterList: Character[] = [{
     name: 'Trunk',
     power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    
    if (!id) return;
  
    this.onDelete.emit(id) ;
  }


  }




  
