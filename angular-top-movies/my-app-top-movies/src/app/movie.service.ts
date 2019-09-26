import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie} from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies'; // URL to web api
  constructor(
    private http: HttpClient
    ){ }
  // getMovies(): Observable<Movie[]> {
  //   return of(MOVIES);
  // }
  /** GET movies from the server */
  getMovies (): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesUrl)
}
  getMovie(id: number): Observable<Movie>{
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url);
  }
  updateMovie (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions)
  }
  deleteMovie (movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete<Movie>(url, this.httpOptions)
  }
  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`)
  }
}
