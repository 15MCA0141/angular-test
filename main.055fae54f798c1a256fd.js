(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/GcI":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "/MXE":
/*!***************************************************!*\
  !*** ./src/app/favourite/favourite.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".glyphicon{\r\n    color: red;\r\n}\r\n\r\n.glyphicon-star{\r\n    background-color: rgb(223, 247, 177);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6ImZhdm91cml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5nbHlwaGljb24tc3RhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI0NywgMTc3KTtcclxufSJdfQ== */");

/***/ }),

/***/ "/Oyv":
/*!************************************************************!*\
  !*** ./src/app/github-profile/github-profile.component.ts ***!
  \************************************************************/
/*! exports provided: GithubProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubProfileComponent", function() { return GithubProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_github_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./github-profile.component.html */ "y2aH");
/* harmony import */ var _github_profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github-profile.component.css */ "OTEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let GithubProfileComponent = class GithubProfileComponent {
    constructor(router) {
        this.router = router;
    }
    submit() {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'newest' }
        });
    }
};
GithubProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GithubProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'github-profile',
        template: _raw_loader_github_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_github_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GithubProfileComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\Angular by Code with Mosh\hello-world\src\main.ts */"zUnb");


/***/ }),

/***/ "0riC":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.component.html */ "He27");
/* harmony import */ var _change_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.component.css */ "CHEH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password.validators */ "pYtg");






let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb) {
        this.form = fb.group({
            oldPassword: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _password_validators__WEBPACK_IMPORTED_MODULE_5__["PasswordValidators"].invalidOldPassword
            ],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cnfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, {
            validator: _password_validators__WEBPACK_IMPORTED_MODULE_5__["PasswordValidators"].passwordShouldMatch
        });
    }
    get oldPassword() {
        return this.form.get('oldPassword');
    }
    get newPassword() {
        return this.form.get('newPassword');
    }
    get cnfPassword() {
        return this.form.get('cnfPassword');
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'change-password',
        template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "25sz":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/zippy/zippy.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"zippy\">\n    <div\n        class=\"zippy-heading\"\n        [class.expanded]=\"isExpanded\"\n        (click)=\"toggle()\"\n        >\n        {{ title }}\n        <span class=\"glyphicon\"\n            [ngClass]=\"{\n                'glyphicon-chevron-up': isExpanded,\n                'glyphicon-chevron-down': !isExpanded\n            }\"\n        >\n\n        </span>\n    </div>\n    <div *ngIf=\"isExpanded\" class=\"zippy-body\">\n        <ng-content></ng-content>\n    </div>\n</div>");

/***/ }),

/***/ "3i5U":
/*!****************************************************************!*\
  !*** ./src/app/github-followers/github-followers.component.ts ***!
  \****************************************************************/
/*! exports provided: GithubFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubFollowersComponent", function() { return GithubFollowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_github_followers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./github-followers.component.html */ "9+HF");
/* harmony import */ var _github_followers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github-followers.component.css */ "dfl9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_github_followers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/github-followers.service */ "stoa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");








let GithubFollowersComponent = class GithubFollowersComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getAll();
        }))
            .subscribe(followers => this.followers = followers);
    }
};
GithubFollowersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_github_followers_service__WEBPACK_IMPORTED_MODULE_4__["GithubFollowersService"] }
];
GithubFollowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'github-followers',
        template: _raw_loader_github_followers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_github_followers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GithubFollowersComponent);



/***/ }),

/***/ "4Goe":
/*!***************************************************************!*\
  !*** ./src/app/new-course-form/new-course-form.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctY291cnNlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "4u/y":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./panel.component.html */ "E5gs");
/* harmony import */ var _panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel.component.css */ "7F4i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PanelComponent = class PanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
PanelComponent.ctorParameters = () => [];
PanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-panel',
        template: _raw_loader_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PanelComponent);



/***/ }),

/***/ "5HMO":
/*!******************************************!*\
  !*** ./src/app/zippy/zippy.component.ts ***!
  \******************************************/
