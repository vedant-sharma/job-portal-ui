(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<body>\n\n\n <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n\n\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n    \n          <a class=\"navbar-brand\">Job Seeker - Hi,</a>\n        </div>\n        \n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n         <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/jobs\" routerLinkActive=\"active\"><b>Available Jobs</b></a></li>\n          <li><a routerLink=\"/applied-jobs\" routerLinkActive=\"active\"><b>Applied Jobs</b></a></li>\n          <li><a routerLink=\"/logout\" routerLinkActive=\"active\"><b><span class=\"text text-danger\">Logout</span></b></a></li>\n        </ul>\n      </div>\n    </div>\n    </nav>\n\n<div style=\"min-height: calc(100vh - 92px);\"> \n<div class=\"container\">\n  <h2> Be Prepared !! You can get a call Anytime.</h2><br>\n  <h4>Jobs You have Applied -</h4>\n</div>\n\n<div *ngIf=\"httpErr\" style=\"text-align:center;font-weight: bold;\" class=\"text-danger\">{{httpErrMsg}}</div>\n\n<div class=\"container\">\n  <p></p>                                                                                      \n  <div class=\"table-responsive\">          \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Job Title</th>\n        <th>Company Name</th>\n        <th>Desciption</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"!noJobsErr\">\n\n        <tr *ngFor=\"let job of jobs\"> \n            <td>{{job.title}}</td>\n            <td>{{job.company}}</td>\n            <td>{{job.desciption}}</td>\n        </tr> \n\n    </tbody>\n    <tbody *ngIf=\"noJobsErr\">\n        <tr style=\"color:red;text-align: center;font-weight: bold;\" >\n           <td colspan=\"3\">\n            {{errMsg}}\n           </td> \n        </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n</div>\n\n<div style=\"text-align: center;\">\n    <ngb-pagination [collectionSize]=\"paginateObj.totalItem \" [(page)]=\"paginateObj.page\" (pageChange)=\"pageChange()\" aria-label=\"Default pagination\" ></ngb-pagination>\n</div>\n\n <div class=\"footer\">\n  Copyright @ JobSeeker\n</div>\n\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/candidate/available-jobs/available-jobs.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/candidate/available-jobs/available-jobs.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<body>\n\n\n  <nav class=\"navbar navbar-inverse\" style=\"margin-bottom: 0;\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n\n\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n        <a class=\"navbar-brand\">Job Seeker - Hi,</a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/jobs\" routerLinkActive=\"active\"><b>Available Jobs</b></a></li>\n          <li><a routerLink=\"/applied-jobs\" routerLinkActive=\"active\"><b>Applied Jobs</b></a></li>\n          <li><a routerLink=\"/logout\" routerLinkActive=\"active\"><b><span class=\"text text-danger\">Logout</span></b></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n\n\n  <div style=\"min-height: calc(100vh - 92px);\">\n    <div class=\"container\">\n      <h2>\"Choose a job you love, and you will never have to work a day in your life.\"</h2><br>\n      <h4>Jobs Available for you - </h4><br>\n    </div>\n\n    <div *ngIf=\"httpErr\" style=\"text-align:center;font-weight: bold;\" class=\"text-danger\">{{httpErrMsg}}</div>\n\n    <div class=\"container\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Job Title</th>\n              <th>Company Name</th>\n              <th>Desciption</th>\n              <th>Apply</th>\n            </tr>\n          </thead>\n\n          <tbody *ngIf=\"!nojobsErr\">\n            <tr *ngFor=\"let job of jobs\">\n              <td>{{job.title}}</td>\n              <td>{{job.company}}</td>\n              <td>{{job.desciption}}</td>\n              <td><span (click)=\"apply(job.uuid)\"><b>Click to Apply</b></span></td>\n\n            </tr>\n\n          </tbody>\n\n          <tbody *ngIf=\"nojobsErr\">\n            <tr>\n              <td colspan=\"5\" style=\"text-align:center;\" class=\"text-danger\">Sorry! you have already applied to all <b>Available Jobs</b> </td>\n            </tr>\n          </tbody>\n\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"text-align: center;\">\n      <ngb-pagination [collectionSize]=\"paginateObj.totalItem \" [(page)]=\"paginateObj.page\" (pageChange)=\"pageChange()\" aria-label=\"Default pagination\" ></ngb-pagination>\n</div>\n\n\n\n  <div class=\"footer\">\n    Copyright @ JobSeeker\n  </div>\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/page-not-found404/page-not-found404.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/page-not-found404/page-not-found404.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n\t<title>404 HTML Tempalte by Colorlib</title>\n\n</head>\n\n<body>\n\n\t<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-404\">\n\t\t\t\t<h1>Oops!</h1>\n\t\t\t</div>\n\t\t\t<h2>404 - Page not found</h2>\n\t\t\t<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>\n\t\t\t<a routerLink=\"/jobs\" routerLinkActive=\"active\">Go To Homepage</a>\n\t\t</div>\n\t</div>\n\n</body>\n\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/recruiter/post-job/post-job.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/recruiter/post-job/post-job.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<body>\n\n\n  <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n\n<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand\">Job Seeker - Hi, </a>\n    </div>\n    \n<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/jobs/new\" routerLinkActive=\"active\"><b>Post a Job</b></a></li>\n        <li><a routerLink=\"/posted-jobs\" routerLinkActive=\"active\"><b>Posted Jobs</b></a></li>\n        <li><a routerLink=\"/logout\" routerLinkActive=\"active\"><b><span class=\"text text-danger\">Logout</span></b></a></li>\n      </ul>\n  </div>\n</div>\n</nav>\n  \n<div class=\"container\">\n  <h2>\"Great vision without great people is irrelevant.\"</h2><br>\n  <h4> - Start hiring by posting your job </h4>\n \n</div>\n\n\n    \n    <div class=\"container\">\n\n      <form #PostjobForm=\"ngForm\" (ngSubmit)=\"postJob(PostjobForm.value)\" ngNativeValidate>\n        \n        <div *ngIf=\"postedFlag\" style=\"text-align: center;font-weight: bold;\"> \n            <span class=\"text-success\">{{jobSuccessMsg}}</span>\n        </div>\n\n        <div *ngIf=\"!postedFlag\" style=\"text-align: center;font-weight: bold;\">\n            <span class=\"text-danger\">{{jobErrorMsg}}</span>\n            </div>\n\n      <label for=\"jobTitle\"><b>Select you job Title </b></label>\n       <select name=\"jobTitle\" class=\"form-control\" [(ngModel)]=\"newJob.title\" required>\n       <option value=\"\" selected>--Select--</option>\n       <option value=\"Software Engineer\">Software Engineer</option>\n       <option value=\"Project Manager\">Project Manager</option>\n       <option value=\"Team Lead\">Team Lead</option>\n       <option value=\"Software Developer\">Software Developer</option>\n       <option value=\"Web Designer\">Web Designer</option>\n       <option value=\"Business Executive\">Business Executive</option>\n       <option value=\"Librarian\">Librarian</option>\n       <option value=\"Medical Assistant\">Medical Assistant</option>\n       <option value=\"Marketing Coordinator\">Marketing Coordinator</option>\n       <option value=\"Dog Trainer\">Dog Trainer</option>\n       </select>\n       <span class=\"text-danger\"></span>\n\n      <label for=\"companyName\"><b>Company Name</b></label>\n      <input type=\"text\" placeholder=\"Company Name\" name=\"companyName\" class=\"form-control\" [(ngModel)]=\"newJob.company\" required>\n      <span class=\"text-danger\"></span>\n\n      <label for=\"skills\"><b>Description</b></label>\n      <input type=\"text\" placeholder=\"Skills required (each separated by comma)\" name=\"skills\" class=\"form-control\" [(ngModel)]=\"newJob.description\" required>\n      <span class=\"text-danger\"></span><br><br>\n\n      <div class=\"subbtn\"><button type=\"submit\">Post this Job</button></div><br><br>\n    </form>\n     \n    </div>\n    \n      <div class=\"footer\">\n  Copyright @ JobSeeker\n</div>\n\n\n\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<body>\n\n\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n\n                <a class=\"navbar-brand\">Job Seeker - Hi, </a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a routerLink=\"/jobs/new\" routerLinkActive=\"active\"><b>Post a Job</b></a></li>\n                    <li><a routerLink=\"/posted-jobs\" routerLinkActive=\"active\"><b>Posted Jobs</b></a></li>\n                    <li><a routerLink=\"/logout\" routerLinkActive=\"active\"><b><span\n                                    class=\"text text-danger\">Logout</span></b></a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <div style=\"min-height: calc(100vh - 92px);\">\n\n        <div class=\"container\">\n            <h2>“Hire character. Train skill.” </h2><br>\n            <h4> - Jobs which you have posted </h4>\n\n        </div>\n\n        <div *ngIf=\"httpErr\" style=\"text-align:center;font-weight: bold;\" class=\"text-danger\">{{httpErrMsg}}</div>\n\n        <div class=\"container\">\n            <div class=\"table-responsive\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Job Title</th>\n                            <th>Company Name</th>\n                            <th>Skills Required</th>\n                            <th>Details of applicants</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"!nojobsErr\">\n                        <tr *ngFor=\"let job of jobs| paginate: { id: 'foo', itemsPerPage: pageSize, currentPage: currentPg, totalItems: totalItemsCount }\">\n                            <td>{{job.title}}</td>\n                            <td>{{job.company}}</td>\n                            <td>{{job.desciption}}</td>\n                            <td><span style=\"color:green;cursor: pointer;\" (click)=\"applications(job.uuid)\"\n                                    data-toggle=\"modal\" data-target=\"#myModal\"><b>View Applicants</b></span></td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf=\"nojobsErr\">\n                        <tr>\n                            <td colspan=\"5\" style=\"text-align:center;\" class=\"text-danger\">Sorry! you have not posted\n                                any Jobs, start by clicking <b>Post a Job</b> option</td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </div>\n\n        </div>\n    </div>\n\n    <div style=\"text-align: center;\">\n            <ngb-pagination [collectionSize]=\"paginateObj.totalItem \" [(page)]=\"paginateObj.page\" (pageChange)=\"pageChange()\" aria-label=\"Default pagination\" ></ngb-pagination>\n</div>\n\n    <div class=\"container\">\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n\n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        <h4 class=\"modal-title\">Applicant Details</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                            <div class=\"table-responsive\">\n                                    <table class=\"table\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                                <th>Contact number</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"!noApplicantsFlag\">\n                                            <tr *ngFor=\"let user of applicants\">\n                                                <td>{{user.first_name}} {{user.last_name}}</td>\n                                                <td>{{user.phone}}</td>\n                                                <td>{{user.email}}</td>\n                                            </tr>\n                                        </tbody>\n                    \n                                        <tbody *ngIf=\"noApplicantsFlag\">\n                                            <tr>\n                                                <td colspan=\"5\" style=\"text-align:center;\" class=\"text-danger\">Sorry! There are currently<b> no Applicants</b> for this job </td>\n                                            </tr>\n                                        </tbody>\n                    \n                                    </table>\n                                </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"footer\">\n        Copyright @ JobSeeker\n    </div>\n\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\">\n</head>\n\n<body>\n\n\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n\n                <a class=\"navbar-brand\" href=\"#\">Job Seeker</a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a routerLink=\"/register\" routerLinkActive=\"active\"> <span\n                                class=\"glyphicon glyphicon-user\"></span> Sign Up </a></li>\n                    <li><a routerLink='/login' routerLinkActive=\"active\"><span\n                                class=\"glyphicon glyphicon-log-in\"></span> Login </a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"container\">\n        <h2>Job Seeker - Your Dreams. Our Mission </h2><br>\n        <h4>- A place where Candidates can directly Acknowledge the Recruiters </h4><br><br><br><br>\n\n    </div>\n\n\n    <div class=\"container\" *ngIf=\"verifyContainer\">\n\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"Verify(Email.value)\" ngNativeValidate>\n            <label for=\"Email\"><b>Please Verify Your Email</b></label>\n            <input type=\"email\" placeholder=\"Enter Email\" #Email ngmodel name=\"Email\" required>\n            <div *ngIf=\"errMsg\" class=\"text-danger\" style=\"text-align: center;font-weight: bold;\">{{message}}</div>\n\n            <div class=\"subbtn\"><button type=\"submit\">Verify</button></div>\n\n        </form>\n    </div>\n\n    <div class=\"container\" *ngIf=\"resetContainer\">\n\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"Reset(otp.value,Password.value)\" ngNativeValidate>\n\n                <div *ngIf=\"successMsgOtp\" class=\"text-success\" style=\"text-align: center;font-weight: bold;\">{{message}}</div>\n                <div *ngIf=\"errResetMsg\" class=\"text-danger\" style=\"text-align: center;font-weight: bold;\">{{invalidmsg}}</div>\n\n                <label for=\"otp\"><b>Enter OTP</b></label>\n                <input type=\"text\" placeholder=\"Enter OTP \" #otp ngmodel name=\"otp\" pattern=\"[0-9]{6}\" title=\"OTP must contain 6 digits\"required>\n\n                <label for=\"password\"><b>New Password</b></label>\n                <input type=\"password\" placeholder=\"Enter New Password\" #Password ngmodel name=\"Password\" pattern=\".{6,}\"\n                title=\"Password must have minimum 6 characters\" required>\n    \n                <div class=\"subbtn\"><button type=\"submit\">Submit</button></div>\n    \n            </form>\n        </div>\n\n    <div class=\"footer\">\n        Copyright @ JobSeeker\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"UTF-8\">\n</head>\n\n<body>\n\n\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n\n                <a class=\"navbar-brand\" href=\"#\">Job Seeker</a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a routerLink=\"/register\" routerLinkActive=\"active\"> <span\n                                class=\"glyphicon glyphicon-user\"></span> Sign Up </a></li>\n                    <li><a routerLink='/login' routerLinkActive=\"active\"><span\n                                class=\"glyphicon glyphicon-log-in\"></span> Login </a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"container\">\n        <h2>Job Seeker - Your Dreams. Our Mission </h2><br>\n        <h4>- A place where Candidates can directly Acknowledge the Recruiters </h4><br><br><br><br>\n\n    </div>\n\n\n    <div class=\"container\">\n\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"Authenticate(Email.value,Password.value)\" ngNativeValidate>\n            <label for=\"Email\"><b>Email</b></label>\n            <input type=\"email\" placeholder=\"Enter Email\" #Email ngmodel name=\"Email\" required>\n\n            <label for=\"password\"><b>Password</b></label>\n            <input type=\"password\" placeholder=\"Enter Password\" #Password ngmodel name=\"Password\" pattern=\".{6,}\"\n                title=\"Password must have minimum 6 characters\" required>\n\n            <div *ngIf=\"errmsg\" class=\"text-danger\" style=\"text-align: center;font-weight: bold;\">{{message}}</div>\n\n            <div class=\"subbtn\"><button type=\"submit\">Sign In</button></div>\n\n            <div style=\"text-align: center;\"><a routerLink=\"/forgot-password\" routerLinkActive=\"active\"><span>Forgot Password</span></a></div>\n        </form>\n\n\n    </div>\n\n    <div class=\"footer\">\n        Copyright @ JobSeeker\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/logout/logout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/logout/logout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/register/register.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/register/register.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n\n\n  <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand\" href=\"#\">Job Seeker</a>\n    </div>\n    \n<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"/register\" routerLinkActive=\"active\"> <span class=\"glyphicon glyphicon-user\"></span> Sign Up </a></li>\n                <li><a routerLink='/login' routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login </a></li>\n        </ul>\n  </div>\n</div>\n</nav>\n  \n<div class=\"container\">\n   <h2>Job Seeker - Your Dreams. Our Mission </h2><br>\n\n  <h4>- SignUp as a Recruiter or as a Job Seeker, to start using our features </h4>\n \n</div>\n\n\n    \n    <div class=\"container\">\n\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"register(loginForm.value)\" ngNativeValidate>\n\n      <label for=\"Name\"><b>First Name</b></label>\n      <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"userModel.first_name\" name=\"first_name\" class=\"form-control\" required>\n\n      <label for=\"Name\"><b>Last Name</b></label>\n      <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"userModel.last_name\" name=\"last_name\" class=\"form-control\" required>\n\n      <label for=\"Email\"><b>Email</b></label>\n      <input type=\"email\" placeholder=\"Enter Email\" [(ngModel)]=\"userModel.email\" name=\"email\" class=\"form-control\" required>\n      <div *ngIf=\"errmsgemail\" class=\"text-danger\" style=\"text-align: center;font-weight: bold;\">{{message}}</div>\n      \n      <label for=\"Phone\"><b>Phone number</b></label>\n      <input type=\"text\" name=\"Phone\" placeholder=\"Enter Phone Number\" class=\"form-control\"\n      pattern=\"[0-9]{10}\" title=\"Phone numbers must be of 10 digits\" [(ngModel)]=\"userModel.phone\"  name=\"phone\" required>\n       \n       <label for=\"UserType\"><b>Account Type - Recruiters/Job Seekers</b></label>\n       <select name=\"UserType\" [(ngModel)]=\"userModel.role_id\"  name=\"role_id\" class=\"form-control\" required>\n       <option value=\"0\" selected>--Select--</option>\n       <option value=\"2\">Candidate</option>\n       <option value=\"3\">Recruiter</option>\n       </select>\n       <div *ngIf=\"errmsgrole\" class=\"text-danger\" style=\"text-align: center;font-weight: bold;\">Please Select Your Account Type</div>\n       \n       <label for=\"Passwor\"><b>Password</b></label>\n      <input type=\"password\" placeholder=\"Enter password for you account\" name=\"Password\" pattern=\".{6,}\" \n      title=\"Password must have minimum 5 characters\" [(ngModel)]=\"userModel.password\" class=\"form-control\" name=\"password\" required>\n\n        \n      <div class=\"subbtn\"><button type=\"submit\" >Sign Up</button></div>\n      </form>\n     \n    </div>\n    \n\n    \n    <div class=\"footer\">\n  Copyright @ JobSeeker\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {font-family: Arial, Helvetica, sans-serif;}\n.container {padding: 16px;}\n.table{width:90%;margin:0 auto;}\n.footer {right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL2NhbmRpZGF0ZS9hcHBsaWVkLWpvYnMvYXBwbGllZC1qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRCxZQUFZLGFBQWEsQ0FBQztBQUMxQixPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFDL0IsU0FBUyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvSm9iUG9ydGFsL2NhbmRpZGF0ZS9hcHBsaWVkLWpvYnMvYXBwbGllZC1qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XG4uY29udGFpbmVyIHtwYWRkaW5nOiAxNnB4O31cbi50YWJsZXt3aWR0aDo5MCU7bWFyZ2luOjAgYXV0bzt9XG4uZm9vdGVyIHtyaWdodDogMDtib3R0b206IDA7bGVmdDogMDtwYWRkaW5nOiAxcmVtO2JhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO30iXX0= */");

