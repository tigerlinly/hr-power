"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_paymentreports_paymentreports_module_ts"],{

/***/ 72410:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports-list/paymentreports-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentreportsListComponent": () => (/* binding */ PaymentreportsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _paymentreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentreports-list.component.html?ngResource */ 85864);
/* harmony import */ var _paymentreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentreports-list.component.css?ngResource */ 69091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);








let PaymentreportsListComponent = class PaymentreportsListComponent {
    constructor(srvModuleService) {
        this.srvModuleService = srvModuleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.url = "paymentreports";
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        this.loadFees();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
    }
    // Get Fees List  Api Call
    loadFees() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstFees = data;
            this.dtTrigger.next();
        });
    }
    // destroy data table when leaving
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
PaymentreportsListComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_3__.AllModulesService }
];
PaymentreportsListComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, { static: true },] }]
};
PaymentreportsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-paymentreports-list',
        template: _paymentreports_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_paymentreports_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentreportsListComponent);



/***/ }),

/***/ 16818:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentreportsRoutingModule": () => (/* binding */ PaymentreportsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _paymentreports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentreports.component */ 39920);
/* harmony import */ var _paymentreports_list_paymentreports_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentreports-list/paymentreports-list.component */ 72410);





const routes = [
    {
        path: "",
        component: _paymentreports_component__WEBPACK_IMPORTED_MODULE_0__.PaymentreportsComponent,
        children: [
            {
                path: "payments-reports",
                component: _paymentreports_list_paymentreports_list_component__WEBPACK_IMPORTED_MODULE_1__.PaymentreportsListComponent
            }
        ]
    }
];
let PaymentreportsRoutingModule = class PaymentreportsRoutingModule {
};
PaymentreportsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PaymentreportsRoutingModule);



/***/ }),

/***/ 39920:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentreportsComponent": () => (/* binding */ PaymentreportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _paymentreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentreports.component.html?ngResource */ 51516);
/* harmony import */ var _paymentreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentreports.component.css?ngResource */ 87433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PaymentreportsComponent = class PaymentreportsComponent {
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
PaymentreportsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
PaymentreportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-paymentreports',
        template: _paymentreports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_paymentreports_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], PaymentreportsComponent);



/***/ }),

/***/ 17402:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentreportsModule": () => (/* binding */ PaymentreportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _paymentreports_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentreports-routing.module */ 16818);
/* harmony import */ var _paymentreports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentreports.component */ 39920);
/* harmony import */ var _paymentreports_list_paymentreports_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentreports-list/paymentreports-list.component */ 72410);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/picklist */ 34785);










let PaymentreportsModule = class PaymentreportsModule {
};
PaymentreportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_paymentreports_component__WEBPACK_IMPORTED_MODULE_2__.PaymentreportsComponent, _paymentreports_list_paymentreports_list_component__WEBPACK_IMPORTED_MODULE_3__.PaymentreportsListComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _paymentreports_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaymentreportsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_9__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], PaymentreportsModule);



/***/ }),

/***/ 69091:
/*!*************************************************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports-list/paymentreports-list.component.css?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cmVwb3J0cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 87433:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports.component.css?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 85864:
/*!**************************************************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports-list/paymentreports-list.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">\r\n    <!-- Page Content -->\r\n    <div class=\"content container-fluid\">\r\n    \r\n        <!-- Page Header -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"page-head-box\">\r\n                    <h3>Payments Report</h3>\r\n                    <nav aria-label=\"breadcrumb\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Payments Report</li>\r\n                        </ol>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n        \r\n        <!-- Search Filter -->\r\n        <div class=\"row filter-row\">\r\n            \r\n            <div class=\"col-sm-6 col-md-4\">  \r\n                <div class=\"form-group form-focus mb-0\">\r\n                    <div class=\"cal-icon\">\r\n                        <input class=\"form-control floating datetimepicker\" type=\"text\"  bsDatepicker>\r\n                    </div>\r\n                    <label class=\"focus-label\">From</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-4\">  \r\n                <div class=\"form-group form-focus mb-0\">\r\n                    <div class=\"cal-icon\">\r\n                        <input class=\"form-control floating datetimepicker\" type=\"text\" bsDatepicker>\r\n                    </div>\r\n                    <label class=\"focus-label\">To</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-4\">  \r\n                <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n            </div>     \r\n        </div>\r\n        <!-- /Search Filter -->\r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table mb-0 datatable\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>Transaction ID</th>\r\n                                <th>Date</th>\r\n                                <th>Client Name</th>\r\n                                <th>Payment Method</th>\r\n                                <th>Invoice</th>\r\n                                <th class=\"text-center\">Amount</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let fees of lstFees;let i = index\">\r\n                                <td>{{fees.id}}</td>\r\n                                <td><a>{{fees.transactionid}}</a></td>\r\n                                <td>{{fees.date}}</td>\r\n                                <td>{{fees.clientname}}</td>\r\n                                <td>{{fees.paymentmethod}}</td>\r\n                                <td><a>{{fees.invoice}}</a></td>\r\n                                <td class=\"text-center\">{{fees.amount}}</td>\r\n                            </tr>\r\n                            \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Content -->\r\n    \r\n    \r\n</div>\r\n<!-- /Page Wrapper -->\r\n\r\n";

/***/ }),

/***/ 51516:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/paymentreports/paymentreports.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_paymentreports_paymentreports_module_ts.js.map