"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_settings_settings_module_ts"],{

/***/ 91197:
/*!*********************************************************************!*\
  !*** ./src/app/all-modules/settings/approval/approval.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalComponent": () => (/* binding */ ApprovalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _approval_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval.component.html?ngResource */ 34203);
/* harmony import */ var _approval_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval.component.css?ngResource */ 19244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ApprovalComponent = class ApprovalComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApprovalComponent.ctorParameters = () => [];
ApprovalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-approval',
        template: _approval_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_approval_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ApprovalComponent);



/***/ }),

/***/ 10409:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/settings/change-password/change-password.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 65617);
/* harmony import */ var _change_password_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.css?ngResource */ 64012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.changePassword = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    submitChangePassword() {
        if (this.changePassword.valid) {
            this.toastr.success("Password is changed", 'Success');
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-change-password',
        template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordComponent);



/***/ }),

/***/ 1557:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/settings/company-settings/company-settings.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanySettingsComponent": () => (/* binding */ CompanySettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _company_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-settings.component.html?ngResource */ 379);
/* harmony import */ var _company_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-settings.component.css?ngResource */ 82004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let CompanySettingsComponent = class CompanySettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.companySettings = this.formBuilder.group({
            companyName: ["Delta Technoligies", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            contactPerson: ["Mclaren", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            address: ["Penning street", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            country: ["USA", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            city: ["Nyanose", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ["Alabama", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            postalCode: ["845321", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ["mclaren@deltatechnoligies.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            phoneNumber: ["071-654124", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            mobileNumber: ["8547522541", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            fax: ["012-456213", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            website: ["www.deltatechnoligies.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    submitCompany() {
        if (this.companySettings.valid) {
            this.toastr.success("Company Settings is added", "Success");
        }
    }
};
CompanySettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
CompanySettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-company-settings",
        template: _company_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_company_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompanySettingsComponent);



/***/ }),

/***/ 8748:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/settings/cron/cron.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CronComponent": () => (/* binding */ CronComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cron_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cron.component.html?ngResource */ 29030);
/* harmony import */ var _cron_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cron.component.css?ngResource */ 31890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CronComponent = class CronComponent {
    constructor() { }
    ngOnInit() {
    }
};
CronComponent.ctorParameters = () => [];
CronComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cron',
        template: _cron_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cron_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CronComponent);



/***/ }),

/***/ 4913:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/settings/email-settings/email-settings.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSettingsComponent": () => (/* binding */ EmailSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _email_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-settings.component.html?ngResource */ 31333);
/* harmony import */ var _email_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-settings.component.css?ngResource */ 1877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let EmailSettingsComponent = class EmailSettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.emailSettings = this.formBuilder.group({
            phpMail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            emailName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtpHost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtpUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtpPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtpPort: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtpSecurity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            smtpAuthentication: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    submitEmailSettings() {
        if (this.emailSettings.valid) {
            this.toastr.success("Email settings is added", 'Success');
        }
    }
};
EmailSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
EmailSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-email-settings',
        template: _email_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_email_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailSettingsComponent);



/***/ }),

/***/ 83888:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/settings/invoice-settings/invoice-settings.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceSettingsComponent": () => (/* binding */ InvoiceSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invoice_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-settings.component.html?ngResource */ 81293);
/* harmony import */ var _invoice_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-settings.component.css?ngResource */ 60676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let InvoiceSettingsComponent = class InvoiceSettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.invoiceSettings = this.formBuilder.group({
            invoicePrefix: ["INV", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            invoiceLogo: [""],
        });
    }
    submitInvoiceSettings() {
        if (this.invoiceSettings.valid) {
            this.toastr.success("Invoice settings is added", "Success");
        }
    }
};
InvoiceSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
InvoiceSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-invoice-settings",
        template: _invoice_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invoice_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvoiceSettingsComponent);



/***/ }),

/***/ 49857:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave-type/leave-type.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveTypeComponent": () => (/* binding */ LeaveTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _leave_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-type.component.html?ngResource */ 17075);
/* harmony import */ var _leave_type_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-type.component.css?ngResource */ 59965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let LeaveTypeComponent = class LeaveTypeComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.url = "leaveType";
        this.allLeaveType = [];
    }
    ngOnInit() {
        this.getLeaveType();
        // for data table configuration
        this.dtOptions = {
            // ... skipped ...
            pageLength: 10,
            dom: "lrtip",
        };
        // Add Provident Form Validation And Getting Values
        this.addLeaveType = this.formBuilder.group({
            addLeaveType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editLeaveType = this.formBuilder.group({
            editLeave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editLeaveDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    getLeaveType() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allLeaveType = data;
            this.dtTrigger.next();
        });
    }
    // Add Provident Modal Api Call
    addLeave() {
        if (this.addLeaveType.valid) {
            let obj = {
                leaveType: this.addLeaveType.value.addLeaveType,
                leaveDays: this.addLeaveType.value.addLeaveDays,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
            });
            this.getLeaveType();
            $("#add_leavetype").modal("hide");
            this.addLeaveType.reset();
            this.toastr.success("Leave type is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editLeave() {
        let obj = {
            leaveType: this.editLeaveType.value.editLeave,
            leaveDays: this.editLeaveType.value.editLeaveDays,
            id: this.editId,
        };
        this.allModuleService.update(obj, this.url).subscribe((data1) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
        });
        this.getLeaveType();
        $("#edit_leavetype").modal("hide");
        this.toastr.success("Leave type is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allLeaveType.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allLeaveType[index];
        this.editLeaveType.setValue({
            editLeave: toSetValues.leaveType,
            editLeaveDays: toSetValues.leaveDays,
        });
    }
    // Delete Provident Modal Api Call
    deleteLeave() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.getLeaveType();
            $("#delete_leavetype").modal("hide");
            this.toastr.success("Leave type is deleted", "Success");
        });
    }
    // for unsubscribe datatable
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
LeaveTypeComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
LeaveTypeComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
LeaveTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-leave-type",
        template: _leave_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leave_type_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeaveTypeComponent);



/***/ }),

/***/ 77478:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/settings/localization/localization.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationComponent": () => (/* binding */ LocalizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _localization_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization.component.html?ngResource */ 35133);
/* harmony import */ var _localization_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization.component.css?ngResource */ 81648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let LocalizationComponent = class LocalizationComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.localisation = this.formBuilder.group({
            defaultCountry: ["USA", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            dateFormat: ["15/05/2016", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            timeZone: ["(UTC +5:30) Antarctica/Palmer", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            deafultLanguage: ["English", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            currencyCode: ["USD", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    submitLocalisation() {
        if (this.localisation.valid) {
            this.toastr.success("Localisation is added", "Success");
        }
    }
};
LocalizationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
LocalizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-localization",
        template: _localization_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_localization_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocalizationComponent);



/***/ }),

/***/ 36792:
/*!*******************************************************************************!*\
  !*** ./src/app/all-modules/settings/notifications/notifications.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component.html?ngResource */ 70890);
/* harmony import */ var _notifications_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.css?ngResource */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NotificationsComponent = class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsComponent.ctorParameters = () => [];
NotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notifications',
        template: _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsComponent);



/***/ }),

/***/ 58321:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/settings/performance/performance.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerformanceComponent": () => (/* binding */ PerformanceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _performance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance.component.html?ngResource */ 44984);
/* harmony import */ var _performance_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance.component.css?ngResource */ 40076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PerformanceComponent = class PerformanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
PerformanceComponent.ctorParameters = () => [];
PerformanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-performance',
        template: _performance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_performance_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerformanceComponent);



/***/ }),

/***/ 38239:
/*!*************************************************************!*\
  !*** ./src/app/all-modules/settings/role/role.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleComponent": () => (/* binding */ RoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.component.html?ngResource */ 68132);
/* harmony import */ var _role_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.component.css?ngResource */ 60601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);







let RoleComponent = class RoleComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.url = "roles";
        this.allroles = [];
    }
    ngOnInit() {
        this.getRoles();
        // Add Provident Form Validation And Getting Values
        this.addRoles = this.formBuilder.group({
            addRoleName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editRoles = this.formBuilder.group({
            editRoleName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    getRoles() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allroles = data;
        });
    }
    // Add Provident Modal Api Call
    addRolesSubmit() {
        if (this.addRoles.valid) {
            let obj = { roleName: this.addRoles.value.addRoleName };
            this.allModuleService.add(obj, this.url).subscribe((data) => { });
            this.getRoles();
            $("#add_role").modal("hide");
            this.addRoles.reset();
            this.toastr.success("Roles is added", "Success");
        }
    }
    // Edit Provident Modal Api Call
    editRolesSubmit() {
        let obj = { roleName: this.editRoles.value.editRoleName, id: this.editId };
        this.allModuleService.update(obj, this.url).subscribe((data1) => { });
        this.getRoles();
        $("#edit_role").modal("hide");
        this.toastr.success("Roles is edited", "Success");
    }
    edit(value) {
        this.editId = value;
        const index = this.allroles.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allroles[index];
        this.editRoles.setValue({
            editRoleName: toSetValues.roleName,
        });
    }
    // Delete Provident Modal Api Call
    deleteRoles() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            this.getRoles();
            $("#delete_role").modal("hide");
            this.toastr.success("Roles is deleted", "Success");
        });
    }
};
RoleComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService }
];
RoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-role",
        template: _role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_role_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RoleComponent);



/***/ }),

/***/ 48201:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/settings/salary-settings/salary-settings.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalarySettingsComponent": () => (/* binding */ SalarySettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _salary_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salary-settings.component.html?ngResource */ 20260);
/* harmony import */ var _salary_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salary-settings.component.css?ngResource */ 16307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let SalarySettingsComponent = class SalarySettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.salarySettings = this.formBuilder.group({
            da: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            hra: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            employeeShare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            organisationShare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            esiEmployeeShare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            esiOrganisationShare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            annualSalaryFrom1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            annualSalaryTo1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            annualpercentage1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            annualSalaryFrom2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            annualSalaryTo2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            annualpercentage2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    submitSalarySettings() {
        if (this.salarySettings.valid) {
            this.toastr.success("Salary settings is added", 'Success');
        }
    }
};
SalarySettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
SalarySettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-salary-settings',
        template: _salary_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_salary_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalarySettingsComponent);



/***/ }),

/***/ 27978:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/settings/settings-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ 49076);
/* harmony import */ var _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-settings/company-settings.component */ 1557);
/* harmony import */ var _localization_localization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localization/localization.component */ 77478);
/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ 64030);
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role/role.component */ 38239);
/* harmony import */ var _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-settings/email-settings.component */ 4913);
/* harmony import */ var _invoice_settings_invoice_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice-settings/invoice-settings.component */ 83888);
/* harmony import */ var _salary_settings_salary_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salary-settings/salary-settings.component */ 48201);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.component */ 36792);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password/change-password.component */ 10409);
/* harmony import */ var _leave_type_leave_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leave-type/leave-type.component */ 49857);
/* harmony import */ var _tokbox_tokbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tokbox/tokbox.component */ 27238);
/* harmony import */ var _cron_cron_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cron/cron.component */ 8748);
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./performance/performance.component */ 58321);
/* harmony import */ var _approval_approval_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./approval/approval.component */ 91197);


















