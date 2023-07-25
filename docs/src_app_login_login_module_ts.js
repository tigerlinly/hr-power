"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_login_login_module_ts"],{

/***/ 50395:
/*!*********************************************!*\
  !*** ./src/app/core/storage/web.storage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebStorage": () => (/* binding */ WebStorage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);




let WebStorage = class WebStorage {
    constructor(router) {
        this.router = router;
        this.Loginvalue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.Createaccountvalue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.Forgotpasswordvalue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
    /**
     * Create account Function call from Registerpage
     * @param uservalue from user form value
     */
    Createaccount(uservalue) {
        let Rawdata = localStorage.getItem('Loginusers');
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email === uservalue.email);
        if (Eresult) {
            this.Createaccountvalue.next('This email are already exist');
        }
        else {
            Pdata.push(uservalue);
            const jsonData = JSON.stringify(Pdata);
            localStorage.setItem('Loginusers', jsonData);
            this.Login(uservalue);
        }
    }
    /**
     * Login Functionality call from Login
     * @param uservalue from login page
     */
    Login(uservalue) {
        let returndata = { message: '', status: '' };
        let data = localStorage.getItem('Loginusers');
        let Pdata = JSON.parse(data);
        const Eresult = Pdata.find(({ email }) => email === uservalue.email);
        if (Eresult) {
            if (Eresult.password === uservalue.password) {
                this.Createtoken(uservalue);
                this.Loginvalue.next('Login success');
                this.router.navigate(['/layout/dashboard/admin']);
                this.Loginvalue.next(0);
            }
            else {
                returndata.message = 'Incorrect password';
                returndata.status = 'password';
                this.Loginvalue.next(returndata);
            }
        }
        else {
            returndata.message = 'Email is  not valid';
            returndata.status = 'email';
            this.Loginvalue.next(returndata);
        }
    }
    /**
     * Create Token function for authendication
     * @param uservalue recived from login function
     */
    Createtoken(uservalue) {
        var result = 'ABCDEFGHI' + uservalue.email + 'ghijklmnopqrs' + 'z01234567';
        localStorage.setItem('LoginData', result);
    }
    /**
     * Two Storage are used
     */
    Deleteuser() {
        localStorage.removeItem('Loginusers');
        localStorage.removeItem('LoginData');
    }
    /**
     * called from Login page init statement
     */
    Checkuser() {
        let users = localStorage.getItem('Loginusers');
        if (users === null) {
            let password = [
                {
                    email: 'admin@dreamguys.in',
                    password: '123456',
                },
            ];
            const jsonData = JSON.stringify(password);
            localStorage.setItem('Loginusers', jsonData);
        }
    }
    /**
     * Forgot password function
     * @param uservalue email object recived from Forgot password
     */
    Forgotpassword(uservalue) {
        let Rawdata = localStorage.getItem('Loginusers');
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email === uservalue.email);
        if (Eresult) {
            this.Forgotpasswordvalue.next(Eresult);
        }
        else {
            this.Forgotpasswordvalue.next('Email Not Valid');
        }
    }
};
WebStorage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
WebStorage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], WebStorage);



/***/ }),

/***/ 16963:
/*!**************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotComponent": () => (/* binding */ ForgotComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.component.html?ngResource */ 14413);
/* harmony import */ var _forgot_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.component.css?ngResource */ 19230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/storage/web.storage */ 50395);






let ForgotComponent = class ForgotComponent {
    constructor(storage) {
        this.storage = storage;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
        });
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() { }
    submit() {
        this.CustomControler = 0;
        this.storage.Forgotpassword(this.form.value);
    }
};
ForgotComponent.ctorParameters = () => [
    { type: src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__.WebStorage }
];
ForgotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forgot',
        template: _forgot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotComponent);



/***/ }),

/***/ 63242:
/*!**********************************************************!*\
  !*** ./src/app/login/lockscreen/lockscreen.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockscreenComponent": () => (/* binding */ LockscreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lockscreen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lockscreen.component.html?ngResource */ 80950);
/* harmony import */ var _lockscreen_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lockscreen.component.css?ngResource */ 68092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LockscreenComponent = class LockscreenComponent {
    constructor() { }
    ngOnInit() {
    }
};
LockscreenComponent.ctorParameters = () => [];
LockscreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lockscreen',
        template: _lockscreen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lockscreen_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LockscreenComponent);



/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 18223);
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot/forgot.component */ 16963);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 44376);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp/otp.component */ 87139);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 63242);








const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__.ForgotComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent },
    { path: 'otp', component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_3__.OtpComponent },
    { path: 'lockscreen', component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__.LockscreenComponent },
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], LoginRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 18223);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot/forgot.component */ 16963);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 44376);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp/otp.component */ 87139);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 63242);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);










