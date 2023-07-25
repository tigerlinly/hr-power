"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_forms_forms_module_ts"],{

/***/ 79331:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/forms/basic-inputs/basic-inputs.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInputsComponent": () => (/* binding */ BasicInputsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _basic_inputs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-inputs.component.html?ngResource */ 72358);
/* harmony import */ var _basic_inputs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-inputs.component.css?ngResource */ 43399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let BasicInputsComponent = class BasicInputsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.basicForm = this.formBuilder.group({
            txt: [""],
        });
    }
    basicFormSubmit() {
        console.log("");
    }
};
BasicInputsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
BasicInputsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-basic-inputs",
        template: _basic_inputs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_basic_inputs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BasicInputsComponent);



/***/ }),

/***/ 71242:
/*!********************************************************************!*\
  !*** ./src/app/all-modules/forms/form-mask/form-mask.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormMaskComponent": () => (/* binding */ FormMaskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_mask_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-mask.component.html?ngResource */ 60350);
/* harmony import */ var _form_mask_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-mask.component.css?ngResource */ 39568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let FormMaskComponent = class FormMaskComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.customPatterns = {
            V: { pattern: new RegExp("-?") },
            "0": { pattern: new RegExp("[0-9]") },
        };
    }
    ngOnInit() {
        this.basicForm = this.formBuilder.group({
            txt: [""],
        });
    }
    basicFormSubmit() {
        console.log("");
    }
};
FormMaskComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
FormMaskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-form-mask",
        template: _form_mask_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_mask_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormMaskComponent);



/***/ }),

/***/ 57945:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/forms/form-validation/form-validation.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidationComponent": () => (/* binding */ FormValidationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_validation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validation.component.html?ngResource */ 93610);
/* harmony import */ var _form_validation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validation.component.css?ngResource */ 37994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let FormValidationComponent = class FormValidationComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.basicForm = this.formBuilder.group({
            txt: [""],
        });
    }
    basicFormSubmit() {
        console.log("");
    }
};
FormValidationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
FormValidationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-form-validation",
        template: _form_validation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_validation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormValidationComponent);



/***/ }),

/***/ 90095:
/*!***********************************************************!*\
  !*** ./src/app/all-modules/forms/forms-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsRoutingModule": () => (/* binding */ FormsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component */ 78841);
/* harmony import */ var _basic_inputs_basic_inputs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-inputs/basic-inputs.component */ 79331);
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-groups/input-groups.component */ 80135);
/* harmony import */ var _horizontal_form_horizontal_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal-form/horizontal-form.component */ 97630);
/* harmony import */ var _form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-mask/form-mask.component */ 71242);
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-validation/form-validation.component */ 57945);
/* harmony import */ var _verticals_forms_new_verticals_forms_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verticals-forms-new/verticals-forms-new.component */ 85120);










const routes = [
    {
        path: "",
        component: _forms_component__WEBPACK_IMPORTED_MODULE_0__.FormsComponent,
        children: [
            {
                path: "basic-inputs",
                component: _basic_inputs_basic_inputs_component__WEBPACK_IMPORTED_MODULE_1__.BasicInputsComponent
            },
            {
                path: "input-groups",
                component: _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_2__.InputGroupsComponent
            },
            {
                path: "horizontal-form",
                component: _horizontal_form_horizontal_form_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalFormComponent
            },
            {
                path: "vertical-form",
                component: _verticals_forms_new_verticals_forms_new_component__WEBPACK_IMPORTED_MODULE_6__.VerticalsFormsNewComponent
            },
            {
                path: "form-mask",
                component: _form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_4__.FormMaskComponent
            },
            {
                path: "form-validation",
                component: _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_5__.FormValidationComponent
            }
        ]
    }
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], FormsRoutingModule);



/***/ }),

/***/ 78841:
/*!******************************************************!*\
  !*** ./src/app/all-modules/forms/forms.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsComponent": () => (/* binding */ FormsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component.html?ngResource */ 76850);
/* harmony import */ var _forms_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.component.css?ngResource */ 87027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let FormsComponent = class FormsComponent {
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
FormsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
FormsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-forms',
        template: _forms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forms_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], FormsComponent);



/***/ }),

/***/ 66685:
/*!***************************************************!*\
  !*** ./src/app/all-modules/forms/forms.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsModule": () => (/* binding */ FormsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms-routing.module */ 90095);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.component */ 78841);
/* harmony import */ var _basic_inputs_basic_inputs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-inputs/basic-inputs.component */ 79331);
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-groups/input-groups.component */ 80135);
/* harmony import */ var _horizontal_form_horizontal_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./horizontal-form/horizontal-form.component */ 97630);
/* harmony import */ var _form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-mask/form-mask.component */ 71242);
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-validation/form-validation.component */ 57945);
/* harmony import */ var _verticals_forms_new_verticals_forms_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verticals-forms-new/verticals-forms-new.component */ 85120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 7038);













let FormsModule = class FormsModule {
};
FormsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_1__.FormsComponent, _basic_inputs_basic_inputs_component__WEBPACK_IMPORTED_MODULE_2__.BasicInputsComponent, _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_3__.InputGroupsComponent, _horizontal_form_horizontal_form_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalFormComponent, _form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_5__.FormMaskComponent, _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_6__.FormValidationComponent, _verticals_forms_new_verticals_forms_new_component__WEBPACK_IMPORTED_MODULE_7__.VerticalsFormsNewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule.forRoot({
                showMaskTyped: false,
                // clearIfNotMatch : true
            })
        ]
    })
], FormsModule);



/***/ }),

/***/ 97630:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/forms/horizontal-form/horizontal-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalFormComponent": () => (/* binding */ HorizontalFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _horizontal_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-form.component.html?ngResource */ 42582);
/* harmony import */ var _horizontal_form_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-form.component.css?ngResource */ 10198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let HorizontalFormComponent = class HorizontalFormComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        // Basic Form Validation
        this.basicForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        // Address Form Validation
        this.addressForm = this.formBuilder.group({
            addressOne: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            addressTwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        // Horizontal Form Validation
        this.twoColumnFormOne = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            bloodGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            addresslineone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            addresslinetwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        // Horizontal Form Validation
        this.twoColumnFormTwo = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            textArea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalCountry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalZipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalProvince: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalCity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    basicFormSubmit() {
        if (this.basicForm.valid) {
            this.toastr.success("BasicForm is submitted", 'Success');
        }
    }
    addressFormSubmit() {
        if (this.addressForm.valid) {
            this.toastr.success("AddressForm is submitted", 'Success');
        }
    }
    columnOneSubmit() {
        if (this.twoColumnFormOne.valid) {
            this.toastr.success("HorizontalForm is submitted", 'Success');
        }
    }
    columnTwoSubmit() {
        if (this.twoColumnFormTwo.valid) {
            this.toastr.success("HorizontalForm is submitted", 'Success');
        }
    }
};
HorizontalFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
HorizontalFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-horizontal-form',
        template: _horizontal_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_horizontal_form_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HorizontalFormComponent);



/***/ }),

/***/ 80135:
/*!**************************************************************************!*\
  !*** ./src/app/all-modules/forms/input-groups/input-groups.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputGroupsComponent": () => (/* binding */ InputGroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _input_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-groups.component.html?ngResource */ 85469);
/* harmony import */ var _input_groups_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-groups.component.css?ngResource */ 1325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let InputGroupsComponent = class InputGroupsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        // Basic Form Validation
        this.InputGroupForm = this.formBuilder.group({});
    }
    basicFormSubmit() {
        console.log('');
    }
};
InputGroupsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
InputGroupsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-input-groups',
        template: _input_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_input_groups_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InputGroupsComponent);



/***/ }),

/***/ 85120:
/*!****************************************************************************************!*\
  !*** ./src/app/all-modules/forms/verticals-forms-new/verticals-forms-new.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalsFormsNewComponent": () => (/* binding */ VerticalsFormsNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verticals_forms_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verticals-forms-new.component.html?ngResource */ 76959);
/* harmony import */ var _verticals_forms_new_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verticals-forms-new.component.css?ngResource */ 15308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 82808);






let VerticalsFormsNewComponent = class VerticalsFormsNewComponent {
    constructor(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    ngOnInit() {
        // Basic Form Validation
        this.basicForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        // Address Form Validation
        this.addressForm = this.formBuilder.group({
            addressOne: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            addressTwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        // Vertical Form Validation
        this.twoColumnFormOne = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            bloodGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            addresslineone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            addresslinetwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        // Vertical Form Validation
        this.twoColumnFormTwo = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            textArea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalCountry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalZipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalProvince: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            personalCity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    basicFormSubmit() {
        if (this.basicForm.valid) {
            this.toastr.success("BasicForm is submitted", 'Success');
        }
    }
    addressFormSubmit() {
        if (this.addressForm.valid) {
            this.toastr.success("AddressForm is submitted", 'Success');
        }
    }
    columnOneSubmit() {
        if (this.twoColumnFormOne.valid) {
            this.toastr.success("HorizontalForm is submitted", 'Success');
        }
    }
    columnTwoSubmit() {
        if (this.twoColumnFormTwo.valid) {
            this.toastr.success("HorizontalForm is submitted", 'Success');
        }
    }
};
VerticalsFormsNewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService }
];
VerticalsFormsNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-verticals-forms-new',
        template: _verticals_forms_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verticals_forms_new_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerticalsFormsNewComponent);



/***/ }),

/***/ 7038:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CONFIG": () => (/* binding */ INITIAL_CONFIG),
/* harmony export */   "MaskApplierService": () => (/* binding */ MaskApplierService),
/* harmony export */   "MaskDirective": () => (/* binding */ MaskDirective),
/* harmony export */   "MaskPipe": () => (/* binding */ MaskPipe),
/* harmony export */   "MaskService": () => (/* binding */ MaskService),
/* harmony export */   "NEW_CONFIG": () => (/* binding */ NEW_CONFIG),
/* harmony export */   "NgxMaskModule": () => (/* binding */ NgxMaskModule),
/* harmony export */   "__moduleExports": () => (/* binding */ customKeyboardEvent),
/* harmony export */   "_configFactory": () => (/* binding */ _configFactory),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "timeMasks": () => (/* binding */ timeMasks),
/* harmony export */   "withoutValidation": () => (/* binding */ withoutValidation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);






const config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config');
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NEW_CONFIG');
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('INITIAL_CONFIG');
const initialConfig = {
    suffix: '',
    prefix: '',
    thousandSeparator: ' ',
    decimalMarker: '.',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    placeHolderCharacter: '_',
    dropSpecialCharacters: true,
    hiddenInput: undefined,
    shownMaskExpression: '',
    separatorLimit: '',
    allowNegativeNumbers: false,
    validation: true,
    // tslint:disable-next-line: quotemark
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true,
        },
        X: {
            pattern: new RegExp('\\d'),
            symbol: '*',
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]'),
        },
        S: {
            pattern: new RegExp('[a-zA-Z]'),
        },
        d: {
            pattern: new RegExp('\\d'),
        },
        m: {
            pattern: new RegExp('\\d'),
        },
        M: {
            pattern: new RegExp('\\d'),
        },
        H: {
            pattern: new RegExp('\\d'),
        },
        h: {
            pattern: new RegExp('\\d'),
        },
        s: {
            pattern: new RegExp('\\d'),
        },
    },
};
const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
const withoutValidation = [
    'percent',
    'Hh',
    's0',
    'm0',
    'separator',
    'd0/M0/0000',
    'd0/M0',
    'd0',
    'M0',
];

