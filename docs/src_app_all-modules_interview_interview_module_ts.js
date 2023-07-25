"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_interview_interview_module_ts"],{

/***/ 51314:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/interview/interview-list/interview-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewListComponent": () => (/* binding */ InterviewListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _interview_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview-list.component.html?ngResource */ 13385);
/* harmony import */ var _interview_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview-list.component.css?ngResource */ 21903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);









let InterviewListComponent = class InterviewListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "interview";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.LoadInterview();
        this.addInterviewForm = this.formBuilder.group({
            AddQuestion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionA: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionB: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionC: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionD: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Correctanswer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.editInterviewForm = this.formBuilder.group({
            AddQuestion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionA: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionB: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionC: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            OptionD: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Correctanswer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    // Get department list  Api Call
    LoadInterview() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstInterview = data;
            this.dtTrigger.next();
            this.rows = this.lstInterview;
            this.srch = [...this.rows];
        });
    }
    // Add questions  Modal Api Call
    addInterview() {
        if (this.addInterviewForm.valid) {
            let obj = {
                questions: this.addInterviewForm.value.AddQuestion,
                option1: this.addInterviewForm.value.OptionA,
                option2: this.addInterviewForm.value.OptionB,
                option3: this.addInterviewForm.value.OptionC,
                option4: this.addInterviewForm.value.OptionD,
                correctanswer: this.addInterviewForm.value.Correctanswer,
                id: 0,
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadInterview();
            $("#add_question").modal("hide");
            this.addInterviewForm.reset();
            this.toastr.success("Questions added sucessfully...!", "Success");
        }
    }
    editInterview() {
        if (this.editInterviewForm.valid) {
            let obj = {
                questions: this.editInterviewForm.value.AddQuestion,
                option1: this.editInterviewForm.value.OptionA,
                option2: this.editInterviewForm.value.OptionB,
                option3: this.editInterviewForm.value.OptionC,
                option4: this.editInterviewForm.value.OptionD,
                correctanswer: this.editInterviewForm.value.Correctanswer,
                id: this.editId,
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.LoadInterview();
            $("#edit_question").modal("hide");
            this.toastr.success("Edit questions Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editedvalue = value.questions;
        this.editId = value.id;
        const index = this.lstInterview.findIndex((item) => {
            return item.id === value.id;
        });
        let toSetValues = this.lstInterview[index];
        this.editInterviewForm.setValue({
            AddQuestion: toSetValues.questions,
            OptionA: toSetValues.option1,
            OptionB: toSetValues.option2,
            OptionC: toSetValues.option3,
            OptionD: toSetValues.option4,
            Correctanswer: toSetValues.correctanswer,
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
InterviewListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
InterviewListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
InterviewListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-interview-list',
        template: _interview_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_interview_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InterviewListComponent);



/***/ }),

/***/ 29778:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/interview/interview-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewRoutingModule": () => (/* binding */ InterviewRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _interview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview.component */ 86081);
/* harmony import */ var _interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview-list/interview-list.component */ 51314);





const routes = [
    {
        path: "",
        component: _interview_component__WEBPACK_IMPORTED_MODULE_0__.InterviewComponent,
        children: [
            {
                path: "interview-questions",
                component: _interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_1__.InterviewListComponent
            }
        ]
    }
];
let InterviewRoutingModule = class InterviewRoutingModule {
};
InterviewRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], InterviewRoutingModule);



/***/ }),

/***/ 86081:
/*!**************************************************************!*\
  !*** ./src/app/all-modules/interview/interview.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewComponent": () => (/* binding */ InterviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _interview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview.component.html?ngResource */ 78168);
/* harmony import */ var _interview_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview.component.css?ngResource */ 13716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let InterviewComponent = class InterviewComponent {
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
InterviewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
InterviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-interview',
        template: _interview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_interview_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], InterviewComponent);



/***/ }),

/***/ 49957:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/interview/interview.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewModule": () => (/* binding */ InterviewModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _interview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview-routing.module */ 29778);
/* harmony import */ var _interview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview.component */ 86081);
/* harmony import */ var _interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interview-list/interview-list.component */ 51314);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








let InterviewModule = class InterviewModule {
};
InterviewModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_interview_component__WEBPACK_IMPORTED_MODULE_1__.InterviewComponent, _interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_2__.InterviewListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _interview_routing_module__WEBPACK_IMPORTED_MODULE_0__.InterviewRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule
        ]
    })
], InterviewModule);



/***/ }),