const routes = [
    {
        path: "",
        component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent,
        children: [
            {
                path: "company-settings",
                component: _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_1__.CompanySettingsComponent
            },
            {
                path: "localization",
                component: _localization_localization_component__WEBPACK_IMPORTED_MODULE_2__.LocalizationComponent
            },
            {
                path: "theme-settings",
                component: _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_3__.ThemeSettingsComponent
            },
            {
                path: "role",
                component: _role_role_component__WEBPACK_IMPORTED_MODULE_4__.RoleComponent
            },
            {
                path: "email-settings",
                component: _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_5__.EmailSettingsComponent
            },
            {
                path: "invoice-settings",
                component: _invoice_settings_invoice_settings_component__WEBPACK_IMPORTED_MODULE_6__.InvoiceSettingsComponent
            },
            {
                path: "salary-settings",
                component: _salary_settings_salary_settings_component__WEBPACK_IMPORTED_MODULE_7__.SalarySettingsComponent
            },
            {
                path: "notifications",
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsComponent
            },
            {
                path: "change-password",
                component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__.ChangePasswordComponent
            },
            {
                path: "leave-type",
                component: _leave_type_leave_type_component__WEBPACK_IMPORTED_MODULE_10__.LeaveTypeComponent
            },
            {
                path: "tokbox-settings",
                component: _tokbox_tokbox_component__WEBPACK_IMPORTED_MODULE_11__.TokboxComponent
            },
            {
                path: "cron-settings",
                component: _cron_cron_component__WEBPACK_IMPORTED_MODULE_12__.CronComponent
            },
            {
                path: "performance-settings",
                component: _performance_performance_component__WEBPACK_IMPORTED_MODULE_13__.PerformanceComponent
            },
            {
                path: "approval-settings",
                component: _approval_approval_component__WEBPACK_IMPORTED_MODULE_14__.ApprovalComponent
            }
        ]
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
    })
], SettingsRoutingModule);



/***/ }),

/***/ 49076:
/*!************************************************************!*\
  !*** ./src/app/all-modules/settings/settings.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 2858);
/* harmony import */ var _settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.css?ngResource */ 9296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let SettingsComponent = class SettingsComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.urlComplete = {
            mainUrl: "",
            subUrl: "",
            childUrl: "",
        };
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                const url = event.url.split("/");
                this.urlComplete.mainUrl = url[2];
                this.urlComplete.subUrl = url[3];
                this.urlComplete.childUrl = url[4];
            }
        });
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
    ngOnInit() { }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + "px";
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-settings",
        template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener)("window: resize", ["$event"])
], SettingsComponent);



/***/ }),

/***/ 17247:
/*!*********************************************************!*\
  !*** ./src/app/all-modules/settings/settings.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 27978);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ 49076);
/* harmony import */ var _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-settings/company-settings.component */ 1557);
/* harmony import */ var _localization_localization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localization/localization.component */ 77478);
/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ 64030);
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role/role.component */ 38239);
/* harmony import */ var _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-settings/email-settings.component */ 4913);
/* harmony import */ var _invoice_settings_invoice_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice-settings/invoice-settings.component */ 83888);
/* harmony import */ var _salary_settings_salary_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salary-settings/salary-settings.component */ 48201);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notifications.component */ 36792);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ 10409);
/* harmony import */ var _leave_type_leave_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leave-type/leave-type.component */ 49857);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tokbox_tokbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tokbox/tokbox.component */ 27238);
/* harmony import */ var _cron_cron_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cron/cron.component */ 8748);
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./performance/performance.component */ 58321);
/* harmony import */ var _approval_approval_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./approval/approval.component */ 91197);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ 59304);






















let SettingsModule = class SettingsModule {
};
SettingsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent, _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_2__.CompanySettingsComponent, _localization_localization_component__WEBPACK_IMPORTED_MODULE_3__.LocalizationComponent, _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_4__.ThemeSettingsComponent, _role_role_component__WEBPACK_IMPORTED_MODULE_5__.RoleComponent, _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_6__.EmailSettingsComponent, _invoice_settings_invoice_settings_component__WEBPACK_IMPORTED_MODULE_7__.InvoiceSettingsComponent, _salary_settings_salary_settings_component__WEBPACK_IMPORTED_MODULE_8__.SalarySettingsComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__.NotificationsComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__.ChangePasswordComponent, _leave_type_leave_type_component__WEBPACK_IMPORTED_MODULE_11__.LeaveTypeComponent, _tokbox_tokbox_component__WEBPACK_IMPORTED_MODULE_13__.TokboxComponent, _cron_cron_component__WEBPACK_IMPORTED_MODULE_14__.CronComponent, _performance_performance_component__WEBPACK_IMPORTED_MODULE_15__.PerformanceComponent, _approval_approval_component__WEBPACK_IMPORTED_MODULE_16__.ApprovalComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_12__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__.TooltipModule.forRoot()
        ]
    })
], SettingsModule);



/***/ }),

/***/ 64030:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/settings/theme-settings/theme-settings.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSettingsComponent": () => (/* binding */ ThemeSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _theme_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-settings.component.html?ngResource */ 24516);
/* harmony import */ var _theme_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-settings.component.css?ngResource */ 28818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let ThemeSettingsComponent = class ThemeSettingsComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.themeSettings = this.formBuilder.group({
            websiteName: ["Dreamguy's Technologies", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lightLogo: [""],
            favicon: [""],
        });
    }
    submitThemeSettings() {
        if (this.themeSettings.valid) {
            this.toastr.success("Theme settings is added", "Success");
        }
    }
};
ThemeSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
ThemeSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-theme-settings",
        template: _theme_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_theme_settings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThemeSettingsComponent);



/***/ }),

/***/ 27238:
/*!*****************************************************************!*\
  !*** ./src/app/all-modules/settings/tokbox/tokbox.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokboxComponent": () => (/* binding */ TokboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tokbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokbox.component.html?ngResource */ 50578);
/* harmony import */ var _tokbox_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokbox.component.css?ngResource */ 68256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TokboxComponent = class TokboxComponent {
    constructor() { }
    ngOnInit() {
    }
};
TokboxComponent.ctorParameters = () => [];
TokboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tokbox',
        template: _tokbox_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tokbox_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TokboxComponent);



/***/ }),

/***/ 19244:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/settings/approval/approval.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 64012:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/change-password/change-password.component.css?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 82004:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/company-settings/company-settings.component.css?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 31890:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/settings/cron/cron.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9uLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 1877:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/email-settings/email-settings.component.css?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 60676:
/*!*************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/invoice-settings/invoice-settings.component.css?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 59965:
/*!*************************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave-type/leave-type.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZS10eXBlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 81648:
/*!*****************************************************************************************!*\
  !*** ./src/app/all-modules/settings/localization/localization.component.css?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbGl6YXRpb24uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 6647:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/settings/notifications/notifications.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 40076:
/*!***************************************************************************************!*\
  !*** ./src/app/all-modules/settings/performance/performance.component.css?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmb3JtYW5jZS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 60601:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/settings/role/role.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 16307:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/salary-settings/salary-settings.component.css?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxhcnktc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 9296:
/*!************************************************************************!*\
  !*** ./src/app/all-modules/settings/settings.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 28818:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/theme-settings/theme-settings.component.css?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGVtZS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 68256:
/*!*****************************************************************************!*\
  !*** ./src/app/all-modules/settings/tokbox/tokbox.component.css?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2tib3guY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 34203:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/settings/approval/approval.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card p-4\">\r\n    <!-- Nav tabs -->\r\n    <ul class=\"nav nav-tabs nav-tabs-bottom\" id=\"myTab\" role=\"tablist\">\r\n        <li class=\"nav-item\" role=\"presentation\">\r\n            <a class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">\r\n            Expenses Approval\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\" role=\"presentation\">\r\n            <a class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Leave Approval</a>\r\n        </li>\r\n        <li class=\"nav-item\" role=\"presentation\">\r\n            <a class=\"nav-link\" id=\"messages-tab\" data-bs-toggle=\"tab\" href=\"#messages\" role=\"tab\" aria-controls=\"messages\" aria-selected=\"false\">Offer Approval</a>\r\n        </li>\r\n        <li class=\"nav-item\" role=\"presentation\">\r\n            <a class=\"nav-link\" id=\"settings-tab\" data-bs-toggle=\"tab\" href=\"#settings\" role=\"tab\" aria-controls=\"settings\" aria-selected=\"false\">Resignation Notice</a>\r\n        </li>\r\n    </ul>\r\n    <!-- /Nav tabs -->\r\n\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content mt-3\">\r\n        <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n            <h4>Expense Approval Settings</h4>\r\n            <div class=\"form-group form-row row\">\r\n                <label class=\"control-label col-md-12\">Default Expense Approval</label>\r\n                <div class=\"col-md-12 approval-option\">\r\n                    <label class=\"radio-inline\">\r\n                    <input id=\"radio-single1\" class=\"me-2 default_expense_approval\" value=\"seq-approver\" checked=\"\" name=\"default_expense_approval\" type=\"radio\">Sequence Approval (Chain) <sup> <span class=\"badge info-badge\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span></sup>\r\n                    </label>\r\n                    <label class=\"radio-inline ms-2\">\r\n                    <input id=\"radio-multiple3\" class=\"me-2 default_expense_approval\" value=\"sim-approver\" name=\"default_expense_approval\" type=\"radio\">Simultaneous Approval <sup><span class=\"badge info-badge\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span></sup>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group  form-row row approver seq-approver mb-0\" style=\"display: block;\">\r\n                <label class=\"control-label col-sm-3\">Expense Approvers</label>\r\n                <div class=\"col-sm-9 \">\r\n                    <label class=\"ex_exp_approvers_1 control-label mb-2 exp_appr\" style=\"padding-left:0\">Approver 1</label>\r\n                    <div class=\"row ex_exp_approvers_1 form-group\">\r\n                        <div class=\"col-md-6\">\r\n                            <select class=\"form-select form-control expense_approvers\" style=\"width:260px\" name=\"expense_approvers[]\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                                <option value=\"\">Select Approvers</option>\r\n                                <option value=\"1\">CEO</option>\r\n                                <option value=\"9\">Direct Manager</option>\r\n                                <option value=\"11\">Development Manager \r\n                                </option>\r\n                                <option value=\"6\">Finance</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <label class=\"ex_exp_approvers_2 control-label mb-2 exp_appr\" style=\"padding-left:0\">Approver 2</label>\r\n                    <div class=\"row ex_exp_approvers_2 form-group\">\r\n                        <div class=\"col-md-6\">\r\n                            <select class=\"form-select form-control expense_approvers\" style=\"width:260px\" name=\"expense_approvers[]\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                                <option value=\"\">Select Approvers</option>\r\n                                <option value=\"1\">CEO</option>\r\n                                <option value=\"9\">Direct Manager</option>\r\n                                <option value=\"11\">Development Manager \r\n                                </option>\r\n                                <option value=\"6\">Finance</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-md-2\"><a class=\"remove_ex_exp_approver btn rounded border text-danger\" data-id=\"2\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\r\n                    </div>\r\n                    <label class=\"ex_exp_approvers_3 control-label m-b-10 exp_appr\" style=\"padding-left:0\">Approver 3</label>\r\n                    <div class=\"row ex_exp_approvers_3 form-group mb-0\">\r\n                        <div class=\"col-md-6\">\r\n                            <select class=\"form-select form-control expense_approvers\" style=\"width:260px\" name=\"expense_approvers[]\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                                <option value=\"\">Select Approvers</option>\r\n                                <option value=\"1\">CEO</option>\r\n                                <option value=\"9\">Direct Manager</option>\r\n                                <option value=\"11\">Development Manager \r\n                                </option>\r\n                                <option value=\"6\">Finance</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-md-2\"><a class=\"remove_ex_exp_approver btn rounded border text-danger\" data-id=\"3\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-9 col-md-offset-3 m-t-10\">\r\n                        <a id=\"add_expense_approvers\" href=\"javascript:void(0)\" class=\"add-more\">+ Add Approver</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-t-30\">\r\n                    <div class=\"col-md-12 submit-section ps-0\">\r\n                        <button id=\"expense_approval_set_btn\" type=\"submit\" class=\"btn btn-primary submit-btn\">Save Changes</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"control-label col-md-12\">Default Leave Approval</label>\r\n                <div class=\"col-md-12 approval-option\">\r\n                    <label class=\"radio-inline\">\r\n                    <input id=\"radio-single\" class=\"me-2 default_offer_approval\" value=\"seq-approver\" name=\"default_leave_approval\" type=\"radio\">Sequence Approval (Chain) <sup> <span class=\"badge info-badge\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span></sup>\r\n                    </label>\r\n                    <label class=\"radio-inline ms-2\">\r\n                    <input id=\"radio-multiple1\" class=\"me-2 default_offer_approval\" value=\"sim-approver\" checked=\"\" name=\"default_leave_approval\" type=\"radio\">Simultaneous Approval <sup><span class=\"badge info-badge\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span></sup>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group form-row row\">\r\n                <label class=\"control-label col-sm-12\">leave Approvers</label>\r\n                <div class=\"col-sm-6\">\r\n                    <label class=\"control-label\" style=\"margin-bottom:10px;padding-left:0\">Simultaneous Approval </label>\r\n                    <select class=\"form-select form-control\" multiple>\r\n                        <option>Select</option>\r\n                        <option>Test Lead</option>\r\n                        <option>UI/UX Designer</option>\r\n                        <option>Sox Analyst</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"m-t-30 row \">\r\n                <div class=\"col-md-12 submit-section\">\r\n                    <button id=\"leave_approval_set_btn\" type=\"submit\" class=\"btn btn-primary submit-btn\">Save Changes</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"messages\" role=\"tabpanel\" aria-labelledby=\"messages-tab\">\r\n            <form>\r\n                <h4>Offer Approval Settings</h4>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label col-md-12\">Default Offer Approval</label>\r\n                    <div class=\"col-md-12 approval-option\">\r\n                        <label class=\"radio-inline\">\r\n                        <input id=\"radio-single2\" class=\"me-2 default_offer_approval\" value=\"seq-approver\" name=\"default_offer_approval\" type=\"radio\">Sequence Approval (Chain) <sup> <span class=\"badge info-badge\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span></sup>\r\n                        </label>\r\n                        <label class=\"radio-inline ms-2\">\r\n                        <input id=\"radio-multiple2\" class=\"me-2 default_offer_approval\" value=\"sim-approver\" checked=\"\" name=\"default_offer_approval\" type=\"radio\">Simultaneous Approval <sup><span class=\"badge info-badge\"><i class=\"fa fa-info\" aria-hidden=\"true\"></i></span></sup>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-t-30\">\r\n                    <div class=\"col-md-12 submit-section ps-0\">\r\n                        <button id=\"offer_approval_set_btn\" type=\"submit\" class=\"btn btn-primary submit-btn\">Save Changes</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"settings\" role=\"tabpanel\" aria-labelledby=\"settings-tab\">\r\n            <form >\r\n                <h3>Resignation Notice</h3>\r\n                <div class=\"form-group form-row row\">\r\n                    <label class=\"col-sm-12\">Email Notification <span class=\"text-danger\">*</span></label>\r\n                    <div class=\"col-sm-6\">\r\n                        <label class=\"control-label\">Simultaneous Approval </label>\r\n                        <select class=\"form-select form-control\" multiple>\r\n                            <option>Select</option>\r\n                            <option>Test Lead</option>\r\n                            <option>UI/UX Designer</option>\r\n                            <option>Sox Analyst</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group form-row row\">\r\n                    <label class=\"col-md-12\">Notice Days <span class=\"text-danger\">*</span></label>\r\n                    <div class=\"col-md-6 approval-option\">\r\n                        <input type=\"number\" name=\"notice_days\" class=\"form-control notice_days\" value=\"15\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-t-30\">\r\n                    <div class=\"col-md-12 submit-section ps-0\">\r\n                        <button id=\"resignation_notice_set_btn\" type=\"submit\" class=\"btn btn-primary submit-btn\">Save Changes</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!-- /Tab panes -->\r\n</div>";

/***/ }),