class MaskApplierService {
    constructor(_config) {
        this._config = _config;
        this.maskExpression = '';
        this.actualValue = '';
        this.shownMaskExpression = '';
        this._formatWithSeparators = (str, thousandSeparatorChar, decimalChar, precision) => {
            const x = str.split(decimalChar);
            const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
            let res = x[0];
            const separatorLimit = this.separatorLimit.replace(/\s/g, '');
            if (separatorLimit && +separatorLimit) {
                if (res[0] === '-') {
                    res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
                }
                else {
                    res = res.slice(0, separatorLimit.length);
                }
            }
            const rgx = /(\d+)(\d{3})/;
            while (thousandSeparatorChar && rgx.test(res)) {
                res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
            }
            if (precision === undefined) {
                return res + decimals;
            }
            else if (precision === 0) {
                return res;
            }
            return res + decimals.substr(0, precision + 1);
        };
        this.percentage = (str) => {
            return Number(str) >= 0 && Number(str) <= 100;
        };
        this.getPrecision = (maskExpression) => {
            const x = maskExpression.split('.');
            if (x.length > 1) {
                return Number(x[x.length - 1]);
            }
            return Infinity;
        };
        this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
            if (precision < Infinity) {
                const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
                const precisionMatch = inputValue.match(precisionRegEx);
                if (precisionMatch && precisionMatch[0].length - 1 > precision) {
                    const diff = precisionMatch[0].length - 1 - precision;
                    inputValue = inputValue.substring(0, inputValue.length - diff);
                }
                if (precision === 0 && inputValue.endsWith(decimalMarker)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
            }
            return inputValue;
        };
        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.suffix = this._config.suffix;
        this.thousandSeparator = this._config.thousandSeparator;
        this.decimalMarker = this._config.decimalMarker;
        this.hiddenInput = this._config.hiddenInput;
        this.showMaskTyped = this._config.showMaskTyped;
        this.placeHolderCharacter = this._config.placeHolderCharacter;
        this.validation = this._config.validation;
        this.separatorLimit = this._config.separatorLimit;
        this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    }
    applyMaskWithPattern(inputValue, maskAndPattern) {
        const [mask, customPattern] = maskAndPattern;
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    }
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        let cursor = 0;
        let result = '';
        let multi = false;
        let backspaceShift = false;
        let shift = 1;
        let stepBack = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        if (!!this.suffix && inputValue.endsWith(this.suffix)) {
            inputValue = inputValue.slice(0, inputValue.length - this.suffix.length);
        }
        const inputArray = inputValue.toString().split('');
        if (maskExpression === 'IP') {
            this.ipError = !!(inputArray.filter((i) => i === '.').length < 3 && inputArray.length < 7);
            maskExpression = '099.099.099.099';
        }
        const arr = [];
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i].match('\\d')) {
                arr.push(inputValue[i]);
            }
        }
        if (maskExpression === 'CPF_CNPJ') {
            this.cpfCnpjError = !!(arr.length !== 11 && arr.length !== 14);
            if (arr.length > 11) {
                maskExpression = '00.000.000/0000-00';
            }
            else {
                maskExpression = '000.000.000-00';
            }
        }
        if (maskExpression.startsWith('percent')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)) {
                inputValue = this._stripToDecimal(inputValue);
                const precision = this.getPrecision(maskExpression);
                inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
            }
            if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
                const base = inputValue.substring(0, inputValue.indexOf('.') - 1);
                inputValue = `${base}${inputValue.substring(inputValue.indexOf('.'), inputValue.length)}`;
            }
            if (this.percentage(inputValue)) {
                result = inputValue;
            }
            else {
                result = inputValue.substring(0, inputValue.length - 1);
            }
        }
        else if (maskExpression.startsWith('separator')) {
            if (inputValue.match('[wа-яА-Я]') ||
                inputValue.match('[ЁёА-я]') ||
                inputValue.match('[a-z]|[A-Z]') ||
                inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) ||
                inputValue.match('[^A-Za-z0-9,]')) {
                inputValue = this._stripToDecimal(inputValue);
            }
            inputValue =
                inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.decimalMarker
                    ? inputValue.slice(1, inputValue.length)
                    : inputValue;
            // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
            //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK
            const thousandSeperatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
            const decimalMarkerEscaped = this._charToRegExpExpression(this.decimalMarker);
            const invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'
                .replace(thousandSeperatorCharEscaped, '')
                .replace(decimalMarkerEscaped, '');
            const invalidCharRegexp = new RegExp('[' + invalidChars + ']');
            if (inputValue.match(invalidCharRegexp)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            const precision = this.getPrecision(maskExpression);
            inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
            const strForSep = inputValue.replace(new RegExp(thousandSeperatorCharEscaped, 'g'), '');
            result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
            const commaShift = result.indexOf(',') - inputValue.indexOf(',');
            const shiftStep = result.length - inputValue.length;
            if (shiftStep > 0 && result[position] !== ',') {
                backspaceShift = true;
                let _shift = 0;
                do {
                    this._shift.add(position + _shift);
                    _shift++;
                } while (_shift < shiftStep);
            }
            else if ((commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3)) ||
                (!(result.indexOf('.') >= position && position > 3) && shiftStep <= 0)) {
                this._shift.clear();
                backspaceShift = true;
                shift = shiftStep;
                position += shiftStep;
                this._shift.add(position);
            }
            else {
                this._shift.clear();
            }
        }
        else {
            for (
            // tslint:disable-next-line
            let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                    break;
                }
                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                    result += inputSymbol;
                    cursor += 2;
                }
                else if (maskExpression[cursor + 1] === '*' &&
                    multi &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                    multi = false;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
                    result += inputSymbol;
                    multi = true;
                }
                else if (maskExpression[cursor + 1] === '?' &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) ||
                    (this.hiddenInput &&
                        this.maskAvailablePatterns[maskExpression[cursor]] &&
                        this.maskAvailablePatterns[maskExpression[cursor]].symbol === inputSymbol)) {
                    if (maskExpression[cursor] === 'H') {
                        if (Number(inputSymbol) > 2) {
                            cursor += 1;
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'h') {
                        if (result === '2' && Number(inputSymbol) > 3) {
                            cursor += 1;
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'm') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 's') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    const daysCount = 31;
                    if (maskExpression[cursor] === 'd') {
                        if (Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
                            cursor += 1;
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'M') {
                        const monthsCount = 12;
                        // mask without day
                        const withoutDays = cursor === 0 &&
                            (Number(inputSymbol) > 2 ||
                                Number(inputValue.slice(cursor, cursor + 2)) > monthsCount ||
                                inputValue[cursor + 1] === '/');
                        // day<10 && month<12 for input
                        const day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            ((inputValue[cursor - 2] === '/' &&
                                Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount &&
                                inputValue[cursor] !== '/') ||
                                inputValue[cursor] === '/' ||
                                (inputValue[cursor - 3] === '/' &&
                                    Number(inputValue.slice(cursor - 2, cursor)) > monthsCount &&
                                    inputValue[cursor - 1] !== '/') ||
                                inputValue[cursor - 1] === '/');
                        // 10<day<31 && month<12 for input
                        const day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            inputValue[cursor - 1] === '/' &&
                            (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
                        // day<10 && month<12 for paste whole data
                        const day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            !inputValue.slice(cursor - 2, cursor).includes('/') &&
                            Number(inputValue.slice(cursor - 2, cursor)) > monthsCount;
                        // 10<day<31 && month<12 for paste whole data
                        const day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            inputValue[cursor - 1] !== '/' &&
                            Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;
                        if (withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
                            cursor += 1;
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                    result += maskExpression[cursor];
                    cursor++;
                    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                    i--;
                }
                else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                    this.maskAvailablePatterns[maskExpression[cursor]] &&
                    this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                    if (!!inputArray[cursor] &&
                        maskExpression !== '099.099.099.099' &&
                        maskExpression !== '000.000.000-00' &&
                        maskExpression !== '00.000.000/0000-00') {
                        result += inputArray[cursor];
                    }
                    cursor++;
                    i--;
                }
                else if (this.maskExpression[cursor + 1] === '*' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.maskExpression[cursor + 1] === '?' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.showMaskTyped &&
                    this.maskSpecialCharacters.indexOf(inputSymbol) < 0 &&
                    inputSymbol !== this.placeHolderCharacter) {
                    stepBack = true;
                }
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        let newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        let actualShift = this._shift.has(position) ? shift : 0;
        if (stepBack) {
            actualShift--;
        }
        cb(actualShift, backspaceShift);
        if (shift < 0) {
            this._shift.clear();
        }
        let res = `${this.prefix}${result}${this.suffix}`;
        if (result.length === 0) {
            res = `${this.prefix}${result}`;
        }
        return res;
    }
    _findSpecialChar(inputSymbol) {
        return this.maskSpecialCharacters.find((val) => val === inputSymbol);
    }
    _checkSymbolMask(inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    }
    _stripToDecimal(str) {
        return str
            .split('')
            .filter((i, idx) => {
            return (i.match('^-?\\d') ||
                i.match('\\s') ||
                i === '.' ||
                i === ',' ||
                (i === '-' && idx === 0 && this.allowNegativeNumbers));
        })
            .join('');
    }
    _charToRegExpExpression(char) {
        if (char) {
            const charsToEscape = '[\\^$.|?*+()';
            return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? '\\' + char : char;
        }
        return char;
    }
}
MaskApplierService.ɵfac = function MaskApplierService_Factory(t) { return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config)); };
MaskApplierService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaskApplierService, factory: MaskApplierService.ɵfac });
MaskApplierService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [config,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskApplierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [config]
            }] }]; }, null); })();

