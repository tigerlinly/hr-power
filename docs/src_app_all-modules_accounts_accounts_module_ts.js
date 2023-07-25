"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_accounts_accounts_module_ts"],{

/***/ 66339:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/accounts/accounts-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsRoutingModule": () => (/* binding */ AccountsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.component */ 37158);
/* harmony import */ var _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimates/estimates.component */ 61049);
/* harmony import */ var _estimates_estimates_view_estimates_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estimates/estimates-view/estimates-view.component */ 68161);
/* harmony import */ var _estimates_create_estimates_create_estimates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estimates/create-estimates/create-estimates.component */ 76200);
/* harmony import */ var _estimates_edit_estimate_edit_estimate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estimates/edit-estimate/edit-estimate.component */ 46916);
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoices/invoices.component */ 93938);
/* harmony import */ var _invoices_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices/invoice-view/invoice-view.component */ 10204);
/* harmony import */ var _invoices_create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoices/create-invoice/create-invoice.component */ 91962);
/* harmony import */ var _invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoices/edit-invoice/edit-invoice.component */ 3641);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payments/payments.component */ 9690);
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expenses/expenses.component */ 69473);
/* harmony import */ var _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./provident-fund/provident-fund.component */ 8715);
/* harmony import */ var _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taxes/taxes.component */ 97610);
















const routes = [
    {
        path: "",
        component: _accounts_component__WEBPACK_IMPORTED_MODULE_0__.AccountsComponent,
        children: [
            {
                path: "estimates",
                component: _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_1__.EstimatesComponent
            },
            {
                path: "estimates-view",
                component: _estimates_estimates_view_estimates_view_component__WEBPACK_IMPORTED_MODULE_2__.EstimatesViewComponent
            },
            {
                path: "create-estimates",
                component: _estimates_create_estimates_create_estimates_component__WEBPACK_IMPORTED_MODULE_3__.CreateEstimatesComponent
            },
            {
                path: "edit-estimates",
                component: _estimates_edit_estimate_edit_estimate_component__WEBPACK_IMPORTED_MODULE_4__.EditEstimateComponent
            },
            {
                path: "invoices",
                component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_5__.InvoicesComponent
            },
            {
                path: "invoice-view",
                component: _invoices_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_6__.InvoiceViewComponent
            },
            {
                path: "create-invoice",
                component: _invoices_create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_7__.CreateInvoiceComponent
            },
            {
                path: "edit-invoice",
                component: _invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_8__.EditInvoiceComponent
            },
            {
                path: "payments",
                component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_9__.PaymentsComponent
            },
            {
                path: "expenses",
                component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_10__.ExpensesComponent
            },
            {
                path: "provident-fund",
                component: _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_11__.ProvidentFundComponent
            },
            {
                path: "taxes",
                component: _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_12__.TaxesComponent
            },
        ]
    }
];
let AccountsRoutingModule = class AccountsRoutingModule {
};
AccountsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
    })
], AccountsRoutingModule);



/***/ }),

/***/ 37158:
/*!************************************************************!*\
  !*** ./src/app/all-modules/accounts/accounts.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsComponent": () => (/* binding */ AccountsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _accounts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.component.html?ngResource */ 69730);
/* harmony import */ var _accounts_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.component.css?ngResource */ 20073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AccountsComponent = class AccountsComponent {
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
AccountsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
AccountsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-accounts',
        template: _accounts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accounts_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], AccountsComponent);



/***/ }),

/***/ 69098:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/accounts/accounts.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsModule": () => (/* binding */ AccountsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-routing.module */ 66339);
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.component */ 37158);
/* harmony import */ var _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estimates/estimates.component */ 61049);
/* harmony import */ var _estimates_estimates_view_estimates_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estimates/estimates-view/estimates-view.component */ 68161);
/* harmony import */ var _estimates_create_estimates_create_estimates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estimates/create-estimates/create-estimates.component */ 76200);
/* harmony import */ var _estimates_edit_estimate_edit_estimate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimates/edit-estimate/edit-estimate.component */ 46916);
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices/invoices.component */ 93938);
/* harmony import */ var _invoices_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoices/invoice-view/invoice-view.component */ 10204);
/* harmony import */ var _invoices_create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoices/create-invoice/create-invoice.component */ 91962);
/* harmony import */ var _invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoices/edit-invoice/edit-invoice.component */ 3641);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payments/payments.component */ 9690);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./expenses/expenses.component */ 69473);
/* harmony import */ var _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./provident-fund/provident-fund.component */ 8715);
/* harmony import */ var _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./taxes/taxes.component */ 97610);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);





















let AccountsModule = class AccountsModule {
};
AccountsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_1__.AccountsComponent, _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_2__.EstimatesComponent, _estimates_estimates_view_estimates_view_component__WEBPACK_IMPORTED_MODULE_3__.EstimatesViewComponent, _estimates_create_estimates_create_estimates_component__WEBPACK_IMPORTED_MODULE_4__.CreateEstimatesComponent, _estimates_edit_estimate_edit_estimate_component__WEBPACK_IMPORTED_MODULE_5__.EditEstimateComponent, _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__.InvoicesComponent, _invoices_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_7__.InvoiceViewComponent, _invoices_create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_8__.CreateInvoiceComponent, _invoices_edit_invoice_edit_invoice_component__WEBPACK_IMPORTED_MODULE_9__.EditInvoiceComponent, _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__.PaymentsComponent, _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_12__.ExpensesComponent, _provident_fund_provident_fund_component__WEBPACK_IMPORTED_MODULE_13__.ProvidentFundComponent, _taxes_taxes_component__WEBPACK_IMPORTED_MODULE_14__.TaxesComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_11__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_16__.SharingModule
        ]
    })
], AccountsModule);



/***/ }),

/***/ 76200:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/create-estimates/create-estimates.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateEstimatesComponent": () => (/* binding */ CreateEstimatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_estimates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-estimates.component.html?ngResource */ 10066);
/* harmony import */ var _create_estimates_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-estimates.component.css?ngResource */ 14734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);









let CreateEstimatesComponent = class CreateEstimatesComponent {
    constructor(router, route, allModulesService, toastr, formBuilder) {
        this.router = router;
        this.route = route;
        this.allModulesService = allModulesService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.allEstimates = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe("en-US");
        this.tax = 5;
    }
    ngOnInit() {
        //get id value of estimation list
        this.id = this.route.snapshot.queryParams["id"];
        // add estimation form value
        this.addEstimateForm = this.formBuilder.group({
            client: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            project: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            tax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            client_address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            billing_address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            estimate_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            expiry_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            other_information: [""],
            status: [""],
            totalamount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            discount: [""],
            grandTotal: [""],
            items: this.formBuilder.array([]),
        });
        //adding new rows to table
        this.addItems();
        //get estimation
        this.getEstimate();
    }
    //getting estimate
    getEstimate() {
        this.allModulesService.get("estimates").subscribe((res) => {
            this.allEstimates = res;
        });
    }
    //for adding new array
    get itemsList() {
        return this.addEstimateForm.get("items");
    }
    newItem() {
        return this.formBuilder.group({
            item: "",
            description: "",
            unit_cost: "",
            qty: "",
            amount: "",
        });
    }
    addItems() {
        this.itemsList.push(this.newItem());
    }
    //for calculating price values
    changePrice(i) {
        let qty = this.itemsList.at(i).get("qty").value;
        let price = this.itemsList.at(i).get("unit_cost").value;
        let amount = Number(qty) * Number(price);
        this.itemsList.at(i).get("amount").patchValue(amount);
        let total = 0;
        this.addEstimateForm.get("items").value.forEach((index) => {
            total += index.amount;
        });
        this.total = total;
        this.addEstimateForm.get("totalamount").setValue(total);
        this.percentageTaxValue = (this.total * Number(this.tax)) / 100;
        this.percentageDiscountValue =
            (this.total * Number(this.addEstimateForm.value.discount)) / 100;
        this.grandTotal =
            Number(this.total) +
                Number(this.percentageTaxValue) -
                Number(this.percentageDiscountValue);
        this.addEstimateForm.get("grandTotal").setValue(this.grandTotal);
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    //post method function for estimate form
    savesend() {
        if (this.addEstimateForm.invalid) {
            this.markFormGroupTouched(this.addEstimateForm);
            return;
        }
        if (!this.addEstimateForm.valid) {
            this.toastr.error("", "Please enter mandatory field!");
        }
        else {
            let estimateDateFormat = this.pipe.transform(this.addEstimateForm.value.estimate_date, "dd-MM-yyyy");
            let expiryToDateFormat = this.pipe.transform(this.addEstimateForm.value.expiry_date, "dd-MM-yyyy");
            let getItems = this.addEstimateForm.get("items").value;
            let amount = this.addEstimateForm.value.totalamount.toString();
            let obj = {
                number: "EST-0001",
                client: this.addEstimateForm.value.client,
                project: this.addEstimateForm.value.project,
                estimate_date: estimateDateFormat,
                email: this.addEstimateForm.value.email,
                tax: this.addEstimateForm.value.tax,
                client_address: this.addEstimateForm.value.client_address,
                expiry_date: expiryToDateFormat,
                billing_address: this.addEstimateForm.value.billing_address,
                other_information: this.addEstimateForm.value.other_information,
                status: "Declined",
                totalamount: amount,
                discount: this.addEstimateForm.value.discount,
                grandTotal: this.addEstimateForm.value.grandTotal,
                items: [
                    {
                        item: getItems[0].item,
                        description: getItems[0].description,
                        unit_cost: getItems[0].unit_cost,
                        qty: getItems[0].qty,
                        amount: getItems[0].amount,
                    },
                ],
            };
            this.allModulesService.add(obj, "estimates").subscribe((res) => {
                this.toastr.success("", "Added successfully!");
                this.router.navigate(["/layout/accounts/estimates"]);
            });
        }
    }
    //removing rows from table
    removeItems(i) {
        this.itemsList.removeAt(i);
    }
};
CreateEstimatesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
CreateEstimatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-create-estimates",
        template: _create_estimates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_estimates_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateEstimatesComponent);



/***/ }),

/***/ 46916:
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/edit-estimate/edit-estimate.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEstimateComponent": () => (/* binding */ EditEstimateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_estimate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-estimate.component.html?ngResource */ 27703);
/* harmony import */ var _edit_estimate_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-estimate.component.css?ngResource */ 99151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);









