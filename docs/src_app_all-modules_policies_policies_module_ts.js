"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_policies_policies_module_ts"],{

/***/ 20556:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/policies/policies-content/policies-content.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliciesContentComponent": () => (/* binding */ PoliciesContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _policies_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies-content.component.html?ngResource */ 77136);
/* harmony import */ var _policies_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies-content.component.css?ngResource */ 36157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let PoliciesContentComponent = class PoliciesContentComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "policies";
        this.allPolicies = [];
    }
    ngOnInit() {
        this.getPolicies();
        // Add Provident Form Validation And Getting Values
        this.addPolicies = this.formBuilder.group({
            addPolicyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addDepartment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editPolicies = this.formBuilder.group({
            editPolicyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editDepartment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getPolicies() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allPolicies = data;
            this.dtTrigger.next();
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
    // Add Provident Modal Api Call
    addPoliciesSubmit() {
        if (this.addPolicies.invalid) {
            this.markFormGroupTouched(this.addPolicies);
            return;
        }
        if (this.addPolicies.valid) {
            let obj = {
                policyName: this.addPolicies.value.addPolicyName,
                department: this.addPolicies.value.addDepartment,
                description: this.addPolicies.value.addDescription,
                createdDate: "20 Feb 2019",
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.allPolicies = data;
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getPolicies();
            $("#add_policy").modal("hide");
            this.addPolicies.reset();
            this.toastr.success("Policy is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editPoliciesSubmit() {
        let obj = {
            policyName: this.editPolicies.value.editPolicyName,
            department: this.editPolicies.value.editDepartment,
            description: this.editPolicies.value.editDescription,
            createdDate: "20 Feb 2019",
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getPolicies();
        $("#edit_policy").modal("hide");
        this.toastr.success("Policy is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allPolicies.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allPolicies[index];
        this.editPolicies.setValue({
            editPolicyName: toSetValues.policyName,
            editDepartment: toSetValues.department,
            editDescription: toSetValues.description,
        });
    }
    // Delete Provident Modal Api Call
    deletePolicies() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getPolicies();
            $("#delete_policy").modal("hide");
            this.toastr.success("Policy is deleted", "Success");
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
PoliciesContentComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
PoliciesContentComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
PoliciesContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-policies-content",
        template: _policies_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_policies_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PoliciesContentComponent);



/***/ }),

/***/ 85894:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/policies/policies-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliciesRoutingModule": () => (/* binding */ PoliciesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _policies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.component */ 51363);
/* harmony import */ var _policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies-content/policies-content.component */ 20556);





const routes = [
    {
        path: "",
        component: _policies_component__WEBPACK_IMPORTED_MODULE_0__.PoliciesComponent,
        children: [
            {
                path: "policies-main",
                component: _policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_1__.PoliciesContentComponent
            }
        ]
    }
];
let PoliciesRoutingModule = class PoliciesRoutingModule {
};
PoliciesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PoliciesRoutingModule);



/***/ }),

/***/ 51363:
/*!************************************************************!*\
  !*** ./src/app/all-modules/policies/policies.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliciesComponent": () => (/* binding */ PoliciesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _policies_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies.component.html?ngResource */ 45880);
/* harmony import */ var _policies_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies.component.css?ngResource */ 40542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PoliciesComponent = class PoliciesComponent {
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
PoliciesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
PoliciesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-policies',
        template: _policies_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_policies_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], PoliciesComponent);



/***/ }),

/***/ 40218:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/policies/policies.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliciesModule": () => (/* binding */ PoliciesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _policies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policies-routing.module */ 85894);
/* harmony import */ var _policies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies.component */ 51363);
/* harmony import */ var _policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policies-content/policies-content.component */ 20556);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








let PoliciesModule = class PoliciesModule {
};
PoliciesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_policies_component__WEBPACK_IMPORTED_MODULE_1__.PoliciesComponent, _policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_2__.PoliciesContentComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _policies_routing_module__WEBPACK_IMPORTED_MODULE_0__.PoliciesRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ]
    })
], PoliciesModule);



/***/ }),