let LoginModule = class LoginModule {
};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__.ForgotComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_4__.OtpComponent, _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_5__.LockscreenComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ]
    })
], LoginModule);



/***/ }),

/***/ 18223:
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 92096);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css?ngResource */ 90232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/storage/web.storage */ 50395);






let LoginComponent = class LoginComponent {
    constructor(storage) {
        this.storage = storage;
        this.Toggledata = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("admin@dreamguys.in", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.subscription = this.storage.Loginvalue.subscribe((data) => {
            if (data != 0) {
                this.CustomControler = data;
            }
        });
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.storage.Checkuser();
    }
    submit() {
        this.storage.Login(this.form.value);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    iconLogle() {
        this.Toggledata = !this.Toggledata;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__.WebStorage }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 87139:
/*!********************************************!*\
  !*** ./src/app/login/otp/otp.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.component.html?ngResource */ 11554);
/* harmony import */ var _otp_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.component.css?ngResource */ 663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OtpComponent = class OtpComponent {
    constructor() { }
    ngOnInit() {
    }
};
OtpComponent.ctorParameters = () => [];
OtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-otp',
        template: _otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpComponent);



/***/ }),

/***/ 44376:
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 65985);
/* harmony import */ var _register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css?ngResource */ 32426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/storage/web.storage */ 50395);






