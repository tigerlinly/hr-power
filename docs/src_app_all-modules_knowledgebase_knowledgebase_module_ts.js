"use strict";
(self["webpackChunksmarthr"] = self["webpackChunksmarthr"] || []).push([["src_app_all-modules_knowledgebase_knowledgebase_module_ts"],{

/***/ 34633:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-main/knowledgebase-main.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgebaseMainComponent": () => (/* binding */ KnowledgebaseMainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _knowledgebase_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledgebase-main.component.html?ngResource */ 66717);
/* harmony import */ var _knowledgebase_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledgebase-main.component.css?ngResource */ 53558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../all-modules.service */ 78376);





let KnowledgebaseMainComponent = class KnowledgebaseMainComponent {
    constructor(allModuleService) {
        this.allModuleService = allModuleService;
        this.url = "knowledgeBase";
        this.allKnowledgeBase = [];
    }
    ngOnInit() {
        this.getPolicies();
    }
    getPolicies() {
        this.allModuleService.get(this.url).subscribe((data) => {
            this.allKnowledgeBase = data;
        });
    }
};
KnowledgebaseMainComponent.ctorParameters = () => [
    { type: _all_modules_service__WEBPACK_IMPORTED_MODULE_2__.AllModulesService }
];
KnowledgebaseMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-knowledgebase-main",
        template: _knowledgebase_main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_knowledgebase_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KnowledgebaseMainComponent);



/***/ }),

/***/ 81868:
/*!***************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgebaseRoutingModule": () => (/* binding */ KnowledgebaseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _knowledgebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledgebase.component */ 94858);
/* harmony import */ var _knowledgebase_main_knowledgebase_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledgebase-main/knowledgebase-main.component */ 34633);
/* harmony import */ var _knowledgebase_view_knowledgebase_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledgebase-view/knowledgebase-view.component */ 22734);






const routes = [
    {
        path: "",
        component: _knowledgebase_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgebaseComponent,
        children: [
            {
                path: "knowledgebase-main",
                component: _knowledgebase_main_knowledgebase_main_component__WEBPACK_IMPORTED_MODULE_1__.KnowledgebaseMainComponent
            },
            {
                path: "knowledgebase-view",
                component: _knowledgebase_view_knowledgebase_view_component__WEBPACK_IMPORTED_MODULE_2__.KnowledgebaseViewComponent
            }
        ]
    }
];
let KnowledgebaseRoutingModule = class KnowledgebaseRoutingModule {
};
KnowledgebaseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], KnowledgebaseRoutingModule);



/***/ }),

/***/ 22734:
/*!**********************************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-view/knowledgebase-view.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgebaseViewComponent": () => (/* binding */ KnowledgebaseViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _knowledgebase_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledgebase-view.component.html?ngResource */ 29656);
/* harmony import */ var _knowledgebase_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledgebase-view.component.css?ngResource */ 68558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let KnowledgebaseViewComponent = class KnowledgebaseViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
KnowledgebaseViewComponent.ctorParameters = () => [];
KnowledgebaseViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-knowledgebase-view',
        template: _knowledgebase_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_knowledgebase_view_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KnowledgebaseViewComponent);



/***/ }),

/***/ 94858:
/*!**********************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgebaseComponent": () => (/* binding */ KnowledgebaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _knowledgebase_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledgebase.component.html?ngResource */ 34793);
/* harmony import */ var _knowledgebase_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledgebase.component.css?ngResource */ 34161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let KnowledgebaseComponent = class KnowledgebaseComponent {
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
KnowledgebaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }
];
KnowledgebaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-knowledgebase',
        template: _knowledgebase_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_knowledgebase_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('window: resize', ['$event'])
], KnowledgebaseComponent);



/***/ }),

/***/ 37242:
/*!*******************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgebaseModule": () => (/* binding */ KnowledgebaseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _knowledgebase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledgebase-routing.module */ 81868);
/* harmony import */ var _knowledgebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledgebase.component */ 94858);
/* harmony import */ var _knowledgebase_main_knowledgebase_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledgebase-main/knowledgebase-main.component */ 34633);
/* harmony import */ var _knowledgebase_view_knowledgebase_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knowledgebase-view/knowledgebase-view.component */ 22734);







let KnowledgebaseModule = class KnowledgebaseModule {
};
KnowledgebaseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_knowledgebase_component__WEBPACK_IMPORTED_MODULE_1__.KnowledgebaseComponent, _knowledgebase_main_knowledgebase_main_component__WEBPACK_IMPORTED_MODULE_2__.KnowledgebaseMainComponent, _knowledgebase_view_knowledgebase_view_component__WEBPACK_IMPORTED_MODULE_3__.KnowledgebaseViewComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _knowledgebase_routing_module__WEBPACK_IMPORTED_MODULE_0__.KnowledgebaseRoutingModule
        ]
    })
], KnowledgebaseModule);