/*! exports provided: ZippyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZippyComponent", function() { return ZippyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_zippy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./zippy.component.html */ "25sz");
/* harmony import */ var _zippy_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zippy.component.css */ "KZ+1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ZippyComponent = class ZippyComponent {
    constructor() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
ZippyComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['title',] }]
};
ZippyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'zippy',
        template: _raw_loader_zippy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_zippy_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ZippyComponent);



/***/ }),

/***/ "5Jak":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
    notFoundError(error) {
        alert('Not Found !');
        console.log(error);
    }
}


/***/ }),

/***/ "68zc":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-form/signup-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n    <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\n        Invalid Username or Password !\n    </div>\n    <div formGroupName=\"account\">\n\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input \n                formControlName=\"username\"\n                id=\"username\" \n                type=\"text\" \n                class=\"form-control\">\n            <div *ngIf=\"username.pending\">Checking the username...\n                <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n                    <span class=\"sr-only\">50% Complete</span>\n                    </div>\n                </div>\n                </div>\n            <div *ngIf=\"username.touched && username.invalid\" class=\"alert alert-danger\">\n                <div *ngIf=\"username.errors.required\">Username is required !</div>\n                <div *ngIf=\"username.errors.minlength\">Username should be minimum {{ username.errors.minlength.requiredLength }} characters !</div>\n                <div *ngIf=\"username.errors.cannotContainSpace\">Username cannot contain spaces !</div>\n                <div *ngIf=\"username.errors.shouldBeUnique\">Username already registered !</div>\n            </div>    \n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input \n                formControlName=\"password\"\n                id=\"password\" \n                type=\"text\" \n                class=\"form-control\">\n            <div\n                *ngIf=\"password.touched && password.invalid\" \n                class=\"alert alert-danger\">\n                Password is required\n            </div> \n        </div>\n\n    </div>\n\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">\n        Sign Up\n    </button>\n</form>");

/***/ }),

/***/ "7F4i":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "9+HF":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github-followers/github-followers.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let follower of followers\" class=\"media\">\n    <div class=\"media-left\">\n        <a href=\"#\">\n            <img class=\"avatar media-object\" src=\"{{ follower.avatar_url }}\">\n        </a>\n    </div>\n    <div class=\"media-body\">\n        <h4 class=\"media-heading\">\n            <a [routerLink]=\"['/followers', follower.id, follower.login]\">{{ follower.login }}</a>\n        </h4>\n        <a href=\"follower.html_url\">{{ follower.html_url }}</a>\n    </div>\n</div>");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/user.service */ "qfBg");





let HomeComponent = class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"] })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ANMO":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-form.component.html */ "X9LP");
/* harmony import */ var _contact_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.component.css */ "QQ9U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* Implementation of Template-driven Forms */




let ContactFormComponent = class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            { id: 1, name: "Email" },
            { id: 2, name: "Phone" }
        ];
        this.gender = [
            { id: 1, name: "Male" },
            { id: 2, name: "Female" }
        ];
    }
    log(x) {
        console.log(x);
    }
    submit(f) {
        console.log(f);
    }
};
ContactFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'contact-form',
        template: _raw_loader_contact_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactFormComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiUrl: 'http://localhost:4200'
};


/***/ }),

/***/ "CHEH":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "CO2p":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkAcive=\"active current\">\n            <a routerLink=\"/followers\" \n               [queryParams]=\"{ page: 1, order: 'newest' }\">Followers</a>\n          </li>\n          <li routerLinkAcive=\"active current\"><a routerLink=\"/posts\">Posts</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>");

/***/ }),

/***/ "DZ+w":
/*!***************************************************!*\
  !*** ./src/app/no-access/no-access.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1hY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "E5gs":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panel/panel.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <ng-content select=\".heading\"></ng-content>\n    </div>\n    <div class=\"panel-body\">\n        <ng-content select=\".body\"></ng-content>\n    </div>\n</div>");

/***/ }),

/***/ "E9RU":
/*!**************************************************************!*\
  !*** ./src/app/new-course-form/new-course-form.component.ts ***!
  \**************************************************************/
