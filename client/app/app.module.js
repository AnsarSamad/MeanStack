"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var task_service_1 = require("../app/task/task.service");
var task_component_1 = require("../app/task/task.component");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var addtask_component_1 = require("./task/addtask.component");
var event_component_1 = require("../app/controller/event.component");
var event_service_1 = require("../app/service/event.service");
var addevent_component_1 = require("../app/controller/addevent.component");
var addevent_service_1 = require("../app/service/addevent.service");
var weather_component_1 = require("../app/controller/weather.component");
var login_component_1 = require("../app/controller/login.component");
var register_component_1 = require("../app/controller/register.component");
var dashboard_component_1 = require("../app/controller/dashboard.component");
var feature_component_1 = require("../app/controller/feature.component");
var addtask_service_1 = require("../app/task/addtask.service");
var feature_services_1 = require("../app/service/feature.services");
//index routing , redirect to login for the blank request
var indexRoutes = {
    path: '', component: login_component_1.LoginComponent
};
// for all invalid routers , it will redirect to login component
var fallbackRoutes = {
    path: '**', component: login_component_1.LoginComponent
};
// order is important, routes get called on the order which they defined
var routes = [
    indexRoutes,
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'dash', component: dashboard_component_1.DashBoardcomponent,
        children: [
            {
                path: '',
                redirectTo: 'feature',
                pathMatch: 'full'
            },
            {
                path: 'events',
                component: event_component_1.EventComponent,
                children: [
                    {
                        path: 'addevent',
                        component: addevent_component_1.AddNewEventComponent
                    }
                ]
            },
            {
                path: 'task',
                component: task_component_1.TaskComponent,
                children: [
                    {
                        path: 'addtask',
                        component: addtask_component_1.AddNewTaskComponent
                    }
                ]
            },
            {
                path: 'weather',
                component: weather_component_1.WeatherComponent
            },
            {
                path: 'feature',
                component: feature_component_1.FeatureComponent,
            },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            exports.routing
        ],
        providers: [task_service_1.TaskService, event_service_1.EventService, addevent_service_1.AddEventService, addtask_service_1.AddTaskService, feature_services_1.FeatureServices],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            task_component_1.TaskComponent,
            addtask_component_1.AddNewTaskComponent,
            event_component_1.EventComponent,
            addevent_component_1.AddNewEventComponent,
            weather_component_1.WeatherComponent,
            register_component_1.RegisterComponent,
            dashboard_component_1.DashBoardcomponent,
            feature_component_1.FeatureComponent,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map