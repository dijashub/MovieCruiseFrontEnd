(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Movie Cruiser</span>\n    <button mat-button [routerLink]=\"['/movies/popular']\"> Popular Movies</button>\n    <button mat-button [routerLink]=\"['/movies/top_rated']\">Top-Rated Movies</button>\n    <button mat-button [routerLink]=\"['/movies/watchlist']\">My WatchList</button>\n    <button mat-button [routerLink]=\"['/movies/search']\">Search</button>\n    <button mat-button (click)=\"logout()\">Logout</button>\n\n    </mat-toolbar>\n    \n    <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_movie_movie_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/movie/movie.module */ "./src/app/modules/movie/movie.module.ts");
/* harmony import */ var _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { LoginComponent } from './modules/authentication/login/login.component';
// import { RegisterComponent } from './modules/authentication/register/register.component'
var appRoutes = [
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
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_movie_movie_module__WEBPACK_IMPORTED_MODULE_7__["MovieModule"],
                _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_modules_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/modules/authentication/authenticate.service */ "./src/app/modules/authentication/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.isTokenExpired()) {
            return true;
        }
        this.route.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_modules_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authenticate-router.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/authentication/authenticate-router.module.ts ***!
  \**********************************************************************/
/*! exports provided: AuthenticateRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateRouterModule", function() { return AuthenticateRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [{
        path: '',
        children: [{
                path: '',
                redirectTo: '/login',
                pathMatch: 'full',
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }
        ]
    }];
var AuthenticateRouterModule = /** @class */ (function () {
    function AuthenticateRouterModule() {
    }
    AuthenticateRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(authRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], AuthenticateRouterModule);
    return AuthenticateRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authenticate.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/authentication/authenticate.service.ts ***!
  \****************************************************************/
/*! exports provided: TOKEN_NAME, AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_NAME = "jwt_token";
var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(httpClient) {
        this.httpClient = httpClient;
        this.springEndPoint = "http://localhost:8089/api/v1/userauthservice";
    }
    AuthenticateService.prototype.registerUser = function (newUser) {
        var url = this.springEndPoint + "/register";
        return this.httpClient.post(url, newUser, { responseType: "text" });
    };
    AuthenticateService.prototype.loginUser = function (newUser) {
        var url = this.springEndPoint + "/login";
        return this.httpClient.post(url, newUser);
    };
    AuthenticateService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    AuthenticateService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthenticateService.prototype.deleteToken = function () {
        return localStorage.removeItem(TOKEN_NAME);
    };
    AuthenticateService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthenticateService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthenticateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _authenticate_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate-router.module */ "./src/app/modules/authentication/authenticate-router.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/modules/authentication/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _authenticate_router_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticateRouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            providers: [
                _authenticate_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticateService"]
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-block {\n    margin:auto;\n    width:50%;\n    padding: 10px;\n    padding-top: 50px;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    flex-flow: column nowrap;\n    align-items: center;\n}\n\n.login-input-full-width {\n    width: 100%;\n}\n\nh3 {\n    text-align: center\n}"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" #loginform=\"ngForm\" (ngSubmit)=\"loginUser()\" [style.fontsize.px]=\"20\">\n\n  <div class=\"login-block\">\n    <div class=\"row\">\n      <h3>Login User</h3>\n    </div>\n    <div class=\"row\">\n\n      <mat-form-field class=\"login-input-full-width\">\n        <input id=\"userId\" matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" \n        name=\"userId\" required minlength=\"10\" #userId=\"ngModel\">\n      </mat-form-field>\n\n      <mat-form-field class=\"login-input-full-width\">\n        <input id=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\" required minlength=\"10\"\n          maxlength=\"5\" #userId=\"ngModel\">\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <button class=\"login-user\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"loginUser()\">Login</button>\n      <button class=\"register-button\" mat-raised-button color=\"primary\" [routerLink]=\"['/register']\">Register</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user */ "./src/app/modules/user.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/modules/authentication/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.authservice.loginUser(this.newUser).subscribe(function (data) {
            if (data['token']) {
                _this.authservice.setToken(data['token']);
                _this.router.navigate(['/movies/popular']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-block {\n    margin:auto;\n    width:50%;\n    padding: 10px;\n    padding-top: 50px;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    flex-flow: column nowrap;\n    align-items: center;\n}\n\n.register-input-full-width {\n    width: 100%;\n}\n\nh3{\n    text-align: center\n}"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" #registerform=\"ngForm\" (ngSubmit)=\"registerUser()\" [style.fontsize.px]=\"20\">\n\n  <div class=\"register-block\">\n    <div class=\"row\">\n      <h3>Register User</h3>\n    </div>\n    <div class=\"row\">\n      <mat-form-field class=\"register-input-full-width\">\n        <input id=\"firstName\" matInput placeholder=\"First Name\" [(ngModel)]=\"newUser.firstName\" name=\"firstName\">\n      </mat-form-field>\n\n      <mat-form-field class=\"register-input-full-width\">\n        <input id=\"lastName\" matInput placeholder=\"Last Name\" [(ngModel)]=\"newUser.lastName\" name=\"lastName\">\n      </mat-form-field>\n\n      <mat-form-field class=\"register-input-full-width\">\n        <input id=\"userId\" matInput placeholder=\"User Id\" [(ngModel)]=\"newUser.userId\" name=\"userId\" required minlength=\"10\" #userId=\"ngModel\">\n      </mat-form-field>\n\n      <mat-form-field class=\"register-input-full-width\">\n        <input id=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\" required minlength=\"10\" maxlength=\"5\"\n          #userId=\"ngModel\">\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <button class=\"register-user\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"registerUser()\">Register user</button>\n      <button mat-raised-button color=\"primary\" (click)=\"resetInput()\">Clear</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user */ "./src/app/modules/user.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/modules/authentication/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.authService.registerUser(this.newUser).subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/container/container.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/components/container/container.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movieContainer {\n    margin: auto;\n    width : 90vw;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    height: 100vh;\n    overflow-x: auto\n    }"

/***/ }),

/***/ "./src/app/modules/movie/components/container/container.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movie/components/container/container.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movieContainer\">\n  <movie-thumbnail *ngFor=\"let movie of movies\" [movie]=\"movie\" [useWatchListApi]=\"useWatchListApi\" \n  (addMovie)='addToWatchList($event)' (deleteMovie)='deleteFromWatchList($event)'>\n  </movie-thumbnail>\n</div>"

/***/ }),

