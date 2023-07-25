"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_studentcandidate_studentcandidate_module_ts"],{

/***/ 38297:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate-list/studentcandidate-list.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentcandidateListComponent": () => (/* binding */ StudentcandidateListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _studentcandidate_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentcandidate-list.component.html?ngResource */ 42646);
/* harmony import */ var _studentcandidate_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentcandidate-list.component.css?ngResource */ 72864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let StudentcandidateListComponent = class StudentcandidateListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.url = "candidate";
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
        this.LoadCandidate();
        this.addCandidateForm = this.formBuilder.group({
            EmailName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            CreateName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            PhoneName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.editCandidateForm = this.formBuilder.group({
            EmailName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            CreateName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            PhoneName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    // Get department list  Api Call
    LoadCandidate() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstCandidate = data;
            this.dtTrigger.next();
            this.rows = this.lstCandidate;
            this.srch = [...this.rows];
        });
    }
    // Add questions  Modal Api Call
    addCandidate() {
        if (this.addCandidateForm.valid) {
            let obj = {
                email: this.addCandidateForm.value.EmailName,
                createddate: this.addCandidateForm.value.CreateName,
                mobilenumber: this.addCandidateForm.value.PhoneName,
                id: 0,
                name: "John Doe",
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadCandidate();
            $("#add_employee").modal("hide");
            this.addCandidateForm.reset();
            this.toastr.success("Add candidate added sucessfully...!", "Success");
        }
    }
    editCandidate() {
        if (this.editCandidateForm.valid) {
            let obj = {
                email: this.editCandidateForm.value.EmailName,
                createddate: this.editCandidateForm.value.CreateName,
                mobilenumber: this.editCandidateForm.value.PhoneName,
                id: this.editId,
                name: "John Doe",
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadCandidate();
            $("#edit_job").modal("hide");
            this.toastr.success("Edit job Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editedvalue = value.email;
        this.editId = value.id;
        const index = this.lstCandidate.findIndex((item) => {
            return item.id === value.id;
        });
        let toSetValues = this.lstCandidate[index];
        this.editCandidateForm.setValue({
            EmailName: toSetValues.email,
            CreateName: toSetValues.createddate,
            PhoneName: toSetValues.mobilenumber,
        });
    }
    deleteCandidate() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.LoadCandidate();
            $("#delete_job").modal("hide");
            this.toastr.success("candidate deleted sucessfully..!", "Success");
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
StudentcandidateListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
StudentcandidateListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
StudentcandidateListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-studentcandidate-list',
        template: _studentcandidate_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_studentcandidate_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StudentcandidateListComponent);



/***/ }),

/***/ 74771:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentcandidateRoutingModule": () => (/* binding */ StudentcandidateRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _studentcandidate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentcandidate.component */ 14349);
/* harmony import */ var _studentcandidate_list_studentcandidate_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentcandidate-list/studentcandidate-list.component */ 38297);





const routes = [
    {
        path: "",
        component: _studentcandidate_component__WEBPACK_IMPORTED_MODULE_0__.StudentcandidateComponent,
        children: [
            {
                path: "candidates",
                component: _studentcandidate_list_studentcandidate_list_component__WEBPACK_IMPORTED_MODULE_1__.StudentcandidateListComponent
            }
        ]
    }
];
let StudentcandidateRoutingModule = class StudentcandidateRoutingModule {
};
StudentcandidateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], StudentcandidateRoutingModule);



/***/ }),

/***/ 14349:
/*!****************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentcandidateComponent": () => (/* binding */ StudentcandidateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _studentcandidate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentcandidate.component.html?ngResource */ 9415);
/* harmony import */ var _studentcandidate_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentcandidate.component.css?ngResource */ 33798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let StudentcandidateComponent = class StudentcandidateComponent {
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
StudentcandidateComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
StudentcandidateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-studentcandidate',
        template: _studentcandidate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_studentcandidate_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], StudentcandidateComponent);



/***/ }),

/***/ 94939:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentcandidateModule": () => (/* binding */ StudentcandidateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _studentcandidate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentcandidate-routing.module */ 74771);
/* harmony import */ var _studentcandidate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentcandidate.component */ 14349);
/* harmony import */ var _studentcandidate_list_studentcandidate_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentcandidate-list/studentcandidate-list.component */ 38297);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ 34785);











let StudentcandidateModule = class StudentcandidateModule {
};
StudentcandidateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_studentcandidate_component__WEBPACK_IMPORTED_MODULE_1__.StudentcandidateComponent, _studentcandidate_list_studentcandidate_list_component__WEBPACK_IMPORTED_MODULE_2__.StudentcandidateListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _studentcandidate_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentcandidateRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], StudentcandidateModule);



/***/ }),

