"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_dashboard_dashboard_module_ts"],{

/***/ 80861:
/*!************************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardComponent": () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard.component.html?ngResource */ 31413);
/* harmony import */ var _admin_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard.component.css?ngResource */ 9035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AdminDashboardComponent = class AdminDashboardComponent {
    constructor() {
        this.barColors = {
            a: "#ff9b44",
            b: "#fc6075",
        };
        this.lineColors = {
            a: "#ff9b44",
            b: "#fc6075",
        };
        this.radialBarChartOptions = {
            series: [70],
            chart: {
                height: 300,
                type: 'radialBar',
                dropShadow: {
                    enabled: true,
                    blur: 2,
                    color: '#000',
                    opacity: 0.25
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%',
                    }
                },
            },
            fill: {
                opacity: 1.5,
                colors: ['#FF7849', '#FF7849'],
                type: 'gradient',
                gradient: {
                    gradientToColors: ['#FF7849', '#FF7849'],
                    shadeIntensity: 1,
                    opacityFrom: 1,
                    opacityTo: 2,
                    stops: [0, 50, 100],
                    inverseColors: false
                },
            },
            labels: ['Completed task'],
        };
        this.newTicketChartOptions = {
            series: [{
                    name: 'series1',
                    color: '#4a7feb',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }],
            chart: {
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                show: false
            }
        };
        this.solvedTicketChartOptions = {
            series: [{
                    name: 'series1',
                    color: '#ff7849',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }],
            chart: {
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                show: false
            }
        };
        this.openTicketChartOptions = {
            series: [{
                    name: 'series1',
                    color: '#ff0000',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }],
            chart: {
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                show: false
            }
        };
        this.pendingTicketChartOptions = {
            series: [{
                    name: 'series1',
                    color: '#4fad4c',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }],
            chart: {
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                show: false
            }
        };
    }
    ngOnInit() {
        this.chartOptions = {
            xkey: "y",
            ykeys: ["a", "b"],
            labels: ["Total Income", "Total Outcome"],
            barColors: [this.barColors.a, this.barColors.b],
        };
        this.chartData = [
            { y: "2006", a: 100, b: 90 },
            { y: "2007", a: 75, b: 65 },
            { y: "2008", a: 50, b: 40 },
            { y: "2009", a: 75, b: 65 },
            { y: "2010", a: 50, b: 40 },
            { y: "2011", a: 75, b: 65 },
            { y: "2012", a: 100, b: 90 },
        ];
        this.lineOption = {
            xkey: "y",
            ykeys: ["a", "b"],
            labels: ["Total Sales", "Total Revenue"],
            resize: true,
            lineColors: [this.lineColors.a, this.lineColors.b],
        };
        this.lineData = [
            { y: '2006', a: 50, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 50 }
        ];
    }
};
AdminDashboardComponent.ctorParameters = () => [];
AdminDashboardComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["newTicketChart",] }],
    solvedchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["solvedTicketChart",] }],
    openchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["openTicketChart",] }],
    pendingchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["pendingTicketChart",] }],
    radialBarchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["radialBarChart",] }]
};
AdminDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-admin-dashboard",
        template: _admin_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminDashboardComponent);



/***/ }),

/***/ 87671:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 53232);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 80861);
/* harmony import */ var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-dashboard/employee-dashboard.component */ 86755);






const routes = [
    {
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            { path: "admin", component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardComponent },
            { path: "employee", component: _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeDashboardComponent },
        ],
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], DashboardRoutingModule);



/***/ }),

/***/ 53232:
/*!**************************************************************!*\
  !*** ./src/app/all-modules/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 16870);
/* harmony import */ var _dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css?ngResource */ 18087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);





