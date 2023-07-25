"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_resignation_resignation_module_ts"],{

/***/ 94712:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation-main/resignation-main.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResignationMainComponent": () => (/* binding */ ResignationMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resignation_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resignation-main.component.html?ngResource */ 62541);
/* harmony import */ var _resignation_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resignation-main.component.css?ngResource */ 54407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let ResignationMainComponent = class ResignationMainComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "resignationmain";
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
    }
    ngOnInit() {
        this.loadResignation();
        this.dtOptions = {
            // ... skipped ...
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.addResignForm = this.formBuilder.group({
            EmployeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            NoticeDated: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ResignationDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ReasonName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.editResignForm = this.formBuilder.group({
            EmployeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            NoticeDated: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ResignationDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ReasonName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    // Get  resignation Api Call
    loadResignation() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstResignation = data;
            this.rows = this.lstResignation;
            this.srch = [...this.rows];
        });
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    // Add Resignation  Modal Api Call
    addResignation() {
        if (this.addResignForm.invalid) {
            this.markFormGroupTouched(this.addResignForm);
            return;
        }
        if (this.addResignForm.valid) {
            let noticedDate = this.pipe.transform(this.addResignForm.value.NoticeDated, "dd-MM-yyyy");
            let resignationDate = this.pipe.transform(this.addResignForm.value.ResignationDate, "dd-MM-yyyy");
            let obj = {
                employee: this.addResignForm.value.EmployeeName,
                department: "Web development",
                noticedDate: noticedDate,
                resignDate: resignationDate,
                reason: this.addResignForm.value.ReasonName,
                id: 0,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadResignation();
            $("#add_resignation").modal("hide");
            this.addResignForm.reset();
            this.toastr.success("Resignation added sucessfully...!", "Success");
        }
    }
    // to know the date picker changes
    from(data) {
        this.NoticedDate = this.pipe.transform(data, "dd-MM-yyyy");
    }
    to(data) {
        this.ResignDate = this.pipe.transform(data, "dd-MM-yyyy");
    }
    //update api call
    editResignation() {
        if (this.editResignForm.valid) {
            let obj = {
                employee: this.editResignForm.value.EmployeeName,
                department: "Web development",
                noticedDate: this.NoticedDate,
                resignDate: this.ResignDate,
                reason: this.editResignForm.value.ReasonName,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadResignation();
            $("#edit_resignation").modal("hide");
            this.toastr.success("Resignation Updated sucessfully...!", "Success");
        }
    }
    // To Get The goal type Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstResignation.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstResignation[index];
        this.editResignForm.setValue({
            EmployeeName: toSetValues.employee,
            NoticeDated: toSetValues.noticedDate,
            ResignationDate: toSetValues.resignDate,
            ReasonName: toSetValues.reason,
        });
    }
    // delete api call
    deleteResignation() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.loadResignation();
        $("#delete_resignation").modal("hide");
        this.toastr.success("Resignation  deleted sucessfully..!", "Success");
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ResignationMainComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ResignationMainComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ResignationMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-resignation-main",
        template: _resignation_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resignation_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResignationMainComponent);



/***/ }),

/***/ 84877:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResignationRoutingModule": () => (/* binding */ ResignationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _resignation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resignation.component */ 16182);
/* harmony import */ var _resignation_main_resignation_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resignation-main/resignation-main.component */ 94712);





const routes = [
    {
        path: "",
        component: _resignation_component__WEBPACK_IMPORTED_MODULE_0__.ResignationComponent,
        children: [
            {
                path: "resignationmain",
                component: _resignation_main_resignation_main_component__WEBPACK_IMPORTED_MODULE_1__.ResignationMainComponent
            }
        ]
    }
];
let ResignationRoutingModule = class ResignationRoutingModule {
};
ResignationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ResignationRoutingModule);



/***/ }),

/***/ 16182:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResignationComponent": () => (/* binding */ ResignationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resignation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resignation.component.html?ngResource */ 64833);
/* harmony import */ var _resignation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resignation.component.css?ngResource */ 43327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ResignationComponent = class ResignationComponent {
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
ResignationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ResignationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-resignation',
        template: _resignation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resignation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ResignationComponent);



/***/ }),

/***/ 25555:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResignationModule": () => (/* binding */ ResignationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _resignation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resignation-routing.module */ 84877);
/* harmony import */ var _resignation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resignation.component */ 16182);
/* harmony import */ var _resignation_main_resignation_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resignation-main/resignation-main.component */ 94712);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);










let ResignationModule = class ResignationModule {
};
ResignationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_resignation_component__WEBPACK_IMPORTED_MODULE_1__.ResignationComponent, _resignation_main_resignation_main_component__WEBPACK_IMPORTED_MODULE_2__.ResignationMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
            _resignation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResignationRoutingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule
        ]
    })
], ResignationModule);



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