/*! exports provided: NewCourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseFormComponent", function() { return NewCourseFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_course_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-course-form.component.html */ "o4NX");
/* harmony import */ var _new_course_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-course-form.component.css */ "4Goe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let NewCourseFormComponent = class NewCourseFormComponent {
    constructor(fb) {
        this.form = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        });
    }
    addTopic(topic) {
        this.topics.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](topic.value));
        topic.value = '';
    }
    removeTopic(topic) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }
    get topics() {
        return this.form.get('topics');
    }
};
NewCourseFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
NewCourseFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'new-course-form',
        template: _raw_loader_new_course_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_course_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewCourseFormComponent);



/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/app-error */ "/GcI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _common_bad_input_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/bad-input-error */ "HFuo");








let DataService = class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url);
        // //    .map(response => response)
        //    .pipe(
        //        retry(1),
        //        catchError(this.handleError));
    }
    create(resource) {
        return this.http
            .post(this.url, JSON.stringify(resource))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    delete(id) {
        return this.http
            .delete(this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.status === 400)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _common_bad_input_error__WEBPACK_IMPORTED_MODULE_7__["BadInputError"]());
        if (error.status === 404)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"]());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"](error.json()));
    }
};
DataService.ctorParameters = () => [
    { type: String },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-4\">\n    <h4 class=\"card-header\">You're logged in with Angular 8 & JWT!!</h4>\n    <div class=\"card-body\">\n        <h6>Users from secure api end point</h6>\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n        <ul *ngIf=\"users\">\n            <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "HCz6":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>course works!</p>\n");

/***/ }),

/***/ "HFuo":
/*!*******************************************!*\
  !*** ./src/app/common/bad-input-error.ts ***!
  \*******************************************/
/*! exports provided: BadInputError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInputError", function() { return BadInputError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class BadInputError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
    badInputError(error) {
        alert('Wrong Input !');
        console.log(error);
    }
}


/***/ }),

/***/ "He27":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    <div class=\"form-group\">\n        <label for=\"\">Old Password</label>\n        <input formControlName=\"oldPassword\" type=\"password\" class=\"form-control\">\n        <div \n            *ngIf=\"oldPassword.touched && oldPassword.invalid\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"oldPassword.errors.required\">Old password is required !</div>\n            <div *ngIf=\"oldPassword.errors.invalidOldPassword\">Invalid old password !</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">New Password</label>\n        <input formControlName=\"newPassword\" type=\"password\" class=\"form-control\">\n        <div \n            *ngIf=\"newPassword.touched && newPassword.invalid\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"newPassword.errors.required\">New password is required !</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">Confirm Password</label>\n        <input formControlName=\"cnfPassword\" type=\"password\" class=\"form-control\">\n        <div \n            *ngIf=\"cnfPassword.touched && cnfPassword.invalid\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"cnfPassword.errors.required\">Confirm password is required !</div>\n        </div>\n        <div *ngIf=\"cnfPassword.valid && form.invalid && form.errors.passwordShouldMatch\" class=\"alert alert-danger\">\n            Passwords do not match !\n        </div>\n    </div>\n    <button class=\"btn btn-primary\">Change Password</button>\n</form>");

/***/ }),

/***/ "ITBP":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/no-access/no-access.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Access Denied</h1>");

/***/ }),

/***/ "JEYT":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_posts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./posts.component.html */ "RIPd");
/* harmony import */ var _posts_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component.css */ "KxCB");
/* harmony import */ var _common_bad_input_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/bad-input-error */ "HFuo");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../common/not-found-error */ "5Jak");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/http.service */ "N+K7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let PostsComponent = class PostsComponent {
    constructor(service) {
        this.service = service;
        this.count = 0;
    }
    ngOnInit() {
        this.service.getAll()
            .subscribe(posts => this.posts = posts);
    }
    createPost(input) {
        let post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.create(post)
            .subscribe(newPost => {
            post['id'] = newPost;
        }, (error) => {
            this.posts.splice(0, 1);
            if (error instanceof _common_bad_input_error__WEBPACK_IMPORTED_MODULE_3__["BadInputError"]) {
                //this.form.setErrors(error)
            }
            else
                throw error;
        });
    }
    updatePost(post) {
        this.service.update(post)
            .subscribe(updatedPost => {
            console.log(updatedPost);
        });
    }
    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(++this.count + ' post deleted !');
        this.service.delete(post.id)
            .subscribe(null, (error) => {
            this.posts.splice(index, 0, post);
            if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"])
                alert('This post has already been deleted !');
            else
                throw error;
        });
    }
};
PostsComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
];
PostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-posts',
        template: _raw_loader_posts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_posts_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostsComponent);



