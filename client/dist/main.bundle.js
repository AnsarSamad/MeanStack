webpackJsonp([1,4],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_story_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryComponent = (function () {
    function StoryComponent(activeModal, storyService) {
        this.activeModal = activeModal;
        this.storyService = storyService;
    }
    return StoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], StoryComponent.prototype, "featureId", void 0);
StoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'stories',
        template: "\n            \n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Hi there!</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n            <table class=\"table table-hover table-responsive table-bordered\" *ngIf=\"mode != 'addStories' \" >\n                        <thead>\n                            <tr>\n                                <th >Title</th>\n                                <th >Descr</th>\n                                <th >Storypoint</th>\n                                <th >Area</th>\n                                <th >Sprint</th>\n                                <th >Tasks</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let story of userStories\">\n                                <td><a>{{story.title}}</a></td>\n                                <td>{{story.descr}}</td>\n                                <td>{{story.storypoint}}</td>\n                                <td>{{story.area}}</td>\n                                <td>{{story.sprint}}</td>\n                                <td *ngIf =\"story.task == null\" >0</td>\n                                <td *ngIf =\"story.task != null\" > {{story.task.length}} </td>\n                                \n                                \n                            </tr>\n                    </tbody>\n                </table>\n\n\n            </div>\n            <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n        </div>\n    \n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_story_service__["a" /* StoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_story_service__["a" /* StoryService */]) === "function" && _b || Object])
], StoryComponent);

var _a, _b;
//# sourceMappingURL=stories.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Features; });
var Features = (function () {
    function Features(title, desc) {
        this.userstories = [];
        this.title = title;
        this.descr = desc;
    }
    return Features;
}());

//# sourceMappingURL=feature.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEventService = (function () {
    function AddEventService(http) {
        this.http = http;
    }
    AddEventService.prototype.saveEvent = function () {
        var eventData = {
            title: 'test',
            descr: 'test',
            place: 'test',
            fees: 123,
            tsk_title: 'test',
            tsk_content: 'test',
            tsk_price: 'test'
        };
        return this.http.post('http://localhost:3000/api/events/', eventData).map(function (response) { return response.json(); });
    };
    return AddEventService;
}());
AddEventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddEventService);

var _a;
//# sourceMappingURL=addevent.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('/api/events/')
            .map(function (result) { return result.json(); });
    };
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EventService);

var _a;
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoryService = (function () {
    function StoryService(http) {
        this.http = http;
    }
    StoryService.prototype.getStories = function () {
        return this.http.get('/api/userstory')
            .map(function (result) { return result.json(); });
    };
    StoryService.prototype.getStoriesByFeature = function (featureId) {
        console.log('story service featureId :' + featureId);
        return this.http.get('/api/userstory/' + featureId)
            .map(function (result) { return result.json(); });
    };
    return StoryService;
}());
StoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StoryService);

var _a;
//# sourceMappingURL=story.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskService = (function () {
    function AddTaskService(http) {
        this.http = http;
    }
    AddTaskService.prototype.addtask = function (task) {
        // this.http.post()
    };
    return AddTaskService;
}());
AddTaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddTaskService);

var _a;
//# sourceMappingURL=addtask.service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTask = function () {
        return this.http.get('/api/task')
            .map(function (result) { return result.json(); });
    };
    return TaskService;
}());
TaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TaskService);

var _a;
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 224;


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);



// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-app',
        template: "\n      \n        <router-outlet>    </router-outlet>\n        \n\n        "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_task_task_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_task_task_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_addtask_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_controller_event_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service_event_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_controller_addevent_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_service_addevent_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_controller_weather_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_controller_login_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_controller_register_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_controller_dashboard_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_controller_feature_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_task_addtask_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_service_feature_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_controller_fileUpload_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__controller_add_new_stories_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__controller_alerts_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__controller_stories_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_story_service__ = __webpack_require__(170);
