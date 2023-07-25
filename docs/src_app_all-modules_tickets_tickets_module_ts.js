"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_tickets_tickets_module_ts"],{

/***/ 27485:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-content/tickets-content.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsContentComponent": () => (/* binding */ TicketsContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tickets_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-content.component.html?ngResource */ 57133);
/* harmony import */ var _tickets_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-content.component.css?ngResource */ 83309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);










let TicketsContentComponent = class TicketsContentComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "tickets";
        this.allTickets = [];
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe("en-US");
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
        // for floating label
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        this.getTickets();
        // Add Ticket Form Validation And Getting Values
        this.addTicketForm = this.formBuilder.group({
            ticketSubject: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ticketId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            assignStaff: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            clientName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            PriorityName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ccName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            AssignName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            addFlowers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        // Edit Ticket Form Validation And Getting Values
        this.editTicketForm = this.formBuilder.group({
            editTicketSubject: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editTicketId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editAssignStaff: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editClientName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editPriorityName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editccName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editAssignName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editaddFlowers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
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
        this.allTickets = [];
        this.getTickets();
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    getTickets() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allTickets = data;
            this.rows = this.allTickets;
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
    // Add Ticket Modal Api Call
    addTickets() {
        if (this.addTicketForm.invalid) {
            this.markFormGroupTouched(this.addTicketForm);
            return;
        }
        if (this.addTicketForm.valid) {
            // let created = this.pipe.transform(
            //   "12-05-2020",
            //   "dd-MM-yyyy"
            // );
            // let lastDate = this.pipe.transform(
            //   "13-05-2020",
            //   "dd-MM-yyyy"
            // );
            let obj = {
                ticketSubject: this.addTicketForm.value.ticketSubject,
                ticketId: this.addTicketForm.value.ticketId,
                assignedStaff: this.addTicketForm.value.assignStaff,
                client: this.addTicketForm.value.clientName,
                cc: this.addTicketForm.value.ccName,
                priority: this.addTicketForm.value.PriorityName,
                assigne: this.addTicketForm.value.AssignName,
                addfollow: this.addTicketForm.value.addFlowers,
                createdDate: "05-05-2020",
                lastReply: "11-05-2020",
                status: "Pending",
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getTickets();
            $("#add_ticket").modal("hide");
            this.addTicketForm.reset();
            this.toastr.success("Tickets added", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    // Edit Ticket Modal Api Call
    editTicket() {
        let obj = {
            ticketSubject: this.editTicketForm.value.editTicketSubject,
            ticketId: this.editTicketForm.value.editTicketId,
            assignedStaff: this.editTicketForm.value.editAssignStaff,
            client: this.editTicketForm.value.editClientName,
            cc: this.editTicketForm.value.editccName,
            priority: this.editTicketForm.value.editPriorityName,
            assigne: this.editTicketForm.value.editAssignName,
            addfollow: this.editTicketForm.value.editaddFlowers,
            createdDate: "05-09-2020",
            lastReply: "06-09-2020",
            status: "Approved",
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.getTickets();
        $("#edit_ticket").modal("hide");
        this.editTicketForm.reset();
        this.toastr.success("Tickets updated", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allTickets.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allTickets[index];
        this.editTicketForm.setValue({
            editTicketSubject: toSetValues.ticketSubject,
            editTicketId: toSetValues.ticketId,
            editAssignStaff: toSetValues.assignedStaff,
            editClientName: toSetValues.client,
            editPriorityName: toSetValues.priority,
            editccName: toSetValues.cc,
            editAssignName: toSetValues.assigne,
            editaddFlowers: toSetValues.addfollow,
        });
    }
    // Delete Ticket Modal Api Call
    deleteTicket() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.getTickets();
        $("#delete_ticket").modal("hide");
        this.toastr.success("Tickets deleted", "Success");
    }
    //search by name
    searchName(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.assignedStaff.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
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
    searchPriority(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.priority.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by purchase
    searchFrom(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.createdDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    searchTo(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.lastReply.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
TicketsContentComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
TicketsContentComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["newTicketChart",] }],
    solvedchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["solvedTicketChart",] }],
    openchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["openTicketChart",] }],
    pendingchart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["pendingTicketChart",] }],
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
TicketsContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-tickets-content",
        template: _tickets_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tickets_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketsContentComponent);



/***/ }),

/***/ 40401:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsRoutingModule": () => (/* binding */ TicketsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets.component */ 48556);
/* harmony import */ var _tickets_content_tickets_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-content/tickets-content.component */ 27485);
/* harmony import */ var _tickets_view_tickets_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-view/tickets-view.component */ 31437);






const routes = [
    {
        path: "",
        component: _tickets_component__WEBPACK_IMPORTED_MODULE_0__.TicketsComponent,
        children: [
            {
                path: "ticketscontent",
                component: _tickets_content_tickets_content_component__WEBPACK_IMPORTED_MODULE_1__.TicketsContentComponent
            },
            {
                path: "ticketsview",
                component: _tickets_view_tickets_view_component__WEBPACK_IMPORTED_MODULE_2__.TicketsViewComponent
            }
        ]
    }
];
let TicketsRoutingModule = class TicketsRoutingModule {
};
TicketsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], TicketsRoutingModule);



