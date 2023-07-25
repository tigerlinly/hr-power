"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_leads_leads_module_ts"],{

/***/ 6053:
/*!****************************************************************************!*\
  !*** ./src/app/all-modules/leads/leads-content/leads-content.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsContentComponent": () => (/* binding */ LeadsContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _leads_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads-content.component.html?ngResource */ 53627);
/* harmony import */ var _leads_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads-content.component.css?ngResource */ 47410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../all-modules.service */ 78376);







let LeadsContentComponent = class LeadsContentComponent {
    constructor(allModuleService) {
        this.allModuleService = allModuleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "leads";
        this.allLeads = [];
    }
    ngOnInit() {
        this.getLeads();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getLeads() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allLeads = data;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
LeadsContentComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_3__.AllModulesService }
];
LeadsContentComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, { static: false },] }]
};
LeadsContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-leads-content",
        template: _leads_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leads_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeadsContentComponent);



/***/ }),

/***/ 10863:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/leads/leads-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsRoutingModule": () => (/* binding */ LeadsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _leads_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads.component */ 67017);
/* harmony import */ var _leads_content_leads_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads-content/leads-content.component */ 6053);





const routes = [
    {
        path: "",
        component: _leads_component__WEBPACK_IMPORTED_MODULE_0__.LeadsComponent,
        children: [
            {
                path: "leadscontent",
                component: _leads_content_leads_content_component__WEBPACK_IMPORTED_MODULE_1__.LeadsContentComponent
            }
        ]
    }
];
let LeadsRoutingModule = class LeadsRoutingModule {
};
LeadsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], LeadsRoutingModule);



/***/ }),

/***/ 67017:
/*!******************************************************!*\
  !*** ./src/app/all-modules/leads/leads.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsComponent": () => (/* binding */ LeadsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _leads_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads.component.html?ngResource */ 52226);
/* harmony import */ var _leads_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads.component.css?ngResource */ 90401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let LeadsComponent = class LeadsComponent {
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
LeadsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
LeadsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-leads',
        template: _leads_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leads_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], LeadsComponent);



/***/ }),

/***/ 74948:
/*!***************************************************!*\
  !*** ./src/app/all-modules/leads/leads.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsModule": () => (/* binding */ LeadsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _leads_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads-routing.module */ 10863);
/* harmony import */ var _leads_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads.component */ 67017);
/* harmony import */ var _leads_content_leads_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads-content/leads-content.component */ 6053);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);








let LeadsModule = class LeadsModule {
};
LeadsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_leads_component__WEBPACK_IMPORTED_MODULE_1__.LeadsComponent, _leads_content_leads_content_component__WEBPACK_IMPORTED_MODULE_2__.LeadsContentComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _leads_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeadsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.TooltipModule.forRoot()
        ]
    })
], LeadsModule);



/***/ }),

/***/ 47410:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/leads/leads-content/leads-content.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkcy1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 90401:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/leads/leads.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 53627:
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/leads/leads-content/leads-content.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Leads</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Leads</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped table-nowrap custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Lead Name</th>\r\n                            <th>Email</th>\r\n                            <th>Phone</th>\r\n                            <th>Project</th>\r\n                            <th>Assigned Staff</th>\r\n                            <th>Status</th>\r\n                            <th>Created</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let leads of allLeads;let i = index\">\r\n                            <td>{{i}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"{{leads.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{leads.leadName}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{leads.email}}</td>\r\n                            <td>{{leads.phone}}</td>\r\n                            <td><a routerLink=\"/layout/projects/projectview/{{leads.id}}\">{{leads.project}}</a></td>\r\n                            <td>\r\n                                <ul class=\"team-members\">\r\n                                    <li>\r\n                                        <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"John Doe\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/layout/employees/employeeprofile\" tooltip=\"Richard Miles\"><img alt=\"\" src=\"assets/img/profiles/avatar-09.jpg\"></a>\r\n                                    </li>\r\n                                    <li class=\"dropdown avatar-dropdown\">\r\n                                        <a class=\"all-users dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                            aria-expanded=\"false\">+15</a>\r\n                                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"avatar-group\">\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-09.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-10.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-05.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-11.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-12.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-13.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-01.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-16.jpg\">\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"avatar-pagination\">\r\n                                                <ul class=\"pagination\">\r\n                                                    <li class=\"page-item\">\r\n                                                        <a class=\"page-link\" aria-label=\"Previous\">\r\n                                                            <span aria-hidden=\"true\">«</span>\r\n                                                            <span class=\"visually-hidden\">Previous</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n                                                    <li class=\"page-item\"><a class=\"page-link\">2</a></li>\r\n                                                    <li class=\"page-item\">\r\n                                                        <a class=\"page-link\" aria-label=\"Next\">\r\n                                                            <span aria-hidden=\"true\">»</span>\r\n                                                            <span class=\"visually-hidden\">Next</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                            </td>\r\n                            <td><span class=\"role-info role-bg-two\">{{leads.status}}</span></td>\r\n                            <td>{{leads.created}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 52226:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/leads/leads.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_leads_leads_module_ts.js.map