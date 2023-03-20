import { Component } from '@angular/core';
import { MovieService } from '../Peliculas.service';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Modulo de animaciones

@Component({
  selector: 'app-peliculas-buscador',
  templateUrl: './peliculas-buscador.component.html',
  styleUrls: ['./peliculas-buscador.component.css']
})
export class PeliculasBuscadorComponent {
  
  searchQuery: any;
  movies: any;

  //Aqui se define el buscador que devuelve datos de la API
  constructor(private movieService: MovieService) { }

  searchMovies() {
    this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.movies = data.results.map((movie: { id: any; title: any; overview: any; poster_path: any; release_date: any; }) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        release_date: movie.release_date,
        loaded:false
        
      }));
    });
  }
  onImageLoad(movie: any) {
    movie.loaded = true; 
  }
}