/***/ 21903:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/interview/interview-list/interview-list.component.css?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcnZpZXctbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 13716:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/interview/interview.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 13385:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/interview/interview-list/interview-list.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n\t\t\t\r\n\t\t\t\t<!-- Page Content -->\r\n                <div class=\"content container-fluid\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Page Header -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"page-head-box\">\r\n\t\t\t\t\t\t\t\t<h3>Interview Questions</h3>\r\n\t\t\t\t\t\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Interview Questions</li>\r\n\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Page Header -->\r\n\r\n\t\t\t\t\t<!-- Search Filter -->\r\n\t\t\t\t\t<div class=\"row filter-row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\"></div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 text-end\">\r\n\t\t\t\t\t\t\t<div class=\"add-emp-section\">\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-success btn-add-emp me-3\" data-bs-toggle=\"modal\" data-bs-target=\"#add_question\"><i class=\"fas fa-plus\"></i> Add Question</a>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_category\"><i class=\"fas fa-plus\"></i> Add Category</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Search Filter -->\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Questions</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Option A</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Option B</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Option C</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Option D</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Correct Answer</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of lstInterview\"> \r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.questions}}\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.option1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td> {{item.option2}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.option3}}  </td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.option4}} </td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.correctanswer}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-end ico-sec justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#edit_question\" (click)=\"edit(item)\"><i class=\"fas fa-pen\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-bs-toggle=\"modal\" data-bs-target=\"#delete_job\"><i class=\"far fa-trash-alt\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t<!-- /Page Content -->\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<!-- Add Questions Modal -->\r\n\t\t\t\t<div id=\"add_question\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Add Questions</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"addInterview()\" [formGroup]=\"addInterviewForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Category</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>-</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Web Development</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Application Development</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>IT Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Accounts Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Support Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Marketing</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Questions</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" [class.invalid]=\"addInterviewForm.get('AddQuestion').invalid && addInterviewForm.get('AddQuestion').touched\"\r\n                            formControlName=\"AddQuestion\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"addInterviewForm.get('AddQuestion').invalid && addInterviewForm.get('AddQuestion').touched\">\r\n                            <small\r\n                                *ngIf=\"addInterviewForm.get('AddQuestion').invalid && addInterviewForm.get('AddQuestion').touched\"\r\n                                class=\"text-danger\"> *Questions required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option A</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [class.invalid]=\"addInterviewForm.get('OptionA').invalid && addInterviewForm.get('OptionA').touched\"\r\n                            formControlName=\"OptionA\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"addInterviewForm.get('OptionA').invalid && addInterviewForm.get('OptionA').touched\">\r\n                            <small\r\n                                *ngIf=\"addInterviewForm.get('OptionA').invalid && addInterviewForm.get('OptionA').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option B</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [class.invalid]=\"addInterviewForm.get('OptionB').invalid && addInterviewForm.get('OptionB').touched\"\r\n                            formControlName=\"OptionB\">\r\n                            <div\r\n                            *ngIf=\"addInterviewForm.get('OptionB').invalid && addInterviewForm.get('OptionB').touched\">\r\n                            <small\r\n                                *ngIf=\"addInterviewForm.get('OptionB').invalid && addInterviewForm.get('OptionB').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option C</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [class.invalid]=\"addInterviewForm.get('OptionC').invalid && addInterviewForm.get('OptionC').touched\"\r\n                            formControlName=\"OptionC\">\r\n                            <div\r\n                            *ngIf=\"addInterviewForm.get('OptionC').invalid && addInterviewForm.get('OptionC').touched\">\r\n                            <small\r\n                                *ngIf=\"addInterviewForm.get('OptionC').invalid && addInterviewForm.get('OptionC').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option D</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [class.invalid]=\"addInterviewForm.get('OptionD').invalid && addInterviewForm.get('OptionD').touched\"\r\n                            formControlName=\"OptionD\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"addInterviewForm.get('OptionD').invalid && addInterviewForm.get('OptionD').touched\">\r\n                            <small\r\n                                *ngIf=\"addInterviewForm.get('OptionD').invalid && addInterviewForm.get('OptionD').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Correct Answer</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"form-select form-control\" [class.invalid]=\"addInterviewForm.get('Correctanswer').invalid && addInterviewForm.get('Correctanswer').touched\"\r\n                            formControlName=\"Correctanswer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>-</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option A</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option B</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option C</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option D</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"addInterviewForm.get('Correctanswer').invalid && addInterviewForm.get('Correctanswer').touched\">\r\n                            <small\r\n                                *ngIf=\"addInterviewForm.get('Correctanswer').invalid && addInterviewForm.get('Correctanswer').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Code Snippets</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Answer Explanation</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Video Link</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Image To Question</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"file\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Save</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Add Questions Modal -->\r\n\r\n\r\n\t\t\t\t<!-- Add Category Modal -->\r\n\t\t\t\t<div id=\"add_category\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Add Category</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Category</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n                             \r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Save</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Add Questions Modal -->\r\n\r\n\t\t\t\t<!-- Edit Job Modal -->\r\n\t\t\t\t<div id=\"edit_question\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"modal-title\">Edit Questions</h5>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<form (ngSubmit)=\"editInterview()\" [formGroup]=\"editInterviewForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Category</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>-</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>HTML</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>CSS</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"form-select form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>-</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Web Development</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Application Development</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>IT Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Accounts Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Support Management</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Marketing</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Questions</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" [class.invalid]=\"editInterviewForm.get('AddQuestion').invalid && editInterviewForm.get('AddQuestion').touched\"\r\n                            formControlName=\"AddQuestion\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tIS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n                            *ngIf=\"editInterviewForm.get('AddQuestion').invalid && editInterviewForm.get('AddQuestion').touched\">\r\n                            <small\r\n                                *ngIf=\"editInterviewForm.get('AddQuestion').invalid && editInterviewForm.get('AddQuestion').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option A</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"Design facilities\" [class.invalid]=\"editInterviewForm.get('OptionA').invalid && editInterviewForm.get('OptionA').touched\"\r\n                            formControlName=\"OptionA\">\r\n                            <div\r\n                            *ngIf=\"editInterviewForm.get('OptionA').invalid && editInterviewForm.get('OptionA').touched\">\r\n                            <small\r\n                                *ngIf=\"editInterviewForm.get('OptionA').invalid && editInterviewForm.get('OptionA').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option B</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"language subsets\" [class.invalid]=\"editInterviewForm.get('OptionB').invalid && editInterviewForm.get('OptionB').touched\"\r\n                            formControlName=\"OptionB\">\r\n                            <div\r\n                            *ngIf=\"editInterviewForm.get('OptionB').invalid && editInterviewForm.get('OptionB').touched\">\r\n                            <small\r\n                                *ngIf=\"editInterviewForm.get('OptionB').invalid && editInterviewForm.get('OptionB').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option C</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"Lack of portability\" [class.invalid]=\"editInterviewForm.get('OptionC').invalid && editInterviewForm.get('OptionC').touched\"\r\n                            formControlName=\"OptionC\">\r\n                            <div\r\n                            *ngIf=\"editInterviewForm.get('OptionC').invalid && editInterviewForm.get('OptionC').touched\">\r\n                            <small\r\n                                *ngIf=\"editInterviewForm.get('OptionC').invalid && editInterviewForm.get('OptionC').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Option D</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"Inability to perform data\" [class.invalid]=\"editInterviewForm.get('OptionD').invalid && editInterviewForm.get('OptionD').touched\"\r\n                            formControlName=\"OptionD\">\r\n                             <div\r\n                            *ngIf=\"editInterviewForm.get('OptionD').invalid && editInterviewForm.get('OptionD').touched\">\r\n                            <small\r\n                                *ngIf=\"editInterviewForm.get('OptionD').invalid && editInterviewForm.get('OptionD').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Correct Answer</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"form-select form-control\" [class.invalid]=\"editInterviewForm.get('Correctanswer').invalid && editInterviewForm.get('Correctanswer').touched\"\r\n                            formControlName=\"Correctanswer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>-</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Option A</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option B</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option C</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Option D</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <div\r\n                            *ngIf=\"editInterviewForm.get('Correctanswer').invalid && editInterviewForm.get('Correctanswer').touched\">\r\n                            <small\r\n                                *ngIf=\"editInterviewForm.get('Correctanswer').invalid && editInterviewForm.get('Correctanswer').touched\"\r\n                                class=\"text-danger\"> *Quesitons required</small>\r\n                        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Code Snippets</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Answer Explanation</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Video Link</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Image To Question</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"file\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"submit-section\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary submit-btn\">Save</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Edit Job Modal -->\r\n\r\n\t\t\t\t<!-- Delete Job Modal -->\r\n\t\t\t\t<div class=\"modal custom-modal fade\" id=\"delete_job\" role=\"dialog\">\r\n\t\t\t\t\t<div class=\"modal-dialog modal-dialog-centered\">\r\n\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-header\">\r\n\t\t\t\t\t\t\t\t\t<h3>Delete</h3>\r\n\t\t\t\t\t\t\t\t\t<p>Are you sure want to delete?</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-btn delete-action\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\">Delete</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Delete Job Modal -->\r\n\t\t\t\t\r\n            </div>\r\n\t\t\t<!-- /Page Wrapper -->";

/***/ }),

/***/ 78168:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/interview/interview.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_interview_interview_module_ts.js.map