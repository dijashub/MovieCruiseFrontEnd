import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import {Observable} from 'rxjs/Rx';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  apiKey: string;
  movieDbEndPoint: string;
  imagePrefix: string;
  watchListEndPoint: string;
  search: string;
  constructor(private http: HttpClient) {
    this.apiKey = 'api_key=c6e744d3142ba49dac3fafef987b7175';
    this.movieDbEndPoint = 'https://api.themoviedb.org/3/movie';
    this.imagePrefix = 'https://image.tmdb.org/t/p/w500'
   // this.watchListEndPoint = 'http://localhost:3000/watchList'
   this.watchListEndPoint = 'http://localhost:8082/api/v1/movieservice/movie'
   this.search= 'https://api.themoviedb.org/3/search/movie?'

  }


  getMovies(type: string, page: number = 1): Observable<Array<Movie>> {
    const endpoint = `${this.movieDbEndPoint}/${type}?${this.apiKey}&page=${page}`;
    return this.http.get(endpoint).pipe(map(this.pickMovieResults),map(this.tranformPosterPath.bind(this))
    );
  }

  tranformPosterPath(movies): Array<Movie> {
    return movies.map(movie => {
      movie.poster_path = `${this.imagePrefix}${movie.poster_path}`;
      return movie;
    });
  }
  addMoviesToWatchList(movie) {
    return this.http.post(this.watchListEndPoint, movie);
  }

  getWatchListedMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.watchListEndPoint);
  }
  pickMovieResults(response) {
    return response['results'];
  }
  deleteFromWatchList(movie:Movie){
    const url = `${this.watchListEndPoint}/${movie.id}`;
    return this.http.delete(url,{responseType:'text'});
  }
  updateComments(movie){
    console.log(`${movie.comments}`);
    const url = `${this.watchListEndPoint}/${movie.id}`;
    return this.http.put(url,movie);
  }
  searchMovies(searchKey: string):Observable<Array<Movie>>{
    if(searchKey.length>0){
      const url = `${this.search}${this.apiKey}&language=en-US&page=1&include_adult=false&query=${searchKey}`;
      console.log(url);
      return this.http.get(url).pipe( map(this.pickMovieResults),map(this.tranformPosterPath.bind(this)));

    }
  }
}
