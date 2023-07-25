"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_training_training_module_ts"],{

/***/ 23234:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/training/trainers/trainers.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainersComponent": () => (/* binding */ TrainersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _trainers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainers.component.html?ngResource */ 67036);
/* harmony import */ var _trainers_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainers.component.css?ngResource */ 65347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);









let TrainersComponent = class TrainersComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "trainers";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        this.loadtrainer();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.addTrainerForm = this.formBuilder.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            RoleName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            StatusName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.editTrainerForm = this.formBuilder.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            RoleName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            StatusName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    // Get  trainer Api Call
    loadtrainer() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstTrainer = data;
            this.dtTrigger.next();
            this.rows = this.lstTrainer;
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
    // Add  goal type  Modal Api Call
    addTrainer() {
        if (this.addTrainerForm.invalid) {
            this.markFormGroupTouched(this.addTrainerForm);
            return;
        }
        if (this.addTrainerForm.valid) {
            let obj = {
                name: this.addTrainerForm.value.firstName,
                lname: this.addTrainerForm.value.lastName,
                mail: this.addTrainerForm.value.Email,
                role: this.addTrainerForm.value.RoleName,
                contactNumber: this.addTrainerForm.value.phoneNumber,
                description: this.addTrainerForm.value.Description,
                status: this.addTrainerForm.value.StatusName,
                id: 0,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.loadtrainer();
            $("#add_trainer").modal("hide");
            this.addTrainerForm.reset();
            this.toastr.success("Trainer added sucessfully...!", "Success");
        }
    }
    editTrainer() {
        if (this.editTrainerForm.valid) {
            let obj = {
                name: this.editTrainerForm.value.firstName,
                lname: this.editTrainerForm.value.lastName,
                mail: this.editTrainerForm.value.Email,
                role: this.editTrainerForm.value.RoleName,
                contactNumber: this.editTrainerForm.value.phoneNumber,
                description: this.editTrainerForm.value.Description,
                status: this.editTrainerForm.value.StatusName,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.loadtrainer();
            $("#edit_trainer").modal("hide");
            this.toastr.success("Trainer Updated sucessfully...!", "Success");
        }
    }
    // To Get The goal type Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstTrainer.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstTrainer[index];
        this.editTrainerForm.setValue({
            firstName: toSetValues.name,
            lastName: toSetValues.lname,
            Email: toSetValues.mail,
            RoleName: toSetValues.role,
            phoneNumber: toSetValues.contactNumber,
            Description: toSetValues.description,
            StatusName: toSetValues.status,
        });
    }
    deleteTrainer() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.loadtrainer();
            $("#delete_trainer").modal("hide");
            this.toastr.success("Trainer deleted sucessfully..!", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
TrainersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
TrainersComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
TrainersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-trainers",
        template: _trainers_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_trainers_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainersComponent);



/***/ }),

