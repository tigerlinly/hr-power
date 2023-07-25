"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_reports_reports_module_ts"],{

/***/ 15487:
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/reports/edit-invoice-report/edit-invoice-report.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInvoiceReportComponent": () => (/* binding */ EditInvoiceReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_invoice_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-invoice-report.component.html?ngResource */ 86964);
/* harmony import */ var _edit_invoice_report_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-invoice-report.component.css?ngResource */ 34056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);









let EditInvoiceReportComponent = class EditInvoiceReportComponent {
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
        this.allModulesService.get("invoiceReport").subscribe((res) => {
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
                id: this.id,
                discount: this.editInvoiceForm.value.discount,
                grandTotal: this.editInvoiceForm.value.grandTotal,
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
            this.allModulesService.update(obj, "invoiceReport").subscribe((res) => {
                this.router.navigate(["/layout/reports/invoice-report"]);
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
EditInvoiceReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
EditInvoiceReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-edit-invoice-report",
        template: _edit_invoice_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_invoice_report_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditInvoiceReportComponent);



/***/ }),

/***/ 87815:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/reports/expense-report/expense-report.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseReportComponent": () => (/* binding */ ExpenseReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _expense_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense-report.component.html?ngResource */ 65971);
/* harmony import */ var _expense_report_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense-report.component.css?ngResource */ 39417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);








let ExpenseReportComponent = class ExpenseReportComponent {
    constructor(allModuleService) {
        this.allModuleService = allModuleService;
        this.dtOptions = {};
        this.url = "expenseReport";
        this.allExpensesReport = [];
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
    }
    ngOnInit() {
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        this.getExpensesReport();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    getExpensesReport() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allExpensesReport = data;
            this.dtTrigger.next();
            this.rows = this.allExpensesReport;
            this.srch = [...this.rows];
        });
    }
    //search by status
    searchStatus(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.purchasedBy.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by purchase
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
    //search by warranty
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
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ExpenseReportComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
ExpenseReportComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ExpenseReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-expense-report",
        template: _expense_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expense_report_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpenseReportComponent);



/***/ }),

/***/ 67203:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/reports/invoice-report/invoice-report.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceReportComponent": () => (/* binding */ InvoiceReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invoice_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-report.component.html?ngResource */ 6118);
/* harmony import */ var _invoice_report_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-report.component.css?ngResource */ 45924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/all-modules/all-modules.service */ 78376);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);









let InvoiceReportComponent = class InvoiceReportComponent {
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
        this.allModulesService.get("invoiceReport").subscribe((res) => {
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
        this.allModulesService.delete(id, "invoiceReport").subscribe((res) => {
            this.router.navigate(["/layout/reports/edit-invoice-report"]);
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
            return d.client.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
InvoiceReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_all_modules_all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
InvoiceReportComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
InvoiceReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-invoice-report",
        template: _invoice_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invoice_report_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvoiceReportComponent);



/***/ }),

/***/ 16602:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/reports/reports-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsRoutingModule": () => (/* binding */ ReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.component */ 15372);
/* harmony import */ var _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense-report/expense-report.component */ 87815);
/* harmony import */ var _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-report/invoice-report.component */ 67203);
/* harmony import */ var _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-invoice-report/edit-invoice-report.component */ 15487);







const routes = [
    {
        path: "",
        component: _reports_component__WEBPACK_IMPORTED_MODULE_0__.ReportsComponent,
        children: [
            {
                path: "expense-report",
                component: _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_1__.ExpenseReportComponent
            },
            {
                path: "invoice-report",
                component: _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceReportComponent
            },
            {
                path: "edit-invoice-report",
                component: _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_3__.EditInvoiceReportComponent
            }
        ]
    }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], ReportsRoutingModule);



/***/ }),

/***/ 15372:
/*!**********************************************************!*\
  !*** ./src/app/all-modules/reports/reports.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsComponent": () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.component.html?ngResource */ 66617);
