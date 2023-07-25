"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_activities_activities_module_ts"],{

/***/ 75901:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/activities/activities-main/activities-main.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesMainComponent": () => (/* binding */ ActivitiesMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activities_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities-main.component.html?ngResource */ 31241);
/* harmony import */ var _activities_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities-main.component.css?ngResource */ 92116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ActivitiesMainComponent = class ActivitiesMainComponent {
    constructor() { }
    ngOnInit() {
    }
};
ActivitiesMainComponent.ctorParameters = () => [];
ActivitiesMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-activities-main',
        template: _activities_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_activities_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivitiesMainComponent);



/***/ }),

/***/ 3590:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/activities/activities-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesRoutingModule": () => (/* binding */ ActivitiesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _activities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities.component */ 61683);
/* harmony import */ var _activities_main_activities_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities-main/activities-main.component */ 75901);





const routes = [
    {
        path: "",
        component: _activities_component__WEBPACK_IMPORTED_MODULE_0__.ActivitiesComponent,
        children: [
            {
                path: "activities-main",
                component: _activities_main_activities_main_component__WEBPACK_IMPORTED_MODULE_1__.ActivitiesMainComponent
            }
        ]
    }
];
let ActivitiesRoutingModule = class ActivitiesRoutingModule {
};
ActivitiesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ActivitiesRoutingModule);



/***/ }),

/***/ 61683:
/*!****************************************************************!*\
  !*** ./src/app/all-modules/activities/activities.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesComponent": () => (/* binding */ ActivitiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities.component.html?ngResource */ 18485);
/* harmony import */ var _activities_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.component.css?ngResource */ 83930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ActivitiesComponent = class ActivitiesComponent {
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
ActivitiesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ActivitiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-activities',
        template: _activities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_activities_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ActivitiesComponent);



/***/ }),

/***/ 56395:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/activities/activities.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitiesModule": () => (/* binding */ ActivitiesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _activities_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities-routing.module */ 3590);
/* harmony import */ var _activities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities.component */ 61683);
/* harmony import */ var _activities_main_activities_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities-main/activities-main.component */ 75901);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ 59304);







let ActivitiesModule = class ActivitiesModule {
};
ActivitiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_activities_component__WEBPACK_IMPORTED_MODULE_1__.ActivitiesComponent, _activities_main_activities_main_component__WEBPACK_IMPORTED_MODULE_2__.ActivitiesMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _activities_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivitiesRoutingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TooltipModule.forRoot()
        ]
    })
], ActivitiesModule);



/***/ }),

/***/ 92116:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/activities/activities-main/activities-main.component.css?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0aWVzLW1haW4uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 83930:
/*!****************************************************************************!*\
  !*** ./src/app/all-modules/activities/activities.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 31241:
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/activities/activities-main/activities-main.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Activities</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Activities</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"activity\">\r\n                <div class=\"activity-box\">\r\n                    <ul class=\"activity-list\">\r\n                        <li>\r\n                            <div class=\"activity-user\">\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"Lesley Grauer\" class=\"avatar\">\r\n                                    <img src=\"assets/img/profiles/avatar-01.jpg\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"activity-content\">\r\n                                <div class=\"timeline-content\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"name\">Lesley Grauer</a> added new task <a\r\n                                        >Hospital Administration</a>\r\n                                    <span class=\"time\">4 mins ago</span>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"activity-user\">\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\" tooltip=\"Jeffery Lalor\">\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"activity-content\">\r\n                                <div class=\"timeline-content\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"name\">Jeffery Lalor</a> added <a href=\"javaScript:void(0)\"\r\n                                        class=\"name\">Loren Gatlin</a> and <a href=\"javaScript:void(0)\" class=\"name\">Tarah\r\n                                        Shropshire</a> to project <a >Patient appointment booking</a>\r\n                                    <span class=\"time\">6 mins ago</span>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"activity-user\">\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"Catherine Manseau\" class=\"avatar\">\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"activity-content\">\r\n                                <div class=\"timeline-content\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"name\">Catherine Manseau</a> completed task <a\r\n                                        >Appointment booking with payment gateway</a>\r\n                                    <span class=\"time\">12 mins ago</span>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"activity-user\">\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"Bernardo Galaviz\" class=\"avatar\">\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"activity-content\">\r\n                                <div class=\"timeline-content\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"name\">Bernardo Galaviz</a> changed the task name <a\r\n                                        >Doctor available module</a>\r\n                                    <span class=\"time\">1 day ago</span>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"activity-user\">\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"Mike Litorus\" class=\"avatar\">\r\n                                    <img src=\"assets/img/profiles/avatar-05.jpg\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"activity-content\">\r\n                                <div class=\"timeline-content\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"name\">Mike Litorus</a> added new task <a\r\n                                        >Patient and Doctor video conferencing</a>\r\n                                    <span class=\"time\">2 days ago</span>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"activity-user\">\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"Jeffery Lalor\" class=\"avatar\">\r\n                                    <img src=\"assets/img/profiles/avatar-06.jpg\" alt=\"\">\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"activity-content\">\r\n                                <div class=\"timeline-content\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"name\">Jeffery Lalor</a> added <a href=\"javaScript:void(0)\"\r\n                                        class=\"name\">Jeffrey Warden</a> and <a href=\"javaScript:void(0)\" class=\"name\">Bernardo\r\n                                        Galaviz</a> to the task of <a >Private chat module</a>\r\n                                    <span class=\"time\">7 days ago</span>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 18485:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/activities/activities.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_activities_activities_module_ts.js.map