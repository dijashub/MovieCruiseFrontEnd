import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule, MatIcon, MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';


import { AuthenticateRouterModule } from './authenticate-router.module'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthenticateService }  from './authenticate.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticateRouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ],
  declarations: [LoginComponent, RegisterComponent],
  providers : [
    AuthenticateService
  ],
  exports : [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
