import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'movie-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input()
  movies: Array<Movie>;
  @Input()
  useWatchListApi: boolean;
  
  constructor(private movieService: MovieService,private snackBar: MatSnackBar){
  }

  ngOnInit() {
    
  }
  addToWatchList(movie){
    let message = `${movie.title}`+'Movie added to WatchList';
    this.movieService.addMoviesToWatchList(movie).subscribe((movie) => {
        this.snackBar.open(message,'',{
          duration: 1000
         });
       });
  }

  deleteFromWatchList(movie){
    let message = `${movie.title}` +'deleted from your watch list';

    // for (var i=0;i<this.movies.length;i++){
    //     if(this.movies[i].title === movie.title){
    //       this.movies.splice(i,1);
    //     }
    // }
    this.movieService.deleteFromWatchList(movie).subscribe((movie)=>{
      this.snackBar.open(message,'',{
        duration: 1000
       });
    });

    const index = this.movies.indexOf(movie);
    this.movies.splice(index,1);
  }

}