/***/ }),

/***/ "KZ+1":
/*!*******************************************!*\
  !*** ./src/app/zippy/zippy.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zippy {\r\n    border: 1px solid #ccc;\r\n    border-radius: 2px;\r\n}\r\n.zippy-heading {\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n.zippy-body {\r\n    padding: 20px;\r\n}\r\n.expanded {\r\n    background: #f0f0f0;\r\n}\r\n.glyphicon {\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppcHB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJ6aXBweS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnppcHB5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLnppcHB5LWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uemlwcHktYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uZXhwYW5kZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxufVxyXG5cclxuLmdseXBoaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "KxCB":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "ej43");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
            console.log(currentUser);
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "MX6S":
/*!*****************************************!*\
  !*** ./src/app/helpers/fake-backend.ts ***!
  \*****************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
};
FakeBackendInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HttpService = class HttpService extends _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] {
    constructor(http) {
        super('https://jsonplaceholder.typicode.com/posts', http);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "OTEJ":
/*!*************************************************************!*\
  !*** ./src/app/github-profile/github-profile.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRodWItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "OaDq":
/*!**************************************************!*\
  !*** ./src/app/no-access/no-access.component.ts ***!
  \**************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_no_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./no-access.component.html */ "ITBP");
/* harmony import */ var _no_access_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-access.component.css */ "DZ+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NoAccessComponent = class NoAccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoAccessComponent.ctorParameters = () => [];
NoAccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-no-access',
        template: _raw_loader_no_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_no_access_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoAccessComponent);



/***/ }),

/***/ "QQ9U":
/*!*********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control.ng-touched.ng-invalid {\r\n    border: 2px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "RIPd":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input \n    (keyup.enter)=\"createPost(title)\" #title\n    type=\"text\" class=\"form-control\">\n<ul class=\"list-group\">\n    <li \n    *ngFor=\"let post of posts\"\n    class=\"list-group-item\">\n    <button\n        (click)=\"updatePost(post)\"\n        class=\"btn btn-default btn-sm\">Update</button>\n    <button\n        (click)=\"deletePost(post)\"\n        class=\"btn btn-default btn-sm\">Delete</button>\n        {{ post.title }}\n    </li>\n</ul>");

/***/ }),

/***/ "S1MA":
/*!**************************************************!*\
  !*** ./src/app/favourite/favourite.component.ts ***!
  \**************************************************/
/*! exports provided: FavouriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function() { return FavouriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_favourite_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./favourite.component.html */ "pUNc");
/* harmony import */ var _favourite_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourite.component.css */ "/MXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FavouriteComponent = class FavouriteComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isFavorite = true;
    }
    ngOnInit() {
    }
    onClick() {
        this.isFavorite = !(this.isFavorite);
        this.change.emit({ newValue: this.isFavorite
        });
    }
};
FavouriteComponent.ctorParameters = () => [];
FavouriteComponent.propDecorators = {
    isFavorite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
FavouriteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'favourite',
        template: _raw_loader_favourite_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favourite_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FavouriteComponent);



/***/ }),

/***/ "SL0s":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Admin</h1>\n<h2>Orders</h2>\n<ul>\n  <li *ngFor=\"let order of orders\">{{ order }}</li>\n</ul>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");






