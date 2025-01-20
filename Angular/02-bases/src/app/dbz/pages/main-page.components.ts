import { Component } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    standalone: false,
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    saludo: string = "hola";
}