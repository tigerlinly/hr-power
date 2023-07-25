"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_shift_shift_module_ts"],{

/***/ 78682:
/*!**********************************************************************!*\
  !*** ./src/app/all-modules/shift/shift-list/shift-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftListComponent": () => (/* binding */ ShiftListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shift_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-list.component.html?ngResource */ 744);
/* harmony import */ var _shift_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-list.component.css?ngResource */ 79429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let ShiftListComponent = class ShiftListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.url = "shiftlist";
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
        this.LoadRevenue();
        this.addRevenueForm = this.formBuilder.group({
            ShiftName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MinStartTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StartTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MaxStartTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MinEndTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            EndTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MaxEndTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            BreakTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.editRevenueForm = this.formBuilder.group({
            ShiftName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MinStartTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StartTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MaxStartTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MinEndTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            EndTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            MaxEndTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            BreakTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    // Get department list  Api Call
    LoadRevenue() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstRevenue = data;
            this.dtTrigger.next();
            this.rows = this.lstRevenue;
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
    // Add Department  Modal Api Call
    addRevenue() {
        if (this.addRevenueForm.invalid) {
            this.markFormGroupTouched(this.addRevenueForm);
            return;
        }
        if (this.addRevenueForm.valid) {
            let obj = {
                shiftname: this.addRevenueForm.value.ShiftName,
                minstarttime: this.addRevenueForm.value.MinStartTime,
                starttime: this.addRevenueForm.value.StartTime,
                maxstarttime: this.addRevenueForm.value.MaxStartTime,
                minendtime: this.addRevenueForm.value.MinEndTime,
                endtime: this.addRevenueForm.value.EndTime,
                maxendtime: this.addRevenueForm.value.MaxEndTime,
                breaktime: this.addRevenueForm.value.BreakTime,
                id: 0,
                status: "Active"
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadRevenue();
            $("#add_shift").modal("hide");
            this.addRevenueForm.reset();
            this.toastr.success("Shift-list added sucessfully...!", "Success");
        }
    }
    editRevenue() {
        if (this.editRevenueForm.valid) {
            let obj = {
                shiftname: this.editRevenueForm.value.ShiftName,
                minstarttime: this.editRevenueForm.value.MinStartTime,
                starttime: this.editRevenueForm.value.StartTime,
                maxstarttime: this.editRevenueForm.value.MaxStartTime,
                minendtime: this.editRevenueForm.value.MinEndTime,
                endtime: this.editRevenueForm.value.EndTime,
                maxendtime: this.editRevenueForm.value.MaxEndTime,
                breaktime: this.editRevenueForm.value.BreakTime,
                id: this.editId,
                status: "Active"
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadRevenue();
            $("#edit_shift").modal("hide");
            this.toastr.success("Budget-list Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editedvalue = value.ShiftName;
        this.editId = value.id;
        const index = this.lstRevenue.findIndex((item) => {
            return item.id === value.id;
        });
        let toSetValues = this.lstRevenue[index];
        this.editRevenueForm.setValue({
            ShiftName: toSetValues.shiftname,
            MinStartTime: toSetValues.minstarttime,
            StartTime: toSetValues.starttime,
            MaxStartTime: toSetValues.maxstarttime,
            MinEndTime: toSetValues.minendtime,
            EndTime: toSetValues.endtime,
            MaxEndTime: toSetValues.maxendtime,
            BreakTime: toSetValues.breaktime,
        });
    }
    deleteRevenue() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.LoadRevenue();
            $("#delete_employee").modal("hide");
            this.toastr.success("Budget-revenue deleted sucessfully..!", "Success");
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ShiftListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ShiftListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ShiftListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shift-list',
        template: _shift_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shift_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShiftListComponent);



/***/ }),

/***/ 36144:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/shift/shift-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftRoutingModule": () => (/* binding */ ShiftRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shift_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift.component */ 97487);
/* harmony import */ var _shift_list_shift_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-list/shift-list.component */ 78682);





const routes = [
    {
        path: "",
        component: _shift_component__WEBPACK_IMPORTED_MODULE_0__.ShiftComponent,
        children: [
            {
                path: "shift-list",
                component: _shift_list_shift_list_component__WEBPACK_IMPORTED_MODULE_1__.ShiftListComponent
            }
        ]
    }
];
let ShiftRoutingModule = class ShiftRoutingModule {
};
ShiftRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ShiftRoutingModule);



/***/ }),

/***/ 97487:
/*!******************************************************!*\
  !*** ./src/app/all-modules/shift/shift.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftComponent": () => (/* binding */ ShiftComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shift_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift.component.html?ngResource */ 70824);
