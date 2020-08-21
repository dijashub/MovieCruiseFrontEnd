import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User;

  constructor(private authservice: AuthenticateService, private router: Router) { 

    this.newUser = new User();
  }

  ngOnInit() {
  }

  loginUser (){
    this.authservice.loginUser(this.newUser).subscribe(data=>{
      if (data['token']){
        this.authservice.setToken(data['token']);
        this.router.navigate(['/movies/popular']);
      }
    })
  }

}