/***/ 84078:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/training/training-list/training-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingListComponent": () => (/* binding */ TrainingListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-list.component.html?ngResource */ 82057);
/* harmony import */ var _training_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-list.component.css?ngResource */ 12108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let TrainingListComponent = class TrainingListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.url = "traininglist";
        this.dtOptions = {};
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
    }
    ngOnInit() {
        this.loadtrainerlist();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip", // ... skipped ...
        };
        this.addTrainerForm = this.formBuilder.group({
            Type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TranierName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            EmployeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            startDateTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            endDateTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            costName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StatusName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.editTrainerForm = this.formBuilder.group({
            Type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TranierName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            EmployeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            startDateTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            endDateTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            costName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StatusName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    // Get  trainer Api Call
    loadtrainerlist() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstTraininglist = data;
            this.rows = this.lstTraininglist;
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
    // Add  goal type  Modal Api Call
    addTrainingType() {
        if (this.addTrainerForm.invalid) {
            this.markFormGroupTouched(this.addTrainerForm);
            return;
        }
        if (this.addTrainerForm.valid) {
            let StartDatetime = this.pipe.transform(this.addTrainerForm.value.startDateTime, "dd-MM-yyyy");
            let EndDatetime = this.pipe.transform(this.addTrainerForm.value.endDateTime, "dd-MM-yyyy");
            let obj = {
                trainingType: this.addTrainerForm.value.Type,
                trainer: this.addTrainerForm.value.TranierName,
                employee: this.addTrainerForm.value.EmployeeName,
                timeDuration: "7 May 2019 - 10 May 2019",
                startDate: StartDatetime,
                endDate: EndDatetime,
                cost: this.addTrainerForm.value.costName,
                description: this.addTrainerForm.value.Description,
                status: this.addTrainerForm.value.StatusName,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadtrainerlist();
            $("#add_training").modal("hide");
            this.addTrainerForm.reset();
            this.toastr.success("Training added sucessfully...!", "Success");
        }
    }
    // to know the date picker changes
    from(data) {
        this.start = this.pipe.transform(data, "dd-MM-yyyy");
    }
    to(data) {
        this.end = this.pipe.transform(data, "dd-MM-yyyy");
    }
    editTrainingType() {
        if (this.editTrainerForm.valid) {
            let obj = {
                trainingType: this.editTrainerForm.value.Type,
                trainer: this.editTrainerForm.value.TranierName,
                employee: this.editTrainerForm.value.EmployeeName,
                timeDuration: "7 May 2019 - 10 May 2019",
                startDate: this.start,
                endDate: this.end,
                cost: this.editTrainerForm.value.costName,
                description: this.editTrainerForm.value.Description,
                status: this.editTrainerForm.value.StatusName,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.loadtrainerlist();
            $("#edit_training").modal("hide");
            this.toastr.success("Training Updated sucessfully...!", "Success");
        }
    }
    // To Get The goal type Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstTraininglist.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstTraininglist[index];
        this.editTrainerForm.setValue({
            Type: toSetValues.trainingType,
            TranierName: toSetValues.trainer,
            EmployeeName: toSetValues.employee,
            startDateTime: toSetValues.startDate,
            endDateTime: toSetValues.endDate,
            costName: toSetValues.cost,
            Description: toSetValues.description,
            StatusName: toSetValues.status,
        });
    }
    deleteTraining() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.loadtrainerlist();
        $("#delete_training").modal("hide");
        this.toastr.success("Training  deleted sucessfully..!", "Success");
    }
    //getting the status value
    getStatus(data) {
        this.statusValue = data;
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
TrainingListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
TrainingListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
TrainingListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-training-list",
        template: _training_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingListComponent);



/***/ }),

/***/ 90274:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/training/training-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingRoutingModule": () => (/* binding */ TrainingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training.component */ 78325);
/* harmony import */ var _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-list/training-list.component */ 84078);
/* harmony import */ var _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainers/trainers.component */ 23234);
/* harmony import */ var _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-type/training-type.component */ 6034);







const routes = [
    {
        path: "",
        component: _training_component__WEBPACK_IMPORTED_MODULE_0__.TrainingComponent,
        children: [
            {
                path: "traininglist",
                component: _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_1__.TrainingListComponent
            },
            {
                path: "trainers",
                component: _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_2__.TrainersComponent
            },
            {
                path: "trainingtype",
                component: _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_3__.TrainingTypeComponent
            }
        ]
    }
];
let TrainingRoutingModule = class TrainingRoutingModule {
};
TrainingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], TrainingRoutingModule);



/***/ }),

/***/ 6034:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/training/training-type/training-type.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingTypeComponent": () => (/* binding */ TrainingTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-type.component.html?ngResource */ 99364);
/* harmony import */ var _training_type_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-type.component.css?ngResource */ 36696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);









