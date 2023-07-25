"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_errorpages_errorpages_module_ts"],{

/***/ 68275:
/*!***********************************************************!*\
  !*** ./src/app/errorpages/error404/error404.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Component": () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _error404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404.component.html?ngResource */ 91892);
/* harmony import */ var _error404_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404.component.css?ngResource */ 88277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() {
    }
};
Error404Component.ctorParameters = () => [];
Error404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error404',
        template: _error404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error404_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Error404Component);



/***/ }),

/***/ 55703:
/*!***********************************************************!*\
  !*** ./src/app/errorpages/error500/error500.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error500Component": () => (/* binding */ Error500Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _error500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error500.component.html?ngResource */ 56906);
/* harmony import */ var _error500_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error500.component.css?ngResource */ 38214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Error500Component = class Error500Component {
    constructor() { }
    ngOnInit() {
    }
};
Error500Component.ctorParameters = () => [];
Error500Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error500',
        template: _error500_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error500_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Error500Component);



/***/ }),

/***/ 4449:
/*!*********************************************************!*\
  !*** ./src/app/errorpages/errorpages-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorpagesRoutingModule": () => (/* binding */ ErrorpagesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404/error404.component */ 68275);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error500/error500.component */ 55703);





const routes = [
    {
        path: "error404",
        component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__.Error404Component
    },
    {
        path: "error500",
        component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_1__.Error500Component
    }
];
let ErrorpagesRoutingModule = class ErrorpagesRoutingModule {
};
ErrorpagesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ErrorpagesRoutingModule);



/***/ }),

/***/ 57764:
/*!*************************************************!*\
  !*** ./src/app/errorpages/errorpages.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorpagesModule": () => (/* binding */ ErrorpagesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _errorpages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorpages-routing.module */ 4449);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404/error404.component */ 68275);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error500/error500.component */ 55703);






let ErrorpagesModule = class ErrorpagesModule {
};
ErrorpagesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_error404_error404_component__WEBPACK_IMPORTED_MODULE_1__.Error404Component, _error500_error500_component__WEBPACK_IMPORTED_MODULE_2__.Error500Component],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _errorpages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorpagesRoutingModule
        ]
    })
], ErrorpagesModule);



/***/ }),

/***/ 88277:
/*!***********************************************************************!*\
  !*** ./src/app/errorpages/error404/error404.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 38214:
/*!***********************************************************************!*\
  !*** ./src/app/errorpages/error500/error500.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 91892:
/*!************************************************************************!*\
  !*** ./src/app/errorpages/error404/error404.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"error-page\">\r\n    <div class=\"main-wrapper\">\r\n\r\n        <div class=\"error-box\">\r\n            <h1>404</h1>\r\n            <h3><i class=\"fas fa-exclamation-triangle\"></i> Oops! Page not found!</h3>\r\n            <p>The page you requested was not found.</p>\r\n            <a routerLink=\"/layout/dashboard/admin\" class=\"btn btn-custom\">Back to Home</a>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ }),

/***/ 56906:
/*!************************************************************************!*\
  !*** ./src/app/errorpages/error500/error500.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Main Wrapper -->\r\n<div class=\"error-page\">\r\n\r\n    <div class=\"main-wrapper\">\r\n\r\n        <div class=\"error-box\">\r\n            <h1>500</h1>\r\n            <h3><i class=\"fas fa-exclamation-triangle\"></i> Oops! Something went wrong</h3>\r\n            <p>The page you requested was not found.</p>\r\n            <a routerLink=\"/layout/dashboard/admin\" class=\"btn btn-custom\">Back to Home</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Main Wrapper -->";

/***/ })

}]);
//# sourceMappingURL=src_app_errorpages_errorpages_module_ts.js.map