/* unused harmony export routing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//index routing , redirect to login for the blank request
var indexRoutes = {
    path: '', component: __WEBPACK_IMPORTED_MODULE_14__app_controller_login_component__["a" /* LoginComponent */]
};
// for all invalid routers , it will redirect to login component
var fallbackRoutes = {
    path: '**', component: __WEBPACK_IMPORTED_MODULE_14__app_controller_login_component__["a" /* LoginComponent */]
};
// order is important, routes get called on the order which they defined
var routes = [
    indexRoutes,
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_15__app_controller_register_component__["a" /* RegisterComponent */] },
    {
        path: 'dash', component: __WEBPACK_IMPORTED_MODULE_16__app_controller_dashboard_component__["a" /* DashBoardcomponent */],
        children: [
            {
                path: '',
                redirectTo: 'feature',
                pathMatch: 'full'
            },
            {
                path: 'events',
                component: __WEBPACK_IMPORTED_MODULE_9__app_controller_event_component__["a" /* EventComponent */],
                children: [
                    {
                        path: 'addevent',
                        component: __WEBPACK_IMPORTED_MODULE_11__app_controller_addevent_component__["a" /* AddNewEventComponent */]
                    }
                ]
            },
            {
                path: 'task',
                component: __WEBPACK_IMPORTED_MODULE_3__app_task_task_component__["a" /* TaskComponent */],
                children: [
                    {
                        path: 'addtask',
                        component: __WEBPACK_IMPORTED_MODULE_8__task_addtask_component__["a" /* AddNewTaskComponent */]
                    }
                ]
            },
            {
                path: 'weather',
                component: __WEBPACK_IMPORTED_MODULE_13__app_controller_weather_component__["a" /* WeatherComponent */]
            },
            {
                path: 'feature',
                component: __WEBPACK_IMPORTED_MODULE_17__app_controller_feature_component__["a" /* FeatureComponent */],
                children: [{
                        path: 'user-story',
                        component: __WEBPACK_IMPORTED_MODULE_23__controller_add_new_stories_component__["a" /* AddNewStoriesComponent */]
                    }]
            },
            {
                path: 'uploads',
                component: __WEBPACK_IMPORTED_MODULE_20__app_controller_fileUpload_component__["a" /* FileUploadComponents */],
            }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(routes);
var firebaseConfig = {
    apiKey: "AIzaSyDp5PfXL2nQWqrKumXCuYUQSgVpW8HX9_U",
    authDomain: "tfsmean.firebaseapp.com",
    databaseURL: "https://tfsmean.firebaseio.com",
    projectId: "tfsmean",
    storageBucket: "tfsmean.appspot.com",
    messagingSenderId: "378897946454"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            routing,
            __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_task_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_10__app_service_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_12__app_service_addevent_service__["a" /* AddEventService */], __WEBPACK_IMPORTED_MODULE_18__app_task_addtask_service__["a" /* AddTaskService */], __WEBPACK_IMPORTED_MODULE_19__app_service_feature_services__["a" /* FeatureServices */], __WEBPACK_IMPORTED_MODULE_26__service_story_service__["a" /* StoryService */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__app_controller_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_task_task_component__["a" /* TaskComponent */],
            __WEBPACK_IMPORTED_MODULE_8__task_addtask_component__["a" /* AddNewTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_controller_event_component__["a" /* EventComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app_controller_addevent_component__["a" /* AddNewEventComponent */],
            __WEBPACK_IMPORTED_MODULE_13__app_controller_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_15__app_controller_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__app_controller_dashboard_component__["a" /* DashBoardcomponent */],
            __WEBPACK_IMPORTED_MODULE_17__app_controller_feature_component__["a" /* FeatureComponent */],
            __WEBPACK_IMPORTED_MODULE_20__app_controller_fileUpload_component__["a" /* FileUploadComponents */],
            __WEBPACK_IMPORTED_MODULE_23__controller_add_new_stories_component__["a" /* AddNewStoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__controller_alerts_component__["a" /* AlertsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__controller_stories_component__["a" /* StoryComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_25__controller_stories_component__["a" /* StoryComponent */]],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });

var firebaseConfig = (function () {
    function firebaseConfig() {
        var config = {
            apiKey: "AIzaSyDp5PfXL2nQWqrKumXCuYUQSgVpW8HX9_U",
            authDomain: "tfsmean.firebaseapp.com",
            databaseURL: "https://tfsmean.firebaseio.com",
            projectId: "tfsmean",
            storageBucket: "tfsmean.appspot.com",
            messagingSenderId: "378897946454"
        };
        __WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](config);
    }
    firebaseConfig.prototype.addUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password);
    };
    firebaseConfig.prototype.addToDatabase = function (child, id, obj) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase__["database"]().ref(child + '/' + id).set(obj);
    };
    firebaseConfig.prototype.addToStorage = function (child, fileName, file) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase__["storage"]().ref(child + '/' + fileName).put(file);
    };
    return firebaseConfig;
}());

//# sourceMappingURL=firebaseConfig.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return systemConstant; });
var systemConstant = (function () {
    function systemConstant() {
    }
    return systemConstant;
}());