let TrainingTypeComponent = class TrainingTypeComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "trainingtype";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        this.loadTrainingType();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.addTrainingTypeForm = this.formBuilder.group({
            GoalType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.editTrainingTypeForm = this.formBuilder.group({
            GoalType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    // Get  goal type  Api Call
    loadTrainingType() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstTrainingType = data;
            this.dtTrigger.next();
            this.rows = this.lstTrainingType;
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
    // Add  goal type  Modal Api Call
    addTrainingType() {
        if (this.addTrainingTypeForm.invalid) {
            this.markFormGroupTouched(this.addTrainingTypeForm);
            return;
        }
        if (this.addTrainingTypeForm.valid) {
            let obj = {
                type: this.addTrainingTypeForm.value.GoalType,
                description: this.addTrainingTypeForm.value.Description,
                status: this.addTrainingTypeForm.value.Status,
                id: 0,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.loadTrainingType();
            $("#add_type").modal("hide");
            this.addTrainingTypeForm.reset();
            this.toastr.success("Training type added sucessfully...!", "Success");
        }
    }
    editTrainingType() {
        if (this.editTrainingTypeForm.valid) {
            let obj = {
                type: this.editTrainingTypeForm.value.GoalType,
                description: this.editTrainingTypeForm.value.Description,
                status: this.editTrainingTypeForm.value.Status,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.loadTrainingType();
            $("#edit_type").modal("hide");
            this.toastr.success("Training type Updated sucessfully...!", "Success");
        }
    }
    // To Get The goal type Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstTrainingType.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstTrainingType[index];
        this.editTrainingTypeForm.setValue({
            GoalType: toSetValues.type,
            Description: toSetValues.description,
            Status: toSetValues.status,
        });
    }
    deleteTrainingType() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.loadTrainingType();
            $("#delete_type").modal("hide");
            this.toastr.success("Training type deleted sucessfully..!", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
TrainingTypeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
TrainingTypeComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
TrainingTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-training-type",
        template: _training_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_type_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingTypeComponent);



/***/ }),

/***/ 78325:
/*!************************************************************!*\
  !*** ./src/app/all-modules/training/training.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingComponent": () => (/* binding */ TrainingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training.component.html?ngResource */ 29622);
/* harmony import */ var _training_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training.component.css?ngResource */ 5221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TrainingComponent = class TrainingComponent {
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
TrainingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
TrainingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-training',
        template: _training_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], TrainingComponent);



/***/ }),

/***/ 48095:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/training/training.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingModule": () => (/* binding */ TrainingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-routing.module */ 90274);
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training.component */ 78325);
/* harmony import */ var _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-list/training-list.component */ 84078);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainers/trainers.component */ 23234);
/* harmony import */ var _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-type/training-type.component */ 6034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);












let TrainingModule = class TrainingModule {
};
TrainingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_training_component__WEBPACK_IMPORTED_MODULE_1__.TrainingComponent, _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_2__.TrainingListComponent, _trainers_trainers_component__WEBPACK_IMPORTED_MODULE_4__.TrainersComponent, _training_type_training_type_component__WEBPACK_IMPORTED_MODULE_5__.TrainingTypeComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__.SharingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _training_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingRoutingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__.BsDatepickerModule.forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__.SharingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__.TooltipModule.forRoot()
        ]
    })
], TrainingModule);



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

