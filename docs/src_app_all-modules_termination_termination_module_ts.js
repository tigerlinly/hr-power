"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_termination_termination_module_ts"],{

/***/ 17661:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/termination/termination-main/termination-main.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminationMainComponent": () => (/* binding */ TerminationMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _termination_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termination-main.component.html?ngResource */ 84178);
/* harmony import */ var _termination_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termination-main.component.css?ngResource */ 5048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);










let TerminationMainComponent = class TerminationMainComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.url = "terminationmain";
    }
    ngOnInit() {
        this.loadTermination();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.addTerminationForm = this.formBuilder.group({
            EmployeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TerminationTyped: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            NoticeDated: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TerminationDated: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ReasonName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.editTerminationForm = this.formBuilder.group({
            EmployeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TerminationTyped: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            NoticeDated: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TerminationDated: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ReasonName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    // Get  termination Api Call
    loadTermination() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstTermination = data;
            this.rows = this.lstTermination;
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
    // Add  termination  Modal Api Call
    addTermination() {
        if (this.addTerminationForm.invalid) {
            this.markFormGroupTouched(this.addTerminationForm);
            return;
        }
        if (this.addTerminationForm.valid) {
            let noticedDate = this.pipe.transform(this.addTerminationForm.value.NoticeDated, "dd-MM-yyyy");
            let terminationDate = this.pipe.transform(this.addTerminationForm.value.TerminationDated, "dd-MM-yyyy");
            let obj = {
                employee: this.addTerminationForm.value.EmployeeName,
                department: "Web development",
                terminationType: this.addTerminationForm.value.TerminationTyped,
                noticedDate: noticedDate,
                terminationDate: terminationDate,
                reason: this.addTerminationForm.value.ReasonName,
                id: 0,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadTermination();
            $("#add_termination").modal("hide");
            this.addTerminationForm.reset();
            this.toastr.success("Termination added sucessfully...!", "Success");
        }
    }
    // update api call 
    editTermination() {
        if (this.editTerminationForm.valid) {
            // let noticed = this.pipe.transform(
            //   this.editTerminationForm.value.NoticeDated,
            //   "dd-MM-yyyy"
            // );
            // let termination = this.pipe.transform(
            //   this.editTerminationForm.value.TerminationDated,
            //   "dd-MM-yyyy"
            // );
            let obj = {
                employee: this.editTerminationForm.value.EmployeeName,
                department: "Web development",
                terminationType: this.editTerminationForm.value.TerminationTyped,
                noticedDate: this.editTerminationForm.value.NoticeDated,
                terminationDate: this.editTerminationForm.value.TerminationDated,
                reason: this.editTerminationForm.value.ReasonName,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadTermination();
            $("#edit_termination").modal("hide");
            this.toastr.success("Termination Updated sucessfully...!", "Success");
        }
    }
    // To Get The termination Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstTermination.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstTermination[index];
        this.editTerminationForm.setValue({
            EmployeeName: toSetValues.employee,
            TerminationTyped: toSetValues.terminationType,
            NoticeDated: toSetValues.noticedDate,
            TerminationDated: toSetValues.terminationDate,
            ReasonName: toSetValues.reason,
        });
    }
    // delete api call
    deleteTermination() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.loadTermination();
        $("#delete_termination").modal("hide");
        this.toastr.success("Termination  deleted sucessfully..!", "Success");
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
TerminationMainComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
TerminationMainComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
TerminationMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-termination-main",
        template: _termination_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_termination_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TerminationMainComponent);



/***/ }),

/***/ 90736:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/termination/termination-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminationRoutingModule": () => (/* binding */ TerminationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _termination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termination.component */ 72922);
/* harmony import */ var _termination_main_termination_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termination-main/termination-main.component */ 17661);





const routes = [
    {
        path: "",
        component: _termination_component__WEBPACK_IMPORTED_MODULE_0__.TerminationComponent,
        children: [
            {
                path: "terminationmain",
                component: _termination_main_termination_main_component__WEBPACK_IMPORTED_MODULE_1__.TerminationMainComponent
            }
        ]
    }
];
let TerminationRoutingModule = class TerminationRoutingModule {
};
TerminationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], TerminationRoutingModule);



/***/ }),

