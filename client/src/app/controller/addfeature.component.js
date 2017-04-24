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
var feature_services_1 = require("../service/feature.services");
var AddFeatureComponent = (function () {
    function AddFeatureComponent(featureService) {
        this.featureService = featureService;
    }
    AddFeatureComponent.prototype.addFeature = function (form) {
        var title = form.value.title;
        var descr = form.value.descr;
        var area = form.value.area;
        this.featureService.addFeature(title, descr, area);
    };
    return AddFeatureComponent;
}());
AddFeatureComponent = __decorate([
    core_1.Component({
        selector: 'addfeatures',
        template: "\n    \n     \n    <link rel=\"stylesheet\" href=\"../../bower_components/bootstrap/dist/css/bootstrap.min.css\">\n    <form #featureForm=\"ngForm\" (ngSubmit)=\"addFeature(featureForm)\">\n        <div class=\"form-group\">\n            <label for=\"title\">Feature Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Enter Feature Title\" ngModel>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"descr\">Feature Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"descr\" name=\"descr\" placeholder=\"Enter Feature Description\" ngModel>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"area\">Feature Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"area\" name=\"area\" placeholder=\"Enter Feature Area\" ngModel>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n    \n    \n    "
    }),
    __metadata("design:paramtypes", [feature_services_1.FeatureServices])
], AddFeatureComponent);
exports.AddFeatureComponent = AddFeatureComponent;
//# sourceMappingURL=addfeature.component.js.map