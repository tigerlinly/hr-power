"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_scheduletiming_scheduletiming_module_ts"],{

/***/ 78023:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming-list/scheduletiming-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduletimingListComponent": () => (/* binding */ ScheduletimingListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scheduletiming_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduletiming-list.component.html?ngResource */ 61554);
/* harmony import */ var _scheduletiming_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduletiming-list.component.css?ngResource */ 38882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../all-modules.service */ 78376);







let ScheduletimingListComponent = class ScheduletimingListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "scheduletiming";
    }
    ngOnInit() {
        this.loadFees();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    // Get Fees List  Api Call
    loadFees() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstFees = data;
            this.dtTrigger.next();
        });
    }
    // destroy data table when leaving
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ScheduletimingListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_3__.AllModulesService }
];
ScheduletimingListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, { static: true },] }]
};
ScheduletimingListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-scheduletiming-list',
        template: _scheduletiming_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scheduletiming_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScheduletimingListComponent);



/***/ }),

/***/ 29367:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduletimingRoutingModule": () => (/* binding */ ScheduletimingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _scheduletiming_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduletiming.component */ 58687);
/* harmony import */ var _scheduletiming_list_scheduletiming_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduletiming-list/scheduletiming-list.component */ 78023);





const routes = [
    {
        path: "",
        component: _scheduletiming_component__WEBPACK_IMPORTED_MODULE_0__.ScheduletimingComponent,
        children: [
            {
                path: "schedule-timing",
                component: _scheduletiming_list_scheduletiming_list_component__WEBPACK_IMPORTED_MODULE_1__.ScheduletimingListComponent
            }
        ]
    }
];
let ScheduletimingRoutingModule = class ScheduletimingRoutingModule {
};
ScheduletimingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ScheduletimingRoutingModule);



/***/ }),

/***/ 58687:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduletimingComponent": () => (/* binding */ ScheduletimingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scheduletiming_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduletiming.component.html?ngResource */ 55919);
/* harmony import */ var _scheduletiming_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduletiming.component.css?ngResource */ 4338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ScheduletimingComponent = class ScheduletimingComponent {
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
ScheduletimingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ScheduletimingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-scheduletiming',
        template: _scheduletiming_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scheduletiming_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ScheduletimingComponent);



/***/ }),

/***/ 90367:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduletimingModule": () => (/* binding */ ScheduletimingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _scheduletiming_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduletiming-routing.module */ 29367);
/* harmony import */ var _scheduletiming_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduletiming.component */ 58687);
/* harmony import */ var _scheduletiming_list_scheduletiming_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduletiming-list/scheduletiming-list.component */ 78023);







let ScheduletimingModule = class ScheduletimingModule {
};
ScheduletimingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_scheduletiming_component__WEBPACK_IMPORTED_MODULE_2__.ScheduletimingComponent, _scheduletiming_list_scheduletiming_list_component__WEBPACK_IMPORTED_MODULE_3__.ScheduletimingListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _scheduletiming_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScheduletimingRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
        ]
    })
], ScheduletimingModule);



/***/ }),

/***/ 38882:
/*!*************************************************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming-list/scheduletiming-list.component.css?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZXRpbWluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 4338:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming.component.css?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZXRpbWluZy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 61554:
/*!**************************************************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming-list/scheduletiming-list.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Schedule timing</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Schedule timing</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>User Available Timings</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Schedule timing</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let fees of lstFees;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\">{{fees.name1}} <span>{{fees.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">{{fees.jobtitle}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><b>{{fees.useravailable}}</b>{{fees.useravailabletimings}}<br><b>{{fees.useravailable1}}</b> {{fees.useravailabletimings1}}<br><b>{{fees.useravailable2}}</b> {{fees.useravailabletimings2}}<br> </td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSchedule Time\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<!-- Edit Job Modal -->\r\n\t\t\t\t<div id=\"edit_job\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Edit</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Date 1</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datetimepicker\" value=\"3 Mar 2019\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Time</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Select Time</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>12:00 AM-01:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>01:00 AM-02:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>02:00 AM-03:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>03:00 AM-04:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>04:00 AM-05:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>05:00 AM-06:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Date 2</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datetimepicker\" value=\"3 Mar 2019\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Time</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Select Time</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>12:00 AM-01:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>01:00 AM-02:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>02:00 AM-03:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>03:00 AM-04:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>04:00 AM-05:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>05:00 AM-06:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Date 3</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datetimepicker\" value=\"3 Mar 2019\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Time</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Select Time</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>12:00 AM-01:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>01:00 AM-02:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>02:00 AM-03:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>03:00 AM-04:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>04:00 AM-05:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>05:00 AM-06:00 AM</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Save</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Edit Job Modal -->\r\n\r\n\t\t\t\t<!-- Delete Job Modal -->\r\n\t\t\t\t<div class=\"modal custom-modal fade\" id=\"delete_job\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-header\">\r\n\t\t\t\t\t\t\t\t\t<h3>Delete</h3>\r\n\t\t\t\t\t\t\t\t\t<p>Are you sure want to delete?</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-btn delete-action\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\">Delete</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Delete Job Modal -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 55919:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/scheduletiming/scheduletiming.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = " <router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_scheduletiming_scheduletiming_module_ts.js.map