let DashboardComponent = class DashboardComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.innerHeight = window.innerHeight + "px";
            });
        };
        this.getScreenHeight();
    }
    getScreenHeight() {
        this.innerHeight = window.innerHeight + "px";
    }
    ngOnInit() {
        this.router.navigateByUrl("/layout/dashboard/admin");
    }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + "px";
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-dashboard",
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)("window: resize", ["$event"])
], DashboardComponent);



/***/ }),

/***/ 19626:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 87671);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 53232);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 80861);
/* harmony import */ var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-dashboard/employee-dashboard.component */ 86755);
/* harmony import */ var angular_morris_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-morris-js */ 71619);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 33142);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ 59304);










let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent, _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeDashboardComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            angular_morris_js__WEBPACK_IMPORTED_MODULE_4__.MorrisJsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__.TooltipModule.forRoot()
        ]
    })
], DashboardModule);



/***/ }),

/***/ 86755:
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/employee-dashboard/employee-dashboard.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDashboardComponent": () => (/* binding */ EmployeeDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _employee_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-dashboard.component.html?ngResource */ 74272);
/* harmony import */ var _employee_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-dashboard.component.css?ngResource */ 79469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let EmployeeDashboardComponent = class EmployeeDashboardComponent {
    constructor() {
        this.radialBarChartOptions = {
            series: [70],
            chart: {
                height: 300,
                type: 'radialBar',
                dropShadow: {
                    enabled: true,
                    blur: 2,
                    color: '#000',
                    opacity: 0.25
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '60%',
                    }
                },
            },
            fill: {
                opacity: 1.5,
                colors: ['#FF7849', '#FF7849'],
                type: 'gradient',
                gradient: {
                    gradientToColors: ['#FF7849', '#FF7849'],
                    shadeIntensity: 1,
                    opacityFrom: 1,
                    opacityTo: 2,
                    stops: [0, 50, 100],
                    inverseColors: false
                },
            },
            labels: ['Completed task'],
        };
    }
    ngOnInit() {
    }
};
EmployeeDashboardComponent.ctorParameters = () => [];
EmployeeDashboardComponent.propDecorators = {
    radialBarchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["radialBarChart",] }]
};
EmployeeDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-employee-dashboard',
        template: _employee_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeeDashboardComponent);



/***/ }),