/***/ 72864:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate-list/studentcandidate-list.component.css?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50Y2FuZGlkYXRlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 33798:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50Y2FuZGlkYXRlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 42646:
/*!********************************************************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate-list/studentcandidate-list.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n            <div class=\"page-wrapper\">\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Candidates List</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Candidates List</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t<div class=\"col-md-8\"></div>\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"add-emp-section\">\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_employee\"><i class=\"fas fa-plus\"></i> Add Candidates</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Mobile Number</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Created Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Action</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstCandidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"table-avatar\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/layout/profile/profilelist\">{{item.name}} </a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.mobilenumber}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.createddate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center ico-sec justify-content-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#edit_job\" (click)=\"edit(item)\"><i class=\"fas fa-pen\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\" (click)=\"tempId = item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n\t\t\t\t<div id=\"add_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Add Candidates</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"addCandidate()\" [formGroup]=\"addCandidateForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">First Name <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Last Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Email <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" [class.invalid]=\"addCandidateForm.get('EmailName').invalid && addCandidateForm.get('EmailName').touched\"\r\n                            formControlName=\"EmailName\">\r\n                            \t\t<div\r\n                            *ngIf=\"addCandidateForm.get('EmailName').invalid && addCandidateForm.get('EmailName').touched\">\r\n                            <small\r\n                                *ngIf=\"addCandidateForm.get('EmailName').invalid && addCandidateForm.get('EmailName').touched\"\r\n                                class=\"text-danger\"> *Email required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">  \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Employee ID <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">  \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Created Date <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker [class.invalid]=\"addCandidateForm.get('CreateName').invalid && addCandidateForm.get('CreateName').touched\"\r\n                            formControlName=\"CreateName\"></div>\r\n                            \t\t<div\r\n                            *ngIf=\"addCandidateForm.get('CreateName').invalid && addCandidateForm.get('CreateName').touched\">\r\n                            <small\r\n                                *ngIf=\"addCandidateForm.get('CreateName').invalid && addCandidateForm.get('CreateName').touched\"\r\n                                class=\"text-danger\"> *Date required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Phone </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [class.invalid]=\"addCandidateForm.get('PhoneName').invalid && addCandidateForm.get('PhoneName').touched\"\r\n                            formControlName=\"PhoneName\">\r\n                            \t<div\r\n                            *ngIf=\"addCandidateForm.get('PhoneName').invalid && addCandidateForm.get('PhoneName').touched\">\r\n                            <small\r\n                                *ngIf=\"addCandidateForm.get('PhoneName').invalid && addCandidateForm.get('PhoneName').touched\"\r\n                                class=\"text-danger\"> *Phone required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Submit</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<!-- Edit Job Modal -->\r\n\t\t\t\t<div id=\"edit_job\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Edit Candidates</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"editCandidate()\" [formGroup]=\"editCandidateForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">First Name <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Last Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Email <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" [class.invalid]=\"editCandidateForm.get('EmailName').invalid && editCandidateForm.get('EmailName').touched\"\r\n                            formControlName=\"EmailName\">\r\n                            \t<div\r\n                            *ngIf=\"editCandidateForm.get('EmailName').invalid && editCandidateForm.get('EmailName').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('EmailName').invalid && editCandidateForm.get('EmailName').touched\"\r\n                                class=\"text-danger\"> *Email required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">  \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Employee ID <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">  \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Created Date <span class=\"text-danger\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker [class.invalid]=\"editCandidateForm.get('CreateName').invalid && editCandidateForm.get('CreateName').touched\"\r\n                            formControlName=\"CreateName\"></div>\r\n                            \t<div\r\n                            *ngIf=\"editCandidateForm.get('CreateName').invalid && editCandidateForm.get('CreateName').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('CreateName').invalid && editCandidateForm.get('CreateName').touched\"\r\n                                class=\"text-danger\"> *Date required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label\">Phone </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [class.invalid]=\"editCandidateForm.get('PhoneName').invalid && editCandidateForm.get('PhoneName').touched\"\r\n                            formControlName=\"PhoneName\">\r\n                            <div\r\n                            *ngIf=\"editCandidateForm.get('PhoneName').invalid && editCandidateForm.get('PhoneName').touched\">\r\n                            <small\r\n                                *ngIf=\"editCandidateForm.get('PhoneName').invalid && editCandidateForm.get('PhoneName').touched\"\r\n                                class=\"text-danger\"> *Phone required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Save</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Edit Job Modal -->\r\n\r\n\t\t\t\t<!-- Delete Job Modal -->\r\n\t\t\t\t<div class=\"modal custom-modal fade\" id=\"delete_job\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-header\">\r\n\t\t\t\t\t\t\t\t\t<h3>Delete</h3>\r\n\t\t\t\t\t\t\t\t\t<p>Are you sure want to delete?</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-btn delete-action\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteCandidate()\">Delete</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Delete Job Modal -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t";

/***/ }),

/***/ 9415:
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/studentcandidate/studentcandidate.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = " <router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_studentcandidate_studentcandidate_module_ts.js.map