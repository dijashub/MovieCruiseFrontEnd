import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'movie-tmdb-container',
  //templateUrl: './tmdb-container.component.html',
  template: `
  <movie-container [movies]="movies" ></movie-container>  
  `,
  styleUrls: ['./tmdb-container.component.css']
})
export class TmdbContainerComponent implements OnInit {
  movies: Array<Movie>;
  movieType: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.movies = [];
    this.route.data.subscribe((data) => {
      this.movieType = data.movieType;
    });

  }
  ngOnInit() {
    this.movieService.getMovies(this.movieType).subscribe((movies) => {
      this.movies.push(...movies);
    })
  }
}
