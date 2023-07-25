"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_manageresume_manageresume_module_ts"],{

/***/ 25553:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume-list/manageresume-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageresumeListComponent": () => (/* binding */ ManageresumeListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _manageresume_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageresume-list.component.html?ngResource */ 34935);
/* harmony import */ var _manageresume_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageresume-list.component.css?ngResource */ 89451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let ManageresumeListComponent = class ManageresumeListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "manage";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
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
        this.LoadManage();
        this.editCandidateForm = this.formBuilder.group({
            JobName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Department: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            JobType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Startdate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Expiredate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    //Get department list  Api Call
    LoadManage() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstManage = data;
            // console.log(this.lstManage);
            // this.dtTrigger.next();
            this.rows = this.lstManage;
            this.srch = [...this.rows];
        });
    }
    from(data) {
        this.editPurchaseToDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
    }
    editCandidate() {
        if (this.editCandidateForm.valid) {
            let obj = {
                jobtitle: this.editCandidateForm.value.JobName,
                department: this.editCandidateForm.value.Department,
                jobtype: this.editCandidateForm.value.JobType,
                status: this.editCandidateForm.value.Status,
                startdate: this.editCandidateForm.value.editPurchaseToDateFormat,
                expiredate: this.editCandidateForm.value.editPurchaseToDateFormat,
                id: this.editId,
                name1: "John Doe",
                name2: "Web Designer",
                resume: "Download"
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.LoadManage();
            $("#edit_job").modal("hide");
            this.toastr.success("Edit manageresume Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editedvalue = value.jobtitle;
        this.editId = value.id;
        const index = this.lstManage.findIndex((item) => {
            return item.id === value.id;
        });
        let toSetValues = this.lstManage[index];
        this.editCandidateForm.setValue({
            JobName: toSetValues.jobtitle,
            Department: toSetValues.department,
            JobType: toSetValues.jobtype,
            Status: toSetValues.status,
            Startdate: toSetValues.startdate,
            Expiredate: toSetValues.expiredate,
        });
    }
    deleteManage() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.LoadManage();
        $("#delete_job").modal("hide");
        this.toastr.success("Manageresume deleted sucessfully..!", "Success");
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ManageresumeListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ManageresumeListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ManageresumeListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-manageresume-list',
        template: _manageresume_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manageresume_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageresumeListComponent);



/***/ }),

/***/ 42439:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageresumeRoutingModule": () => (/* binding */ ManageresumeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _manageresume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageresume.component */ 27088);
/* harmony import */ var _manageresume_list_manageresume_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageresume-list/manageresume-list.component */ 25553);





const routes = [
    {
        path: "",
        component: _manageresume_component__WEBPACK_IMPORTED_MODULE_0__.ManageresumeComponent,
        children: [
            {
                path: "manage-resumes",
                component: _manageresume_list_manageresume_list_component__WEBPACK_IMPORTED_MODULE_1__.ManageresumeListComponent
            }
        ]
    }
];
let ManageresumeRoutingModule = class ManageresumeRoutingModule {
};
ManageresumeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ManageresumeRoutingModule);



/***/ }),

/***/ 27088:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageresumeComponent": () => (/* binding */ ManageresumeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _manageresume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageresume.component.html?ngResource */ 97634);
/* harmony import */ var _manageresume_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageresume.component.css?ngResource */ 38464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ManageresumeComponent = class ManageresumeComponent {
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
ManageresumeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ManageresumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-manageresume',
        template: _manageresume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manageresume_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ManageresumeComponent);



/***/ }),

/***/ 91708:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageresumeModule": () => (/* binding */ ManageresumeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _manageresume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageresume-routing.module */ 42439);
/* harmony import */ var _manageresume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageresume.component */ 27088);
/* harmony import */ var _manageresume_list_manageresume_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageresume-list/manageresume-list.component */ 25553);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ 34785);











let ManageresumeModule = class ManageresumeModule {
};
ManageresumeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_manageresume_component__WEBPACK_IMPORTED_MODULE_1__.ManageresumeComponent, _manageresume_list_manageresume_list_component__WEBPACK_IMPORTED_MODULE_2__.ManageresumeListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _manageresume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageresumeRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], ManageresumeModule);



/***/ }),