/* harmony import */ var _reports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component.css?ngResource */ 64064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ReportsComponent = class ReportsComponent {
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
ReportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
ReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-reports',
        template: _reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], ReportsComponent);



/***/ }),

/***/ 28862:
/*!*******************************************************!*\
  !*** ./src/app/all-modules/reports/reports.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 16602);
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component */ 15372);
/* harmony import */ var _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense-report/expense-report.component */ 87815);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-report/invoice-report.component */ 67203);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-invoice-report/edit-invoice-report.component */ 15487);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);












let ReportsModule = class ReportsModule {
};
ReportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_1__.ReportsComponent, _expense_report_expense_report_component__WEBPACK_IMPORTED_MODULE_2__.ExpenseReportComponent, _invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_4__.InvoiceReportComponent, _edit_invoice_report_edit_invoice_report_component__WEBPACK_IMPORTED_MODULE_6__.EditInvoiceReportComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule.forRoot(),
        ]
    })
], ReportsModule);



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

/***/ 34056:
/*!******************************************************************************************************!*\
  !*** ./src/app/all-modules/reports/edit-invoice-report/edit-invoice-report.component.css?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWludm9pY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 39417:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/reports/expense-report/expense-report.component.css?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 45924:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/reports/invoice-report/invoice-report.component.css?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 64064:
/*!**********************************************************************!*\
  !*** ./src/app/all-modules/reports/reports.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 86964:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/reports/edit-invoice-report/edit-invoice-report.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3 class=\"page-title\">Edit Invoice</h3>\r\n                <ul class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                    <li class=\"breadcrumb-item active\">Edit Invoice</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <form  [formGroup]=\"editInvoiceForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" name=\"client\" [class.invalid]=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\"\r\n                            formControlName=\"client\">\r\n                                <option>Please Select</option>\r\n                                <option>Global Technologies</option>\r\n                                <option>Delta Infotech</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('client').invalid && editInvoiceForm.get('client').touched\"\r\n                                class=\"text-danger\"> *Client is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Project <span class=\"text-danger\">*</span></label>\r\n                            <select class=\"form-select form-control\" [class.invalid]=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\"\r\n                            formControlName=\"project\">\r\n                                <option>Select Project</option>\r\n                                <option selected>Office Management</option>\r\n                                <option>Project Management</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('project').invalid && editInvoiceForm.get('project').touched\"\r\n                                class=\"text-danger\"> *Project is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" type=\"email\" name=\"email\" [class.invalid]=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\"\r\n                            formControlName=\"email\">\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('email').invalid && editInvoiceForm.get('email').touched\"\r\n                                class=\"text-danger\"> *Email is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Tax</label>\r\n                            <select class=\"form-select form-control\" name=\"tax\" [class.invalid]=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\"\r\n                            formControlName=\"tax\">\r\n                                <option>Select Tax</option>\r\n                                <option>VAT</option>\r\n                                <option selected>GST</option>\r\n                                <option>No Tax</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('tax').invalid && editInvoiceForm.get('tax').touched\"\r\n                                class=\"text-danger\"> *Tax is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Client Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\"[class.invalid]=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\"\r\n                            formControlName=\"client_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('client_address').invalid && editInvoiceForm.get('client_address').touched\"\r\n                                class=\"text-danger\"> *Client address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Billing Address</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" [class.invalid]=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\"\r\n                            formControlName=\"billing_address\"></textarea>\r\n                            <div\r\n                            *ngIf=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\">\r\n                            <small\r\n                                *ngIf=\"editInvoiceForm.get('billing_address').invalid && editInvoiceForm.get('billing_address').touched\"\r\n                                class=\"text-danger\"> *Billing address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Invoice date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" [class.invalid]=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\"\r\n                                formControlName=\"invoice_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"(onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editInvoiceForm.get('invoice_date').invalid && editInvoiceForm.get('invoice_date').touched\"\r\n                                    class=\"text-danger\"> *Invoice date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Due Date <span class=\"text-danger\">*</span></label>\r\n                            <div class=\"cal-icon\">\r\n                                <input class=\"form-control datetimepicker\" type=\"text\" [class.invalid]=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\"\r\n                                formControlName=\"due_date\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (onChange) = \"selected(true)\">\r\n                                <div\r\n                                *ngIf=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\">\r\n                                <small\r\n                                    *ngIf=\"editInvoiceForm.get('due_date').invalid && editInvoiceForm.get('due_date').touched\"\r\n                                    class=\"text-danger\"> *Due date is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style=\"width: 20px\">#</th>\r\n                                        <th class=\"col-sm-2\">Item</th>\r\n                                        <th class=\"col-md-6\">Description</th>\r\n                                        <th style=\"width:100px;\">Unit Cost</th>\r\n                                        <th style=\"width:80px;\">Qty</th>\r\n                                        <th>Amount</th>\r\n                                        <th></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody formArrayName=\"items\">\r\n                                    <tr *ngFor=\"let item of editInvoiceForm.get('items')['controls']; let i=index\" [formGroupName]=\"i\">\r\n                                        \r\n                                        <td>{{i+1}}</td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" name=\"item\" formControlName=\"item\" type=\"text\" style=\"min-width:150px\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"description\" type=\"text\" style=\"min-width:150px\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"unit_cost\" style=\"width:100px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"qty\" style=\"width:80px\" type=\"text\" (input)=\"changePrice(i)\">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input class=\"form-control\" formControlName=\"amount\" readonly style=\"width:120px\" type=\"text\">\r\n                                        </td>\r\n                                        <td><a (click)=\"addItems()\" class=\"text-success font-18\" title=\"Add\"><i\r\n                                                    class=\"fa fa-plus\"></i></a></td>\r\n                                         <td *ngIf=\"i != 0\">\r\n                                            <a (click)=\"removeItems(i)\" class=\"text-danger font-18\" title=\"Remove\">\r\n                                                <i class=\"fa fa-trash-o\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    \r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover table-white\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td></td>\r\n                                        <td class=\"text-end\">Total</td>\r\n                                        <td style=\"text-align: right; width: 230px\"><input class=\"form-control text-end\"  readonly type=\"text\"\r\n                                            formControlName=\"totalamount\"></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right\">Tax</td>\r\n                                        <td style=\"text-align: right;width: 230px\">\r\n                                            <input class=\"form-control text-end\" value=\"5%\" readonly type=\"text\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right\">\r\n                                            Discount %\r\n                                        </td>\r\n                                        <td style=\"text-align: right; width: 230px\">\r\n                                            <input class=\"form-control text-end\" type=\"text\"[class.invalid]=\"editInvoiceForm.get('discount').invalid && editInvoiceForm.get('discount').touched\"\r\n                                            formControlName=\"discount\" (input)=\"changePrice(0)\">\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"5\" style=\"text-align: right; font-weight: bold\">\r\n                                            Grand Total\r\n                                        </td>\r\n                                        <td\r\n                                            style=\"text-align: right; padding-right: 30px; font-weight: bold; font-size: 16px;width: 230px\">\r\n                                            <input class=\"form-control text-end\"  readonly type=\"text\" [class.invalid]=\"editInvoiceForm.get('grandTotal').invalid && editInvoiceForm.get('grandTotal').touched\"\r\n                                            formControlName=\"grandTotal\">\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Other Information</label>\r\n                                    <textarea class=\"form-control\" rows=\"4\" [class.invalid]=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\"\r\n                                    formControlName=\"other_information\"></textarea>\r\n                                    <div\r\n                                    *ngIf=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editInvoiceForm.get('other_information').invalid && editInvoiceForm.get('other_information').touched\"\r\n                                        class=\"text-danger\"> *Other information is required</small>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\" (click)=\"savesend()\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n";

/***/ }),