/***/ 65617:
/*!************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/change-password/change-password.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n\r\n            <form (ngSubmit)=\"submitChangePassword()\" [formGroup]=\"changePassword\">\r\n                <div class=\"form-group\">\r\n                    <label>Old password</label>\r\n                    <input type=\"password\" class=\"form-control\" [class.invalid]=\"changePassword.get('oldPassword').invalid && changePassword.get('oldPassword').touched\"\r\n                    formControlName=\"oldPassword\">\r\n                    <div\r\n                    *ngIf=\"changePassword.get('oldPassword').invalid && changePassword.get('oldPassword').touched\">\r\n                    <small\r\n                        *ngIf=\"changePassword.get('oldPassword').invalid && changePassword.get('oldPassword').touched\"\r\n                        class=\"text-danger\"> *Old password is required</small>\r\n                </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>New password</label>\r\n                    <input type=\"password\" class=\"form-control\" [class.invalid]=\"changePassword.get('newPassword').invalid && changePassword.get('newPassword').touched\"\r\n                    formControlName=\"newPassword\">\r\n                    <div\r\n                    *ngIf=\"changePassword.get('newPassword').invalid && changePassword.get('newPassword').touched\">\r\n                    <small\r\n                        *ngIf=\"changePassword.get('newPassword').invalid && changePassword.get('newPassword').touched\"\r\n                        class=\"text-danger\"> *New password is required</small>\r\n                </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Confirm password</label>\r\n                    <input type=\"password\" class=\"form-control\" [class.invalid]=\"changePassword.get('confirmPassword').invalid && changePassword.get('confirmPassword').touched\"\r\n                    formControlName=\"confirmPassword\">\r\n                    <div\r\n                    *ngIf=\"changePassword.get('confirmPassword').invalid && changePassword.get('confirmPassword').touched\">\r\n                    <small\r\n                        *ngIf=\"changePassword.get('confirmPassword').invalid && changePassword.get('confirmPassword').touched\"\r\n                        class=\"text-danger\"> *Confirm password is required</small>\r\n                </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Update Password</button>\r\n                </div>\r\n            </form>\r\n        \r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 379:
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/company-settings/company-settings.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n\r\n            <form (ngSubmit)=\"submitCompany()\" [formGroup]=\"companySettings\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Company Name <span class=\"text-danger\">*</span></label>\r\n                            <input class=\"form-control\" type=\"text\" value=\"Dreamguy's Technologies\"\r\n                                [class.invalid]=\"companySettings.get('companyName').invalid && companySettings.get('companyName').touched\"\r\n                                formControlName=\"companyName\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('companyName').invalid && companySettings.get('companyName').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('companyName').invalid && companySettings.get('companyName').touched\"\r\n                                    class=\"text-danger\"> *Company name is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Contact Person</label>\r\n                            <input class=\"form-control \" value=\"Daniel Porter\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('contactPerson').invalid && companySettings.get('contactPerson').touched\"\r\n                                formControlName=\"contactPerson\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('contactPerson').invalid && companySettings.get('contactPerson').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('contactPerson').invalid && companySettings.get('contactPerson').touched\"\r\n                                    class=\"text-danger\"> *Contact person is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Address</label>\r\n                            <input class=\"form-control \" value=\"3864 Quiet Valley Lane, Sherman Oaks, CA, 91403\"\r\n                                type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('address').invalid && companySettings.get('address').touched\"\r\n                                formControlName=\"address\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('address').invalid && companySettings.get('address').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('address').invalid && companySettings.get('address').touched\"\r\n                                    class=\"text-danger\"> *Address is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Country</label>\r\n                            <select class=\"form-select form-control\"\r\n                                [class.invalid]=\"companySettings.get('country').invalid && companySettings.get('country').touched\"\r\n                                formControlName=\"country\">\r\n                                <option value=\"USA\">USA</option>\r\n                                <option value=\"United Kingdom\">United Kingdom</option>\r\n                            </select>\r\n                            <div\r\n                                *ngIf=\"companySettings.get('country').invalid && companySettings.get('country').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('country').invalid && companySettings.get('country').touched\"\r\n                                    class=\"text-danger\"> *Country is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>City</label>\r\n                            <input class=\"form-control\" value=\"Sherman Oaks\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('city').invalid && companySettings.get('city').touched\"\r\n                                formControlName=\"city\">\r\n                            <div *ngIf=\"companySettings.get('city').invalid && companySettings.get('city').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('city').invalid && companySettings.get('city').touched\"\r\n                                    class=\"text-danger\"> *City is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>State/Province</label>\r\n                            <select class=\"form-select form-control\"\r\n                                [class.invalid]=\"companySettings.get('state').invalid && companySettings.get('state').touched\"\r\n                                formControlName=\"state\">\r\n                                <option value=\"California\">California</option>\r\n                                <option value=\"Alaska\">Alaska</option>\r\n                                <option value=\"Alabama\">Alabama</option>\r\n                            </select>\r\n                            <div *ngIf=\"companySettings.get('state').invalid && companySettings.get('state').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('state').invalid && companySettings.get('state').touched\"\r\n                                    class=\"text-danger\"> *State is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <label>Postal Code</label>\r\n                            <input class=\"form-control\" value=\"91403\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('postalCode').invalid && companySettings.get('postalCode').touched\"\r\n                                formControlName=\"postalCode\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('postalCode').invalid && companySettings.get('postalCode').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('postalCode').invalid && companySettings.get('postalCode').touched\"\r\n                                    class=\"text-danger\"> *Postal code is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" value=\"danielporter@example.com\" type=\"email\"\r\n                                [class.invalid]=\"companySettings.get('email').invalid && companySettings.get('email').touched\"\r\n                                formControlName=\"email\">\r\n                            <div *ngIf=\"companySettings.get('email').invalid && companySettings.get('email').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('email').invalid && companySettings.get('email').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Phone Number</label>\r\n                            <input class=\"form-control\" value=\"818-978-7102\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('phoneNumber').invalid && companySettings.get('phoneNumber').touched\"\r\n                                formControlName=\"phoneNumber\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('phoneNumber').invalid && companySettings.get('phoneNumber').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('phoneNumber').invalid && companySettings.get('phoneNumber').touched\"\r\n                                    class=\"text-danger\"> *Phone number is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Mobile Number</label>\r\n                            <input class=\"form-control\" value=\"818-635-5579\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('mobileNumber').invalid && companySettings.get('mobileNumber').touched\"\r\n                                formControlName=\"mobileNumber\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('mobileNumber').invalid && companySettings.get('mobileNumber').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('mobileNumber').invalid && companySettings.get('mobileNumber').touched\"\r\n                                    class=\"text-danger\"> *Mobile number is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Fax</label>\r\n                            <input class=\"form-control\" value=\"818-978-7102\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('fax').invalid && companySettings.get('fax').touched\"\r\n                                formControlName=\"fax\">\r\n                            <div *ngIf=\"companySettings.get('fax').invalid && companySettings.get('fax').touched\">\r\n                                <small *ngIf=\"companySettings.get('fax').invalid && companySettings.get('fax').touched\"\r\n                                    class=\"text-danger\"> *Fax is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Website Url</label>\r\n                            <input class=\"form-control\" value=\"https://www.example.com\" type=\"text\"\r\n                                [class.invalid]=\"companySettings.get('website').invalid && companySettings.get('website').touched\"\r\n                                formControlName=\"website\">\r\n                            <div\r\n                                *ngIf=\"companySettings.get('website').invalid && companySettings.get('website').touched\">\r\n                                <small\r\n                                    *ngIf=\"companySettings.get('website').invalid && companySettings.get('website').touched\"\r\n                                    class=\"text-danger\"> *Website URL is required</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 29030:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/settings/cron/cron.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n           \r\n<div class=\"card p-4\">\r\n\t<form>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Cron Key <span class=\"text-danger\">*</span></label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"\">\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Auto Backup Database <span class=\"text-danger\">*</span></label><br>\r\n\t\t\t<label class=\"switch\">\r\n\t\t\t\t<input type=\"hidden\" value=\"off\" name=\"auto_backup_db\">\r\n\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"auto_backup_db\">\r\n\t\t\t\t<span></span>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"submit-section\">\r\n\t\t\t<button class=\"btn btn-primary submit-btn\">Save Changes</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n<!-- /Page Wrapper -->";

/***/ }),

