"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var WeatherComponent = (function () {
    function WeatherComponent(http) {
        this.http = http;
        this.isSuccess = false;
    }
    WeatherComponent.prototype.getWeatherData = function () {
        var _this = this;
        console.log('getting weather data for location :' + this.address);
        this.http.get("/api/weather/" + this.address)
            .map(function (weather) { return weather.json(); })
            .subscribe(function (weatherObj) {
            _this.weatherObj = weatherObj;
            console.log('weatherObj :' + JSON.stringify(_this.weatherObj));
            _this.isSuccess = true;
        });
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'weather',
        templateUrl: '../html/weather.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map