/***/ }),

/***/ "./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.ts ***!
  \****************************************************************************/
/*! exports provided: AppliedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliedJobsComponent", function() { return AppliedJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/jobs/jobs.service */ "./src/app/Services/jobs/jobs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Models_job_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Models/job.model */ "./src/app/Models/job.model.ts");





let AppliedJobsComponent = class AppliedJobsComponent {
    constructor(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.noJobsErr = false;
        this.errMsg = "";
        this.httpErr = false;
        this.httpErrMsg = "";
        this.paginateObj = new _Models_job_model__WEBPACK_IMPORTED_MODULE_4__["paginateModel"]();
    }
    ngOnInit() {
        this.getAppliedJobs();
    }
    getAppliedJobs() {
        this.httpErr = false;
        this.jobService.getAppliedJobs(this.paginateObj.page).subscribe(res => {
            this.jobs = res.data;
            this.paginateObj.totalItem = res.meta.pagination.total;
            if (this.jobs.length == 0) {
                this.noJobsErr = true;
                this.errMsg = "Sorry, you haven't applied to any jobs";
            }
            else {
                this.noJobsErr = false;
                this.jobs = res.data;
            }
        }, (err) => {
            this.httpErr = true;
            this.httpErrMsg = err.error.message;
        });
    }
    pageChange() {
        this.getAppliedJobs();
    }
};
AppliedJobsComponent.ctorParameters = () => [
    { type: _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppliedJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applied-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applied-jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applied-jobs.component.css */ "./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.css")).default]
    })
], AppliedJobsComponent);



