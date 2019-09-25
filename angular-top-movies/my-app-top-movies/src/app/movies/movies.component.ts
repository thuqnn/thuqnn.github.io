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
  selectedMovies: Movie;
  onSelect(movies: Movie): void {
    this.selectedMovies = movies;
  }
  getMovies() : void{
   this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
}