class MaskService extends MaskApplierService {
    constructor(document, _config, _elementRef, _renderer) {
        super(_config);
        this.document = document;
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.maskExpression = '';
        this.isNumberValue = false;
        this.placeHolderCharacter = '_';
        this.maskIsShown = '';
        this.selStart = null;
        this.selEnd = null;
        /**
         * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
         * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
         */
        this.writingValue = false;
        this.onChange = (_) => { };
        this._formElement = this._elementRef.nativeElement;
    }
    // tslint:disable-next-line:cyclomatic-complexity
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        if (!maskExpression) {
            return inputValue;
        }
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (this.maskExpression === 'IP' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
        }
        if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
        }
        if (!inputValue && this.showMaskTyped) {
            this.formControlResult(this.prefix);
            return this.prefix + this.maskIsShown;
        }
        const getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
        let newInputValue = '';
        if (this.hiddenInput !== undefined) {
            let actualResult = this.actualValue.split('');
            // tslint:disable no-unused-expression
            inputValue !== '' && actualResult.length
                ? typeof this.selStart === 'number' && typeof this.selEnd === 'number'
                    ? inputValue.length > actualResult.length
                        ? actualResult.splice(this.selStart, 0, getSymbol)
                        : inputValue.length < actualResult.length
                            ? actualResult.length - inputValue.length === 1
                                ? actualResult.splice(this.selStart - 1, 1)
                                : actualResult.splice(this.selStart, this.selEnd - this.selStart)
                            : null
                    : null
                : (actualResult = []);
            // tslint:enable no-unused-expression
            newInputValue = this.actualValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
        }
        newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
        const result = super.applyMask(newInputValue, maskExpression, position, cb);
        this.actualValue = this.getActualValue(result);
        // handle some separator implications:
        // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot
        if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
            this.decimalMarker = ',';
        }
        // b) remove decimal marker from list of special characters to mask
        if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter((item) => item !== this.decimalMarker);
        }
        this.formControlResult(result);
        if (!this.showMaskTyped) {
            if (this.hiddenInput) {
                return result && result.length ? this.hideInput(result, this.maskExpression) : result;
            }
            return result;
        }
        const resLen = result.length;
        const prefNmask = this.prefix + this.maskIsShown;
        return (result +
            (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ' ? prefNmask : prefNmask.slice(resLen)));
    }
    applyValueChanges(position = 0, cb = () => { }) {
        this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    }
    hideInput(inputValue, maskExpression) {
        return inputValue
            .split('')
            .map((curr, index) => {
            if (this.maskAvailablePatterns &&
                this.maskAvailablePatterns[maskExpression[index]] &&
                this.maskAvailablePatterns[maskExpression[index]].symbol) {
                return this.maskAvailablePatterns[maskExpression[index]].symbol;
            }
            return curr;
        })
            .join('');
    }
    // this function is not necessary, it checks result against maskExpression
    getActualValue(res) {
        const compare = res
            .split('')
            .filter((symbol, i) => this._checkSymbolMask(symbol, this.maskExpression[i]) ||
            (this.maskSpecialCharacters.includes(this.maskExpression[i]) && symbol === this.maskExpression[i]));
        if (compare.join('') === res) {
            return compare.join('');
        }
        return res;
    }
    shiftTypedSymbols(inputValue) {
        let symbolToReplace = '';
        const newInputValue = (inputValue &&
            inputValue.split('').map((currSymbol, index) => {
                if (this.maskSpecialCharacters.includes(inputValue[index + 1]) &&
                    inputValue[index + 1] !== this.maskExpression[index + 1]) {
                    symbolToReplace = currSymbol;
                    return inputValue[index + 1];
                }
                if (symbolToReplace.length) {
                    const replaceSymbol = symbolToReplace;
                    symbolToReplace = '';
                    return replaceSymbol;
                }
                return currSymbol;
            })) ||
            [];
        return newInputValue.join('');
    }
    showMaskInInput(inputVal) {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            if (inputVal) {
                if (this.maskExpression === 'IP') {
                    return this._checkForIp(inputVal);
                }
                if (this.maskExpression === 'CPF_CNPJ') {
                    return this._checkForCpfCnpj(inputVal);
                }
            }
            return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
        }
        return '';
    }
    clearIfNotMatchFn() {
        if (this.clearIfNotMatch &&
            this.prefix.length + this.maskExpression.length + this.suffix.length !==
                this._formElement.value.replace(/_/g, '').length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    }
    set formElementProperty([name, value]) {
        this._renderer.setProperty(this._formElement, name, value);
    }
    checkSpecialCharAmount(mask) {
        const chars = mask.split('').filter((item) => this._findSpecialChar(item));
        return chars.length;
    }
    removeMask(inputValue) {
        return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
    }
    _checkForIp(inputVal) {
        if (inputVal === '#') {
            return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
        }
        const arr = [];
        for (let i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
                arr.push(inputVal[i]);
            }
        }
        if (arr.length <= 3) {
            return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
        }
        if (arr.length > 3 && arr.length <= 6) {
            return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
        }
        if (arr.length > 6 && arr.length <= 9) {
            return this.placeHolderCharacter;
        }
        if (arr.length > 9 && arr.length <= 12) {
            return '';
        }
        return '';
    }
    _checkForCpfCnpj(inputVal) {
        const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
        const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` +
            `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
        if (inputVal === '#') {
            return cpf;
        }
        const arr = [];
        for (let i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
                arr.push(inputVal[i]);
            }
        }
        if (arr.length <= 3) {
            return cpf.slice(arr.length, cpf.length);
        }
        if (arr.length > 3 && arr.length <= 6) {
            return cpf.slice(arr.length + 1, cpf.length);
        }
        if (arr.length > 6 && arr.length <= 9) {
            return cpf.slice(arr.length + 2, cpf.length);
        }
        if (arr.length > 9 && arr.length < 11) {
            return cpf.slice(arr.length + 3, cpf.length);
        }
        if (arr.length === 11) {
            return '';
        }
        if (arr.length === 12) {
            if (inputVal.length === 17) {
                return cnpj.slice(16, cnpj.length);
            }
            return cnpj.slice(15, cnpj.length);
        }
        if (arr.length > 12 && arr.length <= 14) {
            return cnpj.slice(arr.length + 4, cnpj.length);
        }
        return '';
    }
    /**
     * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
     * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
     * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
     * model value too. Therefore, we don't trigger onChange in this scenario.
     * @param inputValue the current form input value
     */
    formControlResult(inputValue) {
        if (!this.writingValue) {
            if (Array.isArray(this.dropSpecialCharacters)) {
                this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters));
            }
            else if (this.dropSpecialCharacters) {
                this.onChange(this._checkSymbols(inputValue));
            }
            else {
                this.onChange(this._removeSuffix(this._removePrefix(inputValue)));
            }
        }
    }
    _removeMask(value, specialCharactersForRemove) {
        return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
    }
    _removePrefix(value) {
        if (!this.prefix) {
            return value;
        }
        return value ? value.replace(this.prefix, '') : value;
    }
    _removeSuffix(value) {
        if (!this.suffix) {
            return value;
        }
        return value ? value.replace(this.suffix, '') : value;
    }
    _retrieveSeparatorValue(result) {
        return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
    }
    _regExpForRemove(specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map((item) => `\\${item}`).join('|'), 'gi');
    }
    _checkSymbols(result) {
        if (result === '') {
            return result;
        }
        const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
        let separatorValue = this._retrieveSeparatorValue(result);
        if (this.decimalMarker !== '.') {
            separatorValue = separatorValue.replace(this.decimalMarker, '.');
        }
        if (this.isNumberValue) {
            if (separatorPrecision) {
                if (result === this.decimalMarker) {
                    return null;
                }
                return this._checkPrecision(this.maskExpression, separatorValue);
            }
            else {
                return Number(separatorValue);
            }
        }
        else {
            return separatorValue;
        }
    }
    // TODO should think about helpers or separting decimal precision to own property
    _retrieveSeparatorPrecision(maskExpretion) {
        const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
        return matcher ? Number(matcher[1]) : null;
    }
    _checkPrecision(separatorExpression, separatorValue) {
        if (separatorExpression.indexOf('2') > 0) {
            return Number(separatorValue).toFixed(2);
        }
        return Number(separatorValue);
    }
}
MaskService.ɵfac = function MaskService_Factory(t) { return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
MaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaskService, factory: MaskService.ɵfac });
MaskService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [config,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [config]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();

// tslint:disable deprecation
// tslint:disable no-input-rename
class MaskDirective {
    constructor(document, _maskService, _config) {
        this.document = document;
        this._maskService = _maskService;
        this._config = _config;
        this.maskExpression = '';
        this.specialCharacters = [];
        this.patterns = {};
        this.prefix = '';
        this.suffix = '';
        this.thousandSeparator = ' ';
        this.decimalMarker = '.';
        this.dropSpecialCharacters = null;
        this.hiddenInput = null;
        this.showMaskTyped = null;
        this.placeHolderCharacter = null;
        this.shownMaskExpression = null;
        this.showTemplate = null;
        this.clearIfNotMatch = null;
        this.validation = null;
        this.separatorLimit = null;
        this.allowNegativeNumbers = null;
        this._maskValue = '';
        this._position = null;
        this._maskExpressionArray = [];
        this.onChange = (_) => { };
        this.onTouch = () => { };
    }
    ngOnChanges(changes) {
        const { maskExpression, specialCharacters, patterns, prefix, suffix, thousandSeparator, decimalMarker, dropSpecialCharacters, hiddenInput, showMaskTyped, placeHolderCharacter, shownMaskExpression, showTemplate, clearIfNotMatch, validation, separatorLimit, allowNegativeNumbers, } = changes;
        if (maskExpression) {
            this._maskValue = maskExpression.currentValue || '';
            if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
                this._maskExpressionArray = maskExpression.currentValue.split('||').sort((a, b) => {
                    return a.length - b.length;
                });
                this._maskValue = this._maskExpressionArray[0];
                this.maskExpression = this._maskExpressionArray[0];
                this._maskService.maskExpression = this._maskExpressionArray[0];
            }
        }
        if (specialCharacters) {
            if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
                return;
            }
            else {
                this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
            }
        }
        // Only overwrite the mask available patterns if a pattern has actually been passed in
        if (patterns && patterns.currentValue) {
            this._maskService.maskAvailablePatterns = patterns.currentValue;
        }
        if (prefix) {
            this._maskService.prefix = prefix.currentValue;
        }
        if (suffix) {
            this._maskService.suffix = suffix.currentValue;
        }
        if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator.currentValue;
        }
        if (decimalMarker) {
            this._maskService.decimalMarker = decimalMarker.currentValue;
        }
        if (dropSpecialCharacters) {
            this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
        }
        if (hiddenInput) {
            this._maskService.hiddenInput = hiddenInput.currentValue;
        }
        if (showMaskTyped) {
            this._maskService.showMaskTyped = showMaskTyped.currentValue;
        }
        if (placeHolderCharacter) {
            this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
        }
        if (shownMaskExpression) {
            this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
        }
        if (showTemplate) {
            this._maskService.showTemplate = showTemplate.currentValue;
        }
        if (clearIfNotMatch) {
            this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
        }
        if (validation) {
            this._maskService.validation = validation.currentValue;
        }
        if (separatorLimit) {
            this._maskService.separatorLimit = separatorLimit.currentValue;
        }
        if (allowNegativeNumbers) {
            this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;
            if (this._maskService.allowNegativeNumbers) {
                this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter((c) => c !== '-');
            }
        }
        this._applyMask();
    }
    // tslint:disable-next-line: cyclomatic-complexity
    validate({ value }) {
        if (!this._maskService.validation || !this._maskValue) {
            return null;
        }
        if (this._maskService.ipError) {
            return this._createValidationError(value);
        }
        if (this._maskService.cpfCnpjError) {
            return this._createValidationError(value);
        }
        if (this._maskValue.startsWith('separator')) {
            return null;
        }
        if (withoutValidation.includes(this._maskValue)) {
            return null;
        }
        if (this._maskService.clearIfNotMatch) {
            return null;
        }
        if (timeMasks.includes(this._maskValue)) {
            return this._validateTime(value);
        }
        if (value && value.toString().length >= 1) {
            let counterOfOpt = 0;
            for (const key in this._maskService.maskAvailablePatterns) {
                if (this._maskService.maskAvailablePatterns[key].optional &&
                    this._maskService.maskAvailablePatterns[key].optional === true) {
                    if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
                        const opt = this._maskValue
                            .split('')
                            .filter((i) => i === key)
                            .join('');
                        counterOfOpt += opt.length;
                    }
                    else if (this._maskValue.indexOf(key) !== -1) {
                        counterOfOpt++;
                    }
                    if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
                        return null;
                    }
                    if (counterOfOpt === this._maskValue.length) {
                        return null;
                    }
                }
            }
            if (this._maskValue.indexOf('{') === 1 &&
                value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
                return null;
            }
            if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
                return null;
            }
            else if ((this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*')) ||
                (this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?')) ||
                this._maskValue.indexOf('{') === 1) {
                return this._createValidationError(value);
            }
            if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
                const length = this._maskService.dropSpecialCharacters
                    ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt
                    : this._maskValue.length - counterOfOpt;
                if (value.toString().length < length) {
                    return this._createValidationError(value);
                }
            }
        }
        return null;
    }
    onInput(e) {
        const el = e.target;
        this._inputValue = el.value;
        this._setMask();
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        const position = el.selectionStart === 1
            ? el.selectionStart + this._maskService.prefix.length
            : el.selectionStart;
        let caretShift = 0;
        let backspaceShift = false;
        this._maskService.applyValueChanges(position, (shift, _backspaceShift) => {
            caretShift = shift;
            backspaceShift = _backspaceShift;
        });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
        let positionToApply = this._position
            ? this._inputValue.length + position + caretShift
            : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
        if (positionToApply > this._getActualInputLength()) {
            positionToApply = this._getActualInputLength();
        }
        el.setSelectionRange(positionToApply, positionToApply);
        if ((this.maskExpression.includes('H') || this.maskExpression.includes('M')) && caretShift === 0) {
            el.setSelectionRange(el.selectionStart + 1, el.selectionStart + 1);
        }
        this._position = null;
    }
    onBlur() {
        if (this._maskValue) {
            this._maskService.clearIfNotMatchFn();
        }
        this.onTouch();
    }
    onFocus(e) {
        if (!this._maskValue) {
            return;
        }
        const el = e.target;
        const posStart = 0;
        const posEnd = 0;
        if (el !== null &&
            el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            e.keyCode !== 38)
            if (this._maskService.showMaskTyped) {
                // We are showing the mask in the input
                this._maskService.maskIsShown = this._maskService.showMaskInInput();
                if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
                    // the input ONLY contains the mask, so position the cursor at the start
                    el.focus();
                    el.setSelectionRange(posStart, posEnd);
                }
                else {
                    // the input contains some characters already
                    if (el.selectionStart > this._maskService.actualValue.length) {
                        // if the user clicked beyond our value's length, position the cursor at the end of our value
                        el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
                    }
                }
            }
        const nextValue = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */
        if (el.value !== nextValue) {
            el.value = nextValue;
        }
        /** fix of cursor position with prefix when mouse click occur */
        if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
        /** select only inserted text */
        if (el.selectionEnd > this._getActualInputLength()) {
            el.selectionEnd = this._getActualInputLength();
        }
    }
    // tslint:disable-next-line: cyclomatic-complexity
    onKeyDown(e) {
        if (!this._maskValue) {
            return;
        }
        this._code = e.code ? e.code : e.key;
        const el = e.target;
        this._inputValue = el.value;
        this._setMask();
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
            if (e.keyCode === 8 && el.value.length === 0) {
                el.selectionStart = el.selectionEnd;
            }
            if (e.keyCode === 8 && el.selectionStart !== 0) {
                // If specialChars is false, (shouldn't ever happen) then set to the defaults
                this.specialCharacters = this.specialCharacters || this._config.specialCharacters;
                if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
                    el.setSelectionRange(this.prefix.length, this.prefix.length);
                }
                else {
                    if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
                        while (this.specialCharacters.includes(this._inputValue[el.selectionStart - 1].toString()) &&
                            ((this.prefix.length >= 1 && el.selectionStart > this.prefix.length) ||
                                this.prefix.length === 0)) {
                            el.setSelectionRange(el.selectionStart - 1, el.selectionStart - 1);
                        }
                    }
                    this.suffixCheckOnPressDelete(e.keyCode, el);
                }
            }
            this.suffixCheckOnPressDelete(e.keyCode, el);
            if (this._maskService.prefix.length &&
                el.selectionStart <= this._maskService.prefix.length &&
                el.selectionEnd <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            const cursorStart = el.selectionStart;
            // this.onFocus(e);
            if (e.keyCode === 8 &&
                !el.readOnly &&
                cursorStart === 0 &&
                el.selectionEnd === el.value.length &&
                el.value.length !== 0) {
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
                this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
            }
        }
        if (!!this.suffix &&
            this.suffix.length > 1 &&
            this._inputValue.length - this.suffix.length < el.selectionStart) {
            el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
        }
        else if ((e.keyCode === 65 && e.ctrlKey === true) || // Ctrl+ A
            (e.keyCode === 65 && e.metaKey === true) // Cmd + A (Mac)
        ) {
            el.setSelectionRange(0, this._getActualInputLength());
            e.preventDefault();
        }
        this._maskService.selStart = el.selectionStart;
        this._maskService.selEnd = el.selectionEnd;
    }
    /** It writes the value in the input */
    writeValue(inputValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (inputValue === undefined) {
                inputValue = '';
            }
            if (typeof inputValue === 'number') {
                inputValue = String(inputValue);
                inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
                this._maskService.isNumberValue = true;
            }
            if ((inputValue && this._maskService.maskExpression) ||
                (this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped))) {
                // Let the service we know we are writing value so that triggering onChange function wont happen during applyMask
                this._maskService.writingValue = true;
                this._maskService.formElementProperty = [
                    'value',
                    this._maskService.applyMask(inputValue, this._maskService.maskExpression),
                ];
                // Let the service know we've finished writing value
                this._maskService.writingValue = false;
            }
            else {
                this._maskService.formElementProperty = ['value', inputValue];
            }
            this._inputValue = inputValue;
        });
    }
    registerOnChange(fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    suffixCheckOnPressDelete(keyCode, el) {
        if (keyCode === 46 && this.suffix.length > 0) {
            if (this._inputValue.length - this.suffix.length <= el.selectionStart) {
                el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
        }
        if (keyCode === 8) {
            if (this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
                el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
            if (this.suffix.length === 1 && this._inputValue.length === el.selectionStart) {
                el.setSelectionRange(el.selectionStart - 1, el.selectionStart - 1);
            }
        }
    }
    /** It disables the input element */
    setDisabledState(isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    }
    onModelChange(e) {
        if (!e) {
            this._maskService.actualValue = '';
        }
    }
    _repeatPatternSymbols(maskExp) {
        return ((maskExp.match(/{[0-9]+}/) &&
            maskExp.split('').reduce((accum, currval, index) => {
                this._start = currval === '{' ? index : this._start;
                if (currval !== '}') {
                    return this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                this._end = index;
                const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
                const repaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
                return accum + repaceWith;
            }, '')) ||
            maskExp);
    }
    // tslint:disable-next-line:no-any
    _applyMask() {
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
        this._maskService.formElementProperty = [
            'value',
            this._maskService.applyMask(this._inputValue, this._maskService.maskExpression),
        ];
    }
    _validateTime(value) {
        const rowMaskLen = this._maskValue.split('').filter((s) => s !== ':').length;
        if (value === null || value.length === 0) {
            return null; // Don't validate empty values to allow for optional form control
        }
        if ((+value[value.length - 1] === 0 && value.length < rowMaskLen) || value.length <= rowMaskLen - 2) {
            return this._createValidationError(value);
        }
        return null;
    }
    _getActualInputLength() {
        return (this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length);
    }
    _createValidationError(actualValue) {
        return {
            mask: {
                requiredMask: this._maskValue,
                actualValue,
            },
        };
    }
    _setMask() {
        if (this._maskExpressionArray.length > 0) {
            this._maskExpressionArray.some((mask) => {
                const test = this._maskService.removeMask(this._inputValue).length <= this._maskService.removeMask(mask).length;
                if (this._inputValue && test) {
                    this._maskValue = mask;
                    this.maskExpression = mask;
                    this._maskService.maskExpression = mask;
                    return test;
                }
                else {
                    this._maskValue = this._maskExpressionArray[this._maskExpressionArray.length - 1];
                    this.maskExpression = this._maskExpressionArray[this._maskExpressionArray.length - 1];
                    this._maskService.maskExpression = this._maskExpressionArray[this._maskExpressionArray.length - 1];
                }
            });
        }
    }
}
MaskDirective.ɵfac = function MaskDirective_Factory(t) { return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](config)); };
MaskDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MaskDirective, selectors: [["input", "mask", ""], ["textarea", "mask", ""]], hostBindings: function MaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MaskDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("blur", function MaskDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function MaskDirective_click_HostBindingHandler($event) { return ctx.onFocus($event); })("keydown", function MaskDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("ngModelChange", function MaskDirective_ngModelChange_HostBindingHandler($event) { return ctx.onModelChange($event); });
    } }, inputs: { maskExpression: ["mask", "maskExpression"], specialCharacters: "specialCharacters", patterns: "patterns", prefix: "prefix", suffix: "suffix", thousandSeparator: "thousandSeparator", decimalMarker: "decimalMarker", dropSpecialCharacters: "dropSpecialCharacters", hiddenInput: "hiddenInput", showMaskTyped: "showMaskTyped", placeHolderCharacter: "placeHolderCharacter", shownMaskExpression: "shownMaskExpression", showTemplate: "showTemplate", clearIfNotMatch: "clearIfNotMatch", validation: "validation", separatorLimit: "separatorLimit", allowNegativeNumbers: "allowNegativeNumbers" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
                multi: true
            },
            MaskService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: MaskService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [config,] }] }
];
MaskDirective.propDecorators = {
    maskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['mask',] }],
    specialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    patterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    suffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    thousandSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    decimalMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dropSpecialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hiddenInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showMaskTyped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    placeHolderCharacter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    shownMaskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearIfNotMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    validation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    separatorLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    allowNegativeNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['blur',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }],
    onModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ngModelChange', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'input[mask], textarea[mask]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
                        multi: true
                    },
                    MaskService,
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: MaskService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [config]
            }] }]; }, { maskExpression: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mask']
        }], specialCharacters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], patterns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], prefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], suffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], thousandSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], decimalMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dropSpecialCharacters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hiddenInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showMaskTyped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placeHolderCharacter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], shownMaskExpression: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearIfNotMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], validation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], separatorLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], allowNegativeNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['input', ['$event']]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['blur']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
        }], 
    // tslint:disable-next-line: cyclomatic-complexity
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], onModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['ngModelChange', ['$event']]
        }] }); })();

