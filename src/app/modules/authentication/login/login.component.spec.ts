import { Observable } from 'rxjs/Observable';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatIcon } from '@angular/material';

const testConfig = {
  userData: {
    firstName: 'test',
    lastName: 'testlast',
    userId: 'testuser',
    password: 'testpass'
  }
}

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticateService;
  let spyUser: any;
  let component: LoginComponent;
  let routes: Router;

  let location: Location;

  class AuthServiceStub {
    currentUser: any;
    constructor() {
    }
    login(credentials) {
      if (credentials.userId == testConfig.userData.userId) {
        return (Observable.of(credentials.userId));
      }
      return Observable.of(false);
    }
  }

  class dummy {

  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, BrowserAnimationsModule, RouterTestingModule.withRoutes([{ path: '', component: dummy }])],
      providers: [{ provide: AuthenticateService, userClass: AuthServiceStub }]

    }).compileComponents();
  }));

  beforeEach(() => {
    routes = TestBed.get(Router);
    fixture = TestBed.createComponent(LoginComponent);
    location = TestBed.get(location);
    authService = TestBed.get(authService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.debugElement.injector.get(AuthenticateService);
  });

  // it('should create the app component', async () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });


  // it('should contain two input boxes', () => {
  //   fixture.detectChanges();

  //   let userId = fixture.debugElement.query(By.css('.inputId'));

  //   let password = fixture.debugElement.query(By.css('.inputPass'));
  //   let registerButton = fixture.debugElement.query(By.css('.register-button'));
  //   let userButton = fixture.debugElement.query(By.css('.login-user'));

  //   let userInput = userId.nativeElement;
  //   let passInput = password.nativeElement;
  //   let registerInput = registerButton.nativeElement;
  //   let userButtonInput = userButton.nativeElement;


  //   expect(userId).toBeTruthy();
  //   expect(passInput).toBeTruthy();
  //   expect(registerInput).toBeTruthy();
  //   expect(userButtonInput).toBeTruthy();

  // });

  // it('should redirect to login is success', () => {

  //   let userId = fixture.debugElement.query(By.css('.inputId'));

  //   let password = fixture.debugElement.query(By.css('.inputPass'));
  //   let registerButton = fixture.debugElement.query(By.css('.register-button'));
  //   let userButton = fixture.debugElement.query(By.css('.login-user'));

  //   let userInput = userId.nativeElement;
  //   let passInput = password.nativeElement;
  //   let registerInput = registerButton.nativeElement;
  //   let userButtonInput = userButton.nativeElement;
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     userInput.value = 'testuser';
  //     passInput.value = 'testpass';
  //      userInput.dispatchEvent(new Event('input'));
  //      userInput.dispatchEvent(new Event('input'));
  //     userButtonInput.click();
  //   }).then(() => {
  //     expect(location.path()).toBe('');
  //   })
  // })
});