/***/ }),

/***/ "./src/app/JobPortal/candidate/available-jobs/available-jobs.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/JobPortal/candidate/available-jobs/available-jobs.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {font-family: Arial, Helvetica, sans-serif;}\n.container {padding: 16px;}\n.notifyMsg{width:100%;text-align: center;}\n.footer {right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\ntd span {cursor: pointer; color:red;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL2NhbmRpZGF0ZS9hdmFpbGFibGUtam9icy9hdmFpbGFibGUtam9icy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0seUNBQXlDLENBQUM7QUFDaEQsWUFBWSxhQUFhLENBQUM7QUFDMUIsV0FBVyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDekMsU0FBUyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO0FBQzNHLFNBQVMsZUFBZSxFQUFFLFNBQVMsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL0pvYlBvcnRhbC9jYW5kaWRhdGUvYXZhaWxhYmxlLWpvYnMvYXZhaWxhYmxlLWpvYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cbi5jb250YWluZXIge3BhZGRpbmc6IDE2cHg7fVxuLm5vdGlmeU1zZ3t3aWR0aDoxMDAlO3RleHQtYWxpZ246IGNlbnRlcjt9XG4uZm9vdGVyIHtyaWdodDogMDtib3R0b206IDA7bGVmdDogMDtwYWRkaW5nOiAxcmVtO2JhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO31cbnRkIHNwYW4ge2N1cnNvcjogcG9pbnRlcjsgY29sb3I6cmVkO30iXX0= */");

