"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_jobs_jobs_module_ts"],{

/***/ 17379:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/jobs/jobs-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsRoutingModule": () => (/* binding */ JobsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.component */ 68625);
/* harmony import */ var _manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-jobs/manage-jobs.component */ 91128);
/* harmony import */ var _manage_jobs_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-jobs/job-details/job-details.component */ 50473);
/* harmony import */ var _manage_jobs_job_applicants_job_applicants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-jobs/job-applicants/job-applicants.component */ 2474);







const routes = [
    {
        path: "",
        component: _jobs_component__WEBPACK_IMPORTED_MODULE_0__.JobsComponent,
        children: [
            {
                path: "manage-jobs",
                component: _manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_1__.ManageJobsComponent
            },
            {
                path: "job-details",
                component: _manage_jobs_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__.JobDetailsComponent
            },
            {
                path: "job-applicants",
                component: _manage_jobs_job_applicants_job_applicants_component__WEBPACK_IMPORTED_MODULE_3__.JobApplicantsComponent
            },
        ]
    }
];
let JobsRoutingModule = class JobsRoutingModule {
};
JobsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], JobsRoutingModule);



/***/ }),

/***/ 68625:
/*!****************************************************!*\
  !*** ./src/app/all-modules/jobs/jobs.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsComponent": () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _jobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.component.html?ngResource */ 570);
/* harmony import */ var _jobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.component.css?ngResource */ 33280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let JobsComponent = class JobsComponent {
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
JobsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
JobsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-jobs',
        template: _jobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], JobsComponent);



/***/ }),

/***/ 36663:
/*!*************************************************!*\
  !*** ./src/app/all-modules/jobs/jobs.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsModule": () => (/* binding */ JobsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-routing.module */ 17379);
/* harmony import */ var _jobs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.component */ 68625);
/* harmony import */ var _manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-jobs/manage-jobs.component */ 91128);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _manage_jobs_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-jobs/job-details/job-details.component */ 50473);
/* harmony import */ var _manage_jobs_job_applicants_job_applicants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-jobs/job-applicants/job-applicants.component */ 2474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);












let JobsModule = class JobsModule {
};
JobsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_jobs_component__WEBPACK_IMPORTED_MODULE_1__.JobsComponent, _manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_2__.ManageJobsComponent, _manage_jobs_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_4__.JobDetailsComponent, _manage_jobs_job_applicants_job_applicants_component__WEBPACK_IMPORTED_MODULE_5__.JobApplicantsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__.BsDatepickerModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__.SharingModule
        ]
    })
], JobsModule);



/***/ }),

/***/ 2474:
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/job-applicants/job-applicants.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobApplicantsComponent": () => (/* binding */ JobApplicantsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _job_applicants_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-applicants.component.html?ngResource */ 69824);
/* harmony import */ var _job_applicants_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-applicants.component.css?ngResource */ 82678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);







let JobApplicantsComponent = class JobApplicantsComponent {
    constructor(allModuleService) {
        this.allModuleService = allModuleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "appliedCandidates";
        this.allAppliedCandidates = [];
    }
    ngOnInit() {
        this.getAppliedCandidates();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getAppliedCandidates() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allAppliedCandidates = data;
            this.dtTrigger.next();
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
JobApplicantsComponent.ctorParameters = () => [
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_3__.AllModulesService }
];
JobApplicantsComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, { static: false },] }]
};
JobApplicantsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-job-applicants",
        template: _job_applicants_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_job_applicants_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JobApplicantsComponent);



/***/ }),

/***/ 50473:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/job-details/job-details.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobDetailsComponent": () => (/* binding */ JobDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _job_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-details.component.html?ngResource */ 26230);
/* harmony import */ var _job_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-details.component.css?ngResource */ 65188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let JobDetailsComponent = class JobDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
JobDetailsComponent.ctorParameters = () => [];
JobDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-job-details',
        template: _job_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_job_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JobDetailsComponent);



/***/ }),

