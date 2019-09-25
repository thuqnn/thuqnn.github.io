import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies : Movie[];
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getMovies();
  }
  // selectedMovies: Movie;
  // onSelect(movies: Movie): void {
  //   this.selectedMovies = movies;
  // }
  getMovies() : void{
   this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.movieService.addMovie({ name } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }
  addDesription(description: string): void {
    description = description.trim();
    if (!description) { return; }
    this.movieService.addMovie({ description } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }
 
  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
}
