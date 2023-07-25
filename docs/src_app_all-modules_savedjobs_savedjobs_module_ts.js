"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_savedjobs_savedjobs_module_ts"],{

/***/ 88650:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs-list/savedjobs-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedjobsListComponent": () => (/* binding */ SavedjobsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _savedjobs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedjobs-list.component.html?ngResource */ 41919);
/* harmony import */ var _savedjobs_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savedjobs-list.component.css?ngResource */ 11430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);









let SavedjobsListComponent = class SavedjobsListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        // public lstUseralljobs: any[];
        this.url = "savedjobs";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.LoadSavedjobs();
    }
    // Get department list  Api Call
    LoadSavedjobs() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstSavedjobs = data;
            this.dtTrigger.next();
            this.rows = this.lstSavedjobs;
            this.srch = [...this.rows];
        });
    }
    deleteSavedjobs() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.LoadSavedjobs();
            $("#delete_savedjobslist").modal("hide");
            this.toastr.success("Saved-jobs deleted sucessfully..!", "Success");
        });
    }
    //search by Department
    searchDepartment(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.department.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by jobtype
    searchJobtype(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.jobtype.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by designation
    searchJobtitle(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.jobtitle.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
SavedjobsListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
SavedjobsListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
SavedjobsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-savedjobs-list',
        template: _savedjobs_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_savedjobs_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SavedjobsListComponent);



/***/ }),

/***/ 6675:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedjobsRoutingModule": () => (/* binding */ SavedjobsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _savedjobs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedjobs.component */ 15610);
/* harmony import */ var _savedjobs_list_savedjobs_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savedjobs-list/savedjobs-list.component */ 88650);





const routes = [
    {
        path: "",
        component: _savedjobs_component__WEBPACK_IMPORTED_MODULE_0__.SavedjobsComponent,
        children: [
            {
                path: "saved-jobs",
                component: _savedjobs_list_savedjobs_list_component__WEBPACK_IMPORTED_MODULE_1__.SavedjobsListComponent
            }
        ]
    }
];
let SavedjobsRoutingModule = class SavedjobsRoutingModule {
};
SavedjobsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], SavedjobsRoutingModule);



/***/ }),

/***/ 15610:
/*!**************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedjobsComponent": () => (/* binding */ SavedjobsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _savedjobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedjobs.component.html?ngResource */ 71969);
/* harmony import */ var _savedjobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savedjobs.component.css?ngResource */ 12795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SavedjobsComponent = class SavedjobsComponent {
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
SavedjobsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
SavedjobsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-savedjobs',
        template: _savedjobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_savedjobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], SavedjobsComponent);



/***/ }),

/***/ 94707:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedjobsModule": () => (/* binding */ SavedjobsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _savedjobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savedjobs-routing.module */ 6675);
/* harmony import */ var _savedjobs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savedjobs.component */ 15610);
/* harmony import */ var _savedjobs_list_savedjobs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savedjobs-list/savedjobs-list.component */ 88650);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








let SavedjobsModule = class SavedjobsModule {
};
SavedjobsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_savedjobs_component__WEBPACK_IMPORTED_MODULE_1__.SavedjobsComponent, _savedjobs_list_savedjobs_list_component__WEBPACK_IMPORTED_MODULE_2__.SavedjobsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _savedjobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.SavedjobsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule
        ]
    })
], SavedjobsModule);



/***/ }),

/***/ 11430:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs-list/savedjobs-list.component.css?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlZGpvYnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 12795:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlZGpvYnMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 41919:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs-list/savedjobs-list.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Saved Jobs</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Saved Jobs</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<!-- Content Starts -->\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<!-- <h4 class=\"card-title\">Solid justified</h4> -->\r\n\t\t\t\t\t\t\t<ul class=\"nav nav-tabs nav-tabs-solid nav-justified\">\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/userdashboard/user-dashboard\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/useralljobs/user-all-jobs\">All </a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" routerLink=\"/layout/savedjobs/saved-jobs\">Saved</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/appliedjobs/applied-jobs\">Applied</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/interviewing/interviewing\">Interviewing</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/offeredjobs/offered-jobs\">Offered</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/visitedjobs/visited-jobs\">Visitied </a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/layout/archivedjobs/archived-jobs\">Archived </a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\" (input)=\"searchDepartment($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select</option>\r\n\t\t\t\t\t\t\t\t\t<option>Development</option>\r\n\t\t\t\t\t\t\t\t\t<option>Designing</option>\r\n\t\t\t\t\t\t\t\t\t<option>Android</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Department</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\" (input)=\"searchJobtype($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select</option>\r\n\t\t\t\t\t\t\t\t\t<option>Full Time</option>\r\n\t\t\t\t\t\t\t\t\t<option>Part Time</option>\r\n\t\t\t\t\t\t\t\t\t<option>Internship</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Job Type</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group form-focus select-focus mb-0\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-select form-control floating\" (input)=\"searchJobtitle($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t<option>Select Designation</option>\r\n\t\t\t\t\t\t\t\t\t<option>Web Developer</option>\r\n\t\t\t\t\t\t\t\t\t<option>Web Designer</option>\r\n\t\t\t\t\t\t\t\t\t<option>Android Developer</option>\r\n\t\t\t\t\t\t\t\t\t<option>Ios Developer</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label class=\"focus-label\">Designation</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-3\">  \r\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Start Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Expire Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Job Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstSavedjobs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">{{item.jobtitle}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.startdate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.expiredate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.jobtype}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-one\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.status}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center ico-sec\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_employee\" (click)=\"tempId = item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<!-- /Content End -->\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->\r\n\r\n\t\t<!-- Delete Employee Modal -->\r\n\t\t<div class=\"modal custom-modal fade\" id=\"delete_savedjobslist\" role=\"dialog\">\r\n\t\t\t<div class=\"modal-dialog modal-dialog-centered\">\r\n\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-header\">\r\n\t\t\t\t\t\t\t<h3>Delete</h3>\r\n\t\t\t\t\t\t\t<p>Are you sure want to delete?</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"modal-btn delete-action\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteSavedjobs()\">Delete</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /Delete Employee Modal -->\r\n\t</div>";

/***/ }),

/***/ 71969:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/savedjobs/savedjobs.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_savedjobs_savedjobs_module_ts.js.map