systemConstant.INSERT = "insert";
systemConstant.DELETE = "delete";
//# sourceMappingURL=systemConstant.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_feature__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_userStory__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_feature_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_systemConstant__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewStoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewStoriesComponent = (function () {
    function AddNewStoriesComponent(featureService) {
        this.featureService = featureService;
        this.userStory = new __WEBPACK_IMPORTED_MODULE_2__model_userStory__["a" /* UserStories */]("", "");
        this.onVoted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    AddNewStoriesComponent.prototype.ngOnInit = function () {
    };
    AddNewStoriesComponent.prototype.addUserStory = function (form) {
        var _this = this;
        this.featureService.processUserStories(__WEBPACK_IMPORTED_MODULE_4__base_systemConstant__["a" /* systemConstant */].INSERT, this.userStory)
            .subscribe(function (result) {
            _this.selectedFeature.userstories.push(result._id);
            _this.featureService.processFeature(__WEBPACK_IMPORTED_MODULE_4__base_systemConstant__["a" /* systemConstant */].INSERT, _this.selectedFeature)
                .subscribe(function (result) {
                //this.onAlertAdded.emit({type: "success",message:"user_story_added"});
                _this.onVoted.emit({ type: "success", message: "User story added Succesfully ." });
                _this.userStory = new __WEBPACK_IMPORTED_MODULE_2__model_userStory__["a" /* UserStories */]("", "");
            });
        });
    };
    return AddNewStoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_feature__["a" /* Features */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_feature__["a" /* Features */]) === "function" && _a || Object)
], AddNewStoriesComponent.prototype, "selectedFeature", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], AddNewStoriesComponent.prototype, "onVoted", void 0);
AddNewStoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-add-new-stories',
        template: "\n  \n  <h3>Add Stories for Feature {{selectedFeature.title}}</h3>\n  <h4>No of Stories added to this Feature : {{selectedFeature.userstories.length }}</h4>\n\n\n <form  #userStoryForm=\"ngForm\" (ngSubmit)=\"addUserStory(userStoryForm)\">\n  <div class=\"form-group\">\n    <label for=\"title\">User Story Title</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\"  [(ngModel)]=userStory.title>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"descr\">User Story Desc</label>\n    <input type=\"text\" class=\"form-control\" id=\"descr\" name=\"descr\"  [(ngModel)]=userStory.descr>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"area\">User Story point</label>\n    <input type=\"text\" class=\"form-control\" id=\"storypoint\" name=\"storypoint\"  [(ngModel)]=userStory.storypoint>\n  </div> \n  <div class=\"form-group\">\n    <label for=\"area\">User Story Sprint</label>\n    <input type=\"text\" class=\"form-control\" id=\"sprint\" name=\"sprint\"  [(ngModel)]=userStory.sprint>\n  </div>                   \n  <div class=\"form-group\">\n    <label for=\"area\">User Story Area</label>\n    <input type=\"text\" class=\"form-control\" id=\"area\" name=\"area\"  [(ngModel)]=userStory.area>\n  </div> \n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n             \n</form>\n  \n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_feature_services__["a" /* FeatureServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_feature_services__["a" /* FeatureServices */]) === "function" && _b || Object])
], AddNewStoriesComponent);

var _a, _b;
//# sourceMappingURL=add-new-stories.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_addevent_service__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewEventComponent = (function () {
    // constructor(private http:Http){
    // }
    function AddNewEventComponent(addeventService) {
        this.addeventService = addeventService;
    }
    AddNewEventComponent.prototype.addEvent = function (form) {
        // const eventData = 
        //                 {
        //                     title:form.value.title,
        //                     descr:form.value.descr,
        //                     place:form.value.place,
        //                     fees:form.value.fees,
        //                     tsk_title:form.value.tsk_title,
        //                     tsk_content:form.value.tsk_content,
        //                     tsk_price:form.value.tsk_price
        //                 } 
        //     this.http.post('http://localhost:3000/api/events/',eventData)
        //     .map(result=>JSON.stringify(result));
        this.addeventService.saveEvent()
            .subscribe(function (response) { return console.log('event added'); });
    };
    return AddNewEventComponent;
}());
AddNewEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'newEvent',
        template: "\n    \n    \n    <form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleSelect1\">Example select</label>\n    <select class=\"form-control\" id=\"exampleSelect1\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleSelect2\">Example multiple select</label>\n    <select multiple class=\"form-control\" id=\"exampleSelect2\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n    \n    "
        //templateUrl:'../html/addevent.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_addevent_service__["a" /* AddEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_addevent_service__["a" /* AddEventService */]) === "function" && _a || Object])
], AddNewEventComponent);

var _a;
//# sourceMappingURL=addevent.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertsComponent = (function () {
    function AlertsComponent() {
        this.showAlerts = false;
        this.messageArray = [""];
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    return AlertsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Object)
], AlertsComponent.prototype, "alert", void 0);
AlertsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'alerts',
        template: "\n    \n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"alert.type == 'success' \">\n            <strong>{{alert.message}}</strong> \n        </div>\n        <div class=\"alert alert-info\" role=\"alert\"  *ngIf=\"alert.type == 'info' \">\n            <strong>{{alert.message}}</strong> \n        </div>\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"alert.type == 'warning' \">\n            <strong>{{alert.message}}</strong> \n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"alert.type == 'error' \">\n            <strong>{{alert.message}}</strong> \n        </div>\n            \n    "
    })
], AlertsComponent);

//# sourceMappingURL=alerts.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_Component_action__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardcomponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashBoardcomponent = (function (_super) {
    __extends(DashBoardcomponent, _super);
    function DashBoardcomponent() {
        var _this = _super.call(this) || this;
        _this.user = _super.prototype.getMember.call(_this).membername;
        return _this;
    }
    return DashBoardcomponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_Component_action__["a" /* ComponentAction */]));
DashBoardcomponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'dashboard',
        /*template:`
        
        <body>
          <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
          <link href="../css/dashboard.css" rel="stylesheet">
            <nav class="navbar navbar-inverse navbar-fixed-top">
             <div class="container-fluid">
                <div class="navbar-header">
                   <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                   <span class="sr-only">Toggle navigation</span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   </button>
                   <a class="navbar-brand" href="#">MeanStack</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                   <ul class="nav navbar-nav navbar-right">
                      <li><a href="#">Dashboard</a></li>
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">Help</a></li>
                   </ul>
                   <form class="navbar-form navbar-right">
                      <input type="text" class="form-control" placeholder="Search...">
                   </form>
                </div>
             </div>
          </nav>
          <div class="container-fluid">
             <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">
                   <ul class="nav nav-sidebar">
                      <li class="active"><a routerLink="events">Events <span class="sr-only">(current)</span></a></li>
                      <li><a routerLink="task">Task</a></li>
                      <li><a routerLink="weather">Weather</a></li>
                   </ul>
                </div>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <!-- loads event component -->
                   <router-outlet></router-outlet>
                </div>
             </div>
          </div>
        </body>
        `*/
        template: __webpack_require__(319)
    }),
    __metadata("design:paramtypes", [])
], DashBoardcomponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_event_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = (function () {
    function EventComponent(eventService) {
        var _this = this;
        this.mode = "start";
        eventService.getEvents()
            .subscribe(function (result) {
            _this.events = result;
        });
    }
    return EventComponent;
}());
EventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'event',
        template: "\n    \n        <div>\n            <button routerLink=\"../events\" class=\"btn btn-primary\">All Events</button>\n            <button routerLink=\"addevent\" class=\"btn btn-primary\">Add Events</button>\n        </div>\n            <!-- loads child component list task and add new task -->\n            <router-outlet></router-outlet>\n\n                    <table class=\"table table-hover table-responsive table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>Title</th>\n                                <th>Place</th>\n                                <th>Tasks</th>\n                                <th>Fees</th>\n                                <th>Description</th>\n                                <th>Created</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let evnt of events\">\n                                <td>{{evnt.title}}</td>\n                                <td>{{evnt.place}}</td>\n                                <td>{{evnt.task.title}}</td>\n                                <td>{{evnt.fees}}</td>\n                                <td>{{evnt.descr}}</td>\n                                <td>{{evnt.created}}</td>\n                                <td><a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a href=\"#\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\n                            </tr>\n                    </tbody>\n                </table>\n\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_event_service__["a" /* EventService */]) === "function" && _a || Object])
], EventComponent);

var _a;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_feature_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_Component_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_feature__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stories_component__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeatureComponent = (function (_super) {
    __extends(FeatureComponent, _super);
    function FeatureComponent(featureService, modalService) {
        var _this = _super.call(this) || this;
        _this.featureService = featureService;
        _this.modalService = modalService;
        _this.mode = "start";
        _this.isEditMode = false;
        _this.selectedFeature = new __WEBPACK_IMPORTED_MODULE_3__model_feature__["a" /* Features */]("", "");
        _this.testNum = 2;
        _this.alertObj = null;
        _this.getFeatures();
        return _this;
    }
    FeatureComponent.prototype.getFeatures = function () {
        var _this = this;
        this.featureService.getFeatures()
            .subscribe(function (result) {
            _this.features = result;
            console.log('features :' + JSON.stringify(_this.features));
        });
    };
    FeatureComponent.prototype.showAddFeature = function () {
        this.selectedFeature = new __WEBPACK_IMPORTED_MODULE_3__model_feature__["a" /* Features */]("", "");
        this.mode = "insert";
    };
    FeatureComponent.prototype.listFeature = function () {
        this.getFeatures();
        this.mode = "start";
    };
    FeatureComponent.prototype.processFeature = function (form) {
        var _this = this;
        this.selectedFeature.createdby = _super.prototype.getMember.call(this).memberId;
        this.selectedFeature.created = new Date();
        this.selectedFeature.modified = new Date();
        this.featureService.processFeature(this.mode, this.selectedFeature)
            .subscribe(function (result) {
            // push to array only if insert mode  , otherwise it will make duplicates since we returning features from server for both insert and update (using feature.save())
            if (_this.mode == "insert") {
                _this.features.push(result);
            }
        });
    };
    FeatureComponent.prototype.editFeature = function (featureId) {
        this.selectedFeature = this.getFeature(featureId);
        this.mode = "update";
    };
    FeatureComponent.prototype.deleteFeature = function (feature) {
        var _this = this;
        this.mode = "delete";
        this.featureService.processFeature(this.mode, feature)
            .subscribe(function (result) {
            var index = _this.features.indexOf(feature);
            if (index !== -1) {
                _this.features.splice(index, 1);
            }
        });
    };
    FeatureComponent.prototype.getFeature = function (featureId) {
        var tempFeature;
        for (var i = 0; i < this.features.length; i++) {
            tempFeature = this.features[i];
            if (tempFeature._id == featureId) {
                return tempFeature;
            }
        }
    };
    FeatureComponent.prototype.open = function (featureId) {
        console.log('opening feature id:' + featureId);
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__stories_component__["a" /* StoryComponent */]);
        modalRef.componentInstance.featureId = featureId;
        this.featureService.getStoriesByFeature(featureId)
            .subscribe(function (result) {
            modalRef.componentInstance.userStories = result;
        });
    };
    FeatureComponent.prototype.addstories = function (featureId) {
        this.selectedFeature = this.getFeature(featureId);
        this.mode = "addStories";
    };
    FeatureComponent.prototype.showAlerts = function (alert) {
        this.alertObj = alert;
    };
    return FeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_Component_action__["a" /* ComponentAction */]));
FeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'feature',
        template: "\n    \n        <alerts *ngIf=\"alertObj != null\" [alert]=\"alertObj\" ></alerts>\n        <div>\n            <button class=\"btn btn-primary\" (click)=\"listFeature()\">All Features</button>\n            <button class=\"btn btn-primary\" (click)=\"showAddFeature()\" >Add Features</button>\n        </div>\n        {{enableAddFeature}}\n            <!-- loads child component list task and add new task -->\n            <router-outlet></router-outlet>\n\n            <form *ngIf=\"mode == 'insert' || mode == 'update' \" #featureForm=\"ngForm\" (ngSubmit)=\"processFeature(featureForm)\">\n                    <div class=\"form-group\">\n                        <label for=\"title\">Feature Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Enter Feature Title\" [(ngModel)]=selectedFeature.title>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"descr\">Feature Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"descr\" name=\"descr\" placeholder=\"Enter Feature Description\" [(ngModel)]=selectedFeature.descr>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"area\">Feature Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"area\" name=\"area\" placeholder=\"Enter Feature Area\" [(ngModel)]=selectedFeature.area>\n                    </div>                   \n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    \n                </form>\n                <br/>\n                <app-add-new-stories  (onVoted)=\"showAlerts($event)\" [selectedFeature]=\"selectedFeature\" [hidden]=\"mode != 'addStories' \"></app-add-new-stories>\n\n                    <table class=\"table table-hover table-responsive table-bordered\" *ngIf=\"mode != 'addStories' \" >\n                        <thead>\n                            <tr>\n                                <th >Title</th>\n                                <th >Descr</th>\n                                <th >Area</th>\n                                <th >User Stories</th>\n                                <th ></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let feature of features\">\n                                <td><a  href=\"javascript:void(0);\" (click)=addstories([feature._id])>{{feature.title}}</a></td>\n                                <td>{{feature.descr}}</td>\n                                <td>{{feature.area}}</td>\n                                <td *ngIf =\"feature.userstories == null\" >0</td>\n                                <td *ngIf =\"feature.userstories != null\" ><a href=\"javscript:void(0);\" (click)=\"open(feature._id)\" > {{feature.userstories.length}} </a> </td>\n                                <td><a class='btn btn-info btn-xs'  (click)=\"editFeature(feature._id)\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a (click)=\"deleteFeature(feature)\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\n                            </tr>\n                    </tbody>\n                </table>\n\n\n    <button type=\"button\"  *ngIf=\"mode != 'addStories' \" class=\"btn btn-default\" (click)=\"open()\">Open me!</button>\n\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_feature_services__["a" /* FeatureServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_feature_services__["a" /* FeatureServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], FeatureComponent);

var _a, _b;
//# sourceMappingURL=feature.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadComponents = (function () {
    function FileUploadComponents() {
        var _this = this;
        var config = {
            apiKey: "AIzaSyDp5PfXL2nQWqrKumXCuYUQSgVpW8HX9_U",
            authDomain: "tfsmean.firebaseapp.com",
            databaseURL: "https://tfsmean.firebaseio.com",
            projectId: "tfsmean",
            storageBucket: "tfsmean.appspot.com",
            messagingSenderId: "378897946454"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
        this.storage = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]();
        this.database = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]();
        var storageRef = this.storage.ref();
        var imgRef = storageRef.child('images/Koala.jpg');
        imgRef.getDownloadURL().then(function (url) {
            _this.image = url;
        });
    }
    FileUploadComponents.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            var storageRef = this.storage.ref();
            var imgRef = storageRef.child('images/' + file.name);
            imgRef.put(file).then(function (snapshot) {
                var metaData = {
                    "bucket": snapshot.metadata.bucket, "fullPath": snapshot.metadata.fullPath,
                    "name": snapshot.metadata.name, "size": snapshot.metadata.size,
                    "contentType": snapshot.metadata.contentType,
                    "downloadURLs": snapshot.metadata.downloadURLs[0]
                };
                _this.database.ref('images/' + snapshot.metadata.generation).set(metaData);
            });
        }
    };
    return FileUploadComponents;
}());
FileUploadComponents = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'uploads',
        template: "\n                <script src=\"assets/js/upload.js\"></script>\n                 <link href=\"assets/css/upload.css\" rel=\"stylesheet\">\n                 <div class=\"fileupload fileupload-new\" data-provides=\"fileupload\">\n                    <span class=\"btn btn-primary btn-file\"><span class=\"fileupload-new\">Select file</span>\n                    <span class=\"fileupload-exists\">Change</span>         <input type=\"file\" id=\"file\" multiple (change)=\"fileChange($event)\" /></span>\n                    <span class=\"fileupload-preview\"></span>\n                    <a href=\"#\" class=\"close fileupload-exists\" data-dismiss=\"fileupload\" style=\"float: none\">\u00D7</a>\n                    <button type=\"button\" class=\"btn btn-default\">Upload</button>\n                </div>\n                <img src=\"{{image}}\"/>\n                \n                "
    }),
    __metadata("design:paramtypes", [])
], FileUploadComponents);