let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'hello-world';
        this.viewMode = 'somethingElse';
        this.post = {
            isFavorite: true
        };
        this.canSave = false;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    onLoad() {
        this.courses = [
            { id: 1, name: 'Programing' },
            { id: 2, name: 'Database' },
            { id: 3, name: 'Operating System' }
        ];
    }
    trackCourse(index, course) {
        return course ? course.id : undefined;
    }
    onAdd() {
        let i = this.courses.length;
        this.courses.push({ id: i + 1, name: "Networking" });
        console.log('New course added!');
    }
    onRemove(course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }
    onFavoriteChanged(eventArgs) {
        console.log("Favorite Changed : ", eventArgs);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TMt5":
/*!*********************************************!*\
  !*** ./src/app/common/app-error-handler.ts ***!
  \*********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
class AppErrorHandler {
    handleError(error) {
        alert('An unexpected error occured !');
        console.log(error);
    }
}


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "SL0s");
/* harmony import */ var _admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.css */ "yP50");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/order.service */ "kVqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let AdminComponent = class AdminComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
        this.orderService.getOrders()
            .subscribe(orders => this.orders = orders);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Angular</h1>\n<ul class=\"nav nav-pills\">\n    <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode='map'\">Map View</a></li>\n    <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode='list'\">List View</a></li>\n</ul>\n<div [ngSwitch]=\"viewMode\">\n    <div *ngSwitchCase=\"'map'\">\n        <!-- To get responses for HTTP Requests -->\n        <app-posts></app-posts>\n    </div>\n    <div *ngSwitchCase=\"'list'\">\n        <github-followers></github-followers>\n    </div>\n    <div *ngSwitchDefault>Otherwise</div>\n</div>\n<br>\n<!-- Navigation-bar Component -->\n<navbar></navbar>\n\n<!-- Imported from jasonwatmore.com -->\n<!-- <nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav> -->\n\n<!-- main app container -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<!-- Upto here -->\n<br>\n<signup-form></signup-form>\n<br>\n<change-password></change-password>\n<br>\n<new-course-form></new-course-form>\n<br>\n<zippy title=\"Shipping Details\">\n    Shipping Details Content\n</zippy>\n<zippy title=\"Billing Details\">\n    Billing Details Content\n</zippy>\n<br>\n\n<contact-form></contact-form>\n\n<br>\n<br>\n<input type=\"text\" [appInputFormat]=\"'uppercase'\">\n<br>\n\n<br>\n    <button (click) =\"onLoad()\"\n    [ngStyle]=\"{\n        'backgroundColor': 'teal',\n        'color': 'white',\n        'fontWeight': 'bold'\n    }\"\n    > Load Courses </button>\n    <button (click) =\"onAdd()\"> Add </button>\n<ul>\n    <li *ngFor=\"let course of courses; trackBy: trackCourse\">\n        {{ course.name }}\n        <button (click) = \"onRemove(course)\">X</button>\n    </li>\n</ul>\n<br>\n<button\n\n    [ngStyle]=\"{\n        'backgroundColor': canSave ? 'blue':'gray',\n        'color': canSave ? 'white':'black',\n        'fontWeight': canSave ? 'bold':'normal'\n    }\"\n>\nSave\n</button>\n<br>\n<favourite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChanged($event)\"></favourite>\n<courses ></courses>\n<app-panel>\n    <div class=\"heading\">Heading</div>\n    <div class=\"body\">\n        <h2>Body</h2>\n        <p>Content goes from here...</p>\n    </div>\n</app-panel>\n");

/***/ }),

/***/ "VziJ":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "X/TL":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup-form.component.html */ "68zc");
/* harmony import */ var _signup_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-form.component.css */ "uD8P");
/* harmony import */ var _username_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./username.validators */ "wAQb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* Implementation of Angular Reactive Forms */






let SignupFormComponent = class SignupFormComponent {
    constructor() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            account: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, 
                //Validators.minLength(3),
                // UsernameValidators.cannotContainSpace,
                _username_validators__WEBPACK_IMPORTED_MODULE_3__["UsernameValidators"].shouldBeUnique),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)
                ])
            })
        });
    }
    get username() {
        return this.form.get('account.username');
    }
    get password() {
        return this.form.get('account.password');
    }
    login() {
        this.form.setErrors({
            invalidLogin: true
        });
    }
};
SignupFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'signup-form',
        template: _raw_loader_signup_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupFormComponent);



/***/ }),