/***/ }),

/***/ 31437:
/*!****************************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-view/tickets-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsViewComponent": () => (/* binding */ TicketsViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tickets_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-view.component.html?ngResource */ 61538);
/* harmony import */ var _tickets_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets-view.component.css?ngResource */ 94714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TicketsViewComponent = class TicketsViewComponent {
    constructor() { }
    ngOnInit() {
        console.log("tickets");
    }
};
TicketsViewComponent.ctorParameters = () => [];
TicketsViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tickets-view',
        template: _tickets_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tickets_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketsViewComponent);



/***/ }),

/***/ 48556:
/*!**********************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsComponent": () => (/* binding */ TicketsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets.component.html?ngResource */ 10498);
/* harmony import */ var _tickets_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets.component.css?ngResource */ 15147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TicketsComponent = class TicketsComponent {
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
TicketsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
TicketsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tickets',
        template: _tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tickets_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], TicketsComponent);



/***/ }),

/***/ 93377:
/*!*******************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsModule": () => (/* binding */ TicketsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-routing.module */ 40401);
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets.component */ 48556);
/* harmony import */ var _tickets_content_tickets_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-content/tickets-content.component */ 27485);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _tickets_view_tickets_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tickets-view/tickets-view.component */ 31437);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 33142);












let TicketsModule = class TicketsModule {
};
TicketsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_tickets_component__WEBPACK_IMPORTED_MODULE_1__.TicketsComponent, _tickets_content_tickets_content_component__WEBPACK_IMPORTED_MODULE_2__.TicketsContentComponent, _tickets_view_tickets_view_component__WEBPACK_IMPORTED_MODULE_4__.TicketsViewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _tickets_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketsRoutingModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__.SharingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__.BsDatepickerModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_6__.SharingModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__.TooltipModule.forRoot()
        ]
    })
], TicketsModule);



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

