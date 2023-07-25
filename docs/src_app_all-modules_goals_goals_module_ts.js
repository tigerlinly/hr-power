"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_goals_goals_module_ts"],{

/***/ 54791:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/goals/goal-list/goal-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalListComponent": () => (/* binding */ GoalListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _goal_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goal-list.component.html?ngResource */ 96045);
/* harmony import */ var _goal_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal-list.component.css?ngResource */ 3639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);










let GoalListComponent = class GoalListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "goallist";
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
    }
    ngOnInit() {
        this.LoadGoal();
        this.addGoalForm = this.formBuilder.group({
            GoalType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Subject: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TargetAchivement: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StartDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            EndDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.editGoalForm = this.formBuilder.group({
            GoalType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Subject: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TargetAchivement: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StartDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            EndDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    // Get goallist  Api Call
    LoadGoal() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstGoal = data;
            this.dtTrigger.next();
            this.rows = this.lstGoal;
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
    addGoal() {
        if (this.addGoalForm.invalid) {
            this.markFormGroupTouched(this.addGoalForm);
            return;
        }
        if (this.addGoalForm.valid) {
            let StartDatetime = this.pipe.transform(this.addGoalForm.value.StartDate, "dd-MM-yyyy");
            let EndDatetime = this.pipe.transform(this.addGoalForm.value.EndDate, "dd-MM-yyyy");
            let obj = {
                goalType: this.addGoalForm.value.GoalType,
                subject: this.addGoalForm.value.Subject,
                targetAchivement: this.addGoalForm.value.TargetAchivement,
                startDate: StartDatetime,
                endDate: EndDatetime,
                description: this.addGoalForm.value.Description,
                status: this.addGoalForm.value.Status,
                progress: "Completed 73%",
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadGoal();
            $("#add_goal").modal("hide");
            this.addGoalForm.reset();
            this.toastr.success("Goal added sucessfully...!", "Success");
        }
    }
    editGoal() {
        if (this.editGoalForm.valid) {
            let StartDatetime = this.pipe.transform(this.editGoalForm.value.StartDate, "dd-MM-yyyy");
            let EndDatetime = this.pipe.transform(this.editGoalForm.value.EndDate, "dd-MM-yyyy");
            let obj = {
                goalType: this.editGoalForm.value.GoalType,
                subject: this.editGoalForm.value.Subject,
                targetAchivement: this.editGoalForm.value.TargetAchivement,
                startDate: StartDatetime,
                endDate: EndDatetime,
                description: this.editGoalForm.value.Description,
                status: this.editGoalForm.value.Status,
                progress: "Completed 73%",
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadGoal();
            $("#edit_goal").modal("hide");
            this.toastr.success("Goal Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstGoal.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstGoal[index];
        this.editGoalForm.setValue({
            GoalType: toSetValues.goalType,
            Subject: toSetValues.subject,
            TargetAchivement: toSetValues.targetAchivement,
            StartDate: toSetValues.startDate,
            EndDate: toSetValues.endDate,
            Description: toSetValues.description,
            Status: toSetValues.status,
        });
    }
    deleteGoal() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.LoadGoal();
            $("#delete_goal").modal("hide");
            this.toastr.success("Goal deleted sucessfully..!", "Success");
        });
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
GoalListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
GoalListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
GoalListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-goal-list",
        template: _goal_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_goal_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GoalListComponent);



/***/ }),

/***/ 2368:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/goals/goal-type/goal-type.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalTypeComponent": () => (/* binding */ GoalTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _goal_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goal-type.component.html?ngResource */ 35343);
/* harmony import */ var _goal_type_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal-type.component.css?ngResource */ 49219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let GoalTypeComponent = class GoalTypeComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "goaltype";
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        this.LoadGoaltype();
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.addGoalTypeForm = this.formBuilder.group({
            GoalType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.editGoalTypeForm = this.formBuilder.group({
            GoalType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    // Get  goal type  Api Call
    LoadGoaltype() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstGoaltype = data;
            this.dtTrigger.next();
            this.rows = this.lstGoaltype;
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
    addGoalType() {
        if (this.addGoalTypeForm.invalid) {
            this.markFormGroupTouched(this.addGoalTypeForm);
            return;
        }
        if (this.addGoalTypeForm.valid) {
            let obj = {
                type: this.addGoalTypeForm.value.GoalType,
                description: this.addGoalTypeForm.value.Description,
                status: this.addGoalTypeForm.value.Status,
                id: 0,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadGoaltype();
            $("#add_type").modal("hide");
            this.addGoalTypeForm.reset();
            this.toastr.success("Goal type added sucessfully...!", "Success");
        }
    }
    editGoalType() {
        if (this.editGoalTypeForm.valid) {
            let obj = {
                type: this.editGoalTypeForm.value.GoalType,
                description: this.editGoalTypeForm.value.Description,
                status: this.editGoalTypeForm.value.Status,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadGoaltype();
            $("#edit_type").modal("hide");
            this.toastr.success("Goal type Updated sucessfully...!", "Success");
        }
    }
    // To Get The goal type Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editId = value;
        const index = this.lstGoaltype.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.lstGoaltype[index];
        this.editGoalTypeForm.setValue({
            GoalType: toSetValues.type,
            Description: toSetValues.description,
            Status: toSetValues.status,
        });
    }
    deleteGoalType() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.LoadGoaltype();
            $("#delete_type").modal("hide");
            this.toastr.success("Goal type deleted sucessfully..!", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
GoalTypeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
GoalTypeComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
GoalTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-goal-type",
        template: _goal_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_goal_type_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GoalTypeComponent);



/***/ }),

/***/ 41507:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/goals/goals-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalsRoutingModule": () => (/* binding */ GoalsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _goals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goals.component */ 17809);
/* harmony import */ var _goal_list_goal_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal-list/goal-list.component */ 54791);
/* harmony import */ var _goal_type_goal_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-type/goal-type.component */ 2368);






const routes = [
    {
        path: "",
        component: _goals_component__WEBPACK_IMPORTED_MODULE_0__.GoalsComponent,
        children: [
            {
                path: "goallist",
                component: _goal_list_goal_list_component__WEBPACK_IMPORTED_MODULE_1__.GoalListComponent
            },
            {
                path: "goaltype",
                component: _goal_type_goal_type_component__WEBPACK_IMPORTED_MODULE_2__.GoalTypeComponent
            }
        ]
    }
];
let GoalsRoutingModule = class GoalsRoutingModule {
};
GoalsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], GoalsRoutingModule);



/***/ }),

/***/ 17809:
/*!******************************************************!*\
  !*** ./src/app/all-modules/goals/goals.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalsComponent": () => (/* binding */ GoalsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _goals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goals.component.html?ngResource */ 10361);
