"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_assets_assets_module_ts"],{

/***/ 37961:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/assets/assets-main/assets-main.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsMainComponent": () => (/* binding */ AssetsMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _assets_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets-main.component.html?ngResource */ 32371);
/* harmony import */ var _assets_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets-main.component.css?ngResource */ 94132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let AssetsMainComponent = class AssetsMainComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "assets";
        this.allAssets = [];
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
    }
    ngOnInit() {
        // for floating label
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        // get assets data from API
        this.getAssets();
        // Add Assets Form Validation And Getting Values
        this.addAssets = this.formBuilder.group({
            assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            assetId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchaseTo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            warranty: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            value: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            assetUser: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            assetStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        // Edit Assets Form Validation And Getting Values
        this.editAssets = this.formBuilder.group({
            editAssetsName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editPurchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editPurchaseTo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editWarranty: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editvalue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editAssetUser: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editAssetId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editAssetStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    // manually rendering Data table
    rerender() {
        $("#datatable").DataTable().clear();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.destroy();
        });
        this.allAssets = [];
        this.getAssets();
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    //get data for data table
    getAssets() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allAssets = data;
            this.rows = this.allAssets;
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
    // Add Assets Modal Api Call
    addAssetsSubmit() {
        if (this.addAssets.invalid) {
            this.markFormGroupTouched(this.addAssets);
            return;
        }
        if (this.addAssets.valid) {
            let purchaseDateFormat = this.pipe.transform(this.addAssets.value.purchaseDate, "dd-MM-yyyy");
            let purchaseToDateFormat = this.pipe.transform(this.addAssets.value.purchaseTo, "dd-MM-yyyy");
            let obj = {
                assetName: this.addAssets.value.assetName,
                assetId: this.addAssets.value.assetId,
                purchaseDate: purchaseDateFormat,
                warrenty: this.addAssets.value.warranty,
                Amount: this.addAssets.value.value,
                assetUser: this.addAssets.value.assetUser,
                warrentyEnd: purchaseToDateFormat,
                assetStatus: this.addAssets.value.assetStatus,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getAssets();
            $("#add_asset").modal("hide");
            this.addAssets.reset();
            this.toastr.success("Assets is added", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    // to know the date picker changes
    from(data) {
        this.editPurchaseDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
    }
    to(data) {
        this.editPurchaseToDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
    }
    // Edit Assets Modal Api Call
    editAssetSubmit() {
        if (this.editAssets.valid) {
            let obj = {
                assetName: this.editAssets.value.editAssetsName,
                assetId: this.editAssets.value.editAssetId,
                purchaseDate: this.editPurchaseDateFormat,
                warrenty: this.editAssets.value.editWarranty,
                Amount: this.editAssets.value.editvalue,
                assetUser: this.editAssets.value.editAssetUser,
                warrentyEnd: this.editPurchaseToDateFormat,
                assetStatus: this.editAssets.value.editAssetStatus,
                id: this.editId,
            };
            this.allModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getAssets();
            $("#edit_asset").modal("hide");
            this.toastr.success("Assets is edited", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    // for set values to editassets form
    edit(value) {
        this.editId = value;
        const index = this.allAssets.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allAssets[index];
        this.editAssets.setValue({
            editAssetsName: toSetValues.assetName,
            editPurchaseDate: toSetValues.purchaseDate,
            editPurchaseTo: toSetValues.warrentyEnd,
            editWarranty: toSetValues.warrenty,
            editvalue: toSetValues.Amount,
            editAssetUser: toSetValues.assetUser,
            editAssetId: toSetValues.assetId,
            editAssetStatus: toSetValues.assetStatus,
        });
    }
    // Delete Assets Modal Api Call
    deleteAssets() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.getAssets();
        $("#delete_asset").modal("hide");
        this.toastr.success("Assets is deleted", "Success");
    }
    //search by name
    searchName(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.assetUser.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by status
    searchStatus(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.assetStatus.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by purchase
    searchByPurchase(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.purchaseDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
        });
        this.rows.push(...temp);
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
    }
    //search by warranty
    searchByWarranty(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.warrentyEnd.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
        });
        this.rows.push(...temp);
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
    }
    //getting the status value
    getStatus(data) {
        this.statusValue = data;
    }
    //for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
AssetsMainComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
AssetsMainComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
AssetsMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-assets-main",
        template: _assets_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_assets_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssetsMainComponent);



/***/ }),

/***/ 51173:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/assets/assets-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsRoutingModule": () => (/* binding */ AssetsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.component */ 85745);
/* harmony import */ var _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets-main/assets-main.component */ 37961);





const routes = [
    {
        path: "",
        component: _assets_component__WEBPACK_IMPORTED_MODULE_0__.AssetsComponent,
        children: [
            {
                path: "assets-main",
                component: _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_1__.AssetsMainComponent
            }
        ]
    }
];
let AssetsRoutingModule = class AssetsRoutingModule {
};
AssetsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AssetsRoutingModule);



/***/ }),

/***/ 85745:
/*!********************************************************!*\
  !*** ./src/app/all-modules/assets/assets.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsComponent": () => (/* binding */ AssetsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _assets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.component.html?ngResource */ 63853);
