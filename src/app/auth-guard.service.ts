import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {AuthenticateService } from '../app/modules/authentication/authenticate.service';
import { CanActivate } from '@angular/router/src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route: Router, private authService: AuthenticateService) { }

  canActivate (){
    if (!this.authService.isTokenExpired()){
       return true;
    }

    this.route.navigate(['/login']);
    return false;
  }
}