/***/ 9035:
/*!************************************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/admin-dashboard/admin-dashboard.component.css?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 18087:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/dashboard.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 79469:
/*!******************************************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/employee-dashboard/employee-dashboard.component.css?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 31413:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/admin-dashboard/admin-dashboard.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid pb-0\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Welcome Admin!</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Job Dashboard</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"text-center w-100 p-3\">\r\n                        <h3 class=\"bl-text mb-1\">112</h3>\r\n                        <h2>Projects</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"text-center w-100 p-3\">\r\n                        <h3 class=\"bl-text mb-1\">44</h3>\r\n                        <h2>Clients</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"text-center w-100 p-3\">\r\n                        <h3 class=\"bl-text mb-1\">37</h3>\r\n                        <h2>Tasks</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-lg-6 col-xl-3\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"text-center w-100 p-3\">\r\n                        <h3 class=\"bl-text mb-1\">218</h3>\r\n                        <h2>Employees</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">Total Revenue</h3>\r\n                            <div mk-morris-js [options]=\"chartOptions\" [data]=\"chartData\" type=\"Bar\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">Sales Overview</h3>\r\n                            <div mk-morris-js [options]=\"lineOption\" [data]=\"lineData\" type=\"Line\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>New Employees</h2>\r\n                        <h3 class=\"bl-text\">112</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"newTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"newTicketChartOptions.series\"\r\n                        [chart]=\"newTicketChartOptions.chart\"\r\n                        [xaxis]=\"newTicketChartOptions.xaxis\"\r\n                        [stroke]=\"newTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"newTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"newTicketChartOptions.yaxis\"\r\n                        [labels]=\"newTicketChartOptions.labels\"\r\n                        [legend]=\"newTicketChartOptions.legend\"\r\n                        [title]=\"newTicketChartOptions.title\"\r\n                        [subtitle]=\"newTicketChartOptions.subtitle\"\r\n                    ></apx-chart> \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>Earnings</h2>\r\n                        <h3 class=\"org-text\">$1,42,300</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"solvedTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"solvedTicketChartOptions.series\"\r\n                        [chart]=\"solvedTicketChartOptions.chart\"\r\n                        [xaxis]=\"solvedTicketChartOptions.xaxis\"\r\n                        [stroke]=\"solvedTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"solvedTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"solvedTicketChartOptions.yaxis\"\r\n                        [labels]=\"solvedTicketChartOptions.labels\"\r\n                        [legend]=\"solvedTicketChartOptions.legend\"\r\n                        [title]=\"solvedTicketChartOptions.title\"\r\n                        [subtitle]=\"solvedTicketChartOptions.subtitle\"\r\n                    ></apx-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>Expenses</h2>\r\n                        <h3 class=\"red-text\">$8,500</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"openTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"openTicketChartOptions.series\"\r\n                        [chart]=\"openTicketChartOptions.chart\"\r\n                        [xaxis]=\"openTicketChartOptions.xaxis\"\r\n                        [stroke]=\"openTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"openTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"openTicketChartOptions.yaxis\"\r\n                        [labels]=\"openTicketChartOptions.labels\"\r\n                        [legend]=\"openTicketChartOptions.legend\"\r\n                        [title]=\"openTicketChartOptions.title\"\r\n                        [subtitle]=\"openTicketChartOptions.subtitle\"\r\n                    ></apx-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>Profit</h2>\r\n                        <h3 class=\"grn-text\">$1,12,000</h3>\r\n                    </div>\r\n                    <h6 class=\"red-text\">-10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"pendingTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"pendingTicketChartOptions.series\"\r\n                        [chart]=\"pendingTicketChartOptions.chart\"\r\n                        [xaxis]=\"pendingTicketChartOptions.xaxis\"\r\n                        [stroke]=\"pendingTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"pendingTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"pendingTicketChartOptions.yaxis\"\r\n                        [labels]=\"pendingTicketChartOptions.labels\"\r\n                        [legend]=\"pendingTicketChartOptions.legend\"\r\n                        [title]=\"pendingTicketChartOptions.title\"\r\n                        [subtitle]=\"pendingTicketChartOptions.subtitle\"\r\n                    ></apx-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  \r\n    <!-- Statistics Widget -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12 col-xl-5 d-flex\">\r\n            <div class=\"card project-card flex-fill\">\r\n                <h4>Statistics</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card st-card st-c1\">\r\n                            <div class=\"stats-info\">\r\n                                <div class=\"text-start\">\r\n                                    <p>Today</p>\r\n                                    <h5>3.45 / 8 hrs</h5>\r\n                                </div>\r\n                                \r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 31%\" aria-valuenow=\"31\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card st-card st-c2\">\r\n                            <div class=\"stats-info\">\r\n                                <div class=\"text-start\">\r\n                                    <p>This Week</p>\r\n                                    <h5>3.45 / 8 hrs</h5>\r\n                                </div>\r\n                                \r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 47%\" aria-valuenow=\"47\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card st-card st-c3\">\r\n                            <div class=\"stats-info\">\r\n                                <div class=\"text-start\">\r\n                                    <p>This Month</p>\r\n                                    <h5>3.45 / 8 hrs</h5>\r\n                                </div>\r\n                                \r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 87%\" aria-valuenow=\"87\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"card st-card st-c4\">\r\n                            <div class=\"stats-info\">\r\n                                <div class=\"text-start\">\r\n                                    <p>Remaining</p>\r\n                                    <h5>3.45 / 8 hrs</h5>\r\n                                </div>\r\n                                \r\n                                <div class=\"progress\">\r\n                                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 87%\" aria-valuenow=\"87\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-12 col-xl-7 d-flex\">\r\n            <div class=\"card project-card flex-fill\">\r\n                <h4>Projects</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 d-flex align-items-center justify-content-center\">\r\n                        <div id=\"radialBarChart\">\r\n                            <apx-chart\r\n                                [series]=\"radialBarChartOptions.series\"\r\n                                [chart]=\"radialBarChartOptions.chart\"\r\n                                [plotOptions]=\"radialBarChartOptions.plotOptions\"\r\n                                [labels]=\"radialBarChartOptions.labels\"\r\n                                [fill]=\"radialBarChartOptions.fill\"\r\n                            ></apx-chart>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <div class=\"task-box color-one\">\r\n                                    <div class=\"task-media\">\r\n                                        <div class=\"task-icon\">\r\n                                            <img src=\"assets/img/icons/icon-01.png\" alt=\"Icons\">\r\n                                        </div>\r\n                                        <div class=\"task-info\">\r\n                                            <h5>Pending Tasks</h5>\r\n                                            <h2>55</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"task-redirect\">\r\n                                        <div class=\"redirect-icon\">\r\n                                            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <div class=\"task-box color-two\">\r\n                                    <div class=\"task-media\">\r\n                                        <div class=\"task-icon\">\r\n                                            <img src=\"assets/img/icons/icon-02.png\" alt=\"Icons\">\r\n                                        </div>\r\n                                        <div class=\"task-info\">\r\n                                            <h5>Completed Tasks</h5>\r\n                                            <h2>55</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"task-redirect\">\r\n                                        <div class=\"redirect-icon\">\r\n                                            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n                                        </div>\t\t\t\t\t\t\t\t\t\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"task-box color-three\">\r\n                                    <div class=\"task-media\">\r\n                                        <div class=\"task-icon\">\r\n                                            <img src=\"assets/img/icons/icon-03.png\" alt=\"Icons\">\r\n                                        </div>\r\n                                        <div class=\"task-info\">\r\n                                            <h5>Total Projects</h5>\r\n                                            <h2>55</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"task-redirect\">\r\n                                        <div class=\"redirect-icon\">\r\n                                            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Statistics Widget -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Invoices</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-nowrap custom-table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Invoice ID</th>\r\n                                    <th>Client</th>\r\n                                    <th>Due Date</th>\r\n                                    <th>Total</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/layout/accounts/invoice-view\">#INV-0001</a></td>\r\n                                    <td>\r\n                                        <h2><a>Global Technologies</a></h2>\r\n                                    </td>\r\n                                    <td>11 Mar 2019</td>\r\n                                    <td>$380</td>\r\n                                    <td>\r\n                                        <span class=\"badge bg-inverse-warning\">Partially Paid</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/layout/accounts/invoice-view\">#INV-0002</a></td>\r\n                                    <td>\r\n                                        <h2><a>Delta Infotech</a></h2>\r\n                                    </td>\r\n                                    <td>8 Feb 2019</td>\r\n                                    <td>$500</td>\r\n                                    <td>\r\n                                        <span class=\"badge bg-inverse-success\">Paid</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/layout/accounts/invoice-view\">#INV-0003</a></td>\r\n                                    <td>\r\n                                        <h2><a>Cream Inc</a></h2>\r\n                                    </td>\r\n                                    <td>23 Jan 2019</td>\r\n                                    <td>$60</td>\r\n                                    <td>\r\n                                        <span class=\"badge bg-inverse-danger\">Unpaid</span>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/layout/invoice/invoicelist\">View all invoices</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Payments</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table custom-table table-nowrap mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Invoice ID</th>\r\n                                    <th>Client</th>\r\n                                    <th>Payment Type</th>\r\n                                    <th>Paid Date</th>\r\n                                    <th>Paid Amount</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/layout/accounts/invoice-view\">#INV-0001</a></td>\r\n                                    <td>\r\n                                        <h2><a>Global Technologies</a></h2>\r\n                                    </td>\r\n                                    <td>Paypal</td>\r\n                                    <td>11 Mar 2019</td>\r\n                                    <td>$380</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/layout/accounts/invoice-view\">#INV-0002</a></td>\r\n                                    <td>\r\n                                        <h2><a>Delta Infotech</a></h2>\r\n                                    </td>\r\n                                    <td>Paypal</td>\r\n                                    <td>8 Feb 2019</td>\r\n                                    <td>$500</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><a routerLink=\"/layout/accounts/invoice-view\">#INV-0003</a></td>\r\n                                    <td>\r\n                                        <h2><a>Cream Inc</a></h2>\r\n                                    </td>\r\n                                    <td>Paypal</td>\r\n                                    <td>23 Jan 2019</td>\r\n                                    <td>$60</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/layout/payment/paymentllist\">View all payments</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Clients</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table custom-table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Email</th>\r\n                                    <th>Status</th>\r\n                                    <th class=\"text-end\">Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-19.jpg\"></a>\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\">Barry Cuda <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>barrycuda@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-success\"></i> Active\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-19.jpg\"></a>\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\">Tressa Wexler\r\n                                                <span>Manager</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>tressawexler@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-07.jpg\"></a>\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\">Ruby Bartlett\r\n                                                <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>rubybartlett@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-06.jpg\"></a>\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\"> Misty Tison <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>mistytison@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-success\"></i> Active\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2 class=\"table-avatar\">\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                                    src=\"assets/img/profiles/avatar-14.jpg\"></a>\r\n                                            <a routerLink=\"/layout/employees/employeeprofile\"> Daniel Deacon\r\n                                                <span>CEO</span></a>\r\n                                        </h2>\r\n                                    </td>\r\n                                    <td>danieldeacon@example.com</td>\r\n                                    <td>\r\n                                        <div class=\"dropdown action-label\">\r\n                                            <a class=\"btn btn-white btn-sm btn-rounded dropdown-toggle\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                                <i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive\r\n                                            </a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                                                    Active</a>\r\n                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                                    Inactive</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/layout/clients/clientspage\">View all clients</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 d-flex\">\r\n            <div class=\"card card-table flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"card-title mb-0\">Recent Projects</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table custom-table mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Project Name </th>\r\n                                    <th>Progress</th>\r\n                                    <th class=\"text-end\">Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/layout/projects/projectview\">Office Management</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>1</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>9</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" tooltip=\"65%\" style=\"width: 65%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/layout/projects/projectview\">Project Management</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>2</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>5</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" tooltip=\"15%\" style=\"width: 15%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/layout/projects/projectview\">Video Calling App</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>3</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>3</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" tooltip=\"49%\" style=\"width: 49%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/layout/projects/projectview\">Hospital Administration</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>12</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>4</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" tooltip=\"88%\" style=\"width: 88%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h2><a routerLink=\"/layout/projects/projectview\">Digital Marketplace</a></h2>\r\n                                        <small class=\"block text-ellipsis\">\r\n                                            <span>7</span> <span class=\"text-muted\">open tasks, </span>\r\n                                            <span>14</span> <span class=\"text-muted\">tasks completed</span>\r\n                                        </small>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"progress progress-xs progress-striped\">\r\n                                            <div class=\"progress-bar\" role=\"progressbar\" tooltip=\"100%\" style=\"width: 100%\"></div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td class=\"text-end\">\r\n                                        <div class=\"dropdown dropdown-action\">\r\n                                            <a class=\"action-icon dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                                aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-pencil m-r-5\"></i> Edit</a>\r\n                                                <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i\r\n                                                        class=\"fa fa-trash-o m-r-5\"></i> Delete</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <a routerLink=\"/layout/projects/projectpage\">View all projects</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n";

/***/ }),