/* harmony import */ var _goals_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goals.component.css?ngResource */ 20768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let GoalsComponent = class GoalsComponent {
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
GoalsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
GoalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-goals',
        template: _goals_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_goals_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], GoalsComponent);



/***/ }),

/***/ 23326:
/*!***************************************************!*\
  !*** ./src/app/all-modules/goals/goals.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalsModule": () => (/* binding */ GoalsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _goals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goals-routing.module */ 41507);
/* harmony import */ var _goals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goals.component */ 17809);
/* harmony import */ var _goal_list_goal_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-list/goal-list.component */ 54791);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _goal_type_goal_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goal-type/goal-type.component */ 2368);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);











let GoalsModule = class GoalsModule {
};
GoalsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_goals_component__WEBPACK_IMPORTED_MODULE_1__.GoalsComponent, _goal_list_goal_list_component__WEBPACK_IMPORTED_MODULE_2__.GoalListComponent, _goal_type_goal_type_component__WEBPACK_IMPORTED_MODULE_4__.GoalTypeComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _goals_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoalsRoutingModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__.SharingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__.BsDatepickerModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__.SharingModule
        ]
    })
], GoalsModule);



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

/***/ 3639:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/goals/goal-list/goal-list.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb2FsLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 49219:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/goals/goal-type/goal-type.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb2FsLXR5cGUuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 20768:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/goals/goals.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb2Fscy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 96045:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/goals/goal-list/goal-list.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Goal Tracking</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Goal Tracking</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_goal\"><i class=\"fas fa-plus\"></i> Add New</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 30px;\">#</th>\r\n                            <th>Goal Type</th>\r\n                            <th>Subject</th>\r\n                            <th>Target Achievement</th>\r\n                            <th>Start Date</th>\r\n                            <th>End Date</th>\r\n                            <th>Description </th>\r\n                            <th>Status </th>\r\n                            <th>Progress </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstGoal;let i = index\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>{{item.goalType}}</td>\r\n                            <td>{{item.subject}}</td>\r\n                            <td>{{item.targetAchivement}}</td>\r\n                            <td>\r\n                                {{item.startDate | customDate}}\r\n                            </td>\r\n                            <td>{{item.endDate | customDate}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> {{item.status || statusValue}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Active')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Inactive')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"job-app\">\r\n                                <div class=\"prog-div\">\r\n                                    <div class=\"progress org\"> <span class=\"progress-left\"> <span class=\"progress-bar\"></span> </span> <span class=\"progress-right\"> <span class=\"progress-bar\"></span> </span>\r\n                                        <div class=\"progress-value\">{{item.progress}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_goal\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_goal\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Goal Modal -->\r\n<div id=\"add_goal\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Goal Tracking</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addGoal()\" [formGroup]=\"addGoalForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Goal Type</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addGoalForm.get('GoalType').invalid && addGoalForm.get('GoalType').touched\"\r\n                                    formControlName=\"GoalType\">\r\n                                    <option>Invoice Goal</option>\r\n                                    <option>Event Goal</option>\r\n                                </select>\r\n                                <div *ngIf=\"addGoalForm.get('GoalType').invalid && addGoalForm.get('GoalType').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addGoalForm.get('GoalType').invalid && addGoalForm.get('GoalType').touched\"\r\n                                        class=\"text-danger\"> *Goal Type is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Subject</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addGoalForm.get('Subject').invalid && addGoalForm.get('Subject').touched\"\r\n                                    formControlName=\"Subject\">\r\n                                <div *ngIf=\"addGoalForm.get('Subject').invalid && addGoalForm.get('Subject').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addGoalForm.get('Subject').invalid && addGoalForm.get('Subject').touched\"\r\n                                        class=\"text-danger\"> *Subject is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Target Achievement</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addGoalForm.get('TargetAchivement').invalid && addGoalForm.get('TargetAchivement').touched\"\r\n                                    formControlName=\"TargetAchivement\">\r\n                                <div\r\n                                    *ngIf=\"addGoalForm.get('TargetAchivement').invalid && addGoalForm.get('TargetAchivement').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addGoalForm.get('TargetAchivement').invalid && addGoalForm.get('TargetAchivement').touched\"\r\n                                        class=\"text-danger\"> *Target Achievement is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"addGoalForm.get('StartDate').invalid && addGoalForm.get('StartDate').touched\"\r\n                                        formControlName=\"StartDate\">\r\n                                    <div\r\n                                        *ngIf=\"addGoalForm.get('TargetAchivement').invalid && addGoalForm.get('TargetAchivement').touched\">\r\n                                        <small\r\n                                            *ngIf=\"addGoalForm.get('TargetAchivement').invalid && addGoalForm.get('TargetAchivement').touched\"\r\n                                            class=\"text-danger\"> *Start Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>End Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"addGoalForm.get('EndDate').invalid && addGoalForm.get('EndDate').touched\"\r\n                                        formControlName=\"EndDate\">\r\n                                    <div\r\n                                        *ngIf=\"addGoalForm.get('EndDate').invalid && addGoalForm.get('EndDate').touched\">\r\n                                        <small\r\n                                            *ngIf=\"addGoalForm.get('EndDate').invalid && addGoalForm.get('EndDate').touched\"\r\n                                            class=\"text-danger\"> *End Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description <span class=\"text-danger\">*</span></label>\r\n                                <textarea class=\"form-control\" rows=\"4\"\r\n                                    [class.invalid]=\"addGoalForm.get('Description').invalid && addGoalForm.get('Description').touched\"\r\n                                    formControlName=\"Description\">\r\n                                </textarea>\r\n                                <div\r\n                                    *ngIf=\"addGoalForm.get('Description').invalid && addGoalForm.get('Description').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addGoalForm.get('Description').invalid && addGoalForm.get('Description').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addGoalForm.get('Status').invalid && addGoalForm.get('Status').touched\"\r\n                                    formControlName=\"Status\">\r\n                                    <option>Active</option>\r\n                                    <option>Inactive</option>\r\n                                </select>\r\n                                <div *ngIf=\"addGoalForm.get('Status').invalid && addGoalForm.get('Status').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addGoalForm.get('Status').invalid && addGoalForm.get('Status').touched\"\r\n                                        class=\"text-danger\"> *End Date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Goal Modal -->\r\n\r\n<!-- Edit Goal Modal -->\r\n<div id=\"edit_goal\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Goal Tracking</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editGoal()\" [formGroup]=\"editGoalForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Goal Type</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editGoalForm.get('GoalType').invalid && editGoalForm.get('GoalType').touched\"\r\n                                    formControlName=\"GoalType\">\r\n                                    <option>Invoice Goal</option>\r\n                                    <option>Event Goal</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editGoalForm.get('GoalType').invalid && editGoalForm.get('GoalType').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editGoalForm.get('GoalType').invalid && editGoalForm.get('GoalType').touched\"\r\n                                        class=\"text-danger\"> *Goal Type is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Subject</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editGoalForm.get('Subject').invalid && editGoalForm.get('Subject').touched\"\r\n                                    formControlName=\"Subject\">\r\n                                <div *ngIf=\"editGoalForm.get('Subject').invalid && editGoalForm.get('Subject').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editGoalForm.get('Subject').invalid && editGoalForm.get('Subject').touched\"\r\n                                        class=\"text-danger\"> *Subject is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Target Achievement</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editGoalForm.get('TargetAchivement').invalid && editGoalForm.get('TargetAchivement').touched\"\r\n                                    formControlName=\"TargetAchivement\">\r\n                                <div\r\n                                    *ngIf=\"editGoalForm.get('TargetAchivement').invalid && editGoalForm.get('TargetAchivement').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editGoalForm.get('TargetAchivement').invalid && editGoalForm.get('TargetAchivement').touched\"\r\n                                        class=\"text-danger\"> *Target Achievement is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Start Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"editGoalForm.get('StartDate').invalid && editGoalForm.get('StartDate').touched\"\r\n                                        formControlName=\"StartDate\">\r\n                                    <div\r\n                                        *ngIf=\"editGoalForm.get('TargetAchivement').invalid && editGoalForm.get('TargetAchivement').touched\">\r\n                                        <small\r\n                                            *ngIf=\"editGoalForm.get('TargetAchivement').invalid && editGoalForm.get('TargetAchivement').touched\"\r\n                                            class=\"text-danger\"> *Start Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>End Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\">\r\n                                    <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                        [class.invalid]=\"editGoalForm.get('EndDate').invalid && editGoalForm.get('EndDate').touched\"\r\n                                        formControlName=\"EndDate\">\r\n                                    <div\r\n                                        *ngIf=\"editGoalForm.get('EndDate').invalid && editGoalForm.get('EndDate').touched\">\r\n                                        <small\r\n                                            *ngIf=\"editGoalForm.get('EndDate').invalid && editGoalForm.get('EndDate').touched\"\r\n                                            class=\"text-danger\"> *End Date is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description <span class=\"text-danger\">*</span></label>\r\n                                <textarea class=\"form-control\" rows=\"4\"\r\n                                    [class.invalid]=\"editGoalForm.get('Description').invalid && editGoalForm.get('Description').touched\"\r\n                                    formControlName=\"Description\">\r\n\r\n                                </textarea>\r\n                                <div\r\n                                    *ngIf=\"editGoalForm.get('Description').invalid && editGoalForm.get('Description').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editGoalForm.get('Description').invalid && editGoalForm.get('Description').touched\"\r\n                                        class=\"text-danger\"> *End Date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editGoalForm.get('Status').invalid && editGoalForm.get('Status').touched\"\r\n                                    formControlName=\"Status\">\r\n                                    <option>Active</option>\r\n                                    <option>Inactive</option>\r\n                                </select>\r\n                                <div *ngIf=\"editGoalForm.get('Status').invalid && editGoalForm.get('Status').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editGoalForm.get('Status').invalid && editGoalForm.get('Status').touched\"\r\n                                        class=\"text-danger\"> *End Date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Goal Modal -->\r\n\r\n<!-- Delete Goal Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_goal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Goal Tracking List</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteGoal()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Goal Modal -->";