/* harmony import */ var _assets_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.component.css?ngResource */ 61689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AssetsComponent = class AssetsComponent {
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
AssetsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
AssetsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-assets',
        template: _assets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_assets_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], AssetsComponent);



/***/ }),

/***/ 93952:
/*!*****************************************************!*\
  !*** ./src/app/all-modules/assets/assets.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsModule": () => (/* binding */ AssetsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _assets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets-routing.module */ 51173);
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.component */ 85745);
/* harmony import */ var _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets-main/assets-main.component */ 37961);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);










let AssetsModule = class AssetsModule {
};
AssetsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_assets_component__WEBPACK_IMPORTED_MODULE_1__.AssetsComponent, _assets_main_assets_main_component__WEBPACK_IMPORTED_MODULE_2__.AssetsMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _assets_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssetsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule
        ],
    })
], AssetsModule);



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

/***/ 94132:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/assets/assets-main/assets-main.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NldHMtbWFpbi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 61689:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/assets/assets.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NldHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 32371:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/assets/assets-main/assets-main.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Assets</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Assets</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n    \r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\"> \r\n            <div class=\"form-group form-focus select-focus mb-0\">\r\n                <select class=\"form-select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option value=\"\"> -- Select -- </option>\r\n                    <option value=\"Pending\"> Pending </option>\r\n                    <option value=\"Approved\"> Approved </option>\r\n                    <option value=\"Returned\"> Returned </option>\r\n                </select>\r\n                <label class=\"focus-label\">Status</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-4\">  \r\n           <div class=\"row\">  \r\n               <div class=\"col-md-6 col-sm-6\">  \r\n                    <div class=\"form-group form-focus mb-0\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                (bsValueChange)=\"searchByPurchase($event)\">\r\n                        </div>\r\n                        <label class=\"focus-label\">From</label>\r\n                    </div>\r\n                </div>\r\n               <div class=\"col-md-6 col-sm-6\">  \r\n                    <div class=\"form-group form-focus mb-0\">\r\n                        <div class=\"cal-icon\">\r\n                            <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"\r\n                                [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                (bsValueChange)=\"searchByWarranty($event)\">\r\n                        </div>\r\n                        <label class=\"focus-label\">To</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">  \r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_asset\"><i class=\"fas fa-plus\"></i> Add Asset</a>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id = \"datatable\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Asset User</th>\r\n                            <th>Asset Name</th>\r\n                            <th>Asset Id</th>\r\n                            <th>Purchase Date</th>\r\n                            <th>Warrenty</th>\r\n                            <th>Warrenty End</th>\r\n                            <th>Amount</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th class=\"text-end\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let assets of allAssets;let i = index\">\r\n                            <td>{{assets.assetUser}}</td>\r\n                            <td>\r\n                                <strong>{{assets.assetName}}</strong>\r\n                            </td>\r\n                            <td>{{assets.assetId}}</td>\r\n                            <td>{{assets.purchaseDate | customDate}}</td>\r\n                            <td>{{assets.warrenty}}</td>\r\n                            <td>{{assets.warrentyEnd | customDate}}</td>\r\n                            <td>{{assets.Amount}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                        {{assets.assetStatus || statusValue}}\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Pending')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Pending</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Approved')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Approved</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Returned')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            Returned</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_asset\" (click)=\"edit(assets.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_asset\" (click)=\"tempId = assets.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allAssets.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Asset Modal -->\r\n<div id=\"add_asset\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Asset</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addAssetsSubmit()\" [formGroup]=\"addAssets\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Name</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addAssets.get('assetName').invalid && addAssets.get('assetName').touched\"\r\n                                    formControlName=\"assetName\">\r\n\r\n                                <div *ngIf=\"addAssets.get('assetName').invalid && addAssets.get('assetName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('assetName').invalid && addAssets.get('assetName').touched\"\r\n                                        class=\"text-danger\"> *Asset name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Id</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addAssets.get('assetId').invalid && addAssets.get('assetId').touched\"\r\n                                    formControlName=\"assetId\">\r\n                            </div>\r\n                            <div *ngIf=\"addAssets.get('assetId').invalid && addAssets.get('assetId').touched\">\r\n                                <small *ngIf=\"addAssets.get('assetId').invalid && addAssets.get('assetId').touched\"\r\n                                    class=\"text-danger\"> *Asset Id is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase From</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"addAssets.get('purchaseDate').invalid && addAssets.get('purchaseDate').touched\"\r\n                                    formControlName=\"purchaseDate\">\r\n\r\n                                <div\r\n                                    *ngIf=\"addAssets.get('purchaseDate').invalid && addAssets.get('purchaseDate').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('purchaseDate').invalid && addAssets.get('purchaseDate').touched\"\r\n                                        class=\"text-danger\"> *Purchase Date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase To</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"addAssets.get('purchaseTo').invalid && addAssets.get('purchaseTo').touched\"\r\n                                    formControlName=\"purchaseTo\">\r\n\r\n                                <div *ngIf=\"addAssets.get('purchaseTo').invalid && addAssets.get('purchaseTo').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('purchaseTo').invalid && addAssets.get('purchaseTo').touched\"\r\n                                        class=\"text-danger\"> *Purchase To is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Manufacturer</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Model</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Serial Number</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Supplier</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Condition</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Warranty</label>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"In Months\"\r\n                                    [class.invalid]=\"addAssets.get('warranty').invalid && addAssets.get('warranty').touched\"\r\n                                    formControlName=\"warranty\">\r\n\r\n                                <div *ngIf=\"addAssets.get('warranty').invalid && addAssets.get('warranty').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('warranty').invalid && addAssets.get('warranty').touched\"\r\n                                        class=\"text-danger\"> *Warranty is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Value</label>\r\n                                <input placeholder=\"$1800\" class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addAssets.get('value').invalid && addAssets.get('value').touched\"\r\n                                    formControlName=\"value\">\r\n                                <div *ngIf=\"addAssets.get('value').invalid && addAssets.get('value').touched\">\r\n                                    <small *ngIf=\"addAssets.get('value').invalid && addAssets.get('value').touched\"\r\n                                        class=\"text-danger\"> *Value is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset User</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addAssets.get('assetUser').invalid && addAssets.get('assetUser').touched\"\r\n                                    formControlName=\"assetUser\">\r\n                                    <option>John Doe</option>\r\n                                    <option>Richard Miles</option>\r\n                                </select>\r\n                                <div *ngIf=\"addAssets.get('assetUser').invalid && addAssets.get('assetUser').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('assetUser').invalid && addAssets.get('assetUser').touched\"\r\n                                        class=\"text-danger\"> *Asset user is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addAssets.get('assetStatus').invalid && addAssets.get('assetStatus').touched\"\r\n                                    formControlName=\"assetStatus\">\r\n                                    <option>Pending</option>\r\n                                    <option>Approved</option>\r\n                                    <option>Deployed</option>\r\n                                    <option>Damaged</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addAssets.get('assetStatus').invalid && addAssets.get('assetStatus').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addAssets.get('assetStatus').invalid && addAssets.get('assetStatus').touched\"\r\n                                        class=\"text-danger\"> *Asset status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Asset Modal -->\r\n\r\n<!-- Edit Asset Modal -->\r\n<div id=\"edit_asset\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Asset</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editAssetSubmit()\" [formGroup]=\"editAssets\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Name</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"Dell Laptop\"\r\n                                    [class.invalid]=\"editAssets.get('editAssetsName').invalid && editAssets.get('editAssetsName').touched\"\r\n                                    formControlName=\"editAssetsName\">\r\n\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetsName').invalid && editAssets.get('editAssetsName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetsName').invalid && editAssets.get('editAssetsName').touched\"\r\n                                        class=\"text-danger\"> *Asset name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset Id</label>\r\n                                <input class=\"form-control\" type=\"text\" readonly\r\n                                    [class.invalid]=\"editAssets.get('editAssetId').invalid && editAssets.get('editAssetId').touched\"\r\n                                    formControlName=\"editAssetId\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetId').invalid && editAssets.get('editAssetId').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetId').invalid && editAssets.get('editAssetId').touched\"\r\n                                        class=\"text-danger\"> *Asset id is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase From</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"editAssets.get('editPurchaseDate').invalid && editAssets.get('editPurchaseDate').touched\"\r\n                                    formControlName=\"editPurchaseDate\" (bsValueChange)=\"from($event)\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editPurchaseDate').invalid && editAssets.get('editPurchaseDate').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editPurchaseDate').invalid && editAssets.get('editPurchaseDate').touched\"\r\n                                        class=\"text-danger\"> *Purchase date is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase To</label>\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker type=\"text\"\r\n                                    [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"editAssets.get('editPurchaseTo').invalid && editAssets.get('editPurchaseTo').touched\"\r\n                                    formControlName=\"editPurchaseTo\" (bsValueChange)=\"to($event)\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editPurchaseTo').invalid && editAssets.get('editPurchaseTo').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editPurchaseTo').invalid && editAssets.get('editPurchaseTo').touched\"\r\n                                        class=\"text-danger\"> *Purchase to is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Manufacturer</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Model</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Serial Number</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Supplier</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Condition</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Warranty</label>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"In Months\"\r\n                                    [class.invalid]=\"editAssets.get('editWarranty').invalid && editAssets.get('editWarranty').touched\"\r\n                                    formControlName=\"editWarranty\">\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editWarranty').invalid && editAssets.get('editWarranty').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editWarranty').invalid && editAssets.get('editWarranty').touched\"\r\n                                        class=\"text-danger\"> *Warranty is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Value</label>\r\n                                <input placeholder=\"$1800\" class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editAssets.get('editvalue').invalid && editAssets.get('editvalue').touched\"\r\n                                    formControlName=\"editvalue\">\r\n                                <div *ngIf=\"editAssets.get('editvalue').invalid && editAssets.get('editvalue').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editvalue').invalid && editAssets.get('editvalue').touched\"\r\n                                        class=\"text-danger\"> *Value is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Asset User</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editAssets.get('editAssetUser').invalid && editAssets.get('editAssetUser').touched\"\r\n                                    formControlName=\"editAssetUser\">\r\n                                    <option>John Doe</option>\r\n                                    <option>Richard Miles</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetUser').invalid && editAssets.get('editAssetUser').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetUser').invalid && editAssets.get('editAssetUser').touched\"\r\n                                        class=\"text-danger\"> *Asset user is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editAssets.get('editAssetStatus').invalid && editAssets.get('editAssetStatus').touched\"\r\n                                    formControlName=\"editAssetStatus\">\r\n                                    <option>Pending</option>\r\n                                    <option>Approved</option>\r\n                                    <option>Deployed</option>\r\n                                    <option>Damaged</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editAssets.get('editAssetStatus').invalid && editAssets.get('editAssetStatus').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editAssets.get('editAssetStatus').invalid && editAssets.get('editAssetStatus').touched\"\r\n                                        class=\"text-danger\"> *Asset status is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Edit Asset Modal -->\r\n\r\n<!-- Delete Asset Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_asset\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Asset</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteAssets()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Asset Modal -->";

/***/ }),

/***/ 63853:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/assets/assets.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <!-- /Page Wrapper -->\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_assets_assets_module_ts.js.map