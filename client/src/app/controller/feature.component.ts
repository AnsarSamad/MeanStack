import { Component, ViewChild, Input } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FeatureServices } from '../service/feature.services'
import { ComponentAction } from '../base/Component.action'
import { Features } from '../model/feature'
import { NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNewStoriesComponent } from './add-new-stories.component'
import { StoryComponent } from './stories.component'

@Component({
    moduleId: module.id,
    selector: 'feature',
    template: `
        
        <alerts *ngIf="alertObj != null" [alert]="alertObj" ></alerts>
        <div>
            <button class="btn btn-primary" (click)="listFeature()">All Features</button>
            <button class="btn btn-primary" (click)="showAddFeature()" >Add Features</button>
        </div>
        {{enableAddFeature}}
            <!-- loads child component list task and add new task -->
            <router-outlet></router-outlet>

            <form *ngIf="mode == 'insert' || mode == 'update' " #featureForm="ngForm" (ngSubmit)="processFeature(featureForm)">
                    <div class="form-group">
                        <label for="title">Feature Title</label>
                        <input type="text" class="form-control" id="title" name="title" placeholder="Enter Feature Title" [(ngModel)]=selectedFeature.title>
                    </div>
                    <div class="form-group">
                        <label for="descr">Feature Description</label>
                        <input type="text" class="form-control" id="descr" name="descr" placeholder="Enter Feature Description" [(ngModel)]=selectedFeature.descr>
                    </div>
                    <div class="form-group">
                        <label for="area">Feature Area</label>
                        <input type="text" class="form-control" id="area" name="area" placeholder="Enter Feature Area" [(ngModel)]=selectedFeature.area>
                    </div>                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                    
                </form>
                <br/>
                <app-add-new-stories  (onVoted)="showAlerts($event)" [selectedFeature]="selectedFeature" [hidden]="mode != 'addStories' "></app-add-new-stories>

                    <table class="table table-hover table-responsive table-bordered" *ngIf="mode != 'addStories' " >
                    <tr *ngIf="!isFeatureFound; else featureBlock" ><td>No Feature Found</td></tr>
                    <ng-template #featureBlock>
                            <thead>
                                <tr>
                                    <th >Title</th>
                                    <th >Descr</th>
                                    <th >Area</th>
                                    <th >User Stories</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let feature of features">
                                    <td><a  href="javascript:void(0);" (click)=addstories([feature._id])>{{feature.title}}</a></td>
                                    <td>{{feature.descr}}</td>
                                    <td>{{feature.area}}</td>
                                    <td *ngIf ="feature.userstory == null" ></td>
                                    <td *ngIf ="feature.userstory != null" ><a href="javscript:void(0);" (click)="open(feature._id)" > {{feature.userstory.length}} </a> </td>
                                    <td><a class='btn btn-info btn-xs'  (click)="editFeature(feature._id)"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a (click)="deleteFeature(feature)" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                                </tr>
                        </tbody>
                    </ng-template>
                </table>
                

    `

})

export class FeatureComponent extends ComponentAction {

    features: Features[]
    mode: string = "start";
    isEditMode = false;
    selectedFeature: Features = new Features("", "");
    testNum: number = 2;
    alertObj: object = null;
    isFeatureFound: boolean = false;


    constructor(private featureService: FeatureServices, private modalService: NgbModal) {
        super();
        this.getFeatures();
    }

    getFeatures() {
        this.featureService.getFeatures()
            .subscribe(result => {
                this.features = result;
                if (result != null && result.length != 0) {
                    this.isFeatureFound = true;
                }
            })
    }

    showAddFeature() {
        this.selectedFeature = new Features("", "");
        this.mode = "insert";
    }
    listFeature() {
        this.getFeatures();
        this.mode = "start";
    }
    processFeature(form: NgForm) {
        if (super.getMember().memberId != "") {
            this.selectedFeature.createdby = super.getMember().memberId;
        }
        this.selectedFeature.created = new Date();
        this.selectedFeature.modified = new Date();

        this.featureService.processFeature(this.mode, this.selectedFeature)
            .subscribe(result => {
                // push to array only if insert mode  , otherwise it will make duplicates since we returning features from server for both insert and update (using feature.save())
                if (this.mode == "insert") {
                    this.features.push(result);
                    this.alertObj = { type: "success", message: "Feature added Succesfully ." };

                } else if (this.mode == "update") {
                    this.alertObj = { type: "success", message: "Feature Updated Succesfully ." };
                }
                if (this.features.length > 0) {
                    this.isFeatureFound = true;
                }

            })
    }
    editFeature(featureId: string) {
        this.selectedFeature = this.getFeature(featureId);
        this.mode = "update";
    }
    deleteFeature(feature: Features) {
        this.mode = "delete";
        this.featureService.processFeature(this.mode, feature)
            .subscribe(result => {
                let index: number = this.features.indexOf(feature);
                if (index !== -1) {
                    this.features.splice(index, 1);
                    if (this.features.length == 0) {
                        this.isFeatureFound = false;
                    }
                    this.alertObj = { type: "success", message: "Feature Deleted Succesfully ." };
                }
            })
    }

    getFeature(featureId: string): Features {
        var tempFeature: Features;
        for (var i = 0; i < this.features.length; i++) {
            tempFeature = this.features[i];
            if (tempFeature._id == featureId) {
                return tempFeature;
            }
        }
    }

    open(featureId) {
        const modalRef = this.modalService.open(StoryComponent);
        modalRef.componentInstance.featureId = featureId;
        modalRef.componentInstance.isModel = true;
    }

    addstories(featureId) {
        this.selectedFeature = this.getFeature(featureId);
        this.mode = "addStories";
    }

    showAlerts(alert: object) {
        this.alertObj = alert;
    }

}