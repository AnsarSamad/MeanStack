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
    return FeatureServices;
}());
FeatureServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FeatureServices);
exports.FeatureServices = FeatureServices;
//# sourceMappingURL=feature.services.js.map