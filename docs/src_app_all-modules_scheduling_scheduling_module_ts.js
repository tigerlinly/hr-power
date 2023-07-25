"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_scheduling_scheduling_module_ts"],{

/***/ 69972:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/scheduling/scheduling-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulingRoutingModule": () => (/* binding */ SchedulingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _scheduling_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduling.component */ 472);
/* harmony import */ var _shift_scheduling_shift_scheduling_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-scheduling/shift-scheduling.component */ 81005);





const routes = [
    {
        path: "",
        component: _scheduling_component__WEBPACK_IMPORTED_MODULE_0__.SchedulingComponent,
        children: [
            {
                path: "shift-scheduling",
                component: _shift_scheduling_shift_scheduling_component__WEBPACK_IMPORTED_MODULE_1__.ShiftSchedulingComponent
            }
        ]
    }
];
let SchedulingRoutingModule = class SchedulingRoutingModule {
};
SchedulingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], SchedulingRoutingModule);



/***/ }),

/***/ 472:
/*!****************************************************************!*\
  !*** ./src/app/all-modules/scheduling/scheduling.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulingComponent": () => (/* binding */ SchedulingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scheduling_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduling.component.html?ngResource */ 24625);
/* harmony import */ var _scheduling_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduling.component.css?ngResource */ 50520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SchedulingComponent = class SchedulingComponent {
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
SchedulingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
SchedulingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-scheduling',
        template: _scheduling_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scheduling_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], SchedulingComponent);



/***/ }),

/***/ 60488:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/scheduling/scheduling.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulingModule": () => (/* binding */ SchedulingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _scheduling_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduling-routing.module */ 69972);
/* harmony import */ var _scheduling_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduling.component */ 472);
/* harmony import */ var _shift_scheduling_shift_scheduling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shift-scheduling/shift-scheduling.component */ 81005);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/picklist */ 34785);











let SchedulingModule = class SchedulingModule {
};
SchedulingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_scheduling_component__WEBPACK_IMPORTED_MODULE_1__.SchedulingComponent, _shift_scheduling_shift_scheduling_component__WEBPACK_IMPORTED_MODULE_2__.ShiftSchedulingComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _scheduling_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulingRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_10__.PickListModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_5__.SharingModule,
        ]
    })
], SchedulingModule);



/***/ }),

/***/ 81005:
/*!***************************************************************************************!*\
  !*** ./src/app/all-modules/scheduling/shift-scheduling/shift-scheduling.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftSchedulingComponent": () => (/* binding */ ShiftSchedulingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shift_scheduling_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-scheduling.component.html?ngResource */ 80730);
/* harmony import */ var _shift_scheduling_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-scheduling.component.css?ngResource */ 38221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let ShiftSchedulingComponent = class ShiftSchedulingComponent {
    constructor(formBuilder, srvModuleService, toastr) {
        this.formBuilder = formBuilder;
        this.srvModuleService = srvModuleService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
        this.url = "shiftscheduling";
        this.rows = [];
        this.srch = [];
    }
    ngOnInit() {
        // Floating Label
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        this.LoadArchivedjobs();
    }
    // Get department list  Api Call
    LoadArchivedjobs() {
        this.srvModuleService.get(this.url).subscribe((data) => {
            this.lstArchivedjobs = data;
            this.dtTrigger.next();
            this.rows = this.lstArchivedjobs;
            this.srch = [...this.rows];
        });
    }
    //search by Department
    employee(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.name1.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
ShiftSchedulingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
ShiftSchedulingComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
ShiftSchedulingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shift-scheduling',
        template: _shift_scheduling_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shift_scheduling_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShiftSchedulingComponent);



/***/ }),

