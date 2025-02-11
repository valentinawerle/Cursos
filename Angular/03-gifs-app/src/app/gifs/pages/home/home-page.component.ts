import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.intefaces';

@Component({
  selector: 'gifs-home-pages',
  standalone: false,
  templateUrl:'./home-page.component.html',
})
export class HomePageComponent {
  
  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }


 }