/***/ 65971:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/reports/expense-report/expense-report.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Expense Report</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Expense Report</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\"> \r\n            <div class=\"form-group form-focus select-focus mb-0\">\r\n                <select class=\"form-select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option value = \"\">Select buyer</option>\r\n                    <option value = \"Loren Gatlin\">Loren Gatlin</option>\r\n                    <option value = \"Tarah Shropshire\">Tarah Shropshire</option>\r\n                </select>\r\n                <label class=\"focus-label\">Purchased By</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused mb-0\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFrom($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused mb-0\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"  [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByTo($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n    </div>\r\n    <!-- Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Item</th>\r\n                            <th>Purchase From</th>\r\n                            <th>Purchase Date</th>\r\n                            <th>Purchased By</th>\r\n                            <th>Amount</th>\r\n                            <th>Paid By</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th class=\"text-end\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let expensesReport of allExpensesReport;let i = index\">\r\n                            <td>\r\n                                <strong>{{expensesReport.item}}</strong>\r\n                            </td>\r\n                            <td>{{expensesReport.purchaseFrom}}</td>\r\n                            <td>{{expensesReport.purchaseDate | customDate}}</td>\r\n                            <td>\r\n                                <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar avatar-xs\">\r\n                                    <img src=\"{{expensesReport.profileimg}}\" alt=\"\">\r\n                                </a>\r\n                                <h2><a routerLink=\"/layout/employees/employeeprofile\">{{expensesReport.purchasedBy}}</a></h2>\r\n                            </td>\r\n                            <td>{{expensesReport.amount}}</td>\r\n                            <td>{{expensesReport.paidBy}}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-one dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> Pending\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" ><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Pending</a>\r\n                                        <a class=\"dropdown-item\" ><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Approved</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_leave\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_approve\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allExpensesReport.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 6118:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/reports/invoice-report/invoice-report.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Invoice Report</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Invoice Report</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n    \r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        <div class=\"col-sm-6 col-md-3\"> \r\n            <div class=\"form-group form-focus select-focus mb-0\">\r\n                <select class=\"form-select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option  value = \"\">Select Client</option>\r\n                    <option  value = \"Global Technologies\">Global Technologies</option>\r\n                    <option  value = \"Delta Infotech\">Delta Infotech</option>\r\n                </select>\r\n                <label class=\"focus-label\">Client</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus mb-0\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchFromDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus mb-0\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchToDate($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>     \r\n    </div>\r\n    <!-- /Search Filter -->\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Invoice Number</th>\r\n                            <th>Client</th>\r\n                            <th>Created Date</th>\r\n                            <th>Due Date</th>\r\n                            <th>Amount</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let invoice of invoices;let i=index;\">\r\n                            <td>{{i+1}}</td>\r\n                            <td><a routerLink=\"/layout/accounts/invoice-view\">{{invoice.number}}</a></td>\r\n                            <td>{{invoice.client}}</td>\r\n                            <td>{{invoice.invoice_date | customDate}}</td>\r\n                            <td>{{invoice.due_date | customDate}}</td>\r\n                            <td>{{invoice.grandTotal}}</td>\r\n                            <td class=\"text-center\">\r\n                                <span *ngIf=\"invoice.status === 'paid'\" class=\"role-info role-bg-one\">{{invoice.status}}</span>\r\n                                <span *ngIf=\"invoice.status === 'Pending'\" class=\"role-info role-bg-two\">{{invoice.status}}</span>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\" routerLink=\"/layout/reports/edit-invoice-report\" [queryParams]=\"{id: invoice.id}\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" routerLink=\"/layout/reports/edit-invoice-report\" [queryParams]=\"{id: invoice.id}\"><i class=\"fas fa-eye\"></i></a>\r\n                                <a class=\"dropdown-item\"><i class=\"fas fa-download\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" (click)=\"deleteInvoice(invoice)\" data-bs-target=\"#delete_estimate\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"invoices.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 66617:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/reports/reports.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_reports_reports_module_ts.js.map