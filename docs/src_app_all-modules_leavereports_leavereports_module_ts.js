"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_leavereports_leavereports_module_ts"],{

/***/ 78244:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports-list/leavereports-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavereportsListComponent": () => (/* binding */ LeavereportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _leavereports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leavereports-list.component.html?ngResource */ 88726);
/* harmony import */ var _leavereports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavereports-list.component.css?ngResource */ 29997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);








let LeavereportsListComponent = class LeavereportsListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.url = "leavereports";
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
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
LeavereportsListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_3__.AllModulesService }
];
LeavereportsListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, { static: true },] }]
};
LeavereportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-leavereports-list',
        template: _leavereports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leavereports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeavereportsListComponent);



/***/ }),

/***/ 11099:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavereportsRoutingModule": () => (/* binding */ LeavereportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _leavereports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leavereports.component */ 37282);
/* harmony import */ var _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavereports-list/leavereports-list.component */ 78244);





const routes = [
    {
        path: "",
        component: _leavereports_component__WEBPACK_IMPORTED_MODULE_0__.LeavereportsComponent,
        children: [
            {
                path: "leave-reports",
                component: _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_1__.LeavereportsListComponent
            }
        ]
    }
];
let LeavereportsRoutingModule = class LeavereportsRoutingModule {
};
LeavereportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], LeavereportsRoutingModule);



/***/ }),

/***/ 37282:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavereportsComponent": () => (/* binding */ LeavereportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _leavereports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leavereports.component.html?ngResource */ 92621);
/* harmony import */ var _leavereports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavereports.component.css?ngResource */ 1593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let LeavereportsComponent = class LeavereportsComponent {
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
LeavereportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
LeavereportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-leavereports',
        template: _leavereports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leavereports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], LeavereportsComponent);



/***/ }),

/***/ 99709:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeavereportsModule": () => (/* binding */ LeavereportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _leavereports_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavereports-routing.module */ 11099);
/* harmony import */ var _leavereports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leavereports.component */ 37282);
/* harmony import */ var _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leavereports-list/leavereports-list.component */ 78244);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/picklist */ 34785);










let LeavereportsModule = class LeavereportsModule {
};
LeavereportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_leavereports_component__WEBPACK_IMPORTED_MODULE_2__.LeavereportsComponent, _leavereports_list_leavereports_list_component__WEBPACK_IMPORTED_MODULE_3__.LeavereportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _leavereports_routing_module__WEBPACK_IMPORTED_MODULE_1__.LeavereportsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_9__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], LeavereportsModule);



/***/ }),

/***/ 29997:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports-list/leavereports-list.component.css?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZXJlcG9ydHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 1593:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZXJlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 88726:
/*!********************************************************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports-list/leavereports-list.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Leave Reports</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Leave Reports</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row mb-4\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t<option>Select Department</option>\r\n\t\t\t\t\t\t\t\t\t<option>Designing</option>\r\n\t\t\t\t\t\t\t\t\t<option>Development</option>\r\n\t\t\t\t\t\t\t\t\t<option>Finance</option>\r\n\t\t\t\t\t\t\t\t\t<option>Hr & Finance</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Department</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">From</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">To</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a> \r\n\t\t\t\t\t\t</div>     \r\n                    </div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Employee</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Leave Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>No.of Days</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Remaining Leave</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Leaves</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Leave Taken</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Leave Carry Forward</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let fees of lstFees;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\">{{fees.name1}} <span>#{{fees.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"fees.leavetype ==='Sick Leave'\" class=\"btn btn-outline-info btn-sm\">{{fees.leavetype}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"fees.leavetype ==='Emergency Leave'\" class=\"btn btn-outline-danger btn-sm\">{{fees.leavetype}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"fees.leavetype ==='Parenting Leave'\" class=\"btn btn-outline-warning btn-sm\">{{fees.leavetype}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"btn btn-danger btn-sm\">{{fees.noofdays}}</span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"btn btn-warning btn-sm\"><b>{{fees.remainingleave}}</b></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><span class=\"btn btn-success btn-sm\"><b>{{fees.totalleaves}}</b></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{fees.totalleavetaken}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{fees.leavecarryforward}}</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 92621:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/leavereports/leavereports.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_leavereports_leavereports_module_ts.js.map