let RegisterComponent = class RegisterComponent {
    constructor(storage) {
        this.storage = storage;
        this.isvalidconfirmpassword = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.subscription = this.storage.Createaccountvalue.subscribe((data) => {
            this.CustomControler = data;
        });
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() { }
    submit() {
        if (this.form.value.password != this.form.value.confirmPassword) {
            this.isvalidconfirmpassword = true;
        }
        else {
            this.isvalidconfirmpassword = false;
            this.storage.Createaccount(this.form.value);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_core_storage_web_storage__WEBPACK_IMPORTED_MODULE_2__.WebStorage }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 19230:
/*!**************************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 68092:
/*!**********************************************************************!*\
  !*** ./src/app/login/lockscreen/lockscreen.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 90232:
/*!************************************************************!*\
  !*** ./src/app/login/login/login.component.css?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 663:
/*!********************************************************!*\
  !*** ./src/app/login/otp/otp.component.css?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 32426:
/*!******************************************************************!*\
  !*** ./src/app/login/register/register.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 14413:
/*!***************************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"account-content\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"account-box\">\r\n            <div class=\"account-wrapper\">\r\n                <h3 class=\"account-title\">Forgot Password?</h3>\r\n                <p class=\"account-subtitle\">Enter your email to get a password reset link</p>\r\n\r\n                <!-- Account Form -->\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n                    <div class=\"form-group\">\r\n                        <label>Email Address</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"email\" id=\"email\"/>\r\n                        <div *ngIf=\"f['email'].touched && f['email'].invalid\" class=\"text-danger\">\r\n                            <div *ngIf=\"f['email'].errors && f['email'].errors['required']\">Email is required.</div>\r\n                            <div *ngIf=\"f['email'].errors && f['email'].errors['email']\">Please, enter valid email address.</div>\r\n                        </div>\r\n                        <div *ngIf='CustomControler !=0' class=\"text-danger\">\r\n                            {{CustomControler}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group text-center\">\r\n                        <button class=\"btn btn-primary account-btn\" [disabled]=\"form.invalid\" type=\"submit\">Reset Password</button>\r\n                    </div>\r\n                    <div class=\"account-footer\">\r\n                        <p>Remember your password? <a routerLink=\"/login\">Login</a></p>\r\n                    </div>\r\n                </form>\r\n                <!-- /Account Form -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 80950:
/*!***********************************************************************!*\
  !*** ./src/app/login/lockscreen/lockscreen.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n\r\n                    <!-- Lock User Img -->\r\n                    <div class=\"lock-user\">\r\n                        <img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\" class=\"rounded-circle\">\r\n                        <h4>John Doe</h4>\r\n                    </div>\r\n                    <!-- /Lock User Img -->\r\n\r\n                    <!-- Account Form -->\r\n                    <form action=\"dashboard\">\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input class=\"form-control\" type=\"password\">\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <a class=\"btn btn-primary account-btn\" routerLink=\"/layout/dashboard/admin\">Enter</a>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Sign in as a different user? <a routerLink=\"/login\">Login</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ }),

/***/ 92096:
/*!*************************************************************!*\
  !*** ./src/app/login/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"account-content\">\r\n    <div class=\"container\">\r\n    \r\n        <div class=\"account-box\">\r\n            <div class=\"account-wrapper\">\r\n                <h3 class=\"account-title\">Login</h3>\r\n                <p class=\"account-subtitle\">Access to our dashboard</p>\r\n                \r\n                <!-- Account Form -->\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n                    <div class=\"form-group\">\r\n                        <label>Email Address</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"email\" id=\"email\" [ngClass]=\"{'is-invalid': f['email'].touched && f['email'].invalid}\"/>\r\n                        <div class=\"text-danger\" *ngIf=\"CustomControler ?.status === 'email'\">\r\n                            {{ CustomControler.message }}\r\n                        </div>\r\n                        <div *ngIf=\"f['email'].touched && f['email'].invalid\" class=\"text-danger\">\r\n                            <div *ngIf=\"f['email'].errors && f['email'].errors['required']\">Email is required.</div>\r\n                            <div *ngIf=\"f['email'].errors && f['email'].errors['email']\">\r\n                                Please, enter valid email address.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <label>Password</label>\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                                <a class=\"text-muted\" routerLink=\"/login/forgot\">\r\n                                    Forgot password?\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"position-relative\">\r\n                            <input class=\"form-control\" [type]=\"Toggledata ? 'password' : 'text'\" formControlName=\"password\" id=\"password\" [ngClass]=\"{'is-invalid': f['password'].touched && f['password'].invalid}\"/>\r\n                            <span [ngClass]=\"Toggledata == true ? 'fa toggle-password fa-eye' : 'fa toggle-password fa-eye-slash'\" (click)=\"iconLogle()\"></span>\r\n                        </div>\r\n                        <div *ngIf=\"f['password'].touched && f['password'].invalid\" class=\"text-danger\">\r\n                            <div *ngIf=\"f['password'].errors && f['password'].errors['required']\">\r\n                            Password is required.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-danger\" *ngIf=\"CustomControler ?.status === 'password'\">{{ CustomControler.message }}</div>\r\n                    </div>\r\n                    <div class=\"form-group text-center\">\r\n                        <button class=\"btn btn-primary account-btn\" [disabled]=\"form.invalid\" type=\"submit\">Login</button>\r\n                    </div>\r\n                    <div class=\"account-footer\">\r\n                        <p>Don't have an account yet? <a routerLink=\"/login/register\">Register</a></p>\r\n                    </div>\r\n                </form>\r\n                <!-- /Account Form -->\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 11554:
/*!*********************************************************!*\
  !*** ./src/app/login/otp/otp.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n                    <h3 class=\"account-title\">OTP</h3>\r\n                    <p class=\"account-subtitle\">Verification your account</p>\r\n\r\n                    <!-- Account Form -->\r\n                    <form action=\"dashboard\">\r\n                        <div class=\"otp-wrap\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                            <input type=\"text\" placeholder=\"0\" maxlength=\"1\" class=\"otp-input\">\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <a class=\"btn btn-primary account-btn\" routerLink=\"/layout/dashboard/admin\">Enter</a>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Not yet received? <a >Resend OTP</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ }),

/***/ 65985:
/*!*******************************************************************!*\
  !*** ./src/app/login/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"main-wrapper\">\r\n    <div class=\"account-content\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"account-box\">\r\n                <div class=\"account-wrapper\">\r\n                    <h3 class=\"account-title\">Register</h3>\r\n                    <p class=\"account-subtitle\">Access to our dashboard</p>\r\n\r\n                    <!-- Account Form -->\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email<span class=\"mandatory\">*</span></label>\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"email\" id=\"email\"/>\r\n                            <div *ngIf=\"f['email'].touched && f['email'].invalid\" class=\"text-danger\">\r\n                                <div *ngIf=\"f['email'].errors && f['email'].errors['required']\">Email is required.</div>\r\n                            </div>\r\n                            <div *ngIf=\"CustomControler !=0\" class=\"text-danger\">\r\n                                {{CustomControler}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password<span class=\"mandatory\">*</span></label>\r\n                            <input class=\"form-control\" type=\"password\" formControlName=\"password\" id=\"password\"/>\r\n                            <div *ngIf=\"f['password'].touched && f['password'].invalid\" class=\"text-danger\">\r\n                                <div *ngIf=\"f['password'].errors && f['password'].errors['required']\">Password is required.</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Repeat Password<span class=\"mandatory\">*</span></label>\r\n                            <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" id=\"confirmPassword\"/>\r\n                            <div *ngIf=\"f['confirmPassword'].touched && f['confirmPassword'].invalid\" class=\"text-danger\">\r\n                                <div *ngIf=\"f['confirmPassword'].errors && f['confirmPassword'].errors['required']\">\r\n                                    Confirm Password is required.\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=isvalidconfirmpassword class=\"text-danger\">\r\n                                Password not matching\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <button class=\"btn btn-primary account-btn\" type=\"submit\" [disabled]=\"form.invalid\">Register</button>\r\n                        </div>\r\n                        <div class=\"account-footer\">\r\n                            <p>Already have an account? <a routerLink=\"/login\">Login</a></p>\r\n                        </div>\r\n                    </form>\r\n                    <!-- /Account Form -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map