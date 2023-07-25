"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_tables_tables_module_ts"],{

/***/ 3196:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/tables/basic-tables/basic-tables.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicTablesComponent": () => (/* binding */ BasicTablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-tables.component.html?ngResource */ 25335);
/* harmony import */ var _basic_tables_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-tables.component.css?ngResource */ 34613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let BasicTablesComponent = class BasicTablesComponent {
    constructor() { }
    ngOnInit() {
    }
};
BasicTablesComponent.ctorParameters = () => [];
BasicTablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-basic-tables',
        template: _basic_tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_basic_tables_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasicTablesComponent);



/***/ }),

/***/ 11983:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/tables/data-tables/data-tables.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTablesComponent": () => (/* binding */ DataTablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _data_tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-tables.component.html?ngResource */ 27465);
/* harmony import */ var _data_tables_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-tables.component.css?ngResource */ 61129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DataTablesComponent = class DataTablesComponent {
    constructor() {
        this.dtOptions = {};
    }
    ngOnInit() {
        this.dtOptions = {
            // ... skipped ...
            dom: 'lrtip'
        };
    }
};
DataTablesComponent.ctorParameters = () => [];
DataTablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-data-tables',
        template: _data_tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_data_tables_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DataTablesComponent);



/***/ }),

/***/ 39358:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/tables/tables-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesRoutingModule": () => (/* binding */ TablesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component */ 90247);
/* harmony import */ var _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-tables/basic-tables.component */ 3196);
/* harmony import */ var _data_tables_data_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-tables/data-tables.component */ 11983);






const routes = [
    {
        path: "",
        component: _tables_component__WEBPACK_IMPORTED_MODULE_0__.TablesComponent,
        children: [
            {
                path: "basic-tables",
                component: _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_1__.BasicTablesComponent
            },
            {
                path: "data-tables",
                component: _data_tables_data_tables_component__WEBPACK_IMPORTED_MODULE_2__.DataTablesComponent
            }
        ]
    }
];
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], TablesRoutingModule);



/***/ }),

/***/ 90247:
/*!********************************************************!*\
  !*** ./src/app/all-modules/tables/tables.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesComponent": () => (/* binding */ TablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component.html?ngResource */ 52846);
/* harmony import */ var _tables_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.component.css?ngResource */ 45721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TablesComponent = class TablesComponent {
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
TablesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
TablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tables',
        template: _tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tables_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], TablesComponent);



/***/ }),

/***/ 4791:
/*!*****************************************************!*\
  !*** ./src/app/all-modules/tables/tables.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-routing.module */ 39358);
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.component */ 90247);
/* harmony import */ var _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-tables/basic-tables.component */ 3196);
/* harmony import */ var _data_tables_data_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-tables/data-tables.component */ 11983);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 73899);








let TablesModule = class TablesModule {
};
TablesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_1__.TablesComponent, _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_2__.BasicTablesComponent, _data_tables_data_tables_component__WEBPACK_IMPORTED_MODULE_3__.DataTablesComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule
        ]
    })
], TablesModule);



/***/ }),