class MaskPipe {
    constructor(_maskService) {
        this._maskService = _maskService;
    }
    transform(value, mask, thousandSeparator = null) {
        if (!value && typeof value !== 'number') {
            return '';
        }
        if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator;
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask(`${value}`, mask);
        }
        return this._maskService.applyMaskWithPattern(`${value}`, mask);
    }
}
MaskPipe.ɵfac = function MaskPipe_Factory(t) { return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskApplierService, 16)); };
MaskPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mask", type: MaskPipe, pure: true });
MaskPipe.ctorParameters = () => [
    { type: MaskApplierService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'mask',
                pure: true
            }]
    }], function () { return [{ type: MaskApplierService }]; }, null); })();

class NgxMaskModule {
    static forRoot(configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue,
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig,
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG],
                },
                MaskApplierService,
            ],
        };
    }
    static forChild() {
        return {
            ngModule: NgxMaskModule,
        };
    }
}
NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) { return new (t || NgxMaskModule)(); };
NgxMaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxMaskModule });
NgxMaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MaskDirective, MaskPipe],
                declarations: [MaskDirective, MaskPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxMaskModule, { declarations: [MaskDirective, MaskPipe], exports: [MaskDirective, MaskPipe] }); })();
/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return configValue instanceof Function ? Object.assign(Object.assign({}, initConfig), configValue()) : Object.assign(Object.assign({}, initConfig), configValue);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

(function () {
    if (!commonjsGlobal.KeyboardEvent) {
        commonjsGlobal.KeyboardEvent = function (_eventType, _init) { };
    }
})();


var customKeyboardEvent = {

};

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 43399:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/forms/basic-inputs/basic-inputs.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1pbnB1dHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 39568:
/*!********************************************************************************!*\
  !*** ./src/app/all-modules/forms/form-mask/form-mask.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLW1hc2suY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 37994:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/forms/form-validation/form-validation.component.css?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXZhbGlkYXRpb24uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 87027:
/*!******************************************************************!*\
  !*** ./src/app/all-modules/forms/forms.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jtcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 10198:
/*!********************************************************************************************!*\
  !*** ./src/app/all-modules/forms/horizontal-form/horizontal-form.component.css?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLWZvcm0uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 1325:
/*!**************************************************************************************!*\
  !*** ./src/app/all-modules/forms/input-groups/input-groups.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1ncm91cHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 15308:
/*!****************************************************************************************************!*\
  !*** ./src/app/all-modules/forms/verticals-forms-new/verticals-forms-new.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbHMtZm9ybXMtbmV3LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 72358:
/*!***************************************************************************************!*\
  !*** ./src/app/all-modules/forms/basic-inputs/basic-inputs.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<!--Page-Content-->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Basic Inputs</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Basic Inputs</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Basic Inputs</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form novalidate (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Text Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"txt\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Password</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"password\" class=\"form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Disabled Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\" disabled=\"disabled\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Readonly Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\" value=\"readonly\" readonly=\"readonly\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Placeholder</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Placeholder\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">File Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input class=\"form-control\" type=\"file\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Default Select</label>\r\n                            <div class=\"col-md-10\">\r\n                                <select class=\"form-select form-control\">\r\n                                    <option>-- Select --</option>\r\n                                    <option>Option 1</option>\r\n                                    <option>Option 2</option>\r\n                                    <option>Option 3</option>\r\n                                    <option>Option 4</option>\r\n                                    <option>Option 5</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Radio</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"radio\">\r\n                                    <label>\r\n                                        <input type=\"radio\" name=\"radio\"> Option 1\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"radio\">\r\n                                    <label>\r\n                                        <input type=\"radio\" name=\"radio\"> Option 2\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"radio\">\r\n                                    <label>\r\n                                        <input type=\"radio\" name=\"radio\"> Option 3\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Checkbox</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" name=\"checkbox\"> Option 1\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" name=\"checkbox\"> Option 2\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" name=\"checkbox\"> Option 3\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Textarea</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea rows=\"5\" cols=\"5\" class=\"form-control\"\r\n                                    placeholder=\"Enter text here\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-0 row\">\r\n                            <label class=\"col-form-label col-md-2\">Input Addons</label>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                    <input class=\"form-control\" type=\"text\">\r\n                                    <button class=\"btn btn-primary\" type=\"button\">Button</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Input Sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Large Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-md-2\">Default Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\".form-control\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group mb-0 row\">\r\n                            <label class=\"col-form-label col-md-2\">Small Input</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/Page-Content-->";

/***/ }),

