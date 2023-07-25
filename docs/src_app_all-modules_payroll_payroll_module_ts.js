"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_payroll_payroll_module_ts"],{

/***/ 18045:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/payroll/employee-salary/employee-salary.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeSalaryComponent": () => (/* binding */ EmployeeSalaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _employee_salary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-salary.component.html?ngResource */ 99947);
/* harmony import */ var _employee_salary_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-salary.component.css?ngResource */ 71335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);










let EmployeeSalaryComponent = class EmployeeSalaryComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "employeeSalary";
        this.allSalary = [];
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
        // get all salary
        this.getSalary();
        // Add salary form Validation And Getting Values
        this.addSalary = this.formBuilder.group({
            selectStaff: [""],
            netSalary: [""],
            basic: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            da: [""],
            hra: [""],
            conveyance: [""],
            allowance: [""],
            medicalAllowance: [""],
            othersAdd: [""],
            tds: [""],
            esi: [""],
            pf: [""],
            leave: [""],
            profTax: [""],
            labour: [""],
            othersDed: [""],
        });
        // Edit salary Form Validation And Getting Values
        this.editSalary = this.formBuilder.group({
            editSelectStaff: [""],
            editNetSalary: [""],
            editBasic: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            editDa: [""],
            editHra: [""],
            editConveyance: [""],
            editAllowance: [""],
            editMedAllowance: [""],
            editAddOthers: [""],
            editTds: [""],
            editEsi: [""],
            editPf: [""],
            editleave: [""],
            editProfTax: [""],
            editLabour: [""],
            editDedOthers: [""],
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
        this.allSalary = [];
        this.getSalary();
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    //get data for data table
    getSalary() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allSalary = data;
            this.rows = this.allSalary;
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
    // Add salary Modal Api Call
    addSalarySubmit() {
        if (this.addSalary.invalid) {
            this.markFormGroupTouched(this.addSalary);
            return;
        }
        if (this.addSalary.valid) {
            let obj = {
                employee: this.addSalary.value.selectStaff,
                employeeId: "FT-0101",
                email: "johndoe@example.com",
                joinDate: "07-01-2019",
                role: "Web Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: this.addSalary.value.netSalary,
                Basic: this.addSalary.value.basic,
                tDS: this.addSalary.value.tds,
                da: this.addSalary.value.da,
                hra: this.addSalary.value.hra,
                pf: this.addSalary.value.pf,
                conveyance: this.addSalary.value.conveyance,
                leave: this.addSalary.value.leave,
                allowance: this.addSalary.value.allowance,
                proTax: this.addSalary.value.profTax,
                medAllowance: this.addSalary.value.medicalAllowance,
                labourWelfare: this.addSalary.value.labour,
                othersAdd: this.addSalary.value.othersAdd,
                othersDed: this.addSalary.value.othersDed,
                esi: this.addSalary.value.esi,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getSalary();
            $("#add_salary").modal("hide");
            this.addSalary.reset();
            this.toastr.success("Salary is added", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    // changes in add form feilds
    changeAddPrice(name, value) {
        switch (name) {
            case 0:
                this.addSalary.patchValue({
                    basic: value,
                });
                break;
            case 1:
                this.addSalary.patchValue({
                    da: value,
                });
                break;
            case 2:
                this.addSalary.patchValue({
                    hra: value,
                });
                break;
            case 3:
                this.addSalary.patchValue({
                    conveyance: value,
                });
                break;
            case 4:
                this.addSalary.patchValue({
                    allowance: value,
                });
                break;
            case 5:
                this.addSalary.patchValue({
                    medicalAllowance: value,
                });
                break;
            case 6:
                this.addSalary.patchValue({
                    othersAdd: value,
                });
                break;
            case 7:
                this.addSalary.patchValue({
                    tds: value,
                });
                break;
            case 8:
                this.addSalary.patchValue({
                    esi: value,
                });
                break;
            case 9:
                this.addSalary.patchValue({
                    pf: value,
                });
                break;
            case 10:
                this.addSalary.patchValue({
                    leave: value,
                });
                break;
            case 11:
                this.addSalary.patchValue({
                    profTax: value,
                });
                break;
            case 12:
                this.addSalary.patchValue({
                    labour: value,
                });
                break;
            case 13:
                this.addSalary.patchValue({
                    othersDed: value,
                });
                break;
            default:
                console.log("");
                break;
        }
        let basicValue = this.addSalary.value.basic;
        let daValue = this.addSalary.value.da;
        let hraValue = this.addSalary.value.hra;
        let conveyanceValue = this.addSalary.value.conveyance;
        let allowanceValue = this.addSalary.value.allowance;
        let medicalAllowanceValue = this.addSalary.value.medicalAllowance;
        let othersAddValue = this.addSalary.value.othersAdd;
        let tdsValue = this.addSalary.value.tds;
        let esiValue = this.addSalary.value.esi;
        let pfValue = this.addSalary.value.pf;
        let leaveValue = this.addSalary.value.leave;
        let profTaxValue = this.addSalary.value.profTax;
        let labourValue = this.addSalary.value.labour;
        let othersDedValue = this.addSalary.value.othersDed;
        let addValue = Number(basicValue) +
            Number(daValue) +
            Number(hraValue) +
            Number(conveyanceValue) +
            Number(allowanceValue) +
            Number(medicalAllowanceValue) +
            Number(othersAddValue);
        let dedutValue = Number(tdsValue) +
            Number(esiValue) +
            Number(pfValue) +
            Number(leaveValue) +
            Number(profTaxValue) +
            Number(labourValue) +
            Number(othersDedValue);
        this.addSalary.patchValue({
            netSalary: addValue - dedutValue,
        });
    }
    //changes in the edit form fields
    changeEditPrice(name, value) {
        switch (name) {
            case 0:
                this.editSalary.patchValue({
                    editBasic: value,
                });
                break;
            case 1:
                this.editSalary.patchValue({
                    editDa: value,
                });
                break;
            case 2:
                this.editSalary.patchValue({
                    editHra: value,
                });
                break;
            case 3:
                this.editSalary.patchValue({
                    editConveyance: value,
                });
                break;
            case 4:
                this.editSalary.patchValue({
                    editAllowance: value,
                });
                break;
            case 5:
                this.editSalary.patchValue({
                    editMedAllowance: value,
                });
                break;
            case 6:
                this.editSalary.patchValue({
                    editAddOthers: value,
                });
                break;
            case 7:
                this.editSalary.patchValue({
                    editTds: value,
                });
                break;
            case 8:
                this.editSalary.patchValue({
                    editEsi: value,
                });
                break;
            case 9:
                this.editSalary.patchValue({
                    editPf: value,
                });
                break;
            case 10:
                this.editSalary.patchValue({
                    editleave: value,
                });
                break;
            case 11:
                this.editSalary.patchValue({
                    editProfTax: value,
                });
                break;
            case 12:
                this.editSalary.patchValue({
                    editLabour: value,
                });
                break;
            case 13:
                this.editSalary.patchValue({
                    editDedOthers: value,
                });
                break;
            default:
                console.log("");
                break;
        }
        let basicValue = this.editSalary.value.editBasic;
        let daValue = this.editSalary.value.editDa;
        let hraValue = this.editSalary.value.editHra;
        let conveyanceValue = this.editSalary.value.editConveyance;
        let allowanceValue = this.editSalary.value.editAllowance;
        let medicalAllowanceValue = this.editSalary.value.editMedAllowance;
        let othersAddValue = this.editSalary.value.editAddOthers;
        let tdsValue = this.editSalary.value.editTds;
        let esiValue = this.editSalary.value.editEsi;
        let pfValue = this.editSalary.value.editPf;
        let leaveValue = this.editSalary.value.editleave;
        let profTaxValue = this.editSalary.value.editProfTax;
        let labourValue = this.editSalary.value.editLabour;
        let othersDedValue = this.editSalary.value.editDedOthers;
        let addValue = Number(basicValue) +
            Number(daValue) +
            Number(hraValue) +
            Number(conveyanceValue) +
            Number(allowanceValue) +
            Number(medicalAllowanceValue) +
            Number(othersAddValue);
        let dedutValue = Number(tdsValue) +
            Number(esiValue) +
            Number(pfValue) +
            Number(leaveValue) +
            Number(profTaxValue) +
            Number(labourValue) +
            Number(othersDedValue);
        this.editSalary.patchValue({
            editNetSalary: addValue - dedutValue,
        });
    }
    // Edit salary Modal Api Call
    editSalarySubmit() {
        if (this.editSalary.valid) {
            let obj = {
                employee: this.editSalary.value.editSelectStaff,
                employeeId: "FT-0101",
                email: "johndoe@example.com",
                joinDate: "07-01-2019",
                role: "Web Developer",
                employeeRole: "Employee",
                status: "pending",
                salary: this.editSalary.value.editNetSalary,
                Basic: this.editSalary.value.editBasic,
                tDS: this.editSalary.value.editTds,
                da: this.editSalary.value.editDa,
                hra: this.editSalary.value.editHra,
                pf: this.editSalary.value.editPf,
                conveyance: this.editSalary.value.editConveyance,
                leave: this.editSalary.value.editleave,
                allowance: this.editSalary.value.editAllowance,
                proTax: this.editSalary.value.editProfTax,
                medAllowance: this.editSalary.value.editMedAllowance,
                labourWelfare: this.editSalary.value.editLabour,
                othersAdd: this.editSalary.value.editAddOthers,
                othersDed: this.editSalary.value.editDedOthers,
                esi: this.editSalary.value.editEsi,
                id: this.editId,
            };
            this.allModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getSalary();
            $("#edit_salary").modal("hide");
            this.toastr.success("Salary is edited", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    edit(value) {
        this.editId = value;
        const index = this.allSalary.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allSalary[index];
        this.editSalary.patchValue({
            editSelectStaff: toSetValues.employee,
            editNetSalary: toSetValues.salary,
            editBasic: toSetValues.Basic,
            editDa: toSetValues.da,
            editHra: toSetValues.hra,
            editConveyance: toSetValues.conveyance,
            editAllowance: toSetValues.allowance,
            editMedAllowance: toSetValues.medAllowance,
            editAddOthers: toSetValues.othersAdd,
            editTds: toSetValues.tDS,
            editEsi: toSetValues.esi,
            editPf: toSetValues.pf,
            editleave: toSetValues.leave,
            editProfTax: toSetValues.proTax,
            editLabour: toSetValues.labourWelfare,
            editDedOthers: toSetValues.othersDed,
        });
    }
    // Delete salary Modal Api Call
    deleteSalary() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.getSalary();
        $("#delete_salary").modal("hide");
        this.toastr.success("Salary is deleted", "Success");
    }
    //search by name
    searchName(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.employee.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by role
    searchRole(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.role.toLowerCase().indexOf(val) !== -1 || !val;
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
    //search by from value
    searchByFrom(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.joinDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
    //search by To value
    searchByTo(val) {
        let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            return d.joinDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
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
EmployeeSalaryComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
EmployeeSalaryComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
EmployeeSalaryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-employee-salary",
        template: _employee_salary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_employee_salary_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmployeeSalaryComponent);



/***/ }),

/***/ 21405:
/*!******************************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll-items/payroll-items.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollItemsComponent": () => (/* binding */ PayrollItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payroll_items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll-items.component.html?ngResource */ 72926);
/* harmony import */ var _payroll_items_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll-items.component.css?ngResource */ 19092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);







let PayrollItemsComponent = class PayrollItemsComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        // dtOptions: DataTables.Settings = {};
        this.urlAdd = "payrollAddition";
        this.urlOver = "payrollOvertime";
        this.urlDeduct = "payrollDeduction";
        this.allAddPayroll = [];
        this.allOverPayroll = [];
        this.allDeductPayroll = [];
    }
    ngOnInit() {
        //get add payroll
        this.getAddPayroll();
        //get over payroll
        this.getOverpayroll();
        //get deduct payroll
        this.getDeductPayroll();
        // Add payroll Form Validation And Getting Values
        this.addPayrollForm = this.formBuilder.group({
            addPayrollName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            addPayrollCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            addPayrollUnit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // Edit payroll Form Validation And Getting Values
        this.editPayrollForm = this.formBuilder.group({
            editPayrollName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            editPayrollCategory: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            editPayrollUnit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // Add overTime Form Validation And Getting Values
        this.addOverForm = this.formBuilder.group({
            addOverName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            addOverRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // Edit overtime Form Validation And Getting Values
        this.editOverForm = this.formBuilder.group({
            editOverName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            editOverRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // Add deduction Form Validation And Getting Values
        this.addDeductForm = this.formBuilder.group({
            addDeductName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            addDeductUnit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // Edit deduction Form Validation And Getting Values
        this.editDeductForm = this.formBuilder.group({
            editDeductName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            editDeductunit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // //data table configuration
        // this.dtOptions = {
        //   // ... skipped ...
        //   dom: "lrtip",
        // };
    }
    // get payroll
    getAddPayroll() {
        this.allModuleService.get(this.urlAdd).subscribe((data) => {
            this.allAddPayroll = data;
            $("#datatable1").DataTable().clear();
        });
    }
    // get overtime
    getOverpayroll() {
        this.allModuleService.get(this.urlOver).subscribe((data) => {
            this.allOverPayroll = data;
            $("#datatable2").DataTable().clear();
        });
    }
    // get deducts
    getDeductPayroll() {
        this.allModuleService.get(this.urlDeduct).subscribe((data) => {
            this.allDeductPayroll = data;
            $("#datatable3").DataTable().clear();
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
    // Add payroll Modal Api Call
    addPayroll() {
        if (this.addPayrollForm.invalid) {
            this.markFormGroupTouched(this.addPayrollForm);
            return;
        }
        if (this.addPayrollForm.valid) {
            let obj = {
                name: this.addPayrollForm.value.addPayrollName,
                category: this.addPayrollForm.value.addPayrollCategory,
                unitCost: this.addPayrollForm.value.addPayrollUnit,
            };
            this.allModuleService.add(obj, this.urlAdd).subscribe((data) => { });
            this.getAddPayroll();
            $("#add_addition").modal("hide");
            this.addPayrollForm.reset();
            this.toastr.success("Payroll added", "Success");
        }
    }
    // Edit payroll Modal Api Call
    editPayroll() {
        let obj = {
            name: this.editPayrollForm.value.editPayrollName,
            category: this.editPayrollForm.value.editPayrollCategory,
            unitCost: this.editPayrollForm.value.editPayrollUnit,
            id: this.editAddId,
        };
        this.allModuleService.update(obj, this.urlAdd).subscribe((data1) => { });
        this.getAddPayroll();
        $("#edit_addition").modal("hide");
        this.toastr.success("Payroll edited", "Success");
    }
    editAdd(value) {
        this.editAddId = value;
        const index = this.allAddPayroll.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allAddPayroll[index];
        this.editPayrollForm.setValue({
            editPayrollName: toSetValues.name,
            editPayrollCategory: toSetValues.category,
            editPayrollUnit: toSetValues.unitCost,
        });
    }
    // Delete payroll Modal Api Call
    deletePayroll() {
        this.allModuleService
            .delete(this.tempAddId, this.urlAdd)
            .subscribe((data) => {
            this.getAddPayroll();
            $("#delete_addition").modal("hide");
        });
        this.toastr.success("Payroll deleted", "Success");
    }
    // Add overtime Modal Api Call
    addOver() {
        if (this.addOverForm.valid) {
            let obj = {
                name: this.addOverForm.value.addOverName,
                rate: this.addOverForm.value.addOverRate,
            };
            this.allModuleService.add(obj, this.urlOver).subscribe((data) => { });
            this.getOverpayroll();
            $("#add_overtime").modal("hide");
            this.addOverForm.reset();
            this.toastr.success("Overtime added", "Success");
        }
    }
    // Edit overtime Modal Api Call
    editOverSubmit() {
        let obj = {
            name: this.editOverForm.value.editOverName,
            rate: this.editOverForm.value.editOverRate,
            id: this.editOverId,
        };
        this.allModuleService.update(obj, this.urlOver).subscribe((data1) => { });
        this.getOverpayroll();
        $("#edit_overtime").modal("hide");
        this.toastr.success("Overtime edited", "Success");
    }
    editOver(value) {
        this.editOverId = value;
        const index = this.allOverPayroll.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allOverPayroll[index];
        this.editOverForm.setValue({
            editOverName: toSetValues.name,
            editOverRate: toSetValues.rate,
        });
    }
    // Delete overtime Modal Api Call
    deleteOver() {
        this.allModuleService
            .delete(this.tempOverId, this.urlOver)
            .subscribe((data) => {
            this.getOverpayroll();
            $("#delete_overtime").modal("hide");
        });
        this.toastr.success("Overtime deleted", "Success");
    }
    // Add deduction Modal Api Call
    addDeducts() {
        if (this.addDeductForm.valid) {
            let obj = {
                name: this.addDeductForm.value.addDeductName,
                unitCost: this.addDeductForm.value.addDeductUnit,
            };
            this.allModuleService.add(obj, this.urlDeduct).subscribe((data) => { });
            this.getDeductPayroll();
            $("#add_deduction").modal("hide");
            this.addDeductForm.reset();
            this.toastr.success("Deduction added", "Success");
        }
    }
    // Edit deduction Modal Api Call
    editDeductSubmit() {
        let obj = {
            name: this.editDeductForm.value.editDeductName,
            unitCost: this.editDeductForm.value.editDeductunit,
            id: this.editDeductId,
        };
        this.allModuleService.update(obj, this.urlDeduct).subscribe((data1) => { });
        this.getDeductPayroll();
        $("#edit_deduction").modal("hide");
        this.toastr.success("Deducts edited", "Success");
    }
    editDeduct(value) {
        this.editDeductId = value;
        const index = this.allDeductPayroll.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allDeductPayroll[index];
        this.editDeductForm.setValue({
            editDeductName: toSetValues.name,
            editDeductunit: toSetValues.unitCost,
        });
    }
    // Delete deduction Modal Api Call
    deleteDeduct() {
        this.allModuleService
            .delete(this.tempDeductId, this.urlDeduct)
            .subscribe((data) => {
            this.getDeductPayroll();
            $("#delete_deduction").modal("hide");
        });
        this.toastr.success("Deduction deleted", "Success");
    }
};
PayrollItemsComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService }
];
PayrollItemsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-payroll-items",
        template: _payroll_items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payroll_items_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PayrollItemsComponent);



/***/ }),

/***/ 10483:
/*!***************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollRoutingModule": () => (/* binding */ PayrollRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll.component */ 58359);
/* harmony import */ var _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-salary/employee-salary.component */ 18045);
/* harmony import */ var _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salary-view/salary-view.component */ 91475);
/* harmony import */ var _payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payroll-items/payroll-items.component */ 21405);







const routes = [
    {
        path: "",
        component: _payroll_component__WEBPACK_IMPORTED_MODULE_0__.PayrollComponent,
        children: [
            {
                path: "employee-salary",
                component: _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeSalaryComponent
            },
            {
                path: "salary-view",
                component: _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_2__.SalaryViewComponent
            },
            {
                path: "payroll-items",
                component: _payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_3__.PayrollItemsComponent
            }
        ]
    }
];
let PayrollRoutingModule = class PayrollRoutingModule {
};
PayrollRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], PayrollRoutingModule);



/***/ }),

/***/ 58359:
/*!**********************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollComponent": () => (/* binding */ PayrollComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payroll_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll.component.html?ngResource */ 31315);
/* harmony import */ var _payroll_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll.component.css?ngResource */ 27254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PayrollComponent = class PayrollComponent {
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
PayrollComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
PayrollComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-payroll',
        template: _payroll_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payroll_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], PayrollComponent);



/***/ }),

/***/ 16416:
/*!*******************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollModule": () => (/* binding */ PayrollModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll-routing.module */ 10483);
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll.component */ 58359);
/* harmony import */ var _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-salary/employee-salary.component */ 18045);
/* harmony import */ var _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salary-view/salary-view.component */ 91475);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payroll-items/payroll-items.component */ 21405);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ 59304);
/* harmony import */ var src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sharing/sharing.module */ 85260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);