let EditEstimateComponent = class EditEstimateComponent {
    constructor(router, route, allModulesService, toastr, formBuilder) {
        this.router = router;
        this.route = route;
        this.allModulesService = allModulesService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe("en-US");
        this.dateStatus = false;
        this.tax = 5;
    }
    ngOnInit() {
        //getting edit id of selected estimate list
        this.id = parseInt(this.route.snapshot.queryParams["id"]);
        //editestimate form value
        this.editEstimateForm = this.formBuilder.group({
            client: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            project: [""],
            email: [""],
            tax: [""],
            client_address: [""],
            billing_address: [""],
            estimate_date: [""],
            expiry_date: [""],
            other_information: [""],
            status: [],
            totalamount: "",
            discount: [""],
            grandTotal: [""],
            items: this.formBuilder.array([]),
        });
        //get estimates
        this.getEstimate();
        //adding items
        this.addItems();
    }
    // get method for estimate
    getEstimate() {
        this.allModulesService.get("estimates").subscribe((res) => {
            this.allEstimates = res;
            //passing edit id
            this.edit(this.id);
        });
    }
    //for adding new rows
    get itemsList() {
        return this.editEstimateForm.get("items");
    }
    newItem() {
        return this.formBuilder.group({
            item: "",
            description: "",
            unit_cost: "",
            qty: "",
            amount: "",
        });
    }
    addItems() {
        this.itemsList.push(this.newItem());
    }
    //for calculating changing price
    changePrice(i) {
        let qty = this.itemsList.at(i).get("qty").value;
        let price = this.itemsList.at(i).get("unit_cost").value;
        let amount = Number(qty) * Number(price);
        this.itemsList.at(i).get("amount").patchValue(amount);
        let total = 0;
        this.editEstimateForm.get("items").value.forEach((index) => {
            total += index.amount;
        });
        this.total = total;
        this.editEstimateForm.get("totalamount").setValue(total);
        this.percentageTaxValue = (this.total * Number(this.tax)) / 100;
        this.percentageDiscountValue =
            (this.total * Number(this.editEstimateForm.value.discount)) / 100;
        this.grandTotal =
            Number(this.total) +
                Number(this.percentageTaxValue) -
                Number(this.percentageDiscountValue);
        this.editEstimateForm.get("grandTotal").setValue(this.grandTotal);
    }
    // to know the date picker changes
    selected(data) {
        this.dateStatus = data;
    }
    // for edit data using update method
    savesend() {
        if (!this.editEstimateForm.valid) {
            this.toastr.error("", "Please enter mandatory field!");
        }
        else {
            let params = this.editEstimateForm.value;
            params["status"] = 0;
            params["id"] = 2;
            if (this.dateStatus) {
                this.estimateDateFormat = this.pipe.transform(this.editEstimateForm.value.estimate_date, "dd-MM-yyyy");
                this.expiryToDateFormat = this.pipe.transform(this.editEstimateForm.value.expiry_date, "dd-MM-yyyy");
            }
            else {
                this.estimateDateFormat = this.editEstimateForm.value.estimate_date;
                this.expiryToDateFormat = this.editEstimateForm.value.expiry_date;
            }
            let getItems = this.editEstimateForm.get("items").value;
            let amount = this.editEstimateForm.value.totalamount.toString();
            let obj = {
                number: "EST-0001",
                client: this.editEstimateForm.value.client,
                project: this.editEstimateForm.value.project,
                estimate_date: this.estimateDateFormat,
                email: this.editEstimateForm.value.email,
                tax: this.editEstimateForm.value.tax,
                client_address: this.editEstimateForm.value.client_address,
                expiry_date: this.expiryToDateFormat,
                billing_address: this.editEstimateForm.value.billing_address,
                other_information: this.editEstimateForm.value.other_information,
                status: "Declined",
                totalamount: amount,
                id: this.id,
                discount: this.editEstimateForm.value.discount,
                grandTotal: this.editEstimateForm.value.grandTotal,
                items: [
                    {
                        item: getItems[0].item,
                        description: getItems[0].description,
                        unit_cost: getItems[0].unit_cost,
                        qty: getItems[0].qty,
                        amount: getItems[0].amount,
                    },
                ],
            };
            this.allModulesService.update(obj, "estimates").subscribe((res) => {
                this.toastr.success("", "Edited successfully!");
                this.router.navigate(["/layout/accounts/estimates"]);
            });
        }
    }
    //remove row from table
    removeItems(i) {
        this.itemsList.removeAt(i);
    }
    // set values to form
    edit(value) {
        this.editId = value;
        const index = this.allEstimates.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allEstimates[index];
        this.editEstimateForm.patchValue({
            client: toSetValues.client,
            project: toSetValues.project,
            email: toSetValues.email,
            tax: toSetValues.tax,
            client_address: toSetValues.client_address,
            billing_address: toSetValues.billing_address,
            estimate_date: toSetValues.estimate_date,
            expiry_date: toSetValues.expiry_date,
            other_information: toSetValues.other_information,
            status: toSetValues.status,
            totalamount: toSetValues.totalamount,
            discount: toSetValues.discount,
            grandTotal: toSetValues.grandTotal,
            items: [
                {
                    item: toSetValues.items[0].item,
                    description: toSetValues.items[0].description,
                    unit_cost: toSetValues.items[0].unit_cost,
                    qty: toSetValues.items[0].qty,
                    amount: toSetValues.items[0].amount,
                },
            ],
        });
    }
};
EditEstimateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
EditEstimateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-edit-estimate",
        template: _edit_estimate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_estimate_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditEstimateComponent);



/***/ }),

/***/ 68161:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/estimates-view/estimates-view.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimatesViewComponent": () => (/* binding */ EstimatesViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _estimates_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimates-view.component.html?ngResource */ 1200);
/* harmony import */ var _estimates_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimates-view.component.css?ngResource */ 86403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EstimatesViewComponent = class EstimatesViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
EstimatesViewComponent.ctorParameters = () => [];
EstimatesViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-estimates-view',
        template: _estimates_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_estimates_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstimatesViewComponent);



/***/ }),

