import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasBuscadorComponent } from './peliculas-buscador/peliculas-buscador.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Modulo de animaciones
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';//Modulo de iconos font awesome
import { faFilm } from '@fortawesome/free-solid-svg-icons';//Modulo de iconos Fafilm
import { faFish } from '@fortawesome/free-solid-svg-icons';//Modulo de iconos Fafilm
import {MatButtonModule} from '@angular/material/button';//Modulo de botones


@NgModule({
  declarations: [
    AppComponent,
    PeliculasBuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {//Importacion de los iconos Fa y Fish
    library.addIcons(faFilm,faFish);
 }
}