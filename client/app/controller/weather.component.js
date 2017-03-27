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
Object.defineProperty(exports, "__esModule", { value: true });
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
        moduleId: module.id.toString(),
        selector: 'weather',
        template: "\n    \n    \n\n<link rel=\"stylesheet\" href=\"../css/weather.css\">\n<body>\n\n  <form class=\"navbar-form\" role=\"search\">\n    <div class=\"input-group add-on\">\n      <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" id=\"srch-term\" type=\"text\"  [(ngModel)]=\"address\" id=\"address\" name=\"address\">\n      <div class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"submit\" (click)=\"getWeatherData()\"><i class=\"glyphicon glyphicon-search\"></i></button>\n      </div>\n    </div>\n  </form>\n\n    <div class=\"container\" *ngIf=\"isSuccess\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div id=\"card\" class=\"weater\">\n\t\t\t\t\t<div class=\"city-selected\">\n\t\t\t\t\t\t<article>\n\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<div class=\"city\"><span>City:</span> {{weatherObj?.address}}</div>\n\t\t\t\t\t\t\t\t<div class=\"night\">{{weatherObj?.humidity}}</div>\n\n\t\t\t\t\t\t\t\t<div class=\"temp\">{{weatherObj?.temperature}}\u00B0</div>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t</article>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</body>\n\n    \n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map