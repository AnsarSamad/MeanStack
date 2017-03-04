"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const task_service_1 = require("../app/task/task.service");
const task_component_1 = require("../app/task/task.component");
const app_component_1 = require("./app.component");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const addtask_component_1 = require("./task/addtask.component");
const event_component_1 = require("../app/controller/event.component");
const event_service_1 = require("../app/service/event.service");
const addevent_component_1 = require("../app/controller/addevent.component");
const addevent_service_1 = require("../app/service/addevent.service");
const weather_component_1 = require("../app/controller/weather.component");
const login_component_1 = require("../app/controller/login.component");
const register_component_1 = require("../app/controller/register.component");
const dashboard_component_1 = require("../app/controller/dashboard.component");
//index routing , redirect to login for the blank request
const indexRoutes = {
    path: '', component: login_component_1.LoginComponent
};
// for all invalid routers , it will redirect to login component
const fallbackRoutes = {
    path: '**', component: login_component_1.LoginComponent
};
// order is important, routes get called on the order which they defined
const routes = [
    indexRoutes,
    { path: 'weather', component: weather_component_1.WeatherComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'dash', component: dashboard_component_1.DashBoardcomponent,
        children: [
            {
                path: '',
                redirectTo: 'events',
                pathMatch: 'full'
            },
            {
                path: 'events',
                component: event_component_1.EventComponent
            },
            {
                path: 'addevent',
                component: addevent_component_1.AddNewEventComponent
            },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            exports.routing
        ],
        providers: [task_service_1.TaskService, event_service_1.EventService, addevent_service_1.AddEventService],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            task_component_1.TaskComponent,
            addtask_component_1.AddNewTaskComponent,
            event_component_1.EventComponent,
            addevent_component_1.AddNewEventComponent,
            weather_component_1.WeatherComponent,
            register_component_1.RegisterComponent,
            dashboard_component_1.DashBoardcomponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map