/***/ "X9LP":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input\n            required minlength=\"3\"\n            maxlength=\"16\" \n            pattern=\"Kushal\" \n            ngModel \n            name=\"firstName\" \n            #firstName=\"ngModel\" \n            (change)=\"log(firstName)\" \n            id=\"firstName\" \n            type=\"text\" \n            class=\"form-control\"/>\n        <div\n            class=\"alert alert-danger\" \n            *ngIf=\"firstName.touched && !firstName.valid\"\n        >\n            <div \n                *ngIf=\"firstName.errors.required\">\n                First Name is required !\n            </div>\n            <div \n                *ngIf=\"firstName.errors.minlength\">\n                First Name should be of minimum {{ firstName.errors.minlength.requiredLength }} char !\n            </div>\n            <div \n                *ngIf=\"firstName.errors.pattern\">\n                First Name is having wrong pattern !\n            </div>\n        </div>\n        <label for=\"lastName\">Last Name</label>\n        <input\n            required minlength=\"3\"\n            maxlength=\"16\" \n            pattern=\"Kumar\" \n            ngModel \n            name=\"lastName\" \n            #lastName=\"ngModel\" \n            (change)=\"log(lastName)\" \n            id=\"lastName\" \n            type=\"text\" \n            class=\"form-control\"/>\n    </div>\n    <div\n            class=\"alert alert-danger\" \n            *ngIf=\"lastName.touched && !lastName.valid\"\n        >\n            <div \n                *ngIf=\"lastName.errors.required\">\n                Last Name is required !\n            </div>\n            <div \n                *ngIf=\"lastName.errors.minlength\">\n                Last Name should be of minimum {{ lastName.errors.minlength.requiredLength }} char !\n            </div>\n            <div \n                *ngIf=\"lastName.errors.pattern\">\n                Last Name is having wrong pattern !\n            </div>\n        </div>\n\n    <div *ngFor=\"let selectedGender of gender\" class=\"radio\">\n        <label>\n            <input ngModel type=\"radio\" name=\"gender\" [value]=\"selectedGender.id\">\n            {{ selectedGender.name }}\n        </label>\n    </div>    \n    \n    <div class=\"form-group\">\n        <label for=\"comment\">Comment</label>\n        <textarea\n            ngModel \n            name=\"comment\" \n            id=\"comment\" \n            cols=\"30\" \n            rows=\"10\"  \n            class=\"form-control\">\n        </textarea>\n    </div>  \n\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" ngModel name =\"isSubscribed\"> Subscribe to receive Emails!\n        </label>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"contactMethod\">\n            Contact Method\n        </label>\n        <select multiple ngModel name=\"contactMethod\" id=\"contactMethod\" class=\"form-control\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let method of contactMethods\" [ngValue]=\"method\"> {{ method.name }} </option>\n        </select>\n    </div>\n\n    <p>\n        {{ f.value | json }}\n    </p>\n\n    <button class=\"btn btn-primary\" [disabled]=\"!f.valid\"> \n        Submit \n    </button> \n</form>");

/***/ }),

