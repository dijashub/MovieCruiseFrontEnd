import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule,MatButtonModule,MatSnackBarModule,MatInputModule,MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';




import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { MovieService } from './movie.service';
import { ContainerComponent } from './components/container/container.component';
import { MovieRouterModule } from './movie-router.module';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { SearchComponent } from './components/search/search.component';
import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRouterModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
   ],
  declarations: [ThumbnailComponent, ContainerComponent, WatchlistComponent, TmdbContainerComponent, MovieDialogComponent, SearchComponent],
  exports: [
    MovieRouterModule,
    ThumbnailComponent,
    MovieDialogComponent,
  ],
  entryComponents: [MovieDialogComponent], 
  providers: [MovieService , {provide:HTTP_INTERCEPTORS, useClass: InterceptorService ,multi:true}]
})
export class MovieModule { }