/***/ 91128:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/manage-jobs.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageJobsComponent": () => (/* binding */ ManageJobsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _manage_jobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-jobs.component.html?ngResource */ 98860);
/* harmony import */ var _manage_jobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-jobs.component.css?ngResource */ 81032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let ManageJobsComponent = class ManageJobsComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "manageJobs";
        this.allManageJobs = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
    }
    ngOnInit() {
        this.getManageJobs();
        // Add Provident Form Validation And Getting Values
        this.addManageJobs = this.formBuilder.group({
            addJobTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            addDepartment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            addStartDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            addExpireDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editManageJobs = this.formBuilder.group({
            editJobTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editDepartment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editStartDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editExpireDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getManageJobs() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allManageJobs = data;
            this.dtTrigger.next();
        });
    }
    // Add Provident Modal Api Call
    addJobs() {
        if (this.addManageJobs.valid) {
            let purchaseDateFormat = this.pipe.transform(this.addManageJobs.value.addStartDate, "dd-MM-yyyy");
            let purchaseToDateFormat = this.pipe.transform(this.addManageJobs.value.addExpireDate, "dd-MM-yyyy");
            let obj = {
                jobTitle: this.addManageJobs.value.addJobTitle,
                department: this.addManageJobs.value.addDepartment,
                startDate: purchaseDateFormat,
                expireDate: purchaseToDateFormat,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getManageJobs();
            $("#add_job").modal("hide");
            this.addManageJobs.reset();
            this.toastr.success("Job is added", "Success");
        }
    }
    // to know the date picker changes
    from(data) {
        this.purchaseDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
    }
    to(data) {
        this.purchaseToDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
    }
    // Edit Provident Modal Api Call
    editJobs() {
        let obj = {
            jobTitle: this.editManageJobs.value.editJobTitle,
            department: this.editManageJobs.value.editDepartment,
            startDate: this.purchaseDateFormat,
            expireDate: this.purchaseToDateFormat,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getManageJobs();
        $("#edit_job").modal("hide");
        this.toastr.success("Job is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allManageJobs.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allManageJobs[index];
        this.editManageJobs.setValue({
            editJobTitle: toSetValues.jobTitle,
            editDepartment: toSetValues.department,
            editStartDate: toSetValues.startDate,
            editExpireDate: toSetValues.expireDate,
        });
    }
    // Delete Provident Modal Api Call
    deleteJobs() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getManageJobs();
            $("#delete_job").modal("hide");
            this.toastr.success("Job is deleted", "Success");
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ManageJobsComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ManageJobsComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ManageJobsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-manage-jobs",
        template: _manage_jobs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manage_jobs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageJobsComponent);



/***/ }),

/***/ 85260:
/*!*******************************************!*\
  !*** ./src/app/sharing/sharing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharingModule": () => (/* binding */ SharingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/pipes/custom-date.pipe */ 53008);




let SharingModule = class SharingModule {
};
SharingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__.CustomDatePipe],
        exports: [
            src_assets_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_0__.CustomDatePipe,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], SharingModule);



/***/ }),

/***/ 53008:
/*!**********************************************!*\
  !*** ./src/assets/pipes/custom-date.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDatePipe": () => (/* binding */ CustomDatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);



let CustomDatePipe = class CustomDatePipe {
    transform(value, ...args) {
        let myDate = value;
        let changeFormat = myDate.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3");
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe('en-US').transform(changeFormat, 'MMM d, y');
    }
};
CustomDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'customDate'
    })
], CustomDatePipe);



/***/ }),