/***/ "XNJB":
/*!**********************************************!*\
  !*** ./src/app/Courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.service */ "st6h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CoursesComponent = class CoursesComponent {
    constructor(service) {
        this.title = "List of courses : ";
        this.imageUrl = "#";
        this.email = "me@example.com";
        this.testDate = new Date();
        this.titleCase = "";
        this.courses = service.getCourses();
    }
    onKeyUp() {
        console.log(this.email);
    }
};
CoursesComponent.ctorParameters = () => [
    { type: _courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"] }
];
CoursesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'courses',
        template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <button class="btn btn-primary">SAVE</button>
    <div>
        <ul>
            <li> <input [(ngModel)] ="email" (keyup.enter)="onKeyUp()" /></li>
            <li> {{5 | currency:'EUR'}} </li>
            <li> {{ testDate | date:'dd-MM-yyyy' }} </li>
        </ul>
    </div>
    <div>
        <b> Convert to Title Case : </b> 
        <input type = "text" [(ngModel)] ="titleCase" />
        <p>
            {{ titleCase | titlecase }}
        </p>
    </div>

    `
    })
], CoursesComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-access/no-access.component */ "OaDq");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/fake-backend */ "MX6S");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/order.service */ "kVqo");
/* harmony import */ var _services_github_followers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/github-followers.service */ "stoa");
/* harmony import */ var _common_app_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/app-error-handler */ "TMt5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Courses_courses_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Courses/courses.service */ "st6h");
/* harmony import */ var _Courses_courses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Courses/courses.component */ "XNJB");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course/course.component */ "ioW2");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./favourite/favourite.component */ "S1MA");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _input_format_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./input-format.directive */ "zLaA");
/* harmony import */ var _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zippy/zippy.component */ "5HMO");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "ANMO");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "X/TL");
/* harmony import */ var _new_course_form_new_course_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./new-course-form/new-course-form.component */ "E9RU");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./change-password/change-password.component */ "0riC");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./posts/posts.component */ "JEYT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/http.service */ "N+K7");
/* harmony import */ var _github_followers_github_followers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./github-followers/github-followers.component */ "3i5U");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _github_profile_github_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./github-profile/github-profile.component */ "/Oyv");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./helpers/error.interceptor */ "fC4O");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "eMGG");





































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _Courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
            _course_course_component__WEBPACK_IMPORTED_MODULE_14__["CourseComponent"],
            _Courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
            _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_15__["FavouriteComponent"],
            _panel_panel_component__WEBPACK_IMPORTED_MODULE_16__["PanelComponent"],
            _input_format_directive__WEBPACK_IMPORTED_MODULE_17__["InputFormatDirective"],
            _zippy_zippy_component__WEBPACK_IMPORTED_MODULE_18__["ZippyComponent"],
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_19__["ContactFormComponent"],
            _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_20__["SignupFormComponent"],
            _new_course_form_new_course_form_component__WEBPACK_IMPORTED_MODULE_21__["NewCourseFormComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_23__["PostsComponent"],
            _github_followers_github_followers_component__WEBPACK_IMPORTED_MODULE_26__["GithubFollowersComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
            _github_profile_github_profile_component__WEBPACK_IMPORTED_MODULE_29__["GithubProfileComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"]
                },
                {
                    path: 'followers/:id/:username',
                    component: _github_profile_github_profile_component__WEBPACK_IMPORTED_MODULE_29__["GithubProfileComponent"]
                },
                {
                    path: 'followers',
                    component: _github_followers_github_followers_component__WEBPACK_IMPORTED_MODULE_26__["GithubFollowersComponent"]
                },
                {
                    path: 'posts',
                    component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_23__["PostsComponent"]
                },
                {
                    path: '**',
                    component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundComponent"]
                },
                {
                    path: 'admin',
                    component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
                },
                {
                    path: 'login',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"]
                },
                {
                    path: 'no-access',
                    component: _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_2__["NoAccessComponent"]
                }
            ])
        ],
        providers: [
            _Courses_courses_service__WEBPACK_IMPORTED_MODULE_9__["CoursesService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_25__["HttpService"],
            _services_github_followers_service__WEBPACK_IMPORTED_MODULE_6__["GithubFollowersService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_33__["AuthenticationService"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_35__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_34__["ErrorInterceptor"], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ErrorHandler"], useClass: _common_app_error_handler__WEBPACK_IMPORTED_MODULE_7__["AppErrorHandler"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b5tn":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "dfl9":
/*!*****************************************************************!*\
  !*** ./src/app/github-followers/github-followers.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi1mb2xsb3dlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImdpdGh1Yi1mb2xsb3dlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "eMGG":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "fC4O":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\n  <div class=\"alert alert-info\">\n      Username: test<br />\n      Password: test\n  </div>\n  <div class=\"card\">\n      <h4 class=\"card-header\">Angular 8 JWT Login Example</h4>\n      <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  </div>\n              </div>\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                  <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                  Login\n              </button>\n              <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n          </form>\n      </div>\n  </div>\n</div>");

/***/ }),

/***/ "ioW2":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course.component.html */ "HCz6");
/* harmony import */ var _course_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.component.css */ "b5tn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CourseComponent = class CourseComponent {
    constructor() { }
    ngOnInit() {
    }
};
CourseComponent.ctorParameters = () => [];
CourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course',
        template: _raw_loader_course_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseComponent);



/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    getOrders() {
        return this.http.get('/api/orders')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response));
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], OrderService);



/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "CO2p");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "xkNh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "s2In");
/* harmony import */ var _not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.css */ "VziJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ "o4NX":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-course-form/new-course-form.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    Name: <input formControlName=\"name\" class=\"form-group\"/>\n    <div formGroupName=\"contact\">\n        Email: <input formControlName=\"email\" class=\"form-group\"/>\n        Phone: <input formControlName=\"phone\" class=\"form-group\"/>\n    </div>\n    <input\n        type=\"text\" class=\"form-control\"\n        (keyup.enter)=\"addTopic(topic)\" #topic>\n    <ul class=\"list-group\">\n        <li \n            *ngFor=\"let topic of topics.controls\"\n            (click)=\"removeTopic(topic)\"\n            class=\"list-group-item\">\n            {{ topic.value }}\n        </li>\n    </ul>\n</form>");

/***/ }),

/***/ "pUNc":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span\n    class=\"glyphicon\"\n    [ngClass]=\"{\n        'glyphicon-star': isFavorite,\n        'glyphicon-star-empty': !isFavorite\n    }\"\n    (click)=\"onClick()\"\n></span>");

/***/ }),

/***/ "pYtg":
/*!********************************************************!*\
  !*** ./src/app/change-password/password.validators.ts ***!
  \********************************************************/
/*! exports provided: PasswordValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidators", function() { return PasswordValidators; });
class PasswordValidators {
    static invalidOldPassword(control) {
        return new Promise((resolve) => {
            if (control.value !== 'kushal')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }
    static passwordShouldMatch(control) {
        let newPassword = control.get('newPassword');
        let cnfPassword = control.get('cnfPassword');
        if (newPassword !== null && cnfPassword !== null) {
            if (newPassword.value !== cnfPassword.value)
                return { passwordShouldMatch: true };
            return (null);
        }
    }
}


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "s2In":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");

/***/ }),

/***/ "st6h":
/*!********************************************!*\
  !*** ./src/app/Courses/courses.service.ts ***!
  \********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
class CoursesService {
    getCourses() {
        return ["Programing", "Database", "Operating System", "Networking"];
    }
}


/***/ }),

/***/ "stoa":
/*!******************************************************!*\
  !*** ./src/app/services/github-followers.service.ts ***!
  \******************************************************/
/*! exports provided: GithubFollowersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubFollowersService", function() { return GithubFollowersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GithubFollowersService = class GithubFollowersService extends _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] {
    constructor(http) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
};
GithubFollowersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GithubFollowersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], GithubFollowersService);



/***/ }),

/***/ "uD8P":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"] })
], LoginComponent);



/***/ }),

/***/ "wAQb":
/*!****************************************************!*\
  !*** ./src/app/signup-form/username.validators.ts ***!
  \****************************************************/
/*! exports provided: UsernameValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidators", function() { return UsernameValidators; });
class UsernameValidators {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'kushal')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}


/***/ }),

/***/ "xkNh":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "y2aH":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github-profile/github-profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>githubprofile works!</p>\n\n<button class=\"btn btn-primary\" (click)=\"submit()\">Submit</button>\n");

/***/ }),

/***/ "yP50":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "zLaA":
/*!*******************************************!*\
  !*** ./src/app/input-format.directive.ts ***!
  \*******************************************/
/*! exports provided: InputFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormatDirective", function() { return InputFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let InputFormatDirective = class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        let value = this.el.nativeElement.value;
        if (this.format == 'uppercase')
            this.el.nativeElement.value = value.toUpperCase();
        else
            this.el.nativeElement.value = value.toLowerCase();
    }
};
InputFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
InputFormatDirective.propDecorators = {
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['appInputFormat',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] }]
};
InputFormatDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInputFormat]'
    })
], InputFormatDirective);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.055fae54f798c1a256fd.js.map