//# sourceMappingURL=fileUpload.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Component_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_member__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(http, router) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.isloggedIn = true;
        return _this;
    }
    LoginComponent.prototype.validate = function (ngform) {
        var _this = this;
        var user = ngform.value.inputEmail;
        this.http.post('/api/validate/login', { email: ngform.value.inputEmail, password: ngform.value.inputPassword })
            .map(function (result) { return result.json(); })
            .subscribe(function (result) {
            _this.isloggedIn = result.isvalid;
            var member = new __WEBPACK_IMPORTED_MODULE_4__base_member__["a" /* Member */](result.userID, user, result.isadmine);
            _super.prototype.setMember.call(_this, member);
            if (_this.isloggedIn) {
                _this.router.navigate(['./dash']);
            }
        });
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_Component_action__["a" /* ComponentAction */]));
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'login',
        template: "\n    \n        <link href=\"assets/css/signin.css\" rel=\"stylesheet\">\n       \n        <div class=\"alert alert-danger\" *ngIf=\"!isloggedIn\" role=\"alert\">\n            <strong>Oh snap!</strong> Not a valid user . Please try again.\n        </div>\n\n\n        <div class=\"container\" *ngIf=\"!register\">\n            <form #signinForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"validate(signinForm)\" onsubmit=\"return false\">\n            <h2 class=\"form-signin-heading\">Please sign in</h2>\n            <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n            <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus ngModel>\n            <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n            <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required ngModel>\n            <div class=\"checkbox\">\n                <label>\n                <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                </label>\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n            <button type=\"button\" class=\"btn btn-link\" routerLink=\"/register\" >Create new Account</button>\n            </form>\n        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Component_action__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_member__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_firebaseConfig__ = __webpack_require__(235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(http, router) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.isSuccess = true;
        return _this;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.http.post('api/validate/register/', { email: this.email, password: this.password })
            .subscribe(function (response) {
            _this.isSuccess = response.json().success;
            if (_this.isSuccess) {
                var member = new __WEBPACK_IMPORTED_MODULE_4__base_member__["a" /* Member */](_this.email, "false", response.json().userID); //isadmine:false
                _super.prototype.setMember.call(_this, member);
                // add user to firebase
                var firebase = new __WEBPACK_IMPORTED_MODULE_5__base_firebaseConfig__["a" /* firebaseConfig */]();
                var userObj = { "userId": response.json().userID, "email": _this.email };
                firebase.addToDatabase('user', response.json().userID, userObj);
                firebase.addUser(_this.email, _this.password).catch(function (error) {
                    var errorMessage = error.message;
                    alert(errorMessage);
                });
                _this.router.navigate(['./dash']);
            }
        });
    };
    return RegisterComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_Component_action__["a" /* ComponentAction */]));
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'signup',
        template: "\n\n        <link href=\"assets/css/signin.css\" rel=\"stylesheet\">\n   \n        <div class=\"alert alert-danger fade in\" [class.hidden]=\"isSuccess\">\n            <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>\n            <strong>Error!</strong> This User Already Registered . please Sign in.\n        </div>\n        <div class=\"container\">\n            <form class=\"form-signin\" (ngSubmit)=\"register()\">\n                <h2 class=\"form-signin-heading\">Please sign Up</h2>\n                <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n                <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"email\" required autofocus>\n                <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n                <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" required>\n                <label for=\"confirmpassword\" class=\"sr-only\">Password</label>\n                <input type=\"password\" id=\"confirmpassword\" name=\"confirmpassword\" class=\"form-control\" placeholder=\"Confirm Password\" required>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign Up</button>\n                <button type=\"button\" class=\"btn btn-link\" routerLink=\"\" >Login</button>\n            </form>\n        </div>\n    \n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent(http) {
        this.http = http;
        this.isSuccess = false;
    }
    WeatherComponent.prototype.getWeatherData = function () {
        var _this = this;
        this.http.get("/api/weather/" + this.address)
            .map(function (weather) { return weather.json(); })
            .subscribe(function (weatherObj) {
            _this.weatherObj = weatherObj;
            _this.isSuccess = true;
        });
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'weather',
        template: __webpack_require__(320)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WeatherComponent);

var _a;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStories; });
var UserStories = (function () {
    function UserStories(title, desc) {
        this.title = title;
        this.descr = desc;
    }
    return UserStories;
}());

//# sourceMappingURL=userStory.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addtask_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewTaskComponent = (function () {
    function AddNewTaskComponent(addTaskService) {
        this.addTaskService = addTaskService;
    }
    AddNewTaskComponent.prototype.addTask = function (form) {
        // const task = new Task(form.value.title,false);
        // this.addTaskService.addtask(task);
    };
    return AddNewTaskComponent;
}());
AddNewTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'newtask',
        template: "\n    \n        \n    <form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleSelect1\">Example select</label>\n    <select class=\"form-control\" id=\"exampleSelect1\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleSelect2\">Example multiple select</label>\n    <select multiple class=\"form-control\" id=\"exampleSelect2\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleTextarea\">Example textarea</label>\n    <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputFile\">File input</label>\n    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n    <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n    \n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__addtask_service__["a" /* AddTaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__addtask_service__["a" /* AddTaskService */]) === "function" && _a || Object])
], AddNewTaskComponent);