/***/ "./src/app/modules/movie/components/container/container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/components/container/container.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(movieService, snackBar) {
        this.movieService = movieService;
        this.snackBar = snackBar;
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent.prototype.addToWatchList = function (movie) {
        var _this = this;
        var message = "" + movie.title + 'Movie added to WatchList';
        this.movieService.addMoviesToWatchList(movie).subscribe(function (movie) {
            _this.snackBar.open(message, '', {
                duration: 1000
            });
        });
    };
    ContainerComponent.prototype.deleteFromWatchList = function (movie) {
        var _this = this;
        var message = "" + movie.title + 'deleted from your watch list';
        // for (var i=0;i<this.movies.length;i++){
        //     if(this.movies[i].title === movie.title){
        //       this.movies.splice(i,1);
        //     }
        // }
        this.movieService.deleteFromWatchList(movie).subscribe(function (movie) {
            _this.snackBar.open(message, '', {
                duration: 1000
            });
        });
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContainerComponent.prototype, "movies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ContainerComponent.prototype, "useWatchListApi", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/modules/movie/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/modules/movie/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/movie/components/movie-dialog/movie-dialog.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/movie/components/movie-dialog/movie-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Update the comments for the movie {{data.obj.title}}</span>\n<h4 mat-dialog-title>{{data.obj.title}}</h4>\n\n<div mat-dialog-content>\n  <p>comments</p>\n  <mat-form-field>\n    <textarea matInput [(ngModel)] = \"comments\"></textarea>\n\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n<button mat-button color=warn (click)=\"onNoClick()\">Cancel</button>\n<button mat-button colpr=warn (click)=\"updateComments()\">Update</button>\n</div>"

/***/ }),