/***/ 33280:
/*!****************************************************************!*\
  !*** ./src/app/all-modules/jobs/jobs.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 82678:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/job-applicants/job-applicants.component.css?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItYXBwbGljYW50cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 65188:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/job-details/job-details.component.css?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 81032:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/manage-jobs.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Utam9icy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 570:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/jobs/jobs.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 69824:
/*!******************************************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/job-applicants/job-applicants.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Job Applicants</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Job Applicants</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Phone</th>\r\n                            <th>Apply Date</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th>Resume</th>\r\n                            <th class=\"text-end\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let appliedCandidates of allAppliedCandidates;let i = index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <td>{{appliedCandidates.name}}</td>\r\n                            <td>{{appliedCandidates.email}}</td>\r\n                            <td>{{appliedCandidates.phone}}</td>\r\n                            <td>{{appliedCandidates.applyDate}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-info\"></i> New\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            New</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Hired</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Rejected</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Interviewed</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td><a  class=\"role-info role-bg-one\"><i class=\"fa fa-download\"></i> Download</a>\r\n                            </td>\r\n                            <td class=\"text-end\">\r\n                                <div class=\"dropdown dropdown-action\">\r\n                                    <a  class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-clock-o m-r-5\"></i> Schedule\r\n                                            Interview</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 26230:
/*!************************************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/job-details/job-details.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3 class=\"page-title\">Job Details</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Job Details</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"job-info job-widget\">\r\n                <h3 class=\"job-title\">Android Developer</h3>\r\n                <span class=\"job-dept\">App Development</span>\r\n                <ul class=\"job-post-det\">\r\n                    <li><i class=\"fa fa-calendar\"></i> Post Date: <span class=\"text-blue\">Feb 18, 2019</span></li>\r\n                    <li><i class=\"fa fa-calendar\"></i> Last Date: <span class=\"text-blue\">May 31, 2019</span></li>\r\n                    <li><i class=\"far fa-user\"></i> Applications: <span class=\"text-blue\">4</span></li>\r\n                    <li><i class=\"fa fa-eye\"></i> Views: <span class=\"text-blue\">3806</span></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"job-content job-widget\">\r\n                <div class=\"job-desc-title\">\r\n                    <h4>Job Description</h4>\r\n                </div>\r\n                <div class=\"job-description\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r\n                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n                </div>\r\n                <div class=\"job-desc-title\">\r\n                    <h4>Job Description</h4>\r\n                </div>\r\n                <div class=\"job-description\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\r\n                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n                    <ul class=\"square-list\">\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"job-det-info job-widget\">\r\n                <a class=\"btn job-btn\"  data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\">Edit</a>\r\n                <div class=\"info-list\">\r\n                    <span><i class=\"fas fa-chart-bar\"></i></span>\r\n                    <h5>Job Type</h5>\r\n                    <p> Full Time</p>\r\n                </div>\r\n                <div class=\"info-list\">\r\n                    <span><i class=\"far fa-money-bill-alt\"></i></span>\r\n                    <h5>Salary</h5>\r\n                    <p>$32k - $38k</p>\r\n                </div>\r\n                <div class=\"info-list\">\r\n                    <span><i class=\"fas fa-suitcase\"></i></span>\r\n                    <h5>Experience</h5>\r\n                    <p>2 Years</p>\r\n                </div>\r\n                <div class=\"info-list\">\r\n                    <span><i class=\"fas fa-ticket-alt\"></i></span>\r\n                    <h5>Vacancy</h5>\r\n                    <p>5</p>\r\n                </div>\r\n                <div class=\"info-list\">\r\n                    <span><i class=\"fa fa-map-signs\"></i></span>\r\n                    <h5>Location</h5>\r\n                    <p> Dreamguy's Technologies\r\n                        <br> 3864 Quiet Valley Lane,\r\n                        <br> Sherman Oaks,\r\n                        <br> California, 91403</p>\r\n                </div>\r\n                <div class=\"info-list\">\r\n                    <p class=\"text-truncate\"> 818-978-7102\r\n                        <br> <a href=\"mailto:danielporter@example.com\"\r\n                            title=\"danielporter@example.com\">danielporter@example.com</a>\r\n                        <br> <a href=\"https://www.example.com\" target=\"_blank\"\r\n                            title=\"https://www.example.com\">https://www.example.com</a>\r\n                    </p>\r\n                </div>\r\n                <div class=\"info-list text-center\">\r\n                    <a class=\"app-ends\" >Application ends in 2d 7h 6m</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Edit Job Modal -->\r\n<div id=\"edit_job\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Job</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Title</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"Web Developer\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Department</label>\r\n                                <select class=\"form-select\">\r\n                                    <option>-</option>\r\n                                    <option selected>Web Development</option>\r\n                                    <option>Application Development</option>\r\n                                    <option>IT Management</option>\r\n                                    <option>Accounts Management</option>\r\n                                    <option>Support Management</option>\r\n                                    <option>Marketing</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Location</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"California\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>No of Vacancies</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"5\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Experience</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"2 Years\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Age</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"-\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary From</label>\r\n                                <input type=\"text\" class=\"form-control\" value=\"32k\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary To</label>\r\n                                <input type=\"text\" class=\"form-control\" value=\"38k\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Type</label>\r\n                                <select class=\"form-select\">\r\n                                    <option selected>Full Time</option>\r\n                                    <option>Part Time</option>\r\n                                    <option>Internship</option>\r\n                                    <option>Temporary</option>\r\n                                    <option>Remote</option>\r\n                                    <option>Others</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select\">\r\n                                    <option selected>Open</option>\r\n                                    <option>Closed</option>\r\n                                    <option>Cancelled</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date</label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" value=\"3 Mar 2019\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expired Date</label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" value=\"31 May 2019\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Job Modal -->";

/***/ }),