/***/ }),

/***/ "./src/app/JobPortal/candidate/available-jobs/available-jobs.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/JobPortal/candidate/available-jobs/available-jobs.component.ts ***!
  \********************************************************************************/
/*! exports provided: AvailableJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableJobsComponent", function() { return AvailableJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/jobs/jobs.service */ "./src/app/Services/jobs/jobs.service.ts");
/* harmony import */ var _Models_job_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/job.model */ "./src/app/Models/job.model.ts");




let AvailableJobsComponent = class AvailableJobsComponent {
    constructor(jobService) {
        this.jobService = jobService;
        this.index = 0;
        this.nojobsErr = false;
        this.httpErr = false;
        this.httpErrMsg = "";
        this.paginateObj = new _Models_job_model__WEBPACK_IMPORTED_MODULE_3__["paginateModel"]();
    }
    ngOnInit() {
        this.availableJobs();
    }
    availableJobs() {
        this.jobService.availableJobs(this.paginateObj.page).subscribe(res => {
            this.nojobsErr = false;
            this.httpErr = false;
            this.jobs = res.data;
            this.paginateObj.totalItem = res.meta.pagination.total;
            if (this.jobs.length == 0) {
                this.nojobsErr = true;
            }
        }, (err) => {
            this.httpErr = true;
            this.httpErrMsg = err.error.message;
        });
    }
    apply(uuid) {
        if (confirm("Do you really wish to apply ? ")) {
            this.jobService.apply(uuid).subscribe((data) => {
                this.availableJobs();
            }, (err) => {
                this.httpErr = true;
                this.httpErrMsg = err.error.message;
            });
        }
    }
    pageChange() {
        this.availableJobs();
    }
};
AvailableJobsComponent.ctorParameters = () => [
    { type: _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"] }
];
AvailableJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-available-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./available-jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/candidate/available-jobs/available-jobs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./available-jobs.component.css */ "./src/app/JobPortal/candidate/available-jobs/available-jobs.component.css")).default]
    })
], AvailableJobsComponent);



/***/ }),

/***/ "./src/app/JobPortal/page-not-found404/page-not-found404.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/JobPortal/page-not-found404/page-not-found404.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n  }\n  \n  #notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 410px;\n    width: 100%;\n    text-align: center;\n  }\n  \n  .notfound .notfound-404 {\n    height: 280px;\n    position: relative;\n    z-index: -1;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 230px;\n    margin: 0px;\n    font-weight: 900;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    background: url('bg.jpg') no-repeat;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  .notfound h2 {\n    font-family: 'Montserrat', sans-serif;\n    color: #000;\n    font-size: 24px;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-top: 0;\n  }\n  \n  .notfound p {\n    font-family: 'Montserrat', sans-serif;\n    color: #000;\n    font-size: 14px;\n    font-weight: 400;\n    margin-bottom: 20px;\n    margin-top: 0px;\n  }\n  \n  .notfound a {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 14px;\n    text-decoration: none;\n    text-transform: uppercase;\n    background: #0046d5;\n    display: inline-block;\n    padding: 15px 30px;\n    border-radius: 40px;\n    color: #fff;\n    font-weight: 700;\n    box-shadow: 0px 4px 15px -5px #0046d5;\n  }\n  \n  @media only screen and (max-width: 767px) {\n      .notfound .notfound-404 {\n        height: 142px;\n      }\n      .notfound .notfound-404 h1 {\n        font-size: 112px;\n      }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL3BhZ2Utbm90LWZvdW5kNDA0L3BhZ2Utbm90LWZvdW5kNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFWSxzQkFBc0I7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUdBLGdDQUFnQztFQUMxQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFHRCwyQkFBMkI7SUFDbkMsbUNBQW1EO0lBQ25ELDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtFQUM3Qjs7RUFHQTtJQUNFLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBRVIscUNBQXFDO0VBQy9DOztFQUdBO01BQ0k7UUFDRSxhQUFhO01BQ2Y7TUFDQTtRQUNFLGdCQUFnQjtNQUNsQjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvSm9iUG9ydGFsL3BhZ2Utbm90LWZvdW5kNDA0L3BhZ2Utbm90LWZvdW5kNDA0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI25vdGZvdW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIHtcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIFxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIzMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iZy5qcGcnKSBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG4gIFxuICBcbiAgLm5vdGZvdW5kIGgyIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCBhIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0NmQ1O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IC01cHggIzAwNDZkNTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAtNXB4ICMwMDQ2ZDU7XG4gIH1cbiAgXG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgICAgIGhlaWdodDogMTQycHg7XG4gICAgICB9XG4gICAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTEycHg7XG4gICAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/JobPortal/page-not-found404/page-not-found404.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/JobPortal/page-not-found404/page-not-found404.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound404Component", function() { return PageNotFound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFound404Component = class PageNotFound404Component {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFound404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/page-not-found404/page-not-found404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found404.component.css */ "./src/app/JobPortal/page-not-found404/page-not-found404.component.css")).default]
    })
], PageNotFound404Component);



/***/ }),

