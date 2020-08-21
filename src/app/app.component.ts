import { Component } from '@angular/core';
import { AuthenticateService } from '../app/modules/authentication/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  //template: ``,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private auth:AuthenticateService, private route:Router) {

  }

  logout(){
    this.auth.deleteToken();
    this.route.navigate(['/login']);
  }
}