/***/ 61049:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/estimates.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstimatesComponent": () => (/* binding */ EstimatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _estimates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estimates.component.html?ngResource */ 3616);
/* harmony import */ var _estimates_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimates.component.css?ngResource */ 69525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let EstimatesComponent = class EstimatesComponent {
    constructor(router, allModulesService) {
        this.router = router;
        this.allModulesService = allModulesService;
        this.dtOptions = {};
        this.estimates = [];
        this.rows = [];
        this.srch = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe("en-US");
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        //to get all estimates
        this.getAllEstimates();
    }
    //get id for the selected delete row
    deleteEstimate(estimate) {
        this.id = estimate.id;
    }
    //get estimate list
    getAllEstimates() {
        this.allModulesService.get("estimates").subscribe((res) => {
            this.estimates = res;
            this.dtTrigger.next();
            this.rows = this.estimates;
            this.srch = [...this.rows];
        });
    }
    //delete method of estimate list
    delete() {
        let id = Number(this.id);
        this.allModulesService.delete(id, "estimates").subscribe((res) => {
            this.router.navigate(["/layout/accounts/estimates"]);
            this.getAllEstimates();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
    }
    //search by from date
    searchFromDate(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.estimate_date.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    //search by to date
    searchToDate(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.expiry_date.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    //search by status
    searchStatus(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
EstimatesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
EstimatesComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
EstimatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-estimates",
        template: _estimates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_estimates_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstimatesComponent);



/***/ }),

/***/ 69473:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/accounts/expenses/expenses.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesComponent": () => (/* binding */ ExpensesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _expenses_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenses.component.html?ngResource */ 50717);
/* harmony import */ var _expenses_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses.component.css?ngResource */ 70165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let ExpensesComponent = class ExpensesComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "expenses";
        this.allExpenses = [];
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.dateStatus = false;
    }
    ngOnInit() {
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        this.getExpenses();
        // Add Expenses Form Validation And Getting Values
        this.addExpensesForm = this.formBuilder.group({
            itemName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchaseFrom: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchasedBy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            paidBy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        // Edit Expenses Form Validation And Getting Values
        this.editExpensesForm = this.formBuilder.group({
            itemName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchaseFrom: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchaseDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            purchasedBy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            paidBy: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
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
        this.allExpenses = [];
        this.getExpenses();
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    getExpenses() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allExpenses = data;
            this.rows = this.allExpenses;
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
    // Add Expenses Modal Api Call
    addExpenses() {
        if (this.addExpensesForm.invalid) {
            this.markFormGroupTouched(this.addExpensesForm);
            return;
        }
        if (this.addExpensesForm.valid) {
            let purchaseToDateFormat = this.pipe.transform(this.addExpensesForm.value.purchaseDate, "dd-MM-yyyy");
            let obj = {
                item: this.addExpensesForm.value.itemName,
                purchaseFrom: this.addExpensesForm.value.purchaseFrom,
                purchaseDate: purchaseToDateFormat,
                purchasedBy: this.addExpensesForm.value.purchasedBy,
                amount: this.addExpensesForm.value.amount,
                paidby: this.addExpensesForm.value.paidBy,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getExpenses();
            $("#add_expense").modal("hide");
            this.addExpensesForm.reset();
            this.toastr.success("Expenses added", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    // to know the date picker changes
    from(data) {
        this.editPurchaseToDateFormat = this.pipe.transform(data, "dd-MM-yyyy");
    }
    // Edit Expenses Modal Api Call
    editExpenses() {
        if (this.editExpensesForm.valid) {
            let obj = {
                item: this.editExpensesForm.value.itemName,
                purchaseFrom: this.editExpensesForm.value.purchaseFrom,
                purchaseDate: this.editPurchaseToDateFormat,
                purchasedBy: this.editExpensesForm.value.purchasedBy,
                amount: this.editExpensesForm.value.amount,
                paidby: this.editExpensesForm.value.paidBy,
                id: this.editId,
            };
            this.allModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getExpenses();
            $("#edit_expense").modal("hide");
            this.toastr.success("Expenses edited", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    edit(value) {
        this.editId = value;
        const index = this.allExpenses.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allExpenses[index];
        this.editExpensesForm.setValue({
            itemName: toSetValues.item,
            purchaseFrom: toSetValues.purchaseFrom,
            purchaseDate: toSetValues.purchaseDate,
            purchasedBy: toSetValues.purchasedBy,
            amount: toSetValues.amount,
            paidBy: toSetValues.paidby,
        });
    }
    // Delete Expenses Modal Api Call
    deleteTicket() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.getExpenses();
        $("#delete_expense").modal("hide");
        this.toastr.success("Expenses deleted", "Success");
    }
    //search by name
    searchName(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.item.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search purchased by
    purchasedBy(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.purchasedBy.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search paid by
    paidBy(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.paidby.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by from
    searchByFrom(val) {
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
    //search by to
    searchByTo(val) {
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
    //for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ExpensesComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ExpensesComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ExpensesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-expenses",
        template: _expenses_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expenses_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpensesComponent);



/***/ }),

/***/ 91962:
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/create-invoice/create-invoice.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateInvoiceComponent": () => (/* binding */ CreateInvoiceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_invoice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-invoice.component.html?ngResource */ 16887);
/* harmony import */ var _create_invoice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-invoice.component.css?ngResource */ 49372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);









let CreateInvoiceComponent = class CreateInvoiceComponent {
    constructor(router, route, allModulesService, toastr, formBuilder) {
        this.router = router;
        this.route = route;
        this.allModulesService = allModulesService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe("en-US");
        this.tax = 5;
    }
    ngOnInit() {
        //get id value of invoice list
        this.id = this.route.snapshot.queryParams["id"];
        //add invoive form
        this.addInvoiceForm = this.formBuilder.group({
            client: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            project: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            tax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            client_address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            billing_address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            invoice_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            due_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            other_information: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            status: [""],
            totalamount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            discount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            grandTotal: [""],
            items: this.formBuilder.array([]),
        });
        //for adding row
        this.addItems();
        //for get all invoice
        this.getAllInvoices();
    }
    //for adding new array
    get itemsList() {
        return this.addInvoiceForm.get("items");
    }
    // getting invoice
    getAllInvoices() {
        this.allModulesService.get("invoice").subscribe((res) => {
            this.invoices = res;
        });
    }
    newItem() {
        return this.formBuilder.group({
            item: "",
            description: "",
            unit_cost: "",
            qty: "",
            amount: "",
        });
    }
    //for calculating amount
    changePrice(i) {
        let qty = this.itemsList.at(i).get("qty").value;
        let price = this.itemsList.at(i).get("unit_cost").value;
        let amount = Number(qty) * Number(price);
        this.itemsList.at(i).get("amount").patchValue(amount);
        let total = 0;
        this.addInvoiceForm.get("items").value.forEach((index) => {
            total += index.amount;
        });
        this.total = total;
        this.addInvoiceForm.get("totalamount").setValue(total);
        this.percentageTaxValue = (this.total * Number(this.tax)) / 100;
        this.percentageDiscountValue =
            (this.total * Number(this.addInvoiceForm.value.discount)) / 100;
        this.grandTotal =
            Number(this.total) +
                Number(this.percentageTaxValue) -
                Number(this.percentageDiscountValue);
        this.addInvoiceForm.get("grandTotal").setValue(this.grandTotal);
    }
    addItems() {
        this.itemsList.push(this.newItem());
    }
    removeItems(i) {
        this.itemsList.removeAt(i);
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    savesend() {
        if (this.addInvoiceForm.invalid) {
            this.markFormGroupTouched(this.addInvoiceForm);
            return;
        }
        if (!this.addInvoiceForm.valid) {
            this.toastr.error("", "Please enter mandatory field!");
        }
        else {
            let invoiceDateFormat = this.pipe.transform(this.addInvoiceForm.value.invoice_date, "dd-MM-yyyy");
            let dueDateFormat = this.pipe.transform(this.addInvoiceForm.value.due_date, "dd-MM-yyyy");
            let getItems = this.addInvoiceForm.get("items").value;
            let amount = this.addInvoiceForm.value.totalamount.toString();
            let obj = {
                number: "#INV-0001",
                client: this.addInvoiceForm.value.client,
                project: this.addInvoiceForm.value.project,
                invoice_date: invoiceDateFormat,
                email: this.addInvoiceForm.value.email,
                tax: this.addInvoiceForm.value.tax,
                client_address: this.addInvoiceForm.value.client_address,
                due_date: dueDateFormat,
                billing_address: this.addInvoiceForm.value.billing_address,
                other_information: this.addInvoiceForm.value.other_information,
                status: "Pending",
                totalamount: amount,
                discount: this.addInvoiceForm.value.discount,
                grandTotal: this.addInvoiceForm.value.grandTotal,
                items: [
                    {
                        item: getItems[0].item,
                        description: getItems[0].description,
                        unit_cost: getItems[0].unit_cost,
                        qty: getItems[0].qty,
                        amount: getItems[0].amount,
                    },
                ],
            };
            this.allModulesService.add(obj, "invoice").subscribe((res) => {
                this.toastr.success("", "Added successfully!");
                this.router.navigate(["/layout/accounts/invoices"]);
            });
        }
    }
};
CreateInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
CreateInvoiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-create-invoice",
        template: _create_invoice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_invoice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateInvoiceComponent);



/***/ }),

/***/ 3641:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/edit-invoice/edit-invoice.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInvoiceComponent": () => (/* binding */ EditInvoiceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_invoice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-invoice.component.html?ngResource */ 4635);
/* harmony import */ var _edit_invoice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-invoice.component.css?ngResource */ 54401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);









let EditInvoiceComponent = class EditInvoiceComponent {
    constructor(router, route, allModulesService, toastr, formBuilder) {
        this.router = router;
        this.route = route;
        this.allModulesService = allModulesService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe("en-US");
        this.dateStatus = false;
        this.tax = 5;
    }
    ngOnInit() {
        //getting edit id of selected estimate list
        this.id = parseInt(this.route.snapshot.queryParams["id"]);
        //editestimate form value
        this.editInvoiceForm = this.formBuilder.group({
            client: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            project: [""],
            email: [""],
            tax: [""],
            client_address: [""],
            billing_address: [""],
            invoice_date: [""],
            due_date: [""],
            other_information: [""],
            status: [],
            totalamount: "",
            discount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            grandTotal: [""],
            items: this.formBuilder.array([]),
        });
        //get estimates
        this.getEstimate();
        //adding items
        this.addItems();
    }
    // get method for estimate
    getEstimate() {
        this.allModulesService.get("invoice").subscribe((res) => {
            this.allInvoices = res;
            //passing edit id
            this.edit(this.id);
        });
    }
    //for adding new rows
    get itemsList() {
        return this.editInvoiceForm.get("items");
    }
    newItem() {
        return this.formBuilder.group({
            item: "",
            description: "",
            unit_cost: "",
            qty: "",
            amount: "",
        });
    }
    addItems() {
        this.itemsList.push(this.newItem());
    }
    //for calculating changing price
    changePrice(i) {
        let qty = this.itemsList.at(i).get("qty").value;
        let price = this.itemsList.at(i).get("unit_cost").value;
        let amount = Number(qty) * Number(price);
        this.itemsList.at(i).get("amount").patchValue(amount);
        let total = 0;
        this.editInvoiceForm.get("items").value.forEach((index) => {
            total += index.amount;
        });
        this.total = total;
        this.editInvoiceForm.get("totalamount").setValue(total);
        this.percentageTaxValue = (this.total * Number(this.tax)) / 100;
        this.percentageDiscountValue =
            (this.total * Number(this.editInvoiceForm.value.discount)) / 100;
        this.grandTotal =
            Number(this.total) +
                Number(this.percentageTaxValue) -
                Number(this.percentageDiscountValue);
        this.editInvoiceForm.get("grandTotal").setValue(this.grandTotal);
    }
    // to know the date picker changes
    selected(data) {
        this.dateStatus = data;
    }
    // for edit data using update method
    savesend() {
        if (!this.editInvoiceForm.valid) {
            this.toastr.error("", "Please enter mandatory field!");
        }
        else {
            let params = this.editInvoiceForm.value;
            params["status"] = 0;
            params["id"] = 2;
            if (this.dateStatus) {
                this.estimateDateFormat = this.pipe.transform(this.editInvoiceForm.value.invoice_date, "dd-MM-yyyy");
                this.expiryToDateFormat = this.pipe.transform(this.editInvoiceForm.value.due_date, "dd-MM-yyyy");
            }
            else {
                this.estimateDateFormat = this.editInvoiceForm.value.invoice_date;
                this.expiryToDateFormat = this.editInvoiceForm.value.due_date;
            }
            let getItems = this.editInvoiceForm.get("items").value;
            let amount = this.editInvoiceForm.value.totalamount.toString();
            let obj = {
                number: "#INV-0001",
                client: this.editInvoiceForm.value.client,
                project: this.editInvoiceForm.value.project,
                invoice_date: this.estimateDateFormat,
                email: this.editInvoiceForm.value.email,
                tax: this.editInvoiceForm.value.tax,
                client_address: this.editInvoiceForm.value.client_address,
                due_date: this.expiryToDateFormat,
                billing_address: this.editInvoiceForm.value.billing_address,
                other_information: this.editInvoiceForm.value.other_information,
                status: "Pending",
                totalamount: amount,
                discount: this.editInvoiceForm.value.discount,
                grandTotal: this.editInvoiceForm.value.grandTotal,
                id: this.id,
                items: [
                    {
                        item: getItems[0].item,
                        description: getItems[0].description,
                        unit_cost: getItems[0].unit_cost,
                        qty: getItems[0].qty,
                        amount: getItems[0].amount,
                    },
                ],
            };
            this.allModulesService.update(obj, "invoice").subscribe((res) => {
                this.router.navigate(["/layout/accounts/invoices"]);
                this.toastr.success("", "Edited successfully!");
            });
        }
    }
    //remove row from table
    removeItems(i) {
        this.itemsList.removeAt(i);
    }
    // set values to form
    edit(value) {
        this.editId = value;
        const index = this.allInvoices.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allInvoices[index];
        this.editInvoiceForm.setValue({
            client: toSetValues.client,
            project: toSetValues.project,
            email: toSetValues.email,
            tax: toSetValues.tax,
            client_address: toSetValues.client_address,
            billing_address: toSetValues.billing_address,
            invoice_date: toSetValues.invoice_date,
            due_date: toSetValues.due_date,
            other_information: toSetValues.other_information,
            status: toSetValues.status,
            totalamount: toSetValues.totalamount,
            discount: toSetValues.discount,
            grandTotal: toSetValues.grandTotal,
            items: [
                {
                    item: toSetValues.items[0].item,
                    description: toSetValues.items[0].description,
                    unit_cost: toSetValues.items[0].unit_cost,
                    qty: toSetValues.items[0].qty,
                    amount: toSetValues.items[0].amount,
                },
            ],
        });
    }
};
EditInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
EditInvoiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-edit-invoice",
        template: _edit_invoice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_invoice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditInvoiceComponent);



/***/ }),

/***/ 10204:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/invoice-view/invoice-view.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceViewComponent": () => (/* binding */ InvoiceViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invoice_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-view.component.html?ngResource */ 84967);
/* harmony import */ var _invoice_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-view.component.css?ngResource */ 29639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let InvoiceViewComponent = class InvoiceViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
InvoiceViewComponent.ctorParameters = () => [];
InvoiceViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-invoice-view',
        template: _invoice_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invoice_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvoiceViewComponent);



/***/ }),

/***/ 93938:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/invoices.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicesComponent": () => (/* binding */ InvoicesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invoices_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoices.component.html?ngResource */ 73162);
/* harmony import */ var _invoices_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoices.component.css?ngResource */ 83250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);









let InvoicesComponent = class InvoicesComponent {
    constructor(router, allModulesService) {
        this.router = router;
        this.allModulesService = allModulesService;
        this.dtOptions = {};
        this.invoices = [];
        this.rows = [];
        this.srch = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe("en-US");
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        //get all invoices
        this.getAllInvoices();
    }
    //get all invoices
    getAllInvoices() {
        this.allModulesService.get("invoice").subscribe((res) => {
            this.invoices = res;
            this.dtTrigger.next();
            this.rows = this.invoices;
            this.srch = [...this.rows];
        });
    }
    //getting id for selected row
    deleteInvoice(estimate) {
        this.id = estimate.id;
    }
    // delete method for deleting rows
    delete() {
        let id = Number(this.id);
        this.allModulesService.delete(id, "invoice").subscribe((res) => {
            this.router.navigate(["/layout/accounts/invoices"]);
            this.getAllInvoices();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
    }
    //search by from date
    searchFromDate(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.invoice_date.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    //search by to date
    searchToDate(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.due_date.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    //search by status
    searchStatus(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
InvoicesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
InvoicesComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
InvoicesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-invoices",
        template: _invoices_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invoices_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvoicesComponent);



/***/ }),

/***/ 9690:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/accounts/payments/payments.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsComponent": () => (/* binding */ PaymentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.component.html?ngResource */ 43875);
/* harmony import */ var _payments_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.component.css?ngResource */ 72836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);






let PaymentsComponent = class PaymentsComponent {
    constructor(allModuleService) {
        this.allModuleService = allModuleService;
        this.dtOptions = {};
        this.url = "payments";
        this.allPayments = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        //get payments
        this.getPayments();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    // get payment API call
    getPayments() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allPayments = data;
            this.dtTrigger.next();
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
PaymentsComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
PaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-payments",
        template: _payments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payments_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentsComponent);



/***/ }),

/***/ 8715:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/provident-fund/provident-fund.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidentFundComponent": () => (/* binding */ ProvidentFundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _provident_fund_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provident-fund.component.html?ngResource */ 53098);
/* harmony import */ var _provident_fund_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provident-fund.component.css?ngResource */ 54045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let ProvidentFundComponent = class ProvidentFundComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "providentFund";
        this.allProvidentfund = [];
    }
    ngOnInit() {
        this.getProvidentfund();
        // Add Provident Form Validation And Getting Values
        this.addProvidentfund = this.formBuilder.group({
            employeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            providentType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            employeeShare: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            organisationShare: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editProvidentForm = this.formBuilder.group({
            employeeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            providentType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            employeeShare: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            organisationShare: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getProvidentfund() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allProvidentfund = data;
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
    addProvident() {
        if (this.addProvidentfund.invalid) {
            this.markFormGroupTouched(this.addProvidentfund);
            return;
        }
        if (this.addProvidentfund.valid) {
            let obj = {
                employeeName: this.addProvidentfund.value.employeeName,
                providentFundType: this.addProvidentfund.value.providentType,
                employeeShare: this.addProvidentfund.value.employeeShare,
                organizationShare: this.addProvidentfund.value.organisationShare,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getProvidentfund();
            $("#add_pf").modal("hide");
            this.addProvidentfund.reset();
            this.toastr.success("Provident fund is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editProvident() {
        let obj = {
            employeeName: this.editProvidentForm.value.employeeName,
            providentFundType: this.editProvidentForm.value.providentType,
            employeeShare: this.editProvidentForm.value.employeeShare,
            organizationShare: this.editProvidentForm.value.organisationShare,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getProvidentfund();
        $("#edit_pf").modal("hide");
        this.toastr.success("Provident fund is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allProvidentfund.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allProvidentfund[index];
        this.editProvidentForm.setValue({
            employeeName: toSetValues.employeeName,
            providentType: toSetValues.providentFundType,
            employeeShare: toSetValues.employeeShare,
            organisationShare: toSetValues.organizationShare,
        });
    }
    // Delete Provident Modal Api Call
    deleteProvident() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getProvidentfund();
            $("#delete_pf").modal("hide");
            this.toastr.success("Tax is deleted", "Success");
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ProvidentFundComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
ProvidentFundComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ProvidentFundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-provident-fund",
        template: _provident_fund_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_provident_fund_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProvidentFundComponent);



/***/ }),

/***/ 97610:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/accounts/taxes/taxes.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxesComponent": () => (/* binding */ TaxesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _taxes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxes.component.html?ngResource */ 72628);
/* harmony import */ var _taxes_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxes.component.css?ngResource */ 91747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let TaxesComponent = class TaxesComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "taxes";
        this.allTaxes = [];
    }
    ngOnInit() {
        this.getTaxes();
        // Add Taxes Form Validation And Getting Values
        this.addTaxes = this.formBuilder.group({
            taxName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            taxpercentage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // Edit Taxes Form Validation And Getting Values
        this.editTaxForm = this.formBuilder.group({
            editTaxName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editTaxPercentage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getTaxes() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allTaxes = data;
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
    // Add Taxes Modal Api Call
    addTaxSubmit() {
        if (this.addTaxes.invalid) {
            this.markFormGroupTouched(this.addTaxes);
            return;
        }
        if (this.addTaxes.valid) {
            let obj = {
                taxName: this.addTaxes.value.taxName,
                taxPercentage: this.addTaxes.value.taxpercentage,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getTaxes();
            $("#add_tax").modal("hide");
            this.addTaxes.reset();
            this.toastr.success("Tax is added", "Success");
        }
    }
    // Edit Taxes Modal Api Call
    editTaxSubmit() {
        let obj = {
            taxName: this.editTaxForm.value.editTaxName,
            taxPercentage: this.editTaxForm.value.editTaxPercentage,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getTaxes();
        $("#edit_tax").modal("hide");
        this.toastr.success("Tax is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allTaxes.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allTaxes[index];
        this.editTaxForm.setValue({
            editTaxName: toSetValues.taxName,
            editTaxPercentage: toSetValues.taxPercentage,
        });
    }
    // Delete Taxes Modal Api Call
    deleteTaxes() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getTaxes();
            $("#delete_tax").modal("hide");
            this.toastr.success("Tax is deleted", "Success");
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
TaxesComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
TaxesComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
TaxesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-taxes",
        template: _taxes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_taxes_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaxesComponent);



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

/***/ 20073:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/accounts/accounts.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 14734:
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/create-estimates/create-estimates.component.css?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZXN0aW1hdGVzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 99151:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/edit-estimate/edit-estimate.component.css?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVzdGltYXRlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 86403:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/estimates-view/estimates-view.component.css?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RpbWF0ZXMtdmlldy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 69525:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/estimates.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RpbWF0ZXMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 70165:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/expenses/expenses.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 49372:
/*!******************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/create-invoice/create-invoice.component.css?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtaW52b2ljZS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 54401:
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/edit-invoice/edit-invoice.component.css?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWludm9pY2UuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 29639:
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/invoice-view/invoice-view.component.css?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 83250:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/invoices.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".label-info-border {\r\n    border: 1px solid #009efb;\r\n    color: #009efb;\r\n    background-color: #fff;\r\n    display: inline-block;\r\n    min-width: 80px;\r\n}\r\n\r\n.label-success-border {\r\n    border: 1px solid #55ce63;\r\n    color: #55ce63;\r\n    background-color: #fff;\r\n    display: inline-block;\r\n    min-width: 80px;\r\n}\r\n\r\n.label-warning-border {\r\n    border: 1px solid #ffbc34;\r\n    color: #ffbc34;\r\n    background-color: #fff;\r\n    display: inline-block;\r\n    min-width: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoiaW52b2ljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1pbmZvLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5ZWZiO1xyXG4gICAgY29sb3I6ICMwMDllZmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ubGFiZWwtc3VjY2Vzcy1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1Y2U2MztcclxuICAgIGNvbG9yOiAjNTVjZTYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuLmxhYmVsLXdhcm5pbmctYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmJjMzQ7XHJcbiAgICBjb2xvcjogI2ZmYmMzNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 72836:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/payments/payments.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 54045:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/provident-fund/provident-fund.component.css?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92aWRlbnQtZnVuZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 91747:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/accounts/taxes/taxes.component.css?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXhlcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 69730:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/accounts/accounts.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 10066:
/*!************************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/create-estimates/create-estimates.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Add Estimate</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Add Estimate</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"addEstimateForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"client\" [class.invalid]=\"addEstimateForm.get('client').invalid && addEstimateForm.get('client').touched\"\r\n                            formControlName=\"client\">\r\n                                <option>Please Select</option>\r\n                                <option>Barry Cuda</option>\r\n                                <option>Tressa Wexler</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"addEstimateForm.get('client').invalid && addEstimateForm.get('client').touched\">\r\n                            <small\r\n                                *ngIf=\"addEstimateForm.get('client').invalid && addEstimateForm.get('client').touched\"\r\n                                class=\"text-danger\"> *Client is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Project <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"Project\" [class.invalid]=\"addEstimateForm.get('project').invalid && addEstimateForm.get('project').touched\"\r\n                            formControlName=\"project\">\r\n                                <option>Select Project</option>\r\n                                <option>Office Management</option>\r\n                                <option>Project Management</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"addEstimateForm.get('project').invalid && addEstimateForm.get('project').touched\">\r\n                            <small\r\n                                *ngIf=\"addEstimateForm.get('project').invalid && addEstimateForm.get('project').touched\"\r\n                                class=\"text-danger\"> *Project is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" type=\"email\" name=\"email\" [class.invalid]=\"addEstimateForm.get('email').invalid && addEstimateForm.get('email').touched\"\r\n                             formControlName=\"email\">\r\n                            <div\r\n                            *ngIf=\"addEstimateForm.get('email').invalid && addEstimateForm.get('email').touched\">\r\n                            <small\r\n                                *ngIf=\"addEstimateForm.get('email').invalid && addEstimateForm.get('email').touched\"\r\n                                class=\"text-danger\"> *Email is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tax</label>\r\n                            <select class=\"form-select form-control\" name=\"tax\" [class.invalid]=\"addEstimateForm.get('tax').invalid && addEstimateForm.get('tax').touched\"\r\n                            formControlName=\"tax\" >\r\n                                <option>Select Tax</option>\r\n                                <option>VAT</option>\r\n                                <option>GST</option>\r\n                                <option>No Tax</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"addEstimateForm.get('tax').invalid && addEstimateForm.get('tax').touched\">\r\n                            <small\r\n                                *ngIf=\"addEstimateForm.get('tax').invalid && addEstimateForm.get('tax').touched\"\r\n                                class=\"text-danger\"> *Tax is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"tax\" [class.invalid]=\"addEstimateForm.get('client_address').invalid && addEstimateForm.get('client_address').touched\"\r\n                             formControlName=\"client_address\"></textarea>\r\n                             <div\r\n                             *ngIf=\"addEstimateForm.get('client_address').invalid && addEstimateForm.get('client_address').touched\">\r\n                             <small\r\n                                 *ngIf=\"addEstimateForm.get('client_address').invalid && addEstimateForm.get('client_address').touched\"\r\n                                 class=\"text-danger\"> *Client address is required</small>\r\n                         </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Billing Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"tax\" [class.invalid]=\"addEstimateForm.get('billing_address').invalid && addEstimateForm.get('billing_address').touched\"\r\n                             formControlName=\"billing_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"addEstimateForm.get('billing_address').invalid && addEstimateForm.get('billing_address').touched\">\r\n                            <small\r\n                                *ngIf=\"addEstimateForm.get('billing_address').invalid && addEstimateForm.get('billing_address').touched\"\r\n                                class=\"text-danger\"> *Billing address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Estimate Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" name=\"tax\"  [class.invalid]=\"addEstimateForm.get('estimate_date').invalid && addEstimateForm.get('estimate_date').touched\"\r\n                                formControlName=\"estimate_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\">\r\n                                <div\r\n                                *ngIf=\"addEstimateForm.get('estimate_date').invalid && addEstimateForm.get('estimate_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"addEstimateForm.get('estimate_date').invalid && addEstimateForm.get('estimate_date').touched\"\r\n                                    class=\"text-danger\"> *Estimate date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Expiry Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" name=\"expiry\" [class.invalid]=\"addEstimateForm.get('expiry_date').invalid && addEstimateForm.get('expiry_date').touched\"\r\n                                formControlName=\"expiry_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\">\r\n                            </div>\r\n                            <div\r\n                            *ngIf=\"addEstimateForm.get('expiry_date').invalid && addEstimateForm.get('expiry_date').touched\">\r\n                            <small\r\n                                *ngIf=\"addEstimateForm.get('expiry_date').invalid && addEstimateForm.get('expiry_date').touched\"\r\n                                class=\"text-danger\"> *Expiry date is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20px\">#</th>\r\n                                        <th class=\"col-sm-2\">Item</th>\r\n                                        <th class=\"col-md-6\">Description</th>\r\n                                        <th style=\"width:100px;\">Unit Cost</th>\r\n                                        <th style=\"width:80px;\">Qty</th>\r\n                                        <th>Amount</th>\r\n                                        <th> </th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody formArrayName=\"items\">\r\n\r\n                                    <tr *ngFor=\"let item of addEstimateForm.get('items')['controls']; let i=index\" [formGroupName]=\"i\">\r\n                                        \r\n                                            <td>{{i+1}}</td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" name=\"item\" formControlName=\"item\" type=\"text\" style=\"min-width:150px\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"description\" type=\"text\" style=\"min-width:150px\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"unit_cost\" style=\"width:100px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"qty\" style=\"width:80px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"amount\" readonly style=\"width:120px\" type=\"text\">\r\n                                            </td>\r\n                                            <td><a (click)=\"addItems()\" class=\"text-success font-18\" title=\"Add\"><i\r\n                                                        class=\"fa fa-plus\"></i></a></td>\r\n                                             <td *ngIf=\"i != 0\">\r\n                                                <a (click)=\"removeItems(i)\" class=\"text-danger font-18\" title=\"Remove\">\r\n                                                    <i class=\"fa fa-trash-o\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        \r\n                                    </tr>\r\n                                 \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-end\">Total</td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\"><input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"addEstimateForm.get('totalamount').invalid && addEstimateForm.get('totalamount').touched\"\r\n                                            formControlName=\"totalamount\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" class=\"text-end\">Tax</td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\">\r\n                                            <input class=\"form-control text-end\" value=\"5%\" readonly type=\"text\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" class=\"text-end\">\r\n                                            Discount %\r\n                                        </td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\">\r\n                                            <input class=\"form-control text-end\" type=\"text\" [class.invalid]=\"addEstimateForm.get('discount').invalid && addEstimateForm.get('discount').touched\"\r\n                                            formControlName=\"discount\" (input)=\"changePrice(0)\" >\r\n                                            <div\r\n                                            *ngIf=\"addEstimateForm.get('discount').invalid && addEstimateForm.get('discount').touched\">\r\n                                            <small\r\n                                                *ngIf=\"addEstimateForm.get('discount').invalid && addEstimateForm.get('discount').touched\"\r\n                                                class=\"text-danger\"> *Discount is required</small>\r\n                                        </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right; font-weight: bold\">\r\n                                            Grand Total\r\n                                        </td>\r\n                                        <td\r\n                                            style=\"text-align: right; padding-right: 30px; font-weight: bold; font-size: 16px;width: 230px\">\r\n                                            <input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"addEstimateForm.get('grandTotal').invalid && addEstimateForm.get('grandTotal').touched\"\r\n                                            formControlName=\"grandTotal\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Other Information</label>\r\n                                    <textarea class=\"form-control\" rows=\"4\" [class.invalid]=\"addEstimateForm.get('other_information').invalid && addEstimateForm.get('other_information').touched\"\r\n                                    formControlName=\"other_information\"></textarea>\r\n                                    <div\r\n                                    *ngIf=\"addEstimateForm.get('other_information').invalid && addEstimateForm.get('other_information').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addEstimateForm.get('other_information').invalid && addEstimateForm.get('other_information').touched\"\r\n                                        class=\"text-danger\"> *Other information is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button *ngIf=\"!id\" class=\"btn btn-primary submit-btn m-r-10\" (click)=\"savesend()\">Save & Send</button>\r\n                    <button *ngIf=\"!id\" class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                     <button *ngIf=\"id\" class=\"btn btn-primary submit-btn\" (click)=\"edit()\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 27703:
/*!******************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/edit-estimate/edit-estimate.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Edit Estimate</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit Estimate</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"editEstimateForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"client\" [class.invalid]=\"editEstimateForm.get('client').invalid && editEstimateForm.get('client').touched\"\r\n                            formControlName=\"client\">\r\n                                <option>Please Select</option>\r\n                                <option >Barry Cuda</option>\r\n                                <option>Tressa Wexler</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editEstimateForm.get('client').invalid && editEstimateForm.get('client').touched\">\r\n                            <small\r\n                                *ngIf=\"editEstimateForm.get('client').invalid && editEstimateForm.get('client').touched\"\r\n                                class=\"text-danger\"> *Client is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Project <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"Project\" [class.invalid]=\"editEstimateForm.get('project').invalid && editEstimateForm.get('project').touched\"\r\n                            formControlName=\"project\">\r\n                                <option>Select Project</option>\r\n                                <option>Office Management</option>\r\n                                <option>Project Management</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editEstimateForm.get('project').invalid && editEstimateForm.get('project').touched\">\r\n                            <small\r\n                                *ngIf=\"editEstimateForm.get('project').invalid && editEstimateForm.get('project').touched\"\r\n                                class=\"text-danger\"> *Project is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" type=\"email\" name=\"email\" [class.invalid]=\"editEstimateForm.get('email').invalid && editEstimateForm.get('email').touched\"\r\n                             formControlName=\"email\">\r\n                            <div\r\n                            *ngIf=\"editEstimateForm.get('email').invalid && editEstimateForm.get('email').touched\">\r\n                            <small\r\n                                *ngIf=\"editEstimateForm.get('email').invalid && editEstimateForm.get('email').touched\"\r\n                                class=\"text-danger\"> *Email is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tax</label>\r\n                            <select class=\"form-select form-control\" name=\"tax\" [class.invalid]=\"editEstimateForm.get('tax').invalid && editEstimateForm.get('tax').touched\"\r\n                            formControlName=\"tax\" >\r\n                                <option>Select Tax</option>\r\n                                <option>VAT</option>\r\n                                <option>GST</option>\r\n                                <option>No Tax</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editEstimateForm.get('tax').invalid && editEstimateForm.get('tax').touched\">\r\n                            <small\r\n                                *ngIf=\"editEstimateForm.get('tax').invalid && editEstimateForm.get('tax').touched\"\r\n                                class=\"text-danger\"> *Tax is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"tax\" [class.invalid]=\"editEstimateForm.get('client_address').invalid && editEstimateForm.get('client_address').touched\"\r\n                             formControlName=\"client_address\"></textarea>\r\n                             <div\r\n                             *ngIf=\"editEstimateForm.get('client_address').invalid && editEstimateForm.get('client_address').touched\">\r\n                             <small\r\n                                 *ngIf=\"editEstimateForm.get('client_address').invalid && editEstimateForm.get('client_address').touched\"\r\n                                 class=\"text-danger\"> *Client address is required</small>\r\n                         </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Billing Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"tax\" [class.invalid]=\"editEstimateForm.get('billing_address').invalid && editEstimateForm.get('billing_address').touched\"\r\n                             formControlName=\"billing_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editEstimateForm.get('billing_address').invalid && editEstimateForm.get('billing_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editEstimateForm.get('billing_address').invalid && editEstimateForm.get('billing_address').touched\"\r\n                                class=\"text-danger\"> *Billing address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Estimate Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" name=\"tax\"  [class.invalid]=\"editEstimateForm.get('estimate_date').invalid && editEstimateForm.get('estimate_date').touched\"\r\n                                formControlName=\"estimate_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"(onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editEstimateForm.get('estimate_date').invalid && editEstimateForm.get('estimate_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editEstimateForm.get('estimate_date').invalid && editEstimateForm.get('estimate_date').touched\"\r\n                                    class=\"text-danger\"> *Estimate date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Expiry Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" name=\"expiry\" [class.invalid]=\"editEstimateForm.get('expiry_date').invalid && editEstimateForm.get('expiry_date').touched\"\r\n                                formControlName=\"expiry_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (onChange) = \"selected(true)\">\r\n                            </div>\r\n                            <div\r\n                            *ngIf=\"editEstimateForm.get('expiry_date').invalid && editEstimateForm.get('expiry_date').touched\">\r\n                            <small\r\n                                *ngIf=\"editEstimateForm.get('expiry_date').invalid && editEstimateForm.get('expiry_date').touched\"\r\n                                class=\"text-danger\"> *Expiry date is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20px\">#</th>\r\n                                        <th class=\"col-sm-2\">Item</th>\r\n                                        <th class=\"col-md-6\">Description</th>\r\n                                        <th style=\"width:100px;\">Unit Cost</th>\r\n                                        <th style=\"width:80px;\">Qty</th>\r\n                                        <th>Amount</th>\r\n                                        <th> </th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody formArrayName=\"items\">\r\n\r\n                                    <tr *ngFor=\"let item of editEstimateForm.get('items')['controls']; let i=index\" [formGroupName]=\"i\">\r\n                                        \r\n                                            <td>{{i+1}}</td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" name=\"item\" formControlName=\"item\" type=\"text\" style=\"min-width:150px\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"description\" type=\"text\" style=\"min-width:150px\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"unit_cost\" style=\"width:100px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"qty\" style=\"width:80px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"amount\" readonly style=\"width:120px\" type=\"text\">\r\n                                            </td>\r\n                                            <td><a (click)=\"addItems()\" class=\"text-success font-18\" title=\"Add\"><i\r\n                                                        class=\"fa fa-plus\"></i></a></td>\r\n                                             <td *ngIf=\"i != 0\">\r\n                                                <a (click)=\"removeItems(i)\" class=\"text-danger font-18\" title=\"Remove\">\r\n                                                    <i class=\"fa fa-trash-o\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        \r\n                                    </tr>\r\n                                 \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-end\">Total</td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\"><input class=\"form-control text-end\"  readonly type=\"text\"\r\n                                            formControlName=\"totalamount\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" class=\"text-end\">Tax</td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\">\r\n                                            <input class=\"form-control text-end\" value=\"5%\" readonly type=\"text\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" class=\"text-end\">\r\n                                            Discount %\r\n                                        </td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\">\r\n                                            <input class=\"form-control text-end\" type=\"text\"[class.invalid]=\"editEstimateForm.get('discount').invalid && editEstimateForm.get('discount').touched\"\r\n                                            formControlName=\"discount\" (input)=\"changePrice(0)\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right; font-weight: bold\">\r\n                                            Grand Total\r\n                                        </td>\r\n                                        <td\r\n                                            style=\"text-align: right; padding-right: 30px; font-weight: bold; font-size: 16px;width: 230px\">\r\n                                            <input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"editEstimateForm.get('grandTotal').invalid && editEstimateForm.get('grandTotal').touched\"\r\n                                            formControlName=\"grandTotal\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Other Information</label>\r\n                                    <textarea class=\"form-control\" rows=\"4\"  [class.invalid]=\"editEstimateForm.get('other_information').invalid && editEstimateForm.get('other_information').touched\"\r\n                                    formControlName=\"other_information\"></textarea>\r\n                                    <div\r\n                                    *ngIf=\"editEstimateForm.get('other_information').invalid && editEstimateForm.get('other_information').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editEstimateForm.get('other_information').invalid && editEstimateForm.get('other_information').touched\"\r\n                                        class=\"text-danger\"> *Other information is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button *ngIf=\"!id\" class=\"btn btn-primary submit-btn m-r-10\" (click)=\"savesend()\">Save & Send</button>\r\n                    <button *ngIf=\"!id\" class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                     <button *ngIf=\"id\" class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 1200:
/*!********************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/estimates-view/estimates-view.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Estimates</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Estimates</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Print Section -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-auto float-end ms-auto\">\r\n                <div class=\"btn-group btn-group-sm\">\r\n                    <button class=\"btn btn-white\">CSV</button>\r\n                    <button class=\"btn btn-white\">PDF</button>\r\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Print Section -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <img src=\"assets/img/logo2.png\" class=\"inv-logo\" alt=\"\">\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>Dreamguy's Technologies</li>\r\n                                <li>3864 Quiet Valley Lane,</li>\r\n                                <li>Sherman Oaks, CA, 91403</li>\r\n                                <li>GST No:</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <div class=\"invoice-details\">\r\n                                <h3 class=\"text-uppercase\">Estimate #49029</h3>\r\n                                <ul class=\"list-unstyled\">\r\n                                    <li>Create Date: <span>March 12, 2019</span></li>\r\n                                    <li>Expiry date: <span>May 25, 2019</span></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-lg-12 m-b-20\">\r\n                            <h5>Estimate to:</h5>\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>\r\n                                    <h5><strong>Barry Cuda</strong></h5>\r\n                                </li>\r\n                                <li>Global Technologies</li>\r\n                                <li>5754 Airport Rd</li>\r\n                                <li>Coosada, AL, 36020</li>\r\n                                <li>United States</li>\r\n                                <li>888-777-6655</li>\r\n                                <li><a >barrycuda@example.com</a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"table table-striped table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>ITEM</th>\r\n                                <th class=\"d-none d-sm-table-cell\">DESCRIPTION</th>\r\n                                <th>UNIT COST</th>\r\n                                <th>QUANTITY</th>\r\n                                <th class=\"text-end\">TOTAL</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>Android Application</td>\r\n                                <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                    adipiscing elit</td>\r\n                                <td>$1000</td>\r\n                                <td>2</td>\r\n                                <td class=\"text-end\">$2000</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2</td>\r\n                                <td>Ios Application</td>\r\n                                <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                    adipiscing elit</td>\r\n                                <td>$1750</td>\r\n                                <td>1</td>\r\n                                <td class=\"text-end\">$1750</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3</td>\r\n                                <td>Codeigniter Project</td>\r\n                                <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                    adipiscing elit</td>\r\n                                <td>$90</td>\r\n                                <td>3</td>\r\n                                <td class=\"text-end\">$270</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Phonegap Project</td>\r\n                                <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                    adipiscing elit</td>\r\n                                <td>$1200</td>\r\n                                <td>2</td>\r\n                                <td class=\"text-end\">$2400</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>5</td>\r\n                                <td>Website Optimization</td>\r\n                                <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                    adipiscing elit</td>\r\n                                <td>$200</td>\r\n                                <td>2</td>\r\n                                <td class=\"text-end\">$400</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div>\r\n                        <div class=\"row invoice-payment\">\r\n                            <div class=\"col-sm-7\">\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <div class=\"m-b-20\">\r\n                                    <div class=\"table-responsive no-border\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <th>Subtotal:</th>\r\n                                                    <td class=\"text-end\">$7,000</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th>Tax: <span class=\"text-regular\">(25%)</span></th>\r\n                                                    <td class=\"text-end\">$1,750</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th>Total:</th>\r\n                                                    <td class=\"text-end text-primary\">\r\n                                                        <h5>$8,750</h5>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"invoice-info\">\r\n                            <h5>Other information</h5>\r\n                            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus\r\n                                sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim\r\n                                aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae\r\n                                lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem.\r\n                                Nullam finibus pellentesque libero, eu finibus sapien interdum vel</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 3616:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/estimates/estimates.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Estimates</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Estimates</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchFromDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchToDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"add-emp-section\">\r\n                <a routerLink=\"/layout/accounts/create-estimates\" class=\"btn btn-success btn-add-emp\"><i class=\"fas fa-plus\"></i> Add Estimate</a>\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <!-- Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Estimate Number</th>\r\n                            <th>Client</th>\r\n                            <th>Estimate Date</th>\r\n                            <th>Expiry Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let estimate of estimates\">\r\n                            <td><a routerLink=\"/layout/accounts/estimates-view\">{{estimate.number}}</a></td>\r\n                            <td>{{estimate.client}}</td>\r\n                            <td>{{estimate.estimate_date | customDate}}</td>\r\n                            <td>{{estimate.expiry_date | customDate}}</td>\r\n                            <td>{{estimate.grandTotal}}</td>\r\n                            <td>\r\n                                <span *ngIf=\"estimate.status === 'Accepted'\" class=\"role-info role-bg-one\">{{estimate.status}}</span>\r\n                                <span *ngIf=\"estimate.status === 'Decline'\" class=\"role-info role-bg-two\">{{estimate.status}}</span>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a routerLink=\"/layout/accounts/edit-estimates\" [queryParams]=\"{id: estimate.id}\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_estimate\" (click)=\"deleteEstimate(estimate)\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"estimates.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n\r\n<!-- Delete Estimate Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_estimate\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Estimate</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a (click)=\"delete()\"  class=\"btn btn-primary continue-btn\" data-bs-dismiss=\"modal\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Estimate Modal -->\r\n";

/***/ }),

/***/ 50717:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/expenses/expenses.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Expenses</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Expenses</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <div class=\"form-group form-focus\">\r\n                <input type=\"text\" class=\"form-control floating\" (input)=\"searchName($event.target.value)\" (focusout) = \"rerender()\">\r\n                <label class=\"focus-label\">Item Name</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\"> \r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"form-select form-control\" (input)=\"purchasedBy($event.target.value)\">\r\n                    <option value = \"\"> -- Select -- </option>\r\n                    <option value = \"Loren Gatlin\">Loren Gatlin</option>\r\n                    <option value = \"Tarah Shropshire\">Tarah Shropshire</option>\r\n                </select>\r\n                <label class=\"focus-label\">Purchased By</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker type=\"text\"  [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFrom($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByTo($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <a class=\"btn btn-success btn-add-emp w-100\" data-bs-toggle=\"modal\" data-bs-target=\"#add_expense\">Add Expense</a>\r\n        </div> \r\n    </div>\r\n    <!-- Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id = \"datatable\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Purchase From</th>\r\n                            <th>Purchase Date</th>\r\n                            <th>Purchased By</th>\r\n                            <th>Amount</th>\r\n                            <th>Paid By</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th class=\"text-end\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let expenses of allExpenses;let i = index\">\r\n                            <td>\r\n                                <strong>{{expenses.item}}</strong>\r\n                            </td>\r\n                            <td>{{expenses.purchaseFrom}}</td>\r\n                            <td>{{expenses.purchaseDate | customDate}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar avatar-xs\"><img\r\n                                            src= \"{{expenses.profileimg}}\" alt=\"\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{expenses.purchasedBy}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{expenses.amount}}</td>\r\n                            <td>{{expenses.paidby}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-one dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Pending\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\"> <i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Pending</a>\r\n                                        <a class=\"dropdown-item\"> <i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Approved</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_expense\" (click)=\"edit(expenses.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_expense\" (click)=\"tempId = expenses.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allExpenses.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Expense Modal -->\r\n<div id=\"add_expense\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Expense</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addExpenses()\" [formGroup]=\"addExpensesForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Item Name</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addExpensesForm.get('itemName').invalid && addExpensesForm.get('itemName').touched\"\r\n                                formControlName=\"itemName\">\r\n                                <div\r\n                                    *ngIf=\"addExpensesForm.get('itemName').invalid && addExpensesForm.get('itemName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addExpensesForm.get('itemName').invalid && addExpensesForm.get('itemName').touched\"\r\n                                        class=\"text-danger\"> *Item name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase From</label>\r\n                                <input class=\"form-control\"  [class.invalid]=\"addExpensesForm.get('purchaseFrom').invalid && addExpensesForm.get('purchaseFrom').touched\"\r\n                                formControlName=\"purchaseFrom\">\r\n                                <div\r\n                                    *ngIf=\"addExpensesForm.get('purchaseFrom').invalid && addExpensesForm.get('purchaseFrom').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addExpensesForm.get('purchaseFrom').invalid && addExpensesForm.get('purchaseFrom').touched\"\r\n                                        class=\"text-danger\"> *Purchase from is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase Date</label>\r\n                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                                    [class.invalid]=\"addExpensesForm.get('purchaseDate').invalid && addExpensesForm.get('purchaseDate').touched\"\r\n                                formControlName=\"purchaseDate\">\r\n                                <div\r\n                                    *ngIf=\"addExpensesForm.get('purchaseDate').invalid && addExpensesForm.get('purchaseDate').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addExpensesForm.get('purchaseDate').invalid && addExpensesForm.get('purchaseDate').touched\"\r\n                                        class=\"text-danger\"> *Purchase date is required</small>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchased By </label>\r\n                                <select class=\"form-select form-control\"\r\n                                [class.invalid]=\"addExpensesForm.get('purchasedBy').invalid && addExpensesForm.get('purchasedBy').touched\"\r\n                                formControlName=\"purchasedBy\">\r\n                                    <option>Loren Gatlin</option>\r\n                                    <option>Tarah Shropshire</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addExpensesForm.get('purchasedBy').invalid && addExpensesForm.get('purchasedBy').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addExpensesForm.get('purchasedBy').invalid && addExpensesForm.get('purchasedBy').touched\"\r\n                                        class=\"text-danger\"> *Purchased by is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Amount</label>\r\n                                <input placeholder=\"$50\" class=\"form-control\" type=\"text\"  [class.invalid]=\"addExpensesForm.get('amount').invalid && addExpensesForm.get('amount').touched\"\r\n                                formControlName=\"amount\">\r\n                                <div\r\n                                    *ngIf=\"addExpensesForm.get('amount').invalid && addExpensesForm.get('amount').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addExpensesForm.get('amount').invalid && addExpensesForm.get('amount').touched\"\r\n                                        class=\"text-danger\"> *Amount is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Paid By</label>\r\n                                <select class=\"form-select form-control\"\r\n                                [class.invalid]=\"addExpensesForm.get('paidBy').invalid && addExpensesForm.get('paidBy').touched\"\r\n                                formControlName=\"paidBy\">\r\n                                    <option>Cash</option>\r\n                                    <option>Cheque</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addExpensesForm.get('paidBy').invalid && addExpensesForm.get('paidBy').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addExpensesForm.get('paidBy').invalid && addExpensesForm.get('paidBy').touched\"\r\n                                        class=\"text-danger\"> *Paid is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option>Pending</option>\r\n                                    <option>Approved</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Attachments</label>\r\n                                <input class=\"form-control\" type=\"file\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"attach-files\">\r\n                        <ul>\r\n                            <li>\r\n                                <img src=\"assets/img/placeholder.jpg\" alt=\"\">\r\n                                <a class=\"fa fa-close file-remove\"></a>\r\n                            </li>\r\n                            <li>\r\n                                <img src=\"assets/img/placeholder.jpg\" alt=\"\">\r\n                                <a class=\"fa fa-close file-remove\"></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Expense Modal -->\r\n\r\n<!-- Edit Expense Modal -->\r\n<div id=\"edit_expense\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Expense</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editExpenses()\" [formGroup]=\"editExpensesForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Item Name</label>\r\n                                <input class=\"form-control\" value=\"Dell Laptop\" type=\"text\" [class.invalid]=\"editExpensesForm.get('itemName').invalid && editExpensesForm.get('itemName').touched\"\r\n                                formControlName=\"itemName\">\r\n                                <div\r\n                                    *ngIf=\"editExpensesForm.get('itemName').invalid && editExpensesForm.get('itemName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editExpensesForm.get('itemName').invalid && editExpensesForm.get('itemName').touched\"\r\n                                        class=\"text-danger\"> *Item name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase From</label>\r\n                                <input class=\"form-control\" value=\"Amazon\" [class.invalid]=\"editExpensesForm.get('purchaseFrom').invalid && editExpensesForm.get('purchaseFrom').touched\"\r\n                                formControlName=\"purchaseFrom\">\r\n                                <div\r\n                                    *ngIf=\"editExpensesForm.get('purchaseFrom').invalid && editExpensesForm.get('purchaseFrom').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editExpensesForm.get('purchaseFrom').invalid && editExpensesForm.get('purchaseFrom').touched\"\r\n                                        class=\"text-danger\"> *Purchase from is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchase Date</label>\r\n                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" [class.invalid]=\"editExpensesForm.get('purchaseDate').invalid && editExpensesForm.get('purchaseDate').touched\"\r\n                                    formControlName=\"purchaseDate\" (bsValueChange)=\"from($event)\">\r\n                                    <div\r\n                                    *ngIf=\"editExpensesForm.get('purchaseDate').invalid && editExpensesForm.get('purchaseDate').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editExpensesForm.get('purchaseDate').invalid && editExpensesForm.get('purchaseDate').touched\"\r\n                                        class=\"text-danger\"> *Purchase date is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Purchased By </label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"editExpensesForm.get('purchasedBy').invalid && editExpensesForm.get('purchasedBy').touched\"\r\n                                formControlName=\"purchasedBy\">\r\n                                    <option>Loren Gatlin</option>\r\n                                    <option>Tarah Shropshire</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editExpensesForm.get('purchasedBy').invalid && editExpensesForm.get('purchasedBy').touched\">\r\n                                <small\r\n                                    *ngIf=\"editExpensesForm.get('purchasedBy').invalid && editExpensesForm.get('purchasedBy').touched\"\r\n                                    class=\"text-danger\"> *Purchased by is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Amount</label>\r\n                                <input placeholder=\"$50\" class=\"form-control\" value=\"$10000\" type=\"text\"  [class.invalid]=\"editExpensesForm.get('amount').invalid && editExpensesForm.get('amount').touched\"\r\n                                formControlName=\"amount\">\r\n                                <div\r\n                                *ngIf=\"editExpensesForm.get('amount').invalid && editExpensesForm.get('amount').touched\">\r\n                                <small\r\n                                    *ngIf=\"editExpensesForm.get('amount').invalid && editExpensesForm.get('amount').touched\"\r\n                                    class=\"text-danger\"> *Amount is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Paid By</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"editExpensesForm.get('paidBy').invalid && editExpensesForm.get('paidBy').touched\"\r\n                                formControlName=\"paidBy\">\r\n                                    <option>Cash</option>\r\n                                    <option>Cheque</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editExpensesForm.get('paidBy').invalid && editExpensesForm.get('paidBy').touched\">\r\n                                <small\r\n                                    *ngIf=\"editExpensesForm.get('paidBy').invalid && editExpensesForm.get('paidBy').touched\"\r\n                                    class=\"text-danger\"> *Paid by is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option>Pending</option>\r\n                                    <option>Approved</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Attachments</label>\r\n                                <input class=\"form-control\" type=\"file\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"attach-files\">\r\n                        <ul>\r\n                            <li>\r\n                                <img src=\"assets/img/placeholder.jpg\" alt=\"\">\r\n                                <a class=\"fa fa-close file-remove\"></a>\r\n                            </li>\r\n                            <li>\r\n                                <img src=\"assets/img/placeholder.jpg\" alt=\"\">\r\n                                <a class=\"fa fa-close file-remove\"></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Expense Modal -->\r\n\r\n<!-- Delete Expense Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_expense\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Expense</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"  (click)=\"deleteTicket()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Delete Expense Modal -->";

/***/ }),

/***/ 16887:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/create-invoice/create-invoice.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3 *ngIf=\"!id\">Create Invoice</h3>\r\n                <h3 *ngIf=\"id\">Edit Invoice</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Create Invoice</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"addInvoiceForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"client\" [class.invalid]=\"addInvoiceForm.get('client').invalid && addInvoiceForm.get('client').touched\"\r\n                             formControlName=\"client\">\r\n                                <option>Please Select</option>\r\n                                <option >Barry Cuda</option>\r\n                                <option>Tressa Wexler</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"addInvoiceForm.get('client').invalid && addInvoiceForm.get('client').touched\">\r\n                            <small\r\n                                *ngIf=\"addInvoiceForm.get('client').invalid && addInvoiceForm.get('client').touched\"\r\n                                class=\"text-danger\"> *Client is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Project <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"Project\" [class.invalid]=\"addInvoiceForm.get('project').invalid && addInvoiceForm.get('project').touched\"\r\n                            formControlName=\"project\">\r\n                                <option>Select Project</option>\r\n                                <option>Office Management</option>\r\n                                <option>Project Management</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"addInvoiceForm.get('project').invalid && addInvoiceForm.get('project').touched\">\r\n                            <small\r\n                                *ngIf=\"addInvoiceForm.get('project').invalid && addInvoiceForm.get('project').touched\"\r\n                                class=\"text-danger\"> *Project is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" type=\"email\" name=\"email\" [class.invalid]=\"addInvoiceForm.get('email').invalid && addInvoiceForm.get('email').touched\"\r\n                            formControlName=\"email\">\r\n                            <div\r\n                            *ngIf=\"addInvoiceForm.get('email').invalid && addInvoiceForm.get('email').touched\">\r\n                            <small\r\n                                *ngIf=\"addInvoiceForm.get('email').invalid && addInvoiceForm.get('email').touched\"\r\n                                class=\"text-danger\"> *Email is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tax</label>\r\n                            <select class=\"form-select form-control\" name=\"tax\" [class.invalid]=\"addInvoiceForm.get('tax').invalid && addInvoiceForm.get('tax').touched\"\r\n                            formControlName=\"tax\">\r\n                                <option>Select Tax</option>\r\n                                <option>VAT</option>\r\n                                <option>GST</option>\r\n                                <option>No Tax</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"addInvoiceForm.get('tax').invalid && addInvoiceForm.get('tax').touched\">\r\n                            <small\r\n                                *ngIf=\"addInvoiceForm.get('tax').invalid && addInvoiceForm.get('tax').touched\"\r\n                                class=\"text-danger\"> *Tax is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"client_address\"[class.invalid]=\"addInvoiceForm.get('client_address').invalid && addInvoiceForm.get('client_address').touched\"\r\n                             formControlName=\"client_address\"></textarea>\r\n                             <div\r\n                             *ngIf=\"addInvoiceForm.get('client_address').invalid && addInvoiceForm.get('client_address').touched\">\r\n                             <small\r\n                                 *ngIf=\"addInvoiceForm.get('client_address').invalid && addInvoiceForm.get('client_address').touched\"\r\n                                 class=\"text-danger\"> *Client address is required</small>\r\n                         </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Billing Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" name=\"billing_address\" [class.invalid]=\"addInvoiceForm.get('billing_address').invalid && addInvoiceForm.get('billing_address').touched\"\r\n                             formControlName=\"billing_address\"></textarea>\r\n                             <div\r\n                             *ngIf=\"addInvoiceForm.get('billing_address').invalid && addInvoiceForm.get('billing_address').touched\">\r\n                             <small\r\n                                 *ngIf=\"addInvoiceForm.get('billing_address').invalid && addInvoiceForm.get('billing_address').touched\"\r\n                                 class=\"text-danger\"> *Billing address is required</small>\r\n                         </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Invoice date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" name=\"tax\"  [class.invalid]=\"addInvoiceForm.get('invoice_date').invalid && addInvoiceForm.get('invoice_date').touched\"\r\n                                bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"formControlName=\"invoice_date\">\r\n                                <div\r\n                                *ngIf=\"addInvoiceForm.get('invoice_date').invalid && addInvoiceForm.get('invoice_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"addInvoiceForm.get('invoice_date').invalid && addInvoiceForm.get('invoice_date').touched\"\r\n                                    class=\"text-danger\"> *Invoice date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Due Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" name=\"tax\" [class.invalid]=\"addInvoiceForm.get('due_date').invalid && addInvoiceForm.get('due_date').touched\"\r\n                                 bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"formControlName=\"due_date\">\r\n                                 <div\r\n                                 *ngIf=\"addInvoiceForm.get('due_date').invalid && addInvoiceForm.get('due_date').touched\">\r\n                                 <small\r\n                                     *ngIf=\"addInvoiceForm.get('due_date').invalid && addInvoiceForm.get('due_date').touched\"\r\n                                     class=\"text-danger\"> Due* date is required</small>\r\n                             </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20px\">#</th>\r\n                                        <th class=\"col-sm-2\">Item</th>\r\n                                        <th class=\"col-md-6\">Description</th>\r\n                                        <th style=\"width:100px;\">Unit Cost</th>\r\n                                        <th style=\"width:80px;\">Qty</th>\r\n                                        <th>Amount</th>\r\n                                        <th> </th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                  <tbody formArrayName=\"items\">\r\n\r\n                                    <tr *ngFor=\"let item of addInvoiceForm.get('items')['controls']; let i=index\" [formGroupName]=\"i\">\r\n                                        \r\n                                            <td>{{i+1}}</td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" name=\"item\" formControlName=\"item\" type=\"text\" style=\"min-width:150px\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"description\" type=\"text\" style=\"min-width:150px\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"unit_cost\" style=\"width:100px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"qty\" style=\"width:80px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input class=\"form-control\" formControlName=\"amount\" readonly style=\"width:120px\" type=\"text\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <a (click)=\"addItems()\" class=\"text-success font-18\" title=\"Add\">\r\n                                                    <i class=\"fa fa-plus\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                            <td *ngIf=\"i != 0\">\r\n                                                <a (click)=\"removeItems(i)\" class=\"text-danger font-18\" title=\"Remove\">\r\n                                                    <i class=\"fa fa-trash-o\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                    </tr>\r\n                                 \r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-end\">Total</td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\"><input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"addInvoiceForm.get('totalamount').invalid && addInvoiceForm.get('totalamount').touched\"\r\n                                            formControlName=\"totalamount\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" class=\"text-end\">Tax</td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\">\r\n                                            <input class=\"form-control text-end\" value=\"5%\" readonly type=\"text\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" class=\"text-end\">\r\n                                            Discount %\r\n                                        </td>\r\n                                        <td style=\"text-align: right; padding-right: 30px;width: 230px\">\r\n                                            <input class=\"form-control text-end\" type=\"text\" [class.invalid]=\"addInvoiceForm.get('discount').invalid && addInvoiceForm.get('discount').touched\"\r\n                                            formControlName=\"discount\" (input)=\"changePrice(0)\">\r\n                                            <div\r\n                                            *ngIf=\"addInvoiceForm.get('discount').invalid && addInvoiceForm.get('discount').touched\">\r\n                                            <small\r\n                                                *ngIf=\"addInvoiceForm.get('discount').invalid && addInvoiceForm.get('discount').touched\"\r\n                                                class=\"text-danger\"> *Discount is required</small>\r\n                                        </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right; font-weight: bold\">\r\n                                            Grand Total\r\n                                        </td>\r\n                                        <td\r\n                                        style=\"text-align: right; padding-right: 30px; font-weight: bold; font-size: 16px;width: 230px\">\r\n                                        <input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"addInvoiceForm.get('grandTotal').invalid && addInvoiceForm.get('grandTotal').touched\"\r\n                                        formControlName=\"grandTotal\">\r\n                                    </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Other Information</label>\r\n                                    <textarea class=\"form-control\" [class.invalid]=\"addInvoiceForm.get('other_information').invalid && addInvoiceForm.get('other_information').touched\"\r\n                                    formControlName=\"other_information\"></textarea>\r\n                                    <div\r\n                                    *ngIf=\"addInvoiceForm.get('other_information').invalid && addInvoiceForm.get('other_information').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addInvoiceForm.get('other_information').invalid && addInvoiceForm.get('other_information').touched\"\r\n                                        class=\"text-danger\"> *Other information is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\" *ngIf=\"!id\">\r\n                    <button class=\"btn btn-primary submit-btn m-r-10\" (click)=\"savesend()\">Save & Send</button>\r\n                    <button class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                </div>\r\n                <div class=\"submit-section\" *ngIf=\"id\">\r\n                    <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 4635:
/*!***************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/edit-invoice/edit-invoice.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Edit Invoice</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit Invoice</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <form  [formGroup]=\"editInvoiceForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"client\" [class.invalid]=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\"\r\n                            formControlName=\"client\">\r\n                                <option>Please Select</option>\r\n                                <option selected>Barry Cuda</option>\r\n                                <option>Tressa Wexler</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\"\r\n                                class=\"text-danger\"> *Client is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Project <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" [class.invalid]=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\"\r\n                            formControlName=\"project\">\r\n                                <option>Select Project</option>\r\n                                <option selected>Office Management</option>\r\n                                <option>Project Management</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\"\r\n                                class=\"text-danger\"> *Project is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" type=\"email\" name=\"email\" [class.invalid]=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\"\r\n                            formControlName=\"email\">\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\"\r\n                                class=\"text-danger\"> *Email is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tax</label>\r\n                            <select class=\"form-select form-control\" name=\"tax\" [class.invalid]=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\"\r\n                            formControlName=\"tax\">\r\n                                <option>Select Tax</option>\r\n                                <option>VAT</option>\r\n                                <option selected>GST</option>\r\n                                <option>No Tax</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\"\r\n                                class=\"text-danger\"> *Tax is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\"[class.invalid]=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\"\r\n                            formControlName=\"client_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\"\r\n                                class=\"text-danger\"> *Client address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Billing Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" [class.invalid]=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\"\r\n                            formControlName=\"billing_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\"\r\n                                class=\"text-danger\"> *Billing address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Invoice date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" [class.invalid]=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\"\r\n                                formControlName=\"invoice_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"(onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\"\r\n                                    class=\"text-danger\"> *Invoice date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Due Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" [class.invalid]=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\"\r\n                                formControlName=\"due_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\"\r\n                                    class=\"text-danger\"> *Due date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20px\">#</th>\r\n                                        <th class=\"col-sm-2\">Item</th>\r\n                                        <th class=\"col-md-6\">Description</th>\r\n                                        <th style=\"width:100px;\">Unit Cost</th>\r\n                                        <th style=\"width:80px;\">Qty</th>\r\n                                        <th>Amount</th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody formArrayName=\"items\">\r\n                                    <tr *ngFor=\"let item of editInvoiceForm.get('items')['controls']; let i=index\" [formGroupName]=\"i\">\r\n                                        \r\n                                        <td>{{i+1}}</td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" name=\"item\" formControlName=\"item\" type=\"text\" style=\"min-width:150px\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"description\" type=\"text\" style=\"min-width:150px\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"unit_cost\" style=\"width:100px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"qty\" style=\"width:80px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"amount\" readonly style=\"width:120px\" type=\"text\">\r\n                                        </td>\r\n                                        <td><a (click)=\"addItems()\" class=\"text-success font-18\" title=\"Add\"><i\r\n                                                    class=\"fa fa-plus\"></i></a></td>\r\n                                         <td *ngIf=\"i != 0\">\r\n                                            <a (click)=\"removeItems(i)\" class=\"text-danger font-18\" title=\"Remove\">\r\n                                                <i class=\"fa fa-trash-o\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    \r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-end\">Total</td>\r\n                                        <td style=\"text-align: right; width: 230px\"><input class=\"form-control text-end\"  readonly type=\"text\"\r\n                                            formControlName=\"totalamount\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right\">Tax</td>\r\n                                        <td style=\"text-align: right;width: 230px\">\r\n                                            <input class=\"form-control text-end\" value=\"5%\" readonly type=\"text\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right\">\r\n                                            Discount %\r\n                                        </td>\r\n                                        <td style=\"text-align: right; width: 230px\">\r\n                                            <input class=\"form-control text-end\" type=\"text\"[class.invalid]=\"editInvoiceForm.get('discount').invalid && editInvoiceForm.get('discount').touched\"\r\n                                            formControlName=\"discount\" (input)=\"changePrice(0)\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right; font-weight: bold\">\r\n                                            Grand Total\r\n                                        </td>\r\n                                        <td\r\n                                            style=\"text-align: right; padding-right: 30px; font-weight: bold; font-size: 16px;width: 230px\">\r\n                                            <input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"editInvoiceForm.get('grandTotal').invalid && editInvoiceForm.get('grandTotal').touched\"\r\n                                            formControlName=\"grandTotal\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Other Information</label>\r\n                                    <textarea class=\"form-control\" rows=\"4\" [class.invalid]=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\"\r\n                                    formControlName=\"other_information\"></textarea>\r\n                                    <div\r\n                                    *ngIf=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\"\r\n                                        class=\"text-danger\"> *Other information is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 84967:
/*!***************************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/invoice-view/invoice-view.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Invoice</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Invoice</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Print Section -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-auto float-end ms-auto\">\r\n                <div class=\"btn-group btn-group-sm\">\r\n                    <button class=\"btn btn-white\">CSV</button>\r\n                    <button class=\"btn btn-white\">PDF</button>\r\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Print Section -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <img src=\"assets/img/logo2.png\" class=\"inv-logo\" alt=\"\">\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>Dreamguy's Technologies</li>\r\n                                <li>3864 Quiet Valley Lane,</li>\r\n                                <li>Sherman Oaks, CA, 91403</li>\r\n                                <li>GST No:</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <div class=\"invoice-details\">\r\n                                <h3 class=\"text-uppercase\">Invoice #INV-0001</h3>\r\n                                <ul class=\"list-unstyled\">\r\n                                    <li>Date: <span>March 12, 2019</span></li>\r\n                                    <li>Due date: <span>April 25, 2019</span></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 col-lg-7 col-xl-8 m-b-20\">\r\n                            <h5>Invoice to:</h5>\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>\r\n                                    <h5><strong>Barry Cuda</strong></h5>\r\n                                </li>\r\n                                <li><span>Global Technologies</span></li>\r\n                                <li>5754 Airport Rd</li>\r\n                                <li>Coosada, AL, 36020</li>\r\n                                <li>United States</li>\r\n                                <li>888-777-6655</li>\r\n                                <li><a>barrycuda@example.com</a></li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-sm-6 col-lg-5 col-xl-4 m-b-20\">\r\n                            <span class=\"text-muted\">Payment Details:</span>\r\n                            <ul class=\"list-unstyled invoice-payment-details\">\r\n                                <li>\r\n                                    <h5>Total Due: <span class=\"text-end\">$8,750</span></h5>\r\n                                </li>\r\n                                <li>Bank name: <span>Profit Bank Europe</span></li>\r\n                                <li>Country: <span>United Kingdom</span></li>\r\n                                <li>City: <span>London E1 8BF</span></li>\r\n                                <li>Address: <span>3 Goodman Street</span></li>\r\n                                <li>IBAN: <span>KFH37784028476740</span></li>\r\n                                <li>SWIFT code: <span>BPT4E</span></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped table-hover\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>ITEM</th>\r\n                                    <th class=\"d-none d-sm-table-cell\">DESCRIPTION</th>\r\n                                    <th>UNIT COST</th>\r\n                                    <th>QUANTITY</th>\r\n                                    <th class=\"text-end\">TOTAL</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>1</td>\r\n                                    <td>Android Application</td>\r\n                                    <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                        adipiscing elit</td>\r\n                                    <td>$1000</td>\r\n                                    <td>2</td>\r\n                                    <td class=\"text-end\">$2000</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>2</td>\r\n                                    <td>Ios Application</td>\r\n                                    <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                        adipiscing elit</td>\r\n                                    <td>$1750</td>\r\n                                    <td>1</td>\r\n                                    <td class=\"text-end\">$1750</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>3</td>\r\n                                    <td>Codeigniter Project</td>\r\n                                    <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                        adipiscing elit</td>\r\n                                    <td>$90</td>\r\n                                    <td>3</td>\r\n                                    <td class=\"text-end\">$270</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>4</td>\r\n                                    <td>Phonegap Project</td>\r\n                                    <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                        adipiscing elit</td>\r\n                                    <td>$1200</td>\r\n                                    <td>2</td>\r\n                                    <td class=\"text-end\">$2400</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>5</td>\r\n                                    <td>Website Optimization</td>\r\n                                    <td class=\"d-none d-sm-table-cell\">Lorem ipsum dolor sit amet, consectetur\r\n                                        adipiscing elit</td>\r\n                                    <td>$200</td>\r\n                                    <td>2</td>\r\n                                    <td class=\"text-end\">$400</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"row invoice-payment\">\r\n                            <div class=\"col-sm-7\">\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <div class=\"m-b-20\">\r\n                                    <div class=\"table-responsive no-border\">\r\n                                        <table class=\"table mb-0\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <th>Subtotal:</th>\r\n                                                    <td class=\"text-end\">$7,000</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th>Tax: <span class=\"text-regular\">(25%)</span></th>\r\n                                                    <td class=\"text-end\">$1,750</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th>Total:</th>\r\n                                                    <td class=\"text-end text-primary\">\r\n                                                        <h5>$8,750</h5>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"invoice-info\">\r\n                            <h5>Other information</h5>\r\n                            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed\r\n                                dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut\r\n                                a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem\r\n                                interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam\r\n                                finibus pellentesque libero, eu finibus sapien interdum vel</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 73162:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/invoices/invoices.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Invoices</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Invoices</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\"  type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchFromDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchToDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"add-emp-section\">\r\n                <a routerLink=\"/layout/accounts/create-invoice\" class=\"btn btn-success btn-add-emp\"><i class=\"fas fa-plus\"></i> Add Invoice</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Invoice Number</th>\r\n                            <th>Client</th>\r\n                            <th>Created Date</th>\r\n                            <th>Due Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let invoice of invoices;let i=index;\">\r\n                            <td>{{i+1}}</td>\r\n                            <td><a routerLink=\"/layout/accounts/invoice-view\">{{invoice.number}}</a></td>\r\n                            <td>{{invoice.client}}</td>\r\n                            <td>{{invoice.invoice_date | customDate}}</td>\r\n                            <td>{{invoice.due_date | customDate}}</td>\r\n                            <td>{{invoice.grandTotal}}</td>\r\n                            <td class=\"text-center\">\r\n                                <span *ngIf=\"invoice.status ==='Paid'\" class=\"role-info role-bg-one\">{{invoice.status}}</span>\r\n                                <span *ngIf=\"invoice.status ==='Partially Paid'\" class=\"role-info role-bg-three\">{{invoice.status}}</span>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a routerLink=\"/layout/accounts/edit-invoice\" [queryParams]=\"{id: invoice.id}\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a routerLink=\"/layout/accounts/edit-invoice\" [queryParams]=\"{id: invoice.id}\"><i class=\"fas fa-eye\"></i></a>\r\n                                <a><i class=\"fas fa-download\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" (click)=\"deleteInvoice(invoice)\" data-bs-target=\"#delete_estimate\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"invoices.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Delete Estimate Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_estimate\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Invoice</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a (click)=\"delete()\"  class=\"btn btn-primary continue-btn\" data-bs-dismiss=\"modal\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Estimate Modal -->";

/***/ }),

/***/ 43875:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/accounts/payments/payments.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Payments</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Payments</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table datatable mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Invoice ID</th>\r\n                            <th>Client</th>\r\n                            <th>Payment Type</th>\r\n                            <th>Paid Date</th>\r\n                            <th>Paid Amount</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let payments of allPayments;let i = index\">\r\n                            <td><a routerLink=\"/layout/accounts/invoice-view\">{{payments.invoiceId}}</a></td>\r\n                            <td>\r\n                                <h2><a>{{payments.client}}</a></h2>\r\n                            </td>\r\n                            <td>{{payments.paymenttype}}</td>\r\n                            <td>{{payments.paidDate}}</td>\r\n                            <td>{{payments.paidAmount}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allPayments.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 53098:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/accounts/provident-fund/provident-fund.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Provident Fund</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Provident Fund</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_pf\"><i class=\"fas fa-plus\"></i> Add Provident Fund</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table datatable mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Employee Name</th>\r\n                            <th>Provident Fund Type</th>\r\n                            <th>Employee Share</th>\r\n                            <th>Organization Share</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let provident of allProvidentfund;let i = index\">\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"{{provident.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{provident.employeeName}}<span>Web\r\n                                            Designer</span></a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{provident.providentFundType}}</td>\r\n                            <td>{{provident.employeeShare}}</td>\r\n                            <td>{{provident.organizationShare}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-one dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Pending\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Pending</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Approved</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_pf\" (click)=\"edit(provident.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_pf\" (click)=\"tempId = provident.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add PF Modal -->\r\n<div id=\"add_pf\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Provident Fund</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addProvident()\" [formGroup]=\"addProvidentfund\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee Name</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addProvidentfund.get('employeeName').invalid && addProvidentfund.get('employeeName').touched\"\r\n                                    formControlName=\"employeeName\">\r\n                                    <option value=\"John Doe\">John Doe </option>\r\n                                    <option value=\"Richard Miles\">Richard Miles</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addProvidentfund.get('employeeName').invalid && addProvidentfund.get('employeeName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addProvidentfund.get('employeeName').invalid && addProvidentfund.get('employeeName').touched\"\r\n                                        class=\"text-danger\"> *Employee name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Provident Fund Type</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addProvidentfund.get('providentType').invalid && addProvidentfund.get('providentType').touched\"\r\n                                    formControlName=\"providentType\">\r\n                                    <option value=\"Fixed Amount\" selected=\"\">Fixed Amount</option>\r\n                                    <option value=\"Percentage of Basic Salary\">Percentage of Basic Salary</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addProvidentfund.get('providentType').invalid && addProvidentfund.get('providentType').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addProvidentfund.get('providentType').invalid && addProvidentfund.get('providentType').touched\"\r\n                                        class=\"text-danger\"> *Provident fund type is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"show-fixed-amount\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Employee Share (Amount)</label>\r\n                                            <input class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Organization Share (Amount)</label>\r\n                                            <input class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"show-basic-salary\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Employee Share (%)</label>\r\n                                            <input class=\"form-control\" type=\"text\"\r\n                                                [class.invalid]=\"addProvidentfund.get('employeeShare').invalid && addProvidentfund.get('employeeShare').touched\"\r\n                                                formControlName=\"employeeShare\">\r\n                                            <div\r\n                                                *ngIf=\"addProvidentfund.get('employeeShare').invalid && addProvidentfund.get('employeeShare').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"addProvidentfund.get('employeeShare').invalid && addProvidentfund.get('employeeShare').touched\"\r\n                                                    class=\"text-danger\"> *Employee share is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Organization Share (%)</label>\r\n                                            <input class=\"form-control\" type=\"text\"\r\n                                                [class.invalid]=\"addProvidentfund.get('organisationShare').invalid && addProvidentfund.get('organisationShare').touched\"\r\n                                                formControlName=\"organisationShare\">\r\n                                            <div\r\n                                                *ngIf=\"addProvidentfund.get('organisationShare').invalid && addProvidentfund.get('organisationShare').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"addProvidentfund.get('organisationShare').invalid && addProvidentfund.get('organisationShare').touched\"\r\n                                                    class=\"text-danger\"> *Organisation share is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\" rows=\"4\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add PF Modal -->\r\n\r\n<!-- Edit PF Modal -->\r\n<div id=\"edit_pf\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Provident Fund</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editProvident()\" [formGroup]=\"editProvidentForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee Name</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editProvidentForm.get('employeeName').invalid && editProvidentForm.get('employeeName').touched\"\r\n                                    formControlName=\"employeeName\">\r\n                                    <option value=\"John Doe\">John Doe </option>\r\n                                    <option value=\"Richard Miles\">Richard Miles </option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editProvidentForm.get('employeeName').invalid && editProvidentForm.get('employeeName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editProvidentForm.get('employeeName').invalid && editProvidentForm.get('employeeName').touched\"\r\n                                        class=\"text-danger\"> *Employee name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Provident Fund Type</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editProvidentForm.get('providentType').invalid && editProvidentForm.get('providentType').touched\"\r\n                                    formControlName=\"providentType\">\r\n                                    <option value=\"Fixed Amount\" selected=\"\">Fixed Amount</option>\r\n                                    <option value=\"Percentage of Basic Salary\">Percentage of Basic Salary</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editProvidentForm.get('providentType').invalid && editProvidentForm.get('providentType').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editProvidentForm.get('providentType').invalid && editProvidentForm.get('providentType').touched\"\r\n                                        class=\"text-danger\"> *Provident fund type is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"show-fixed-amount\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Employee Share (Amount)</label>\r\n                                            <input class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Organization Share (Amount)</label>\r\n                                            <input class=\"form-control\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"show-basic-salary\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Employee Share (%)</label>\r\n                                            <input class=\"form-control\" type=\"text\" value=\"2%\"\r\n                                                [class.invalid]=\"editProvidentForm.get('employeeShare').invalid && editProvidentForm.get('employeeShare').touched\"\r\n                                                formControlName=\"employeeShare\">\r\n                                            <div\r\n                                                *ngIf=\"editProvidentForm.get('employeeShare').invalid && editProvidentForm.get('employeeShare').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"editProvidentForm.get('employeeShare').invalid && editProvidentForm.get('employeeShare').touched\"\r\n                                                    class=\"text-danger\"> *Employee share is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Organization Share (%)</label>\r\n                                            <input class=\"form-control\" type=\"text\" value=\"2%\"\r\n                                                [class.invalid]=\"editProvidentForm.get('organisationShare').invalid && editProvidentForm.get('organisationShare').touched\"\r\n                                                formControlName=\"organisationShare\">\r\n                                            <div\r\n                                                *ngIf=\"editProvidentForm.get('organisationShare').invalid && editProvidentForm.get('organisationShare').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"editProvidentForm.get('organisationShare').invalid && editProvidentForm.get('organisationShare').touched\"\r\n                                                    class=\"text-danger\"> *Organisation share is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\" rows=\"4\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit PF Modal -->\r\n\r\n<!-- Delete PF Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_pf\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Provident Fund</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteProvident()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete PF Modal -->";

/***/ }),

/***/ 72628:
/*!****************************************************************************!*\
  !*** ./src/app/all-modules/accounts/taxes/taxes.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Taxes</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Taxes</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-md-8\"></div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_tax\"><i class=\"fas fa-plus\"></i> Add Tax</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Tax Name </th>\r\n                            <th>Tax Percentage (%) </th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let taxes of allTaxes;let i = index\">\r\n                            <td>{{ i + 1}}</td>\r\n                            <td>{{taxes.taxName}}</td>\r\n                            <td>{{taxes.taxPercentage}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-one dropdown-toggle\"\r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_tax\" (click)=\"edit(taxes.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_tax\" (click)=\"tempId = taxes.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Tax Modal -->\r\n<div id=\"add_tax\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Tax</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addTaxSubmit()\" [formGroup]=\"addTaxes\">\r\n                    <div class=\"form-group\">\r\n                        <label>Tax Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"addTaxes.get('taxName').invalid && addTaxes.get('taxName').touched\"\r\n                        formControlName=\"taxName\">\r\n                        <div\r\n                        *ngIf=\"addTaxes.get('taxName').invalid && addTaxes.get('taxName').touched\">\r\n                        <small\r\n                            *ngIf=\"addTaxes.get('taxName').invalid && addTaxes.get('taxName').touched\"\r\n                            class=\"text-danger\"> *Tax name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Tax Percentage (%) <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"addTaxes.get('taxpercentage').invalid && addTaxes.get('taxpercentage').touched\"\r\n                        formControlName=\"taxpercentage\">\r\n                        <div\r\n                        *ngIf=\"addTaxes.get('taxpercentage').invalid && addTaxes.get('taxpercentage').touched\">\r\n                        <small\r\n                            *ngIf=\"addTaxes.get('taxpercentage').invalid && addTaxes.get('taxpercentage').touched\"\r\n                            class=\"text-danger\"> *Tax percentage is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Status <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\">\r\n                            <option>Pending</option>\r\n                            <option>Approved</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Tax Modal -->\r\n\r\n<!-- Edit Tax Modal -->\r\n<div id=\"edit_tax\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Tax</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editTaxSubmit()\" [formGroup]=\"editTaxForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Tax Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editTaxForm.get('editTaxName').invalid && editTaxForm.get('editTaxName').touched\"\r\n                        formControlName=\"editTaxName\" >\r\n                        <div\r\n                                    *ngIf=\"editTaxForm.get('editTaxName').invalid && editTaxForm.get('editTaxName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTaxForm.get('editTaxName').invalid && editTaxForm.get('editTaxName').touched\"\r\n                                        class=\"text-danger\"> *Tax name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Tax Percentage (%) <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"editTaxForm.get('editTaxPercentage').invalid && editTaxForm.get('editTaxPercentage').touched\"\r\n                        formControlName=\"editTaxPercentage\">\r\n                        <div\r\n                        *ngIf=\"editTaxForm.get('editTaxPercentage').invalid && editTaxForm.get('editTaxPercentage').touched\">\r\n                        <small\r\n                            *ngIf=\"editTaxForm.get('editTaxPercentage').invalid && editTaxForm.get('editTaxPercentage').touched\"\r\n                            class=\"text-danger\"> *Tax percentage is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Status <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\">\r\n                            <option>Active</option>\r\n                            <option>Inactive</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Tax Modal -->\r\n\r\n<!-- Delete Tax Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_tax\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Tax</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"  (click)=\"deleteTaxes()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Tax Modal -->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_accounts_accounts_module_ts.js.map