/***/ "./src/app/JobPortal/recruiter/post-job/post-job.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/JobPortal/recruiter/post-job/post-job.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {font-family: Arial, Helvetica, sans-serif;}\nform{width:55%;margin:0 auto;border:0.5px solid #D3D0D0;padding:25px;}\n.subbtn{width:100%;text-align:center;}\nbutton[type=submit]{width:50%;background-color: #f44336;}\ninput[type=text], input[type=password],input[type=email],input[type=pass],select { width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #ccc;box-sizing: border-box;}\nbutton {background-color: #4CAF50;color: white;padding: 14px 20px;margin: 8px 0;border: none;cursor: pointer;width: 100%;}\nbutton:hover {opacity: 0.8;}\n.container {width:100%;padding: 16px;}\n.notifyMsg{width:100%;text-align: center;}\n.footer {position:fixed;right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL3JlY3J1aXRlci9wb3N0LWpvYi9wb3N0LWpvYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0seUNBQXlDLENBQUM7QUFDaEQsS0FBSyxTQUFTLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQztBQUNyRSxRQUFRLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztBQUNyQyxvQkFBb0IsU0FBUyxDQUFDLHlCQUF5QixDQUFDO0FBQ3hELG1GQUFtRixXQUFXLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDO0FBQ3BNLFFBQVEseUJBQXlCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztBQUN6SCxjQUFjLFlBQVksQ0FBQztBQUMzQixZQUFZLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDckMsV0FBVyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDekMsU0FBUyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL0pvYlBvcnRhbC9yZWNydWl0ZXIvcG9zdC1qb2IvcG9zdC1qb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cbmZvcm17d2lkdGg6NTUlO21hcmdpbjowIGF1dG87Ym9yZGVyOjAuNXB4IHNvbGlkICNEM0QwRDA7cGFkZGluZzoyNXB4O31cbi5zdWJidG57d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjt9XG5idXR0b25bdHlwZT1zdWJtaXRde3dpZHRoOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O31cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLGlucHV0W3R5cGU9ZW1haWxdLGlucHV0W3R5cGU9cGFzc10sc2VsZWN0IHsgd2lkdGg6IDEwMCU7cGFkZGluZzogMTJweCAyMHB4O21hcmdpbjogOHB4IDA7ZGlzcGxheTogaW5saW5lLWJsb2NrO2JvcmRlcjogMXB4IHNvbGlkICNjY2M7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XG5idXR0b24ge2JhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7Y29sb3I6IHdoaXRlO3BhZGRpbmc6IDE0cHggMjBweDttYXJnaW46IDhweCAwO2JvcmRlcjogbm9uZTtjdXJzb3I6IHBvaW50ZXI7d2lkdGg6IDEwMCU7fVxuYnV0dG9uOmhvdmVyIHtvcGFjaXR5OiAwLjg7fVxuLmNvbnRhaW5lciB7d2lkdGg6MTAwJTtwYWRkaW5nOiAxNnB4O31cbi5ub3RpZnlNc2d7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmZvb3RlciB7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6IDA7Ym90dG9tOiAwO2xlZnQ6IDA7cGFkZGluZzogMXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjp3aGl0ZTt9Il19 */");

/***/ }),

/***/ "./src/app/JobPortal/recruiter/post-job/post-job.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/JobPortal/recruiter/post-job/post-job.component.ts ***!
  \********************************************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/jobs/jobs.service */ "./src/app/Services/jobs/jobs.service.ts");
/* harmony import */ var _Models_job_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/job.model */ "./src/app/Models/job.model.ts");




let PostJobComponent = class PostJobComponent {
    constructor(jobService) {
        this.jobService = jobService;
        this.newJob = new _Models_job_model__WEBPACK_IMPORTED_MODULE_3__["PostJobModel"]();
        this.jobSuccessMsg = "";
        this.jobErrorMsg = "";
        this.postedFlag = false;
        this.notPostedFlag = false;
    }
    ngOnInit() {
        this.newJob.title = "";
    }
    postJob() {
        this.jobService.postJob(this.newJob).subscribe(data => {
            this.postedFlag = true;
            this.notPostedFlag = false;
            this.jobSuccessMsg = "Your Job was Successfully Posted";
        }, (err) => {
            this.postedFlag = false;
            this.notPostedFlag = true;
            this.jobErrorMsg = err.error.message;
        });
    }
};
PostJobComponent.ctorParameters = () => [
    { type: _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"] }
];
PostJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-job',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-job.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/recruiter/post-job/post-job.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-job.component.css */ "./src/app/JobPortal/recruiter/post-job/post-job.component.css")).default]
    })
], PostJobComponent);



/***/ }),

/***/ "./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {font-family: Arial, Helvetica, sans-serif;}\n.container {padding: 16px;}\n.footer {right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\n.modal .modal-dialog {width: 80%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL3JlY3J1aXRlci9wb3N0ZWQtam9icy9wb3N0ZWQtam9icy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0seUNBQXlDLENBQUM7QUFDaEQsWUFBWSxhQUFhLENBQUM7QUFDMUIsU0FBUyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO0FBQzNHLHNCQUFzQixVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9Kb2JQb3J0YWwvcmVjcnVpdGVyL3Bvc3RlZC1qb2JzL3Bvc3RlZC1qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XG4uY29udGFpbmVyIHtwYWRkaW5nOiAxNnB4O31cbi5mb290ZXIge3JpZ2h0OiAwO2JvdHRvbTogMDtsZWZ0OiAwO3BhZGRpbmc6IDFyZW07YmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6d2hpdGU7fVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cge3dpZHRoOiA4MCU7fSJdfQ== */");

/***/ }),

/***/ "./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostedJobsComponent", function() { return PostedJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/jobs/jobs.service */ "./src/app/Services/jobs/jobs.service.ts");
/* harmony import */ var _Models_job_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/job.model */ "./src/app/Models/job.model.ts");




let PostedJobsComponent = class PostedJobsComponent {
    constructor(jobService) {
        this.jobService = jobService;
        this.paginateObj = new _Models_job_model__WEBPACK_IMPORTED_MODULE_3__["paginateModel"]();
        this.noApplicantsFlag = true;
        this.httpErr = false;
        this.httpErrMsg = "";
        this.nojobsErr = false;
    }
    ngOnInit() {
        this.getPostedJobs();
    }
    getPostedJobs() {
        this.jobService.getPostedJobs(this.paginateObj.page).subscribe(res => {
            this.httpErr = false;
            this.jobs = res.data;
            this.paginateObj.totalItem = res.meta.pagination.total;
            if (this.jobs.length == 0) {
                this.nojobsErr = true;
            }
        }, (err) => {
            this.httpErr = true;
            this.httpErrMsg = err.error.message;
        });
    }
    applications(uuid) {
        this.jobService.getApplicants(uuid).subscribe(res => {
            this.noApplicantsFlag = false;
            this.applicants = res.data;
            if (this.applicants.length == 0)
                this.noApplicantsFlag = true;
        }, (err) => {
            this.httpErr = true;
            this.httpErrMsg = err.error.message;
        });
    }
    pageChange() {
        this.getPostedJobs();
    }
};
PostedJobsComponent.ctorParameters = () => [
    { type: _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobService"] }
];
PostedJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posted-jobs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posted-jobs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posted-jobs.component.css */ "./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.css")).default]
    })
], PostedJobsComponent);



/***/ }),

