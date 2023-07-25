"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_projectreports_projectreports_module_ts"],{

/***/ 64445:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports-list/projectreports-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectreportsListComponent": () => (/* binding */ ProjectreportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _projectreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectreports-list.component.html?ngResource */ 3419);
/* harmony import */ var _projectreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectreports-list.component.css?ngResource */ 52040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);







let ProjectreportsListComponent = class ProjectreportsListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.url = "projectreports";
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
        this.LoadProjectreports();
    }
    // Get department list  Api Call
    LoadProjectreports() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstProjectreports = data;
            this.rows = this.lstProjectreports;
            this.srch = [...this.rows];
        });
    }
    //search by Status
    searchStatus(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
};
ProjectreportsListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService }
];
ProjectreportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-projectreports-list',
        template: _projectreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_projectreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectreportsListComponent);



/***/ }),

/***/ 27608:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectreportsRoutingModule": () => (/* binding */ ProjectreportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projectreports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectreports.component */ 1127);
/* harmony import */ var _projectreports_list_projectreports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectreports-list/projectreports-list.component */ 64445);





const routes = [
    {
        path: "",
        component: _projectreports_component__WEBPACK_IMPORTED_MODULE_0__.ProjectreportsComponent,
        children: [
            {
                path: "project-reports",
                component: _projectreports_list_projectreports_list_component__WEBPACK_IMPORTED_MODULE_1__.ProjectreportsListComponent
            }
        ]
    }
];
let ProjectreportsRoutingModule = class ProjectreportsRoutingModule {
};
ProjectreportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ProjectreportsRoutingModule);



/***/ }),

/***/ 1127:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectreportsComponent": () => (/* binding */ ProjectreportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _projectreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectreports.component.html?ngResource */ 21096);
/* harmony import */ var _projectreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectreports.component.css?ngResource */ 27639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ProjectreportsComponent = class ProjectreportsComponent {
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
ProjectreportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ProjectreportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-projectreports',
        template: _projectreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_projectreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ProjectreportsComponent);



/***/ }),

/***/ 66937:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectreportsModule": () => (/* binding */ ProjectreportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projectreports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectreports-routing.module */ 27608);
/* harmony import */ var _projectreports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectreports.component */ 1127);
/* harmony import */ var _projectreports_list_projectreports_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectreports-list/projectreports-list.component */ 64445);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ 59304);








let ProjectreportsModule = class ProjectreportsModule {
};
ProjectreportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_projectreports_component__WEBPACK_IMPORTED_MODULE_1__.ProjectreportsComponent, _projectreports_list_projectreports_list_component__WEBPACK_IMPORTED_MODULE_2__.ProjectreportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _projectreports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectreportsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.TooltipModule.forRoot()
        ]
    })
], ProjectreportsModule);



/***/ }),

/***/ 52040:
/*!*************************************************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports-list/projectreports-list.component.css?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cmVwb3J0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 27639:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports.component.css?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 3419:
/*!**************************************************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports-list/projectreports-list.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">\r\n\r\n    <!-- Page Content -->\r\n    <div class=\"content container-fluid\">\r\n        \r\n        <!-- Page Header -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"page-head-box\">\r\n                    <h3>Project Reports</h3>\r\n                    <nav aria-label=\"breadcrumb\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Project Reports</li>\r\n                        </ol>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n        \r\n        <!-- Content Starts -->\r\n            <!-- Search Filter -->\r\n        <div class=\"row filter-row\">\r\n            \r\n            <div class=\"col-sm-6 col-md-4\">  \r\n                <div class=\"form-group form-focus mb-0\">\r\n                    <select class=\"form-select form-control floating\">\r\n                        <option>\r\n                            Name1\r\n                        </option>\r\n                        <option>\r\n                            Name2\r\n                        </option>\r\n                    </select>\r\n                    <label class=\"focus-label\">Project Name</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-4\">  \r\n                <div class=\"form-group form-focus mb-0\">\r\n                    <select class=\"form-select form-control floating\" (input)=\"searchStatus($event.target.value)\">\r\n                        <option>\r\n                            Active\r\n                        </option>\r\n                        <option>\r\n                            Pending\r\n                        </option>\r\n                    </select>\r\n                    <label class=\"focus-label\">Status</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-4\">  \r\n                <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n            </div>     \r\n        </div>\r\n        <!-- /Search Filter -->\r\n        \r\n        <!-- Content Starts -->\r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped custom-table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Project Title</th>\r\n                                <th>Client Name</th>\r\n                                <th>Start Date</th>\r\n                                <th>End Date</th>\r\n                                <th>Status</th>\r\n                                <th>Team</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of lstProjectreports\">\r\n                                <td>{{item.id}}</td>\r\n                                <td>\r\n                                    <a routerLink=\"/layout/projects/projectview/:id\">{{item.projecttitle}}</a>\r\n                                </td>\r\n                                <td>\r\n                                    <h2 class=\"table-avatar\">\r\n                                        <a routerLink=\"/layout/clientsprofile/:id\" class=\"avatar\"><img src=\"assets/img/profiles/avatar-19.jpg\" alt=\"\"></a>\r\n                                        <a routerLink=\"/layout/clientsprofile/:id\">{{item.clientname}}</a>\r\n                                    </h2>\r\n                                </td>\r\n                                <td>{{item.startdate}}</td>\r\n                                <td>{{item.expiredate}}</td>\r\n                                <td>\r\n                                    <div class=\"dropdown action-label\">\r\n                                        <a class=\"role-info role-bg-two\"><i class=\"fa fa-dot-circle-o text-success\"></i> {{item.status}} </a>\r\n                                        \r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <ul class=\"team-members\">\r\n                                        <li>\r\n                                            <a tooltip=\"John Doe\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a tooltip=\"Richard Miles\"><img alt=\"\" src=\"assets/img/profiles/avatar-09.jpg\"></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a tooltip=\"John Smith\"><img alt=\"\" src=\"assets/img/profiles/avatar-10.jpg\"></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a tooltip=\"Mike Litorus\"><img alt=\"\" src=\"assets/img/profiles/avatar-05.jpg\"></a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a class=\"all-users\">+15</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </td>\r\n                            </tr>\r\n                            \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <!-- /Content End -->\r\n        \r\n    </div>\r\n    <!-- /Page Content -->\r\n    \r\n</div>\r\n<!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 21096:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/projectreports/projectreports.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_projectreports_projectreports_module_ts.js.map