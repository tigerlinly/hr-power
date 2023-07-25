"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_userdashboard_userdashboard_module_ts"],{

/***/ 93891:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard-list/userdashboard-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdashboardListComponent": () => (/* binding */ UserdashboardListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _userdashboard_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdashboard-list.component.html?ngResource */ 63372);
/* harmony import */ var _userdashboard_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdashboard-list.component.css?ngResource */ 47895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let UserdashboardListComponent = class UserdashboardListComponent {
    constructor() {
        this.barColors = {
            a: "#2196f3",
            b: "#6610f2",
        };
        this.lineColors = {
            a: "#373651",
            b: "#E65A26",
            c: "#a1a1a1"
        };
    }
    ngOnInit() {
        this.chartOptions = {
            xkey: "y",
            ykeys: ["a", "b"],
            labels: ["Series A", "Series B"],
            barColors: [this.barColors.a, this.barColors.b],
        };
        this.chartData = [
            { y: "2006", a: 100, b: 90 },
            { y: "2007", a: 75, b: 65 },
            { y: "2008", a: 50, b: 40 },
            { y: "2009", a: 75, b: 65 },
            { y: "2010", a: 50, b: 40 },
            { y: "2011", a: 75, b: 65 },
            { y: "2012", a: 100, b: 90 },
        ];
        this.lineOption = {
            xkey: "y",
            ykeys: ["a", "b", "c"],
            labels: ["UI Developer", "Android", "Web Designing"],
            resize: true,
            lineColors: [this.lineColors.a, this.lineColors.b, this.lineColors.c],
        };
        this.lineData = [
            { y: "2006", a: 20, b: 2, c: 1 },
            { y: "2007", a: 10, b: 2, c: 3 },
            { y: "2008", a: 5, b: 3, c: 6 },
            { y: "2009", a: 5, b: 4, c: 8 },
            { y: "2010", a: 20, b: 1, c: 10 },
        ];
    }
};
UserdashboardListComponent.ctorParameters = () => [];
UserdashboardListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-userdashboard-list',
        template: _userdashboard_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_userdashboard_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserdashboardListComponent);



/***/ }),

/***/ 14638:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdashboardRoutingModule": () => (/* binding */ UserdashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _userdashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdashboard.component */ 67975);
/* harmony import */ var _userdashboard_list_userdashboard_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdashboard-list/userdashboard-list.component */ 93891);





const routes = [
    {
        path: "",
        component: _userdashboard_component__WEBPACK_IMPORTED_MODULE_0__.UserdashboardComponent,
        children: [
            {
                path: "user-dashboard",
                component: _userdashboard_list_userdashboard_list_component__WEBPACK_IMPORTED_MODULE_1__.UserdashboardListComponent
            }
        ]
    }
];
let UserdashboardRoutingModule = class UserdashboardRoutingModule {
};
UserdashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], UserdashboardRoutingModule);



/***/ }),

/***/ 67975:
/*!**********************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdashboardComponent": () => (/* binding */ UserdashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _userdashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdashboard.component.html?ngResource */ 16012);
/* harmony import */ var _userdashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdashboard.component.css?ngResource */ 12072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let UserdashboardComponent = class UserdashboardComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.innerHeight = window.innerHeight + 'px';
            });
        };
        this.getScreenHeight();
    }
    getScreenHeight() {
        this.innerHeight = window.innerHeight + 'px';
    }
    ngOnInit() {
    }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
    }
};
UserdashboardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
UserdashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-userdashboard',
        template: _userdashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_userdashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], UserdashboardComponent);



/***/ }),

/***/ 56530:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdashboardModule": () => (/* binding */ UserdashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _userdashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdashboard-routing.module */ 14638);
/* harmony import */ var _userdashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdashboard.component */ 67975);
/* harmony import */ var _userdashboard_list_userdashboard_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userdashboard-list/userdashboard-list.component */ 93891);
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-morris-js */ 71619);







let UserdashboardModule = class UserdashboardModule {
};
UserdashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_userdashboard_component__WEBPACK_IMPORTED_MODULE_1__.UserdashboardComponent, _userdashboard_list_userdashboard_list_component__WEBPACK_IMPORTED_MODULE_2__.UserdashboardListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _userdashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserdashboardRoutingModule,
            angular_morris_js__WEBPACK_IMPORTED_MODULE_3__.MorrisJsModule
        ]
    })
], UserdashboardModule);



/***/ }),

/***/ 47895:
/*!**********************************************************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard-list/userdashboard-list.component.css?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 12072:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard.component.css?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 63372:
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard-list/userdashboard-list.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>User Job Dashboard</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">User Job Dashboard</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<!-- <h4 class=\"card-title\">Solid justified</h4> -->\r\n\t\t\t\t\t\t\t<ul class=\"nav nav-tabs nav-tabs-solid nav-justified\">\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" routerLink=\"/layout/userdashboard/user-dashboard\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/useralljobs/user-all-jobs\">All </a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/savedjobs/saved-jobs\">Saved</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/appliedjobs/applied-jobs\">Applied</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/interviewing/interviewing\">Interviewing</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/offeredjobs/offered-jobs\">Offered</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/visitedjobs/visited-jobs\">Visitied </a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/archivedjobs/archived-jobs\">Archived </a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">112</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Offered</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">0</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Applied</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">0</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Visited</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">12</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Saved</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 jb-dashboard\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 text-center d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card flex-fill\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">Profiles Overview</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLast 6 months\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\">Last 6 months</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\">Last 3 months</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\">Last 1 months</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div mk-morris-js [options]=\"lineOption\" [data]=\"lineData\" type=\"Line\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 d-flex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card flex-fill\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"card-title\">Latest Jobs</h3>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"jb-info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jb-li-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>UI Developer</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Experience</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jb-li-content mt-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>1 hour Ago</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>9 years</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Apply Now</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jb-li-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>UI Developer</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Experience</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jb-li-content mt-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>1 hour Ago</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>9 years</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Apply Now</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jb-li-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>UI Developer</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Experience</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"jb-li-content mt-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>1 hour Ago</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>9 years</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Apply Now</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"card card-table\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title mb-0\">Offered Jobs</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-nowrap custom-table mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Job Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">Web Developer</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Development</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> Full Time\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-three download-offer\"><span><i class=\"fa fa-download me-1\"></i> Download Offer</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">Web Designer</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Designing</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-success\"></i> Part Time\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-three download-offer\"><span><i class=\"fa fa-download me-1\"></i> Download Offer</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">Android Developer</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Android</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> Internship\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-three download-offer\"><span><i class=\"fa fa-download me-1\"></i> Download Offer</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"card card-table\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title mb-0\">Applied Jobs</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-nowrap custom-table mb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Start Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Expire Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Job Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">Web Developer</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Development</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3 Mar 2019</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>31 May 2019</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> Full Time\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-one\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> Open\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-end ico-sec justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\"><i class=\"fas fa-pen\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">Web Designer</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Designing</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3 Mar 2019</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>31 May 2019</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-success\"></i> Part Time\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-one\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-success\"></i> Closed\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-end ico-sec justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\"><i class=\"fas fa-pen\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">Android Developer</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Android</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3 Mar 2019</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>31 May 2019</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> Internship\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-one\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> Cancelled\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-end ico-sec justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\"><i class=\"fas fa-pen\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 16012:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/userdashboard/userdashboard.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_userdashboard_userdashboard_module_ts.js.map