let PayrollModule = class PayrollModule {
};
PayrollModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_1__.PayrollComponent, _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeSalaryComponent, _salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_3__.SalaryViewComponent, _payroll_items_payroll_items_component__WEBPACK_IMPORTED_MODULE_5__.PayrollItemsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayrollRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__.BsDatepickerModule.forRoot(),
            src_app_sharing_sharing_module__WEBPACK_IMPORTED_MODULE_7__.SharingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ]
    })
], PayrollModule);



/***/ }),

/***/ 91475:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/payroll/salary-view/salary-view.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaryViewComponent": () => (/* binding */ SalaryViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _salary_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salary-view.component.html?ngResource */ 77823);
/* harmony import */ var _salary_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salary-view.component.css?ngResource */ 10521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SalaryViewComponent = class SalaryViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalaryViewComponent.ctorParameters = () => [];
SalaryViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-salary-view',
        template: _salary_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_salary_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalaryViewComponent);



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

/***/ 71335:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/employee-salary/employee-salary.component.css?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1zYWxhcnkuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 19092:
/*!******************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll-items/payroll-items.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLWl0ZW1zLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 27254:
/*!**********************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 10521:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/salary-view/salary-view.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxhcnktdmlldy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 99947:
/*!***********************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/employee-salary/employee-salary.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Employee Salary</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Employee Salary</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        \r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <div class=\"form-group form-focus\">\r\n                <input type=\"text\" class=\"form-control floating\" (input)=\"searchName($event.target.value)\" (focusout) = \"rerender()\">\r\n                <label class=\"focus-label\">Employee Name</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\"> \r\n            <div class=\"form-group form-focus select-focus\">\r\n                <select class=\"form-select form-control\" (input)=\"searchRole($event.target.value)\">\r\n                    <option value=\"\"> -- Select -- </option>\r\n                    <option value=\"Software Engineer\">Software Engineer</option>\r\n                    <option value=\"Software Tester\">Software Tester</option>\r\n                    <option value=\"Frontend Developer\">Frontend Developer</option>\r\n                    <option value=\"UI/UX Developer\">UI/UX Developer</option>\r\n                    <option value=\"Web Developer\">Web Developer</option>\r\n                    <option value=\"Team Leader\">Team Leader</option>\r\n                    <option value=\"Android Developer\">Android Developer</option>\r\n                </select>\r\n                <label class=\"focus-label\">Role</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByFrom($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">From</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">  \r\n            <div class=\"form-group form-focus focused\">\r\n                <div class=\"cal-icon\">\r\n                    <input class=\"form-control floating datetimepicker\" bsDatepicker type=\"text\" [bsConfig]=\"{ dateInputFormat: 'DD-MM-YYYY',  returnFocusToInput: true }\" (bsValueChange)=\"searchByTo($event)\">\r\n                </div>\r\n                <label class=\"focus-label\">To</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-2\">\r\n            <a class=\"btn btn-success btn-add-emp w-100\" data-bs-toggle=\"modal\" data-bs-target=\"#add_salary\">Add Salary</a>\r\n        </div> \r\n    </div>\r\n    <!-- Search Filter -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table  datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table datatable\" id = datatable>\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Employee</th>\r\n                            <th>Employee ID</th>\r\n                            <th>Email</th>\r\n                            <th>Join Date</th>\r\n                            <th>Role</th>\r\n                            <th>Salary</th>\r\n                            <th>Payslip</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let salary of allSalary;let i = index\">\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img alt=\"\"\r\n                                            src=\"{{salary.profileimg}}\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{salary.employee}}<span>{{salary.role}}</span></a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{salary.employeeId}}</td>\r\n                            <td>{{salary.email}}</td>\r\n                            <td>{{salary.joinDate | customDate}}</td>\r\n                            <td>\r\n                                <div class=\"dropdown\">\r\n                                    <a href=\"\" class=\"role-info role-bg-one dropdown-toggle\"\r\n                                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">{{salary.role || statusValue}} </a>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" (click)= \"getStatus('Software Engineer')\">Software Engineer</a>\r\n                                        <a class=\"dropdown-item\" (click)= \"getStatus('Software Tester')\">Software Tester</a>\r\n                                        <a class=\"dropdown-item\" (click)= \"getStatus('Frontend Developer')\">Frontend Developer</a>\r\n                                        <a class=\"dropdown-item\" (click)= \"getStatus('UI/UX Developer')\">UI/UX Developer</a>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td>{{salary.salary}}</td>\r\n                            <td><a class=\"role-info role-bg-two\" routerLink=\"/layout/payroll/salary-view\">Generate Slip</a></td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_salary\" (click)=\"edit(salary.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_salary\" (click)=\"tempId = salary.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allSalary.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Salary Modal -->\r\n<div id=\"add_salary\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Staff Salary</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addSalarySubmit()\" [formGroup]=\"addSalary\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Select Staff</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"addSalary.get('selectStaff').invalid && addSalary.get('selectStaff').touched\"\r\n                                formControlName=\"selectStaff\">\r\n                                    <option value = \"john Doe\">John Doe</option>\r\n                                    <option value = \"richard miles\">Richard Miles</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"addSalary.get('selectStaff').invalid && addSalary.get('selectStaff').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('selectStaff').invalid && addSalary.get('selectStaff').touched\"\r\n                                    class=\"text-danger\"> *Staff name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <label>Net Salary</label>\r\n                            <input class=\"form-control\" type=\"text\" readonly [class.invalid]=\"addSalary.get('netSalary').invalid && addSalary.get('netSalary').touched\"\r\n                            formControlName=\"netSalary\">\r\n                            <div\r\n                            *ngIf=\"addSalary.get('netSalary').invalid && addSalary.get('netSalary').touched\">\r\n                            <small\r\n                                *ngIf=\"addSalary.get('netSalary').invalid && addSalary.get('netSalary').touched\"\r\n                                class=\"text-danger\"> *Salary is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <h4 class=\"text-primary\">Earnings</h4>\r\n                            <div class=\"form-group\">\r\n                                <label>Basic</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('basic').invalid && addSalary.get('basic').touched\"\r\n                                formControlName=\"basic\" (input)=\"changeAddPrice(0,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('basic').invalid && addSalary.get('basic').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('basic').invalid && addSalary.get('basic').touched\"\r\n                                    class=\"text-danger\"> *Basic is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>DA(40%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('da').invalid && addSalary.get('da').touched\"\r\n                                formControlName=\"da\" (input)=\"changeAddPrice(1,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('da').invalid && addSalary.get('da').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('da').invalid && addSalary.get('da').touched\"\r\n                                    class=\"text-danger\"> *DA is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>HRA(15%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('hra').invalid && addSalary.get('hra').touched\"\r\n                                formControlName=\"hra\" (input)=\"changeAddPrice(2,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('hra').invalid && addSalary.get('hra').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('hra').invalid && addSalary.get('hra').touched\"\r\n                                    class=\"text-danger\"> *HRA is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Conveyance</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('conveyance').invalid && addSalary.get('conveyance').touched\"\r\n                                formControlName=\"conveyance\" (input)=\"changeAddPrice(3,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('conveyance').invalid && addSalary.get('conveyance').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('conveyance').invalid && addSalary.get('conveyance').touched\"\r\n                                    class=\"text-danger\"> *Conveyance is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Allowance</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('allowance').invalid && addSalary.get('allowance').touched\"\r\n                                formControlName=\"allowance\" (input)=\"changeAddPrice(4,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('allowance').invalid && addSalary.get('allowance').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('allowance').invalid && addSalary.get('allowance').touched\"\r\n                                    class=\"text-danger\"> *Allowance is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Medical Allowance</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('medicalAllowance').invalid && addSalary.get('medicalAllowance').touched\"\r\n                                formControlName=\"medicalAllowance\" (input)=\"changeAddPrice(5,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('medicalAllowance').invalid && addSalary.get('medicalAllowance').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('medicalAllowance').invalid && addSalary.get('medicalAllowance').touched\"\r\n                                    class=\"text-danger\"> *Medical allowance is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Others</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('othersAdd').invalid && addSalary.get('othersAdd').touched\"\r\n                                formControlName=\"othersAdd\" (input)=\"changeAddPrice(6,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('othersAdd').invalid && addSalary.get('othersAdd').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('othersAdd').invalid && addSalary.get('othersAdd').touched\"\r\n                                    class=\"text-danger\"> *Others is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"add-more\">\r\n                                <a ><i class=\"fa fa-plus-circle\"></i> Add More</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <h4 class=\"text-primary\">Deductions</h4>\r\n                            <div class=\"form-group\">\r\n                                <label>TDS</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('tds').invalid && addSalary.get('tds').touched\"\r\n                                formControlName=\"tds\" (input)=\"changeAddPrice(7,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('tds').invalid && addSalary.get('tds').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('tds').invalid && addSalary.get('tds').touched\"\r\n                                    class=\"text-danger\"> *TDS is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>ESI</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('esi').invalid && addSalary.get('esi').touched\"\r\n                                formControlName=\"esi\" (input)=\"changeAddPrice(8,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('esi').invalid && addSalary.get('esi').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('esi').invalid && addSalary.get('esi').touched\"\r\n                                    class=\"text-danger\"> *ESI is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>PF</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('pf').invalid && addSalary.get('pf').touched\"\r\n                                formControlName=\"pf\" (input)=\"changeAddPrice(9,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('pf').invalid && addSalary.get('pf').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('pf').invalid && addSalary.get('pf').touched\"\r\n                                    class=\"text-danger\"> *PF is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Leave</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('leave').invalid && addSalary.get('leave').touched\"\r\n                                formControlName=\"leave\" (input)=\"changeAddPrice(10,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('leave').invalid && addSalary.get('leave').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('leave').invalid && addSalary.get('leave').touched\"\r\n                                    class=\"text-danger\"> *Leave is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Prof. Tax</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('profTax').invalid && addSalary.get('profTax').touched\"\r\n                                formControlName=\"profTax\" (input)=\"changeAddPrice(11,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('profTax').invalid && addSalary.get('profTax').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('profTax').invalid && addSalary.get('profTax').touched\"\r\n                                    class=\"text-danger\"> *Proffesional tax is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Labour Welfare</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('labour').invalid && addSalary.get('labour').touched\"\r\n                                formControlName=\"labour\" (input)=\"changeAddPrice(12,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('labour').invalid && addSalary.get('labour').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('labour').invalid && addSalary.get('labour').touched\"\r\n                                    class=\"text-danger\"> *Labour Welfare is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Others</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addSalary.get('othersDed').invalid && addSalary.get('othersDed').touched\"\r\n                                formControlName=\"othersDed\" (input)=\"changeAddPrice(13,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"addSalary.get('othersDed').invalid && addSalary.get('othersDed').touched\">\r\n                                <small\r\n                                    *ngIf=\"addSalary.get('othersDed').invalid && addSalary.get('othersDed').touched\"\r\n                                    class=\"text-danger\"> *Others is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"add-more\">\r\n                                <a ><i class=\"fa fa-plus-circle\"></i> Add More</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Salary Modal -->\r\n\r\n<!-- Edit Salary Modal -->\r\n<div id=\"edit_salary\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Staff Salary</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editSalarySubmit()\" [formGroup]=\"editSalary\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Select Staff</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"editSalary.get('editSelectStaff').invalid && editSalary.get('editSelectStaff').touched\"\r\n                                formControlName=\"editSelectStaff\">\r\n                                    <option>John Doe</option>\r\n                                    <option>Richard Miles</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editSelectStaff').invalid && editSalary.get('editSelectStaff').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editSelectStaff').invalid && editSalary.get('editSelectStaff').touched\"\r\n                                    class=\"text-danger\"> *Staff name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <label>Net Salary</label>\r\n                            <input class=\"form-control\" type=\"text\" readonly [class.invalid]=\"editSalary.get('editNetSalary').invalid && editSalary.get('editNetSalary').touched\"\r\n                            formControlName=\"editNetSalary\">\r\n                            <div\r\n                            *ngIf=\"editSalary.get('editNetSalary').invalid && editSalary.get('editNetSalary').touched\">\r\n                            <small\r\n                                *ngIf=\"editSalary.get('editNetSalary').invalid && editSalary.get('editNetSalary').touched\"\r\n                                class=\"text-danger\"> *Salary is required</small>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <h4 class=\"text-primary\">Earnings</h4>\r\n                            <div class=\"form-group\">\r\n                                <label>Basic</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editBasic').invalid && editSalary.get('editBasic').touched\"\r\n                                formControlName=\"editBasic\" (input)=\"changeEditPrice(0,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editBasic').invalid && editSalary.get('editBasic').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editBasic').invalid && editSalary.get('editBasic').touched\"\r\n                                    class=\"text-danger\"> *Basic is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>DA(40%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editDa').invalid && editSalary.get('editDa').touched\"\r\n                                formControlName=\"editDa\" (input)=\"changeEditPrice(1,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editDa').invalid && editSalary.get('editDa').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editDa').invalid && editSalary.get('editDa').touched\"\r\n                                    class=\"text-danger\"> *DA is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>HRA(15%)</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editHra').invalid && editSalary.get('editHra').touched\"\r\n                                formControlName=\"editHra\" (input)=\"changeEditPrice(2,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editHra').invalid && editSalary.get('editHra').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editHra').invalid && editSalary.get('editHra').touched\"\r\n                                    class=\"text-danger\"> *HRA is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Conveyance</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editConveyance').invalid && editSalary.get('editConveyance').touched\"\r\n                                formControlName=\"editConveyance\" (input)=\"changeEditPrice(3,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editConveyance').invalid && editSalary.get('editConveyance').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editConveyance').invalid && editSalary.get('editConveyance').touched\"\r\n                                    class=\"text-danger\"> *Conveyance is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Allowance</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editAllowance').invalid && editSalary.get('editAllowance').touched\"\r\n                                formControlName=\"editAllowance\" (input)=\"changeEditPrice(4,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editAllowance').invalid && editSalary.get('editAllowance').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editAllowance').invalid && editSalary.get('editAllowance').touched\"\r\n                                    class=\"text-danger\"> *Allowance is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Medical Allowance</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editMedAllowance').invalid && editSalary.get('editMedAllowance').touched\"\r\n                                formControlName=\"editMedAllowance\"(input)=\"changeEditPrice(5,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editMedAllowance').invalid && editSalary.get('editMedAllowance').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editMedAllowance').invalid && editSalary.get('editMedAllowance').touched\"\r\n                                    class=\"text-danger\"> *Medical allowance is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Others</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editAddOthers').invalid && editSalary.get('editAddOthers').touched\"\r\n                                formControlName=\"editAddOthers\" (input)=\"changeEditPrice(6,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editAddOthers').invalid && editSalary.get('editAddOthers').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editAddOthers').invalid && editSalary.get('editAddOthers').touched\"\r\n                                    class=\"text-danger\"> *Others is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <h4 class=\"text-primary\">Deductions</h4>\r\n                            <div class=\"form-group\">\r\n                                <label>TDS</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editTds').invalid && editSalary.get('editTds').touched\"\r\n                                formControlName=\"editTds\" (input)=\"changeEditPrice(7,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editTds').invalid && editSalary.get('editTds').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editTds').invalid && editSalary.get('editTds').touched\"\r\n                                    class=\"text-danger\"> *TDS is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>ESI</label>\r\n                                <input class=\"form-control\" type=\"text\"  [class.invalid]=\"editSalary.get('editEsi').invalid && editSalary.get('editEsi').touched\"\r\n                                formControlName=\"editEsi\" (input)=\"changeEditPrice(8,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editEsi').invalid && editSalary.get('editEsi').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editEsi').invalid && editSalary.get('editEsi').touched\"\r\n                                    class=\"text-danger\"> *ESI is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>PF</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editPf').invalid && editSalary.get('editPf').touched\"\r\n                                formControlName=\"editPf\" (input)=\"changeEditPrice(9,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editPf').invalid && editSalary.get('editPf').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editPf').invalid && editSalary.get('editPf').touched\"\r\n                                    class=\"text-danger\"> *PF is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Leave</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editleave').invalid && editSalary.get('editleave').touched\"\r\n                                formControlName=\"editleave\" (input)=\"changeEditPrice(10,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editleave').invalid && editSalary.get('editleave').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editleave').invalid && editSalary.get('editleave').touched\"\r\n                                    class=\"text-danger\"> *Leave is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Prof. Tax</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editProfTax').invalid && editSalary.get('editProfTax').touched\"\r\n                                formControlName=\"editProfTax\" (input)=\"changeEditPrice(11,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editProfTax').invalid && editSalary.get('editProfTax').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editProfTax').invalid && editSalary.get('editProfTax').touched\"\r\n                                    class=\"text-danger\"> *Professional tax is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Labour Welfare</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editLabour').invalid && editSalary.get('editLabour').touched\"\r\n                                formControlName=\"editLabour\" (input)=\"changeEditPrice(12,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editLabour').invalid && editSalary.get('editLabour').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editLabour').invalid && editSalary.get('editLabour').touched\"\r\n                                    class=\"text-danger\"> *Labour welfare is required</small>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Others</label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editSalary.get('editDedOthers').invalid && editSalary.get('editDedOthers').touched\"\r\n                                formControlName=\"editDedOthers\" (input)=\"changeEditPrice(13,$event.target.value)\">\r\n                                <div\r\n                                *ngIf=\"editSalary.get('editDedOthers').invalid && editSalary.get('editDedOthers').touched\">\r\n                                <small\r\n                                    *ngIf=\"editSalary.get('editDedOthers').invalid && editSalary.get('editDedOthers').touched\"\r\n                                    class=\"text-danger\"> *Others is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Salary Modal -->\r\n\r\n<!-- Delete Salary Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_salary\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Salary</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteSalary()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Salary Modal -->";

/***/ }),