/***/ 31333:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/email-settings/email-settings.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n    \r\n            <form (ngSubmit)=\"submitEmailSettings()\" [formGroup]=\"emailSettings\">\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input\" type=\"radio\"  id=\"phpmail\" value=\"option1\" [class.invalid]=\"emailSettings.get('phpMail').invalid && emailSettings.get('phpMail').touched\"\r\n                        formControlName=\"phpMail\">\r\n                        <div\r\n                        *ngIf=\"emailSettings.get('phpMail').invalid && emailSettings.get('phpMail').touched\">\r\n                        <small\r\n                            *ngIf=\"emailSettings.get('phpMail').invalid && emailSettings.get('phpMail').touched\"\r\n                            class=\"text-danger\"> *PHP mail is required</small>\r\n                    </div>\r\n                        <label class=\"form-check-label\" for=\"phpmail\">PHP Mail</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input\" type=\"radio\"  id=\"smtpmail\" value=\"option2\" [class.invalid]=\"emailSettings.get('smtp').invalid && emailSettings.get('smtp').touched\"\r\n                        formControlName=\"smtp\">\r\n                        <div\r\n                        *ngIf=\"emailSettings.get('smtp').invalid && emailSettings.get('smtp').touched\">\r\n                        <small\r\n                            *ngIf=\"emailSettings.get('smtp').invalid && emailSettings.get('smtp').touched\"\r\n                            class=\"text-danger\"> *SMTP is required</small>\r\n                    </div>\r\n                        <label class=\"form-check-label\" for=\"smtpmail\">SMTP</label>\r\n                    </div>\r\n                </div>\r\n                <h4 class=\"page-title\">PHP Email Settings</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email From Address</label>\r\n                            <input class=\"form-control\"  [class.invalid]=\"emailSettings.get('emailAddress').invalid && emailSettings.get('emailAddress').touched\"\r\n                            formControlName=\"emailAddress\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('emailAddress').invalid && emailSettings.get('emailAddress').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('emailAddress').invalid && emailSettings.get('emailAddress').touched\"\r\n                                class=\"text-danger\"> *Email  from address is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Emails From Name</label>\r\n                            <input class=\"form-control\" type=\"text\" [class.invalid]=\"emailSettings.get('emailName').invalid && emailSettings.get('emailName').touched\"\r\n                            formControlName=\"emailName\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('emailName').invalid && emailSettings.get('emailName').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('emailName').invalid && emailSettings.get('emailName').touched\"\r\n                                class=\"text-danger\"> *Email  from name is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <h4 class=\"page-title m-t-30\">SMTP Email Settings</h4>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>SMTP HOST</label>\r\n                            <input class=\"form-control\" type=\"text\" [class.invalid]=\"emailSettings.get('smtpHost').invalid && emailSettings.get('smtpHost').touched\"\r\n                            formControlName=\"smtpHost\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('smtpHost').invalid && emailSettings.get('smtpHost').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('smtpHost').invalid && emailSettings.get('smtpHost').touched\"\r\n                                class=\"text-danger\"> *SMTP host is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>SMTP USER</label>\r\n                            <input class=\"form-control\" type=\"text\" [class.invalid]=\"emailSettings.get('smtpUser').invalid && emailSettings.get('smtpUser').touched\"\r\n                            formControlName=\"smtpUser\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('smtpUser').invalid && emailSettings.get('smtpUser').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('smtpUser').invalid && emailSettings.get('smtpUser').touched\"\r\n                                class=\"text-danger\"> *SMTP user is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>SMTP PASSWORD</label>\r\n                            <input class=\"form-control\" type=\"password\" [class.invalid]=\"emailSettings.get('smtpPassword').invalid && emailSettings.get('smtpPassword').touched\"\r\n                            formControlName=\"smtpPassword\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('smtpPassword').invalid && emailSettings.get('smtpPassword').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('smtpPassword').invalid && emailSettings.get('smtpPassword').touched\"\r\n                                class=\"text-danger\"> *SMTP password is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>SMTP PORT</label>\r\n                            <input class=\"form-control\" type=\"text\" [class.invalid]=\"emailSettings.get('smtpPort').invalid && emailSettings.get('smtpPort').touched\"\r\n                            formControlName=\"smtpPort\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('smtpPort').invalid && emailSettings.get('smtpPort').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('smtpPort').invalid && emailSettings.get('smtpPort').touched\"\r\n                                class=\"text-danger\"> *SMTP port is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>SMTP Security</label>\r\n                            <select class=\"form-select form-control\"  [class.invalid]=\"emailSettings.get('smtpSecurity').invalid && emailSettings.get('smtpSecurity').touched\"\r\n                            formControlName=\"smtpSecurity\">\r\n                                <option>None</option>\r\n                                <option>SSL</option>\r\n                                <option>TLS</option>\r\n                            </select>\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('smtpSecurity').invalid && emailSettings.get('smtpSecurity').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('smtpSecurity').invalid && emailSettings.get('smtpSecurity').touched\"\r\n                                class=\"text-danger\"> *SMTP Security is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>SMTP Authentication Domain</label>\r\n                            <input class=\"form-control\" type=\"text\" [class.invalid]=\"emailSettings.get('smtpAuthentication').invalid && emailSettings.get('smtpAuthentication').touched\"\r\n                            formControlName=\"smtpAuthentication\">\r\n                            <div\r\n                            *ngIf=\"emailSettings.get('smtpAuthentication').invalid && emailSettings.get('smtpAuthentication').touched\">\r\n                            <small\r\n                                *ngIf=\"emailSettings.get('smtpAuthentication').invalid && emailSettings.get('smtpAuthentication').touched\"\r\n                                class=\"text-danger\"> *SMTP Authentication is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Save &amp; update</button>\r\n                </div>\r\n            </form>\r\n    \r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 81293:
/*!**************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/invoice-settings/invoice-settings.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n\r\n            <form (ngSubmit)=\"submitInvoiceSettings()\" [formGroup]=\"invoiceSettings\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-lg-3 col-form-label\">Invoice prefix</label>\r\n                    <div class=\"col-lg-9\">\r\n                        <input type=\"text\" value=\"INV\" class=\"form-control\" [class.invalid]=\"invoiceSettings.get('invoicePrefix').invalid && invoiceSettings.get('invoicePrefix').touched\"\r\n                        formControlName=\"invoicePrefix\">\r\n                        <div\r\n                        *ngIf=\"invoiceSettings.get('invoicePrefix').invalid && invoiceSettings.get('invoicePrefix').touched\">\r\n                        <small\r\n                            *ngIf=\"invoiceSettings.get('invoicePrefix').invalid && invoiceSettings.get('invoicePrefix').touched\"\r\n                            class=\"text-danger\"> *Invoice prefix is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-lg-3 col-form-label\">Invoice Logo</label>\r\n                    <div class=\"col-lg-7\">\r\n                        <input type=\"file\" class=\"form-control\" [class.invalid]=\"invoiceSettings.get('invoiceLogo').invalid && invoiceSettings.get('invoiceLogo').touched\"\r\n                        formControlName=\"invoiceLogo\">\r\n                        <div\r\n                        *ngIf=\"invoiceSettings.get('invoiceLogo').invalid && invoiceSettings.get('invoiceLogo').touched\">\r\n                        <small\r\n                            *ngIf=\"invoiceSettings.get('invoiceLogo').invalid && invoiceSettings.get('invoiceLogo').touched\"\r\n                            class=\"text-danger\"> *Invoice logo is required</small>\r\n                    </div>\r\n                        <span class=\"form-text text-muted\">Recommended image size is 200px x 40px</span>\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                        <div class=\"img-thumbnail float-end\"><img src=\"assets/img/logo3.png\" class=\"img-fluid\" alt=\"\"\r\n                                width=\"140\" height=\"40\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                </div>\r\n            </form>\r\n        \r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 17075:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/settings/leave-type/leave-type.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n    <div class=\"add-emp-section\">\r\n        <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_leavetype\"><i class=\"fas fa-plus\"></i> Add Leave Type</a>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table datatable mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Leave Type</th>\r\n                            <th>Leave Days</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let leaveType of allLeaveType;let i = index\">\r\n                            <td>\r\n                                {{ 1 + i}}\r\n                            </td>\r\n                            <td>{{leaveType.leaveType}}</td>\r\n                            <td>{{leaveType.leaveDays}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown action-label\">\r\n                                    <a class=\"role-info role-bg-two dropdown-toggle\" \r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                                        <i class=\"fa fa-dot-circle-o text-success\"></i> Active\r\n                                    </a>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a  class=\"dropdown-item\"><i\r\n                                                class=\"fa fa-dot-circle-o text-success\"></i> Active</a>\r\n                                        <a  class=\"dropdown-item\"><i class=\"fa fa-dot-circle-o text-danger\"></i>\r\n                                            Inactive</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_leavetype\" (click)=\"edit(leaveType.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_leavetype\" (click)=\"tempId = leaveType.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allLeaveType.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Leavetype Modal -->\r\n<div id=\"add_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Leave Type</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addLeave()\" [formGroup]=\"addLeaveType\">\r\n                    <div class=\"form-group\">\r\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addLeaveType.get('addLeaveType').invalid && addLeaveType.get('addLeaveType').touched\"\r\n                        formControlName=\"addLeaveType\">\r\n                        <div\r\n                        *ngIf=\"addLeaveType.get('addLeaveType').invalid && addLeaveType.get('addLeaveType').touched\">\r\n                        <small\r\n                            *ngIf=\"addLeaveType.get('addLeaveType').invalid && addLeaveType.get('addLeaveType').touched\"\r\n                            class=\"text-danger\"> *Leave type is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addLeaveType.get('addLeaveDays').invalid && addLeaveType.get('addLeaveDays').touched\"\r\n                        formControlName=\"addLeaveDays\">\r\n                        <div\r\n                        *ngIf=\"addLeaveType.get('addLeaveDays').invalid && addLeaveType.get('addLeaveDays').touched\">\r\n                        <small\r\n                            *ngIf=\"addLeaveType.get('addLeaveDays').invalid && addLeaveType.get('addLeaveDays').touched\"\r\n                            class=\"text-danger\"> *Leave days is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Leavetype Modal -->\r\n\r\n<!-- Edit Leavetype Modal -->\r\n<div id=\"edit_leavetype\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Leave Type</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editLeave()\" [formGroup]=\"editLeaveType\">\r\n                    <div class=\"form-group\">\r\n                        <label>Leave Type <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\r\n                        formControlName=\"editLeave\">\r\n                        <div\r\n                        *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\">\r\n                        <small\r\n                            *ngIf=\"editLeaveType.get('editLeave').invalid && editLeaveType.get('editLeave').touched\"\r\n                            class=\"text-danger\"> *Leave type is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Number of days <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\r\n                        formControlName=\"editLeaveDays\">\r\n                        <div\r\n                        *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\">\r\n                        <small\r\n                            *ngIf=\"editLeaveType.get('editLeaveDays').invalid && editLeaveType.get('editLeaveDays').touched\"\r\n                            class=\"text-danger\"> *Leave days is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Leavetype Modal -->\r\n\r\n<!-- Delete Leavetype Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_leavetype\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Leave Type</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteLeave()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Leavetype Modal -->";

/***/ }),

