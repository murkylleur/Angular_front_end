import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilmlistComponent } from './components/film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    FilmlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