/***/ 89451:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume-list/manageresume-list.component.css?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyZXN1bWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 38464:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyZXN1bWUuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 34935:
/*!********************************************************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume-list/manageresume-list.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Manage Resumes</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Manage Resumes</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\" id=\"datatable\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Job Title</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Start Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Expire Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Job Type</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Resume</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-end\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstManage\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\">{{item.name1}} <span>{{item.name2}}</span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a routerLink=\"/layout/jobs/job-details\">{{item.jobtitle}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.department}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.startdate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.expiredate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-one dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.jobtype}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-info\"></i> Full Time</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i> Part Time</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i> Internship</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-warning\"></i> Temporary</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-warning\"></i> Other</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown action-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"role-info role-bg-two dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.status}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-info\"></i> Open</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i> Closed</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i> Cancelled</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"javascript:void(0);\" class=\"role-info role-bg-three\"><i class=\"fa fa-download me-1\"></i> {{item.resume}}</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-end ico-sec justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\" (click)=\"edit(item)\"><i class=\"fas fa-pen\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<!-- Edit Job Modal -->\r\n\t\t\t\t<div id=\"edit_job\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Edit Job</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"editCandidate()\" [formGroup]=\"editCandidateForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Job Title</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"Web Developer\" [class.invalid]=\"editCandidateForm.get('JobName').invalid && editCandidateForm.get('JobName').touched\"\r\n                            formControlName=\"JobName\">\r\n                            <div\r\n                            *ngIf=\"editCandidateForm.get('JobName').invalid && editCandidateForm.get('JobName').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('JobName').invalid && editCandidateForm.get('JobName').touched\"\r\n                                class=\"text-danger\"> *Job title required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-select form-control\" [class.invalid]=\"editCandidateForm.get('Department').invalid && editCandidateForm.get('Department').touched\"\r\n                            formControlName=\"Department\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>-</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Web Development</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Application Development</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>IT Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Accounts Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Support Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Marketing</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"editCandidateForm.get('Department').invalid && editCandidateForm.get('Department').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('Department').invalid && editCandidateForm.get('Department').touched\"\r\n                                class=\"text-danger\"> *Department required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Job Location</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"California\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>No of Vacancies</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"5\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Experience</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"2 Years\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Age</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"-\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Salary From</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"32k\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Salary To</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"38k\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Job Type</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-select form-control\" [class.invalid]=\"editCandidateForm.get('JobType').invalid && editCandidateForm.get('JobType').touched\"\r\n                            formControlName=\"JobType\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Full Time</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Part Time</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Internship</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Temporary</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Remote</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Others</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"editCandidateForm.get('JobType').invalid && editCandidateForm.get('JobType').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('JobType').invalid && editCandidateForm.get('JobType').touched\"\r\n                                class=\"text-danger\"> *Job type required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Status</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-select form-control\" [class.invalid]=\"editCandidateForm.get('Status').invalid && editCandidateForm.get('Status').touched\"\r\n                            formControlName=\"Status\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Open</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Closed</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Cancelled</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"editCandidateForm.get('Status').invalid && editCandidateForm.get('Status').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('Status').invalid && editCandidateForm.get('Status').touched\"\r\n                                class=\"text-danger\"> *Status required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Start Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datetimepicker\" bsDatepicker value=\"3 Mar 2019\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"editCandidateForm.get('Startdate').invalid && editCandidateForm.get('Startdate').touched\"\r\n                            formControlName=\"Startdate\">\r\n                            \t\t\t\t\t<div\r\n                            *ngIf=\"editCandidateForm.get('Startdate').invalid && editCandidateForm.get('Startdate').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('Startdate').invalid && editCandidateForm.get('Startdate').touched\"\r\n                                class=\"text-danger\"> *Start date required</small>\r\n                        </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Expired Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control datetimepicker\" bsDatepicker value=\"31 May 2019\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"editCandidateForm.get('Expiredate').invalid && editCandidateForm.get('Expiredate').touched\"\r\n                            formControlName=\"Expiredate\">\r\n                            \t\t\t\t<div\r\n                            *ngIf=\"editCandidateForm.get('Expiredate').invalid && editCandidateForm.get('Expiredate').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('Expiredate').invalid && editCandidateForm.get('Expiredate').touched\"\r\n                                class=\"text-danger\"> *Expired date required</small>\r\n                        </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Save</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Edit Job Modal -->\r\n\r\n\t\t\t\t<!-- Delete Job Modal -->\r\n\t\t\t\t<div class=\"modal custom-modal fade\" id=\"delete_job\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-header\">\r\n\t\t\t\t\t\t\t\t\t<h3>Delete</h3>\r\n\t\t\t\t\t\t\t\t\t<p>Are you sure want to delete?</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-btn delete-action\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteManage()\">Delete</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Delete Job Modal -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 97634:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/manageresume/manageresume.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_manageresume_manageresume_module_ts.js.map