/***/ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MovieDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDialogComponent", function() { return MovieDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MovieDialogComponent = /** @class */ (function () {
    function MovieDialogComponent(snackBar, dialogRef, data, movieService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.movieService = movieService;
        this.comments = data.obj.movieComments;
        this.movie = data.obj;
        this.actionType = data.actionType;
    }
    MovieDialogComponent.prototype.ngOnInit = function () {
    };
    MovieDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MovieDialogComponent.prototype.updateComments = function () {
        var _this = this;
        console.log("inside update comments");
        console.log(this.comments);
        this.movie.comments = this.comments;
        console.log(this.movie.comments);
        this.dialogRef.close();
        this.movieService.updateComments(this.movie).subscribe(function (movie) {
            _this.snackBar.open("Movie Updated to WatchList successfully", "", {
                duration: 2000,
            });
        });
    };
    MovieDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-movie-dialog',
            template: __webpack_require__(/*! ./movie-dialog.component.html */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.html"),
            styles: [__webpack_require__(/*! ./movie-dialog.component.css */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], MovieDialogComponent);
    return MovieDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/search/search.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/movie/components/search/search.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/movie/components/search/search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/movie/components/search/search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <form class=\"example-form\">\n      <mat-form-field>\n        <input matInput type=\"text\" #box (keyup.enter)=\"onEnter(box.value)\">\n        <mat-placeholder>Search</mat-placeholder>\n      </mat-form-field>\n  </form>\n</div>\n<movie-container [movies]=\"movies\"></movie-container>\n"

/***/ }),

/***/ "./src/app/modules/movie/components/search/search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/movie/components/search/search.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(movieService) {
        this.movieService = movieService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onEnter = function (searchKey) {
        var _this = this;
        this.movieService.searchMovies(searchKey).subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/movie/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/modules/movie/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/thumbnail/thumbnail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/components/thumbnail/thumbnail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-thumbnail{\n    width: 20vw;\n}\n\n.movie-image{\n    height: 25vw;\n    width: 24vw;\n}\n\n.movie-overview {\n    height: 5vw;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\n.movie-overview::-webkit-scrollbar{\n width: 0.15vw;\n background: grey;   \n}\n\n.movie-actions {\n    text-align: right;  \n}"

/***/ }),