/***/ 34613:
/*!***************************************************************************************!*\
  !*** ./src/app/all-modules/tables/basic-tables/basic-tables.component.css?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZXMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 61129:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/tables/data-tables/data-tables.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXRhYmxlcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 45721:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/tables/tables.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 25335:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/tables/basic-tables/basic-tables.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<!--Page Content-->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Basic Tables</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Basic Tables</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Basic Table</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>John</td>\r\n                                    <td>Doe</td>\r\n                                    <td>john@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mary</td>\r\n                                    <td>Moe</td>\r\n                                    <td>mary@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>July</td>\r\n                                    <td>Dooley</td>\r\n                                    <td>july@example.com</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Striped Rows</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>John</td>\r\n                                    <td>Doe</td>\r\n                                    <td>john@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mary</td>\r\n                                    <td>Moe</td>\r\n                                    <td>mary@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>July</td>\r\n                                    <td>Dooley</td>\r\n                                    <td>july@example.com</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Bordered Table</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>John</td>\r\n                                    <td>Doe</td>\r\n                                    <td>john@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mary</td>\r\n                                    <td>Moe</td>\r\n                                    <td>mary@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>July</td>\r\n                                    <td>Dooley</td>\r\n                                    <td>july@example.com</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Hover Rows</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-hover mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>John</td>\r\n                                    <td>Doe</td>\r\n                                    <td>john@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mary</td>\r\n                                    <td>Moe</td>\r\n                                    <td>mary@example.com</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>July</td>\r\n                                    <td>Dooley</td>\r\n                                    <td>july@example.com</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Contextual Classes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Default</td>\r\n                                    <td>Defaultson</td>\r\n                                    <td>def@somemail.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-primary\">\r\n                                    <td>Primary</td>\r\n                                    <td>Doe</td>\r\n                                    <td>john@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-secondary\">\r\n                                    <td>Secondary</td>\r\n                                    <td>Moe</td>\r\n                                    <td>mary@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-success\">\r\n                                    <td>Success</td>\r\n                                    <td>Dooley</td>\r\n                                    <td>july@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-danger\">\r\n                                    <td>Danger</td>\r\n                                    <td>Refs</td>\r\n                                    <td>bo@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-warning\">\r\n                                    <td>Warning</td>\r\n                                    <td>Activeson</td>\r\n                                    <td>act@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-info\">\r\n                                    <td>Info</td>\r\n                                    <td>Activeson</td>\r\n                                    <td>act@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-light\">\r\n                                    <td>Light</td>\r\n                                    <td>Activeson</td>\r\n                                    <td>act@example.com</td>\r\n                                </tr>\r\n                                <tr class=\"table-dark\">\r\n                                    <td>Dark</td>\r\n                                    <td>Activeson</td>\r\n                                    <td>act@example.com</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Responsive Tables</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-nowrap mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Age</th>\r\n                                    <th>City</th>\r\n                                    <th>Country</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Anna</td>\r\n                                    <td>Pitt</td>\r\n                                    <td>35</td>\r\n                                    <td>New York</td>\r\n                                    <td>USA</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/Page Content-->";

/***/ }),