/***/ 35133:
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/settings/localization/localization.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<!-- Page Content -->\r\n    <div class=\"card p-4\">\r\n        <form (ngSubmit)=\"submitLocalisation()\" [formGroup]=\"localisation\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Default Country</label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"localisation.get('defaultCountry').invalid && localisation.get('defaultCountry').touched\"\r\n                        formControlName=\"defaultCountry\">\r\n                            <option value = \"USA\">USA</option>\r\n                            <option value = \"United Kingdom\">United Kingdom</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"localisation.get('defaultCountry').invalid && localisation.get('defaultCountry').touched\">\r\n                        <small\r\n                            *ngIf=\"localisation.get('defaultCountry').invalid && localisation.get('defaultCountry').touched\"\r\n                            class=\"text-danger\"> *Default country is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Date Format</label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"localisation.get('dateFormat').invalid && localisation.get('dateFormat').touched\"\r\n                        formControlName=\"dateFormat\" [value] = \"15/05/2016\">\r\n                            <option value=\"15/05/2016\">15/05/2016</option>\r\n                            <option value=\"15.05.2016\">15.05.2016</option>\r\n                            <option value=\"15-05-2016\">15-05-2016</option>\r\n                            <option value=\"05/15/2016\">05/15/2016</option>\r\n                            <option value=\"05/15/2016\">05/15/2016</option>\r\n                            <option value=\"2016-05-15\">2016-05-15</option>\r\n                            <option value=\"May 15 2016\">May 15 2016</option>\r\n                            <option selected=\"selected\" value=\"d M Y\">15 May 2016</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"localisation.get('dateFormat').invalid && localisation.get('dateFormat').touched\">\r\n                        <small\r\n                            *ngIf=\"localisation.get('dateFormat').invalid && localisation.get('dateFormat').touched\"\r\n                            class=\"text-danger\"> *Date format is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Timezone</label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"localisation.get('timeZone').invalid && localisation.get('timeZone').touched\"\r\n                        formControlName=\"timeZone\">\r\n                            <option value = \"(UTC +5:30) Antarctica/Palmer\">(UTC +5:30) Antarctica/Palmer</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"localisation.get('timeZone').invalid && localisation.get('timeZone').touched\">\r\n                        <small\r\n                            *ngIf=\"localisation.get('timeZone').invalid && localisation.get('timeZone').touched\"\r\n                            class=\"text-danger\"> *Time zone is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Default Language</label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"localisation.get('deafultLanguage').invalid && localisation.get('deafultLanguage').touched\"\r\n                        formControlName=\"deafultLanguage\">\r\n                            <option value = \"English\" >English</option>\r\n                            <option value = \"French\">French</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"localisation.get('deafultLanguage').invalid && localisation.get('deafultLanguage').touched\">\r\n                        <small\r\n                            *ngIf=\"localisation.get('deafultLanguage').invalid && localisation.get('deafultLanguage').touched\"\r\n                            class=\"text-danger\"> *Default Language is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Currency Code</label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"localisation.get('currencyCode').invalid && localisation.get('currencyCode').touched\"\r\n                        formControlName=\"currencyCode\">\r\n                            <option value = \"USD\">USD</option>\r\n                            <option value = \"Pound\">Pound</option>\r\n                            <option value = \"EURO\">EURO</option>\r\n                            <option value = \"Ringgit\">Ringgit</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"localisation.get('currencyCode').invalid && localisation.get('currencyCode').touched\">\r\n                        <small\r\n                            *ngIf=\"localisation.get('currencyCode').invalid && localisation.get('currencyCode').touched\"\r\n                            class=\"text-danger\"> *Currency Code is required</small>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Currency Symbol</label>\r\n                        <input class=\"form-control\" readonly value=\"$\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 70890:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/notifications/notifications.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card p-4\">\r\n    <ul class=\"list-group notification-list\">\r\n        <li class=\"list-group-item\">\r\n            Employee\r\n            <div class=\"status-toggle\">\r\n                <input type=\"checkbox\" id=\"staff_module\" class=\"check\">\r\n                <label for=\"staff_module\" class=\"checktoggle\">checkbox</label>\r\n            </div>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Holidays\r\n            <div class=\"status-toggle\">\r\n                <input type=\"checkbox\" id=\"holidays_module\" class=\"check\" checked>\r\n                <label for=\"holidays_module\" class=\"checktoggle\">checkbox</label>\r\n            </div>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Leaves\r\n            <div class=\"status-toggle\">\r\n                <input type=\"checkbox\" id=\"leave_module\" class=\"check\" checked>\r\n                <label for=\"leave_module\" class=\"checktoggle\">checkbox</label>\r\n            </div>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Events\r\n            <div class=\"status-toggle\">\r\n                <input type=\"checkbox\" id=\"events_module\" class=\"check\" checked>\r\n                <label for=\"events_module\" class=\"checktoggle\">checkbox</label>\r\n            </div>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Chat\r\n            <div class=\"status-toggle\">\r\n                <input type=\"checkbox\" id=\"chat_module\" class=\"check\" checked>\r\n                <label for=\"chat_module\" class=\"checktoggle\">checkbox</label>\r\n            </div>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Jobs\r\n            <div class=\"status-toggle\">\r\n                <input type=\"checkbox\" id=\"job_module\" class=\"check\">\r\n                <label for=\"job_module\" class=\"checktoggle\">checkbox</label>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ }),