/***/ "./src/app/modules/movie/components/thumbnail/thumbnail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movie/components/thumbnail/thumbnail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"movie-thumbnail\">\n    <mat-card-header>\n        <mat-card-title>{{movie?.title}}</mat-card-title>\n        <mat-card-subtitle>{{movie?.release_date}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <img class=\"movie-image\" mat-card-image [src]=\"movie?.poster_path\" [alt]=\"movie?.name\">\n    <mat-card-content class=\"movie-overview\">\n        {{movie?.overview}}\n    </mat-card-content>\n    <mat-card-actions class=\"movie-actions\">\n        <button *ngIf=\"!useWatchListApi\" mat-button (click)=\"addToWatchList()\" color=\"primary\">Add To WatchList</button>\n        <button *ngIf=\"useWatchListApi\" mat-button (click)=\"deleteFromWatchList()\" color=\"primary\">Delete</button>\n        <button *ngIf=\"useWatchListApi\" mat-button (click)=\"updateFromWatchList('update')\" color=\"primary\" align=\"end\">Update</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/movie/components/thumbnail/thumbnail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/components/thumbnail/thumbnail.component.ts ***!
  \***************************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-dialog/movie-dialog.component */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(dialog) {
        this.dialog = dialog;
        this.addMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ThumbnailComponent.prototype.ngOnInit = function () { };
    ThumbnailComponent.prototype.addToWatchList = function () {
        this.addMovie.emit(this.movie);
    };
    ThumbnailComponent.prototype.deleteFromWatchList = function () {
        this.deleteMovie.emit(this.movie);
    };
    ThumbnailComponent.prototype.updateFromWatchList = function (actionType) {
        console.log("Movie is getting updated");
        var dialogRef = this.dialog.open(_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MovieDialogComponent"], {
            width: '400px',
            data: { obj: this.movie, actionType: actionType }
        });
        console.log("Open Dialogue");
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialogue is closed");
        });
        //this.updateMovie.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ThumbnailComponent.prototype, "useWatchListApi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "movie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "addMovie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "deleteMovie", void 0);
    ThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html */ "./src/app/modules/movie/components/thumbnail/thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/modules/movie/components/thumbnail/thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/movie/components/tmdb-container/tmdb-container.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TmdbContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbContainerComponent", function() { return TmdbContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmdbContainerComponent = /** @class */ (function () {
    function TmdbContainerComponent(movieService, route) {
        var _this = this;
        this.movieService = movieService;
        this.route = route;
        this.movies = [];
        this.route.data.subscribe(function (data) {
            _this.movieType = data.movieType;
        });
    }
    TmdbContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies(this.movieType).subscribe(function (movies) {
            (_a = _this.movies).push.apply(_a, movies);
            var _a;
        });
    };
    TmdbContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-tmdb-container',
            //templateUrl: './tmdb-container.component.html',
            template: "\n  <movie-container [movies]=\"movies\" ></movie-container>  \n  ",
            styles: [__webpack_require__(/*! ./tmdb-container.component.css */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TmdbContainerComponent);
    return TmdbContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/components/watchlist/watchlist.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/components/watchlist/watchlist.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/movie/components/watchlist/watchlist.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/movie/components/watchlist/watchlist.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<movie-container [movies]=\"movies\" [useWatchListApi]=\"useWatchListApi\"></movie-container>\n"

/***/ }),

/***/ "./src/app/modules/movie/components/watchlist/watchlist.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/movie/components/watchlist/watchlist.component.ts ***!
  \***************************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie.service */ "./src/app/modules/movie/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatchlistComponent = /** @class */ (function () {
    function WatchlistComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
        this.useWatchListApi = true;
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getWatchListedMovies().subscribe(function (movies) {
            (_a = _this.movies).push.apply(_a, movies);
            var _a;
        });
    };
    WatchlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-watchlist',
            template: __webpack_require__(/*! ./watchlist.component.html */ "./src/app/modules/movie/components/watchlist/watchlist.component.html"),
            styles: [__webpack_require__(/*! ./watchlist.component.css */ "./src/app/modules/movie/components/watchlist/watchlist.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/movie/interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authenticate.service */ "./src/app/modules/authentication/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterceptorService = /** @class */ (function () {
    function InterceptorService(authService) {
        this.authService = authService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.authService.getToken()
            }
        });
        return next.handle(request);
    };
    InterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie-router.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/movie/movie-router.module.ts ***!
  \******************************************************/
/*! exports provided: MovieRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRouterModule", function() { return MovieRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "./src/app/modules/movie/components/watchlist/watchlist.component.ts");
/* harmony import */ var _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tmdb-container/tmdb-container.component */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/movie/components/search/search.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var movieRoutes = [
    {
        path: 'movies',
        children: [
            {
                path: "",
                redirectTo: '/movies/popular',
                pathMatch: 'full',
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
            },
            {
                path: 'popular',
                component: _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_3__["TmdbContainerComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
                data: {
                    movieType: 'popular'
                }
            },
            {
                path: 'top_rated',
                component: _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_3__["TmdbContainerComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
                data: {
                    movieType: 'top_rated'
                }
            },
            {
                path: 'watchlist',
                component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__["WatchlistComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
                data: {
                    movieType: 'watchList'
                }
            },
            {
                path: 'search',
                component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
            }
        ]
    }
];
var MovieRouterModule = /** @class */ (function () {
    function MovieRouterModule() {
    }
    MovieRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(movieRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], MovieRouterModule);
    return MovieRouterModule;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/movie/movie.module.ts ***!
  \***********************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/modules/movie/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie.service */ "./src/app/modules/movie/movie.service.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/modules/movie/components/container/container.component.ts");
/* harmony import */ var _movie_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-router.module */ "./src/app/modules/movie/movie-router.module.ts");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "./src/app/modules/movie/components/watchlist/watchlist.component.ts");
/* harmony import */ var _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tmdb-container/tmdb-container.component */ "./src/app/modules/movie/components/tmdb-container/tmdb-container.component.ts");
/* harmony import */ var _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie-dialog/movie-dialog.component */ "./src/app/modules/movie/components/movie-dialog/movie-dialog.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/movie/components/search/search.component.ts");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/modules/movie/interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MovieModule = /** @class */ (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _movie_router_module__WEBPACK_IMPORTED_MODULE_8__["MovieRouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            declarations: [_components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__["ThumbnailComponent"], _components_container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"], _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_9__["WatchlistComponent"], _components_tmdb_container_tmdb_container_component__WEBPACK_IMPORTED_MODULE_10__["TmdbContainerComponent"], _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MovieDialogComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"]],
            exports: [
                _movie_router_module__WEBPACK_IMPORTED_MODULE_8__["MovieRouterModule"],
                _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_5__["ThumbnailComponent"],
                _components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MovieDialogComponent"],
            ],
            entryComponents: [_components_movie_dialog_movie_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MovieDialogComponent"]],
            providers: [_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_13__["InterceptorService"], multi: true }]
        })
    ], MovieModule);
    return MovieModule;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/movie/movie.service.ts ***!
  \************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiKey = 'api_key=c6e744d3142ba49dac3fafef987b7175';
        this.movieDbEndPoint = 'https://api.themoviedb.org/3/movie';
        this.imagePrefix = 'https://image.tmdb.org/t/p/w500';
        // this.watchListEndPoint = 'http://localhost:3000/watchList'
        this.watchListEndPoint = 'http://localhost:8082/api/v1/movieservice/movie';
        this.search = 'https://api.themoviedb.org/3/search/movie?';
    }
    MovieService.prototype.getMovies = function (type, page) {
        if (page === void 0) { page = 1; }
        var endpoint = this.movieDbEndPoint + "/" + type + "?" + this.apiKey + "&page=" + page;
        return this.http.get(endpoint).pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(this.pickMovieResults), Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(this.tranformPosterPath.bind(this)));
    };
    MovieService.prototype.tranformPosterPath = function (movies) {
        var _this = this;
        return movies.map(function (movie) {
            movie.poster_path = "" + _this.imagePrefix + movie.poster_path;
            return movie;
        });
    };
    MovieService.prototype.addMoviesToWatchList = function (movie) {
        return this.http.post(this.watchListEndPoint, movie);
    };
    MovieService.prototype.getWatchListedMovies = function () {
        return this.http.get(this.watchListEndPoint);
    };
    MovieService.prototype.pickMovieResults = function (response) {
        return response['results'];
    };
    MovieService.prototype.deleteFromWatchList = function (movie) {
        var url = this.watchListEndPoint + "/" + movie.id;
        return this.http.delete(url, { responseType: 'text' });
    };
    MovieService.prototype.updateComments = function (movie) {
        console.log("" + movie.comments);
        var url = this.watchListEndPoint + "/" + movie.id;
        return this.http.put(url, movie);
    };
    MovieService.prototype.searchMovies = function (searchKey) {
        if (searchKey.length > 0) {
            var url = "" + this.search + this.apiKey + "&language=en-US&page=1&include_adult=false&query=" + searchKey;
            console.log(url);
            return this.http.get(url).pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(this.pickMovieResults), Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(this.tranformPosterPath.bind(this)));
        }
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/modules/user.ts":
/*!*********************************!*\
  !*** ./src/app/modules/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/Downloads/movieCruiserApp-docker-master/MovieCruiserFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map