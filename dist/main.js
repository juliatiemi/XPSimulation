(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ask_ask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ask/ask.component */ "./src/app/ask/ask.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-list/question-list.component */ "./src/app/question-list/question-list.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");









var routes = [
    { path: 'ask', component: _ask_ask_component__WEBPACK_IMPORTED_MODULE_3__["AskComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'me', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'question', component: _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"] },
    { path: 'questions', component: _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__["QuestionListComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'XP Simulation';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ask_ask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ask/ask.component */ "./src/app/ask/ask.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-list/question-list.component */ "./src/app/question-list/question-list.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ask_ask_component__WEBPACK_IMPORTED_MODULE_5__["AskComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__["QuestionListComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ask/ask.component.css":
/*!***************************************!*\
  !*** ./src/app/ask/ask.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzay9hc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ask/ask.component.html":
/*!****************************************!*\
  !*** ./src/app/ask/ask.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <h3 id=\"title\">\n    Banana\n  </h3>\n  <div>\n    <div id=\"title\">\n      <h5>Title</h5>\n      <input type=\"textbox\">\n    </div>\n    <div id=\"body\">\n      <h5>Body</h5>\n      <input type=\"textbox\">\n    </div>\n    <div id=\"tags\">\n      <h5>Tags</h5>\n      <input type=\"textbox\">\n    </div>\n    <div>\n      <button>Submit</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ask/ask.component.ts":
/*!**************************************!*\
  !*** ./src/app/ask/ask.component.ts ***!
  \**************************************/
/*! exports provided: AskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskComponent", function() { return AskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AskComponent = /** @class */ (function () {
    function AskComponent() {
    }
    AskComponent.prototype.ngOnInit = function () {
    };
    AskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ask',
            template: __webpack_require__(/*! ./ask.component.html */ "./src/app/ask/ask.component.html"),
            styles: [__webpack_require__(/*! ./ask.component.css */ "./src/app/ask/ask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AskComponent);
    return AskComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #ffffff;\n  }\n\nh1{\ncolor: #fff;\ntext-align: center;\nfont-family: Arial;\nfont-weight: normal;\nmargin: 30px auto 50px;\npadding-bottom: 20px;\n}\n\nh2{\n    color: rgb(65, 65, 65);\n    text-align: center;\n    font-family: Arial;\n    font-weight: normal;\n    margin: 10px auto 30px;\n    }\n\n.inner-screen{\nwidth: 600px;\nheight: 800px;\nbackground: #a00000;\nmargin: 0px auto;\npadding-top: 80px;\n}\n\n.form{\n    width: 400px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    background: #edeff1;\n    margin: 0px auto;\n    padding-top: 20px;\n    padding-bottom: 10px;\n    border-radius: 10px;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    }\n\ninput[type=\"text\"]{\ndisplay: block;\nwidth: 309px;\nheight: 35px;\nmargin: 15px auto;\nbackground: #fff;\nborder: 0px;\npadding: 5px;\nfont-size: 16px;\nborder: 2px solid #fff;\ntransition: all 0.3s ease;\nborder-radius: 5px;\n-moz-border-radius: 5px;\n-webkit-border-radius: 5px;\n}\n\ninput[type=\"text\"]:focus{\nborder: 2px solid #a00000\n}\n\ninput[type=\"submit\"]{\ndisplay: block;\nbackground: #a00000;\nwidth: 314px;\npadding: 12px;\ncursor: pointer;\ncolor: #fff;\nborder: 0px;\nmargin: auto;\nborder-radius: 5px;\n-moz-border-radius: 5px;\n-webkit-border-radius: 5px;\nfont-size: 17px;\ntransition: all 0.3s ease;\n}\n\ninput[type=\"submit\"]:hover{\nbackground: #cc0909\n}\n\na{\ntext-align: center;\nfont-family: Arial;\ncolor: gray;\ndisplay: block;\nmargin: 15px auto;\ntext-decoration: none;\ntransition: all 0.3s ease;\nfont-size: 12px;\n}\n\na:hover{\ncolor: #a00000;\n}\n\n::-webkit-input-placeholder {\n    color: gray;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n    color: gray;  \n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n    color: gray;  \n}\n\n:-ms-input-placeholder {  \n    color: gray;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7QUFFRjtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qjs7QUFFSjtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCOztBQUVKO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGVBQWU7QUFDZixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGFBQWE7QUFDYixlQUFlO0FBQ2YsV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsZUFBZTtBQUNmLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsZUFBZTtBQUNmOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBLG9CQUFvQixnQkFBZ0I7SUFDaEMsV0FBVztBQUNmOztBQUVBLHNCQUFzQixnQkFBZ0I7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuaDF7XG5jb2xvcjogI2ZmZjtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OiBBcmlhbDtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5tYXJnaW46IDMwcHggYXV0byA1MHB4O1xucGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmgye1xuICAgIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHg7XG4gICAgfVxuXG4uaW5uZXItc2NyZWVue1xud2lkdGg6IDYwMHB4O1xuaGVpZ2h0OiA4MDBweDtcbmJhY2tncm91bmQ6ICNhMDAwMDA7XG5tYXJnaW46IDBweCBhdXRvO1xucGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi5mb3Jte1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6ICNlZGVmZjE7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcbmRpc3BsYXk6IGJsb2NrO1xud2lkdGg6IDMwOXB4O1xuaGVpZ2h0OiAzNXB4O1xubWFyZ2luOiAxNXB4IGF1dG87XG5iYWNrZ3JvdW5kOiAjZmZmO1xuYm9yZGVyOiAwcHg7XG5wYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDE2cHg7XG5ib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbmJvcmRlci1yYWRpdXM6IDVweDtcbi1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3Vze1xuYm9yZGVyOiAycHggc29saWQgI2EwMDAwMFxufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJde1xuZGlzcGxheTogYmxvY2s7XG5iYWNrZ3JvdW5kOiAjYTAwMDAwO1xud2lkdGg6IDMxNHB4O1xucGFkZGluZzogMTJweDtcbmN1cnNvcjogcG9pbnRlcjtcbmNvbG9yOiAjZmZmO1xuYm9yZGVyOiAwcHg7XG5tYXJnaW46IGF1dG87XG5ib3JkZXItcmFkaXVzOiA1cHg7XG4tbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuZm9udC1zaXplOiAxN3B4O1xudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcntcbmJhY2tncm91bmQ6ICNjYzA5MDlcbn1cblxuYXtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OiBBcmlhbDtcbmNvbG9yOiBncmF5O1xuZGlzcGxheTogYmxvY2s7XG5tYXJnaW46IDE1cHggYXV0bztcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbnRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5mb250LXNpemU6IDEycHg7XG59XG5cbmE6aG92ZXJ7XG5jb2xvcjogI2EwMDAwMDtcbn1cblxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgY29sb3I6IGdyYXk7ICBcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6IGdyYXk7ICBcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcbiAgICBjb2xvcjogZ3JheTsgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <div class=\"inner-screen\">\n      <h1>Molotov</h1>\n      <div class=\"form\">\n        <h2>Login</h2>\n        <input type=\"text\" placeholder=\"Username\" />\n        <input type=\"text\" placeholder=\"Password\" />\n        <input type=\"submit\" value=\"Login\" />\n        <a href=\"\">Register</a>\n      </div> \n    </div>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/question-list/question-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/question-list/question-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/question-list/question-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/question-list/question-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  question-list rks!\n</p>\n"

/***/ }),

/***/ "./src/app/question-list/question-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-list/question-list.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent() {
    }
    QuestionListComponent.prototype.ngOnInit = function () {
    };
    QuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/question-list/question-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  question works!\n</p>\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #ffffff;\n  }\n\nh1{\ncolor: #fff;\ntext-align: center;\nfont-family: Arial;\nfont-weight: normal;\nmargin: 30px auto 50px;\npadding-bottom: 20px;\n}\n\nh2{\n    color: rgb(65, 65, 65);\n    text-align: center;\n    font-family: Arial;\n    font-weight: normal;\n    margin: 10px auto 30px;\n    }\n\n.inner-screen{\nwidth: 600px;\nheight: 800px;\nbackground: #a00000;\nmargin: 0px auto;\npadding-top: 80px;\n}\n\n.form{\n    width: 400px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    background: #edeff1;\n    margin: 0px auto;\n    padding-top: 20px;\n    padding-bottom: 10px;\n    border-radius: 10px;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    }\n\ninput[type=\"text\"]{\ndisplay: block;\nwidth: 309px;\nheight: 35px;\nmargin: 15px auto;\nbackground: #fff;\nborder: 0px;\npadding: 5px;\nfont-size: 16px;\nborder: 2px solid #fff;\ntransition: all 0.3s ease;\nborder-radius: 5px;\n-moz-border-radius: 5px;\n-webkit-border-radius: 5px;\n}\n\ninput[type=\"text\"]:focus{\nborder: 2px solid #a00000\n}\n\ninput[type=\"submit\"]{\ndisplay: block;\nbackground: #a00000;\nwidth: 314px;\npadding: 12px;\ncursor: pointer;\ncolor: #fff;\nborder: 0px;\nmargin: auto;\nborder-radius: 5px;\n-moz-border-radius: 5px;\n-webkit-border-radius: 5px;\nfont-size: 17px;\ntransition: all 0.3s ease;\n}\n\ninput[type=\"submit\"]:hover{\nbackground: #cc0909\n}\n\na{\ntext-align: center;\nfont-family: Arial;\ncolor: gray;\ndisplay: block;\nmargin: 15px auto;\ntext-decoration: none;\ntransition: all 0.3s ease;\nfont-size: 12px;\n}\n\na:hover{\ncolor: #a00000;\n}\n\n::-webkit-input-placeholder {\n    color: gray;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n    color: gray;  \n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n    color: gray;  \n}\n\n:-ms-input-placeholder {  \n    color: gray;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7QUFFRjtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qjs7QUFFSjtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCOztBQUVKO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGVBQWU7QUFDZixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGFBQWE7QUFDYixlQUFlO0FBQ2YsV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsZUFBZTtBQUNmLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsZUFBZTtBQUNmOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBLG9CQUFvQixnQkFBZ0I7SUFDaEMsV0FBVztBQUNmOztBQUVBLHNCQUFzQixnQkFBZ0I7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuaDF7XG5jb2xvcjogI2ZmZjtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OiBBcmlhbDtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5tYXJnaW46IDMwcHggYXV0byA1MHB4O1xucGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmgye1xuICAgIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHg7XG4gICAgfVxuXG4uaW5uZXItc2NyZWVue1xud2lkdGg6IDYwMHB4O1xuaGVpZ2h0OiA4MDBweDtcbmJhY2tncm91bmQ6ICNhMDAwMDA7XG5tYXJnaW46IDBweCBhdXRvO1xucGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi5mb3Jte1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6ICNlZGVmZjE7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcbmRpc3BsYXk6IGJsb2NrO1xud2lkdGg6IDMwOXB4O1xuaGVpZ2h0OiAzNXB4O1xubWFyZ2luOiAxNXB4IGF1dG87XG5iYWNrZ3JvdW5kOiAjZmZmO1xuYm9yZGVyOiAwcHg7XG5wYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDE2cHg7XG5ib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbmJvcmRlci1yYWRpdXM6IDVweDtcbi1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3Vze1xuYm9yZGVyOiAycHggc29saWQgI2EwMDAwMFxufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJde1xuZGlzcGxheTogYmxvY2s7XG5iYWNrZ3JvdW5kOiAjYTAwMDAwO1xud2lkdGg6IDMxNHB4O1xucGFkZGluZzogMTJweDtcbmN1cnNvcjogcG9pbnRlcjtcbmNvbG9yOiAjZmZmO1xuYm9yZGVyOiAwcHg7XG5tYXJnaW46IGF1dG87XG5ib3JkZXItcmFkaXVzOiA1cHg7XG4tbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuZm9udC1zaXplOiAxN3B4O1xudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcntcbmJhY2tncm91bmQ6ICNjYzA5MDlcbn1cblxuYXtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtZmFtaWx5OiBBcmlhbDtcbmNvbG9yOiBncmF5O1xuZGlzcGxheTogYmxvY2s7XG5tYXJnaW46IDE1cHggYXV0bztcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbnRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5mb250LXNpemU6IDEycHg7XG59XG5cbmE6aG92ZXJ7XG5jb2xvcjogI2EwMDAwMDtcbn1cblxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgY29sb3I6IGdyYXk7ICBcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHsgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6IGdyYXk7ICBcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcbiAgICBjb2xvcjogZ3JheTsgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n    <div class=\"inner-screen\">\n      <h1>Molotov</h1>\n      <div class=\"form\">\n        <h2>Sing Up</h2>\n        <input type=\"text\" placeholder=\"Username\" />\n        <input type=\"text\" placeholder=\"Password\" />\n        <input type=\"text\" placeholder=\"Confirm Password\" />\n        <input type=\"submit\" value=\"Register\" />\n        <a href=\"\">Already have an account? Login</a>\n      </div> \n    </div>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bux/Documents/MotolovEngSoft/XPSimulation/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map