/***/ }),

/***/ 53558:
/*!**********************************************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-main/knowledgebase-main.component.css?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2ViYXNlLW1haW4uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 68558:
/*!**********************************************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-view/knowledgebase-view.component.css?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2ViYXNlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 34161:
/*!**********************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase.component.css?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2ViYXNlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 66717:
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-main/knowledgebase-main.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Knowledgebase</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Knowledgebase</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 col-md-6 col-sm-6\" *ngFor=\"let knowledgebase of allKnowledgeBase;let i = index\">\r\n            <div class=\"topics\">\r\n                <h3 class=\"topic-title\"><a >{{knowledgebase.title}}\r\n                        <span>({{11 + i}})</span></a></h3>\r\n                <ul class=\"topics-list\">\r\n                    <li><a routerLink=\"/layout/knowledgebase/knowledgebase-view\"> {{knowledgebase.list1}} </a>\r\n                    </li>\r\n                    <li><a routerLink=\"/layout/knowledgebase/knowledgebase-view\"> {{knowledgebase.list2}} </a>\r\n                    </li>\r\n                    <li><a routerLink=\"/layout/knowledgebase/knowledgebase-view\"> {{knowledgebase.list3}} </a>\r\n                    </li>\r\n                    <li><a routerLink=\"/layout/knowledgebase/knowledgebase-view\"> {{knowledgebase.list4}} </a>\r\n                    </li>\r\n                    <li><a routerLink=\"/layout/knowledgebase/knowledgebase-view\"> {{knowledgebase.list5}} </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n       \r\n       \r\n      \r\n       \r\n       \r\n       \r\n        \r\n    </div>\r\n\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 29656:
/*!***********************************************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase-view/knowledgebase-view.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Content -->\r\n<div class=\"content container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"page-head-box\">\r\n                <h3>Knowledgebase</h3>\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a routerLink=\"/layout/dashboard/admin\">Dashboard</a></li>\r\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Knowledgebase</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Page Header -->\r\n\r\n    <!-- Content Starts -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <article class=\"post\">\r\n                        <h1 class=\"post-title\"><i class=\"fas fa-dot-circle me-1\"></i>Lorem ipsum dolor sit amet </h1>\r\n                        <ul class=\"meta\">\r\n                            <li><span>Created :</span><span class=\"spanc1\"> Feb, 04, 2016</span></li>\r\n                            <li><span>Category:</span> <a >Category 1</a>, <a >Category 2</a></li>\r\n                            <li><span>Last Updated:</span> <span class=\"spanc3\">April, 15, 2016</span></li>\r\n                            <li><span>Comments :</span> <span class=\"spanc4\">5</span></li>\r\n                            <li><span>Views :</span><span class=\"spanc2\"> 1198</span></li>\r\n                        </ul>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                            laboris nisi ut aliquip ex ea commodo consequat\r\n                        </p>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                            laboris nisi ut aliquip ex ea commodo consequat\r\n                        </p>\r\n                        <h2>Sed ut perspiciatis unde omnis iste</h2>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                            laboris nisi ut aliquip ex ea commodo consequat\r\n                        </p>\r\n                        <h2>Sed ut perspiciatis unde omnis iste</h2>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n                            laboris nisi ut aliquip ex ea commodo consequat\r\n                        </p>\r\n                    </article>\r\n                    <div class=\"feedback\">\r\n                        <h3>Was this article helpful to you?\r\n                            <span class=\"fb-span\">\r\n                                <a  class=\"btn btn-success\"><i class=\"fa fa-thumbs-up\"></i></a>\r\n                                <a  class=\"btn btn-danger\"><i class=\"fa fa-thumbs-down\"></i></a>\r\n                            </span>\r\n                        </h3>\r\n                        <p>29 found this helpful</p>\r\n                    </div>\r\n\r\n                    <div class=\"comment-section\">\r\n                        <div class=\"comments-area clearfix\">\r\n                            <h3>( 2 ) Comments</h3>\r\n                            <ul class=\"comment-list\">\r\n                                <li>\r\n                                    <div class=\"comment\">\r\n                                        <div class=\"comment-author\">\r\n                                            <img width=\"86\" height=\"86\" class=\"avatar avatar-86 photo\"\r\n                                                src=\"assets/img/user.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"comment-details\">\r\n                                            <div class=\"author-name\">\r\n                                                <a class=\"url\" >John Doe</a> <span\r\n                                                    class=\"commentmetadata\">October 25, 2016 at 01:10 pm</span>\r\n                                            </div>\r\n                                            <div class=\"comment-body\">\r\n                                                <p>Integer id dolor libero. Cras in turpis nulla. Vivamus at tellus\r\n                                                    erat. Nulla ligula sem, eleifend vitae semper et, blandit a elit.\r\n                                                    Nam et ultrices lectus. Ut sit amet risus eget neque scelerisque\r\n                                                    consectetur.</p>\r\n                                            </div>\r\n                                            <div class=\"reply\"><a  class=\"comment-reply-link\" rel=\"nofollow\"><i\r\n                                                        class=\"fa fa-reply\"></i> Reply</a></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <ul class=\"children\">\r\n                                        <li>\r\n                                            <div class=\"comment\">\r\n                                                <div class=\"comment-author\">\r\n                                                    <img width=\"86\" height=\"86\" class=\"avatar avatar-86 photo\"\r\n                                                        src=\"assets/img/user.jpg\" alt=\"\">\r\n                                                </div>\r\n                                                <div class=\"comment-details\">\r\n                                                    <div class=\"author-name\">\r\n                                                        <a  class=\"comment-reply-link\"></a><a class=\"url\"\r\n                                                            >Astin Robert</a> <span\r\n                                                            class=\"commentmetadata\">October 25, 2016 at 01:10 pm</span>\r\n                                                    </div>\r\n                                                    <div class=\"comment-body\">\r\n                                                        <p>Mauris hendrerit consequat quam, sit amet fermentum metus\r\n                                                            cursus in. Nunc ac justo suscipit erat sagittis maximus a at\r\n                                                            tellus. Pellentesque congue nisi a nisl volutpat tempor.</p>\r\n                                                    </div>\r\n                                                    <div class=\"reply\"><a  class=\"comment-reply-link\"><i\r\n                                                                class=\"fa fa-reply\"></i> Reply</a></div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                            <div class=\"comment-reply\">\r\n                                <h3 class=\"comment-reply-title\">Leave a Reply</h3>\r\n                                <form>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name</label>\r\n                                                <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"email\">Email</label>\r\n                                                <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"website\">Website</label>\r\n                                                <input type=\"text\" id=\"website\" name=\"website\" class=\"form-control\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"comment\">Comment *</label>\r\n                                        <textarea id=\"comment\" name=\"comment\" class=\"form-control\" rows=\"3\"\r\n                                            cols=\"5\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"submit-section\">\r\n                                        <button type=\"submit\" class=\"btn btn-primary submit-btn\">Post Comment</button>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"w-sidebar\">\r\n                <div class=\"widget widget-category\">\r\n                    <h4 class=\"widget-title\">Categories</h4>\r\n                    <ul>\r\n                        <li>\r\n                            <a >Categories 1</a>\r\n                        </li>\r\n                        <li>\r\n                            <a >Categories 2</a>\r\n                        </li>\r\n                        <li>\r\n                            <a >Categories 3</a>\r\n                        </li>\r\n                        <li>\r\n                            <a >Categories 4</a>\r\n                        </li>\r\n                        <li>\r\n                            <a >Categories 5</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"widget widget-category\">\r\n                    <h4 class=\"widget-title\">Popular Articles</h4>\r\n                    <ul>\r\n                        <li><a > Installation &amp; Activation </a></li>\r\n                        <li><a > Premium Members Features </a></li>\r\n                        <li><a > API Usage &amp; Guide lines </a></li>\r\n                        <li><a > Getting Started &amp; What is next. </a></li>\r\n                        <li><a > Installation &amp; Activation </a></li>\r\n                        <li><a > Premium Members Features </a></li>\r\n                        <li><a > API Usage &amp; Guide lines </a></li>\r\n                        <li><a > Getting Started &amp; What is next. </a></li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"widget widget-category\">\r\n                    <h4 class=\"widget-title\">Latest Articles</h4>\r\n                    <ul>\r\n                        <li><a > Installation &amp; Activation </a></li>\r\n                        <li><a > Premium Members Features </a></li>\r\n                        <li><a > API Usage &amp; Guide lines </a></li>\r\n                        <li><a > Getting Started &amp; What is next. </a></li>\r\n                        <li><a > Installation &amp; Activation </a></li>\r\n                        <li><a > Premium Members Features </a></li>\r\n                        <li><a > API Usage &amp; Guide lines </a></li>\r\n                        <li><a > Getting Started &amp; What is next. </a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /Content End -->\r\n\r\n</div>\r\n<!-- /Page Content -->";

/***/ }),

/***/ 34793:
/*!***********************************************************************************!*\
  !*** ./src/app/all-modules/knowledgebase/knowledgebase.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\" (resized)=\"onResize($event)\" [ngStyle]=\"{ 'height' : innerHeight }\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /Page Wrapper -->\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_all-modules_knowledgebase_knowledgebase_module_ts.js.map