/***/ 44984:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/settings/performance/performance.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n                <div class=\"card p-4\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <h4 class=\"page-title\">Performance Configuration\t\r\n                                <button class=\"btn btn-success m-t-5 btn-sm\" type=\"submit\">OKRs  Activated</button>\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-box\">\r\n                                <p><b>Click the tabs below for more information on each Performance Management module.\r\n                                    Only one Performance module can be activated at a time.\r\n                                    </b>\r\n                                </p>\r\n                                <ul class=\"nav nav-tabs nav-tabs-bottom\">\r\n                                    <li class=\"nav-item active\"><a class=\"nav-link active\" href=\"#okr_tab\" data-bs-toggle=\"tab\">OKRs</a></li>\r\n                                    <li class=\"nav-item \"><a class=\"nav-link\" href=\"#compentency_tab\" data-bs-toggle=\"tab\">Competency-based</a></li>\r\n                                    <li class=\"nav-item \"><a class=\"nav-link\" href=\"#smart_goals_tab\" data-bs-toggle=\"tab\">SMART Goals</a></li>\r\n                                </ul>\r\n                                <div class=\"tab-content mt-3\">\r\n\r\n                                    <!-- OKR Config -->\r\n                                    <div class=\"tab-pane active\" id=\"okr_tab\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12 col-lg-12\">\r\n                                               \r\n                                                <div class=\"form-group\">\r\n                                                    <label>OKRs Description</label>\r\n                                                    <textarea rows=\"5\" cols=\"5\" class=\"form-control\" name=\"description\">Objectives and Key Results (OKR) is a framework for defining and tracking organizations objectives and their outcomes. OKRs comprise an Objective—a clearly defined goal—and one or more Key Results—specific measures used to track the achievement of that goal. The goal of OKR is to define how to achieve objectives through concrete, specific and measurable actions. Key Results can be measured on a sliding scale from 0.0 - 1.0 or 0-100%. Objectives should also be supported by initiatives, which are the plans and activities that help to achieve the objective and move forward the key results. Once objectives and key results have been established, regular and quarterly check-ins are required to make sure OKRs is progressing</textarea>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 col-lg-12\">\r\n                                                <div class=\"rating-list m-t-20\">\r\n                                                    <span class=\"rating-bad\">\r\n                                                    <span class=\"rating-count\">\r\n                                                    <a href=\"\">0.0</a>\r\n                                                    <a href=\"\">0.1</a>\r\n                                                    <a href=\"\">0.2</a>\r\n                                                    <a href=\"\">0.3</a>\r\n                                                    </span><br>\r\n                                                    <span class=\"rating-text\">We failed to make real progress</span>\r\n                                                    </span>\r\n                                                    <span class=\"rating-normal\">\r\n                                                    <span class=\"rating-count\">\r\n                                                    <a href=\"\">0.4</a>\r\n                                                    <a href=\"\">0.5</a>\r\n                                                    <a href=\"\">0.6</a>\r\n                                                    </span><br>\r\n                                                    <span class=\"rating-text\">We made progress, but fell short of completion</span>\r\n                                                    </span>\r\n                                                    <span class=\"rating-good\">\r\n                                                    <span class=\"rating-count\">\r\n                                                    <a href=\"\">0.7</a>\r\n                                                    <a href=\"\">0.8</a>\r\n                                                    <a href=\"\">0.9</a>\r\n                                                    <a href=\"\">1.0</a>\r\n                                                    </span><br>\r\n                                                    <span class=\"rating-text\">We delivered</span>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 col-lg-12\">\r\n                                                <div class=\"submit-section my-3\">\r\n                                                    <button class=\"btn btn-primary submit-btn performance_status red_circle\" data-status=\"okr\" title=\"Admin can’t activate it again\">Activate OKR</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 col-lg-12\">\r\n                                                <hr style=\"margin-top:0;\">\r\n                                                <div class=\"form-group m-b-0\">\r\n                                                    <label>Choose Your Rating Scale</label>\r\n                                                    <div class=\"radio_input\" id=\"rating_scale_select_okr\">\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale\" value=\"rating_01_010\" required=\"\" class=\"rating_scale\" checked=\"\">0.1 - 1.0 <span class=\"checkmark\"></span>\r\n                                                        </label>\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale\" value=\"rating_1_5\" required=\"\" class=\"rating_scale\">1 - 5 <span class=\"checkmark\"></span>\r\n                                                        </label>\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale\" value=\"rating_1_10\" class=\"rating_scale\">1 - 10 <span class=\"checkmark\"></span>\r\n                                                        </label>\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale\" value=\"custom_rating\" class=\"rating_scale\">Custom <span class=\"checkmark\"></span>\r\n                                                        </label> \r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <!--0.1 to  1.0 Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"01ratings_cont_okr\" style=\"display: block\">\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.1 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.1\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"dsdsd\" placeholder=\"Short word to describe rating of 0.1\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">dfsdfa</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.2 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.2\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdfdsf\" placeholder=\"Short word to describe rating of 0.2\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">sdfdsf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.3 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.3\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdfds\" placeholder=\"Short word to describe rating of 0.3\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">fsdf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.4 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.4\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdfds\" placeholder=\"Short word to describe rating of 0.4\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">fsdf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.5 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.5\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdfdsf\" placeholder=\"Short word to describe rating of 0.5\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">sdf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.6 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.6\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdfds\" placeholder=\"Short word to describe rating of 0.6\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">fsdsdf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.7 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.7\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"dsfd\" placeholder=\"Short word to describe rating of 0.7\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">fsdf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.8 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.8\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdfsdf\" placeholder=\"Short word to describe rating of 0.8\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">sdfds</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 0.9 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"0.9\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"sdf\" placeholder=\"Short word to describe rating of 0.9\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">sdfsdsf</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width:50px;\"> 1.0 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"hidden\" name=\"rating_no[]\" class=\"form-control\" value=\"1.0\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" value=\"dg\" placeholder=\"Short word to describe rating of 1.0\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">fg</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section m-b-0\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- 0.1 to  1.0  Ratings Content -->\r\n\r\n                                                <!-- 5 Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"5ratings_cont_okr\" style=\"display: none\">\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 1 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 1\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 2 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 2\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 3 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 3\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 4 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 4\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 5 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 5\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                   \r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section m-b-0\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- /5 Ratings Content -->\r\n\r\n                                                <!-- 10 Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"10ratings_cont_okr\" style=\"display: none\">\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                  \r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 1 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 1\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 2 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 2\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 3 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 3\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 4 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 4\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 5 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 5\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 6 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 6\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 7 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 7\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 8 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 8\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 9 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 9\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 10 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 10\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- 10 Ratings Content -->\r\n\r\n                                                <!-- Custom Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"custom_rating_cont_okr\" style=\"display: none\">\r\n                                                    <label>Custom Rating Count</label>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" class=\"form-control custom_rating_input\" data-type=\"okr\" id=\"custom_rating_input3\" name=\"custom_rating_count\" value=\"\" placeholder=\"20\" style=\"width: 160px;\">\r\n                                                    </div>\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                          \r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody class=\"custom-value_okr\">\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- /Custom Ratings Content -->\r\n\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <!-- Compentency Config -->\r\n                                    <div class=\"tab-pane\" id=\"compentency_tab\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label>Competency-based</label>\r\n                                                    <textarea rows=\"4\" cols=\"5\" class=\"form-control\" name=\"competencies_desc\">Competency-based performance management allow companies to evaluate employees' performance through define core competencies that align with the company’s mission, vision and goals. A 360-degree assessment can also be added to capture ratings and feedback </textarea>\r\n                                                </div>\r\n                                                <div class=\"submit-section my-3\">\t\t\t\r\n                                                    <button class=\"m-0 btn btn-sm btn-primary submit-btn performance_status \" data-status=\"competency\" title=\"\" style=\"margin: 23px 0px;\">Activate Competency-based</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"form-group\">\r\n                                                    <table class=\"table table-bordered table-center\">\r\n                                                        <thead style=\"background:#f2f2f2\">\r\n                                                            <tr>\r\n                                                                <th style=\"width: 250px;\">Competency</th>\r\n                                                                <th>Definition</th>\r\n                                                                <th style=\"width: 70px;text-align:center;\">Action</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr>\r\n                                                                <th>\r\n                                                                    Adaptability\t\t\t\t\t\r\n                                                                </th>\r\n                                                                <td>\r\n                                                                    <div class=\"task-textarea\">\r\n                                                                        <textarea placeholder=\"Definition\" id=\"competency_definition_6\" onkeyup=\"competency_definition(6)\" class=\"form-control definition_edit_6\" readonly=\"\">Ability to handle ambiguity and certain situations outside of their\r\n                                                                        control. Dealing with a change in process, systems, role, and direction of\r\n                                                                        the company. Adapting to new ways of doing things.</textarea>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                                <td class=\"text-center\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"text-warning\" title=\"\" id=\"definition_edit_6\" onclick=\"definition_edit(6)\" data-original-title=\"Edit\"><i class=\"fas fa-pencil-alt\"></i></a>\r\n                                                                    <a href=\"https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/6\" class=\"text-danger\" title=\"\" data-bs-toggle=\"ajaxModal\" data-original-title=\"Delete\"><i class=\"fa fa-times\"></i></a>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <th>\r\n                                                                    Collaboration &amp; Teamwork\t\t\t\t\t\r\n                                                                </th>\r\n                                                                <td>\r\n                                                                    <div class=\"task-textarea\">\r\n                                                                        <textarea placeholder=\"Definition\" id=\"competency_definition_7\" onkeyup=\"competency_definition(7)\" class=\"form-control definition_edit_7\" readonly=\"\">Works harmoniously with others to get a job done; shares critical information\r\n                                                                        with everyone involved in a project. Works cooperatively with others to achieve\r\n                                                                        common goals. Seeks opinions and values the contributions of others; involves\r\n                                                                        team in discussion and decision-making.</textarea>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                                <td class=\"text-center\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"text-warning\" title=\"\" id=\"definition_edit_7\" onclick=\"definition_edit(7)\" data-original-title=\"Edit\"><i class=\"fas fa-pencil-alt\"></i></a>\r\n                                                                    <a href=\"https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/7\" class=\"text-danger\" title=\"\" data-bs-toggle=\"ajaxModal\" data-original-title=\"Delete\"><i class=\"fa fa-times\"></i></a>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <th>\r\n                                                                    Communication\t\t\t\t\t\r\n                                                                </th>\r\n                                                                <td>\r\n                                                                    <div class=\"task-textarea\">\r\n                                                                        <textarea placeholder=\"Definition\" id=\"competency_definition_8\" onkeyup=\"competency_definition(8)\" class=\"form-control definition_edit_8\" readonly=\"\">Communicates in an engaging, effective, and respectful way to a wide\r\n                                                                        variety of groups. Delivers convincing and meaningful messages that\r\n                                                                        leave a positive impact. Effective oral and written communication skills.\r\n                                                                        The ability to persuade and convince others including management.</textarea>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                                <td class=\"text-center\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"text-warning\" title=\"\" id=\"definition_edit_8\" onclick=\"definition_edit(8)\" data-original-title=\"Edit\"><i class=\"fas fa-pencil-alt\"></i></a>\r\n                                                                    <a href=\"https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/8\" class=\"text-danger\" title=\"\" data-bs-toggle=\"ajaxModal\" data-original-title=\"Delete\"><i class=\"fa fa-times\"></i></a>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <th>\r\n                                                                    Customer Service\t\t\t\t\t\r\n                                                                </th>\r\n                                                                <td>\r\n                                                                    <div class=\"task-textarea\">\r\n                                                                        <textarea placeholder=\"Definition\" id=\"competency_definition_9\" onkeyup=\"competency_definition(9)\" class=\"form-control definition_edit_9\" readonly=\"\">Listens and responds effectively to customer questions; resolves\r\n                                                                        customer problems to the customer’s satisfaction; respects all internal\r\n                                                                        and external customers; follows up to evaluate customer satisfaction;\r\n                                                                        exceeds customer expectations.</textarea>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                                <td class=\"text-center\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"text-warning\" title=\"\" id=\"definition_edit_9\" onclick=\"definition_edit(9)\" data-original-title=\"Edit\"><i class=\"fas fa-pencil-alt\"></i></a>\r\n                                                                    <a href=\"https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/9\" class=\"text-danger\" title=\"\" data-bs-toggle=\"ajaxModal\" data-original-title=\"Delete\"><i class=\"fa fa-times\"></i></a>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <form>\r\n                                                        <table class=\"table performance-table\">\r\n                                                            <tbody>\r\n                                                                <tr>\r\n                                                                    <td style=\"padding-left: 0;\">\r\n                                                                        <input type=\"text\" class=\"form-control\" name=\"competency[]\" required=\"\" placeholder=\"Competency\">\r\n                                                                    </td>\r\n                                                                    <td>\r\n                                                                        <textarea style=\"height: 44px;\" rows=\"4\" cols=\"20\" class=\"form-control\" name=\"definition[]\" placeholder=\"Definition\" required=\"\"></textarea>\r\n                                                                    </td>\r\n                                                                    <td style=\"padding-right: 0;min-width:55px;max-width:55px;width:55px;\">\r\n                                                                        <button type=\"button\" class=\"btn btn-white add_competency_performance\" tooltip=\"Add Competency\" style=\"height:44px;font-size: 16px;padding:10px 15px;\"><i class=\"fa fa-plus-circle\"></i></button>\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n                                                        <div class=\"\">\r\n                                                            <button class=\"btn btn-primary\" type=\"submit\" id=\"create_offers_submit\">Create Competencies</button>\r\n                                                        </div>\r\n                                                    </form>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 col-lg-12\">\r\n                                                <hr style=\"margin-top:0;\">\r\n                                                <div class=\"form-group m-b-0\">\r\n                                                    <label>Choose Your Rating Scale</label>\r\n                                                    <div class=\"radio_input\" id=\"rating_scale_select_competency\">\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale_competency\" value=\"rating_1_5\" required=\"\" class=\"rating_scale\" checked=\"\">1 - 5 <span class=\"checkmark\"></span>\r\n                                                        </label>\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale_competency\" value=\"rating_1_10\" class=\"rating_scale\">1 - 10 <span class=\"checkmark\"></span>\r\n                                                        </label>\r\n                                                        <label class=\"radio-inline custom_radio\">\r\n                                                        <input type=\"radio\" name=\"rating_scale_competency\" value=\"custom_rating\" class=\"rating_scale\">Custom <span class=\"checkmark\"></span>\r\n                                                        </label> \r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <!-- 5 Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"5ratings_cont_competency\" style=\"display: block\">\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 1 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"tst\" placeholder=\"Short word to describe rating of 1\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Lorem ipsum</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 2 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"dsgds\" placeholder=\"Short word to describe rating of 2\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Lorem ipsum</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 3 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"sdg\" placeholder=\"Short word to describe rating of 3\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Lorem ipsum</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 4 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"sdgsdg\" placeholder=\"Short word to describe rating of 4\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Lorem ipsum</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 5 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"sdg\" placeholder=\"Short word to describe rating of 5\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Lorem ipsum</textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section m-b-0\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- /5 Ratings Content -->\r\n\r\n                                                <!-- 10 Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"10ratings_cont_competency\" style=\"display: none\">\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                   \r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 1 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 1\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 2 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 2\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 3 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 3\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 4 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 4\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 5 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 5\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 6 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 6\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 7 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 7\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 8 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 8\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 9 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                            \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 9\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td style=\"width: 50px;\"> 10 </td>\r\n                                                                        <td style=\"width: 300px;\">\r\n                                                                           \r\n                                                                            <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 10\" required=\"\">\r\n                                                                        </td>\r\n                                                                        <td>\r\n                                                                            <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- 10 Ratings Content -->\r\n\r\n                                                <!-- Custom Ratings Content -->\r\n                                                <div class=\"form-group\" id=\"custom_rating_cont_competency\" style=\"display: none\">\r\n                                                    <label>Custom Rating Count</label>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" class=\"form-control custom_rating_input\" data-type=\"competency\" id=\"custom_rating_input1\" name=\"custom_rating_count\" value=\"\" placeholder=\"20\" style=\"width: 160px;\">\r\n                                                    </div>\r\n                                                    <div class=\"table-responsive\">\r\n                                                        <form>\r\n                                                          \r\n                                                            <table class=\"table setting-performance-table\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th>Rating</th>\r\n                                                                        <th>Short Descriptive Word</th>\r\n                                                                        <th>Definition</th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody class=\"custom-value_competency\">\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <div class=\"submit-section\">\r\n                                                                <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- /Custom Ratings Content -->\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- /Compentency Config -->\r\n\r\n                                    <!-- Smart Goal Config -->\r\n                                    <div class=\"tab-pane\" id=\"smart_goals_tab\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label>Smart Goals Configuration</label>\r\n                                                    <textarea rows=\"4\" cols=\"5\" class=\"form-control\" name=\"smart_goals\">A 360-degree assessment can also be added to capture ratings and feedback</textarea>\r\n                                                </div>\r\n                                                <div class=\"submit-section my-3\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n                                                    <button class=\"btn btn-primary submit-btn performance_status \" data-status=\"smart_goals\" title=\"\">Activate SMART Goals</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr style=\"margin-top:0;\">\r\n                                        <div class=\"form-group m-b-0\">\r\n                                            <label>Choose Your Rating Scale</label>\r\n                                            <div class=\"radio_input\" id=\"rating_scale_select\">\r\n                                                <label class=\"radio-inline custom_radio\">\r\n                                                <input type=\"radio\" name=\"rating_scale_smart_goal\" value=\"rating_1_5\" required=\"\" class=\"rating_scale\" checked=\"\">1 - 5 <span class=\"checkmark\"></span>\r\n                                                </label>\r\n                                                <label class=\"radio-inline custom_radio\">\r\n                                                <input type=\"radio\" name=\"rating_scale_smart_goal\" value=\"rating_1_10\" class=\"rating_scale\">1 - 10 <span class=\"checkmark\"></span>\r\n                                                </label>\r\n                                                <label class=\"radio-inline custom_radio\">\r\n                                                <input type=\"radio\" name=\"rating_scale_smart_goal\" value=\"custom_rating\" class=\"rating_scale\">Custom <span class=\"checkmark\"></span>\r\n                                                </label> \r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <!-- 5 Ratings Content -->\r\n                                        <div class=\"form-group\" id=\"5ratings_cont\" style=\"display: block\">\r\n                                            <div class=\"table-responsive\">\r\n                                                <form>\r\n                                                    <table class=\"table setting-performance-table\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th>Rating</th>\r\n                                                                <th>Short Descriptive Word</th>\r\n                                                                <th>Definition</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 1 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"very bad\" placeholder=\"Short word to describe rating of 1\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">very bad</textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 2 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                  \r\n                                                                    <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"bad\" placeholder=\"Short word to describe rating of 2\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">bad</textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 3 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"Average\" placeholder=\"Short word to describe rating of 3\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Average</textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 4 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                    \r\n                                                                    <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"Good\" placeholder=\"Short word to describe rating of 4\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Good</textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 5 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value[]\" class=\"form-control\" value=\"Very Good\" placeholder=\"Short word to describe rating of 5\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\">Very Good</textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                          \r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                    <div class=\"submit-section m-b-0\">\r\n                                                        <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- /5 Ratings Content -->\r\n\r\n                                        <!-- 10 Ratings Content -->\r\n                                        <div class=\"form-group\" id=\"10ratings_cont\" style=\"display: none\">\r\n                                            <div class=\"table-responsive\">\r\n                                                <form>\r\n                                                    <table class=\"table setting-performance-table\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th>Rating</th>\r\n                                                                <th>Short Descriptive Word</th>\r\n                                                                <th>Definition</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                           \r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 1 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                  \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 1\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 2 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 2\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 3 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 3\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 4 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 4\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 5 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 5\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 6 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                    \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 6\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 7 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 7\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 8 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 8\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 9 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                    \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 9\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td style=\"width: 50px;\"> 10 </td>\r\n                                                                <td style=\"width: 300px;\">\r\n                                                                   \r\n                                                                    <input type=\"text\" name=\"rating_value_ten[]\" class=\"form-control\" placeholder=\"Short word to describe rating of 10\" required=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <textarea rows=\"3\" name=\"definition_ten[]\" class=\"form-control\" placeholder=\"Descriptive Rating Definition\" required=\"\"></textarea>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                    <div class=\"submit-section m-b-0\">\r\n                                                        <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- 10 Ratings Content -->\r\n\r\n                                        <!-- Custom Ratings Content -->\r\n                                        <div class=\"form-group\" id=\"custom_rating_cont\" style=\"display: none\">\r\n                                            <label>Custom Rating Count</label>\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" class=\"form-control custom_rating_input\" data-type=\"smart_goal\" id=\"custom_rating_input2\" name=\"custom_rating_count\" value=\"\" placeholder=\"20\" style=\"width: 160px;\">\r\n                                            </div>\r\n                                            <div class=\"table-responsive\">\r\n                                                <form>\r\n                                                   \r\n                                                    <table class=\"table setting-performance-table\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th>Rating</th>\r\n                                                                <th>Short Descriptive Word</th>\r\n                                                                <th>Definition</th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody class=\"custom-value_smart_goal\">\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                    <div class=\"submit-section m-b-0\">\r\n                                                        <button class=\"btn btn-primary submit-btn create_goal_configuration_submit\" type=\"submit\">Save</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- /Custom Ratings Content -->\r\n\r\n                                    </div>\r\n                                    <!-- /Smart Goal Config -->\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Page Content -->\r\n\r\n            ";