/***/ 60350:
/*!*********************************************************************************!*\
  !*** ./src/app/all-modules/forms/form-mask/form-mask.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<!--PageContent-->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Form Mask</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Form Mask</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Form Mask</h4>\r\n                    <p class=\"card-text\">Input masks can be used to force the user to enter data conform a specific\r\n                        format. Unlike validation, the user can't enter any other key than the ones specified by the\r\n                        mask.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-group\">\r\n                            <label>Phone</label>\r\n                            <input type=\"text\" id=\"phone\" class=\"form-control\" mask=\"(000) 000-0000\" formControlName=\"txt\">\r\n                            <span class=\"form-text text-muted\">(999) 999-9999</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Date</label>\r\n                            <input type=\"text\" id=\"date\" class=\"form-control\" mask=\"00/00/0000\">\r\n                            <span class=\"form-text text-muted\">dd/mm/yyyy</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>SSN field 1</label>\r\n                            <input type=\"text\" id=\"ssn\" class=\"form-control\" mask=\"000-00-0000\">\r\n                            <span class=\"form-text text-muted\">e.g \"999-99-9999\"</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Phone field + ext.</label>\r\n                            <input type=\"text\" id=\"phoneExt\" class=\"form-control\" prefix=\"+96\" mask=\"000 000 000\">\r\n                            <span class=\"form-text text-muted\">+40 999 999 999</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Product Key</label>\r\n                            <input type=\"text\" id=\"product\" class=\"form-control\" prefix=\"a*\" mask=\"-000-A000\">\r\n                            <span class=\"form-text text-muted\">e.g a*-999-a999</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Currency</label>\r\n                            <input type=\"text\" id=\"currency\" class=\"form-control\" prefix=\"$\" mask=\"099,099,099.99\">\r\n                            <span class=\"form-text text-muted\">$ 999,999,999.99</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Eye Script</label>\r\n                            <input type=\"text\" id=\"eyescript\" class=\"form-control\" mask=\"V0.00V0.00 000\" [patterns]=\"customPatterns\" [dropSpecialCharacters]=\"false\">\r\n                            <span class=\"form-text text-muted\">~9.99 ~9.99 999</span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Percent</label>\r\n                            <input type=\"text\" id=\"pct\" class=\"form-control\" suffix = \"%\" mask = \"00\">\r\n                            <span class=\"form-text text-muted\">e.g \"99%\"</span>\r\n                        </div>\r\n                        <div class=\"form-group mb-0\">\r\n                            <label>Credit Card Number</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"ccn\" mask=\"099.099.099.0999\">\r\n                            <span class=\"form-text text-muted\">e.g \"999.999.999.9999\"</span>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/PageContent-->";

/***/ }),

/***/ 93610:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/forms/form-validation/form-validation.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Form Validation</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Form Validation</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Row -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n\r\n            <!-- Custom Boostrap Validation -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5 class=\"card-title mb-0\">Custom Bootstrap Form Validation</h5>\r\n                    <p class=\"card-text\">For custom Bootstrap form validation messages, you’ll need to add the\r\n                        <code>novalidate</code> boolean attribute to your form. For server side validation <a\r\n                            href=\"https://getbootstrap.com/docs/4.1/components/forms/#server-side\" target=\"_blank\">read\r\n                            full documentation</a>.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm\">\r\n                            <form class=\"needs-validation\" novalidate (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                                <div class=\"form-row row\">\r\n                                    <div class=\"col-md-4 mb-3\">\r\n                                        <label for=\"validationCustom01\">First Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationCustom01\"\r\n                                            placeholder=\"First Name\" value=\"Mark\" required formControlName=\"txt\">\r\n                                        <div class=\"valid-feedback\">\r\n                                            Looks good!\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 mb-3\">\r\n                                        <label for=\"validationCustom02\">Last Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationCustom02\"\r\n                                            placeholder=\"Last Name\" value=\"Otto\" required>\r\n                                        <div class=\"valid-feedback\">\r\n                                            Looks good!\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 mb-3\">\r\n                                        <label for=\"validationCustomUsername\">Username</label>\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-text\" id=\"inputGroupPrepend\">@</span>\r\n                                            <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\"\r\n                                                placeholder=\"Username\" aria-describedby=\"inputGroupPrepend\" required>\r\n                                            <div class=\"invalid-feedback\">\r\n                                                Please choose a username.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row row\">\r\n                                    <div class=\"col-md-6 mb-3\">\r\n                                        <label for=\"validationCustom03\">City</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationCustom03\"\r\n                                            placeholder=\"City\" required>\r\n                                        <div class=\"invalid-feedback\">\r\n                                            Please provide a valid city.\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3 mb-3\">\r\n                                        <label for=\"validationCustom04\">State</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationCustom04\"\r\n                                            placeholder=\"State\" required>\r\n                                        <div class=\"invalid-feedback\">\r\n                                            Please provide a valid state.\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3 mb-3\">\r\n                                        <label for=\"validationCustom05\">Zip</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationCustom05\"\r\n                                            placeholder=\"Zip\" required>\r\n                                        <div class=\"invalid-feedback\">\r\n                                            Please provide a valid zip.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"form-check\">\r\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\"\r\n                                            required>\r\n                                        <label class=\"form-check-label\" for=\"invalidCheck\">\r\n                                            Agree to terms and conditions\r\n                                        </label>\r\n                                        <div class=\"invalid-feedback\">\r\n                                            You must agree before submitting.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Custom Boostrap Validation -->\r\n\r\n            <!-- Default Browser Validation -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5 class=\"card-title mb-0\">Browser Defaults</h5>\r\n                    <p class=\"card-text\">Not interested in custom validation feedback messages or writing JavaScript to\r\n                        change form behaviors? All good, you can use the browser defaults. Try submitting the form\r\n                        below.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm\">\r\n                            <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                                <div class=\"form-row row\">\r\n                                    <div class=\"col-md-4 mb-3\">\r\n                                        <label for=\"validationDefault01\">First Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationDefault01\"\r\n                                            placeholder=\"First Name\" value=\"Mark\" required>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 mb-3\">\r\n                                        <label for=\"validationDefault02\">Last Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationDefault02\"\r\n                                            placeholder=\"Last Name\" value=\"Otto\" required>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 mb-3\">\r\n                                        <label for=\"validationDefaultUsername\">Username</label>\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\r\n                                            <input type=\"text\" class=\"form-control\" id=\"validationDefaultUsername\"\r\n                                                placeholder=\"Username\" aria-describedby=\"inputGroupPrepend2\" required>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row row\">\r\n                                    <div class=\"col-md-6 mb-3\">\r\n                                        <label for=\"validationDefault03\">City</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationDefault03\"\r\n                                            placeholder=\"City\" required>\r\n                                    </div>\r\n                                    <div class=\"col-md-3 mb-3\">\r\n                                        <label for=\"validationDefault04\">State</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationDefault04\"\r\n                                            placeholder=\"State\" required>\r\n                                    </div>\r\n                                    <div class=\"col-md-3 mb-3\">\r\n                                        <label for=\"validationDefault05\">Zip</label>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"validationDefault05\"\r\n                                            placeholder=\"Zip\" required>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"form-check\">\r\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck2\"\r\n                                            required>\r\n                                        <label class=\"form-check-label\" for=\"invalidCheck2\">\r\n                                            Agree to terms and conditions\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Default Browser Validation -->\r\n\r\n            <!-- Server Side Validation -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5 class=\"card-title mb-0\">Server Side</h5>\r\n                    <p class=\"card-text\">We recommend using client side validation, but in case you require server side,\r\n                        you can indicate invalid and valid form fields with <code>.is-invalid</code> and\r\n                        <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these\r\n                        classes.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-row row\">\r\n                            <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"validationServer01\">First Name</label>\r\n                                <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\"\r\n                                    placeholder=\"First Name\" value=\"Mark\" required>\r\n                                <div class=\"valid-feedback\">\r\n                                    Looks good!\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"validationServer02\">Last Name</label>\r\n                                <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\"\r\n                                    placeholder=\"Last Name\" value=\"Otto\" required>\r\n                                <div class=\"valid-feedback\">\r\n                                    Looks good!\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"validationServerUsername\">Username</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\r\n                                    <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServerUsername\"\r\n                                        placeholder=\"Username\" aria-describedby=\"inputGroupPrepend3\" required>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please choose a username.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row row\">\r\n                            <div class=\"col-md-6 mb-3\">\r\n                                <label for=\"validationServer03\">City</label>\r\n                                <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\"\r\n                                    placeholder=\"City\" required>\r\n                                <div class=\"invalid-feedback\">\r\n                                    Please provide a valid city.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 mb-3\">\r\n                                <label for=\"validationServer04\">State</label>\r\n                                <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\"\r\n                                    placeholder=\"State\" required>\r\n                                <div class=\"invalid-feedback\">\r\n                                    Please provide a valid state.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 mb-3\">\r\n                                <label for=\"validationServer05\">Zip</label>\r\n                                <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\"\r\n                                    placeholder=\"Zip\" required>\r\n                                <div class=\"invalid-feedback\">\r\n                                    Please provide a valid zip.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input is-invalid\" type=\"checkbox\" value=\"\" id=\"invalidCheck3\"\r\n                                    required>\r\n                                <label class=\"form-check-label\" for=\"invalidCheck3\">\r\n                                    Agree to terms and conditions\r\n                                </label>\r\n                                <div class=\"invalid-feedback\">\r\n                                    You must agree before submitting.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /Server Side Validation -->\r\n\r\n            <!-- Supported Elements -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5 class=\"card-title mb-0\">Supported Elements</h5>\r\n                    <p class=\"card-text\">Form validation styles are also available for bootstrap custom form controls.\r\n                    </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm\">\r\n                            <form class=\"was-validated\" (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                                <div class=\"custom-control form-check mb-3\">\r\n                                    <input type=\"checkbox\" class=\"form-check-input\" id=\"customControlValidation1\"\r\n                                        required>\r\n                                    <label class=\"form-check-label\" for=\"customControlValidation1\">Check this custom\r\n                                        checkbox</label>\r\n                                    <div class=\"invalid-feedback\">Example invalid feedback text</div>\r\n                                </div>\r\n                                <div class=\"custom-control form-check\">\r\n                                    <input type=\"radio\" class=\"form-check-input\" id=\"customControlValidation2\"\r\n                                        name=\"radio-stacked\" required>\r\n                                    <label class=\"form-check-label\" for=\"customControlValidation2\">Toggle this\r\n                                        custom radio</label>\r\n                                </div>\r\n                                <div class=\"custom-control form-check mb-3\">\r\n                                    <input type=\"radio\" class=\"form-check-input\" id=\"customControlValidation3\"\r\n                                        name=\"radio-stacked\" required>\r\n                                    <label class=\"form-check-label\" for=\"customControlValidation3\">Or toggle this\r\n                                        other custom radio</label>\r\n                                    <div class=\"invalid-feedback\">More example invalid feedback text</div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <select class=\"form-select\" required>\r\n                                        <option value=\"\">Open this select menu</option>\r\n                                        <option value=\"1\">One</option>\r\n                                        <option value=\"2\">Two</option>\r\n                                        <option value=\"3\">Three</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\">Example invalid custom select feedback</div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"file\" class=\"form-control\" id=\"validatedCustomFile\" required>\r\n                                    <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Supported Elements -->\r\n\r\n            <!-- Validation Tooltips -->\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h5 class=\"card-title mb-0\">Tooltips</h5>\r\n                    <p class=\"card-text\">You can swap the <code>{{\".{valid|invalid}-feedback\"}}</code> classes for\r\n                        <code>{{\".{valid|invalid}-tooltip\"}}</code> classes to display validation feedback in a styled\r\n                        tooltip.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"needs-validation\" novalidate (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-row row\">\r\n                            <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"validationTooltip01\">First Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\"\r\n                                    placeholder=\"First Name\" value=\"Mark\" required>\r\n                                <div class=\"valid-tooltip\">\r\n                                    Looks good!\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"validationTooltip02\">Last Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"validationTooltip02\" placeholder=\"Last Name\"\r\n                                    value=\"Otto\" required>\r\n                                <div class=\"valid-tooltip\">\r\n                                    Looks good!\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4 mb-3\">\r\n                                <label for=\"validationTooltipUsername\">Username</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"validationTooltipUsername\"\r\n                                    placeholder=\"Username\" required>\r\n                                <div class=\"invalid-tooltip\">\r\n                                    Please choose a unique and valid username.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row row\">\r\n                            <div class=\"col-md-6 mb-3\">\r\n                                <label for=\"validationTooltip03\">City</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" placeholder=\"City\"\r\n                                    required>\r\n                                <div class=\"invalid-tooltip\">\r\n                                    Please provide a valid city.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 mb-3\">\r\n                                <label for=\"validationTooltip04\">State</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"validationTooltip04\" placeholder=\"State\"\r\n                                    required>\r\n                                <div class=\"invalid-tooltip\">\r\n                                    Please provide a valid state.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 mb-3\">\r\n                                <label for=\"validationTooltip05\">Zip</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" placeholder=\"Zip\"\r\n                                    required>\r\n                                <div class=\"invalid-tooltip\">\r\n                                    Please provide a valid zip.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /Validation Tooltips -->\r\n\r\n        </div>\r\n    </div>\r\n    <!-- /Row -->\r\n\r\n</div>";

