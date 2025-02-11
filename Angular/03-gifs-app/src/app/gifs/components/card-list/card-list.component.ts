import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.intefaces';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-card-list',
    standalone: false,
    templateUrl: './card-list.component.html',
})

export class CardListComponent {
   
    @Input() 
    gifs: Gif[] = [];

}