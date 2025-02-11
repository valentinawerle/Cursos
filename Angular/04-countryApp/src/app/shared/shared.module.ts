import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
