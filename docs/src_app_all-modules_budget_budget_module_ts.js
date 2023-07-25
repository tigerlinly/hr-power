"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_budget_budget_module_ts"],{

/***/ 34653:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/budget/budget-list/budget-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetListComponent": () => (/* binding */ BudgetListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _budget_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-list.component.html?ngResource */ 97221);
/* harmony import */ var _budget_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget-list.component.css?ngResource */ 96645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);








let BudgetListComponent = class BudgetListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.url = "budget";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe("en-US");
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        this.LoadRevenue();
        this.addRevenueForm = this.formBuilder.group({
            BudgetTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            StartDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            EndDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            Tax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.editRevenueForm = this.formBuilder.group({
            BudgetTitle: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            StartDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            EndDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            Tax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    // Get department list  Api Call
    LoadRevenue() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstRevenue = data;
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
            let purchaseToDateFormat = this.pipe.transform(this.addRevenueForm.value.StartDate, "dd-MM-yyyy");
            let purchaseToDateFormat1 = this.pipe.transform(this.addRevenueForm.value.EndDate, "dd-MM-yyyy");
            let obj = {
                budgettitle: this.addRevenueForm.value.BudgetTitle,
                startdate: purchaseToDateFormat,
                enddate: purchaseToDateFormat1,
                taxamount: this.addRevenueForm.value.Tax,
                id: 0,
                budgettype: "project",
                totalrevenue: "2500000",
                totalexpenses: "1500000",
                budgetamount: "999990",
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
            });
            this.LoadRevenue();
            $("#add_categories").modal("hide");
            this.addRevenueForm.reset();
            this.toastr.success("Budget-list added sucessfully...!", "Success");
        }
    }
    editRevenue() {
        if (this.editRevenueForm.valid) {
            let obj = {
                budgettitle: this.editRevenueForm.value.BudgetTitle,
                startdate: this.editRevenueForm.value.StartDate,
                enddate: this.editRevenueForm.value.EndDate,
                taxamount: this.editRevenueForm.value.Tax,
                id: this.editId,
                budgettype: "project",
                totalrevenue: "2500000",
                totalexpenses: "1500000",
                budgetamount: "999990",
            };
            this.srvModuleService.update(obj, this.url).subscribe((data1) => {
            });
            this.LoadRevenue();
            $("#edit_categories").modal("hide");
            this.toastr.success("Budget-list Updated sucessfully...!", "Success");
        }
    }
    // To Get The department Edit Id And Set Values To Edit Modal Form
    edit(value) {
        this.editedvalue = value.budgettitle;
        this.editId = value.id;
        const index = this.lstRevenue.findIndex((item) => {
            return item.id === value.id;
        });
        let toSetValues = this.lstRevenue[index];
        this.editRevenueForm.setValue({
            BudgetTitle: toSetValues.budgettitle,
            StartDate: toSetValues.startdate,
            EndDate: toSetValues.enddate,
            Tax: toSetValues.taxamount,
        });
    }
    deleteRevenue() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.LoadRevenue();
            $("#delete").modal("hide");
            this.toastr.success("Budget-revenue deleted sucessfully..!", "Success");
        });
    }
};
BudgetListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService }
];
BudgetListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-budget-list',
        template: _budget_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_budget_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BudgetListComponent);



/***/ }),

/***/ 23009:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/budget/budget-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetRoutingModule": () => (/* binding */ BudgetRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.component */ 96775);
/* harmony import */ var _budget_list_budget_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget-list/budget-list.component */ 34653);





const routes = [
    {
        path: "",
        component: _budget_component__WEBPACK_IMPORTED_MODULE_0__.BudgetComponent,
        children: [
            {
                path: "budgets",
                component: _budget_list_budget_list_component__WEBPACK_IMPORTED_MODULE_1__.BudgetListComponent
            }
        ]
    }
];
let BudgetRoutingModule = class BudgetRoutingModule {
};
BudgetRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], BudgetRoutingModule);



/***/ }),

/***/ 96775:
/*!********************************************************!*\
  !*** ./src/app/all-modules/budget/budget.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetComponent": () => (/* binding */ BudgetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _budget_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.component.html?ngResource */ 41933);
/* harmony import */ var _budget_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget.component.css?ngResource */ 1495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let BudgetComponent = class BudgetComponent {
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
BudgetComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
BudgetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-budget',
        template: _budget_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_budget_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], BudgetComponent);



/***/ }),

/***/ 53096:
/*!*****************************************************!*\
  !*** ./src/app/all-modules/budget/budget.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetModule": () => (/* binding */ BudgetModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _budget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-routing.module */ 23009);
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget.component */ 96775);
/* harmony import */ var _budget_list_budget_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget-list/budget-list.component */ 34653);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/picklist */ 34785);










