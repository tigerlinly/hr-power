"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_users_users_module_ts"],{

/***/ 53641:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/users/user-main/user-main.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMainComponent": () => (/* binding */ UserMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-main.component.html?ngResource */ 20552);
/* harmony import */ var _user_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-main.component.css?ngResource */ 50845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);









let UserMainComponent = class UserMainComponent {
    constructor(allModuleService, formBuilder, toastr) {
        this.allModuleService = allModuleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.dtOptions = {};
        this.url = "users";
        this.allUsers = [];
        this.rows = [];
        this.srch = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        $(".floating")
            .on("focus blur", function (e) {
            $(this)
                .parents(".form-focus")
                .toggleClass("focused", e.type === "focus" || this.value.length > 0);
        })
            .trigger("blur");
        this.getUsers();
        // Add Provident Form Validation And Getting Values
        this.addUsers = this.formBuilder.group({
            addUserName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addRole: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addCompany: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // Edit Provident Form Validation And Getting Values
        this.editUsers = this.formBuilder.group({
            editUsersName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editRole: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            editCompany: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
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
        this.allUsers = [];
        this.getUsers();
        setTimeout(() => {
            this.dtTrigger.next();
        }, 1000);
    }
    getUsers() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allUsers = data;
            this.rows = this.allUsers;
            this.srch = [...this.rows];
        });
    }
    // Add Provident Modal Api Call
    addUsersSubmit() {
        if (this.addUsers.valid) {
            let obj = {
                name: this.addUsers.value.addUserName,
                designation: "Web Designer",
                email: this.addUsers.value.addEmail,
                role: this.addUsers.value.addRole,
                company: this.addUsers.value.addCompany,
            };
            this.allModuleService.add(obj, this.url).subscribe((data) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getUsers();
            $("#add_user").modal("hide");
            this.addUsers.reset();
            this.toastr.success("Users is added", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    // Edit Provident Modal Api Call
    editUsersSubmit() {
        if (this.editUsers.valid) {
            let obj = {
                name: this.editUsers.value.editUsersName,
                designation: "Android Developer",
                email: this.editUsers.value.editEmail,
                company: this.editUsers.value.editCompany,
                role: this.editUsers.value.editRole,
                id: this.editId,
            };
            this.allModuleService.update(obj, this.url).subscribe((data1) => {
                $("#datatable").DataTable().clear();
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                });
                this.dtTrigger.next();
            });
            this.getUsers();
            $("#edit_user").modal("hide");
            this.toastr.success("Users is edited", "Success");
        }
        else {
            this.toastr.warning("Mandatory fields required", "");
        }
    }
    edit(value) {
        this.editId = value;
        const index = this.allUsers.findIndex((item) => {
            return item.id === value;
        });
        let toSetValues = this.allUsers[index];
        this.editUsers.setValue({
            editUsersName: toSetValues.name,
            editEmail: toSetValues.email,
            editRole: toSetValues.role,
            editCompany: toSetValues.company,
        });
    }
    // Delete Provident Modal Api Call
    deleteUsers() {
        this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
            $("#datatable").DataTable().clear();
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.destroy();
            });
            this.dtTrigger.next();
        });
        this.getUsers();
        $("#delete_user").modal("hide");
        this.toastr.success("Users is deleted", "Success");
    }
    //search by name
    searchName(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by name
    searchStatus(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.company.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    //search by name
    searchRole(val) {
        this.rows.splice(0, this.rows.length);
        let temp = this.srch.filter(function (d) {
            val = val.toLowerCase();
            return d.role.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows.push(...temp);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
UserMainComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
UserMainComponent.propDecorators = {
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, { static: false },] }]
};
UserMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-user-main",
        template: _user_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserMainComponent);



/***/ }),

/***/ 38975:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/users/users-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 25954);
/* harmony import */ var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-main/user-main.component */ 53641);





const routes = [
    {
        path: "",
        component: _users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent,
        children: [
            {
                path: "user-main",
                component: _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_1__.UserMainComponent
            }
        ]
    }
];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], UsersRoutingModule);



/***/ }),

/***/ 25954:
/*!******************************************************!*\
  !*** ./src/app/all-modules/users/users.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component.html?ngResource */ 33016);
/* harmony import */ var _users_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.css?ngResource */ 79194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let UsersComponent = class UsersComponent {
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
UsersComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-users',
        template: _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_users_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], UsersComponent);



/***/ }),

/***/ 34190:
/*!***************************************************!*\
  !*** ./src/app/all-modules/users/users.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 38975);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component */ 25954);
/* harmony import */ var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-main/user-main.component */ 53641);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 73899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);








let UsersModule = class UsersModule {
};
UsersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent, _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_2__.UserMainComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ]
    })
], UsersModule);



/***/ }),