/***/ }),

/***/ 76850:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/forms/forms.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n";

/***/ }),

/***/ 42582:
/*!*********************************************************************************************!*\
  !*** ./src/app/all-modules/forms/horizontal-form/horizontal-form.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<!--PageContent-->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Horizontal Form</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Horizontal Form</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 d-flex\">\r\n            <div class=\"card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Basic Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">First Name</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\"  [class.invalid]=\"basicForm.get('firstName').invalid && basicForm.get('firstName').touched\"\r\n                                formControlName=\"firstName\">\r\n                                <div\r\n                                *ngIf=\"basicForm.get('firstName').invalid && basicForm.get('firstName').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('firstName').invalid && basicForm.get('firstName').touched\"\r\n                                    class=\"text-danger\"> *First name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Last Name</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\"\r\n                                formControlName=\"lastName\">\r\n                                <div\r\n                                *ngIf=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\"\r\n                                    class=\"text-danger\"> *Last name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Email Address</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"email\" class=\"form-control\" [class.invalid]=\"basicForm.get('email').invalid && basicForm.get('email').touched\"\r\n                                formControlName=\"email\">\r\n                                <div\r\n                                *ngIf=\"basicForm.get('email').invalid && basicForm.get('email').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('email').invalid && basicForm.get('email').touched\"\r\n                                    class=\"text-danger\"> *Email is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Username</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"basicForm.get('userName').invalid && basicForm.get('userName').touched\"\r\n                                formControlName=\"userName\">\r\n                                <div\r\n                                *ngIf=\"basicForm.get('userName').invalid && basicForm.get('userName').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('userName').invalid && basicForm.get('userName').touched\"\r\n                                    class=\"text-danger\"> *User name is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"password\" class=\"form-control\" [class.invalid]=\"basicForm.get('password').invalid && basicForm.get('password').touched\"\r\n                                formControlName=\"password\">\r\n                                <div\r\n                                *ngIf=\"basicForm.get('password').invalid && basicForm.get('password').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('password').invalid && basicForm.get('password').touched\"\r\n                                    class=\"text-danger\"> *Password is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Repeat Password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"password\" class=\"form-control\" [class.invalid]=\"basicForm.get('repeatPassword').invalid && basicForm.get('repeatPassword').touched\"\r\n                                formControlName=\"repeatPassword\">\r\n                                <div\r\n                                *ngIf=\"basicForm.get('repeatPassword').invalid && basicForm.get('repeatPassword').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('repeatPassword').invalid && basicForm.get('repeatPassword').touched\"\r\n                                    class=\"text-danger\"> *Repeat password is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 d-flex\">\r\n            <div class=\"card flex-fill\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Address Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"addressFormSubmit()\" [formGroup]=\"addressForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Address 1</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"addressForm.get('addressOne').invalid && addressForm.get('addressOne').touched\"\r\n                                formControlName=\"addressOne\">\r\n                                <div\r\n                                *ngIf=\"addressForm.get('addressOne').invalid && addressForm.get('addressOne').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('addressOne').invalid && addressForm.get('addressOne').touched\"\r\n                                    class=\"text-danger\"> *Address 1 is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Address 2</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"addressForm.get('addressTwo').invalid && addressForm.get('addressTwo').touched\"\r\n                                formControlName=\"addressTwo\">\r\n                                <div\r\n                                *ngIf=\"addressForm.get('addressTwo').invalid && addressForm.get('addressTwo').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('addressTwo').invalid && addressForm.get('addressTwo').touched\"\r\n                                    class=\"text-danger\"> *Address 2 is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">City</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\"  [class.invalid]=\"addressForm.get('city').invalid && addressForm.get('city').touched\"\r\n                                formControlName=\"city\">\r\n                                <div\r\n                                *ngIf=\"addressForm.get('city').invalid && addressForm.get('city').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('city').invalid && addressForm.get('city').touched\"\r\n                                    class=\"text-danger\"> *City is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">State</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\"  [class.invalid]=\"addressForm.get('state').invalid && addressForm.get('state').touched\"\r\n                                formControlName=\"state\">\r\n                                <div\r\n                                *ngIf=\"addressForm.get('state').invalid && addressForm.get('state').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('state').invalid && addressForm.get('state').touched\"\r\n                                    class=\"text-danger\"> *State is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Country</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"addressForm.get('country').invalid && addressForm.get('country').touched\"\r\n                                formControlName=\"country\">\r\n                                <div\r\n                                *ngIf=\"addressForm.get('country').invalid && addressForm.get('country').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('country').invalid && addressForm.get('country').touched\"\r\n                                    class=\"text-danger\"> *Country is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label\">Postal Code</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"text\" class=\"form-control\" [class.invalid]=\"addressForm.get('postalCode').invalid && addressForm.get('postalCode').touched\"\r\n                                formControlName=\"postalCode\">\r\n                                <div\r\n                                *ngIf=\"addressForm.get('postalCode').invalid && addressForm.get('postalCode').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('postalCode').invalid && addressForm.get('postalCode').touched\"\r\n                                    class=\"text-danger\"> *Postalcode is required</small>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Two Column Horizontal Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Personal Information</h4>\r\n                    <form (ngSubmit)=\"columnOneSubmit()\" [formGroup]=\"twoColumnFormOne\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">First Name</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('firstName').invalid && twoColumnFormOne.get('firstName').touched\"\r\n                                        formControlName=\"firstName\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('firstName').invalid && twoColumnFormOne.get('firstName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('firstName').invalid && twoColumnFormOne.get('firstName').touched\"\r\n                                            class=\"text-danger\"> *First name is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Last Name</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('lastName').invalid && twoColumnFormOne.get('lastName').touched\"\r\n                                        formControlName=\"lastName\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('lastName').invalid && twoColumnFormOne.get('lastName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('lastName').invalid && twoColumnFormOne.get('lastName').touched\"\r\n                                            class=\"text-danger\"> *Last name is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Gender</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <div class=\"form-check form-check-inline\">\r\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"gender_male\"\r\n                                                value=\"option1\" checked>\r\n                                            <label class=\"form-check-label\" for=\"gender_male\">\r\n                                                Male\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class=\"form-check form-check-inline\">\r\n                                            <input class=\"form-check-input\" type=\"radio\" name=\"gender\"\r\n                                                id=\"gender_female\" value=\"option2\">\r\n                                            <label class=\"form-check-label\" for=\"gender_female\">\r\n                                                Female\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Blood Group</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <select class=\"form-select form-control\" [class.invalid]=\"twoColumnFormOne.get('bloodGroup').invalid && twoColumnFormOne.get('bloodGroup').touched\"\r\n                                        formControlName=\"bloodGroup\">\r\n                                            <option>Select</option>\r\n                                            <option value=\"1\">A+</option>\r\n                                            <option value=\"2\">O+</option>\r\n                                            <option value=\"3\">B+</option>\r\n                                            <option value=\"4\">AB+</option>\r\n                                        </select>\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('bloodGroup').invalid && twoColumnFormOne.get('bloodGroup').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('bloodGroup').invalid && twoColumnFormOne.get('bloodGroup').touched\"\r\n                                            class=\"text-danger\"> *Blood Group is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Username</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('userName').invalid && twoColumnFormOne.get('userName').touched\"\r\n                                        formControlName=\"userName\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('userName').invalid && twoColumnFormOne.get('userName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('userName').invalid && twoColumnFormOne.get('userName').touched\"\r\n                                            class=\"text-danger\"> *User name is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Email</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('email').invalid && twoColumnFormOne.get('email').touched\"\r\n                                        formControlName=\"email\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('email').invalid && twoColumnFormOne.get('email').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('email').invalid && twoColumnFormOne.get('email').touched\"\r\n                                            class=\"text-danger\"> *Email is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Password</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"password\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('password').invalid && twoColumnFormOne.get('password').touched\"\r\n                                        formControlName=\"password\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('password').invalid && twoColumnFormOne.get('password').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('password').invalid && twoColumnFormOne.get('password').touched\"\r\n                                            class=\"text-danger\"> *Password is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Repeat Password</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"password\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('repeatPassword').invalid && twoColumnFormOne.get('repeatPassword').touched\"\r\n                                        formControlName=\"repeatPassword\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('repeatPassword').invalid && twoColumnFormOne.get('repeatPassword').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('repeatPassword').invalid && twoColumnFormOne.get('repeatPassword').touched\"\r\n                                            class=\"text-danger\"> *Repeat password is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h4 class=\"card-title\">Address</h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Address Line 1</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('addresslineone').invalid && twoColumnFormOne.get('addresslineone').touched\"\r\n                                        formControlName=\"addresslineone\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('addresslineone').invalid && twoColumnFormOne.get('addresslineone').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('addresslineone').invalid && twoColumnFormOne.get('addresslineone').touched\"\r\n                                            class=\"text-danger\"> *Address Line 1 is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Address Line 2</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('addresslinetwo').invalid && twoColumnFormOne.get('addresslinetwo').touched\"\r\n                                        formControlName=\"addresslinetwo\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('addresslinetwo').invalid && twoColumnFormOne.get('addresslinetwo').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('addresslinetwo').invalid && twoColumnFormOne.get('addresslinetwo').touched\"\r\n                                            class=\"text-danger\"> *Address Line 2 is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">State</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('state').invalid && twoColumnFormOne.get('state').touched\"\r\n                                        formControlName=\"state\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('state').invalid && twoColumnFormOne.get('state').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('state').invalid && twoColumnFormOne.get('state').touched\"\r\n                                            class=\"text-danger\"> *State is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-6\">\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">City</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\"\r\n                                        formControlName=\"city\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\"\r\n                                            class=\"text-danger\"> *City is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Country</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('country').invalid && twoColumnFormOne.get('country').touched\"\r\n                                        formControlName=\"country\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('country').invalid && twoColumnFormOne.get('country').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('country').invalid && twoColumnFormOne.get('country').touched\"\r\n                                            class=\"text-danger\"> *Country is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Postal Code</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormOne.get('postalCode').invalid && twoColumnFormOne.get('postalCode').touched\"\r\n                                        formControlName=\"postalCode\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormOne.get('postalCode').invalid && twoColumnFormOne.get('postalCode').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('postalCode').invalid && twoColumnFormOne.get('postalCode').touched\"\r\n                                            class=\"text-danger\"> *Postal Code is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Two Column Horizontal Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"columnTwoSubmit()\" [formGroup]=\"twoColumnFormTwo\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6\">\r\n                                <h4 class=\"card-title\">Personal Details</h4>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">First Name</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('firstName').invalid && twoColumnFormTwo.get('firstName').touched\"\r\n                                        formControlName=\"firstName\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('firstName').invalid && twoColumnFormTwo.get('firstName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('firstName').invalid && twoColumnFormTwo.get('firstName').touched\"\r\n                                            class=\"text-danger\"> *First name is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Last Name</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('lastName').invalid && twoColumnFormTwo.get('lastName').touched\"\r\n                                        formControlName=\"lastName\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('lastName').invalid && twoColumnFormTwo.get('lastName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('lastName').invalid && twoColumnFormTwo.get('lastName').touched\"\r\n                                            class=\"text-danger\"> *Last name is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Password</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"password\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('password').invalid && twoColumnFormTwo.get('password').touched\"\r\n                                        formControlName=\"password\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('password').invalid && twoColumnFormTwo.get('password').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('password').invalid && twoColumnFormTwo.get('password').touched\"\r\n                                            class=\"text-danger\"> *Password is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">State</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <select class=\"form-select form-control\" [class.invalid]=\"twoColumnFormTwo.get('state').invalid && twoColumnFormTwo.get('state').touched\"\r\n                                        formControlName=\"state\">\r\n                                            <option>Select State</option>\r\n                                            <option value=\"1\">California</option>\r\n                                            <option value=\"2\">Texas</option>\r\n                                            <option value=\"3\">Florida</option>\r\n                                        </select>\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('state').invalid && twoColumnFormTwo.get('state').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('state').invalid && twoColumnFormTwo.get('state').touched\"\r\n                                            class=\"text-danger\"> *State is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">About</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <textarea rows=\"4\" cols=\"5\" class=\"form-control\"\r\n                                            placeholder=\"Enter message\" [class.invalid]=\"twoColumnFormTwo.get('textArea').invalid && twoColumnFormTwo.get('textArea').touched\"\r\n                                            formControlName=\"textArea\"></textarea>\r\n                                            <div\r\n                                            *ngIf=\"twoColumnFormTwo.get('textArea').invalid && twoColumnFormTwo.get('textArea').touched\">\r\n                                            <small\r\n                                                *ngIf=\"twoColumnFormTwo.get('textArea').invalid && twoColumnFormTwo.get('textArea').touched\"\r\n                                                class=\"text-danger\"> *Text area is required</small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-6\">\r\n                                <h4 class=\"card-title\">Personal details</h4>\r\n                                <div class=\"row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Name</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"text\" placeholder=\"First Name\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalFirstName').invalid && twoColumnFormTwo.get('personalFirstName').touched\"\r\n                                                    formControlName=\"personalFirstName\">\r\n                                                    <div\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalFirstName').invalid && twoColumnFormTwo.get('personalFirstName').touched\">\r\n                                                    <small\r\n                                                        *ngIf=\"twoColumnFormTwo.get('personalFirstName').invalid && twoColumnFormTwo.get('personalFirstName').touched\"\r\n                                                        class=\"text-danger\"> *First name is required</small>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalLastName').invalid && twoColumnFormTwo.get('personalLastName').touched\"\r\n                                                    formControlName=\"personalLastName\">\r\n                                                    <div\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalLastName').invalid && twoColumnFormTwo.get('personalLastName').touched\">\r\n                                                    <small\r\n                                                        *ngIf=\"twoColumnFormTwo.get('personalLastName').invalid && twoColumnFormTwo.get('personalLastName').touched\"\r\n                                                        class=\"text-danger\"> *Last name is required</small>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Email</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalEmail').invalid && twoColumnFormTwo.get('personalEmail').touched\"\r\n                                        formControlName=\"personalEmail\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('personalEmail').invalid && twoColumnFormTwo.get('personalEmail').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('personalEmail').invalid && twoColumnFormTwo.get('personalEmail').touched\"\r\n                                            class=\"text-danger\"> *Email is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Phone</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalPhone').invalid && twoColumnFormTwo.get('personalPhone').touched\"\r\n                                        formControlName=\"personalPhone\">\r\n                                        <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('personalPhone').invalid && twoColumnFormTwo.get('personalPhone').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('personalPhone').invalid && twoColumnFormTwo.get('personalPhone').touched\"\r\n                                            class=\"text-danger\"> *Phone is required</small>\r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label class=\"col-lg-3 col-form-label\">Address</label>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <input type=\"text\" class=\"form-control m-b-20\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <select class=\"form-select form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalCountry').invalid && twoColumnFormTwo.get('personalCountry').touched\"\r\n                                                    formControlName=\"personalCountry\">\r\n                                                        <option>Select Country</option>\r\n                                                        <option value=\"1\">USA</option>\r\n                                                        <option value=\"2\">France</option>\r\n                                                        <option value=\"3\">India</option>\r\n                                                        <option value=\"4\">Spain</option>\r\n                                                    </select>\r\n                                                    <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('personalCountry').invalid && twoColumnFormTwo.get('personalCountry').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('personalCountry').invalid && twoColumnFormTwo.get('personalCountry').touched\"\r\n                                            class=\"text-danger\"> *Country is required</small>\r\n                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"text\" placeholder=\"ZIP code\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalZipCode').invalid && twoColumnFormTwo.get('personalZipCode').touched\"\r\n                                                    formControlName=\"personalZipCode\">\r\n                                                    <div\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalZipCode').invalid && twoColumnFormTwo.get('personalZipCode').touched\">\r\n                                                    <small\r\n                                                        *ngIf=\"twoColumnFormTwo.get('personalZipCode').invalid && twoColumnFormTwo.get('personalZipCode').touched\"\r\n                                                        class=\"text-danger\"> *Zip Code is required</small>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"text\" placeholder=\"State/Province\"\r\n                                                        class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalProvince').invalid && twoColumnFormTwo.get('personalProvince').touched\"\r\n                                                        formControlName=\"personalProvince\">\r\n                                                        <div\r\n                                                        *ngIf=\"twoColumnFormTwo.get('personalProvince').invalid && twoColumnFormTwo.get('personalProvince').touched\">\r\n                                                        <small\r\n                                                            *ngIf=\"twoColumnFormTwo.get('personalProvince').invalid && twoColumnFormTwo.get('personalProvince').touched\"\r\n                                                            class=\"text-danger\"> *State/Province is required</small>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"text\" placeholder=\"City\" class=\"form-control\" [class.invalid]=\"twoColumnFormTwo.get('personalCity').invalid && twoColumnFormTwo.get('personalCity').touched\"\r\n                                                    formControlName=\"personalCity\">\r\n                                                    <div\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalCity').invalid && twoColumnFormTwo.get('personalCity').touched\">\r\n                                                    <small\r\n                                                        *ngIf=\"twoColumnFormTwo.get('personalCity').invalid && twoColumnFormTwo.get('personalCity').touched\"\r\n                                                        class=\"text-danger\"> *City is required</small>\r\n                                                </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/PageContent-->";

/***/ }),

