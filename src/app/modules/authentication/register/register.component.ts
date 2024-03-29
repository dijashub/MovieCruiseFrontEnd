import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User;

  constructor(private authService:AuthenticateService, private router:Router) { 

    this.newUser = new User();
  }

  ngOnInit() {
  }

  registerUser (){
    this.authService.registerUser(this.newUser).subscribe((data)=>{
      this.router.navigate(['/login']);
    })
  }
}