/***/ 50520:
/*!****************************************************************************!*\
  !*** ./src/app/all-modules/scheduling/scheduling.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsaW5nLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 38221:
/*!***************************************************************************************************!*\
  !*** ./src/app/all-modules/scheduling/shift-scheduling/shift-scheduling.component.css?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC1zY2hlZHVsaW5nLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 24625:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/scheduling/scheduling.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<!-- <div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\"> -->\r\n    <router-outlet></router-outlet>\r\n <!--    </div> -->\r\n    <!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 80730:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/scheduling/shift-scheduling/shift-scheduling.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">\r\n    <!-- Page Content -->\r\n    <div class=\"content container-fluid\">\r\n        \r\n        <!-- Page Header -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"page-head-box\">\r\n                    <h3>Daily Scheduling</h3>\r\n                    <nav aria-label=\"breadcrumb\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Daily Scheduling</li>\r\n                        </ol>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Page Header -->\r\n\r\n        <!-- Search Filter -->\r\n        <div class=\"row filter-row\">\r\n            \r\n            <div class=\"col-sm-6 col-md-2\"> \r\n                <div class=\"form-group form-focus select-focus\">\r\n                    <select class=\"form-select floating form-control\"> \r\n                        <option>All Department</option>\r\n                        <option value=\"1\">Finance</option>\r\n                        <option value=\"2\">Finance and Management</option>\r\n                        <option value=\"3\">Hr & Finance</option>\r\n                        <option value=\"4\">ITech</option>\r\n                    </select>\r\n                    <label class=\"focus-label\">Department</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-2\">  \r\n                <div class=\"form-group form-focus focused\">\r\n                    <div class=\"cal-icon\">\r\n                        <input class=\"form-control floating datetimepicker\" bsDatepicker>\r\n                    </div>\r\n                    <label class=\"focus-label\">From</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-2\">  \r\n                <div class=\"form-group form-focus focused\">\r\n                    <div class=\"cal-icon\">\r\n                        <input class=\"form-control floating datetimepicker\" bsDatepicker>\r\n                    </div>\r\n                    <label class=\"focus-label\">To</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-2\">\r\n                <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-2\">\r\n                <a class=\"btn btn-success btn-add-emp w-100\" data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\"> Assign Shifts</a>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-2\">\r\n                <a routerLink=\"/layout/shift/shift-list\" class=\"btn btn-success btn-add-emp w-100\">Shifts</a>\r\n            </div> \r\n        </div>\r\n        <!-- Search Filter -->\r\n\r\n        <!-- Content Starts -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"table-responsive\">\r\n                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n        class=\"table table-striped custom-table datatable mb-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Scheduled Shift</th>\r\n                                <th>Fri 21</th>\r\n                                <th>Sat 22</th>\r\n                                <th>Sun 23</th>\r\n                                <th>Mon 24</th>\r\n                                <th>Tue 25</th>\r\n                                <th>Wed 26</th>\r\n                                <th>Thu 27</th>\r\n                                <th>Fri 28</th>\r\n                                <th>Sat 29</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of lstArchivedjobs\">\r\n                                <td>\r\n                                    <h2 class=\"table-avatar\">\r\n                                        <a routerLink=\"/layout/profile/profilelist\" class=\"avatar\"><img alt=\"\" src=\"{{item.profileimg}}\"></a>\r\n                                        <a routerLink=\"/layout/profile/profilelist\">{{item.name1}} <span>{{item.name2}}</span></a>\r\n                                    </h2>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <h2>\r\n                                            <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_schedule\" style=\"border:2px dashed #1eb53a\">\r\n                                            <span class=\"username-info m-b-10\">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>\r\n                                            <span class=\"userrole-info\">Web Designer - SMARTHR</span>\r\n                                            </a>\r\n                                        </h2>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <h2>\r\n                                            <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_schedule\" style=\"border:2px dashed #1eb53a\">\r\n                                            <span class=\"username-info m-b-10\">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>\r\n                                            <span class=\"userrole-info\">Web Designer - SMARTHR</span>\r\n                                            </a>\r\n                                        </h2>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                                <td>\r\n                                    <div class=\"user-add-shedule-list\">\r\n                                        <a data-bs-toggle=\"modal\" data-bs-target=\"#add_schedule\">\r\n                                        <span><i class=\"fa fa-plus\"></i></span>\r\n                                        </a>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                            \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Content End -->\r\n        \r\n    </div>\r\n    <!-- /Page Content -->\r\n</div>\r\n<!-- Add Schedule Modal -->\r\n<div id=\"add_schedule\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Schedule</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Department <span class=\"text-danger\">*</span></label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">Select</option>\r\n                                    <option value=\"\">Development</option>\r\n                                    <option value=\"1\">Finance</option>\r\n                                    <option value=\"2\">Finance and Management</option>\r\n                                    <option value=\"3\">Hr & Finance</option>\r\n                                    <option value=\"4\">ITech</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Employee Name <span class=\"text-danger\">*</span></label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">Select </option>\r\n                                    <option value=\"1\">Richard Miles </option>\r\n                                    <option value=\"2\">John Smith</option>\r\n                                    <option value=\"3\">Mike Litorus </option>\r\n                                    <option value=\"4\">Wilmer Deluna</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Date</label>\r\n                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Shifts <span class=\"text-danger\">*</span></label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">Select </option>\r\n                                    <option value=\"1\">10'o clock Shift</option>\r\n                                    <option value=\"2\">10:30 shift</option>\r\n                                    <option value=\"3\">Daily Shift </option>\r\n                                    <option value=\"4\">New Shift</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Min Start Time  <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"input-group time timepicker\">\r\n                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Start Time  <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"input-group time timepicker\">\r\n                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Max Start Time  <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"input-group time timepicker\">\r\n                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Min End Time  <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"input-group time timepicker\">\r\n                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">End Time   <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"input-group time timepicker\">\r\n                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Max End Time <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"input-group time timepicker\">\r\n                                    <input class=\"form-control\"><span class=\"input-group-text\"><i class=\"far fa-clock\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Break Time  <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Accept Extra Hours </label>\r\n                                <div class=\"custom-control form-check form-switch\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customSwitch1\" checked=\"\">\r\n                                    <label class=\"form-check-label\" for=\"customSwitch1\"></label>\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Publish </label>\r\n                                <div class=\"custom-control form-check form-switch\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customSwitch2\" checked=\"\">\r\n                                    <label class=\"form-check-label\" for=\"customSwitch2\"></label>\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Schedule Modal -->\r\n\r\n<!-- Edit Schedule Modal -->\r\n<div id=\"edit_schedule\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Schedule</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Department <span class=\"text-danger\">*</span></label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">Select</option>\r\n                                    <option selected value=\"\">Development</option>\r\n                                    <option value=\"1\">Finance</option>\r\n                                    <option value=\"2\">Finance and Management</option>\r\n                                    <option value=\"3\">Hr & Finance</option>\r\n                                    <option value=\"4\">ITech</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Employee Name <span class=\"text-danger\">*</span></label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">Select </option>\r\n                                    <option selected value=\"1\">Richard Miles </option>\r\n                                    <option value=\"2\">John Smith</option>\r\n                                    <option value=\"3\">Mike Litorus </option>\r\n                                    <option value=\"4\">Wilmer Deluna</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Date <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Shifts <span class=\"text-danger\">*</span></label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">Select </option>\r\n                                    <option value=\"1\">10'o clock Shift</option>\r\n                                    <option value=\"2\">10:30 shift</option>\r\n                                    <option value=\"3\">Daily Shift </option>\r\n                                    <option  selected value=\"4\">New Shift</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Min Start Time  <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"06:11 am\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Start Time  <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"06:30 am\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Max Start Time  <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"08:12 am\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Min End Time  <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"09:12 pm\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">End Time   <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"09:30 pm\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Max End Time <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"09:45 pm\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Break Time  <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"45\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"custom-control form-check\">\r\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"customCheck1\">\r\n                                <label class=\"form-check-label\" for=\"customCheck1\">Recurring Shift</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Repeat Every</label>\r\n                                <select class=\"form-select form-control\">\r\n                                    <option value=\"\">1 </option>\r\n                                    <option value=\"1\">2</option>\r\n                                    <option value=\"2\">3</option>\r\n                                    <option value=\"3\">4</option>\r\n                                    <option  selected value=\"4\">5</option>\r\n                                    <option value=\"3\">6</option>\r\n                                </select>\r\n                                <label class=\"col-form-label\">Week(s)</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group wday-box\">\r\n                                \r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"monday\" class=\"days recurring\" checked=\"\" onclick=\"return false;\"><span class=\"checkmark\">M</span></label>\r\n\r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"tuesday\" class=\"days recurring\" checked=\"\" onclick=\"return false;\"><span class=\"checkmark\">T</span></label>\r\n                                \r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"wednesday\" class=\"days recurring\" checked=\"\" onclick=\"return false;\"><span class=\"checkmark\">W</span></label>\r\n                                \r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"thursday\" class=\"days recurring\" checked=\"\" onclick=\"return false;\"><span class=\"checkmark\">T</span></label>\r\n                                \r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"friday\" class=\"days recurring\" checked=\"\" onclick=\"return false;\"><span class=\"checkmark\">F</span></label>\r\n                                \r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"saturday\" class=\"days recurring\" onclick=\"return false;\"><span class=\"checkmark\">S</span></label>\r\n                                \r\n                                    <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"week_days[]\" value=\"sunday\" class=\"days recurring\" onclick=\"return false;\"><span class=\"checkmark\">S</span></label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">End On <span class=\"text-danger\">*</span></label>\r\n                                <div class=\"cal-icon\"><input class=\"form-control datetimepicker\" type=\"text\" bsDatepicker></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"custom-control form-check\">\r\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"customCheck2\">\r\n                                <label class=\"form-check-label\" for=\"customCheck2\">Indefinite</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Accept Extra Hours </label>\r\n                                <div class=\"custom-control form-check form-switch\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customSwitch3\" checked=\"\">\r\n                                    <label class=\"form-check-label\" for=\"customSwitch3\"></label>\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-form-label\">Publish </label>\r\n                                <div class=\"custom-control form-check form-switch\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customSwitch4\" checked=\"\">\r\n                                    <label class=\"form-check-label\" for=\"customSwitch4\"></label>\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Schedule Modal -->\r\n            ";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_scheduling_scheduling_module_ts.js.map