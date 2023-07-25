"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_aptitute_aptitute_module_ts"],{

/***/ 15541:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute-list/aptitute-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AptituteListComponent": () => (/* binding */ AptituteListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _aptitute_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aptitute-list.component.html?ngResource */ 5973);
/* harmony import */ var _aptitute_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aptitute-list.component.css?ngResource */ 39268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../all-modules.service */ 78376);







let AptituteListComponent = class AptituteListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "aptituteresult";
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
AptituteListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_3__.AllModulesService }
];
AptituteListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, { static: true },] }]
};
AptituteListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-aptitute-list',
        template: _aptitute_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_aptitute_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AptituteListComponent);



/***/ }),

/***/ 16111:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AptituteRoutingModule": () => (/* binding */ AptituteRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _aptitute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aptitute.component */ 19885);
/* harmony import */ var _aptitute_list_aptitute_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aptitute-list/aptitute-list.component */ 15541);





const routes = [
    {
        path: "",
        component: _aptitute_component__WEBPACK_IMPORTED_MODULE_0__.AptituteComponent,
        children: [
            {
                path: "aptitute-result",
                component: _aptitute_list_aptitute_list_component__WEBPACK_IMPORTED_MODULE_1__.AptituteListComponent
            }
        ]
    }
];
let AptituteRoutingModule = class AptituteRoutingModule {
};
AptituteRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AptituteRoutingModule);



/***/ }),

/***/ 19885:
/*!************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AptituteComponent": () => (/* binding */ AptituteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _aptitute_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aptitute.component.html?ngResource */ 77179);
/* harmony import */ var _aptitute_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aptitute.component.css?ngResource */ 42706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AptituteComponent = class AptituteComponent {
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
AptituteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
AptituteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-aptitute',
        template: _aptitute_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_aptitute_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], AptituteComponent);



/***/ }),

/***/ 63735:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AptituteModule": () => (/* binding */ AptituteModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _aptitute_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aptitute-routing.module */ 16111);
/* harmony import */ var _aptitute_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aptitute.component */ 19885);
/* harmony import */ var _aptitute_list_aptitute_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aptitute-list/aptitute-list.component */ 15541);







let AptituteModule = class AptituteModule {
};
AptituteModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_aptitute_component__WEBPACK_IMPORTED_MODULE_2__.AptituteComponent, _aptitute_list_aptitute_list_component__WEBPACK_IMPORTED_MODULE_3__.AptituteListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _aptitute_routing_module__WEBPACK_IMPORTED_MODULE_1__.AptituteRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
        ]
    })
], AptituteModule);



/***/ }),

/***/ 39268:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute-list/aptitute-list.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHRpdHV0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 42706:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHRpdHV0ZS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 5973:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute-list/aptitute-list.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Aptitude Result</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Aptitude Result</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Category Wise Mark</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Mark</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let fees of lstFees;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profile-list\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profile-list\">{{fees.name1}} <span>{{fees.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">{{fees.jobtitle}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{fees.categorywise}}<b>{{fees.categorywisemark}}</b><br>{{fees.categorywise1}}<b>{{fees.categorywisemark1}}</b><br></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{fees.totalmark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-three dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{fees.status}}\t\t\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-info\"></i> Resume selected</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>  Resume Rejected</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>  Aptitude Selected</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>  Aptitude rejected</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>  video call selected</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>  Video call rejected</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>  Offered</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 77179:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/aptitute/aptitute.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_aptitute_aptitute_module_ts.js.map