let BudgetModule = class BudgetModule {
};
BudgetModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_budget_component__WEBPACK_IMPORTED_MODULE_1__.BudgetComponent, _budget_list_budget_list_component__WEBPACK_IMPORTED_MODULE_2__.BudgetListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _budget_routing_module__WEBPACK_IMPORTED_MODULE_0__.BudgetRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_9__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_4__.SharingModule,
        ]
    })
], BudgetModule);



/***/ }),

/***/ 96645:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/budget/budget-list/budget-list.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 1495:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/budget/budget.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 97221:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/budget/budget-list/budget-list.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">          \r\n    <!-- Page Content -->\r\n    <div class=\"content container-fluid\">  \r\n\r\n        <!-- Page Header -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"page-head-box\">\r\n                    <h3>Budgets</h3>\r\n                    <nav aria-label=\"breadcrumb\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Budgets</li>\r\n                        </ol>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n\r\n        <!-- Search Filter -->\r\n        <div class=\"row filter-row\">\r\n            <div class=\"col-md-8\"></div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"add-emp-section\">\r\n                    <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_categories\"><i class=\"fas fa-plus\"></i>  Add Budgets</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Search Filter -->\r\n                        \r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped custom-table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Budget No</th>\r\n                                <th>Budget Title</th>\r\n                                <th>Budget Type</th>\r\n                                <th>Start Date</th>\r\n                                <th>End Date</th>\r\n                                <th>Total Revenue</th>\r\n                                <th>Total Expenses</th>\r\n                                <th>Tax Amount</th>\r\n                                <th>Budget Amount</th>\r\n                                <th class=\"text-end\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of lstRevenue\">\r\n                                <td>{{item.id}}</td>\r\n                                <td>{{item.budgettitle}}</td>\r\n                                <td>{{item.budgettype}}</td>\r\n                                <td>{{item.startdate | customDate}}</td>\r\n                                <td>{{item.enddate | customDate}}</td>\r\n                                <td>{{item.totalrevenue}}</td>\r\n                                <td>{{item.totalexpenses}}</td>\r\n                                <td>{{item.taxamount}}</td>\r\n                                <td>{{item.budgetamount}}</td>\r\n                                <td class=\"text-end ico-sec justify-content-end\">\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_categories\" (click)=\"edit(item)\"><i class=\"fas fa-pen\"></i></a>\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete\" (click)=\"tempId = item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                                </td>\r\n                            </tr>\r\n                                                                    \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Content -->\r\n    \r\n    <!-- Add Modal -->\r\n    <div class=\"modal custom-modal fade\" id=\"add_categories\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Add Budget</h5>\r\n                    <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form (ngSubmit)=\"addRevenue()\" [formGroup]=\"addRevenueForm\">\r\n                <div class=\"form-group\">\r\n                    <label>Budget Title</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"budget_title\" placeholder=\"Budgets Title\" [class.invalid]=\"addRevenueForm.get('BudgetTitle').invalid && addRevenueForm.get('BudgetTitle').touched\"\r\n                formControlName=\"BudgetTitle\">\r\n                    <div\r\n                *ngIf=\"addRevenueForm.get('BudgetTitle').invalid && addRevenueForm.get('BudgetTitle').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('BudgetTitle').invalid && addRevenueForm.get('BudgetTitle').touched\"\r\n                    class=\"text-danger\"> *Budget title required</small>\r\n            </div>\r\n                </div>\r\n\r\n                    <label>Choose Budget Respect Type</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input BudgetType\" type=\"radio\" name=\"budget_type\" id=\"project2\" value=\"project\">\r\n                        <label class=\"form-check-label\" for=\"project2\">Project</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input BudgetType\" type=\"radio\" name=\"budget_type\" id=\"category1\" value=\"category\">\r\n                        <label class=\"form-check-label\" for=\"category1\">Category</label>\r\n                    </div>\r\n            \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Start Date</label>\r\n                    <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker name=\"budget_start_date\" placeholder=\"Start Date\" data-date-format=\"dd-mm-yyyy\" [class.invalid]=\"addRevenueForm.get('StartDate').invalid && addRevenueForm.get('StartDate').touched\"\r\n                formControlName=\"StartDate\"></div>\r\n                                                                <div\r\n                *ngIf=\"addRevenueForm.get('StartDate').invalid && addRevenueForm.get('StartDate').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('StartDate').invalid && addRevenueForm.get('StartDate').touched\"\r\n                    class=\"text-danger\"> *Start date required</small>\r\n            </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>End Date</label>\r\n                    <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker name=\"budget_end_date\" placeholder=\"End Date\" data-date-format=\"dd-mm-yyyy\" [class.invalid]=\"addRevenueForm.get('EndDate').invalid && addRevenueForm.get('EndDate').touched\"\r\n                formControlName=\"EndDate\"></div>\r\n                        <div\r\n                *ngIf=\"addRevenueForm.get('EndDate').invalid && addRevenueForm.get('EndDate').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('EndDate').invalid && addRevenueForm.get('EndDate').touched\"\r\n                    class=\"text-danger\"> *End date required</small>\r\n            </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Expected Revenues</label>\r\n                </div>\r\n                <div class=\"AllRevenuesClass\">\r\n                    <div class=\"row AlLRevenues\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Revenue Title <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" class=\"form-control RevenuETitle\" value=\"\" placeholder=\"Revenue Title\" name=\"revenue_title[]\" autocomplete=\"off\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Revenue Amount <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" name=\"revenue_amount[]\" placeholder=\"Amount\" value=\"\" class=\"form-control RevenuEAmount\" autocomplete=\"off\" >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <div class=\"add-more\">\r\n                                <a class=\"add_more_revenue\" title=\"Add Revenue\" style=\"cursor: pointer;\" ><i class=\"fa fa-plus-circle\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Overall Revenues <span class=\"text-danger\">(A)</span></label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"overall_revenues\" id=\"overall_revenues1\" placeholder=\"Overall Revenues\" readonly style=\"cursor: not-allowed;\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Expected Expenses</label>\r\n                </div>\r\n                <div class=\"AllExpensesClass\">\r\n                    <div class=\"row AlLExpenses\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expenses Title <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" class=\"form-control EXpensesTItle\" value=\"\" placeholder=\"Expenses Title\" name=\"expenses_title[]\" autocomplete=\"off\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expenses Amount <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" name=\"expenses_amount[]\" placeholder=\"Amount\" value=\"\" class=\"form-control EXpensesAmount\" autocomplete=\"off\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <div class=\"add-more\">\r\n                                <a class=\"add_more_expenses\" title=\"Add Expenses\" style=\"cursor: pointer;\"><i class=\"fa fa-plus-circle\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Overall Expense <span class=\"text-danger\">(B)</span></label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"overall_expenses\" id=\"overall_expenses1\" placeholder=\"Overall Expenses\" readonly style=\"cursor: not-allowed;\">\r\n                \r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Expected Profit <span class=\"text-danger\">( C = A - B )</span> </label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"expected_profit\" id=\"expected_profit1\" placeholder=\"Expected Profit\" readonly style=\"cursor: not-allowed;\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Tax <span class=\"text-danger\">(D)</span></label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"tax_amount\" id=\"tax_amount1\" placeholder=\"Tax Amount\" [class.invalid]=\"addRevenueForm.get('Tax').invalid && addRevenueForm.get('Tax').touched\"\r\n                formControlName=\"Tax\">\r\n                    <div\r\n                *ngIf=\"addRevenueForm.get('Tax').invalid && addRevenueForm.get('Tax').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('Tax').invalid && addRevenueForm.get('Tax').touched\"\r\n                    class=\"text-danger\"> *Tax required</small>\r\n            </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Budget Amount <span class=\"text-danger\">( E = C - D )</span> </label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"budget_amount\" id=\"budget_amount1\" placeholder=\"Budget Amount\" readonly style=\"cursor: not-allowed;\">\r\n                    \r\n                </div>\r\n                <div class=\" submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                </div>\r\n            </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Add Modal -->\r\n\r\n    <!-- Edit Modal -->\r\n    <div class=\"modal custom-modal fade\" id=\"edit_categories\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Edit Budget</h5>\r\n                    <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editRevenue()\" [formGroup]=\"editRevenueForm\">\r\n                <div class=\"form-group\">\r\n                    <label>Budget Title</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"budget_title\" placeholder=\"Budgets Title\" [class.invalid]=\"editRevenueForm.get('BudgetTitle').invalid && editRevenueForm.get('BudgetTitle').touched\"\r\n                formControlName=\"BudgetTitle\">\r\n                    <div\r\n                *ngIf=\"editRevenueForm.get('BudgetTitle').invalid && editRevenueForm.get('BudgetTitle').touched\">\r\n                <small\r\n                    *ngIf=\"editRevenueForm.get('BudgetTitle').invalid && editRevenueForm.get('BudgetTitle').touched\"\r\n                    class=\"text-danger\"> *Budget title required</small>\r\n            </div>\r\n                </div>\r\n\r\n                    <label>Choose Budget Respect Type</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input BudgetType\" type=\"radio\" name=\"budget_type\" id=\"project1\" value=\"project\">\r\n                        <label class=\"form-check-label\" for=\"project1\">Project</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input BudgetType\" type=\"radio\" name=\"budget_type\" id=\"category\" value=\"category\">\r\n                        <label class=\"form-check-label\" for=\"category\">Category</label>\r\n                    </div>\r\n            \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Start Date</label>\r\n                    <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker name=\"budget_start_date\" placeholder=\"Start Date\" data-date-format=\"dd-mm-yyyy\" [class.invalid]=\"editRevenueForm.get('StartDate').invalid && editRevenueForm.get('StartDate').touched\"\r\n                formControlName=\"StartDate\"></div>\r\n                <div\r\n                *ngIf=\"editRevenueForm.get('StartDate').invalid && editRevenueForm.get('StartDate').touched\">\r\n                <small\r\n                    *ngIf=\"editRevenueForm.get('StartDate').invalid && editRevenueForm.get('StartDate').touched\"\r\n                    class=\"text-danger\"> *Start date required</small>\r\n            </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>End Date</label>\r\n                    <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker name=\"budget_end_date\" placeholder=\"End Date\" data-date-format=\"dd-mm-yyyy\" [class.invalid]=\"editRevenueForm.get('EndDate').invalid && editRevenueForm.get('EndDate').touched\"\r\n                formControlName=\"EndDate\"></div>\r\n                <div\r\n                *ngIf=\"editRevenueForm.get('EndDate').invalid && editRevenueForm.get('EndDate').touched\">\r\n                <small\r\n                    *ngIf=\"editRevenueForm.get('EndDate').invalid && editRevenueForm.get('EndDate').touched\"\r\n                    class=\"text-danger\"> *End date required</small>\r\n            </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Expected Revenues</label>\r\n                </div>\r\n                <div class=\"AllRevenuesClass\">\r\n                    <div class=\"row AlLRevenues\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Revenue Title <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" class=\"form-control RevenuETitle\" value=\"\" placeholder=\"Revenue Title\" name=\"revenue_title[]\" autocomplete=\"off\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Revenue Amount <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" name=\"revenue_amount[]\" placeholder=\"Amount\" value=\"\" class=\"form-control RevenuEAmount\" autocomplete=\"off\" >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <div class=\"add-more\">\r\n                                <a class=\"add_more_revenue\" title=\"Add Revenue\" style=\"cursor: pointer;\" ><i class=\"fa fa-plus-circle\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Overall Revenues <span class=\"text-danger\">(A)</span></label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"overall_revenues\" id=\"overall_revenues\" placeholder=\"Overall Revenues\" readonly style=\"cursor: not-allowed;\">\r\n                    \r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Expected Expenses</label>\r\n                </div>\r\n                <div class=\"AllExpensesClass\">\r\n                    <div class=\"row AlLExpenses\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expenses Title <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" class=\"form-control EXpensesTItle\" value=\"\" placeholder=\"Expenses Title\" name=\"expenses_title[]\" autocomplete=\"off\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Expenses Amount <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" name=\"expenses_amount[]\" placeholder=\"Amount\" value=\"\" class=\"form-control EXpensesAmount\" autocomplete=\"off\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <div class=\"add-more\">\r\n                                <a class=\"add_more_expenses\" title=\"Add Expenses\" style=\"cursor: pointer;\"><i class=\"fa fa-plus-circle\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Overall Expense <span class=\"text-danger\">(B)</span></label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"overall_expenses\" id=\"overall_expenses\" placeholder=\"Overall Expenses\" readonly style=\"cursor: not-allowed;\">\r\n                \r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Expected Profit <span class=\"text-danger\">( C = A - B )</span> </label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"expected_profit\" id=\"expected_profit\" placeholder=\"Expected Profit\" readonly style=\"cursor: not-allowed;\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Tax <span class=\"text-danger\">(D)</span></label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"tax_amount\" id=\"tax_amount\" placeholder=\"Tax Amount\" [class.invalid]=\"editRevenueForm.get('Tax').invalid && editRevenueForm.get('Tax').touched\"\r\n                formControlName=\"Tax\">\r\n                    <div\r\n                *ngIf=\"editRevenueForm.get('Tax').invalid && editRevenueForm.get('Tax').touched\">\r\n                <small\r\n                    *ngIf=\"editRevenueForm.get('Tax').invalid && editRevenueForm.get('Tax').touched\"\r\n                    class=\"text-danger\"> *Tax required</small>\r\n            </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Budget Amount <span class=\"text-danger\">( E = C - D )</span> </label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"budget_amount\" id=\"budget_amount\" placeholder=\"Budget Amount\" readonly style=\"cursor: not-allowed;\">\r\n                \r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                </div>\r\n            </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Edit Modal -->\r\n\r\n    <!-- Delete Holiday Modal -->\r\n    <div class=\"modal custom-modal fade\" id=\"delete\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-centered\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-header\">\r\n                        <h3>Delete </h3>\r\n                        <p>Are you sure want to delete?</p>\r\n                    </div>\r\n                    <div class=\"modal-btn delete-action\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteRevenue()\">Delete</a>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Delete Holiday Modal -->\r\n</div>\r\n<!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 41933:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/budget/budget.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_budget_budget_module_ts.js.map