var _a;
//# sourceMappingURL=addtask.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = (function () {
    function TaskComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTask().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    TaskComponent.prototype.addTask = function () {
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'task',
        template: "\n    \n        <div>\n            <button routerLink=\"../task\" class=\"btn btn-primary\">All Task</button>\n            <button routerLink=\"addtask\" class=\"btn btn-primary\">Add Task</button>\n        </div>\n            <!-- loads child component list task and add new task -->\n            <router-outlet></router-outlet>\n\n                    <table class=\"table table-hover table-responsive table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>Title</th>\n                                <th>Activity</th>\n                                <th>Status</th>\n                                <th>AssignTo</th>\n                                <th>Sprint</th>\n                                <th>Hours</th>\n                                <th class=\"text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tr *ngFor=\"let task of tasks\">\n                            <td>{{task.title}}</td>\n                            <td>{{task.activity}}</td>\n                            <td>{{task.status}}</td>\n                            <td>{{task.assignto}}</td>\n                            <td>{{task.sprint}}</td>\n                            <td>{{task.hours}}</td>\n                            <td class=\"text-center\"><a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a href=\"#\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\n                        </tr>\n                    </table>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]) === "function" && _a || Object])
], TaskComponent);

var _a;
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"author\" content=\"\">\r\n    <link rel=\"icon\" href=\"../../favicon.ico\">\r\n\r\n    <title>Dashboard Template for Bootstrap</title>\r\n\r\n\r\n\r\n    <!-- Custom styles for this template -->\r\n    <link href=\"assets/css/dashboard.css\" rel=\"stylesheet\">\r\n  </head>\r\n\r\n  <body>\r\n    <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n      <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          \r\n        </ul>\r\n        <form class=\"form-inline mt-2 mt-md-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n    </nav>\r\n\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" [routerLink]=\"['feature']\">Features <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['task']\">Task</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['events']\">Events</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['weather']\">Weather</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['uploads']\">Upload</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n\r\n        <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\r\n          <router-outlet></router-outlet>\r\n        </main>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <form class=\"navbar-form\" role=\"search\">\r\n    <div class=\"input-group add-on\">\r\n      <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" id=\"srch-term\" type=\"text\"  [(ngModel)]=\"address\" id=\"address\" name=\"address\">\r\n      <div class=\"input-group-btn\">\r\n        <button class=\"btn btn-default\" type=\"submit\" (click)=\"getWeatherData()\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <!-- This file has been downloaded from Bootsnipp.com. Enjoy! -->\r\n    <title>Boostrap Weather + Display Flex - Bootsnipp.com</title>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n    <style type=\"text/css\">\r\n        body {\r\n    background: #f2f2f2;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin: 0;\r\n\tpadding: 95px 0;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tfont-weight: 200;\r\n}\r\n\r\n.row-no-gutter {\r\n\tmargin-right: 0;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.row-no-gutter [class*=\"col-\"] {\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n}\r\n\r\n\r\n#card {\r\n\tbackground: #fff;\r\n\tposition: relative;\r\n\r\n\t-webkit-box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);\r\n\t-moz-box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);\r\n\tbox-shadow: 0px 1px 10px 0px rgba(207,207,207,1);\r\n\r\n\t-webkit-transition: all 0.5s ease;\r\n\t-moz-transition: all 0.5s ease;\r\n\t-ms-transition: all 0.5s ease;\r\n\t-o-transition: all 0.5s ease;\r\n\ttransition: all 0.5s ease;\t\r\n}\r\n\r\n.city-selected {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tmin-height: 200px;\r\n\tbackground: #3D6AA2;\r\n}\r\n\r\narticle {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tcolor: #fff;\r\n\tpadding: 20px;\r\n\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: flex;\r\n\t-webkit-flex-direction: row;\r\n\t-ms-flex-direction: row;\r\n\tflex-direction: row;\r\n\t-webkit-flex-wrap: wrap;\r\n\t-ms-flex-wrap: wrap;\r\n\tflex-wrap: wrap;\r\n\t-webkit-justify-content: space-between;\r\n\t-ms-flex-pack: justify;\r\n\tjustify-content: space-between;\r\n\t-webkit-align-content: flex-start;\r\n\t-ms-flex-line-pack: start;\r\n\talign-content: flex-start;\r\n\t-webkit-align-items: flex-start;\r\n\t-ms-flex-align: start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n.info .city,\r\n.night {\r\n\tfont-size: 24px;\r\n\tfont-weight: 200;\r\n\tposition: relative;\r\n\r\n\r\n\t-webkit-order: 0;\r\n\t-ms-flex-order: 0;\r\n\torder: 0;\r\n\t-webkit-flex: 0 1 auto;\r\n\t-ms-flex: 0 1 auto;\r\n\tflex: 0 1 auto;\r\n\t-webkit-align-self: auto;\r\n\t-ms-flex-item-align: auto;\r\n\talign-self: auto;\r\n}\r\n\r\n.info .city:after {\r\n\tcontent: '';\r\n\twidth: 15px;\r\n\theight: 2px;\r\n\tbackground: #fff;\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.city span {\r\n\tcolor: #fff;\r\n\tfont-size: 13px;\r\n\tfont-weight: bold;\r\n\r\n\ttext-transform: lowercase;\r\n\ttext-align: left;\r\n}\r\n\r\n.night {\r\n\tfont-size: 15px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.icon {\r\n\twidth: 84px;\r\n\theight: 84px;\r\n\t-webkit-order: 0;\r\n\t-ms-flex-order: 0;\r\n\torder: 0;\r\n\t-webkit-flex: 0 0 auto;\r\n\t-ms-flex: 0 0 auto;\r\n\tflex: 0 0 auto;\r\n\t-webkit-align-self: center;\r\n\t-ms-flex-item-align: center;\r\n\talign-self: center;\r\n\r\n\toverflow: visible;\r\n\r\n}\r\n\r\n\r\n.temp {\r\n\tfont-size: 73px;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tfont-weight: bold;\r\n}\r\n\r\nsvg {\r\n\tcolor: #fff;\r\n\tfill: currentColor;\r\n}\r\n\r\n\r\n.wind svg {\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\tmargin-top: 20px;\r\n\tmargin-right: 10px;\r\n\tvertical-align: bottom;\r\n}\r\n\r\n.wind span {\r\n\tfont-size: 13px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.city-selected:hover figure {\r\n\topacity: 0.4;\r\n}\r\n\r\n\r\nfigure {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.1;\r\n    z-index: 1;\r\n\r\n    -webkit-transition: all 0.5s ease;\r\n    -moz-transition: all 0.5s ease;\r\n    -ms-transition: all 0.5s ease;\r\n    -o-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.days .row [class*=\"col-\"]:nth-child(2) .day  {\r\n    border-width: 0 1px 0 1px;\r\n    border-style: solid;\r\n    border-color: #eaeaea;\r\n}\r\n\r\n.days .row [class*=\"col-\"] {\r\n\t-webkit-transition: all 0.5s ease;\r\n\t-moz-transition: all 0.5s ease;\r\n\t-ms-transition: all 0.5s ease;\r\n\t-o-transition: all 0.5s ease;\r\n\ttransition: all 0.5s ease;\t\r\n}\r\n\r\n.days .row [class*=\"col-\"]:hover{\r\n\tbackground: #eaeaea;\r\n}\r\n\r\n.day {\r\n\tpadding: 10px 0px;\r\n\ttext-align: center;\r\n\r\n}\r\n\r\n.day h1 {\r\n\tfont-size: 14px;\r\n\ttext-transform: uppercase;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.day svg {\r\n\tcolor: #000;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n}\r\n    </style>\r\n \r\n</head>\r\n<body>\r\n    <div class=\"container\" *ngIf=\"isSuccess\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t<div id=\"card\" class=\"weater\">\r\n\t\t\t\t\t<div class=\"city-selected\">\r\n\t\t\t\t\t\t<article>\r\n\r\n\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t<div class=\"city\"><span>City:</span> {{weatherObj?.address}}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"night\">{{weatherObj?.humidity}}</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"temp\">{{weatherObj?.temperature}}°C</div>\r\n\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<figure style=\"background-image: url(http://136.243.1.253/~creolitic/bootsnipp/home.jpg)\"></figure>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<script type=\"text/javascript\">\r\n\r\n</script>\r\n</body>\r\n</html>"

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentAction; });