/***/ 72922:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/termination/termination.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminationComponent": () => (/* binding */ TerminationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _termination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termination.component.html?ngResource */ 18528);
/* harmony import */ var _termination_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termination.component.css?ngResource */ 2032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TerminationComponent = class TerminationComponent {
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
TerminationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
TerminationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-termination',
        template: _termination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_termination_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], TerminationComponent);



/***/ }),

/***/ 9814:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/termination/termination.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminationModule": () => (/* binding */ TerminationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _termination_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termination-routing.module */ 90736);
/* harmony import */ var _termination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termination.component */ 72922);
/* harmony import */ var _termination_main_termination_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termination-main/termination-main.component */ 17661);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);










let TerminationModule = class TerminationModule {
};
TerminationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_termination_component__WEBPACK_IMPORTED_MODULE_1__.TerminationComponent, _termination_main_termination_main_component__WEBPACK_IMPORTED_MODULE_2__.TerminationMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _termination_routing_module__WEBPACK_IMPORTED_MODULE_0__.TerminationRoutingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule
        ]
    })
], TerminationModule);



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

/***/ 5048:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/termination/termination-main/termination-main.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW5hdGlvbi1tYWluLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 2032:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/termination/termination.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 84178:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/termination/termination-main/termination-main.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Termination</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Termination</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_termination\"><i class=\"fas fa-plus\"></i> Add Termination</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"datatable\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Terminated Employee </th>\r\n                            <th>Department</th>\r\n                            <th>Termination Type </th>\r\n                            <th>Termination Date </th>\r\n                            <th>Reason</th>\r\n                            <th>Notice Date </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstTermination;let i = index\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar blue-link\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"{{item.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{item.employee}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{item.department}}</td>\r\n                            <td>{{item.terminationType}}</td>\r\n                            <td>{{item.terminationDate | customDate}}</td>\r\n                            <td>{{item.reason}}</td>\r\n                            <td>{{item.noticedDate | customDate}}</td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_termination\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_termination\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Termination Modal -->\r\n<div id=\"add_termination\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Termination</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addTermination()\" [formGroup]=\"addTerminationForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Terminated Employee <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"addTerminationForm.get('EmployeeName').invalid && addTerminationForm.get('EmployeeName').touched\"\r\n                            formControlName=\"EmployeeName\">\r\n                        <div\r\n                            *ngIf=\"addTerminationForm.get('EmployeeName').invalid && addTerminationForm.get('EmployeeName').touched\">\r\n                            <small\r\n                                *ngIf=\"addTerminationForm.get('EmployeeName').invalid && addTerminationForm.get('EmployeeName').touched\"\r\n                                class=\"text-danger\"> *Employee is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Termination Type <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"add-group-btn\">\r\n                            <select class=\"form-select form-control\"\r\n                                [class.invalid]=\"addTerminationForm.get('TerminationTyped').invalid && addTerminationForm.get('TerminationTyped').touched\"\r\n                                formControlName=\"TerminationTyped\">\r\n                                <option>Misconduct</option>\r\n                                <option>Others</option>\r\n                            </select>\r\n                            <a class=\"btn btn-primary\" ><i class=\"fa fa-plus\"></i> Add</a>\r\n                            <div\r\n                                *ngIf=\"addTerminationForm.get('TerminationTyped').invalid && addTerminationForm.get('TerminationTyped').touched\">\r\n                                <small\r\n                                    *ngIf=\"addTerminationForm.get('TerminationTyped').invalid && addTerminationForm.get('TerminationTyped').touched\"\r\n                                    class=\"text-danger\"> *Termination Type is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Termination Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"addTerminationForm.get('TerminationDated').invalid && addTerminationForm.get('TerminationDated').touched\"\r\n                                formControlName=\"TerminationDated\">\r\n                        </div>\r\n                        <div\r\n                            *ngIf=\"addTerminationForm.get('TerminationDated').invalid && addTerminationForm.get('TerminationDated').touched\">\r\n                            <small\r\n                                *ngIf=\"addTerminationForm.get('TerminationDated').invalid && addTerminationForm.get('TerminationDated').touched\"\r\n                                class=\"text-danger\"> *Termination Date is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Reason <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"addTerminationForm.get('ReasonName').invalid && addTerminationForm.get('ReasonName').touched\"\r\n                            formControlName=\"ReasonName\"></textarea>\r\n                        <div\r\n                            *ngIf=\"addTerminationForm.get('ReasonName').invalid && addTerminationForm.get('ReasonName').touched\">\r\n                            <small\r\n                                *ngIf=\"addTerminationForm.get('ReasonName').invalid && addTerminationForm.get('ReasonName').touched\"\r\n                                class=\"text-danger\"> *Reason is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Notice Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"addTerminationForm.get('NoticeDated').invalid && addTerminationForm.get('NoticeDated').touched\"\r\n                                formControlName=\"NoticeDated\">\r\n                            <div\r\n                                *ngIf=\"addTerminationForm.get('NoticeDated').invalid && addTerminationForm.get('NoticeDated').touched\">\r\n                                <small\r\n                                    *ngIf=\"addTerminationForm.get('NoticeDated').invalid && addTerminationForm.get('NoticeDated').touched\"\r\n                                    class=\"text-danger\"> *Reason is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Termination Modal -->\r\n\r\n<!-- Edit Termination Modal -->\r\n<div id=\"edit_termination\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Termination</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editTermination()\" [formGroup]=\"editTerminationForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Terminated Employee <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"editTerminationForm.get('EmployeeName').invalid && editTerminationForm.get('EmployeeName').touched\"\r\n                            formControlName=\"EmployeeName\">\r\n                        <div\r\n                            *ngIf=\"editTerminationForm.get('EmployeeName').invalid && editTerminationForm.get('EmployeeName').touched\">\r\n                            <small\r\n                                *ngIf=\"editTerminationForm.get('EmployeeName').invalid && editTerminationForm.get('EmployeeName').touched\"\r\n                                class=\"text-danger\"> *Employee is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Termination Type <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"add-group-btn\">\r\n                            <select class=\"form-select form-control\"\r\n                                [class.invalid]=\"editTerminationForm.get('TerminationTyped').invalid && editTerminationForm.get('TerminationTyped').touched\"\r\n                                formControlName=\"TerminationTyped\">\r\n                                <option>Misconduct</option>\r\n                                <option>Others</option>\r\n                            </select>\r\n                            <a class=\"btn btn-primary\" ><i class=\"fa fa-plus\"></i> Add</a>\r\n                            <div\r\n                                *ngIf=\"editTerminationForm.get('TerminationTyped').invalid && editTerminationForm.get('TerminationTyped').touched\">\r\n                                <small\r\n                                    *ngIf=\"editTerminationForm.get('TerminationTyped').invalid && editTerminationForm.get('TerminationTyped').touched\"\r\n                                    class=\"text-danger\"> *Termination Type is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Termination Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"editTerminationForm.get('TerminationDated').invalid && editTerminationForm.get('TerminationDated').touched\"\r\n                                formControlName=\"TerminationDated\">\r\n                        </div>\r\n                        <div\r\n                            *ngIf=\"editTerminationForm.get('TerminationDated').invalid && editTerminationForm.get('TerminationDated').touched\">\r\n                            <small\r\n                                *ngIf=\"editTerminationForm.get('TerminationDated').invalid && editTerminationForm.get('TerminationDated').touched\"\r\n                                class=\"text-danger\"> *Termination Date is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Reason <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"editTerminationForm.get('ReasonName').invalid && editTerminationForm.get('ReasonName').touched\"\r\n                            formControlName=\"ReasonName\"></textarea>\r\n                        <div\r\n                            *ngIf=\"editTerminationForm.get('ReasonName').invalid && editTerminationForm.get('ReasonName').touched\">\r\n                            <small\r\n                                *ngIf=\"editTerminationForm.get('ReasonName').invalid && editTerminationForm.get('ReasonName').touched\"\r\n                                class=\"text-danger\"> *Reason is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Notice Date <span class=\"text-danger\">*</span></label>\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                [class.invalid]=\"editTerminationForm.get('NoticeDated').invalid && editTerminationForm.get('NoticeDated').touched\"\r\n                                formControlName=\"NoticeDated\">\r\n                            <div\r\n                                *ngIf=\"editTerminationForm.get('NoticeDated').invalid && editTerminationForm.get('NoticeDated').touched\">\r\n                                <small\r\n                                    *ngIf=\"editTerminationForm.get('NoticeDated').invalid && editTerminationForm.get('NoticeDated').touched\"\r\n                                    class=\"text-danger\"> *Notice Date is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Termination Modal -->\r\n\r\n<!-- Delete Termination Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_termination\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Termination</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteTermination()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Termination Modal -->";

/***/ }),

/***/ 18528:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/termination/termination.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_termination_termination_module_ts.js.map