/***/ 98860:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/jobs/manage-jobs/manage-jobs.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Jobs</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Jobs</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_job\"><i class=\"fas fa-plus\"></i> Add Job</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Job Title</th>\r\n                            <th>Department</th>\r\n                            <th>Start Date</th>\r\n                            <th>Expire Date</th>\r\n                            <th class=\"text-center\">Job Type</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th>Applicants</th>\r\n                            <th class=\"text-end\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let manageJobs of allManageJobs;let i = index\">\r\n                            <td>{{ 1 + i }}</td>\r\n                            <td><a routerLink=\"/layout/jobs/job-details\">{{manageJobs.jobTitle}}</a></td>\r\n                            <td>{{manageJobs.department}}</td>\r\n                            <td>{{manageJobs.startDate | customDate}}</td>\r\n                            <td>{{manageJobs.expireDate | customDate}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-one dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Full Time\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            Full Time</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Part Time</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Internship</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-warning\"></i> Temporary</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-warning\"></i> Other</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Open\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            Open</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Closed</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Cancelled</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td><a routerLink=\"/layout/jobs/job-applicants\" class=\"role-info role-bg-three\">3 Candidates</a></td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\" (click)=\"edit(manageJobs.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\" (click)=\"tempId = manageJobs.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allManageJobs.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n<!-- Add Job Modal -->\r\n<div id=\"add_job\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Job</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addJobs()\" [formGroup]=\"addManageJobs\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Title</label>\r\n                                <input class=\"form-control\" type=\"text\"  [class.invalid]=\"addManageJobs.get('addJobTitle').invalid && addManageJobs.get('addJobTitle').touched\"\r\n                                formControlName=\"addJobTitle\">\r\n                                <div\r\n                                *ngIf=\"addManageJobs.get('addJobTitle').invalid && addManageJobs.get('addJobTitle').touched\">\r\n                                <small\r\n                                    *ngIf=\"addManageJobs.get('addJobTitle').invalid && addManageJobs.get('addJobTitle').touched\"\r\n                                    class=\"text-danger\"> *Job title is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Department</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"addManageJobs.get('addDepartment').invalid && addManageJobs.get('addDepartment').touched\"\r\n                                formControlName=\"addDepartment\">\r\n                                    <option>-</option>\r\n                                    <option>Web Development</option>\r\n                                    <option>Application Development</option>\r\n                                    <option>IT Management</option>\r\n                                    <option>Accounts Management</option>\r\n                                    <option>Support Management</option>\r\n                                    <option>Marketing</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"addManageJobs.get('addDepartment').invalid && addManageJobs.get('addDepartment').touched\">\r\n                                <small\r\n                                    *ngIf=\"addManageJobs.get('addDepartment').invalid && addManageJobs.get('addDepartment').touched\"\r\n                                    class=\"text-danger\"> *Department is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Location</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>No of Vacancies</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Experience</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Age</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary From</label>\r\n                                <input type=\"text\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary To</label>\r\n                                <input type=\"text\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Type</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option>Full Time</option>\r\n                                    <option>Part Time</option>\r\n                                    <option>Internship</option>\r\n                                    <option>Temporary</option>\r\n                                    <option>Remote</option>\r\n                                    <option>Others</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option>Open</option>\r\n                                    <option>Closed</option>\r\n                                    <option>Cancelled</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date</label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"addManageJobs.get('addStartDate').invalid && addManageJobs.get('addStartDate').touched\"\r\n                                formControlName=\"addStartDate\">\r\n                                <div\r\n                                *ngIf=\"addManageJobs.get('addStartDate').invalid && addManageJobs.get('addStartDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"addManageJobs.get('addStartDate').invalid && addManageJobs.get('addStartDate').touched\"\r\n                                    class=\"text-danger\"> *Start date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expired Date</label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"addManageJobs.get('addExpireDate').invalid && addManageJobs.get('addExpireDate').touched\"\r\n                                formControlName=\"addExpireDate\">\r\n                                <div\r\n                                *ngIf=\"addManageJobs.get('addExpireDate').invalid && addManageJobs.get('addExpireDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"addManageJobs.get('addExpireDate').invalid && addManageJobs.get('addExpireDate').touched\"\r\n                                    class=\"text-danger\"> *Expire date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Job Modal -->\r\n\r\n<!-- Edit Job Modal -->\r\n<div id=\"edit_job\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Job</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editJobs()\" [formGroup]=\"editManageJobs\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Title</label>\r\n                                <input class=\"form-control\" type=\"text\"  [class.invalid]=\"editManageJobs.get('editJobTitle').invalid && editManageJobs.get('editJobTitle').touched\"\r\n                                formControlName=\"editJobTitle\">\r\n                                <div\r\n                                *ngIf=\"editManageJobs.get('editJobTitle').invalid && editManageJobs.get('editJobTitle').touched\">\r\n                                <small\r\n                                    *ngIf=\"editManageJobs.get('editJobTitle').invalid && editManageJobs.get('editJobTitle').touched\"\r\n                                    class=\"text-danger\"> *Job Title is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Department</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"editManageJobs.get('editDepartment').invalid && editManageJobs.get('editDepartment').touched\"\r\n                                formControlName=\"editDepartment\">\r\n                                    <option>-</option>\r\n                                    <option selected>Web Development</option>\r\n                                    <option>Application Development</option>\r\n                                    <option>IT Management</option>\r\n                                    <option>Accounts Management</option>\r\n                                    <option>Support Management</option>\r\n                                    <option>Marketing</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editManageJobs.get('editDepartment').invalid && editManageJobs.get('editDepartment').touched\">\r\n                                <small\r\n                                    *ngIf=\"editManageJobs.get('editDepartment').invalid && editManageJobs.get('editDepartment').touched\"\r\n                                    class=\"text-danger\"> *Department is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Location</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"California\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>No of Vacancies</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"5\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Experience</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"2 Years\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Age</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"-\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary From</label>\r\n                                <input type=\"text\" class=\"form-control\" value=\"32k\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary To</label>\r\n                                <input type=\"text\" class=\"form-control\" value=\"38k\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Type</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option selected>Full Time</option>\r\n                                    <option>Part Time</option>\r\n                                    <option>Internship</option>\r\n                                    <option>Temporary</option>\r\n                                    <option>Remote</option>\r\n                                    <option>Others</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option selected>Open</option>\r\n                                    <option>Closed</option>\r\n                                    <option>Cancelled</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date</label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"editManageJobs.get('editStartDate').invalid && editManageJobs.get('editStartDate').touched\"\r\n                                formControlName=\"editStartDate\" (bsValueChange)=\"from($event)\">\r\n                                <div\r\n                                *ngIf=\"editManageJobs.get('editStartDate').invalid && editManageJobs.get('editStartDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"editManageJobs.get('editStartDate').invalid && editManageJobs.get('editStartDate').touched\"\r\n                                    class=\"text-danger\"> *Start Date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expired Date</label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"editManageJobs.get('editExpireDate').invalid && editManageJobs.get('editExpireDate').touched\"\r\n                                formControlName=\"editExpireDate\" (bsValueChange)=\"to($event)\">\r\n                                <div\r\n                                *ngIf=\"editManageJobs.get('editExpireDate').invalid && editManageJobs.get('editExpireDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"editManageJobs.get('editExpireDate').invalid && editManageJobs.get('editExpireDate').touched\"\r\n                                    class=\"text-danger\"> *Expired Date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Job Modal -->\r\n\r\n<!-- Delete Job Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_job\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Job</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteJobs()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Job Modal -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_jobs_jobs_module_ts.js.map