"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_budgetrevenues_budgetrevenues_module_ts"],{

/***/ 17183:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues-list/budgetrevenues-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetrevenuesListComponent": () => (/* binding */ BudgetrevenuesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _budgetrevenues_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetrevenues-list.component.html?ngResource */ 64161);
/* harmony import */ var _budgetrevenues_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budgetrevenues-list.component.css?ngResource */ 93919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);








let BudgetrevenuesListComponent = class BudgetrevenuesListComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.url = "revenue";
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
            RevenueName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            RevenueNotes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            RevenueDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
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
            let purchaseToDateFormat = this.pipe.transform(this.addRevenueForm.value.RevenueDate, "dd-MM-yyyy");
            let obj = {
                amount: this.addRevenueForm.value.RevenueName,
                notes: this.addRevenueForm.value.RevenueNotes,
                revenuedate: purchaseToDateFormat,
                id: 0,
                subcategoryname: "Hardware expenses",
                categoryname: "Hardware",
            };
            this.srvModuleService.add(obj, this.url).subscribe((data) => {
            });
            this.LoadRevenue();
            $("#add_revenue").modal("hide");
            this.addRevenueForm.reset();
            this.toastr.success("Budget-revenue added sucessfully...!", "Success");
        }
    }
    deleteRevenue() {
        this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.LoadRevenue();
            $("#delete").modal("hide");
            this.toastr.success("Budget-revenue deleted sucessfully..!", "Success");
        });
    }
};
BudgetrevenuesListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService }
];
BudgetrevenuesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-budgetrevenues-list',
        template: _budgetrevenues_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_budgetrevenues_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BudgetrevenuesListComponent);



/***/ }),

/***/ 81485:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetrevenuesRoutingModule": () => (/* binding */ BudgetrevenuesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _budgetrevenues_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetrevenues.component */ 17772);
/* harmony import */ var _budgetrevenues_list_budgetrevenues_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budgetrevenues-list/budgetrevenues-list.component */ 17183);





const routes = [
    {
        path: "",
        component: _budgetrevenues_component__WEBPACK_IMPORTED_MODULE_0__.BudgetrevenuesComponent,
        children: [
            {
                path: "budget-revenues",
                component: _budgetrevenues_list_budgetrevenues_list_component__WEBPACK_IMPORTED_MODULE_1__.BudgetrevenuesListComponent
            }
        ]
    }
];
let BudgetrevenuesRoutingModule = class BudgetrevenuesRoutingModule {
};
BudgetrevenuesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], BudgetrevenuesRoutingModule);



/***/ }),

/***/ 17772:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetrevenuesComponent": () => (/* binding */ BudgetrevenuesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _budgetrevenues_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetrevenues.component.html?ngResource */ 91608);
/* harmony import */ var _budgetrevenues_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budgetrevenues.component.css?ngResource */ 1163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let BudgetrevenuesComponent = class BudgetrevenuesComponent {
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
BudgetrevenuesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
BudgetrevenuesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-budgetrevenues',
        template: _budgetrevenues_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_budgetrevenues_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], BudgetrevenuesComponent);



/***/ }),

/***/ 45525:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetrevenuesModule": () => (/* binding */ BudgetrevenuesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _budgetrevenues_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budgetrevenues-routing.module */ 81485);
/* harmony import */ var _budgetrevenues_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budgetrevenues.component */ 17772);
/* harmony import */ var _budgetrevenues_list_budgetrevenues_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budgetrevenues-list/budgetrevenues-list.component */ 17183);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/picklist */ 34785);










let BudgetrevenuesModule = class BudgetrevenuesModule {
};
BudgetrevenuesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_budgetrevenues_component__WEBPACK_IMPORTED_MODULE_1__.BudgetrevenuesComponent, _budgetrevenues_list_budgetrevenues_list_component__WEBPACK_IMPORTED_MODULE_2__.BudgetrevenuesListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _budgetrevenues_routing_module__WEBPACK_IMPORTED_MODULE_0__.BudgetrevenuesRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_9__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_4__.SharingModule,
        ]
    })
], BudgetrevenuesModule);



/***/ }),

