"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_taskreports_taskreports_module_ts"],{

/***/ 92919:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports-list/taskreports-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskreportsListComponent": () => (/* binding */ TaskreportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _taskreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskreports-list.component.html?ngResource */ 46358);
/* harmony import */ var _taskreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskreports-list.component.css?ngResource */ 15193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);





let TaskreportsListComponent = class TaskreportsListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.url = "taskreports";
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
TaskreportsListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
TaskreportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-taskreports-list',
        template: _taskreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_taskreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaskreportsListComponent);



/***/ }),

/***/ 31031:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskreportsRoutingModule": () => (/* binding */ TaskreportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _taskreports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskreports.component */ 21077);
/* harmony import */ var _taskreports_list_taskreports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskreports-list/taskreports-list.component */ 92919);





const routes = [
    {
        path: "",
        component: _taskreports_component__WEBPACK_IMPORTED_MODULE_0__.TaskreportsComponent,
        children: [
            {
                path: "task-reports",
                component: _taskreports_list_taskreports_list_component__WEBPACK_IMPORTED_MODULE_1__.TaskreportsListComponent
            }
        ]
    }
];
let TaskreportsRoutingModule = class TaskreportsRoutingModule {
};
TaskreportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], TaskreportsRoutingModule);



/***/ }),

/***/ 21077:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskreportsComponent": () => (/* binding */ TaskreportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _taskreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskreports.component.html?ngResource */ 36374);
/* harmony import */ var _taskreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskreports.component.css?ngResource */ 90597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TaskreportsComponent = class TaskreportsComponent {
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
TaskreportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
TaskreportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-taskreports',
        template: _taskreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_taskreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], TaskreportsComponent);



/***/ }),

/***/ 69004:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskreportsModule": () => (/* binding */ TaskreportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _taskreports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskreports-routing.module */ 31031);
/* harmony import */ var _taskreports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskreports.component */ 21077);
/* harmony import */ var _taskreports_list_taskreports_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskreports-list/taskreports-list.component */ 92919);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ 59304);







let TaskreportsModule = class TaskreportsModule {
};
TaskreportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_taskreports_component__WEBPACK_IMPORTED_MODULE_1__.TaskreportsComponent, _taskreports_list_taskreports_list_component__WEBPACK_IMPORTED_MODULE_2__.TaskreportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _taskreports_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskreportsRoutingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TooltipModule.forRoot()
        ]
    })
], TaskreportsModule);



/***/ }),

/***/ 15193:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports-list/taskreports-list.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcmVwb3J0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 90597:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 46358:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports-list/taskreports-list.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Task Reports</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Task Reports</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\">\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tName1\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tName2\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Project Name</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\">\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tAll\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tPending\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tCompleted\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Status</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4\">  \r\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>  \r\n\t\t\t\t\t\t</div>     \r\n                    </div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-striped custom-table\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Task Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Start Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>End Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Assigned To</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let students of lstStudents;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.taskname}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.startdate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.enddate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\"><i class=\"fa fa-dot-circle-o text-success\"></i> {{students.status}} </a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"team-members\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a tooltip=\"Jeffery Lalor\"><img alt=\"\" src=\"assets/img/profiles/avatar-16.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                \r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 36374:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/taskreports/taskreports.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_taskreports_taskreports_module_ts.js.map