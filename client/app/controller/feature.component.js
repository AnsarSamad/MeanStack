"use strict";
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
var core_1 = require("@angular/core");
var feature_services_1 = require("../service/feature.services");
var Component_action_1 = require("../base/Component.action");
var feature_1 = require("../model/feature");
var FeatureComponent = (function (_super) {
    __extends(FeatureComponent, _super);
    function FeatureComponent(featureService) {
        var _this = _super.call(this) || this;
        _this.featureService = featureService;
        _this.mode = "start";
        _this.isEditMode = false;
        _this.getFeatures();
        return _this;
    }
    FeatureComponent.prototype.getFeatures = function () {
        var _this = this;
        this.featureService.getFeatures()
            .subscribe(function (result) {
            console.log('features from mongo :' + JSON.stringify(result));
            _this.features = result;
            console.log('this features :' + JSON.stringify(_this.features));
        });
    };
    FeatureComponent.prototype.showAddFeature = function () {
        this.selectedFeature = new feature_1.Features("", "");
        this.mode = "insert";
    };
    FeatureComponent.prototype.listFeature = function () {
        this.getFeatures();
        this.mode = "start";
    };
    FeatureComponent.prototype.processFeature = function (form) {
        var _this = this;
        console.log('memberId :' + _super.prototype.getMember.call(this).memberId);
        this.selectedFeature.createdby = _super.prototype.getMember.call(this).memberId;
        this.selectedFeature.created = new Date();
        this.selectedFeature.modified = new Date();
        console.log('this.selectedFeature  :' + JSON.stringify(this.selectedFeature));
        this.featureService.processFeature(this.mode, this.selectedFeature)
            .subscribe(function (result) {
            console.log('new feature processed :' + result);
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
    FeatureComponent.prototype.getFeature = function (featureId) {
        var tempFeature;
        for (var i = 0; i < this.features.length; i++) {
            tempFeature = this.features[i];
            if (tempFeature._id == featureId) {
                console.log('feature found :' + tempFeature);
                return tempFeature;
            }
        }
    };
    return FeatureComponent;
}(Component_action_1.ComponentAction));
FeatureComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'feature',
        template: "\n    \n         <link rel=\"stylesheet\" href=\"../../bower_components/bootstrap/dist/css/bootstrap.min.css\">\n        <div>\n            <button class=\"btn btn-primary\" (click)=\"listFeature()\">All Features</button>\n            <button class=\"btn btn-primary\" (click)=\"showAddFeature()\" >Add Features</button>\n        </div>\n        {{enableAddFeature}}\n            <!-- loads child component list task and add new task -->\n            <router-outlet></router-outlet>\n\n            <form *ngIf=\"mode == 'insert' || mode == 'update' \" #featureForm=\"ngForm\" (ngSubmit)=\"processFeature(featureForm)\">\n                    <div class=\"form-group\">\n                        <label for=\"title\">Feature Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Enter Feature Title\" [(ngModel)]=selectedFeature.title>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"descr\">Feature Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"descr\" name=\"descr\" placeholder=\"Enter Feature Description\" [(ngModel)]=selectedFeature.descr>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"area\">Feature Title</label>\n                        <input type=\"text\" class=\"form-control\" id=\"area\" name=\"area\" placeholder=\"Enter Feature Area\" [(ngModel)]=selectedFeature.area>\n                    </div>                   \n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </form>\n                <br/>\n          <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"table-hover table-responsive table-bordered\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th class=\"col-md-2\">Title</th>\n                                <th class=\"col-md-2\">Descr</th>\n                                <th class=\"col-md-1\">Area</th>\n                                <th class=\"col-md-1\">No Of User Stories</th>\n                                <th class=\"col-md-1\"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let feature of features\">\n                                <td>{{feature.title}}</td>\n                                <td>{{feature.descr}}</td>\n                                <td>{{feature.area}}</td>\n                                <td *ngIf =\"feature.userstories == null\" >0</td>\n                                <td *ngIf =\"feature.userstories != null\" > {{feature.userstories.length}}</td>\n                                <td><a class='btn btn-info btn-xs'  (click)=\"editFeature(feature._id)\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a href=\"#\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\n                            </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    \n    "
    }),
    __metadata("design:paramtypes", [feature_services_1.FeatureServices])
], FeatureComponent);
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=feature.component.js.map