/***/ 93919:
/*!*************************************************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues-list/budgetrevenues-list.component.css?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXRyZXZlbnVlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 1163:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues.component.css?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXRyZXZlbnVlcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 64161:
/*!**************************************************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues-list/budgetrevenues-list.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">\r\n    \r\n\r\n    <!-- Page Content -->\r\n    <div class=\"content container-fluid\">\r\n        \r\n        <!-- Page Header -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"page-head-box\">\r\n                    <h3>Budgets Revenues</h3>\r\n                    <nav aria-label=\"breadcrumb\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Budgets Revenues</li>\r\n                        </ol>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n\r\n        <!-- Search Filter -->\r\n        <div class=\"row filter-row\">\r\n            <div class=\"col-md-8\"></div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"add-emp-section\">\r\n                    <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_revenue\"><i class=\"fas fa-plus\"></i>  Add Revenues</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Search Filter -->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped custom-table mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>No</th>\r\n                                <th>Notes</th>                    \r\n                                <th>Category Name</th>\r\n                                <th>SubCategory Name</th>\r\n                                <th>Amount</th>\r\n                                <th>Revenue Date</th>\r\n                                <th class=\"text-end\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of lstRevenue\">\r\n                                <td>{{item.id}}</td>\r\n                                <td>{{item.notes}}</td>\r\n                                <td>{{item.categoryname}}</td>\r\n                                <td>{{item.subcategoryname}}</td>\r\n                                <td>{{item.amount}}</td>\r\n                                <td>{{item.revenuedate | customDate}}</td>\r\n                                <td class=\"text-end ico-sec justify-content-end\">\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_categories\"><i class=\"fas fa-pen\"></i></a>\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete\" (click)=\"tempId = item.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                                </td>\r\n                            </tr>\r\n                                                            \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Content -->\r\n    \r\n    <!-- Add Modal -->\r\n    <div id=\"add_revenue\" class=\"modal custom-modal fade\" id=\"add_revenue\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Add Revenues</h5>\r\n                    <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form (ngSubmit)=\"addRevenue()\" [formGroup]=\"addRevenueForm\">\r\n                        <div class=\"form-group form-row row\">\r\n                            <label class=\"col-lg-12 control-label\">Amount \r\n                                <span class=\"text-danger\">*</span>\r\n                            </label>\r\n                            <div class=\"col-lg-12\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"800.00\" name=\"amount\" [class.invalid]=\"addRevenueForm.get('RevenueName').invalid && addRevenueForm.get('RevenueName').touched\"\r\n                formControlName=\"RevenueName\">\r\n                                </div>\r\n                                <div\r\n                *ngIf=\"addRevenueForm.get('RevenueName').invalid && addRevenueForm.get('RevenueName').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('RevenueName').invalid && addRevenueForm.get('RevenueName').touched\"\r\n                    class=\"text-danger\"> *Budget-revenue Name required</small>\r\n            </div>\r\n                            </div>\r\n                            <div class=\"form-group form-row row\">\r\n                                <label class=\"col-lg-12 control-label\">Notes \r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"col-lg-12\">\r\n                                    <textarea class=\"form-control ta\" name=\"notes\" [class.invalid]=\"addRevenueForm.get('RevenueNotes').invalid && addRevenueForm.get('RevenueNotes').touched\"\r\n                formControlName=\"RevenueNotes\"></textarea>\r\n                                </div>\r\n                                            <div\r\n                *ngIf=\"addRevenueForm.get('RevenueNotes').invalid && addRevenueForm.get('RevenueNotes').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('RevenueNotes').invalid && addRevenueForm.get('RevenueNotes').touched\"\r\n                    class=\"text-danger\"> *Budget-revenue Name required</small>\r\n            </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group form-row row\">\r\n                                <label class=\"col-lg-12 control-label\">Revenue Date \r\n                                    <span class=\"text-danger\">*</span>\r\n                                </label>\r\n                                <div class=\"col-lg-12\">\r\n                                    <input class=\"datepicker-input form-control\" type=\"text\" bsDatepicker value=\"06-05-2021\" name=\"revenue_date\" data-date-format=\"dd-mm-yyyy\" [class.invalid]=\"addRevenueForm.get('RevenueDate').invalid && addRevenueForm.get('RevenueDate').touched\"\r\n                formControlName=\"RevenueDate\">\r\n                                    </div>\r\n                                                            <div\r\n                *ngIf=\"addRevenueForm.get('RevenueDate').invalid && addRevenueForm.get('RevenueDate').touched\">\r\n                <small\r\n                    *ngIf=\"addRevenueForm.get('RevenueDate').invalid && addRevenueForm.get('RevenueDate').touched\"\r\n                    class=\"text-danger\"> *Budget-revenue date required</small>\r\n            </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"form-group form-row row\">\r\n                                    <label class=\"col-lg-12 control-label\">Category \r\n                                        <span class=\"text-danger\">*</span>\r\n                                    </label>\r\n                                    <div class=\"col-lg-12\">\r\n                                        <select class=\"form-select form-control m-b\" name=\"category\" id=\"main_category\">\r\n                                            <option value=\"\" disabled=\"\" selected=\"\">Choose Category</option>\r\n                                            <option value=\"1\">project1</option>\r\n                                            <option value=\"3\">test category</option>\r\n                                            <option value=\"4\">Hardware</option>\r\n                                            <option value=\"5\">Material</option>\r\n                                            <option value=\"6\">Vehicle</option>\r\n                                            <option value=\"8\">TestctrE</option>\r\n                                            <option value=\"9\">Twocatr</option>\r\n                                            <option value=\"10\">fesferwf</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group form-row row\">\r\n                                    <label class=\"col-lg-12 control-label\">Sub Category \r\n                                        <span class=\"text-danger\">*</span>\r\n                                    </label>\r\n                                    <div class=\"col-lg-12\">\r\n                                        <select class=\"form-select form-control m-b\" name=\"sub_category\" id=\"sub_category\">\r\n                                            <option value=\"\">Choose Sub-Category</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-lg-12 control-label\">Attach File</label>\r\n                                    <div class=\"col-lg-12\">\r\n                                        <input type=\"file\" class=\"form-control\" data-buttontext=\"Choose File\" data-icon=\"false\" data-classbutton=\"btn btn-default\" data-classinput=\"form-control inline input-s\" name=\"receipt\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-t-20 text-center\">\r\n                                        <button class=\"btn btn-primary btn-lg BudgetAddBtn\">Submit</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Add Modal -->\r\n\r\n\r\n    <!-- Delete Holiday Modal -->\r\n    <div class=\"modal custom-modal fade\" id=\"delete\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-centered\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-header\">\r\n                        <h3>Delete </h3>\r\n                        <p>Are you sure want to delete?</p>\r\n                    </div>\r\n                    <div class=\"modal-btn delete-action\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\" (click)=\"deleteRevenue()\">Delete</a>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Delete Holiday Modal -->\r\n</div>\r\n<!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 91608:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/budgetrevenues/budgetrevenues.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_budgetrevenues_budgetrevenues_module_ts.js.map