/***/ 16870:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/dashboard.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->";

/***/ }),

/***/ 74272:
/*!*******************************************************************************************************!*\
  !*** ./src/app/all-modules/dashboard/employee-dashboard/employee-dashboard.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid pb-0\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Dashboard</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Employee Dashboard</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12 col-xl-3 d-flex\">\r\n            <div class=\"card user-card flex-fill\">\r\n                <div class=\"user-img-sec\">\r\n                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User Image\">\r\n                    <h4>John Doe</h4>\r\n                    <h5>Sr.UI / UX Designer</h5>\r\n\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <i class=\"fas fa-ellipsis-v\"></i>\r\n                        </button>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <a class=\"dropdown-item\">Action</a>\r\n                            <a class=\"dropdown-item\">Another action</a>\r\n                            <a class=\"dropdown-item\">Something else here</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4>Joining Date <span>20 May 2020</span></h4>\r\n                    <h4>Experience <span>20 years</span></h4>\r\n                    <h4>Employee Number <span>645658</span></h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-8 col-xl-6 d-flex\">\r\n            <div class=\"card project-card flex-fill\">\r\n                <h4><i class=\"fas fa-cube\"></i> Projects</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 d-flex align-items-center\">\r\n                        <div id=\"radialBarChart\">\r\n                            <apx-chart\r\n                                [series]=\"radialBarChartOptions.series\"\r\n                                [chart]=\"radialBarChartOptions.chart\"\r\n                                [plotOptions]=\"radialBarChartOptions.plotOptions\"\r\n                                [labels]=\"radialBarChartOptions.labels\"\r\n                                [fill]=\"radialBarChartOptions.fill\"\r\n                            ></apx-chart>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <div class=\"task-box color-one\">\r\n                                    <div class=\"task-media\">\r\n                                        <div class=\"task-icon\">\r\n                                            <img src=\"assets/img/icons/icon-01.png\" alt=\"Icons\">\r\n                                        </div>\r\n                                        <div class=\"task-info\">\r\n                                            <h5>Pending Tasks</h5>\r\n                                            <h2>55</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"task-redirect\">\r\n                                        <div class=\"redirect-icon\">\r\n                                            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12 mb-3\">\r\n                                <div class=\"task-box color-two\">\r\n                                    <div class=\"task-media\">\r\n                                        <div class=\"task-icon\">\r\n                                            <img src=\"assets/img/icons/icon-02.png\" alt=\"Icons\">\r\n                                        </div>\r\n                                        <div class=\"task-info\">\r\n                                            <h5>Completed Tasks</h5>\r\n                                            <h2>55</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"task-redirect\">\r\n                                        <div class=\"redirect-icon\">\r\n                                            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n                                        </div>\t\t\t\t\t\t\t\t\t\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"task-box color-three\">\r\n                                    <div class=\"task-media\">\r\n                                        <div class=\"task-icon\">\r\n                                            <img src=\"assets/img/icons/icon-03.png\" alt=\"Icons\">\r\n                                        </div>\r\n                                        <div class=\"task-info\">\r\n                                            <h5>Total Projects</h5>\r\n                                            <h2>55</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"task-redirect\">\r\n                                        <div class=\"redirect-icon\">\r\n                                            <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-4 col-xl-3 d-flex\">\r\n            <div class=\"card project-card flex-fill\">\r\n                <h4><i class=\"fab fa-dropbox\"></i> Recent Projects</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 first-box\">\r\n                        <div class=\"recent-project-box\">\r\n                            <div class=\"circle\">\r\n                                <i class=\"far fa-image\"></i>\r\n                            </div>\r\n                            <h3>DreamsHRMS</h3>\r\n                        </div>\r\n\r\n                        <div class=\"task-progress\">\r\n                            <h4>Task Done 50/96</h4>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar w-75\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"task-avatar mt-2\">\r\n                            <div class=\"avatar-group\">\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"avatar-img rounded-circle border border-white\" alt=\"User Image\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                </div>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"avatar-img rounded-circle border border-white\" alt=\"User Image\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                </div>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"avatar-img rounded-circle border border-white\" alt=\"User Image\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                </div>\r\n                            </div>\r\n                            <a>View More</a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"recent-project-box\">\r\n                            <div class=\"circle\">\r\n                                <i class=\"far fa-image\"></i>\r\n                            </div>\r\n                            <h3>Booking template</h3>\r\n                        </div>\r\n\r\n                        <div class=\"task-progress\">\r\n                            <h4>Task Done 50/96</h4>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar w-75\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"task-avatar mt-2\">\r\n                            <div class=\"avatar-group\">\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"avatar-img rounded-circle border border-white\" alt=\"User Image\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                </div>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"avatar-img rounded-circle border border-white\" alt=\"User Image\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                </div>\r\n                                <div class=\"avatar\">\r\n                                    <img class=\"avatar-img rounded-circle border border-white\" alt=\"User Image\" src=\"assets/img/profiles/avatar-02.jpg\">\r\n                                </div>\r\n                            </div>\r\n                            <a>View More</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-4 d-flex\">\r\n            <div class=\"card att-card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3><i class=\"fas fa-user-clock\"></i> Attendance</h3>\r\n                    <h4>10:40 AM  Jan 2 2021</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form>\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Add a note\">\r\n                            <button class=\"btn btn-outline-secondary\" type=\"button\">Check in</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-4 d-flex\">\r\n            <div class=\"card att-card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3><i class=\"fas fa-user-times\"></i> Your Leave</h3>\r\n                    <a href=\"javascript:void(0);\">Apply Leave</a>\r\n                </div>\r\n                <div class=\"card-body leave-ln\">\r\n                    <ul>\r\n                        <li>\r\n                            <h3>25</h3>\r\n                            <h4>Total Leaves</h4>\r\n                        </li>\r\n                        <li>\r\n                            <h3>5</h3>\r\n                            <h4>Remaining Leaves</h4>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 col-lg-4 d-flex\">\r\n            <div class=\"card att-card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3><i class=\"fas fa-clock\"></i> Time of allowance</h3>\r\n                    <a href=\"javascript:void(0);\">Apply Time off</a>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ul>\r\n                        <li>\r\n                            <h3>5.0 Hours</h3>\r\n                            <h4>APPROVED</h4>\r\n                        </li>\r\n                        <li>\r\n                            <h3>3 hours</h3>\r\n                            <h4>REMAINING</h4>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12 col-xl-5 d-flex\">\r\n            <div class=\"card att-card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3><i class=\"fas fa-calendar-alt\"></i> Schedule</h3>\r\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                        <li class=\"nav-item\" role=\"presentation\">\r\n                              <a class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Today</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" role=\"presentation\">\r\n                              <a class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Tomorow</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" role=\"presentation\">\r\n                              <a class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Next 7 Days</a>\r\n                        </li>\r\n                    </ul>\r\n                      \r\n                </div>\r\n                <div class=\"card-body pt-0 pb-0\">\r\n                    <div class=\"tab-content p-0\" id=\"myTabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                            <ul class=\"leave-list\">\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User\">\r\n                                    <p>Richard Miles is off sick today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User\">\r\n                                    <p>You are away today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User\">\r\n                                    <p>You are working from home today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User\">\r\n                                    <p>Richard Miles is off sick today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User\">\r\n                                    <p>You are away today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"User\">\r\n                                    <p>You are working from home today</p>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                            <ul class=\"leave-list\">\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"User\">\r\n                                    <p>Richard Miles is off sick today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"User\">\r\n                                    <p>You are away today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"User\">\r\n                                    <p>You are working from home today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"User\">\r\n                                    <p>Richard Miles is off sick today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"User\">\r\n                                    <p>You are away today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-03.jpg\" alt=\"User\">\r\n                                    <p>You are working from home today</p>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                            <ul class=\"leave-list\">\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                    <p>Richard Miles is off sick today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                    <p>You are away today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                    <p>You are working from home today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                    <p>Richard Miles is off sick today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                    <p>You are away today</p>\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                    <p>You are working from home today</p>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-6 col-xl-3 d-flex\">\r\n            <div class=\"card att-card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h3><i class=\"fas fa-birthday-cake\"></i> Birthdays</h3>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <i class=\"fas fa-ellipsis-v\"></i>\r\n                        </button>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <a class=\"dropdown-item\">Action</a>\r\n                            <a class=\"dropdown-item\">Another action</a>\r\n                            <a class=\"dropdown-item\">Something else here</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body pt-0 pb-0\">\r\n                    <ul class=\"leave-list bday-list\">\r\n                        <li>\r\n                            <div class=\"wish-info\">\r\n                                <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                <p>Joh Doe</p>\r\n                            </div>\r\n                            <a class=\"wish-btn\">Wish Now</a>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"wish-info\">\r\n                                <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                <p>Nick Harry</p>\r\n                            </div>\r\n                            <a>Jan 20</a>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"wish-info\">\r\n                                <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                <p>Juliene</p>\r\n                            </div>\r\n                            <a>Jan 20</a>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"wish-info\">\r\n                                <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                <p>Richard</p>\r\n                            </div>\r\n                            <a>Jan 20</a>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"wish-info\">\r\n                                <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                <p>Harry Len</p>\r\n                            </div>\r\n                            <a>Jan 20</a>\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"wish-info\">\r\n                                <img src=\"assets/img/profiles/avatar-04.jpg\" alt=\"User\">\r\n                                <p>Ken Druv</p>\r\n                            </div>\r\n                            <a>Jan 20</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-6 col-xl-4 d-flex\">\r\n            <div class=\"card uh-card flex-fill\">\r\n                <div class=\"card att-card h-set-card\">\r\n                    <div class=\"card-header\">\r\n                        <h3><i class=\"fas fa-home\"></i> Upcoming Holidays</h3>\r\n                    </div>\r\n                    <div class=\"card-body pt-0 pb-0\">\r\n                        <ul class=\"leave-list upcoming-list\">\r\n                            <li>\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"circle\">\r\n                                        <i class=\"far fa-image\"></i>\r\n                                    </div>\r\n                                    <h3>DreamsHRMS</h3>\r\n                                </div>\r\n                                <h6>Jan 20</h6>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"circle\">\r\n                                        <i class=\"far fa-image\"></i>\r\n                                    </div>\r\n                                    <h3>DreamsHRMS</h3>\r\n                                </div>\r\n                                <h6>Jan 20</h6>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"circle\">\r\n                                        <i class=\"far fa-image\"></i>\r\n                                    </div>\r\n                                    <h3>DreamsHRMS</h3>\r\n                                </div>\r\n                                <h6>Jan 20</h6>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"circle\">\r\n                                        <i class=\"far fa-image\"></i>\r\n                                    </div>\r\n                                    <h3>DreamsHRMS</h3>\r\n                                </div>\r\n                                <h6>Jan 20</h6>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"circle\">\r\n                                        <i class=\"far fa-image\"></i>\r\n                                    </div>\r\n                                    <h3>DreamsHRMS</h3>\r\n                                </div>\r\n                                <h6>Jan 20</h6>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"circle\">\r\n                                        <i class=\"far fa-image\"></i>\r\n                                    </div>\r\n                                    <h3>DreamsHRMS</h3>\r\n                                </div>\r\n                                <h6>Jan 20</h6>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn-emp-sec\">\r\n                    <a class=\"btn-emp c1\"><i class=\"far fa-folder-open\"></i>\r\n                        File Manager</a>\r\n                    <a class=\"btn-emp c2\"><i class=\"far fa-handshake\"></i> Meetings</a>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_dashboard_dashboard_module_ts.js.map