/***/ 83309:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-content/tickets-content.component.css?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXRzLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 94714:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-view/tickets-view.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXRzLXZpZXcuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 15147:
/*!**********************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXRzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 57133:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-content/tickets-content.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Tickets</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Tickets</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>New Tickets</h2>\r\n                        <h3 class=\"bl-text\">112</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"newTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"newTicketChartOptions.series\"\r\n                        [chart]=\"newTicketChartOptions.chart\"\r\n                        [xaxis]=\"newTicketChartOptions.xaxis\"\r\n                        [stroke]=\"newTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"newTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"newTicketChartOptions.yaxis\"\r\n                        [labels]=\"newTicketChartOptions.labels\"\r\n                        [legend]=\"newTicketChartOptions.legend\"\r\n                        [title]=\"newTicketChartOptions.title\"\r\n                        [subtitle]=\"newTicketChartOptions.subtitle\"\r\n                    ></apx-chart> \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>Solved Tickets</h2>\r\n                        <h3 class=\"org-text\">112</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"solvedTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"solvedTicketChartOptions.series\"\r\n                        [chart]=\"solvedTicketChartOptions.chart\"\r\n                        [xaxis]=\"solvedTicketChartOptions.xaxis\"\r\n                        [stroke]=\"solvedTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"solvedTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"solvedTicketChartOptions.yaxis\"\r\n                        [labels]=\"solvedTicketChartOptions.labels\"\r\n                        [legend]=\"solvedTicketChartOptions.legend\"\r\n                        [title]=\"solvedTicketChartOptions.title\"\r\n                        [subtitle]=\"solvedTicketChartOptions.subtitle\"\r\n                    ></apx-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>Open Tickets</h2>\r\n                        <h3 class=\"red-text\">112</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"openTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"openTicketChartOptions.series\"\r\n                        [chart]=\"openTicketChartOptions.chart\"\r\n                        [xaxis]=\"openTicketChartOptions.xaxis\"\r\n                        [stroke]=\"openTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"openTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"openTicketChartOptions.yaxis\"\r\n                        [labels]=\"openTicketChartOptions.labels\"\r\n                        [legend]=\"openTicketChartOptions.legend\"\r\n                        [title]=\"openTicketChartOptions.title\"\r\n                        [subtitle]=\"openTicketChartOptions.subtitle\"\r\n                    ></apx-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-lg-3 d-flex\">\r\n            <div class=\"card flex-fill tickets-card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"\">\r\n                        <h2>Pending Tickets</h2>\r\n                        <h3 class=\"grn-text\">112</h3>\r\n                    </div>\r\n                    <h6>+10%</h6>\r\n                </div>\r\n                <div class=\"\" id=\"pendingTicketChart\">\r\n                    <apx-chart\r\n                        [series]=\"pendingTicketChartOptions.series\"\r\n                        [chart]=\"pendingTicketChartOptions.chart\"\r\n                        [xaxis]=\"pendingTicketChartOptions.xaxis\"\r\n                        [stroke]=\"pendingTicketChartOptions.stroke\"\r\n                        [dataLabels]=\"pendingTicketChartOptions.dataLabels\"\r\n                        [yaxis]=\"pendingTicketChartOptions.yaxis\"\r\n                        [labels]=\"pendingTicketChartOptions.labels\"\r\n                        [legend]=\"pendingTicketChartOptions.legend\"\r\n                        [title]=\"pendingTicketChartOptions.title\"\r\n                        [subtitle]=\"pendingTicketChartOptions.subtitle\"\r\n                    ></apx-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n\t\t\t\t\t\t\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"\r\n                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                        (bsValueChange)=\"searchFrom($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\"\r\n                        [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\"\r\n                        (bsValueChange)=\"searchTo($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_ticket\"><i class=\"fas fa-plus\"></i> Add Tickets</a>\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <!-- Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\r\n                    class=\"table table-striped custom-table mb-0 datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Ticket Id</th>\r\n                            <th>Ticket Subject</th>\r\n                            <th>Assigned Staff</th>\r\n                            <th>Created Date</th>\r\n                            <th>Last Reply</th>\r\n                            <th>Priority</th>\r\n                            <th class=\"text-center\">Status</th>\r\n                            <th class=\"text-end\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let tickets of allTickets;let i = index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <td><a routerLink=\"/layout/tickets/ticketsview\">{{tickets.ticketId}}</a></td>\r\n                            <td>{{tickets.ticketSubject}}</td>\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a class=\"avatar avatar-xs\" routerLink=\"/layout/employees/employeeprofile\"><img alt=\"\"\r\n                                            src=\"{{tickets.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{tickets.assignedStaff}}</a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{tickets.createdDate}}</td>\r\n                            <td>{{tickets.lastReply}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\"><i class=\"fa fa-dot-circle-o text-danger\"></i> High </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('High')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            High</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Medium')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-warning\"></i> Medium</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Low')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Low</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-one dropdown-toggle\" data-bs-toggle=\"dropdown\"\r\n                                        aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-danger\"></i> New\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Open')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            Open</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Reopened')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-info\"></i>\r\n                                            Reopened</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('OnHold')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            On Hold</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Closed')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Closed</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('InProgress')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> In Progress</a>\r\n                                        <a class=\"dropdown-item\" (click)=\"getStatus('Cancelled')\"><i\r\n                                                class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Cancelled</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_ticket\" (click)=\"edit(tickets.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_ticket\" (click)=\"tempId = tickets.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Ticket Modal -->\r\n<div id=\"add_ticket\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Ticket</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addTickets()\" [formGroup]=\"addTicketForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Subject</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTicketForm.get('ticketSubject').invalid && addTicketForm.get('ticketSubject').touched\"\r\n                                    formControlName=\"ticketSubject\">\r\n                                <div\r\n                                    *ngIf=\"addTicketForm.get('ticketSubject').invalid && addTicketForm.get('ticketSubject').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('ticketSubject').invalid && addTicketForm.get('ticketSubject').touched\"\r\n                                        class=\"text-danger\"> *Ticket Subject is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Id</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTicketForm.get('ticketId').invalid && addTicketForm.get('ticketId').touched\"\r\n                                    formControlName=\"ticketId\">\r\n                                <div\r\n                                    *ngIf=\"addTicketForm.get('ticketId').invalid && addTicketForm.get('ticketId').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('ticketId').invalid && addTicketForm.get('ticketId').touched\"\r\n                                        class=\"text-danger\"> *Ticket Id is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Assign Staff</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTicketForm.get('assignStaff').invalid && addTicketForm.get('assignStaff').touched\"\r\n                                    formControlName=\"assignStaff\">\r\n                                    <option>-</option>\r\n                                    <option>Mike Litorus</option>\r\n                                    <option>John Smith</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTicketForm.get('assignStaff').invalid && addTicketForm.get('assignStaff').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('assignStaff').invalid && addTicketForm.get('assignStaff').touched\"\r\n                                        class=\"text-danger\"> *Assign Staff is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Client</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTicketForm.get('clientName').invalid && addTicketForm.get('clientName').touched\"\r\n                                    formControlName=\"clientName\">\r\n                                    <option>-</option>\r\n                                    <option>Delta Infotech</option>\r\n                                    <option>International Software Inc</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTicketForm.get('clientName').invalid && addTicketForm.get('clientName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('clientName').invalid && addTicketForm.get('clientName').touched\"\r\n                                        class=\"text-danger\"> *Client name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Priority</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"addTicketForm.get('PriorityName').invalid && addTicketForm.get('PriorityName').touched\"\r\n                                    formControlName=\"PriorityName\">\r\n                                    <option>High</option>\r\n                                    <option>Medium</option>\r\n                                    <option>Low</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"addTicketForm.get('PriorityName').invalid && addTicketForm.get('PriorityName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('PriorityName').invalid && addTicketForm.get('PriorityName').touched\"\r\n                                        class=\"text-danger\"> *Priority is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>CC</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"addTicketForm.get('ccName').invalid && addTicketForm.get('ccName').touched\"\r\n                                    formControlName=\"ccName\">\r\n                                <div *ngIf=\"addTicketForm.get('ccName').invalid && addTicketForm.get('ccName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('ccName').invalid && addTicketForm.get('ccName').touched\"\r\n                                        class=\"text-danger\"> *CC is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Assign</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                    [class.invalid]=\"addTicketForm.get('AssignName').invalid && addTicketForm.get('AssignName').touched\"\r\n                                    formControlName=\"AssignName\">\r\n                                <div\r\n                                    *ngIf=\"addTicketForm.get('AssignName').invalid && addTicketForm.get('AssignName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addTicketForm.get('AssignName').invalid && addTicketForm.get('AssignName').touched\"\r\n                                        class=\"text-danger\"> *AssignName is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Assignee</label>\r\n                                <div class=\"project-members\">\r\n                                    <a tooltip=\"John Smith\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"\">\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Add Followers</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                    [class.invalid]=\"addTicketForm.get('addFlowers').invalid && addTicketForm.get('addFlowers').touched\"\r\n                                    formControlName=\"addFlowers\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Followers</label>\r\n                                <div class=\"project-members\">\r\n                                    <a tooltip=\"Richard Miles\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <a tooltip=\"John Smith\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <a tooltip=\"Mike Litorus\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-05.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <a tooltip=\"Wilmer Deluna\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-11.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <span class=\"all-team\">+2</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Upload Files</label>\r\n                                <input class=\"form-control\" type=\"file\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Ticket Modal -->\r\n\r\n<!-- Edit Ticket Modal -->\r\n<div id=\"edit_ticket\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Ticket</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editTicket()\" [formGroup]=\"editTicketForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Subject</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTicketForm.get('editTicketSubject').invalid && editTicketForm.get('editTicketSubject').touched\"\r\n                                    formControlName=\"editTicketSubject\">\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editTicketSubject').invalid && editTicketForm.get('editTicketSubject').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editTicketSubject').invalid && editTicketForm.get('editTicketSubject').touched\"\r\n                                        class=\"text-danger\"> *Ticket Subject is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Id</label>\r\n                                <input class=\"form-control\" type=\"text\" value=\"TKT-0001\"\r\n                                    [class.invalid]=\"editTicketForm.get('editTicketId').invalid && editTicketForm.get('editTicketId').touched\"\r\n                                    formControlName=\"editTicketId\">\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editTicketId').invalid && editTicketForm.get('editTicketId').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editTicketId').invalid && editTicketForm.get('editTicketId').touched\"\r\n                                        class=\"text-danger\"> *Ticket Id is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Assign Staff</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTicketForm.get('editAssignStaff').invalid && editTicketForm.get('editAssignStaff').touched\"\r\n                                    formControlName=\"editAssignStaff\">\r\n                                    <option>-</option>\r\n                                    <option selected>Mike Litorus</option>\r\n                                    <option>John Smith</option>\r\n                                    <option>Catherine Manseau</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editAssignStaff').invalid && editTicketForm.get('editAssignStaff').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editAssignStaff').invalid && editTicketForm.get('editAssignStaff').touched\"\r\n                                        class=\"text-danger\"> *Assign Staff is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Client</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTicketForm.get('editClientName').invalid && editTicketForm.get('editClientName').touched\"\r\n                                    formControlName=\"editClientName\">\r\n                                    <option>-</option>\r\n                                    <option>Delta Infotech</option>\r\n                                    <option>International Software Inc</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editClientName').invalid && editTicketForm.get('editClientName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editClientName').invalid && editTicketForm.get('editClientName').touched\"\r\n                                        class=\"text-danger\"> *Client name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Priority</label>\r\n                                <select class=\"form-select form-control\"\r\n                                    [class.invalid]=\"editTicketForm.get('editPriorityName').invalid && editTicketForm.get('editPriorityName').touched\"\r\n                                    formControlName=\"editPriorityName\">\r\n                                    <option>High</option>\r\n                                    <option selected>Medium</option>\r\n                                    <option>Low</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editPriorityName').invalid && editTicketForm.get('editPriorityName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editPriorityName').invalid && editTicketForm.get('editPriorityName').touched\"\r\n                                        class=\"text-danger\"> *Priority is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>CC</label>\r\n                                <input class=\"form-control\" type=\"text\"\r\n                                    [class.invalid]=\"editTicketForm.get('editccName').invalid && editTicketForm.get('editccName').touched\"\r\n                                    formControlName=\"editccName\">\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editccName').invalid && editTicketForm.get('editccName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editccName').invalid && editTicketForm.get('editccName').touched\"\r\n                                        class=\"text-danger\"> *CC is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Assign</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                    [class.invalid]=\"editTicketForm.get('editccName').invalid && editTicketForm.get('editccName').touched\"\r\n                                    formControlName=\"editccName\">\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editccName').invalid && editTicketForm.get('editccName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editccName').invalid && editTicketForm.get('editccName').touched\"\r\n                                        class=\"text-danger\"> *Assign is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Assignee</label>\r\n                                <div class=\"project-members\">\r\n                                    <a tooltip=\"John Smith\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"\">\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Add Followers</label>\r\n                                <input type=\"text\" class=\"form-control\"\r\n                                    [class.invalid]=\"editTicketForm.get('editaddFlowers').invalid && editTicketForm.get('editaddFlowers').touched\"\r\n                                    formControlName=\"editaddFlowers\">\r\n                                <div\r\n                                    *ngIf=\"editTicketForm.get('editaddFlowers').invalid && editTicketForm.get('editaddFlowers').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editTicketForm.get('editaddFlowers').invalid && editTicketForm.get('editaddFlowers').touched\"\r\n                                        class=\"text-danger\"> *Add Followers is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Ticket Followers</label>\r\n                                <div class=\"project-members\">\r\n                                    <a tooltip=\"Richard Miles\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <a tooltip=\"John Smith\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <a tooltip=\"Mike Litorus\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-05.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <a tooltip=\"Wilmer Deluna\" class=\"avatar\">\r\n                                        <img src=\"assets/img/profiles/avatar-11.jpg\" alt=\"\">\r\n                                    </a>\r\n                                    <span class=\"all-team\">+2</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea class=\"form-control\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Upload Files</label>\r\n                                <input class=\"form-control\" type=\"file\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\" type=\"submit\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Ticket Modal -->\r\n\r\n<!-- Delete Ticket Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_ticket\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Ticket</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\"\r\n                                (click)=\"deleteTicket()\">Delete</a>\r\n                        </div>\r\n                        <div class=\" col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Ticket Modal -->\r\n";

/***/ }),