/***/ "./src/app/JobPortal/user/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/JobPortal/user/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('userData'));
    }
    canActivate(next, state) {
        if (JSON.parse(localStorage.getItem('userData')) != null)
            return true;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/JobPortal/user/forgot-password/forgot-password.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/JobPortal/user/forgot-password/forgot-password.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {width:100%;height:100%;font-family: Arial, Helvetica, sans-serif;} \nform{width:40%;margin:0 auto;} \n.subbtn{width:100%;text-align:center;} \nbutton[type=submit]{width:50%;background-color: #f44336;} \ninput[type=text], input[type=password],input[type=email],input[type=pass],select { width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #ccc;box-sizing: border-box;} \nbutton {background-color: #4CAF50;color: white;padding: 14px 20px;margin: 8px 0;border: none;cursor: pointer;width: 100%;} \nbutton:hover {opacity: 0.8;} \n.footer {position:fixed;right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyx5Q0FBeUMsQ0FBQztBQUN2RSxLQUFLLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFDN0IsUUFBUSxVQUFVLENBQUMsaUJBQWlCLENBQUM7QUFDckMsb0JBQW9CLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztBQUN4RCxtRkFBbUYsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQztBQUNwTSxRQUFRLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDekgsY0FBYyxZQUFZLENBQUM7QUFDM0IsU0FBUyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL0pvYlBvcnRhbC91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fSBcbmZvcm17d2lkdGg6NDAlO21hcmdpbjowIGF1dG87fVxuLnN1YmJ0bnt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO31cbmJ1dHRvblt0eXBlPXN1Ym1pdF17d2lkdGg6NTAlO2JhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7fVxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0saW5wdXRbdHlwZT1lbWFpbF0saW5wdXRbdHlwZT1wYXNzXSxzZWxlY3QgeyB3aWR0aDogMTAwJTtwYWRkaW5nOiAxMnB4IDIwcHg7bWFyZ2luOiA4cHggMDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyOiAxcHggc29saWQgI2NjYztib3gtc2l6aW5nOiBib3JkZXItYm94O31cbmJ1dHRvbiB7YmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtjb2xvcjogd2hpdGU7cGFkZGluZzogMTRweCAyMHB4O21hcmdpbjogOHB4IDA7Ym9yZGVyOiBub25lO2N1cnNvcjogcG9pbnRlcjt3aWR0aDogMTAwJTt9XG5idXR0b246aG92ZXIge29wYWNpdHk6IDAuODt9XG4uZm9vdGVyIHtwb3NpdGlvbjpmaXhlZDtyaWdodDogMDtib3R0b206IDA7bGVmdDogMDtwYWRkaW5nOiAxcmVtO2JhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO30iXX0= */");

/***/ }),