/***/ 27465:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/tables/data-tables/data-tables.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<!--Page Content-->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Data Tables</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Data Tables</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Default Datatable</h4>\r\n                    <p class=\"card-text\">\r\n                        This is the most basic example of the datatables with zero configuration. Use the\r\n                        <code>.datatable</code> class to initialize datatables.\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table datatable [dtOptions]=\"dtOptions\" class=\"datatable table table-stripped mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Position</th>\r\n                                    <th>Office</th>\r\n                                    <th>Age</th>\r\n                                    <th>Salary</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Tiger Nixon</td>\r\n                                    <td>System Architect</td>\r\n                                    <td>Edinburgh</td>\r\n                                    <td>61</td>\r\n                                    <td>$320,800</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Garrett Winters</td>\r\n                                    <td>Accountant</td>\r\n                                    <td>Tokyo</td>\r\n                                    <td>63</td>\r\n                                    <td>$170,750</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Ashton Cox</td>\r\n                                    <td>Junior Technical Author</td>\r\n                                    <td>San Francisco</td>\r\n                                    <td>66</td>\r\n                                    <td>$86,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Cedric Kelly</td>\r\n                                    <td>Senior Javascript Developer</td>\r\n                                    <td>Edinburgh</td>\r\n                                    <td>22</td>\r\n                                    <td>$433,060</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Airi Satou</td>\r\n                                    <td>Accountant</td>\r\n                                    <td>Tokyo</td>\r\n                                    <td>33</td>\r\n                                    <td>$162,700</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Brielle Williamson</td>\r\n                                    <td>Integration Specialist</td>\r\n                                    <td>New York</td>\r\n                                    <td>61</td>\r\n                                    <td>$372,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Herrod Chandler</td>\r\n                                    <td>Sales Assistant</td>\r\n                                    <td>San Francisco</td>\r\n                                    <td>59</td>\r\n                                    <td>$137,500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Rhona Davidson</td>\r\n                                    <td>Integration Specialist</td>\r\n                                    <td>Tokyo</td>\r\n                                    <td>55</td>\r\n                                    <td>$327,900</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Colleen Hurst</td>\r\n                                    <td>Javascript Developer</td>\r\n                                    <td>San Francisco</td>\r\n                                    <td>39</td>\r\n                                    <td>$205,500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Sonya Frost</td>\r\n                                    <td>Software Engineer</td>\r\n                                    <td>Edinburgh</td>\r\n                                    <td>23</td>\r\n                                    <td>$103,600</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Jena Gaines</td>\r\n                                    <td>Office Manager</td>\r\n                                    <td>London</td>\r\n                                    <td>30</td>\r\n                                    <td>$90,560</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Quinn Flynn</td>\r\n                                    <td>Support Lead</td>\r\n                                    <td>Edinburgh</td>\r\n                                    <td>22</td>\r\n                                    <td>$342,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Charde Marshall</td>\r\n                                    <td>Regional Director</td>\r\n                                    <td>San Francisco</td>\r\n                                    <td>36</td>\r\n                                    <td>$470,600</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Haley Kennedy</td>\r\n                                    <td>Senior Marketing Designer</td>\r\n                                    <td>London</td>\r\n                                    <td>43</td>\r\n                                    <td>$313,500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Tatyana Fitzpatrick</td>\r\n                                    <td>Regional Director</td>\r\n                                    <td>London</td>\r\n                                    <td>19</td>\r\n                                    <td>$385,750</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Michael Silva</td>\r\n                                    <td>Marketing Designer</td>\r\n                                    <td>London</td>\r\n                                    <td>66</td>\r\n                                    <td>$198,500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Paul Byrd</td>\r\n                                    <td>Chief Financial Officer (CFO)</td>\r\n                                    <td>New York</td>\r\n                                    <td>64</td>\r\n                                    <td>$725,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Gloria Little</td>\r\n                                    <td>Systems Administrator</td>\r\n                                    <td>New York</td>\r\n                                    <td>59</td>\r\n                                    <td>$237,500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Bradley Greer</td>\r\n                                    <td>Software Engineer</td>\r\n                                    <td>London</td>\r\n                                    <td>41</td>\r\n                                    <td>$132,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Dai Rios</td>\r\n                                    <td>Personnel Lead</td>\r\n                                    <td>Edinburgh</td>\r\n                                    <td>35</td>\r\n                                    <td>$217,500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Jenette Caldwell</td>\r\n                                    <td>Development Lead</td>\r\n                                    <td>New York</td>\r\n                                    <td>30</td>\r\n                                    <td>$345,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Yuri Berry</td>\r\n                                    <td>Chief Marketing Officer (CMO)</td>\r\n                                    <td>New York</td>\r\n                                    <td>40</td>\r\n                                    <td>$675,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Caesar Vance</td>\r\n                                    <td>Pre-Sales Support</td>\r\n                                    <td>New York</td>\r\n                                    <td>21</td>\r\n                                    <td>$106,450</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Doris Wilder</td>\r\n                                    <td>Sales Assistant</td>\r\n                                    <td>Sidney</td>\r\n                                    <td>23</td>\r\n                                    <td>$85,600</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Angelica Ramos</td>\r\n                                    <td>Chief Executive Officer (CEO)</td>\r\n                                    <td>London</td>\r\n                                    <td>47</td>\r\n                                    <td>$1,200,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Gavin Joyce</td>\r\n                                    <td>Developer</td>\r\n                                    <td>Edinburgh</td>\r\n                                    <td>42</td>\r\n                                    <td>$92,575</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Jennifer Chang</td>\r\n                                    <td>Regional Director</td>\r\n                                    <td>Singapore</td>\r\n                                    <td>28</td>\r\n                                    <td>$357,650</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Brenden Wagner</td>\r\n                                    <td>Software Engineer</td>\r\n                                    <td>San Francisco</td>\r\n                                    <td>28</td>\r\n                                    <td>$206,850</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Fiona Green</td>\r\n                                    <td>Chief Operating Officer (COO)</td>\r\n                                    <td>San Francisco</td>\r\n                                    <td>48</td>\r\n                                    <td>$850,000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Shou Itou</td>\r\n                                    <td>Regional Marketing</td>\r\n                                    <td>Tokyo</td>\r\n                                    <td>20</td>\r\n                                    <td>$163,000</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/Page Content-->";

/***/ }),

/***/ 52846:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/tables/tables.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_tables_tables_module_ts.js.map