/***/ }),

/***/ 68132:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/settings/role/role.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4 col-xl-3\">\r\n            <a  class=\"btn btn-primary w-100\" data-bs-toggle=\"modal\" data-bs-target=\"#add_role\"><i\r\n                    class=\"fa fa-plus\"></i> Add Roles</a>\r\n            <div class=\"roles-menu\">\r\n                <ul>\r\n                    <li [ngClass]=\"{ 'active' : i === 0 }\"*ngFor=\"let roles of allroles;let i = index\">\r\n                        <a >{{roles.roleName}}\r\n                            <span class=\"role-action\">\r\n                                <span class=\"action-circle large\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_role\" (click)=\"edit(roles.id)\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                </span>\r\n                                <span class=\"action-circle large delete-btn\" data-bs-toggle=\"modal\"\r\n                                    data-bs-target=\"#delete_role\" (click)=\"tempId = roles.id\">\r\n                                    <i class=\"material-icons\">delete</i>\r\n                                </span>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8 col-md-8 col-lg-8 col-xl-9\">\r\n            <h6 class=\"card-title m-b-20\">Module Access</h6>\r\n            <div class=\"m-b-30\">\r\n                <ul class=\"list-group notification-list\">\r\n                    <li class=\"list-group-item\">\r\n                        Employee\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"staff_module\" class=\"check\">\r\n                            <label for=\"staff_module\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        Holidays\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"holidays_module\" class=\"check\" checked>\r\n                            <label for=\"holidays_module\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        Leaves\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"leave_module\" class=\"check\" checked>\r\n                            <label for=\"leave_module\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        Events\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"events_module\" class=\"check\" checked>\r\n                            <label for=\"events_module\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        Chat\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"chat_module\" class=\"check\" checked>\r\n                            <label for=\"chat_module\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        Jobs\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"job_module\" class=\"check\">\r\n                            <label for=\"job_module\" class=\"checktoggle\">checkbox</label>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-striped custom-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Module Permission</th>\r\n                            <th class=\"text-center\">Read</th>\r\n                            <th class=\"text-center\">Write</th>\r\n                            <th class=\"text-center\">Create</th>\r\n                            <th class=\"text-center\">Delete</th>\r\n                            <th class=\"text-center\">Import</th>\r\n                            <th class=\"text-center\">Export</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>Employee</td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Holidays</td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Leaves</td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Events</td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Role Modal -->\r\n<div id=\"add_role\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Role</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addRolesSubmit()\" [formGroup]=\"addRoles\">\r\n                    <div class=\"form-group\">\r\n                        <label>Role Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addRoles.get('addRoleName').invalid && addRoles.get('addRoleName').touched\"\r\n                        formControlName=\"addRoleName\">\r\n                        <div\r\n                        *ngIf=\"addRoles.get('addRoleName').invalid && addRoles.get('addRoleName').touched\">\r\n                        <small\r\n                            *ngIf=\"addRoles.get('addRoleName').invalid && addRoles.get('addRoleName').touched\"\r\n                            class=\"text-danger\"> *Role name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Role Modal -->\r\n\r\n<!-- Edit Role Modal -->\r\n<div id=\"edit_role\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content modal-md\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Role</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editRolesSubmit()\" [formGroup]=\"editRoles\">\r\n                    <div class=\"form-group\">\r\n                        <label>Role Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" value=\"Team Leader\" type=\"text\" [class.invalid]=\"editRoles.get('editRoleName').invalid && editRoles.get('editRoleName').touched\"\r\n                        formControlName=\"editRoleName\">\r\n                        <div\r\n                        *ngIf=\"editRoles.get('editRoleName').invalid && editRoles.get('editRoleName').touched\">\r\n                        <small\r\n                            *ngIf=\"editRoles.get('editRoleName').invalid && editRoles.get('editRoleName').touched\"\r\n                            class=\"text-danger\"> *Role name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Role Modal -->\r\n\r\n<!-- Delete Role Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_role\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Role</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteRoles()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Role Modal -->";

/***/ }),

