import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = '462a1e5c4c5b6679d1af55fd95e64538';

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(url);
  }

}
