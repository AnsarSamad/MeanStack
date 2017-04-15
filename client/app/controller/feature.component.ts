import {Component} from '@angular/core'
import {FeatureServices} from '../service/feature.services'
import {ComponentAction} from '../base/Component.action'
import {Features} from '../model/feature'
import { NgForm } from '@angular/forms';
@Component({
    moduleId:module.id,
    selector:'feature',
    template:`
    
         <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
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
                        <label for="descr">Feature Title</label>
                        <input type="text" class="form-control" id="descr" name="descr" placeholder="Enter Feature Description" [(ngModel)]=selectedFeature.descr>
                    </div>
                    <div class="form-group">
                        <label for="area">Feature Title</label>
                        <input type="text" class="form-control" id="area" name="area" placeholder="Enter Feature Area" [(ngModel)]=selectedFeature.area>
                    </div>                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br/>
          <div class="container">
            <div class="row">
                <div class="table-hover table-responsive table-bordered">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="col-md-2">Title</th>
                                <th class="col-md-2">Descr</th>
                                <th class="col-md-1">Area</th>
                                <th class="col-md-1">User Stories</th>
                                <th class="col-md-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let feature of features">
                                <td>{{feature.title}}</td>
                                <td>{{feature.descr}}</td>
                                <td>{{feature.area}}</td>
                                <td *ngIf ="feature.userstories == null" >0</td>
                                <td *ngIf ="feature.userstories != null" > {{feature.userstories.length}}</td>
                                <td><a class='btn btn-info btn-xs'  (click)="editFeature(feature._id)"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a (click)="deleteFeature(feature)" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    `

})

export class FeatureComponent extends ComponentAction{

    features:Features[]
    mode :string = "start";
    isEditMode = false;
    selectedFeature  : Features ;
    constructor(private featureService:FeatureServices){
        super();
       this.getFeatures();
    }

    getFeatures(){
        this.featureService.getFeatures()
        .subscribe(result => {
            console.log('features from mongo :'+JSON.stringify(result))
            this.features = result;
            console.log('this features :'+JSON.stringify(this.features))
        })  
    }

    showAddFeature(){
        this.selectedFeature = new Features("","");
        this.mode = "insert";
    }
    listFeature(){
        this.getFeatures();
        this.mode = "start";
    }
    processFeature(form:NgForm){
            console.log('memberId :'+ super.getMember().memberId);
            this.selectedFeature.createdby = super.getMember().memberId;
            this.selectedFeature.created = new Date();
            this.selectedFeature.modified = new Date();

            console.log('this.selectedFeature  :'+JSON.stringify(this.selectedFeature));

            this.featureService.processFeature(this.mode,this.selectedFeature)
            .subscribe(result=>{
                console.log('new feature processed :'+result)
                // push to array only if insert mode  , otherwise it will make duplicates since we returning features from server for both insert and update (using feature.save())
                if(this.mode == "insert"){
                    this.features.push(result);
                }
                
            })
    }
    editFeature(featureId : string){
        this.selectedFeature = this.getFeature(featureId);
        this.mode = "update";

    }
    deleteFeature(feature : Features){
        this.mode ="delete";
        this.featureService.processFeature(this.mode,feature)
        .subscribe(result=>{
            console.log('delete resposne from server :'+result);
            let index: number = this.features.indexOf(feature);
            if (index !== -1) {
                this.features.splice(index, 1);
            }               
        })
     }

    getFeature(featureId:string):Features{
        var tempFeature:Features;
         for (var i = 0; i < this.features.length; i++) {
            tempFeature = this.features[i];
            if (tempFeature._id == featureId) {
                console.log('feature found :'+tempFeature);
                return tempFeature;
            }
        } 
    }
}