/* harmony import */ var _shift_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift.component.css?ngResource */ 97475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ShiftComponent = class ShiftComponent {
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
ShiftComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ShiftComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-shift',
        template: _shift_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shift_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ShiftComponent);



/***/ }),

/***/ 71138:
/*!***************************************************!*\
  !*** ./src/app/all-modules/shift/shift.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftModule": () => (/* binding */ ShiftModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shift_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-routing.module */ 36144);
/* harmony import */ var _shift_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift.component */ 97487);
/* harmony import */ var _shift_list_shift_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shift-list/shift-list.component */ 78682);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ 34785);











let ShiftModule = class ShiftModule {
};
ShiftModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_shift_component__WEBPACK_IMPORTED_MODULE_1__.ShiftComponent, _shift_list_shift_list_component__WEBPACK_IMPORTED_MODULE_2__.ShiftListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shift_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShiftRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], ShiftModule);



/***/ }),

/***/ 79429:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/shift/shift-list/shift-list.component.css?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 97475:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/shift/shift.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 744:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/shift/shift-list/shift-list.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\r\n<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n            \r\n                <!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n                    \r\n                    <!-- Page Header -->\r\n                    <div class=\"page-header\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <h3 class=\"page-title\">Shift List</h3>\r\n                                <ul class=\"breadcrumb\">\r\n                                    <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                                    <li class=\"breadcrumb-item\"><a>Employees</a></li>\r\n                                    <li class=\"breadcrumb-item active\">Shift List</li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-auto float-end ms-auto\">\r\n                                <a class=\"btn add-btn m-r-5\" data-bs-toggle=\"modal\" data-bs-target=\"#add_shift\">Add Shifts</a>\r\n                                <a class=\"btn add-btn m-r-5\" data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\"> Assign Shifts</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /Page Header -->\r\n                    \r\n                    <!-- Content Starts -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"table-responsive\">\r\n                                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>#</th>\r\n                                            <th>Shift Name</th>\r\n                                            <th>Min Start Time</th>\r\n                                            <th>Start Time</th>\r\n                                            <th>Max Start Time</th>\r\n                                            <th>Min End Time</th>\r\n                                            <th>End Time</th>\r\n                                            <th>Max End Time</th>\r\n                                            <th>Break Time</th>\r\n                                            <th class=\"text-center\">Status</th>\r\n                                            <th class=\"text-end no-sort\">Action</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of lstRevenue\">\r\n                                            <td>{{item.id}}</td>\r\n                                            <td>{{item.shiftname}}</td>\r\n                                            <td>{{item.minstarttime}}</td>\r\n                                            <td>{{item.starttime}}</td>\r\n                                            <td>{{item.maxstarttime}}</td>\r\n                                            <td>{{item.minendtime}}</td>\r\n                                            <td>{{item.endtime}}</td>\r\n                                            <td>{{item.maxendtime}}</td>\r\n                                            <td>{{item.breaktime}}</td>\r\n                                            <td class=\"text-center\">\r\n                                                <div class=\"action-label\">\r\n                                                    <a class=\"btn btn-white btn-sm btn-rounded\" href=\"javascript:void(0);\">\r\n                                                        <i class=\"fa fa-dot-circle-o text-success\"></i> {{item.status}}\r\n                                                    </a>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"text-end\">\r\n                                                <div class=\"dropdown dropdown-action\">\r\n                                                    <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                        <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_shift\" (click)=\"edit(item)\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                        <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_employee\" (click)=\"tempId = item.id\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                        \r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /Content End -->\r\n                    \r\n                </div>\r\n                <!-- /Page Content -->\r\n                \r\n            </div>\r\n            <!-- /Page Wrapper -->\r\n                \r\n            <!-- Add Shift Modal -->\r\n            <div id=\"add_shift\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n                <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\">Add Shift</h5>\r\n                            <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <form (ngSubmit)=\"addRevenue()\" [formGroup]=\"addRevenueForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Shift Name <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('ShiftName').invalid && addRevenueForm.get('ShiftName').touched\"\r\n                            formControlName=\"ShiftName\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div>\r\n                                              <div\r\n                            *ngIf=\"addRevenueForm.get('ShiftName').invalid && addRevenueForm.get('ShiftName').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('ShiftName').invalid && addRevenueForm.get('ShiftName').touched\"\r\n                                class=\"text-danger\"> *Shift name required</small>\r\n                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\" >\r\n                                            <label>Min Start Time <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('MinStartTime').invalid && addRevenueForm.get('MinStartTime').touched\"\r\n                            formControlName=\"MinStartTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div>\r\n                                                   <div\r\n                            *ngIf=\"addRevenueForm.get('MinStartTime').invalid && addRevenueForm.get('MinStartTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('MinStartTime').invalid && addRevenueForm.get('MinStartTime').touched\"\r\n                                class=\"text-danger\"> *Min start time required</small>\r\n                        </div>  \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Start Time <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('StartTime').invalid && addRevenueForm.get('StartTime').touched\"\r\n                            formControlName=\"StartTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div>\r\n                                                           <div\r\n                            *ngIf=\"addRevenueForm.get('StartTime').invalid && addRevenueForm.get('StartTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('StartTime').invalid && addRevenueForm.get('StartTime').touched\"\r\n                                class=\"text-danger\"> *start time required</small>\r\n                        </div>                                    \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Max Start Time <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('MaxStartTime').invalid && addRevenueForm.get('MaxStartTime').touched\"\r\n                            formControlName=\"MaxStartTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div> \r\n                                                         <div\r\n                            *ngIf=\"addRevenueForm.get('MaxStartTime').invalid && addRevenueForm.get('MaxStartTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('MaxStartTime').invalid && addRevenueForm.get('MaxStartTime').touched\"\r\n                                class=\"text-danger\"> *Max start time required</small>\r\n                        </div>                                    \r\n                                                                           \r\n                                        </div>\r\n                                    </div>      \r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\" >\r\n                                            <label>Min End Time <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('MinEndTime').invalid && addRevenueForm.get('MinEndTime').touched\"\r\n                            formControlName=\"MinEndTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div>\r\n                                                               <div\r\n                            *ngIf=\"addRevenueForm.get('MinEndTime').invalid && addRevenueForm.get('MinEndTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('MinEndTime').invalid && addRevenueForm.get('MinEndTime').touched\"\r\n                                class=\"text-danger\"> *Min End time required</small>\r\n                        </div>                                    \r\n                                \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>End Time <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('EndTime').invalid && addRevenueForm.get('EndTime').touched\"\r\n                            formControlName=\"EndTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div> \r\n                                                                   <div\r\n                            *ngIf=\"addRevenueForm.get('EndTime').invalid && addRevenueForm.get('EndTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('EndTime').invalid && addRevenueForm.get('EndTime').touched\"\r\n                                class=\"text-danger\"> *End time required</small>\r\n                        </div>                                     \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Max End Time <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"input-group time timepicker\">\r\n                                                <input class=\"form-control\" [class.invalid]=\"addRevenueForm.get('MaxEndTime').invalid && addRevenueForm.get('MaxEndTime').touched\"\r\n                            formControlName=\"MaxEndTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                            </div>  \r\n                                                                         <div\r\n                            *ngIf=\"addRevenueForm.get('MaxEndTime').invalid && addRevenueForm.get('MaxEndTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('MaxEndTime').invalid && addRevenueForm.get('MaxEndTime').touched\"\r\n                                class=\"text-danger\"> *Max End time required</small>\r\n                        </div>                                     \r\n                                                                           \r\n                                        </div>\r\n                                    </div>  \r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Break Time (In Minutes) </label>\r\n                                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"addRevenueForm.get('BreakTime').invalid && addRevenueForm.get('BreakTime').touched\"\r\n                            formControlName=\"BreakTime\"> \r\n                                                                   <div\r\n                            *ngIf=\"addRevenueForm.get('BreakTime').invalid && addRevenueForm.get('BreakTime').touched\">\r\n                            <small\r\n                                *ngIf=\"addRevenueForm.get('BreakTime').invalid && addRevenueForm.get('BreakTime').touched\"\r\n                                class=\"text-danger\"> *Breaktime required</small>\r\n                        </div>                                     \r\n                                                                             \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"custom-control form-check\">\r\n                                            <input type=\"checkbox\" class=\"form-check-input\" id=\"customCheck1\">\r\n                                            <label class=\"form-check-label\" for=\"customCheck1\">Recurring Shift</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">Repeat Every</label>\r\n                                            <select class=\"form-select form-control\">\r\n                                                <option value=\"\">1 </option>\r\n                                                <option value=\"1\">2</option>\r\n                                                <option value=\"2\">3</option>\r\n                                                <option value=\"3\">4</option>\r\n                                                <option  selected value=\"4\">5</option>\r\n                                                <option value=\"3\">6</option>\r\n                                            </select>\r\n                                            <label class=\"col-form-label\">Week(s)</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group wday-box\">\r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"monday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">M</span></label>\r\n        \r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"tuesday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">T</span></label>\r\n                                        \r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"wednesday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">W</span></label>\r\n                                        \r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"thursday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">T</span></label>\r\n                                        \r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"friday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">F</span></label>\r\n                                        \r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"saturday\" class=\"days recurring\"><span class=\"checkmark\">S</span></label>\r\n                                        \r\n                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"sunday\" class=\"days recurring\"><span class=\"checkmark\">S</span></label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"col-form-label\">End On <span class=\"text-danger\">*</span></label>\r\n                                            <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"custom-control form-check\">\r\n                                            <input type=\"checkbox\" class=\"form-check-input\" id=\"customCheck2\">\r\n                                            <label class=\"form-check-label\" for=\"customCheck2\">Indefinite</label>\r\n                                        </div>\r\n                                    </div>                              \r\n                            \r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Add Tag </label>\r\n                                            <input type=\"text\" class=\"form-control\">                                            \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Add Note </label>\r\n                                            <textarea class=\"form-control\"></textarea>                                          \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"submit-section\">\r\n                                    <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Add Shift Modal -->\r\n\r\n                <!-- Edit Shift Modal -->\r\n                <div id=\"edit_shift\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Edit Shift</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <form (ngSubmit)=\"editRevenue()\" [formGroup]=\"editRevenueForm\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Shift Name <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('ShiftName').invalid && editRevenueForm.get('ShiftName').touched\"\r\n                            formControlName=\"ShiftName\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                                               <div\r\n                            *ngIf=\"editRevenueForm.get('ShiftName').invalid && editRevenueForm.get('ShiftName').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('ShiftName').invalid && editRevenueForm.get('ShiftName').touched\"\r\n                                class=\"text-danger\"> *Shift name required</small>\r\n                        </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\" >\r\n                                                <label>Min Start Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('MinStartTime').invalid && editRevenueForm.get('MinStartTime').touched\"\r\n                            formControlName=\"MinStartTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                                                 <div\r\n                            *ngIf=\"editRevenueForm.get('MinStartTime').invalid && editRevenueForm.get('MinStartTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('MinStartTime').invalid && editRevenueForm.get('MinStartTime').touched\"\r\n                                class=\"text-danger\"> *Min start time required</small>\r\n                        </div>  \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Start Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('StartTime').invalid && editRevenueForm.get('StartTime').touched\"\r\n                            formControlName=\"StartTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div> \r\n                                                                         <div\r\n                            *ngIf=\"editRevenueForm.get('StartTime').invalid && editRevenueForm.get('StartTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('StartTime').invalid && editRevenueForm.get('StartTime').touched\"\r\n                                class=\"text-danger\"> *start time required</small>\r\n                        </div>                                     \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Max Start Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('MaxStartTime').invalid && editRevenueForm.get('MaxStartTime').touched\"\r\n                            formControlName=\"MaxStartTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div> \r\n                                                                         <div\r\n                            *ngIf=\"editRevenueForm.get('MaxStartTime').invalid && editRevenueForm.get('MaxStartTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('MaxStartTime').invalid && editRevenueForm.get('MaxStartTime').touched\"\r\n                                class=\"text-danger\"> *Max start time required</small>\r\n                        </div>                                    \r\n                                                                          \r\n                                            </div>\r\n                                        </div>      \r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\" >\r\n                                                <label>Min End Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('MinEndTime').invalid && editRevenueForm.get('MinEndTime').touched\"\r\n                            formControlName=\"MinEndTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                                                               <div\r\n                            *ngIf=\"editRevenueForm.get('MinEndTime').invalid && editRevenueForm.get('MinEndTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('MinEndTime').invalid && editRevenueForm.get('MinEndTime').touched\"\r\n                                class=\"text-danger\"> *Min End time required</small>\r\n                        </div>    \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>End Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('EndTime').invalid && editRevenueForm.get('EndTime').touched\"\r\n                            formControlName=\"EndTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div> \r\n                                                                                   <div\r\n                            *ngIf=\"editRevenueForm.get('EndTime').invalid && editRevenueForm.get('EndTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('EndTime').invalid && editRevenueForm.get('EndTime').touched\"\r\n                                class=\"text-danger\"> *End time required</small>\r\n                        </div>                                    \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Max End Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\" [class.invalid]=\"editRevenueForm.get('MaxEndTime').invalid && editRevenueForm.get('MaxEndTime').touched\"\r\n                            formControlName=\"MaxEndTime\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div> \r\n                                                                                         <div\r\n                            *ngIf=\"editRevenueForm.get('MaxEndTime').invalid && editRevenueForm.get('MaxEndTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('MaxEndTime').invalid && editRevenueForm.get('MaxEndTime').touched\"\r\n                                class=\"text-danger\"> *Max End time required</small>\r\n                        </div>     \r\n\r\n                                            </div>\r\n                                        </div>  \r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Break Time (In Minutes) </label>\r\n                                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"editRevenueForm.get('BreakTime').invalid && editRevenueForm.get('BreakTime').touched\"\r\n                            formControlName=\"BreakTime\">  \r\n                                                               <div\r\n                            *ngIf=\"editRevenueForm.get('BreakTime').invalid && editRevenueForm.get('BreakTime').touched\">\r\n                            <small\r\n                                *ngIf=\"editRevenueForm.get('BreakTime').invalid && editRevenueForm.get('BreakTime').touched\"\r\n                                class=\"text-danger\"> *Breaktime required</small>\r\n                        </div>                                     \r\n                                                                           \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"custom-control form-check\">\r\n                                                <input type=\"checkbox\" class=\"form-check-input\" id=\"customCheck3\">\r\n                                                <label class=\"form-check-label\" for=\"customCheck3\">Recurring Shift</label>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Repeat Every</label>\r\n                                                <select class=\"form-select form-control\">\r\n                                                    <option value=\"\">1 </option>\r\n                                                    <option value=\"1\">2</option>\r\n                                                    <option value=\"2\">3</option>\r\n                                                    <option value=\"3\">4</option>\r\n                                                    <option  selected value=\"4\">5</option>\r\n                                                    <option value=\"3\">6</option>\r\n                                                </select>\r\n                                                <label class=\"col-form-label\">Week(s)</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"form-group wday-box\">\r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"monday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">M</span></label>\r\n            \r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"tuesday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">T</span></label>\r\n                                            \r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"wednesday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">W</span></label>\r\n                                            \r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"thursday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">T</span></label>\r\n                                            \r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"friday\" class=\"days recurring\" checked=\"\"><span class=\"checkmark\">F</span></label>\r\n                                            \r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"saturday\" class=\"days recurring\"><span class=\"checkmark\">S</span></label>\r\n                                            \r\n                                                <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"sunday\" class=\"days recurring\"><span class=\"checkmark\">S</span></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">End On <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"custom-control form-check\">\r\n                                                <input type=\"checkbox\" class=\"form-check-input\" id=\"customCheck4\">\r\n                                                <label class=\"form-check-label\" for=\"customCheck4\">Indefinite</label>\r\n                                                </div>\r\n                                        </div>                              \r\n                                \r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Add Tag </label>\r\n                                                <input type=\"text\" class=\"form-control\">                                            \r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Add Note </label>\r\n                                                <textarea class=\"form-control\"></textarea>                                          \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"submit-section\">\r\n                                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Edit Shift Modal -->\r\n\r\n                <!-- Add Schedule Modal -->\r\n                <div id=\"add_schedule\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Add Schedule</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <form>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Department <span class=\"text-danger\">*</span></label>\r\n                                                <select class=\"form-select form-control\">\r\n                                                    <option value=\"\">Select</option>\r\n                                                    <option value=\"\">Development</option>\r\n                                                    <option value=\"1\">Finance</option>\r\n                                                    <option value=\"2\">Finance and Management</option>\r\n                                                    <option value=\"3\">Hr & Finance</option>\r\n                                                    <option value=\"4\">ITech</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Employee Name <span class=\"text-danger\">*</span></label>\r\n                                                <select class=\"form-select form-control\">\r\n                                                    <option value=\"\">Select </option>\r\n                                                    <option value=\"1\">Richard Miles </option>\r\n                                                    <option value=\"2\">John Smith</option>\r\n                                                    <option value=\"3\">Mike Litorus </option>\r\n                                                    <option value=\"4\">Wilmer Deluna</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Date</label>\r\n                                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker></div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Shifts <span class=\"text-danger\">*</span></label>\r\n                                                <select class=\"form-select form-control\">\r\n                                                    <option value=\"\">Select </option>\r\n                                                    <option value=\"1\">10'o clock Shift</option>\r\n                                                    <option value=\"2\">10:30 shift</option>\r\n                                                    <option value=\"3\">Daily Shift </option>\r\n                                                    <option value=\"4\">New Shift</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Min Start Time  <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Start Time  <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Max Start Time  <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Min End Time  <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">End Time   <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Max End Time <span class=\"text-danger\">*</span></label>\r\n                                                <div class=\"input-group time timepicker\">\r\n                                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Break Time  <span class=\"text-danger\">*</span></label>\r\n                                                <input class=\"form-control\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Accept Extra Hours </label>\r\n                                                <div class=\"custom-control form-check form-switch\">\r\n                                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customSwitch1\" checked=\"\">\r\n                                                    <label class=\"form-check-label\" for=\"customSwitch1\"></label>\r\n                                                  </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"col-form-label\">Publish </label>\r\n                                                <div class=\"custom-control form-check form-switch\">\r\n                                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customSwitch2\" checked=\"\">\r\n                                                    <label class=\"form-check-label\" for=\"customSwitch2\"></label>\r\n                                                  </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                \r\n                                    <div class=\"submit-section\">\r\n                                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Add Schedule Modal -->\r\n                    \r\n                <!-- Delete Shift Modal -->\r\n                <div class=\"modal custom-modal fade\" id=\"delete_employee\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"form-header\">\r\n                                    <h3>Delete Shift</h3>\r\n                                    <p>Are you sure want to delete?</p>\r\n                                </div>\r\n                                <div class=\"modal-btn delete-action\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteRevenue()\">Delete</a>\r\n                                        </div>\r\n                                        <div class=\"col-6\">\r\n                                            <a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Delete Employee Modal -->\r\n</div>";

/***/ }),

/***/ 70824:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/shift/shift.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_shift_shift_module_ts.js.map