/***/ "./src/app/JobPortal/user/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/JobPortal/user/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user/user.service */ "./src/app/Services/user/user.service.ts");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/user.model */ "./src/app/Models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.verify = new _Models_user_model__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailModel"]();
        this.reset = new _Models_user_model__WEBPACK_IMPORTED_MODULE_3__["resetPasswordModel"]();
        this.errMsg = false;
        this.verifyContainer = true;
        this.resetContainer = false;
        this.successMsgOtp = false;
        this.errResetMsg = false;
        this.invalidmsg = "";
        this.message = "";
    }
    ngOnInit() {
        if (this.user = JSON.parse(localStorage.getItem('userData'))) {
            if (this.user.role_id == 2)
                this.router.navigate(['/jobs']);
            else
                this.router.navigate(['jobs/new']);
        }
    }
    Verify(email) {
        this.verify.email = email;
        this.errMsg = false;
        this.userService.userVerifyEmail(this.verify).subscribe((data) => {
            this.verifyContainer = false;
            this.resetContainer = true;
            this.successMsgOtp = true;
            this.message = data.data;
        }, (err) => {
            this.errMsg = true;
            this.message = err.error.message;
        });
    }
    Reset(otp, newPassword) {
        this.reset.otp = otp;
        this.reset.new_password = newPassword;
        this.userService.userResetPassword(this.reset).subscribe((data) => {
            this.errMsg = true;
            this.message = data.data;
            this.errResetMsg = false;
        }, (err) => {
            this.errResetMsg = true;
            this.successMsgOtp = false;
            this.invalidmsg = err.error.message;
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _Services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/JobPortal/user/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/JobPortal/user/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/JobPortal/user/login/login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {width:100%;height:100%;font-family: Arial, Helvetica, sans-serif;} \nform{width:40%;margin:0 auto;} \n.subbtn{width:100%;text-align:center;} \nbutton[type=submit]{width:50%;background-color: #f44336;} \ninput[type=text], input[type=password],input[type=email],input[type=pass],select { width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #ccc;box-sizing: border-box;} \nbutton {background-color: #4CAF50;color: white;padding: 14px 20px;margin: 8px 0;border: none;cursor: pointer;width: 100%;} \nbutton:hover {opacity: 0.8;} \n.footer {position:fixed;right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUMseUNBQXlDLENBQUM7QUFDdkUsS0FBSyxTQUFTLENBQUMsYUFBYSxDQUFDO0FBQzdCLFFBQVEsVUFBVSxDQUFDLGlCQUFpQixDQUFDO0FBQ3JDLG9CQUFvQixTQUFTLENBQUMseUJBQXlCLENBQUM7QUFDeEQsbUZBQW1GLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUM7QUFDcE0sUUFBUSx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ3pILGNBQWMsWUFBWSxDQUFDO0FBQzNCLFNBQVMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMiLCJmaWxlIjoic3JjL2FwcC9Kb2JQb3J0YWwvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9IFxuZm9ybXt3aWR0aDo0MCU7bWFyZ2luOjAgYXV0bzt9XG4uc3ViYnRue3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7fVxuYnV0dG9uW3R5cGU9c3VibWl0XXt3aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjt9XG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSxpbnB1dFt0eXBlPWVtYWlsXSxpbnB1dFt0eXBlPXBhc3NdLHNlbGVjdCB7IHdpZHRoOiAxMDAlO3BhZGRpbmc6IDEycHggMjBweDttYXJnaW46IDhweCAwO2Rpc3BsYXk6IGlubGluZS1ibG9jaztib3JkZXI6IDFweCBzb2xpZCAjY2NjO2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxuYnV0dG9uIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO2NvbG9yOiB3aGl0ZTtwYWRkaW5nOiAxNHB4IDIwcHg7bWFyZ2luOiA4cHggMDtib3JkZXI6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO3dpZHRoOiAxMDAlO31cbmJ1dHRvbjpob3ZlciB7b3BhY2l0eTogMC44O31cbi5mb290ZXIge3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OiAwO2JvdHRvbTogMDtsZWZ0OiAwO3BhZGRpbmc6IDFyZW07YmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDt0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6d2hpdGU7fSJdfQ== */");

/***/ }),

/***/ "./src/app/JobPortal/user/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/JobPortal/user/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user/user.service */ "./src/app/Services/user/user.service.ts");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/user.model */ "./src/app/Models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userModel = new _Models_user_model__WEBPACK_IMPORTED_MODULE_3__["AuthenticationModel"]();
        this.errmsg = false;
    }
    ngOnInit() {
        if (this.user = JSON.parse(localStorage.getItem('userData'))) {
            if (this.user.role_id == 2)
                this.router.navigate(['/jobs']);
            else
                this.router.navigate(['jobs/new']);
        }
    }
    Authenticate(email, password) {
        this.errmsg = false;
        this.userModel.email = email;
        this.userModel.password = password;
        this.userService.userAuthentication(this.userModel).subscribe((res) => {
            localStorage.setItem("userData", JSON.stringify(res.data));
            if (res.data.role_id == 2)
                this.router.navigate(['/jobs']);
            else if (res.data.role_id == 3)
                this.router.navigate(['jobs/new']);
            else {
                this.errmsg = true;
                this.message = "Please login through ADMIN panel";
            }
        }, (err) => {
            this.errmsg = true;
            this.message = err.error.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _Services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/JobPortal/user/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/JobPortal/user/logout/logout.component.css":
/*!************************************************************!*\
  !*** ./src/app/JobPortal/user/logout/logout.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0pvYlBvcnRhbC91c2VyL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/JobPortal/user/logout/logout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/JobPortal/user/logout/logout.component.ts ***!
  \***********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LogoutComponent = class LogoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/JobPortal/user/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/JobPortal/user/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/JobPortal/user/register/register.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {font-family: Arial, Helvetica, sans-serif;}\nform{width:55%;margin:0 auto;border:0.5px solid #E4DDDD;padding:25px;}\n.subbtn{width:100%;text-align:center;}\nbutton[type=submit]{width:50%;background-color: #f44336;}\ninput[type=text], input[type=password],input[type=email],input[type=pass],select { width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #ccc;box-sizing: border-box;}\nbutton {background-color: #4CAF50;color: white;padding: 14px 20px;margin: 8px 0;border: none;cursor: pointer;width: 100%;}\nbutton:hover {opacity: 0.8;}\n.container {width:100%;padding: 16px;}\n.footer {right: 0;bottom: 0;left: 0;padding: 1rem;background-color: #101010;text-align: center;color:white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSm9iUG9ydGFsL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hELEtBQUssU0FBUyxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUM7QUFDckUsUUFBUSxVQUFVLENBQUMsaUJBQWlCLENBQUM7QUFDckMsb0JBQW9CLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztBQUN4RCxtRkFBbUYsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQztBQUNwTSxRQUFRLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDekgsY0FBYyxZQUFZLENBQUM7QUFDM0IsWUFBWSxVQUFVLENBQUMsYUFBYSxDQUFDO0FBQ3JDLFNBQVMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL0pvYlBvcnRhbC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XG5mb3Jte3dpZHRoOjU1JTttYXJnaW46MCBhdXRvO2JvcmRlcjowLjVweCBzb2xpZCAjRTREREREO3BhZGRpbmc6MjVweDt9XG4uc3ViYnRue3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7fVxuYnV0dG9uW3R5cGU9c3VibWl0XXt3aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjt9XG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSxpbnB1dFt0eXBlPWVtYWlsXSxpbnB1dFt0eXBlPXBhc3NdLHNlbGVjdCB7IHdpZHRoOiAxMDAlO3BhZGRpbmc6IDEycHggMjBweDttYXJnaW46IDhweCAwO2Rpc3BsYXk6IGlubGluZS1ibG9jaztib3JkZXI6IDFweCBzb2xpZCAjY2NjO2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxuYnV0dG9uIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO2NvbG9yOiB3aGl0ZTtwYWRkaW5nOiAxNHB4IDIwcHg7bWFyZ2luOiA4cHggMDtib3JkZXI6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO3dpZHRoOiAxMDAlO31cbmJ1dHRvbjpob3ZlciB7b3BhY2l0eTogMC44O31cbi5jb250YWluZXIge3dpZHRoOjEwMCU7cGFkZGluZzogMTZweDt9XG4uZm9vdGVyIHtyaWdodDogMDtib3R0b206IDA7bGVmdDogMDtwYWRkaW5nOiAxcmVtO2JhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOndoaXRlO30iXX0= */");

/***/ }),

/***/ "./src/app/JobPortal/user/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/JobPortal/user/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user/user.service */ "./src/app/Services/user/user.service.ts");
/* harmony import */ var _Models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Models/user.model */ "./src/app/Models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userModel = new _Models_user_model__WEBPACK_IMPORTED_MODULE_3__["RegistrationModel"]();
        this.errmsgemail = false;
        this.errmsgrole = false;
    }
    ngOnInit() {
        this.userModel.role_id = 0;
        if (this.user = JSON.parse(localStorage.getItem('userData'))) {
            if (this.user.role_id == 2)
                this.router.navigate(['/jobs']);
            else
                this.router.navigate(['jobs/new']);
        }
    }
    register(value) {
        this.errmsgemail = false;
        this.errmsgrole = false;
        if (this.userModel.role_id != 0) {
            this.userService.userRegistration(this.userModel).subscribe((res) => {
                localStorage.setItem("userData", JSON.stringify(res.data));
                if (res.data.role_id == 2)
                    this.router.navigate(['/jobs']);
                else
                    this.router.navigate(['jobs/new']);
            }, (err) => {
                if (err.error.code = 422) {
                    this.errmsgemail = true;
                    this.message = err.error.errors.email[0];
                }
                else {
                    this.message = err.error.message;
                }
            });
        }
        else {
            this.errmsgrole = true;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _Services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/JobPortal/user/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/JobPortal/user/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/Models/job.model.ts":
/*!*************************************!*\
  !*** ./src/app/Models/job.model.ts ***!
  \*************************************/
/*! exports provided: PostJobModel, paginateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobModel", function() { return PostJobModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateModel", function() { return paginateModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PostJobModel {
}
class paginateModel {
    constructor() {
        this.page = 1;
        this.totalItem = 0;
    }
}


/***/ }),

/***/ "./src/app/Models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/Models/user.model.ts ***!
  \**************************************/
/*! exports provided: AuthenticationModel, RegistrationModel, VerifyEmailModel, resetPasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModel", function() { return AuthenticationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModel", function() { return RegistrationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailModel", function() { return VerifyEmailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordModel", function() { return resetPasswordModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthenticationModel {
}
class RegistrationModel {
}
class VerifyEmailModel {
}
class resetPasswordModel {
}


/***/ }),

/***/ "./src/app/Services/interceptor/interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Services/interceptor/interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: NoCacheHeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoCacheHeadersInterceptor", function() { return NoCacheHeadersInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoCacheHeadersInterceptor = class NoCacheHeadersInterceptor {
    intercept(req, next) {
        const authReq = req.clone({
            // Prevent caching in IE, in particular IE11.
            // See: https://support.microsoft.com/en-us/help/234067/how-to-prevent-caching-in-internet-explorer
            setHeaders: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache'
            }
        });
        return next.handle(authReq);
    }
};
NoCacheHeadersInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NoCacheHeadersInterceptor);



/***/ }),

