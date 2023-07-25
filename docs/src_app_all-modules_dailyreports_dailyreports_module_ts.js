"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_dailyreports_dailyreports_module_ts"],{

/***/ 51622:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports-list/dailyreports-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyreportsListComponent": () => (/* binding */ DailyreportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dailyreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyreports-list.component.html?ngResource */ 90600);
/* harmony import */ var _dailyreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyreports-list.component.css?ngResource */ 72334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);










let DailyreportsListComponent = class DailyreportsListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        // public lstUseralljobs: any[];
        this.url = "dailyreport";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.LoadDailyreport();
    }
    // Get department list  Api Call
    LoadDailyreport() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstDailyreport = data;
            this.dtTrigger.next();
            this.rows = this.lstDailyreport;
            this.srch = [...this.rows];
        });
    }
    //search by Department
    searchEmployee(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.name1.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by jobtype
    searchDepartment(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.department.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
DailyreportsListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
DailyreportsListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
DailyreportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dailyreports-list',
        template: _dailyreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dailyreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DailyreportsListComponent);



/***/ }),

/***/ 66907:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyreportsRoutingModule": () => (/* binding */ DailyreportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dailyreports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyreports.component */ 51931);
/* harmony import */ var _dailyreports_list_dailyreports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyreports-list/dailyreports-list.component */ 51622);





const routes = [
    {
        path: "",
        component: _dailyreports_component__WEBPACK_IMPORTED_MODULE_0__.DailyreportsComponent,
        children: [
            {
                path: "daily-reports",
                component: _dailyreports_list_dailyreports_list_component__WEBPACK_IMPORTED_MODULE_1__.DailyreportsListComponent
            }
        ]
    }
];
let DailyreportsRoutingModule = class DailyreportsRoutingModule {
};
DailyreportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], DailyreportsRoutingModule);



/***/ }),

/***/ 51931:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyreportsComponent": () => (/* binding */ DailyreportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dailyreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyreports.component.html?ngResource */ 24275);
/* harmony import */ var _dailyreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyreports.component.css?ngResource */ 87411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DailyreportsComponent = class DailyreportsComponent {
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
DailyreportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
DailyreportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dailyreports',
        template: _dailyreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dailyreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], DailyreportsComponent);



/***/ }),

/***/ 44066:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyreportsModule": () => (/* binding */ DailyreportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dailyreports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyreports-routing.module */ 66907);
/* harmony import */ var _dailyreports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyreports.component */ 51931);
/* harmony import */ var _dailyreports_list_dailyreports_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyreports-list/dailyreports-list.component */ 51622);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ 34785);











let DailyreportsModule = class DailyreportsModule {
};
DailyreportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_dailyreports_component__WEBPACK_IMPORTED_MODULE_1__.DailyreportsComponent, _dailyreports_list_dailyreports_list_component__WEBPACK_IMPORTED_MODULE_2__.DailyreportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _dailyreports_routing_module__WEBPACK_IMPORTED_MODULE_0__.DailyreportsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], DailyreportsModule);



/***/ }),

/***/ 72334:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports-list/dailyreports-list.component.css?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYWlseXJlcG9ydHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 87411:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYWlseXJlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 90600:
/*!********************************************************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports-list/dailyreports-list.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Daily Report</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Daily Report</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">101</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Total Employees</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">84</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Today Present</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">12</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Today Absent</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n\t\t\t\t\t\t\t<div class=\"card flex-fill tickets-card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center w-100 p-3\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"bl-text mb-1\">5</h3>\r\n\t\t\t\t\t\t\t\t\t\t<h2>Today Left</h2>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n                        <div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus focused mb-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">From</label>\r\n\t\t\t\t\t\t\t</div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus focused mb-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"cal-icon\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">To</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"add-emp-section\">\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-success btn-add-emp\"> PDF</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Employee</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstDailyreport\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\">{{item.name1}} <span>{{item.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"item.status ==='Week off'\" class=\"btn btn-outline-info btn-sm\">{{item.status}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"item.status ==='Absent'\" class=\"btn btn-outline-danger btn-sm\">{{item.status}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n                \r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 24275:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/dailyreports/dailyreports.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_dailyreports_dailyreports_module_ts.js.map