var ComponentAction = (function () {
    function ComponentAction() {
    }
    ComponentAction.prototype.setMember = function (member) {
        ComponentAction.member = member;
    };
    ComponentAction.prototype.getMember = function () {
        if (ComponentAction.member == null || typeof ComponentAction.member == 'undefined') {
            return new __WEBPACK_IMPORTED_MODULE_0__member__["a" /* Member */]("", "false", "");
        }
        else {
            return ComponentAction.member;
        }
    };
    return ComponentAction;
}());

//# sourceMappingURL=Component.action.js.map

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(225);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member(memberId, name, admine) {
        this.memberId = memberId;
        this.membername = name;
        this.isadmine = admine;
    }
    return Member;
}());

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureServices = (function () {
    function FeatureServices(http) {
        this.http = http;
    }
    FeatureServices.prototype.getFeatures = function () {
        return this.http.get('/api/feature')
            .map(function (result) { return result.json(); });
    };
    FeatureServices.prototype.processFeature = function (mode, feature) {
        return this.http.post('/api/feature', { "mode": mode, "feature": feature })
            .map(function (result) { return result.json(); });
    };
    FeatureServices.prototype.processUserStories = function (mode, stories) {
        return this.http.post('/api/userstory', { "mode": mode, "userstory": stories })
            .map(function (result) { return result.json(); });
    };
    FeatureServices.prototype.getStoriesByFeature = function (featureId) {
        console.log('story service featureId :' + featureId);
        return this.http.get('/api/userstory/' + featureId)
            .map(function (result) { return result.json(); });
    };
    return FeatureServices;
}());
FeatureServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FeatureServices);

var _a;
//# sourceMappingURL=feature.services.js.map

/***/ })

},[581]);
//# sourceMappingURL=main.bundle.js.map