/***/ 72926:
/*!*******************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll-items/payroll-items.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Payroll Items</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Payroll Items</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Page Tab -->\r\n    <div class=\"page-menu\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <ul class=\"nav nav-tabs nav-tabs-bottom\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" data-bs-toggle=\"tab\" href=\"#tab_additions\">Additions</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab_overtime\">Overtime</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#tab_deductions\">Deductions</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Tab -->\r\n\r\n    <!-- Tab Content -->\r\n    <div class=\"tab-content\">\r\n\r\n        <!-- Additions Tab -->\r\n        <div class=\"tab-pane show active\" id=\"tab_additions\">\r\n\r\n            <!-- Add Addition Button -->\r\n            <div class=\"row filter-row mt-4\">\r\n                <div class=\"col-md-8\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"add-emp-section\">\r\n                        <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_addition\"><i class=\"fas fa-plus\"></i> Add Addition</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Add Addition Button -->\r\n\r\n            <!-- Payroll Additions Table -->\r\n            <div class=\"payroll-table card\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-radius\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Category</th>\r\n                                <th>Default/Unit Amount</th>\r\n                                <th class=\"text-end\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let addPayroll of allAddPayroll;let i = index\">\r\n                                <th>{{addPayroll.name}}</th>\r\n                                <td>{{addPayroll.category}}</td>\r\n                                <td>{{addPayroll.unitCost}}</td>\r\n                                <td class=\"text-end ico-sec justify-content-end\">\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_addition\" (click)=\"editAdd(addPayroll.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_addition\" (click)=\"tempAddId = addPayroll.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"allAddPayroll.length === 0\">\r\n                                <td colspan=\"10\">\r\n                                    <h5 style=\"text-align: center;\">No data found</h5>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- /Payroll Additions Table -->\r\n\r\n        </div>\r\n        <!-- Additions Tab -->\r\n\r\n        <!-- Overtime Tab -->\r\n        <div class=\"tab-pane\" id=\"tab_overtime\">\r\n\r\n            <!-- Add Overtime Button -->\r\n            <div class=\"row filter-row mt-4\">\r\n                <div class=\"col-md-8\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"add-emp-section\">\r\n                        <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_overtime\"><i class=\"fas fa-plus\"></i> Add Overtime</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Add Overtime Button -->\r\n\r\n            <!-- Payroll Overtime Table -->\r\n            <div class=\"payroll-table card\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-radius\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Rate</th>\r\n                                <th class=\"text-end\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let overPayroll of allOverPayroll;let i = index\">\r\n                                <th>{{overPayroll.name}}</th>\r\n                                <td>{{overPayroll.rate}}</td>\r\n                                <td class=\"text-end ico-sec justify-content-end\">\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_overtime\" (click)=\"editOver(overPayroll.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_overtime\" (click)=\"tempOverId = overPayroll.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"allOverPayroll.length === 0\">\r\n                                <td colspan=\"10\">\r\n                                    <h5 style=\"text-align: center;\">No data found</h5>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- /Payroll Overtime Table -->\r\n\r\n        </div>\r\n        <!-- /Overtime Tab -->\r\n\r\n        <!-- Deductions Tab -->\r\n        <div class=\"tab-pane\" id=\"tab_deductions\">\r\n\r\n            <!-- Add Deductions Button -->\r\n            <div class=\"row filter-row mt-4\">\r\n                <div class=\"col-md-8\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"add-emp-section\">\r\n                        <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_deduction\"><i class=\"fas fa-plus\"></i> Add Deduction</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Add Deductions Button -->\r\n\r\n            <!-- Payroll Deduction Table -->\r\n            <div class=\"payroll-table card\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-radius\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Name</th>\r\n                                <th>Default/Unit Amount</th>\r\n                                <th class=\"text-end\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let deductPayroll of allDeductPayroll;let i = index\">\r\n                                <th>{{deductPayroll.name}}</th>\r\n                                <td>{{deductPayroll.unitCost}}</td>\r\n                                <td class=\"text-end ico-sec justify-content-end\">\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#edit_deduction\" (click)=\"editDeduct(deductPayroll.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                    <a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#delete_deduction\" (click)=\"tempDeductId = deductPayroll.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"allDeductPayroll.length === 0\">\r\n                                <td colspan=\"10\">\r\n                                    <h5 style=\"text-align: center;\">No data found</h5>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- /Payroll Deduction Table -->\r\n\r\n        </div>\r\n        <!-- /Deductions Tab -->\r\n\r\n    </div>\r\n    <!-- Tab Content -->\r\n\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add Addition Modal -->\r\n<div id=\"add_addition\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Addition</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addPayroll()\" [formGroup]=\"addPayrollForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addPayrollForm.get('addPayrollName').invalid && addPayrollForm.get('addPayrollName').touched\"\r\n                        formControlName=\"addPayrollName\">\r\n                        <div\r\n                                    *ngIf=\"addPayrollForm.get('addPayrollName').invalid && addPayrollForm.get('addPayrollName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addPayrollForm.get('addPayrollName').invalid && addPayrollForm.get('addPayrollName').touched\"\r\n                                        class=\"text-danger\"> *Name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Category <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"addPayrollForm.get('addPayrollCategory').invalid && addPayrollForm.get('addPayrollCategory').touched\"\r\n                        formControlName=\"addPayrollCategory\">\r\n                            <option>Select a category</option>\r\n                            <option>Monthly remuneration</option>\r\n                            <option>Additional remuneration</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"addPayrollForm.get('addPayrollCategory').invalid && addPayrollForm.get('addPayrollCategory').touched\">\r\n                        <small\r\n                            *ngIf=\"addPayrollForm.get('addPayrollCategory').invalid && addPayrollForm.get('addPayrollCategory').touched\"\r\n                            class=\"text-danger\"> *Category is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"unit_calculation\" class=\"check\">\r\n                            <label for=\"unit_calculation\" class=\"checktoggle\"></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\">$</span>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"addPayrollForm.get('addPayrollUnit').invalid && addPayrollForm.get('addPayrollUnit').touched\"\r\n                            formControlName=\"addPayrollUnit\">\r\n                            <span class=\"input-group-text\">.00</span>\r\n                        </div>\r\n                        <div\r\n                            *ngIf=\"addPayrollForm.get('addPayrollUnit').invalid && addPayrollForm.get('addPayrollUnit').touched\">\r\n                            <small\r\n                                *ngIf=\"addPayrollForm.get('addPayrollUnit').invalid && addPayrollForm.get('addPayrollUnit').touched\"\r\n                                class=\"text-danger\"> *Category is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"addition_assignee\" id=\"addition_no_emp\"\r\n                                value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"addition_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"addition_assignee\" id=\"addition_all_emp\"\r\n                                value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"addition_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"addition_assignee\"\r\n                                id=\"addition_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"addition_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Addition Modal -->\r\n\r\n<!-- Edit Addition Modal -->\r\n<div id=\"edit_addition\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Addition</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editPayroll()\" [formGroup]=\"editPayrollForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"editPayrollForm.get('editPayrollName').invalid && editPayrollForm.get('editPayrollName').touched\"\r\n                        formControlName=\"editPayrollName\">\r\n                        <div\r\n                        *ngIf=\"editPayrollForm.get('editPayrollName').invalid && editPayrollForm.get('editPayrollName').touched\">\r\n                        <small\r\n                            *ngIf=\"editPayrollForm.get('editPayrollName').invalid && editPayrollForm.get('editPayrollName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Category <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\" [class.invalid]=\"editPayrollForm.get('editPayrollCategory').invalid && editPayrollForm.get('editPayrollCategory').touched\"\r\n                        formControlName=\"editPayrollCategory\">\r\n                            <option>Select a category</option>\r\n                            <option>Monthly remuneration</option>\r\n                            <option>Additional remuneration</option>\r\n                        </select>\r\n                        <div\r\n                        *ngIf=\"editPayrollForm.get('editPayrollCategory').invalid && editPayrollForm.get('editPayrollCategory').touched\">\r\n                        <small\r\n                            *ngIf=\"editPayrollForm.get('editPayrollCategory').invalid && editPayrollForm.get('editPayrollCategory').touched\"\r\n                            class=\"text-danger\"> *Category is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"edit_unit_calculation\" class=\"check\">\r\n                            <label for=\"edit_unit_calculation\" class=\"checktoggle\"></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\">$</span>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"editPayrollForm.get('editPayrollUnit').invalid && editPayrollForm.get('editPayrollUnit').touched\"\r\n                            formControlName=\"editPayrollUnit\">\r\n                                <span class=\"input-group-text\">.00</span>\r\n                        </div>\r\n                        <div\r\n                            *ngIf=\"editPayrollForm.get('editPayrollUnit').invalid && editPayrollForm.get('editPayrollUnit').touched\">\r\n                            <small\r\n                                *ngIf=\"editPayrollForm.get('editPayrollUnit').invalid && editPayrollForm.get('editPayrollUnit').touched\"\r\n                                class=\"text-danger\"> *Unit is required</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_addition_assignee\"\r\n                                id=\"edit_addition_no_emp\" value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"edit_addition_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_addition_assignee\"\r\n                                id=\"edit_addition_all_emp\" value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"edit_addition_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_addition_assignee\"\r\n                                id=\"edit_addition_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"edit_addition_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Addition Modal -->\r\n\r\n<!-- Delete Addition Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_addition\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Addition</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deletePayroll()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Addition Modal -->\r\n\r\n<!-- Add Overtime Modal -->\r\n<div id=\"add_overtime\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Overtime</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addOver()\" [formGroup]=\"addOverForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addOverForm.get('addOverName').invalid && addOverForm.get('addOverName').touched\"\r\n                        formControlName=\"addOverName\">\r\n                        <div\r\n                                    *ngIf=\"addOverForm.get('addOverName').invalid && addOverForm.get('addOverName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"addOverForm.get('addOverName').invalid && addOverForm.get('addOverName').touched\"\r\n                                        class=\"text-danger\"> *Name is required</small>\r\n                                </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate Type <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\">\r\n                            <option>-</option>\r\n                            <option>Daily Rate</option>\r\n                            <option>Hourly Rate</option>\r\n                        </select>\r\n                       \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\"  [class.invalid]=\"addOverForm.get('addOverRate').invalid && addOverForm.get('addOverRate').touched\"\r\n                        formControlName=\"addOverRate\">\r\n                        <div\r\n                        *ngIf=\"addOverForm.get('addOverRate').invalid && addOverForm.get('addOverRate').touched\">\r\n                        <small\r\n                            *ngIf=\"addOverForm.get('addOverRate').invalid && addOverForm.get('addOverRate').touched\"\r\n                            class=\"text-danger\"> *Rate is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Overtime Modal -->\r\n\r\n<!-- Edit Overtime Modal -->\r\n<div id=\"edit_overtime\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Overtime</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editOverSubmit()\" [formGroup]=\"editOverForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editOverForm.get('editOverName').invalid && editOverForm.get('editOverName').touched\"\r\n                        formControlName=\"editOverName\">\r\n                        <div\r\n                        *ngIf=\"editOverForm.get('editOverName').invalid && editOverForm.get('editOverName').touched\">\r\n                        <small\r\n                            *ngIf=\"editOverForm.get('editOverName').invalid && editOverForm.get('editOverName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate Type <span class=\"text-danger\">*</span></label>\r\n                        <select class=\"form-select form-control\">\r\n                            <option>-</option>\r\n                            <option>Daily Rate</option>\r\n                            <option>Hourly Rate</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editOverForm.get('editOverRate').invalid && editOverForm.get('editOverRate').touched\"\r\n                        formControlName=\"editOverRate\">\r\n                        <div\r\n                        *ngIf=\"editOverForm.get('editOverRate').invalid && editOverForm.get('editOverRate').touched\">\r\n                        <small\r\n                            *ngIf=\"editOverForm.get('editOverRate').invalid && editOverForm.get('editOverRate').touched\"\r\n                            class=\"text-danger\"> *Rate is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Overtime Modal -->\r\n\r\n<!-- Delete Overtime Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_overtime\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Overtime</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteOver()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Overtime Modal -->\r\n\r\n<!-- Add Deduction Modal -->\r\n<div id=\"add_deduction\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Deduction</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addDeducts()\" [formGroup]=\"addDeductForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"addDeductForm.get('addDeductName').invalid && addDeductForm.get('addDeductName').touched\"\r\n                        formControlName=\"addDeductName\">\r\n                        <div\r\n                        *ngIf=\"addDeductForm.get('addDeductName').invalid && addDeductForm.get('addDeductName').touched\">\r\n                        <small\r\n                            *ngIf=\"addDeductForm.get('addDeductName').invalid && addDeductForm.get('addDeductName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"unit_calculation_deduction\" class=\"check\">\r\n                            <label for=\"unit_calculation_deduction\" class=\"checktoggle\"></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\">$</span>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"addDeductForm.get('addDeductUnit').invalid && addDeductForm.get('addDeductUnit').touched\"\r\n                            formControlName=\"addDeductUnit\">\r\n                                <span class=\"input-group-text\">.00</span>\r\n                        </div>\r\n                        <div\r\n                        *ngIf=\"addDeductForm.get('addDeductUnit').invalid && addDeductForm.get('addDeductUnit').touched\">\r\n                        <small\r\n                            *ngIf=\"addDeductForm.get('addDeductUnit').invalid && addDeductForm.get('addDeductUnit').touched\"\r\n                            class=\"text-danger\"> *Unit is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"deduction_assignee\" id=\"deduction_no_emp\"\r\n                                value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"deduction_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"deduction_assignee\"\r\n                                id=\"deduction_all_emp\" value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"deduction_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"deduction_assignee\"\r\n                                id=\"deduction_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"deduction_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add Deduction Modal -->\r\n\r\n<!-- Edit Deduction Modal -->\r\n<div id=\"edit_deduction\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit Deduction</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editDeductSubmit()\" [formGroup]=\"editDeductForm\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name <span class=\"text-danger\">*</span></label>\r\n                        <input class=\"form-control\" type=\"text\" [class.invalid]=\"editDeductForm.get('editDeductName').invalid && editDeductForm.get('editDeductName').touched\"\r\n                        formControlName=\"editDeductName\">\r\n                        <div\r\n                        *ngIf=\"editDeductForm.get('editDeductName').invalid && editDeductForm.get('editDeductName').touched\">\r\n                        <small\r\n                            *ngIf=\"editDeductForm.get('editDeductName').invalid && editDeductForm.get('editDeductName').touched\"\r\n                            class=\"text-danger\"> *Name is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Unit calculation</label>\r\n                        <div class=\"status-toggle\">\r\n                            <input type=\"checkbox\" id=\"edit_unit_calculation_deduction\" class=\"check\">\r\n                            <label for=\"edit_unit_calculation_deduction\" class=\"checktoggle\"></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Unit Amount</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\">$</span>\r\n                            <input type=\"text\" class=\"form-control\" [class.invalid]=\"editDeductForm.get('editDeductunit').invalid && editDeductForm.get('editDeductunit').touched\"\r\n                            formControlName=\"editDeductunit\">\r\n                            <span class=\"input-group-text\">.00</span>\r\n                        </div>\r\n                        <div\r\n                        *ngIf=\"editDeductForm.get('editDeductunit').invalid && editDeductForm.get('editDeductunit').touched\">\r\n                        <small\r\n                            *ngIf=\"editDeductForm.get('editDeductunit').invalid && editDeductForm.get('editDeductunit').touched\"\r\n                            class=\"text-danger\"> *Unit is required</small>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"d-block\">Assignee</label>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_deduction_assignee\"\r\n                                id=\"edit_deduction_no_emp\" value=\"option1\" checked>\r\n                            <label class=\"form-check-label\" for=\"edit_deduction_no_emp\">\r\n                                No assignee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_deduction_assignee\"\r\n                                id=\"edit_deduction_all_emp\" value=\"option2\">\r\n                            <label class=\"form-check-label\" for=\"edit_deduction_all_emp\">\r\n                                All employees\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"edit_deduction_assignee\"\r\n                                id=\"edit_deduction_single_emp\" value=\"option3\">\r\n                            <label class=\"form-check-label\" for=\"edit_deduction_single_emp\">\r\n                                Select Employee\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <select class=\"form-select form-control\">\r\n                                <option>-</option>\r\n                                <option>Select All</option>\r\n                                <option>John Doe</option>\r\n                                <option>Richard Miles</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit Addition Modal -->\r\n\r\n<!-- Delete Deduction Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_deduction\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete Deduction</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteDeduct()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete Deduction Modal -->";

/***/ }),