/***/ 50845:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/users/user-main/user-main.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1haW4uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 79194:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/users/users.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 20552:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/users/user-main/user-main.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n            <div class=\"page-wrapper\">\r\n<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Users</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Users</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Search Filter -->\r\n    <div class=\"row filter-row\">\r\n        \r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus select-focus mb-0\">\r\n                <select class=\"form-select form-control\" (input)=\"searchStatus($event.target.value)\">\r\n                    <option value = \"\">Select Company</option>\r\n                    <option value = \"Global Technologies\">Global Technologies</option>\r\n                    <option value = \"Delta Infotech\">Delta Infotech</option>\r\n                </select>\r\n                <label class=\"focus-label\">Company</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">  \r\n            <div class=\"form-group form-focus select-focus mb-0\">\r\n                <select class=\"form-select form-control\" (input)=\"searchRole($event.target.value)\">\r\n                    <option value = \"\">Select Roll</option>\r\n                    <option value = \"Web Developer\">Web Developer</option>\r\n                    <option value = \"Web Designer\">Web Designer</option>\r\n                    <option value = \"Android Developer\">Android Developer</option>\r\n                    <option value = \"Ios Developer\">Ios Developer</option>\r\n                </select>\r\n                <label class=\"focus-label\">Role</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <a class=\"btn btn-success btn-search\"><i class=\"fas fa-search me-2\"></i> Search </a>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-3\">\r\n            <div class=\"add-emp-section\">\r\n                <a class=\"btn btn-success btn-add-emp\" data-bs-toggle=\"modal\" data-bs-target=\"#add_user\"><i class=\"fas fa-plus\"></i> Add User</a>\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <!-- Search Filter -->\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-responsive\">\r\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"class=\"table table-striped custom-table datatable\"  id = \"datatable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Company</th>\r\n                            <th>Created Date</th>\r\n                            <th>Role</th>\r\n                            <th class=\"text-end\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let users of allUsers;let i = index\">\r\n                            <td>\r\n                                <h2 class=\"table-avatar\">\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\" class=\"avatar\"><img src=\"{{users.profileimg}}\"\r\n                                            alt=\"\"></a>\r\n                                    <a routerLink=\"/layout/employees/employeeprofile\">{{users.name}} <span>{{users.designation}}</span></a>\r\n                                </h2>\r\n                            </td>\r\n                            <td>{{users.email}}</td>\r\n                            <td>{{users.company}}</td>\r\n                            <td>1 Jan 2013</td>\r\n                            <td>\r\n                                <span class=\"role-info role-bg-three\">{{users.role}}</span>\r\n                            </td>\r\n                            <td class=\"text-end ico-sec justify-content-end\">\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#edit_user\" (click)=\"edit(users.id)\"><i class=\"fas fa-pen\"></i></a>\r\n                                <a data-bs-toggle=\"modal\" data-bs-target=\"#delete_user\" (click)=\"tempId = users.id\"><i class=\"far fa-trash-alt\"></i></a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"allUsers.length === 0\">\r\n                            <td colspan=\"10\">\r\n                                <h5 style=\"text-align: center;\">No data found</h5>\r\n                            </td>\r\n                           \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- Add User Modal -->\r\n<div id=\"add_user\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add User</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"addUsersSubmit()\" [formGroup]=\"addUsers\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Username <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"addUsers.get('addUserName').invalid && addUsers.get('addUserName').touched\"\r\n                                formControlName=\"addUserName\">\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addUserName').invalid && addUsers.get('addUserName').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addUserName').invalid && addUsers.get('addUserName').touched\"\r\n                                    class=\"text-danger\"> *User name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"email\" [class.invalid]=\"addUsers.get('addEmail').invalid && addUsers.get('addEmail').touched\"\r\n                                formControlName=\"addEmail\">\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addEmail').invalid && addUsers.get('addEmail').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addEmail').invalid && addUsers.get('addEmail').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Confirm Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Phone </label>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Role</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"addUsers.get('addRole').invalid && addUsers.get('addRole').touched\"\r\n                                formControlName=\"addRole\">\r\n                                    <option>Admin</option>\r\n                                    <option>Client</option>\r\n                                    <option>Employee</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addRole').invalid && addUsers.get('addRole').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addRole').invalid && addUsers.get('addRole').touched\"\r\n                                    class=\"text-danger\"> *Role is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Company</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"addUsers.get('addCompany').invalid && addUsers.get('addCompany').touched\"\r\n                                formControlName=\"addCompany\">\r\n                                    <option>Global Technologies</option>\r\n                                    <option>Delta Infotech</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"addUsers.get('addCompany').invalid && addUsers.get('addCompany').touched\">\r\n                                <small\r\n                                    *ngIf=\"addUsers.get('addCompany').invalid && addUsers.get('addCompany').touched\"\r\n                                    class=\"text-danger\"> *Company is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee ID <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" class=\"form-control floating\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive m-t-15\">\r\n                        <table class=\"table table-striped custom-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Module Permission</th>\r\n                                    <th class=\"text-center\">Read</th>\r\n                                    <th class=\"text-center\">Write</th>\r\n                                    <th class=\"text-center\">Create</th>\r\n                                    <th class=\"text-center\">Delete</th>\r\n                                    <th class=\"text-center\">Import</th>\r\n                                    <th class=\"text-center\">Export</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Employee</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Holidays</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Leaves</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Events</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Add User Modal -->\r\n\r\n<!-- Edit User Modal -->\r\n<div id=\"edit_user\" class=\"modal custom-modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Edit User</h5>\r\n                <button type=\"button\" class=\"close\" data-bs-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (ngSubmit)=\"editUsersSubmit()\" [formGroup]=\"editUsers\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" value=\"John\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                                <input class=\"form-control\" value=\"Doe\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Username <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"text\" [class.invalid]=\"editUsers.get('editUsersName').invalid && editUsers.get('editUsersName').touched\"\r\n                                formControlName=\"editUsersName\">\r\n\r\n                                 <div\r\n                                    *ngIf=\"editUsers.get('editUsersName').invalid && editUsers.get('editUsersName').touched\">\r\n                                    <small\r\n                                        *ngIf=\"editUsers.get('editUsersName').invalid && editUsers.get('editUsersName').touched\"\r\n                                        class=\"text-danger\"> *User name is required</small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email <span class=\"text-danger\">*</span></label>\r\n                                <input class=\"form-control\" type=\"email\" [class.invalid]=\"editUsers.get('editEmail').invalid && editUsers.get('editEmail').touched\"\r\n                                formControlName=\"editEmail\">\r\n\r\n                                <div\r\n                                *ngIf=\"editUsers.get('editEmail').invalid && editUsers.get('editEmail').touched\">\r\n                                <small\r\n                                    *ngIf=\"editUsers.get('editEmail').invalid && editUsers.get('editEmail').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Confirm Password</label>\r\n                                <input class=\"form-control\" type=\"password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Phone </label>\r\n                                <input class=\"form-control\" value=\"9876543210\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Role</label>\r\n                                <select class=\"form-select form-control\" [class.invalid]=\"editUsers.get('editRole').invalid && editUsers.get('editRole').touched\"\r\n                                formControlName=\"editRole\">\r\n                                    <option>Admin</option>\r\n                                    <option>Client</option>\r\n                                    <option selected>Employee</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editUsers.get('editRole').invalid && editUsers.get('editRole').touched\">\r\n                                <small\r\n                                    *ngIf=\"editUsers.get('editRole').invalid && editUsers.get('editRole').touched\"\r\n                                    class=\"text-danger\"> *Role is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Company</label>\r\n                                <select class=\"form-select form-control\"  [class.invalid]=\"editUsers.get('editCompany').invalid && editUsers.get('editCompany').touched\"\r\n                                formControlName=\"editCompany\">\r\n                                    <option>Global Technologies</option>\r\n                                    <option>Delta Infotech</option>\r\n                                </select>\r\n                                <div\r\n                                *ngIf=\"editUsers.get('editCompany').invalid && editUsers.get('editCompany').touched\">\r\n                                <small\r\n                                    *ngIf=\"editUsers.get('editCompany').invalid && editUsers.get('editCompany').touched\"\r\n                                    class=\"text-danger\"> *Company is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee ID <span class=\"text-danger\">*</span></label>\r\n                                <input type=\"text\" value=\"FT-0001\" class=\"form-control floating\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive m-t-15\">\r\n                        <table class=\"table table-striped custom-table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Module Permission</th>\r\n                                    <th class=\"text-center\">Read</th>\r\n                                    <th class=\"text-center\">Write</th>\r\n                                    <th class=\"text-center\">Create</th>\r\n                                    <th class=\"text-center\">Delete</th>\r\n                                    <th class=\"text-center\">Import</th>\r\n                                    <th class=\"text-center\">Export</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Employee</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Holidays</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Leaves</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Events</td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                    <td class=\"text-center\">\r\n                                        <input checked=\"\" type=\"checkbox\">\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"submit-section\">\r\n                        <button class=\"btn btn-primary submit-btn\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Edit User Modal -->\r\n\r\n<!-- Delete User Modal -->\r\n<div class=\"modal custom-modal fade\" id=\"delete_user\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-dialog-centered\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-header\">\r\n                    <h3>Delete User</h3>\r\n                    <p>Are you sure want to delete?</p>\r\n                </div>\r\n                <div class=\"modal-btn delete-action\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <a  class=\"btn btn-primary continue-btn\" (click)=\"deleteUsers()\">Delete</a>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <a  data-bs-dismiss=\"modal\"\r\n                                class=\"btn btn-primary cancel-btn\">Cancel</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Delete User Modal -->\r\n</div>";

/***/ }),

/***/ 33016:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/users/users.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<!-- <div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\"> -->\r\n    <router-outlet></router-outlet>\r\n  <!--   </div> -->\r\n    <!-- /Page Wrapper -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_users_users_module_ts.js.map