/***/ 65347:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/training/trainers/trainers.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmVycy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 12108:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/training/training-list/training-list.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 36696:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/training/training-type/training-type.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy10eXBlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 5221:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/training/training.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 67036:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/training/trainers/trainers.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page-wrapper\">\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Trainers</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Trainers</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_trainer\"><i class=\"fas fa-plus\"></i> Add New</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 30px;\">#</th>\r\n                            <th>Name </th>\r\n                            <th>Contact Number </th>\r\n                            <th>Email </th>\r\n                            <th>Description </th>\r\n                            <th>Status </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstTrainer;let i = index\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"{{item.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{item.name}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{item.contactNumber}}</td>\r\n                            <td>{{item.mail}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> {{item.status}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                            Active</a>\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_trainer\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_trainer\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Trainers List Modal -->\r\n<div id=\"add_trainer\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add New Trainer</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addTrainer()\" [formGroup]=\"addTrainerForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">First Name <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTrainerForm.get('firstName').invalid && addTrainerForm.get('firstName').touched\"\r\n                                    formControlName=\"firstName\">\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('firstName').invalid && addTrainerForm.get('firstName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('firstName').invalid && addTrainerForm.get('firstName').touched\"\r\n                                        class=\"text-danger\"> *First Name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Last Name</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTrainerForm.get('lastName').invalid && addTrainerForm.get('lastName').touched\"\r\n                                    formControlName=\"lastName\">\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('lastName').invalid && addTrainerForm.get('lastName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('lastName').invalid && addTrainerForm.get('lastName').touched\"\r\n                                        class=\"text-danger\"> *Last Name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Role <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTrainerForm.get('RoleName').invalid && addTrainerForm.get('RoleName').touched\"\r\n                                    formControlName=\"RoleName\">\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('RoleName').invalid && addTrainerForm.get('RoleName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('RoleName').invalid && addTrainerForm.get('RoleName').touched\"\r\n                                        class=\"text-danger\"> *Role is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Email <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"email\"\r\n                                    [class.invalid]=\"addTrainerForm.get('Email').invalid && addTrainerForm.get('Email').touched\"\r\n                                    formControlName=\"Email\">\r\n                                <div *ngIf=\"addTrainerForm.get('Email').invalid && addTrainerForm.get('Email').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('Email').invalid && addTrainerForm.get('Email').touched\"\r\n                                        class=\"text-danger\"> *Email is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Phone </label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTrainerForm.get('phoneNumber').invalid && addTrainerForm.get('phoneNumber').touched\"\r\n                                    formControlName=\"phoneNumber\">\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('phoneNumber').invalid && addTrainerForm.get('phoneNumber').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('phoneNumber').invalid && addTrainerForm.get('phoneNumber').touched\"\r\n                                        class=\"text-danger\"> *Phone is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTrainerForm.get('StatusName').invalid && addTrainerForm.get('StatusName').touched\"\r\n                                    formControlName=\"StatusName\">\r\n                                    <option>Active</option>\r\n                                    <option>Inactive</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('StatusName').invalid && addTrainerForm.get('StatusName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('StatusName').invalid && addTrainerForm.get('StatusName').touched\"\r\n                                        class=\"text-danger\"> *Status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description <span class=\"text-danger\">*</span></label>\r\n                                <textarea class=\"form-control\" rows=\"4\"\r\n                                    [class.invalid]=\"addTrainerForm.get('Description').invalid && addTrainerForm.get('Description').touched\"\r\n                                    formControlName=\"Description\"></textarea>\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('Description').invalid && addTrainerForm.get('Description').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('Description').invalid && addTrainerForm.get('Description').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Trainers List Modal -->\r\n\r\n<!-- Edit Trainers List Modal -->\r\n<div id=\"edit_trainer\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Trainer</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editTrainer()\" [formGroup]=\"editTrainerForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">First Name <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTrainerForm.get('firstName').invalid && editTrainerForm.get('firstName').touched\"\r\n                                    formControlName=\"firstName\">\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('firstName').invalid && editTrainerForm.get('firstName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('firstName').invalid && editTrainerForm.get('firstName').touched\"\r\n                                        class=\"text-danger\"> *First Name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Last Name</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTrainerForm.get('lastName').invalid && editTrainerForm.get('lastName').touched\"\r\n                                    formControlName=\"lastName\">\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('lastName').invalid && editTrainerForm.get('lastName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('lastName').invalid && editTrainerForm.get('lastName').touched\"\r\n                                        class=\"text-danger\"> *Last Name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Role <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTrainerForm.get('RoleName').invalid && editTrainerForm.get('RoleName').touched\"\r\n                                    formControlName=\"RoleName\">\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('RoleName').invalid && editTrainerForm.get('RoleName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('RoleName').invalid && editTrainerForm.get('RoleName').touched\"\r\n                                        class=\"text-danger\"> *Role is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Email <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"email\"\r\n                                    [class.invalid]=\"editTrainerForm.get('Email').invalid && editTrainerForm.get('Email').touched\"\r\n                                    formControlName=\"Email\">\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('Email').invalid && editTrainerForm.get('Email').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('Email').invalid && editTrainerForm.get('Email').touched\"\r\n                                        class=\"text-danger\"> *Email is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Phone </label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTrainerForm.get('phoneNumber').invalid && editTrainerForm.get('phoneNumber').touched\"\r\n                                    formControlName=\"phoneNumber\">\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('phoneNumber').invalid && editTrainerForm.get('phoneNumber').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('phoneNumber').invalid && editTrainerForm.get('phoneNumber').touched\"\r\n                                        class=\"text-danger\"> *Phone is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTrainerForm.get('StatusName').invalid && editTrainerForm.get('StatusName').touched\"\r\n                                    formControlName=\"StatusName\">\r\n                                    <option>Active</option>\r\n                                    <option>Inactive</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('StatusName').invalid && editTrainerForm.get('StatusName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('StatusName').invalid && editTrainerForm.get('StatusName').touched\"\r\n                                        class=\"text-danger\"> *Status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description <span class=\"text-danger\">*</span></label>\r\n                                <textarea class=\"form-control\" rows=\"4\"\r\n                                    [class.invalid]=\"editTrainerForm.get('Description').invalid && editTrainerForm.get('Description').touched\"\r\n                                    formControlName=\"Description\"></textarea>\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('Description').invalid && editTrainerForm.get('Description').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('Description').invalid && editTrainerForm.get('Description').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Trainers List Modal -->\r\n\r\n<!-- Delete Trainers List Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_trainer\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Trainers List</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteTrainer()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Trainers List Modal -->\r\n</div>";

/***/ }),

/***/ 82057:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/training/training-list/training-list.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page-wrapper\">\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Training</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Training</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_training\"><i class=\"fas fa-plus\"></i> Add New</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"datatable\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 30px;\">#</th>\r\n                            <th>Training Type</th>\r\n                            <th>Trainer</th>\r\n                            <th>Employee</th>\r\n                            <th>Time Duration</th>\r\n                            <th>Description </th>\r\n                            <th>Cost </th>\r\n                            <th>Status </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstTraininglist;let i = index\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>{{item.trainingType}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"assets/img/profiles/avatar-02.jpg\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{item.trainer}} </a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>\r\n                                <ul class=\"team-members\">\r\n                                    <li>\r\n                                        <a tooltip=\"Bernardo Galaviz\"><img alt=\"\"\r\n                                                src=\"assets/img/profiles/avatar-03.jpg\"></a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a tooltip=\"Richard Miles\"><img alt=\"\"\r\n                                                src=\"assets/img/profiles/avatar-03.jpg\"></a>\r\n                                    </li>\r\n                                    <li class=\"dropdown avatar-dropdown\">\r\n                                        <a class=\"all-users dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                            aria-expanded=\"false\">+15</a>\r\n                                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"avatar-group\">\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-09.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-05.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-05.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-06.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-09.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-08.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-01.jpg\">\r\n                                                </a>\r\n                                                <a class=\"avatar avatar-xs\">\r\n                                                    <img alt=\"\" src=\"assets/img/profiles/avatar-06.jpg\">\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"avatar-pagination\">\r\n                                                <ul class=\"pagination\">\r\n                                                    <li class=\"page-item\">\r\n                                                        <a class=\"page-link\" aria-label=\"Previous\">\r\n                                                            <span aria-hidden=\"true\">«</span>\r\n                                                            <span class=\"visually-hidden\">Previous</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n                                                    <li class=\"page-item\"><a class=\"page-link\">2</a></li>\r\n                                                    <li class=\"page-item\">\r\n                                                        <a class=\"page-link\" aria-label=\"Next\">\r\n                                                            <span aria-hidden=\"true\">»</span>\r\n                                                            <span class=\"visually-hidden\">Next</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                            </td>\r\n                            <td>{{item.timeDuration}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <td>{{item.cost}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> {{item.status || statusValue}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Active')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Inactive')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_training\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_training\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Training List Modal -->\r\n<div id=\"add_training\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add New Training</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addTrainingType()\" [formGroup]=\"addTrainerForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Training Type</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTrainerForm.get('Type').invalid && addTrainerForm.get('Type').touched\"\r\n                                    formControlName=\"Type\">\r\n                                    <option>Node Training</option>\r\n                                    <option>Swift Training</option>\r\n                                </select>\r\n                                <div *ngIf=\"addTrainerForm.get('Type').invalid && addTrainerForm.get('Type').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('Type').invalid && addTrainerForm.get('Type').touched\"\r\n                                        class=\"text-danger\"> *Type is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Trainer</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTrainerForm.get('TranierName').invalid && addTrainerForm.get('TranierName').touched\"\r\n                                    formControlName=\"TranierName\">\r\n                                    <option>Mike Litorus </option>\r\n                                    <option>John Doe</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('TranierName').invalid && addTrainerForm.get('TranierName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('TranierName').invalid && addTrainerForm.get('TranierName').touched\"\r\n                                        class=\"text-danger\"> *Trainer is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Employees</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTrainerForm.get('EmployeeName').invalid && addTrainerForm.get('EmployeeName').touched\"\r\n                                    formControlName=\"EmployeeName\">\r\n                                    <option>Bernardo Galaviz</option>\r\n                                    <option>Jeffrey Warden</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('EmployeeName').invalid && addTrainerForm.get('EmployeeName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('EmployeeName').invalid && addTrainerForm.get('EmployeeName').touched\"\r\n                                        class=\"text-danger\"> *Employee is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Training Cost <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTrainerForm.get('costName').invalid && addTrainerForm.get('costName').touched\"\r\n                                    formControlName=\"costName\">\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('costName').invalid && addTrainerForm.get('costName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('costName').invalid && addTrainerForm.get('costName').touched\"\r\n                                        class=\"text-danger\"> *Cost is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"addTrainerForm.get('startDateTime').invalid && addTrainerForm.get('startDateTime').touched\"\r\n                                        formControlName=\"startDateTime\">\r\n                                    <div\r\n                                        *ngIf=\"addTrainerForm.get('startDateTime').invalid && addTrainerForm.get('startDateTime').touched\">\r\n                                        <small\r\n                                            *ngIf=\"addTrainerForm.get('startDateTime').invalid && addTrainerForm.get('startDateTime').touched\"\r\n                                            class=\"text-danger\"> *Start Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>End Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"addTrainerForm.get('endDateTime').invalid && addTrainerForm.get('endDateTime').touched\"\r\n                                        formControlName=\"endDateTime\">\r\n                                    <div\r\n                                        *ngIf=\"addTrainerForm.get('endDateTime').invalid && addTrainerForm.get('endDateTime').touched\">\r\n                                        <small\r\n                                            *ngIf=\"addTrainerForm.get('endDateTime').invalid && addTrainerForm.get('endDateTime').touched\"\r\n                                            class=\"text-danger\"> *End Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description <span class=\"text-danger\">*</span></label>\r\n                                <textarea class=\"form-control\" rows=\"4\"\r\n                                    [class.invalid]=\"addTrainerForm.get('Description').invalid && addTrainerForm.get('Description').touched\"\r\n                                    formControlName=\"Description\">\r\n                            </textarea>\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('Description').invalid && addTrainerForm.get('Description').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('Description').invalid && addTrainerForm.get('Description').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTrainerForm.get('StatusName').invalid && addTrainerForm.get('StatusName').touched\"\r\n                                    formControlName=\"StatusName\">\r\n                                    <option>Active</option>\r\n                                    <option>Inactive</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTrainerForm.get('StatusName').invalid && addTrainerForm.get('StatusName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTrainerForm.get('StatusName').invalid && addTrainerForm.get('StatusName').touched\"\r\n                                        class=\"text-danger\"> *Status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Training List Modal -->\r\n\r\n<!-- Edit Training List Modal -->\r\n<div id=\"edit_training\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Training List</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editTrainingType()\" [formGroup]=\"editTrainerForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Training Type</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTrainerForm.get('Type').invalid && editTrainerForm.get('Type').touched\"\r\n                                    formControlName=\"Type\">\r\n                                    <option>Node Training</option>\r\n                                    <option>Swift Training</option>\r\n                                </select>\r\n                                <div *ngIf=\"editTrainerForm.get('Type').invalid && editTrainerForm.get('Type').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('Type').invalid && editTrainerForm.get('Type').touched\"\r\n                                        class=\"text-danger\"> *Type is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Trainer</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTrainerForm.get('TranierName').invalid && editTrainerForm.get('TranierName').touched\"\r\n                                    formControlName=\"TranierName\">\r\n                                    <option>Mike Litorus </option>\r\n                                    <option>John Doe</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('TranierName').invalid && editTrainerForm.get('TranierName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('TranierName').invalid && editTrainerForm.get('TranierName').touched\"\r\n                                        class=\"text-danger\"> *Trainer is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Employees</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTrainerForm.get('EmployeeName').invalid && editTrainerForm.get('EmployeeName').touched\"\r\n                                    formControlName=\"EmployeeName\">\r\n                                    <option>Bernardo Galaviz</option>\r\n                                    <option>Jeffrey Warden</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('EmployeeName').invalid && editTrainerForm.get('EmployeeName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('EmployeeName').invalid && editTrainerForm.get('EmployeeName').touched\"\r\n                                        class=\"text-danger\"> *Employee is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Training Cost <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTrainerForm.get('costName').invalid && editTrainerForm.get('costName').touched\"\r\n                                    formControlName=\"costName\">\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('costName').invalid && editTrainerForm.get('costName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('costName').invalid && editTrainerForm.get('costName').touched\"\r\n                                        class=\"text-danger\"> *Cost is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"editTrainerForm.get('startDateTime').invalid && editTrainerForm.get('startDateTime').touched\"\r\n                                        formControlName=\"startDateTime\"(bsValueChange)=\"from($event)\">\r\n                                    <div\r\n                                        *ngIf=\"editTrainerForm.get('startDateTime').invalid && editTrainerForm.get('startDateTime').touched\">\r\n                                        <small\r\n                                            *ngIf=\"editTrainerForm.get('startDateTime').invalid && editTrainerForm.get('startDateTime').touched\"\r\n                                            class=\"text-danger\" (bsValueChange)=\"to($event)\"> *Start Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>End Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"editTrainerForm.get('endDateTime').invalid && editTrainerForm.get('endDateTime').touched\"\r\n                                        formControlName=\"endDateTime\">\r\n                                    <div\r\n                                        *ngIf=\"editTrainerForm.get('endDateTime').invalid && editTrainerForm.get('endDateTime').touched\">\r\n                                        <small\r\n                                            *ngIf=\"editTrainerForm.get('endDateTime').invalid && editTrainerForm.get('endDateTime').touched\"\r\n                                            class=\"text-danger\"> *End Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description <span class=\"text-danger\">*</span></label>\r\n                                <textarea class=\"form-control\" rows=\"4\"\r\n                                    [class.invalid]=\"editTrainerForm.get('Description').invalid && editTrainerForm.get('Description').touched\"\r\n                                    formControlName=\"Description\">\r\n                            </textarea>\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('Description').invalid && editTrainerForm.get('Description').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('Description').invalid && editTrainerForm.get('Description').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTrainerForm.get('StatusName').invalid && editTrainerForm.get('StatusName').touched\"\r\n                                    formControlName=\"StatusName\">\r\n                                    <option>Active</option>\r\n                                    <option>Inactive</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTrainerForm.get('StatusName').invalid && editTrainerForm.get('StatusName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTrainerForm.get('StatusName').invalid && editTrainerForm.get('StatusName').touched\"\r\n                                        class=\"text-danger\"> *Status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Training List Modal -->\r\n\r\n<!-- Delete Training List Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_training\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Training List</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a class=\"btn btn-primary continue-btn\" (click)=\"deleteTraining()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Training List Modal -->\r\n</div>";