/***/ "./src/app/Services/jobs/jobs.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/jobs/jobs.service.ts ***!
  \***********************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let JobService = class JobService {
    constructor(_http) {
        this._http = _http;
    }
    availableJobs(page) {
        this.user = JSON.parse(localStorage.getItem("userData"));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${this.user.token}`
            })
        };
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl);
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'jobs?page=' + page, this.httpOptions);
    }
    apply(uuid) {
        this.user = JSON.parse(localStorage.getItem("userData"));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${this.user.token}`
            })
        };
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'jobs/' + uuid + '/apply', null, this.httpOptions);
    }
    getAppliedJobs(page) {
        this.user = JSON.parse(localStorage.getItem("userData"));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${this.user.token}`
            })
        };
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'applied-jobs?page=' + page, this.httpOptions);
    }
    postJob(newJob) {
        this.user = JSON.parse(localStorage.getItem("userData"));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${this.user.token}`
            })
        };
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'jobs/new', newJob, this.httpOptions);
    }
    getPostedJobs(page) {
        this.user = JSON.parse(localStorage.getItem("userData"));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${this.user.token}`
            })
        };
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'posted-jobs?page=' + page, this.httpOptions);
    }
    getApplicants(uuid) {
        this.user = JSON.parse(localStorage.getItem("userData"));
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Authorization': `Bearer ${this.user.token}`
            })
        };
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'jobs/' + uuid + '/applicants', this.httpOptions);
    }
};
JobService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JobService);



/***/ }),

/***/ "./src/app/Services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Cache-Control': 'no-cache'
            })
        };
    }
    userRegistration(user) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'register', user, this.httpOptions);
    }
    userAuthentication(auth) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'login', auth, this.httpOptions);
    }
    userVerifyEmail(verify) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'forgot-password', verify, this.httpOptions);
    }
    userResetPassword(reset) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apirootUrl + 'reset-password', reset, this.httpOptions);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _JobPortal_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobPortal/user/login/login.component */ "./src/app/JobPortal/user/login/login.component.ts");
/* harmony import */ var _JobPortal_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JobPortal/user/register/register.component */ "./src/app/JobPortal/user/register/register.component.ts");
/* harmony import */ var _JobPortal_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobPortal/user/forgot-password/forgot-password.component */ "./src/app/JobPortal/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _JobPortal_candidate_applied_jobs_applied_jobs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JobPortal/candidate/applied-jobs/applied-jobs.component */ "./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.ts");
/* harmony import */ var _JobPortal_candidate_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JobPortal/candidate/available-jobs/available-jobs.component */ "./src/app/JobPortal/candidate/available-jobs/available-jobs.component.ts");
/* harmony import */ var _JobPortal_recruiter_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JobPortal/recruiter/post-job/post-job.component */ "./src/app/JobPortal/recruiter/post-job/post-job.component.ts");
/* harmony import */ var _JobPortal_recruiter_posted_jobs_posted_jobs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JobPortal/recruiter/posted-jobs/posted-jobs.component */ "./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.ts");
/* harmony import */ var _JobPortal_user_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JobPortal/user/logout/logout.component */ "./src/app/JobPortal/user/logout/logout.component.ts");
/* harmony import */ var _JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./JobPortal/user/auth.guard */ "./src/app/JobPortal/user/auth.guard.ts");
/* harmony import */ var _JobPortal_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JobPortal/page-not-found404/page-not-found404.component */ "./src/app/JobPortal/page-not-found404/page-not-found404.component.ts");













const routes = [
    { path: '', component: _JobPortal_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _JobPortal_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _JobPortal_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'forgot-password', component: _JobPortal_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'jobs', component: _JobPortal_candidate_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_7__["AvailableJobsComponent"], canActivate: [_JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'applied-jobs', component: _JobPortal_candidate_applied_jobs_applied_jobs_component__WEBPACK_IMPORTED_MODULE_6__["AppliedJobsComponent"], canActivate: [_JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'jobs/new', component: _JobPortal_recruiter_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_8__["PostJobComponent"], canActivate: [_JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'posted-jobs', component: _JobPortal_recruiter_posted_jobs_posted_jobs_component__WEBPACK_IMPORTED_MODULE_9__["PostedJobsComponent"], canActivate: [_JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'logout', component: _JobPortal_user_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"] },
    { path: '**', component: _JobPortal_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFound404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'first-project-web';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _JobPortal_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JobPortal/user/login/login.component */ "./src/app/JobPortal/user/login/login.component.ts");
/* harmony import */ var _JobPortal_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JobPortal/user/register/register.component */ "./src/app/JobPortal/user/register/register.component.ts");
/* harmony import */ var _Services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/user/user.service */ "./src/app/Services/user/user.service.ts");
/* harmony import */ var _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/jobs/jobs.service */ "./src/app/Services/jobs/jobs.service.ts");
/* harmony import */ var _JobPortal_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./JobPortal/user/forgot-password/forgot-password.component */ "./src/app/JobPortal/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _JobPortal_candidate_applied_jobs_applied_jobs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JobPortal/candidate/applied-jobs/applied-jobs.component */ "./src/app/JobPortal/candidate/applied-jobs/applied-jobs.component.ts");
/* harmony import */ var _JobPortal_candidate_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JobPortal/candidate/available-jobs/available-jobs.component */ "./src/app/JobPortal/candidate/available-jobs/available-jobs.component.ts");
/* harmony import */ var _JobPortal_recruiter_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./JobPortal/recruiter/post-job/post-job.component */ "./src/app/JobPortal/recruiter/post-job/post-job.component.ts");
/* harmony import */ var _JobPortal_recruiter_posted_jobs_posted_jobs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./JobPortal/recruiter/posted-jobs/posted-jobs.component */ "./src/app/JobPortal/recruiter/posted-jobs/posted-jobs.component.ts");
/* harmony import */ var _JobPortal_user_logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./JobPortal/user/logout/logout.component */ "./src/app/JobPortal/user/logout/logout.component.ts");
/* harmony import */ var _JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./JobPortal/user/auth.guard */ "./src/app/JobPortal/user/auth.guard.ts");
/* harmony import */ var _Services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Services/interceptor/interceptor.service */ "./src/app/Services/interceptor/interceptor.service.ts");
/* harmony import */ var _JobPortal_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./JobPortal/page-not-found404/page-not-found404.component */ "./src/app/JobPortal/page-not-found404/page-not-found404.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _JobPortal_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _JobPortal_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _JobPortal_user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
            _JobPortal_candidate_applied_jobs_applied_jobs_component__WEBPACK_IMPORTED_MODULE_12__["AppliedJobsComponent"],
            _JobPortal_candidate_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_13__["AvailableJobsComponent"],
            _JobPortal_recruiter_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_14__["PostJobComponent"],
            _JobPortal_recruiter_posted_jobs_posted_jobs_component__WEBPACK_IMPORTED_MODULE_15__["PostedJobsComponent"],
            _JobPortal_user_logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"],
            _JobPortal_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFound404Component"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbPaginationModule"]
        ],
        providers: [_Services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["NoCacheHeadersInterceptor"],
            _Services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _Services_jobs_jobs_service__WEBPACK_IMPORTED_MODULE_10__["JobService"],
            _JobPortal_user_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apirootUrl: 'http://127.0.0.1:8000/api/v1/'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vedantsharma/first-project-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map