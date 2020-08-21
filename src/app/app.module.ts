import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,MatButtonModule,MatDialogModule,MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MovieModule } from './modules/movie/movie.module';
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { AuthGuardService } from './auth-guard.service';

// import { LoginComponent } from './modules/authentication/login/login.component';
// import { RegisterComponent } from './modules/authentication/register/register.component'

const appRoutes = [
  // {
  //   path: '',
  //   redirectTo: 'movies',
  //   pathMatch: 'full',
  // }

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
]


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
  ],
  imports: [
    BrowserModule,
    MovieModule,
    AuthenticationModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