/***/ 31315:
/*!***********************************************************************!*\
  !*** ./src/app/all-modules/payroll/payroll.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->";

/***/ }),

/***/ 77823:
/*!***************************************************************************************!*\
  !*** ./src/app/all-modules/payroll/salary-view/salary-view.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Payslip</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Payslip</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Print Section -->\r\n    <div class=\"page-header\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-auto float-end ms-auto\">\r\n                <div class=\"btn-group btn-group-sm\">\r\n                    <button class=\"btn btn-white\">CSV</button>\r\n                    <button class=\"btn btn-white\">PDF</button>\r\n                    <button class=\"btn btn-white\"><i class=\"fa fa-print fa-lg\"></i> Print</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Print Section -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"payslip-title\">Payslip for the month of Feb 2019</h4>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <img src=\"assets/img/logo2.png\" class=\"inv-logo\" alt=\"\">\r\n                            <ul class=\"list-unstyled mb-0\">\r\n                                <li>Dreamguy's Technologies</li>\r\n                                <li>3864 Quiet Valley Lane,</li>\r\n                                <li>Sherman Oaks, CA, 91403</li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-sm-6 m-b-20\">\r\n                            <div class=\"invoice-details\">\r\n                                <h3 class=\"text-uppercase\">Payslip #49029</h3>\r\n                                <ul class=\"list-unstyled\">\r\n                                    <li>Salary Month: <span>March, 2019</span></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 m-b-20\">\r\n                            <ul class=\"list-unstyled\">\r\n                                <li>\r\n                                    <h5 class=\"mb-0\"><strong>John Doe</strong></h5>\r\n                                </li>\r\n                                <li><span>Web Designer</span></li>\r\n                                <li>Employee ID: FT-0009</li>\r\n                                <li>Joining Date: 1 Jan 2013</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div>\r\n                                <h4 class=\"m-b-10\"><strong>Earnings</strong></h4>\r\n                                <table class=\"table table-bordered\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><strong>Basic Salary</strong> <span class=\"float-end\">$6500</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>House Rent Allowance (H.R.A.)</strong> <span\r\n                                                    class=\"float-end\">$55</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Conveyance</strong> <span class=\"float-end\">$55</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Other Allowance</strong> <span class=\"float-end\">$55</span>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Total Earnings</strong> <span\r\n                                                    class=\"float-end\"><strong>$55</strong></span></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div>\r\n                                <h4 class=\"m-b-10\"><strong>Deductions</strong></h4>\r\n                                <table class=\"table table-bordered\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><strong>Tax Deducted at Source (T.D.S.)</strong> <span\r\n                                                    class=\"float-end\">$0</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Provident Fund</strong> <span class=\"float-end\">$0</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>ESI</strong> <span class=\"float-end\">$0</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Loan</strong> <span class=\"float-end\">$300</span></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong>Total Deductions</strong> <span\r\n                                                    class=\"float-end\"><strong>$59698</strong></span></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                            <p><strong>Net Salary: $59698</strong> (Fifty nine thousand six hundred and ninety eight\r\n                                only.)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_payroll_payroll_module_ts.js.map