import { Component, OnInit, Input, Output, EventEmitter,Inject } from '@angular/core';
import { Movie } from '../../movie';

import { MatDialog ,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input()
  useWatchListApi: boolean;
  @Input()
  movie: Movie;

  @Output()
  addMovie = new EventEmitter();

  @Output()
  deleteMovie = new EventEmitter();

  


  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {}

  addToWatchList() {
    this.addMovie.emit(this.movie);
  }
  deleteFromWatchList(){
    this.deleteMovie.emit(this.movie);
  }
  updateFromWatchList(actionType){
    console.log("Movie is getting updated");
    
    let dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '400px',
      data: {obj: this.movie, actionType:actionType}
    });
    console.log("Open Dialogue");

    dialogRef.afterClosed().subscribe(result =>{
      console.log("Dialogue is closed");

    });

    //this.updateMovie.emit();

  }

}