/***/ 85469:
/*!***************************************************************************************!*\
  !*** ./src/app/all-modules/forms/input-groups/input-groups.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<!--PageContent-->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Input Groups</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Input Groups</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Basic Examples</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"InputGroupForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Group Left</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\r\n                                        aria-describedby=\"basic-addon1\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Group Right</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">URL Example</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">https://</span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Group with Price</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                    <span class=\"input-group-text\">.00</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row mb-0\">\r\n                            <label class=\"col-form-label col-lg-2\">Group with Price (Left)</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                    <span class=\"input-group-text\">0.00</span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Sizing</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"InputGroupForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Input Group Large</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group input-group-lg\">\r\n                                    <span class=\"input-group-text\" id=\"sizing-addon1\">@</span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon1\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Input Group Default</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\" id=\"sizing-addon2\">@</span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon2\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row mb-0\">\r\n                            <label class=\"col-form-label col-lg-2\">Input Group Small</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group input-group-sm\">\r\n                                    <span class=\"input-group-text\" id=\"sizing-addon3\">@</span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon3\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Checkbox and Radio Addons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"InputGroupForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Checkbox</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <input type=\"checkbox\">\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row mb-0\">\r\n                            <label class=\"col-form-label col-lg-2\">Radio</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <input type=\"radio\">\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Multiple Addons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"InputGroupForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Radio and Text Addons</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <input type=\"checkbox\">\r\n                                    </span>\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row mb-0\">\r\n                            <label class=\"col-form-label col-lg-2\">Two Addons</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                    <span class=\"input-group-text\">0.00</span>\r\n                                    <input type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Buttons with dropdowns</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"InputGroupForm\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-form-label col-lg-2\">Radio and Text Addons</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <button type=\"button\" class=\"btn btn-white dropdown-toggle\"\r\n                                        data-bs-toggle=\"dropdown\">Action</button>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" >Action</a>\r\n                                        <a class=\"dropdown-item\" >Another action</a>\r\n                                        <a class=\"dropdown-item\" >Something else here</a>\r\n                                        <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                                        <a class=\"dropdown-item\" >Separated link</a>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Left dropdown\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row mb-0\">\r\n                            <label class=\"col-form-label col-lg-2\">Two Addons</label>\r\n                            <div class=\"col-lg-10\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Right dropdown\">\r\n                                    <button type=\"button\" class=\"btn btn-white dropdown-toggle\"\r\n                                        data-bs-toggle=\"dropdown\">Action</button>\r\n                                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                        <a class=\"dropdown-item\" >Action</a>\r\n                                        <a class=\"dropdown-item\" >Another action</a>\r\n                                        <a class=\"dropdown-item\" >Something else here</a>\r\n                                        <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                                        <a class=\"dropdown-item\" >Separated link</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!--/PageContent-->\r\n\r\n\r\n>";

/***/ }),