/***/ 20260:
/*!************************************************************************************************!*\
  !*** ./src/app/all-modules/settings/salary-settings/salary-settings.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"card p-4\">\r\n            <form (ngSubmit)=\"submitSalarySettings()\" [formGroup]=\"salarySettings\">\r\n\r\n                <!-- DA and HRA Settings -->\r\n                <div class=\"settings-widget\">\r\n                    <div class=\"h3 card-title with-switch\">\r\n                        DA and HRA\r\n                        <div class=\"onoffswitch\">\r\n                            <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"switch_hra\"\r\n                                checked>\r\n                            <label class=\"onoffswitch-label\" for=\"switch_hra\">\r\n                                <span class=\"onoffswitch-inner\"></span>\r\n                                <span class=\"onoffswitch-switch\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>DA (%)</label>\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"salarySettings.get('da').invalid && salarySettings.get('da').touched\"\r\n                                formControlName=\"da\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('da').invalid && salarySettings.get('da').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('da').invalid && salarySettings.get('da').touched\"\r\n                                    class=\"text-danger\"> *DA is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>HRA (%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('hra').invalid && salarySettings.get('hra').touched\"\r\n                                formControlName=\"hra\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('hra').invalid && salarySettings.get('hra').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('hra').invalid && salarySettings.get('hra').touched\"\r\n                                    class=\"text-danger\"> *HRA is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /DA and HRA Settings -->\r\n\r\n                <!-- Provident Fund Settings -->\r\n                <div class=\"settings-widget\">\r\n                    <div class=\"h3 card-title with-switch\">\r\n                        Provident Fund Settings\r\n                        <div class=\"onoffswitch\">\r\n                            <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"switch_pf\"\r\n                                checked>\r\n                            <label class=\"onoffswitch-label\" for=\"switch_pf\">\r\n                                <span class=\"onoffswitch-inner\"></span>\r\n                                <span class=\"onoffswitch-switch\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee Share (%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('employeeShare').invalid && salarySettings.get('employeeShare').touched\"\r\n                                formControlName=\"employeeShare\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('employeeShare').invalid && salarySettings.get('employeeShare').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('employeeShare').invalid && salarySettings.get('employeeShare').touched\"\r\n                                    class=\"text-danger\"> *Employee share is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Organization Share (%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('organisationShare').invalid && salarySettings.get('organisationShare').touched\"\r\n                                formControlName=\"organisationShare\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('organisationShare').invalid && salarySettings.get('organisationShare').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('organisationShare').invalid && salarySettings.get('organisationShare').touched\"\r\n                                    class=\"text-danger\"> *Organisation share is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Provident Fund Settings -->\r\n\r\n                <!-- ESI Settings -->\r\n                <div class=\"settings-widget\">\r\n                    <div class=\"h3 card-title with-switch\">\r\n                        ESI Settings\r\n                        <div class=\"onoffswitch\">\r\n                            <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"switch_esi\">\r\n                            <label class=\"onoffswitch-label\" for=\"switch_esi\">\r\n                                <span class=\"onoffswitch-inner\"></span>\r\n                                <span class=\"onoffswitch-switch\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee Share (%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('esiEmployeeShare').invalid && salarySettings.get('esiEmployeeShare').touched\"\r\n                                formControlName=\"esiEmployeeShare\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('esiEmployeeShare').invalid && salarySettings.get('esiEmployeeShare').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('esiEmployeeShare').invalid && salarySettings.get('esiEmployeeShare').touched\"\r\n                                    class=\"text-danger\"> *Employee share is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Organization Share (%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('esiOrganisationShare').invalid && salarySettings.get('esiOrganisationShare').touched\"\r\n                                formControlName=\"esiOrganisationShare\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('esiOrganisationShare').invalid && salarySettings.get('esiOrganisationShare').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('esiOrganisationShare').invalid && salarySettings.get('esiOrganisationShare').touched\"\r\n                                    class=\"text-danger\"> *Organisation share is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /ESI Settings -->\r\n\r\n                <!-- TDS Settings -->\r\n                <div class=\"settings-widget\">\r\n                    <div class=\"h3 card-title with-switch\">\r\n                        TDS&nbsp; <small class=\"form-text text-muted\">Annual Salary</small>\r\n                        <div class=\"onoffswitch\">\r\n                            <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"switch_tds\">\r\n                            <label class=\"onoffswitch-label\" for=\"switch_tds\">\r\n                                <span class=\"onoffswitch-inner\"></span>\r\n                                <span class=\"onoffswitch-switch\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row row-sm\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary From</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('annualSalaryFrom1').invalid && salarySettings.get('annualSalaryFrom1').touched\"\r\n                                formControlName=\"annualSalaryFrom1\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('annualSalaryFrom1').invalid && salarySettings.get('annualSalaryFrom1').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('annualSalaryFrom1').invalid && salarySettings.get('annualSalaryFrom1').touched\"\r\n                                    class=\"text-danger\"> *Salary is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary To</label>\r\n                                <input class=\"form-control\" type=\"text\"[class.invalid]=\"salarySettings.get('annualSalaryTo1').invalid && salarySettings.get('annualSalaryTo1').touched\"\r\n                                formControlName=\"annualSalaryTo1\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('annualSalaryTo1').invalid && salarySettings.get('annualSalaryTo1').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('annualSalaryTo1').invalid && salarySettings.get('annualSalaryTo1').touched\"\r\n                                    class=\"text-danger\"> *Salary is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"form-group\">\r\n                                <label>%</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('annualpercentage1').invalid && salarySettings.get('annualpercentage1').touched\"\r\n                                formControlName=\"annualpercentage1\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('annualpercentage1').invalid && salarySettings.get('annualpercentage1').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('annualpercentage1').invalid && salarySettings.get('annualpercentage1').touched\"\r\n                                    class=\"text-danger\"> *Salary percentage is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"d-none d-sm-block\">&nbsp;</label>\r\n                                <button class=\"btn btn-danger w-100 set-btn\" type=\"button\"><i\r\n                                        class=\"far fa-trash-alt\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row row-sm\">\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary From</label>\r\n                                <input class=\"form-control\" type=\"text\"[class.invalid]=\"salarySettings.get('annualSalaryFrom2').invalid && salarySettings.get('annualSalaryFrom2').touched\"\r\n                                formControlName=\"annualSalaryFrom2\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('annualSalaryFrom2').invalid && salarySettings.get('annualSalaryFrom2').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('annualSalaryFrom2').invalid && salarySettings.get('annualSalaryFrom2').touched\"\r\n                                    class=\"text-danger\"> *Salary is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Salary To</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('annualSalaryTo2').invalid && salarySettings.get('annualSalaryTo2').touched\"\r\n                                formControlName=\"annualSalaryTo2\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('annualSalaryTo2').invalid && salarySettings.get('annualSalaryTo2').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('annualSalaryTo2').invalid && salarySettings.get('annualSalaryTo2').touched\"\r\n                                    class=\"text-danger\"> *Salary is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"form-group\">\r\n                                <label>%</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"salarySettings.get('annualpercentage2').invalid && salarySettings.get('annualpercentage2').touched\"\r\n                                formControlName=\"annualpercentage2\">\r\n                                <div\r\n                                *ngIf=\"salarySettings.get('annualpercentage2').invalid && salarySettings.get('annualpercentage2').touched\">\r\n                                <small\r\n                                    *ngIf=\"salarySettings.get('annualpercentage2').invalid && salarySettings.get('annualpercentage2').touched\"\r\n                                    class=\"text-danger\"> *Salary percentage is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"d-none d-sm-block\">&nbsp;</label>\r\n                                <button class=\"btn btn-danger w-100 set-btn\" type=\"button\"><i\r\n                                        class=\"far fa-trash-alt\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row row-sm\">\r\n                        <div class=\"col-sm-2 ms-auto\">\r\n                            <div class=\"form-group\">\r\n                                <button class=\"btn btn-primary w-100\" type=\"button\"><i\r\n                                        class=\"fa fa-plus\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /TDS Settings -->\r\n\r\n                <!-- Submit Button -->\r\n                <div class=\"submit-section\">\r\n                    <button class=\"btn btn-primary submit-btn\" type=\"submit\">Save</button>\r\n                </div>\r\n                <!-- /Submit Button -->\r\n\r\n            </form>\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 2858:
/*!*************************************************************************!*\
  !*** ./src/app/all-modules/settings/settings.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <div class=\"content container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">       \r\n                <!-- Page Header -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"page-head-box\">\r\n                            <h3>{{urlComplete.subUrl | titlecase}}</h3>\r\n                            <nav aria-label=\"breadcrumb\">\r\n                                <ol class=\"breadcrumb\">\r\n                                    <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                                    <li class=\"breadcrumb-item active\" aria-current=\"page\">{{urlComplete.subUrl | titlecase}}</li>\r\n                                </ol>\r\n                            </nav>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /Page Header -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-lg-3\">\r\n                        <!-- Sidebar -->\r\n                        <div class=\"card settings-menu\">\r\n                            <div class=\"sidebar-menu\">\r\n                                <ul>\r\n                                    <li class=\"menu-title\">Settings</li>\r\n                                    <li [ngClass]=\"{'active' : urlComplete.subUrl === 'company-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/company-settings\"><i class=\"la la-building\"></i> <span>Company Settings</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'localization'}\"> \r\n                                        <a routerLink=\"/layout/settings/localization\"><i class=\"la la-clock-o\"></i> <span>Localization</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'theme-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/theme-settings\"><i class=\"la la-photo\"></i> <span>Theme Settings</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'role'}\"> \r\n                                        <a routerLink=\"/layout/settings/role\"><i class=\"la la-key\"></i> <span>Roles & Permissions</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'email-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/email-settings\"><i class=\"la la-at\"></i> <span>Email Settings</span></a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{'active' : urlComplete.subUrl === 'performance-settings'}\">  \r\n                                        <a routerLink=\"/layout/settings/performance-settings\"><i class=\"la la-chart-bar\"></i> <span>Performance Settings</span></a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{'active' : urlComplete.subUrl === 'approval-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/approval-settings\"><i class=\"la la-thumbs-up\"></i> <span>Approval Settings</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'invoice-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/invoice-settings\"><i class=\"la la-pencil-square\"></i> <span>Invoice Settings</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'salary-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/salary-settings\"><i class=\"la la-money\"></i> <span>Salary Settings</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'notifications'}\"> \r\n                                        <a routerLink=\"/layout/settings/notifications\"><i class=\"la la-globe\"></i> <span>Notifications</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'change-password'}\"> \r\n                                        <a routerLink=\"/layout/settings/change-password\"><i class=\"la la-lock\"></i> <span>Change Password</span></a>\r\n                                    </li>\r\n                                    <li  [ngClass]=\"{'active' : urlComplete.subUrl === 'leave-type'}\"> \r\n                                        <a routerLink=\"/layout/settings/leave-type\"><i class=\"la la-cogs\"></i> <span>Leave Type</span></a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{'active' : urlComplete.subUrl === 'tokbox-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/tokbox-settings\"><i class=\"la la-comment\"></i> <span>ToxBox Settings</span></a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{'active' : urlComplete.subUrl === 'cron-settings'}\"> \r\n                                        <a routerLink=\"/layout/settings/cron-settings\"><i class=\"la la-rocket\"></i> <span>Cron Settings</span></a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Sidebar -->\r\n                    </div>\r\n                    <div class=\"col-md-8 col-lg-9 settings-cont\">\r\n                        <router-outlet></router-outlet>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 24516:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/settings/theme-settings/theme-settings.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n    <div class=\"card p-4\">\r\n        <form (ngSubmit)=\"submitThemeSettings()\" [formGroup]=\"themeSettings\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-lg-3 col-form-label\">Website Name</label>\r\n                <div class=\"col-lg-9\">\r\n                    <input name=\"website_name\" class=\"form-control\" value=\"Dreamguy's Technologies\" type=\"text\" [class.invalid]=\"themeSettings.get('websiteName').invalid && themeSettings.get('websiteName').touched\"\r\n                    formControlName=\"websiteName\">\r\n                    <div\r\n                    *ngIf=\"themeSettings.get('websiteName').invalid && themeSettings.get('websiteName').touched\">\r\n                    <small\r\n                        *ngIf=\"themeSettings.get('websiteName').invalid && themeSettings.get('websiteName').touched\"\r\n                        class=\"text-danger\"> *Website name is required</small>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-lg-3 col-form-label\">Light Logo</label>\r\n                <div class=\"col-lg-7\">\r\n                    <input type=\"file\" class=\"form-control\" [class.invalid]=\"themeSettings.get('lightLogo').invalid && themeSettings.get('lightLogo').touched\"\r\n                    formControlName=\"lightLogo\">\r\n                    <div\r\n                    *ngIf=\"themeSettings.get('lightLogo').invalid && themeSettings.get('lightLogo').touched\">\r\n                    <small\r\n                        *ngIf=\"themeSettings.get('lightLogo').invalid && themeSettings.get('lightLogo').touched\"\r\n                        class=\"text-danger\"> *Light logo is required</small>\r\n                </div>\r\n                    <span class=\"form-text text-muted\">Recommended image size is 40px x 40px</span>\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                    <div class=\"img-thumbnail float-end\"><img src=\"assets/img/logo2.png\" alt=\"\" width=\"40\"\r\n                            height=\"40\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-lg-3 col-form-label\">Favicon</label>\r\n                <div class=\"col-lg-7\">\r\n                    <input type=\"file\" class=\"form-control\" [class.invalid]=\"themeSettings.get('favicon').invalid && themeSettings.get('favicon').touched\"\r\n                    formControlName=\"favicon\">\r\n                    <div\r\n                    *ngIf=\"themeSettings.get('favicon').invalid && themeSettings.get('favicon').touched\">\r\n                    <small\r\n                        *ngIf=\"themeSettings.get('favicon').invalid && themeSettings.get('favicon').touched\"\r\n                        class=\"text-danger\"> *Favicon is required</small>\r\n                </div>\r\n                    <span class=\"form-text text-muted\">Recommended image size is 16px x 16px</span>\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                    <div class=\"settings-image img-thumbnail float-end\"><img src=\"assets/img/logo2.png\"\r\n                            class=\"img-fluid\" width=\"16\" height=\"16\" alt=\"\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"submit-section\">\r\n                <button class=\"btn btn-primary submit-btn\">Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 50578:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/settings/tokbox/tokbox.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"card p-4\">\r\n\t<form>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>ApiKey <span class=\"text-danger\">*</span></label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"xxxxxxxx\" readonly=\"\">\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>ApiSecret <span class=\"text-danger\">*</span></label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" value=\"xxxxxxxxxxxxxxxxxxxxxxxxxx\" readonly=\"\">\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"submit-section\">\r\n\t\t\t<button class=\"btn btn-primary submit-btn\">Save Changes</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n<!-- /Page Wrapper -->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_settings_settings_module_ts.js.map