/***/ }),

/***/ 99364:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/training/training-type/training-type.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page-wrapper\">\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Training Type</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Training Type</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_type\"><i class=\"fas fa-plus\"></i> Add New</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 30px;\">#</th>\r\n                            <th>Type </th>\r\n                            <th>Description </th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstTrainingType\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>{{item.type}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> {{item.status}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_type\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_type\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Training Type Modal -->\r\n<div id=\"add_type\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add New</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addTrainingType()\" [formGroup]=\"addTrainingTypeForm\">\r\n                    <div class=\"form-group\">\r\n                        <label> Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"addTrainingTypeForm.get('GoalType').invalid && addTrainingTypeForm.get('GoalType').touched\"\r\n                            formControlName=\"GoalType\">\r\n                        <div\r\n                            *ngIf=\"addTrainingTypeForm.get('GoalType').invalid && addTrainingTypeForm.get('GoalType').touched\">\r\n                            <small\r\n                                *ngIf=\"addTrainingTypeForm.get('GoalType').invalid && addTrainingTypeForm.get('GoalType').touched\"\r\n                                class=\"text-danger\"> *Type is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"addTrainingTypeForm.get('Description').invalid && addTrainingTypeForm.get('Description').touched\"\r\n                            formControlName=\"Description\"></textarea>\r\n                        <div\r\n                            *ngIf=\"addTrainingTypeForm.get('Description').invalid && addTrainingTypeForm.get('Description').touched\">\r\n                            <small\r\n                                *ngIf=\"addTrainingTypeForm.get('Description').invalid && addTrainingTypeForm.get('Description').touched\"\r\n                                class=\"text-danger\"> *Description is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-form-label\">Status</label>\r\n                        <select class=\"form-select form-control\"\r\n                            [class.invalid]=\"addTrainingTypeForm.get('Status').invalid && addTrainingTypeForm.get('Status').touched\"\r\n                            formControlName=\"Status\">\r\n                            <option>Active</option>\r\n                            <option>Inactive</option>\r\n                        </select>\r\n                        <div\r\n                            *ngIf=\"addTrainingTypeForm.get('Status').invalid && addTrainingTypeForm.get('Status').touched\">\r\n                            <small\r\n                                *ngIf=\"addTrainingTypeForm.get('Status').invalid && addTrainingTypeForm.get('Status').touched\"\r\n                                class=\"text-danger\"> *Status is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Training Type Modal -->\r\n\r\n<!-- Edit Training Type Modal -->\r\n<div id=\"edit_type\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Type</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editTrainingType()\" [formGroup]=\"editTrainingTypeForm\">\r\n                    <div class=\"form-group\">\r\n                        <label> Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"editTrainingTypeForm.get('GoalType').invalid && editTrainingTypeForm.get('GoalType').touched\"\r\n                            formControlName=\"GoalType\">\r\n                        <div\r\n                            *ngIf=\"editTrainingTypeForm.get('GoalType').invalid && editTrainingTypeForm.get('GoalType').touched\">\r\n                            <small\r\n                                *ngIf=\"editTrainingTypeForm.get('GoalType').invalid && editTrainingTypeForm.get('GoalType').touched\"\r\n                                class=\"text-danger\"> *Type is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"editTrainingTypeForm.get('Description').invalid && editTrainingTypeForm.get('Description').touched\"\r\n                            formControlName=\"Description\"></textarea>\r\n                        <div\r\n                            *ngIf=\"editTrainingTypeForm.get('Description').invalid && editTrainingTypeForm.get('Description').touched\">\r\n                            <small\r\n                                *ngIf=\"editTrainingTypeForm.get('Description').invalid && editTrainingTypeForm.get('Description').touched\"\r\n                                class=\"text-danger\"> *Description is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-form-label\">Status</label>\r\n                        <select class=\"form-select form-control\"\r\n                            [class.invalid]=\"editTrainingTypeForm.get('Status').invalid && editTrainingTypeForm.get('Status').touched\"\r\n                            formControlName=\"Status\">\r\n                            <option>Active</option>\r\n                            <option>Inactive</option>\r\n                        </select>\r\n                        <div\r\n                            *ngIf=\"editTrainingTypeForm.get('Status').invalid && editTrainingTypeForm.get('Status').touched\">\r\n                            <small\r\n                                *ngIf=\"editTrainingTypeForm.get('Status').invalid && editTrainingTypeForm.get('Status').touched\"\r\n                                class=\"text-danger\"> *Status is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Training Type Modal -->\r\n\r\n<!-- Delete Training Type Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_type\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Training Type</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteTrainingType()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Training Type Modal -->\r\n</div>";

/***/ }),

/***/ 29622:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/training/training.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<!-- <div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\"> -->\r\n    <router-outlet></router-outlet>\r\n  <!--   </div> -->\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_training_training_module_ts.js.map