/***/ 76959:
/*!*****************************************************************************************************!*\
  !*** ./src/app/all-modules/forms/verticals-forms-new/verticals-forms-new.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!--PageContent-->\r\n\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Vertical Form</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Vertical Form</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Basic Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"basicFormSubmit()\" [formGroup]=\"basicForm\">\r\n                        <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"basicForm.get('firstName').invalid && basicForm.get('firstName').touched\"\r\n                                formControlName=\"firstName\">\r\n                            <div *ngIf=\"basicForm.get('firstName').invalid && basicForm.get('firstName').touched\">\r\n                                <small *ngIf=\"basicForm.get('firstName').invalid && basicForm.get('firstName').touched\"\r\n                                    class=\"text-danger\"> *First name is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\"\r\n                                formControlName=\"lastName\">\r\n                            <div *ngIf=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\">\r\n                                <small *ngIf=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\"\r\n                                    class=\"text-danger\"> *Last name is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Email Address</label>\r\n                            <input type=\"email\" class=\"form-control\"\r\n                                [class.invalid]=\"basicForm.get('email').invalid && basicForm.get('email').touched\"\r\n                                formControlName=\"email\">\r\n                            <div *ngIf=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\">\r\n                                <small *ngIf=\"basicForm.get('lastName').invalid && basicForm.get('lastName').touched\"\r\n                                    class=\"text-danger\"> *Last name is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"basicForm.get('userName').invalid && basicForm.get('userName').touched\"\r\n                                formControlName=\"userName\">\r\n                            <div *ngIf=\"basicForm.get('userName').invalid && basicForm.get('userName').touched\">\r\n                                <small *ngIf=\"basicForm.get('userName').invalid && basicForm.get('userName').touched\"\r\n                                    class=\"text-danger\"> *User name is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control\"\r\n                                [class.invalid]=\"basicForm.get('password').invalid && basicForm.get('password').touched\"\r\n                                formControlName=\"password\">\r\n                            <div *ngIf=\"basicForm.get('password').invalid && basicForm.get('password').touched\">\r\n                                <small *ngIf=\"basicForm.get('password').invalid && basicForm.get('password').touched\"\r\n                                    class=\"text-danger\"> *Password is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Repeat Password</label>\r\n                            <input type=\"password\" class=\"form-control\"\r\n                                [class.invalid]=\"basicForm.get('repeatPassword').invalid && basicForm.get('repeatPassword').touched\"\r\n                                formControlName=\"repeatPassword\">\r\n                            <div\r\n                                *ngIf=\"basicForm.get('repeatPassword').invalid && basicForm.get('repeatPassword').touched\">\r\n                                <small\r\n                                    *ngIf=\"basicForm.get('repeatPassword').invalid && basicForm.get('repeatPassword').touched\"\r\n                                    class=\"text-danger\"> *Repeat password is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Address Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"addressFormSubmit()\" [formGroup]=\"addressForm\">\r\n                        <div class=\"form-group\">\r\n                            <label>Address Line 1</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"addressForm.get('addressOne').invalid && addressForm.get('addressOne').touched\"\r\n                                formControlName=\"addressOne\">\r\n                            <div *ngIf=\"addressForm.get('addressOne').invalid && addressForm.get('addressOne').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('addressOne').invalid && addressForm.get('addressOne').touched\"\r\n                                    class=\"text-danger\"> *Address 1 is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Address Line 2</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"addressForm.get('addressTwo').invalid && addressForm.get('addressTwo').touched\"\r\n                                formControlName=\"addressTwo\">\r\n                            <div *ngIf=\"addressForm.get('addressTwo').invalid && addressForm.get('addressTwo').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('addressTwo').invalid && addressForm.get('addressTwo').touched\"\r\n                                    class=\"text-danger\"> *Address 2 is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>City</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"addressForm.get('city').invalid && addressForm.get('city').touched\"\r\n                                formControlName=\"city\">\r\n                            <div *ngIf=\"addressForm.get('city').invalid && addressForm.get('city').touched\">\r\n                                <small *ngIf=\"addressForm.get('city').invalid && addressForm.get('city').touched\"\r\n                                    class=\"text-danger\"> *City is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>State</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"addressForm.get('state').invalid && addressForm.get('state').touched\"\r\n                                formControlName=\"state\">\r\n                            <div *ngIf=\"addressForm.get('state').invalid && addressForm.get('state').touched\">\r\n                                <small *ngIf=\"addressForm.get('state').invalid && addressForm.get('state').touched\"\r\n                                    class=\"text-danger\"> *State is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Country</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"addressForm.get('country').invalid && addressForm.get('country').touched\"\r\n                                formControlName=\"country\">\r\n                            <div *ngIf=\"addressForm.get('country').invalid && addressForm.get('country').touched\">\r\n                                <small *ngIf=\"addressForm.get('country').invalid && addressForm.get('country').touched\"\r\n                                    class=\"text-danger\"> *Country is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Postal Code</label>\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                [class.invalid]=\"addressForm.get('postalCode').invalid && addressForm.get('postalCode').touched\"\r\n                                formControlName=\"postalCode\">\r\n                            <div *ngIf=\"addressForm.get('postalCode').invalid && addressForm.get('postalCode').touched\">\r\n                                <small\r\n                                    *ngIf=\"addressForm.get('postalCode').invalid && addressForm.get('postalCode').touched\"\r\n                                    class=\"text-danger\"> *Postalcode is required</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Two Column Vertical Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"columnOneSubmit()\" [formGroup]=\"twoColumnFormOne\">\r\n                        <h4 class=\"card-title\">Personal Information</h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>First Name</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('firstName').invalid && twoColumnFormOne.get('firstName').touched\"\r\n                                        formControlName=\"firstName\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('firstName').invalid && twoColumnFormOne.get('firstName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('firstName').invalid && twoColumnFormOne.get('firstName').touched\"\r\n                                            class=\"text-danger\"> *First name is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Last Name</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('lastName').invalid && twoColumnFormOne.get('lastName').touched\"\r\n                                        formControlName=\"lastName\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('lastName').invalid && twoColumnFormOne.get('lastName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('lastName').invalid && twoColumnFormOne.get('lastName').touched\"\r\n                                            class=\"text-danger\"> *Last name is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Blood Group</label>\r\n                                    <select class=\"form-select form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('bloodGroup').invalid && twoColumnFormOne.get('bloodGroup').touched\"\r\n                                        formControlName=\"bloodGroup\">\r\n                                        <option>Select</option>\r\n                                        <option value=\"1\">A+</option>\r\n                                        <option value=\"2\">O+</option>\r\n                                        <option value=\"3\">B+</option>\r\n                                        <option value=\"4\">AB+</option>\r\n                                    </select>\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('bloodGroup').invalid && twoColumnFormOne.get('bloodGroup').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('bloodGroup').invalid && twoColumnFormOne.get('bloodGroup').touched\"\r\n                                            class=\"text-danger\"> *Blood Group is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"d-block\">Gender:</label>\r\n                                    <div class=\"form-check form-check-inline\">\r\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"gender_male\"\r\n                                            value=\"option1\">\r\n                                        <label class=\"form-check-label\" for=\"gender_male\">Male</label>\r\n                                    </div>\r\n                                    <div class=\"form-check form-check-inline\">\r\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"gender_female\"\r\n                                            value=\"option2\">\r\n                                        <label class=\"form-check-label\" for=\"gender_female\">Female</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Username</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('userName').invalid && twoColumnFormOne.get('userName').touched\"\r\n                                        formControlName=\"userName\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('userName').invalid && twoColumnFormOne.get('userName').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('userName').invalid && twoColumnFormOne.get('userName').touched\"\r\n                                            class=\"text-danger\"> *User name is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Email</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('email').invalid && twoColumnFormOne.get('email').touched\"\r\n                                        formControlName=\"email\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('email').invalid && twoColumnFormOne.get('email').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('email').invalid && twoColumnFormOne.get('email').touched\"\r\n                                            class=\"text-danger\"> *Email is required</small>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label>Password</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('password').invalid && twoColumnFormOne.get('password').touched\"\r\n                                        formControlName=\"password\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('password').invalid && twoColumnFormOne.get('password').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('password').invalid && twoColumnFormOne.get('password').touched\"\r\n                                            class=\"text-danger\"> *Password is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Repeat Password</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('repeatPassword').invalid && twoColumnFormOne.get('repeatPassword').touched\"\r\n                                        formControlName=\"repeatPassword\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('repeatPassword').invalid && twoColumnFormOne.get('repeatPassword').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('repeatPassword').invalid && twoColumnFormOne.get('repeatPassword').touched\"\r\n                                            class=\"text-danger\"> *Repeat password is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h4 class=\"card-title\">Postal Address</h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Address Line 1</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('addresslineone').invalid && twoColumnFormOne.get('addresslineone').touched\"\r\n                                        formControlName=\"addresslineone\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('addresslineone').invalid && twoColumnFormOne.get('addresslineone').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('addresslineone').invalid && twoColumnFormOne.get('addresslineone').touched\"\r\n                                            class=\"text-danger\"> *Address Line 1 is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Address Line 2</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('addresslinetwo').invalid && twoColumnFormOne.get('addresslinetwo').touched\"\r\n                                        formControlName=\"addresslinetwo\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('addresslinetwo').invalid && twoColumnFormOne.get('addresslinetwo').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('addresslinetwo').invalid && twoColumnFormOne.get('addresslinetwo').touched\"\r\n                                            class=\"text-danger\"> *Address Line 2 is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>State</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('state').invalid && twoColumnFormOne.get('state').touched\"\r\n                                        formControlName=\"state\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('state').invalid && twoColumnFormOne.get('state').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('state').invalid && twoColumnFormOne.get('state').touched\"\r\n                                            class=\"text-danger\"> *State is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>City</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\"\r\n                                        formControlName=\"city\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\"\r\n                                            class=\"text-danger\"> *City is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Country</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('country').invalid && twoColumnFormOne.get('country').touched\"\r\n                                        formControlName=\"country\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('city').invalid && twoColumnFormOne.get('city').touched\"\r\n                                            class=\"text-danger\"> *City is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Postal Code</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormOne.get('postalCode').invalid && twoColumnFormOne.get('postalCode').touched\"\r\n                                        formControlName=\"postalCode\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormOne.get('postalCode').invalid && twoColumnFormOne.get('postalCode').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormOne.get('postalCode').invalid && twoColumnFormOne.get('postalCode').touched\"\r\n                                            class=\"text-danger\"> *Postal Code is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card mb-0\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title mb-0\">Two Column Vertical Form</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"columnTwoSubmit()\" [formGroup]=\"twoColumnFormTwo\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <h4 class=\"card-title\">Personal details</h4>\r\n                                <div class=\"form-group\">\r\n                                    <label>Name:</label>\r\n                                    <input type=\"text\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormTwo.get('name').invalid && twoColumnFormTwo.get('name').touched\"\r\n                                        formControlName=\"name\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('name').invalid && twoColumnFormTwo.get('name').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('name').invalid && twoColumnFormTwo.get('name').touched\"\r\n                                            class=\"text-danger\"> *Name is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Password:</label>\r\n                                    <input type=\"password\" class=\"form-control\"\r\n                                        [class.invalid]=\"twoColumnFormTwo.get('password').invalid && twoColumnFormTwo.get('password').touched\"\r\n                                        formControlName=\"password\">\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('password').invalid && twoColumnFormTwo.get('password').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('password').invalid && twoColumnFormTwo.get('password').touched\"\r\n                                            class=\"text-danger\"> *Password is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>State:</label>\r\n                                    <select class=\"form-select form-control\"\r\n                                        [class.invalid]=\"twoColumnFormTwo.get('state').invalid && twoColumnFormTwo.get('state').touched\"\r\n                                        formControlName=\"state\">\r\n                                        <option>Select State</option>\r\n                                        <option value=\"1\">California</option>\r\n                                        <option value=\"2\">Texas</option>\r\n                                        <option value=\"3\">Florida</option>\r\n                                    </select>\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('state').invalid && twoColumnFormTwo.get('state').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('state').invalid && twoColumnFormTwo.get('state').touched\"\r\n                                            class=\"text-danger\"> *State is required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label>Your Message:</label>\r\n                                    <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Enter message\"\r\n                                        [class.invalid]=\"twoColumnFormTwo.get('textArea').invalid && twoColumnFormTwo.get('textArea').touched\"\r\n                                        formControlName=\"textArea\"></textarea>\r\n                                    <div\r\n                                        *ngIf=\"twoColumnFormTwo.get('textArea').invalid && twoColumnFormTwo.get('textArea').touched\">\r\n                                        <small\r\n                                            *ngIf=\"twoColumnFormTwo.get('textArea').invalid && twoColumnFormTwo.get('textArea').touched\"\r\n                                            class=\"text-danger\"> *Text area is required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <h4 class=\"card-title\">Personal details</h4>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>First Name:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalFirstName').invalid && twoColumnFormTwo.get('personalFirstName').touched\"\r\n                                                formControlName=\"personalFirstName\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalFirstName').invalid && twoColumnFormTwo.get('personalFirstName').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalFirstName').invalid && twoColumnFormTwo.get('personalFirstName').touched\"\r\n                                                    class=\"text-danger\"> *First name is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Last Name:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalLastName').invalid && twoColumnFormTwo.get('personalLastName').touched\"\r\n                                                formControlName=\"personalLastName\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalLastName').invalid && twoColumnFormTwo.get('personalLastName').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalLastName').invalid && twoColumnFormTwo.get('personalLastName').touched\"\r\n                                                    class=\"text-danger\"> *Last name is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Email:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalEmail').invalid && twoColumnFormTwo.get('personalEmail').touched\"\r\n                                                formControlName=\"personalEmail\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalEmail').invalid && twoColumnFormTwo.get('personalEmail').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalEmail').invalid && twoColumnFormTwo.get('personalEmail').touched\"\r\n                                                    class=\"text-danger\"> *Email is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Phone:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalPhone').invalid && twoColumnFormTwo.get('personalPhone').touched\"\r\n                                                formControlName=\"personalPhone\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalPhone').invalid && twoColumnFormTwo.get('personalPhone').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalPhone').invalid && twoColumnFormTwo.get('personalPhone').touched\"\r\n                                                    class=\"text-danger\"> *Phone is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Address line:</label>\r\n                                            <input type=\"text\" class=\"form-control\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Country:</label>\r\n                                            <select class=\"form-select form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalCountry').invalid && twoColumnFormTwo.get('personalCountry').touched\"\r\n                                                formControlName=\"personalCountry\">\r\n                                                <option>Select Country</option>\r\n                                                <option value=\"1\">USA</option>\r\n                                                <option value=\"2\">France</option>\r\n                                                <option value=\"3\">India</option>\r\n                                                <option value=\"4\">Spain</option>\r\n                                            </select>\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalCountry').invalid && twoColumnFormTwo.get('personalCountry').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalCountry').invalid && twoColumnFormTwo.get('personalCountry').touched\"\r\n                                                    class=\"text-danger\"> *Country is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>State/Province:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalProvince').invalid && twoColumnFormTwo.get('personalProvince').touched\"\r\n                                                formControlName=\"personalProvince\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalProvince').invalid && twoColumnFormTwo.get('personalProvince').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalProvince').invalid && twoColumnFormTwo.get('personalProvince').touched\"\r\n                                                    class=\"text-danger\"> *State/Province is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>ZIP code:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalZipCode').invalid && twoColumnFormTwo.get('personalZipCode').touched\"\r\n                                                formControlName=\"personalZipCode\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalZipCode').invalid && twoColumnFormTwo.get('personalZipCode').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalZipCode').invalid && twoColumnFormTwo.get('personalZipCode').touched\"\r\n                                                    class=\"text-danger\"> *Zip Code is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>City:</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                [class.invalid]=\"twoColumnFormTwo.get('personalCity').invalid && twoColumnFormTwo.get('personalCity').touched\"\r\n                                                formControlName=\"personalCity\">\r\n                                            <div\r\n                                                *ngIf=\"twoColumnFormTwo.get('personalCity').invalid && twoColumnFormTwo.get('personalCity').touched\">\r\n                                                <small\r\n                                                    *ngIf=\"twoColumnFormTwo.get('personalCity').invalid && twoColumnFormTwo.get('personalCity').touched\"\r\n                                                    class=\"text-danger\"> *City is required</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-end\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!--/PageContent-->";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_forms_forms_module_ts.js.map