/***/ 36157:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/policies/policies-content/policies-content.component.css?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY2llcy1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 40542:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/policies/policies.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY2llcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 77136:
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/policies/policies-content/policies-content.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Policies</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Policies</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Add Button -->\r\n    <div class=\"row filter-row mt-4\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_policy\"><i class=\"fas fa-plus\"></i> Add Policy</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Add Button -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 30px;\">#</th>\r\n                            <th>Policy Name </th>\r\n                            <th>Department </th>\r\n                            <th>Description </th>\r\n                            <th>Created </th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let policies of allPolicies;let i = index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <td>{{policies.policyName}}</td>\r\n                            <td>{{policies.department}}</td>\r\n                            <td>{{policies.description}}</td>\r\n                            <td>{{policies.createdDate}}</td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\"><i class=\"fas fa-download\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_policy\" (click)=\"edit(policies.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_policy\" (click)=\"tempId = policies.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allPolicies.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Policy Modal -->\r\n<div id=\"add_policy\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Policy</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addPoliciesSubmit()\" [formGroup]=\"addPolicies\">\r\n                    <div class=\"form-group\">\r\n                        <label>Policy Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addPolicies.get('addPolicyName').invalid && addPolicies.get('addPolicyName').touched\"\r\n                        formControlName=\"addPolicyName\">\r\n                        <div\r\n                                    *ngIf=\"addPolicies.get('addPolicyName').invalid && addPolicies.get('addPolicyName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addPolicies.get('addPolicyName').invalid && addPolicies.get('addPolicyName').touched\"\r\n                                        class=\"text-danger\"> *Policy name is required</small>\r\n                                </div>\r\n\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\" [class.invalid]=\"addPolicies.get('addDescription').invalid && addPolicies.get('addDescription').touched\"\r\n                        formControlName=\"addDescription\"></textarea>\r\n\r\n                        <div\r\n                                    *ngIf=\"addPolicies.get('addDescription').invalid && addPolicies.get('addDescription').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addPolicies.get('addDescription').invalid && addPolicies.get('addDescription').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-form-label\">Department</label>\r\n                        <select class=\"form-select form-control\"  [class.invalid]=\"addPolicies.get('addDepartment').invalid && addPolicies.get('addDepartment').touched\"\r\n                        formControlName=\"addDepartment\">\r\n                            <option>All Departments</option>\r\n                            <option>Web Development</option>\r\n                            <option>Marketing</option>\r\n                            <option>IT Management</option>\r\n                        </select>\r\n\r\n                        <div\r\n                                    *ngIf=\"addPolicies.get('addDepartment').invalid && addPolicies.get('addDepartment').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addPolicies.get('addDepartment').invalid && addPolicies.get('addDepartment').touched\"\r\n                                        class=\"text-danger\"> *Department name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Upload Policy <span class=\"text-danger\">*</span></label>\r\n                        <input type=\"file\" class=\"form-control\" id=\"policy_upload\">\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Policy Modal -->\r\n\r\n<!-- Edit Policy Modal -->\r\n<div id=\"edit_policy\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Policy</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editPoliciesSubmit()\" [formGroup]=\"editPolicies\">\r\n                    <div class=\"form-group\">\r\n                        <label>Policy Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"editPolicies.get('editPolicyName').invalid && editPolicies.get('editPolicyName').touched\"\r\n                        formControlName=\"editPolicyName\">\r\n\r\n                        <div\r\n                                    *ngIf=\"editPolicies.get('editPolicyName').invalid && editPolicies.get('editPolicyName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editPolicies.get('editPolicyName').invalid && editPolicies.get('editPolicyName').touched\"\r\n                                        class=\"text-danger\"> *policy name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description <span class=\"text-danger\">*</span></label>\r\n                        <textarea class=\"form-control\" rows=\"4\" [class.invalid]=\"editPolicies.get('editDescription').invalid && editPolicies.get('editDescription').touched\"\r\n                        formControlName=\"editDescription\"></textarea>\r\n\r\n                        <div\r\n                                    *ngIf=\"editPolicies.get('editDescription').invalid && editPolicies.get('editDescription').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editPolicies.get('editDescription').invalid && editPolicies.get('editDescription').touched\"\r\n                                        class=\"text-danger\"> *Description is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-form-label\">Department</label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"editPolicies.get('editDepartment').invalid && editPolicies.get('editDepartment').touched\"\r\n                        formControlName=\"editDepartment\">\r\n                            <option>All Departments</option>\r\n                            <option>Web Development</option>\r\n                            <option>Marketing</option>\r\n                            <option>IT Management</option>\r\n                        </select>\r\n                        <div\r\n                                    *ngIf=\"editPolicies.get('editDepartment').invalid && editPolicies.get('editDepartment').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editPolicies.get('editDepartment').invalid && editPolicies.get('editDepartment').touched\"\r\n                                        class=\"text-danger\"> *Department name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Upload Policy <span class=\"text-danger\">*</span></label>\r\n                        <input type=\"file\" class=\"form-control\" id=\"edit_policy_upload\">\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Policy Modal -->\r\n\r\n<!-- Delete Policy Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_policy\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Policy</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deletePolicies()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Policy Modal -->";

/***/ }),

/***/ 45880:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/policies/policies.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_policies_policies_module_ts.js.map