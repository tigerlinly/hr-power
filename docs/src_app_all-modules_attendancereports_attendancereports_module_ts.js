"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_attendancereports_attendancereports_module_ts"],{

/***/ 33289:
/*!**********************************************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports-list/attendancereports-list.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancereportsListComponent": () => (/* binding */ AttendancereportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _attendancereports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendancereports-list.component.html?ngResource */ 66841);
/* harmony import */ var _attendancereports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendancereports-list.component.css?ngResource */ 52064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);





let AttendancereportsListComponent = class AttendancereportsListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.url = "attendancereports";
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        this.loadStudents();
    }
    // Get Students List  Api Call
    loadStudents() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstStudents = data;
        });
    }
};
AttendancereportsListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
AttendancereportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-attendancereports-list',
        template: _attendancereports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_attendancereports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AttendancereportsListComponent);



/***/ }),

/***/ 16135:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancereportsRoutingModule": () => (/* binding */ AttendancereportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _attendancereports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendancereports.component */ 17885);
/* harmony import */ var _attendancereports_list_attendancereports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendancereports-list/attendancereports-list.component */ 33289);





const routes = [
    {
        path: "",
        component: _attendancereports_component__WEBPACK_IMPORTED_MODULE_0__.AttendancereportsComponent,
        children: [
            {
                path: "attendance-reports",
                component: _attendancereports_list_attendancereports_list_component__WEBPACK_IMPORTED_MODULE_1__.AttendancereportsListComponent
            }
        ]
    }
];
let AttendancereportsRoutingModule = class AttendancereportsRoutingModule {
};
AttendancereportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AttendancereportsRoutingModule);



/***/ }),

/***/ 17885:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancereportsComponent": () => (/* binding */ AttendancereportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _attendancereports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendancereports.component.html?ngResource */ 46991);
/* harmony import */ var _attendancereports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendancereports.component.css?ngResource */ 17404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AttendancereportsComponent = class AttendancereportsComponent {
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
AttendancereportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
AttendancereportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-attendancereports',
        template: _attendancereports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_attendancereports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], AttendancereportsComponent);



/***/ }),

/***/ 27681:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancereportsModule": () => (/* binding */ AttendancereportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _attendancereports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendancereports-routing.module */ 16135);
/* harmony import */ var _attendancereports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendancereports.component */ 17885);
/* harmony import */ var _attendancereports_list_attendancereports_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendancereports-list/attendancereports-list.component */ 33289);






let AttendancereportsModule = class AttendancereportsModule {
};
AttendancereportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_attendancereports_component__WEBPACK_IMPORTED_MODULE_1__.AttendancereportsComponent, _attendancereports_list_attendancereports_list_component__WEBPACK_IMPORTED_MODULE_2__.AttendancereportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _attendancereports_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendancereportsRoutingModule
        ]
    })
], AttendancereportsModule);



/***/ }),

/***/ 52064:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports-list/attendancereports-list.component.css?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlcmVwb3J0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 17404:
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 66841:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports-list/attendancereports-list.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Attendance Reports</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Attendance Reports</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row mb-4\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select floating form-control\"> \r\n\t\t\t\t\t\t\t\t\t<option>Select Department</option>\r\n\t\t\t\t\t\t\t\t\t<option>Designing</option>\r\n\t\t\t\t\t\t\t\t\t<option>Development</option>\r\n\t\t\t\t\t\t\t\t\t<option>Finance</option>\r\n\t\t\t\t\t\t\t\t\t<option>Hr & Finance</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Department</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">From</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">To</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n\t\t\t\t\t\t</div>     \r\n                    </div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-striped custom-table\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Clock In</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Clock Out</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Work Status</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let students of lstStudents;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.clockin}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.clockout}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.workstatus}}</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                \r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 46991:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/attendancereports/attendancereports.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_attendancereports_attendancereports_module_ts.js.map