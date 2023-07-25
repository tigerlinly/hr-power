"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_userreports_userreports_module_ts"],{

/***/ 30782:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports-list/userreports-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserreportsListComponent": () => (/* binding */ UserreportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _userreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userreports-list.component.html?ngResource */ 38591);
/* harmony import */ var _userreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userreports-list.component.css?ngResource */ 55515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);





let UserreportsListComponent = class UserreportsListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.url = "userreports";
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
UserreportsListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
UserreportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-userreports-list',
        template: _userreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_userreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserreportsListComponent);



/***/ }),

/***/ 54066:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserreportsRoutingModule": () => (/* binding */ UserreportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _userreports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userreports.component */ 86673);
/* harmony import */ var _userreports_list_userreports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userreports-list/userreports-list.component */ 30782);





const routes = [
    {
        path: "",
        component: _userreports_component__WEBPACK_IMPORTED_MODULE_0__.UserreportsComponent,
        children: [
            {
                path: "user-reports",
                component: _userreports_list_userreports_list_component__WEBPACK_IMPORTED_MODULE_1__.UserreportsListComponent
            }
        ]
    }
];
let UserreportsRoutingModule = class UserreportsRoutingModule {
};
UserreportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], UserreportsRoutingModule);



/***/ }),

/***/ 86673:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserreportsComponent": () => (/* binding */ UserreportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _userreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userreports.component.html?ngResource */ 33192);
/* harmony import */ var _userreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userreports.component.css?ngResource */ 29326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let UserreportsComponent = class UserreportsComponent {
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
UserreportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
UserreportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-userreports',
        template: _userreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_userreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], UserreportsComponent);



/***/ }),

/***/ 45117:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserreportsModule": () => (/* binding */ UserreportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _userreports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userreports-routing.module */ 54066);
/* harmony import */ var _userreports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userreports.component */ 86673);
/* harmony import */ var _userreports_list_userreports_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userreports-list/userreports-list.component */ 30782);






let UserreportsModule = class UserreportsModule {
};
UserreportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_userreports_component__WEBPACK_IMPORTED_MODULE_1__.UserreportsComponent, _userreports_list_userreports_list_component__WEBPACK_IMPORTED_MODULE_2__.UserreportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _userreports_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserreportsRoutingModule
        ]
    })
], UserreportsModule);



/***/ }),

/***/ 55515:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports-list/userreports-list.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VycmVwb3J0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 29326:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VycmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 38591:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports-list/userreports-list.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>User Reports</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">User Reports</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\">\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tName1\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t\tName2\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">User Role</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n\t\t\t\t\t\t</div>     \r\n                    </div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-striped custom-table\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Company</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Role</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Designation</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let students of lstStudents;let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img src=\"assets/img/profiles/avatar-19.jpg\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\">{{students.name1}} <span>{{students.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.company}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"role-info role-bg-one\">{{students.role}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{students.designation}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\"> {{students.status}} </a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                \r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 33192:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/userreports/userreports.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_userreports_userreports_module_ts.js.map