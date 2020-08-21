import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthenticateService } from './authenticate.service';
import { Observable } from 'rxjs';

const testConfig = {

  addUser: {
    positive: {
      firstName: 'test',
      lastName: 'testlast',
      userId: 'testuser',
      password: 'testpass'
    }
  },
  loginuser: {
    positive: {
      userId: 'testuser',
      password: 'testpass'
    }
  }
}

describe('AuthenticateService', () => {

  let authService: AuthenticateService;

  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuthenticateService]
    })
    authService = TestBed.get(AuthenticateService);
  });



  // it('should be created', () => {
  //   const service: AuthenticateService = TestBed.get(AuthenticateService);
  //   expect(service).toBeTruthy();
  // });

  it('should create the auth service', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));


  it('Should Register user data', fakeAsync(() => {

    let data = testConfig.addUser.positive;
    inject([AuthenticateService, HttpTestingController], (backend: HttpTestingController) => {
      const mockReq = backend.expectOne(authService.springEndPoint);
      expect(mockReq.request.url).toEqual(authService.springEndPoint, "request Url shoudl match");
      expect(mockReq.request.method).toBe('POST', 'Should Handle Request Method type');
      mockReq.flush(data);
      backend.verify();
    });

    authService.registerUser(data).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res._body).toBe(data, 'Data Should be same');
    });
  }));

  it('Should Register user data', fakeAsync(() => {

    let userData = testConfig.loginuser.positive;

    inject([AuthenticateService, HttpTestingController], (backend: HttpTestingController) => {
      const mockReq = backend.expectOne(authService.springEndPoint);
      expect(mockReq.request.url).toEqual(authService.springEndPoint, "request Url shoudl match");
      expect(mockReq.request.method).toBe('POST', 'Should Handle Request Method type');
      mockReq.flush(userData);
      backend.verify();
    });

    authService.loginUser(userData).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res._body).toBe(userData, 'Data Should be same');
    });
  })
);

});


