import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