/***/ 54407:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation-main/resignation-main.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNpZ25hdGlvbi1tYWluLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 43327:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNpZ25hdGlvbi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 62541:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation-main/resignation-main.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Resignation</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Resignation</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_resignation\"><i class=\"fas fa-plus\"></i> Add Resignation</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"datatable\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Resigning Employee </th>\r\n                            <th>Department </th>\r\n                            <th>Reason </th>\r\n                            <th>Notice Date </th>\r\n                            <th>Resignation Date </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstResignation;let i = index\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar blue-link\">\r\n                                    <a routerLink=\"/layout/profile/profilelist\" class=\"avatar\">\r\n                                        <img alt=\"\" src=\"{{item.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{item.employee}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{item.department}}</td>\r\n                            <td>{{item.reason}}</td>\r\n                            <td>{{item.noticedDate | customDate}}</td>\r\n                            <td>{{item.resignDate | customDate}}</td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_resignation\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_resignation\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Resignation Modal -->\r\n<div id=\"add_resignation\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Resignation</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addResignation()\" [formGroup]=\"addResignForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Resigning Employee <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"addResignForm.get('EmployeeName').invalid && addResignForm.get('EmployeeName').touched\"\r\n                            formControlName=\"EmployeeName\">\r\n                        <div\r\n                            *ngIf=\"addResignForm.get('EmployeeName').invalid && addResignForm.get('EmployeeName').touched\">\r\n                            <small\r\n                                *ngIf=\"addResignForm.get('EmployeeName').invalid && addResignForm.get('EmployeeName').touched\"\r\n                                class=\"text-danger\"> *Employee is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Notice Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"addResignForm.get('NoticeDated').invalid && addResignForm.get('NoticeDated').touched\"\r\n                                formControlName=\"NoticeDated\">\r\n                            <div\r\n                                *ngIf=\"addResignForm.get('NoticeDated').invalid && addResignForm.get('NoticeDated').touched\">\r\n                                <small\r\n                                    *ngIf=\"addResignForm.get('NoticeDated').invalid && addResignForm.get('NoticeDated').touched\"\r\n                                    class=\"text-danger\"> *Notice Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Resignation Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"addResignForm.get('ResignationDate').invalid && addResignForm.get('ResignationDate').touched\"\r\n                                formControlName=\"ResignationDate\">\r\n                            <div\r\n                                *ngIf=\"addResignForm.get('ResignationDate').invalid && addResignForm.get('ResignationDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"addResignForm.get('ResignationDate').invalid && addResignForm.get('ResignationDate').touched\"\r\n                                    class=\"text-danger\"> *Resignation Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Reason <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"addResignForm.get('ReasonName').invalid && addResignForm.get('ReasonName').touched\"\r\n                            formControlName=\"ReasonName\"></textarea>\r\n                        <div *ngIf=\"addResignForm.get('ReasonName').invalid && addResignForm.get('ReasonName').touched\">\r\n                            <small\r\n                                *ngIf=\"addResignForm.get('ReasonName').invalid && addResignForm.get('ReasonName').touched\"\r\n                                class=\"text-danger\"> *Reason is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Resignation Modal -->\r\n\r\n<!-- Edit Resignation Modal -->\r\n<div id=\"edit_resignation\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Resignation</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editResignation()\" [formGroup]=\"editResignForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Resigning Employee <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"editResignForm.get('EmployeeName').invalid && editResignForm.get('EmployeeName').touched\"\r\n                            formControlName=\"EmployeeName\">\r\n                        <div\r\n                            *ngIf=\"editResignForm.get('EmployeeName').invalid && editResignForm.get('EmployeeName').touched\">\r\n                            <small\r\n                                *ngIf=\"editResignForm.get('EmployeeName').invalid && editResignForm.get('EmployeeName').touched\"\r\n                                class=\"text-danger\"> *Employee is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Notice Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"editResignForm.get('NoticeDated').invalid && editResignForm.get('NoticeDated').touched\"\r\n                                formControlName=\"NoticeDated\" (bsValueChange)=\"from($event)\">\r\n                            <div\r\n                                *ngIf=\"editResignForm.get('NoticeDated').invalid && editResignForm.get('NoticeDated').touched\">\r\n                                <small\r\n                                    *ngIf=\"editResignForm.get('NoticeDated').invalid && editResignForm.get('NoticeDated').touched\"\r\n                                    class=\"text-danger\"> *Notice Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Resignation Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"editResignForm.get('ResignationDate').invalid && editResignForm.get('ResignationDate').touched\"\r\n                                formControlName=\"ResignationDate\" (bsValueChange)=\"to($event)\">\r\n                            <div\r\n                                *ngIf=\"editResignForm.get('ResignationDate').invalid && editResignForm.get('ResignationDate').touched\">\r\n                                <small\r\n                                    *ngIf=\"editResignForm.get('ResignationDate').invalid && editResignForm.get('ResignationDate').touched\"\r\n                                    class=\"text-danger\"> *Resignation Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Reason <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"editResignForm.get('ReasonName').invalid && editResignForm.get('ReasonName').touched\"\r\n                            formControlName=\"ReasonName\"></textarea>\r\n                        <div\r\n                            *ngIf=\"editResignForm.get('ReasonName').invalid && editResignForm.get('ReasonName').touched\">\r\n                            <small\r\n                                *ngIf=\"editResignForm.get('ReasonName').invalid && editResignForm.get('ReasonName').touched\"\r\n                                class=\"text-danger\"> *Reason is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Resignation Modal -->\r\n\r\n<!-- Delete Resignation Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_resignation\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Resignation</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteResignation()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Resignation Modal -->";

/***/ }),

/***/ 64833:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/resignation/resignation.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_resignation_resignation_module_ts.js.map