/***/ 61538:
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets-view/tickets-view.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            \r\n<div class=\"chat-main-row\">\r\n    <div class=\"chat-main-wrapper\">\r\n        <div class=\"col-lg-8 message-view task-view\">\r\n            <div class=\"chat-window\">\r\n                <div class=\"fixed-header\">\r\n                    <div class=\"navbar\">\r\n                        <div class=\"float-start ticket-view-details\">\r\n                            <div class=\"ticket-header\">\r\n                                <span>Status: </span> <span class=\"badge badge-warning\">New</span> <span class=\"m-l-15 text-muted\">Client: </span>\r\n                                <a>Delta Infotech</a>    \r\n                                <span class=\"m-l-15 text-muted\">Created: </span>\r\n                                <span>5 Jan 2019 07:21 AM </span> \r\n                                <span class=\"m-l-15 text-muted\">Created by:</span>\r\n                                <span><a href=\"profile.html\">John Doe</a></span>\r\n                            </div>\r\n                        </div>\r\n                        <a class=\"task-chat profile-rightbar float-end\" id=\"task_chat\" href=\"#task_window\"><i class=\"fa fa fa-comment\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"chat-contents\">\r\n                    <div class=\"chat-content-wrap\">\r\n                        <div class=\"chat-wrap-inner\">\r\n                            <div class=\"chat-box\">\r\n                                <div class=\"task-wrapper\">\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"project-title\">\r\n                                                <div class=\"m-b-20\">\r\n                                                    <span class=\"h5 card-title \">Laptop Issue</span>\r\n                                                    <div class=\"float-end ticket-priority\"><span>Priority:</span>\r\n                                                        <div class=\"btn-group\">\r\n                                                            <a class=\"badge badge-danger dropdown-toggle\" data-bs-toggle=\"dropdown\">Highest </a>\r\n                                                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i> Highest priority</a>\r\n                                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-info\"></i> High priority</a>\r\n                                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-primary\"></i> Normal priority</a>\r\n                                                                <a class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-success\"></i> Low priority</a>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>\r\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                            <h5 class=\"card-title m-b-20\">Uploaded image files</h5>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-3 col-sm-6\">\r\n                                                    <div class=\"uploaded-box\">\r\n                                                        <div class=\"uploaded-img\">\r\n                                                            <img src=\"assets/img/placeholder.jpg\" class=\"img-fluid\" alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"uploaded-img-name\">\r\n                                                             demo.png\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-3 col-sm-6\">\r\n                                                    <div class=\"uploaded-box\">\r\n                                                        <div class=\"uploaded-img\">\r\n                                                            <img src=\"assets/img/placeholder.jpg\" class=\"img-fluid\" alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"uploaded-img-name\">\r\n                                                             demo.png\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-3 col-sm-6\">\r\n                                                    <div class=\"uploaded-box\">\r\n                                                        <div class=\"uploaded-img\">\r\n                                                            <img src=\"assets/img/placeholder.jpg\" class=\"img-fluid\" alt=\"\">\r\n                                                        </div>\r\n\r\n                                                        <div class=\"uploaded-img-name\">\r\n                                                             demo.png\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-3 col-sm-6\">\r\n                                                    <div class=\"uploaded-box\">\r\n                                                        <div class=\"uploaded-img\">\r\n                                                            <img src=\"assets/img/placeholder.jpg\" class=\"img-fluid\" alt=\"\">\r\n                                                        </div>\r\n                                                        <div class=\"uploaded-img-name\">\r\n                                                             demo.png\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card mb-0\">\r\n                                        <div class=\"card-body\">\r\n                                            <h5 class=\"card-title m-b-20\">Uploaded files</h5>\r\n                                            <ul class=\"files-list\">\r\n                                                <li>\r\n                                                    <div class=\"files-cont\">\r\n                                                        <div class=\"file-type\">\r\n                                                            <span class=\"files-icon\"><i class=\"far fa-file-pdf\"></i></span>\r\n                                                        </div>\r\n                                                        <div class=\"files-info\">\r\n                                                            <span class=\"file-name text-ellipsis\"><a>Ticket_document.xls</a></span>\r\n                                                            <span class=\"file-author\"><a>John Doe</a></span> <span class=\"file-date\">May 5th at 8:21 PM</span>\r\n                                                            <div class=\"file-size\">Size: 14.8Mb</div>\r\n                                                        </div>\r\n                                                        <ul class=\"files-action\">\r\n                                                            <li class=\"dropdown dropdown-action\">\r\n                                                                <a href=\"\" class=\"dropdown-toggle btn btn-link\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"material-icons\">more_horiz</i></a>\r\n                                                                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Download</a>\r\n                                                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#share_files\">Share</a>\r\n                                                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Delete</a>\r\n                                                                </div>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li>\r\n                                                    <div class=\"files-cont\">\r\n                                                        <div class=\"file-type\">\r\n                                                            <span class=\"files-icon\"><i class=\"far fa-file-pdf\"></i></span>\r\n                                                        </div>\r\n                                                        <div class=\"files-info\">\r\n                                                            <span class=\"file-name text-ellipsis\"><a>Issue_report.xls</a></span>\r\n                                                            <span class=\"file-author\"><a>John Doe</a></span> <span class=\"file-date\">May 5th at 5:41 PM</span>\r\n                                                            <div class=\"file-size\">Size: 14.8Mb</div>\r\n                                                        </div>\r\n                                                        <ul class=\"files-action\">\r\n                                                            <li class=\"dropdown dropdown-action\">\r\n                                                                <a href=\"\" class=\"dropdown-toggle btn btn-link\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"material-icons\">more_horiz</i></a>\r\n                                                                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Download</a>\r\n                                                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#share_files\">Share</a>\r\n                                                                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Delete</a>\r\n                                                                </div>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"notification-popup hide\">\r\n                                    <p>\r\n                                        <span class=\"task\"></span>\r\n                                        <span class=\"notification-text\"></span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 message-view task-chat-view ticket-chat-view\" id=\"task_window\">\r\n            <div class=\"chat-window\">\r\n                <div class=\"fixed-header\">\r\n                    <div class=\"navbar\">\r\n                        <div class=\"task-assign\">\r\n                            <span class=\"assign-title\">Assigned to </span> \r\n                            <a tooltip=\"John Doe\" class=\"avatar\">\r\n                                <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"\">\r\n                            </a>\r\n                            <a class=\"followers-add\" title=\"Add Assignee\" data-bs-toggle=\"modal\" data-bs-target=\"#assignee\"><i class=\"material-icons\">add</i></a>\r\n                        </div>\r\n                        <ul class=\"nav float-end custom-menu\">\r\n                            <li class=\"nav-item dropdown dropdown-action\">\r\n                                <a href=\"\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"material-icons\">more_vert</i></a>\r\n                                <div class=\"dropdown-menu\">\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_ticket\">Edit Ticket</a>\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_ticket\">Delete Ticket</a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"chat-contents task-chat-contents\">\r\n                    <div class=\"chat-content-wrap\">\r\n                        <div class=\"chat-wrap-inner\">\r\n                            <div class=\"chat-box\">\r\n                                <div class=\"chats\">\r\n                                    <div class=\"chat chat-left\">\r\n                                        <div class=\"chat-avatar\">\r\n                                            <a href=\"profile.html\" class=\"avatar\">\r\n                                                <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"\">\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"chat-body\">\r\n                                            <div class=\"chat-bubble\">\r\n                                                <div class=\"chat-content\">\r\n                                                    <span class=\"task-chat-user\">John Doe</span> <span class=\"chat-time\">8:35 am</span>\r\n                                                    <p>I'm just looking around.</p>\r\n                                                    <p>Will you tell me something about yourself? </p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"completed-task-msg\">\r\n                                        <span class=\"task-success\">\r\n                                            <a>John Doe</a> closed this ticket.\r\n                                        </span> \r\n                                        <span class=\"task-time\">Today at 9:27am</span>\r\n                                    </div>\r\n                                    <div class=\"chat chat-left\">\r\n                                        <div class=\"chat-avatar\">\r\n                                            <a href=\"profile.html\" class=\"avatar\">\r\n                                                <img src=\"assets/img/profiles/avatar-02.jpg\" alt=\"\">\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"chat-body\">\r\n                                            <div class=\"chat-bubble\">\r\n                                                <div class=\"chat-content\">\r\n                                                    <span class=\"task-chat-user\">John Doe</span> \r\n                                                    <span class=\"file-attached\">attached 3 files <i class=\"fa fa-paperclip\"></i></span> \r\n                                                    <span class=\"chat-time\">Feb 17, 2019 at 4:32am</span>\r\n                                                    <ul class=\"attach-list\">\r\n                                                        <li><i class=\"fa fa-file\"></i> <a>project_document.avi</a></li>\r\n                                                        <li><i class=\"fa fa-file\"></i> <a>video_conferencing.psd</a></li>\r\n                                                        <li><i class=\"fa fa-file\"></i> <a>landing_page.psd</a></li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat chat-left\">\r\n                                        <div class=\"chat-avatar\">\r\n                                            <a href=\"profile.html\" class=\"avatar\">\r\n                                                <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"chat-body\">\r\n                                            <div class=\"chat-bubble\">\r\n                                                <div class=\"chat-content\">\r\n                                                    <span class=\"task-chat-user\">Jeffery Lalor</span> \r\n                                                    <span class=\"file-attached\">attached file <i class=\"fa fa-paperclip\"></i></span> \r\n                                                    <span class=\"chat-time\">Yesterday at 9:16pm</span>\r\n                                                    <ul class=\"attach-list\">\r\n                                                        <li class=\"pdf-file\"><i class=\"far fa-file-pdf\"></i> <a>Document_2016.pdf</a></li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"chat chat-left\">\r\n                                        <div class=\"chat-avatar\">\r\n                                            <a href=\"profile.html\" class=\"avatar\">\r\n                                                <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"chat-body\">\r\n                                            <div class=\"chat-bubble\">\r\n                                                <div class=\"chat-content\">\r\n                                                    <span class=\"task-chat-user\">Jeffery Lalor</span> \r\n                                                    <span class=\"file-attached\">attached file <i class=\"fa fa-paperclip\"></i></span> \r\n                                                    <span class=\"chat-time\">Today at 12:42pm</span>\r\n                                                    <ul class=\"attach-list\">\r\n                                                        <li class=\"img-file\">\r\n                                                            <div class=\"attach-img-download\"><a>avatar-01.jpg</a></div>\r\n                                                            <div class=\"task-attach-img\"><img src=\"assets/img/user.jpg\" alt=\"\"></div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"task-information\">\r\n                                        <span class=\"task-info-line\">\r\n                                            <a class=\"task-user\">John Doe</a> \r\n                                            <span class=\"task-info-subject\">marked ticket as reopened</span>\r\n                                        </span>\r\n                                        <div class=\"task-time\">1:16pm</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"chat-footer\">\r\n                    <div class=\"message-bar\">\r\n                        <div class=\"message-inner\">\r\n                            <a class=\"link attach-icon\"><img src=\"assets/img/attachment.png\" alt=\"\"></a>\r\n                            <div class=\"message-area\">\r\n                                <div class=\"input-group\">\r\n                                    <textarea class=\"form-control\" placeholder=\"Type message...\"></textarea>\r\n                                    <button class=\"btn btn-primary\" type=\"button\"><i class=\"fas fa-paper-plane\"></i></button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"project-members task-followers\">\r\n                        <span class=\"followers-title\">Followers</span>\r\n                        <a tooltip=\"Richard Miles\" class=\"avatar\">\r\n                            <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                        </a>\r\n                        <a tooltip=\"John Smith\" class=\"avatar\">\r\n                            <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                        </a>\r\n                        <a tooltip=\"Mike Litorus\" class=\"avatar\">\r\n                            <img src=\"assets/img/profiles/avatar-05.jpg\" alt=\"\">\r\n                        </a>\r\n                        <a tooltip=\"Wilmer Deluna\" class=\"avatar\">\r\n                            <img src=\"assets/img/profiles/avatar-11.jpg\" alt=\"\">\r\n                        </a>\r\n                        <a class=\"followers-add\" data-bs-toggle=\"modal\" data-bs-target=\"#task_followers\"><i class=\"material-icons\">add</i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n                \r\n                <!-- Edit Ticket Modal -->\r\n                <div id=\"edit_ticket\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Edit Ticket</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <form>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Ticket Subject</label>\r\n                                                <input class=\"form-control\" type=\"text\" value=\"Laptop Issue\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Ticket Id</label>\r\n                                                <input class=\"form-control\" type=\"text\" readonly value=\"TKT-0001\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Assign Staff</label>\r\n                                                <select class=\"form-select\">\r\n                                                    <option>-</option>\r\n                                                    <option selected>Mike Litorus</option>\r\n                                                    <option>John Smith</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Client</label>\r\n                                                <select class=\"form-select\">\r\n                                                    <option>-</option>\r\n                                                    <option >Delta Infotech</option>\r\n                                                    <option selected>International Software Inc</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Priority</label>\r\n                                                <select class=\"form-select\">\r\n                                                    <option>High</option>\r\n                                                    <option selected>Medium</option>\r\n                                                    <option>Low</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>CC</label>\r\n                                                <input class=\"form-control\" type=\"text\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Assign</label>\r\n                                                <input type=\"text\" class=\"form-control\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Ticket Assignee</label>\r\n                                                <div class=\"project-members\">\r\n                                                    <a tooltip=\"John Smith\" >\r\n                                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Add Followers</label>\r\n                                                <input type=\"text\" class=\"form-control\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Ticket Followers</label>\r\n                                                <div class=\"project-members\">\r\n                                                    <a tooltip=\"Richard Miles\" class=\"avatar\">\r\n                                                        <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                                                    </a>\r\n                                                    <a tooltip=\"John Smith\" class=\"avatar\">\r\n                                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                                    </a>\r\n                                                    <a tooltip=\"Mike Litorus\" class=\"avatar\">\r\n                                                        <img src=\"assets/img/profiles/avatar-05.jpg\" alt=\"\">\r\n                                                    </a>\r\n                                                    <a tooltip=\"Wilmer Deluna\" class=\"avatar\">\r\n                                                        <img src=\"assets/img/profiles/avatar-11.jpg\" alt=\"\">\r\n                                                    </a>\r\n                                                    <span class=\"all-team\">+2</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Description</label>\r\n                                                <textarea class=\"form-control\" rows=\"4\"></textarea>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Upload Files</label>\r\n                                                <input class=\"form-control\" type=\"file\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"submit-section\">\r\n                                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Edit Ticket Modal -->\r\n                \r\n                <!-- Delete Ticket Modal -->\r\n                <div class=\"modal custom-modal fade\" id=\"delete_ticket\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"form-header\">\r\n                                    <h3>Delete Ticket</h3>\r\n                                    <p>Are you sure want to delete?</p>\r\n                                </div>\r\n                                <div class=\"modal-btn delete-action\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-primary continue-btn\">Delete</a>\r\n                                        </div>\r\n                                        <div class=\"col-6\">\r\n                                            <a href=\"javascript:void(0);\" data-bs-dismiss=\"modal\" class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Delete Ticket Modal -->\r\n                \r\n                <!-- Assignee Modal -->\r\n                <div id=\"assignee\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Assign to this task</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"input-group m-b-30\">\r\n                                    <input placeholder=\"Search to add\" class=\"form-control search-input\" type=\"text\">\r\n                                    <button class=\"btn btn-primary\">Search</button>\r\n                                </div>\r\n                                <div>\r\n                                    <ul class=\"chat-user-list\">\r\n                                        <li>\r\n                                            <a>\r\n                                                <div class=\"media d-flex\">\r\n                                                    <span class=\"avatar flex-shrink-0\">\r\n                                                        <img src=\"assets/img/profiles/avatar-09.jpg\" alt=\"\">\r\n                                                    </span>\r\n                                                    <div class=\"media-body align-self-center text-nowrap flex-grow-1\">\r\n                                                        <div class=\"user-name\">Richard Miles</div>\r\n                                                        <span class=\"designation\">Web Developer</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a>\r\n                                                <div class=\"media d-flex\">\r\n                                                    <span class=\"avatar flex-shrink-0\">\r\n                                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                                    </span>\r\n                                                    <div class=\"media-body align-self-center text-nowrap flex-grow-1\">\r\n                                                        <div class=\"user-name\">John Smith</div>\r\n                                                        <span class=\"designation\">Android Developer</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a>\r\n                                                <div class=\"media d-flex\">\r\n                                                    <span class=\"avatar flex-shrink-0\">\r\n                                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                                    </span>\r\n                                                    <div class=\"media-body align-self-center text-nowrap flex-grow-1\">\r\n                                                        <div class=\"user-name\">Jeffery Lalor</div>\r\n                                                        <span class=\"designation\">Team Leader</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"submit-section\">\r\n                                    <button class=\"btn btn-primary submit-btn\">Assign</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Assignee Modal -->\r\n                \r\n                <!-- Task Followers Modal -->\r\n                <div id=\"task_followers\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Add followers to this task</h5>\r\n                                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"input-group m-b-30\">\r\n                                    <input placeholder=\"Search to add\" class=\"form-control search-input\" type=\"text\">\r\n                                    <button class=\"btn btn-primary\">Search</button>\r\n                                </div>\r\n                                <div>\r\n                                    <ul class=\"chat-user-list\">\r\n                                        <li>\r\n                                            <a>\r\n                                                <div class=\"media d-flex\">\r\n                                                    <span class=\"avatar flex-shrink-0\">\r\n                                                        <img src=\"assets/img/profiles/avatar-10.jpg\" alt=\"\">\r\n                                                    </span>\r\n                                                    <div class=\"media-body media-middle text-nowrap flex-grow-1\">\r\n                                                        <div class=\"user-name\">Jeffery Lalor</div>\r\n                                                        <span class=\"designation\">Team Leader</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a>\r\n                                                <div class=\"media d-flex\">\r\n                                                    <span class=\"avatar flex-shrink-0\">\r\n                                                        <img src=\"assets/img/profiles/avatar-08.jpg\" alt=\"\">\r\n                                                    </span>\r\n                                                    <div class=\"media-body media-middle text-nowrap flex-grow-1\">\r\n                                                        <div class=\"user-name\">Catherine Manseau</div>\r\n                                                        <span class=\"designation\">Android Developer</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a>\r\n                                                <div class=\"media d-flex\">\r\n                                                    <span class=\"avatar flex-shrink-0\">\r\n                                                        <img src=\"assets/img/profiles/avatar-11.jpg\" alt=\"\">\r\n                                                    </span>\r\n                                                    <div class=\"media-body media-middle text-nowrap flex-grow-1\">\r\n                                                        <div class=\"user-name\">Wilmer Deluna</div>\r\n                                                        <span class=\"designation\">Team Leader</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"submit-section\">\r\n                                    <button class=\"btn btn-primary submit-btn\">Add to Follow</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Task Followers Modal -->\r\n                \r\n           ";

/***/ }),

/***/ 10498:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/tickets/tickets.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_tickets_tickets_module_ts.js.map