/***/ }),

/***/ 35343:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/goals/goal-type/goal-type.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Goal Type</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Goal Type</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_type\"><i class=\"fas fa-plus\"></i> Add New</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 30px;\">#</th>\r\n                            <th>Type </th>\r\n                            <th>Description </th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of lstGoaltype\">\r\n                            <td>{{item.id}}</td>\r\n                            <td>{{item.type}}</td>\r\n                            <td>{{item.description}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> {{item.status}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_type\" (click)=\"edit(item.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_type\" (click)=\"tempId =item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Goal Modal -->\r\n<div id=\"add_type\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add New Goal Type</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addGoalType()\" [formGroup]=\"addGoalTypeForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Goal Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"addGoalTypeForm.get('GoalType').invalid && addGoalTypeForm.get('GoalType').touched\"\r\n                            formControlName=\"GoalType\">\r\n                        <div *ngIf=\"addGoalTypeForm.get('GoalType').invalid && addGoalTypeForm.get('GoalType').touched\">\r\n                            <small\r\n                                *ngIf=\"addGoalTypeForm.get('GoalType').invalid && addGoalTypeForm.get('GoalType').touched\"\r\n                                class=\"text-danger\"> *Goal Type is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"addGoalTypeForm.get('Description').invalid && addGoalTypeForm.get('Description').touched\"\r\n                            formControlName=\"Description\"></textarea>\r\n                        <div\r\n                            *ngIf=\"addGoalTypeForm.get('Description').invalid && addGoalTypeForm.get('Description').touched\">\r\n                            <small\r\n                                *ngIf=\"addGoalTypeForm.get('Description').invalid && addGoalTypeForm.get('Description').touched\"\r\n                                class=\"text-danger\"> *Description is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-form-label\">Status</label>\r\n                        <select class=\"form-select form-control\"\r\n                            [class.invalid]=\"addGoalTypeForm.get('Status').invalid && addGoalTypeForm.get('Status').touched\"\r\n                            formControlName=\"Status\">\r\n                            <option>Active</option>\r\n                            <option>Inactive</option>\r\n                        </select>\r\n                        <div *ngIf=\"addGoalTypeForm.get('Status').invalid && addGoalTypeForm.get('Status').touched\">\r\n                            <small\r\n                                *ngIf=\"addGoalTypeForm.get('Status').invalid && addGoalTypeForm.get('Status').touched\"\r\n                                class=\"text-danger\"> *Status is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Goal Modal -->\r\n\r\n<!-- Edit Goal Modal -->\r\n<div id=\"edit_type\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Goal Type</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editGoalType()\" [formGroup]=\"editGoalTypeForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Goal Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"\r\n                            [class.invalid]=\"editGoalTypeForm.get('GoalType').invalid && editGoalTypeForm.get('GoalType').touched\"\r\n                            formControlName=\"GoalType\">\r\n                        <div\r\n                            *ngIf=\"editGoalTypeForm.get('GoalType').invalid && editGoalTypeForm.get('GoalType').touched\">\r\n                            <small\r\n                                *ngIf=\"editGoalTypeForm.get('GoalType').invalid && editGoalTypeForm.get('GoalType').touched\"\r\n                                class=\"text-danger\"> *Goal Type is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\"\r\n                            [class.invalid]=\"editGoalTypeForm.get('Description').invalid && editGoalTypeForm.get('Description').touched\"\r\n                            formControlName=\"Description\"></textarea>\r\n                        <div\r\n                            *ngIf=\"editGoalTypeForm.get('Description').invalid && editGoalTypeForm.get('Description').touched\">\r\n                            <small\r\n                                *ngIf=\"editGoalTypeForm.get('Description').invalid && editGoalTypeForm.get('Description').touched\"\r\n                                class=\"text-danger\"> *Description is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-form-label\">Status</label>\r\n                        <select class=\"form-select form-control\"\r\n                            [class.invalid]=\"editGoalTypeForm.get('Status').invalid && editGoalTypeForm.get('Status').touched\"\r\n                            formControlName=\"Status\">\r\n                            <option>Active</option>\r\n                            <option>Inactive</option>\r\n                        </select>\r\n                        <div *ngIf=\"editGoalTypeForm.get('Status').invalid && editGoalTypeForm.get('Status').touched\">\r\n                            <small\r\n                                *ngIf=\"editGoalTypeForm.get('Status').invalid && editGoalTypeForm.get('Status').touched\"\r\n                                class=\"text-danger\"> *Status is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Goal Modal -->\r\n\r\n<!-- Delete Goal Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_type\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Goal Type</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteGoalType()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Goal Modal -->";

/***/ }),

/***/ 10361:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/goals/goals.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_goals_goals_module_ts.js.map