import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentAction } from '../base/Component.action'
import { Features } from '../model/feature'
import { UserStories } from '../model/userStory'
import { FeatureServices } from '../service/feature.services'
import { systemConstant } from '../base/systemConstant'

@Component({
  selector: 'app-add-new-stories',
  template: `
  
  <h3>Add Stories for Feature {{selectedFeature.title}}</h3>
  <h4>No of Stories added to this Feature : {{selectedFeature.userstories.length }}</h4>


 <form  #userStoryForm="ngForm" (ngSubmit)="addUserStory(userStoryForm)">
  <div class="form-group">
    <label for="title">User Story Title</label>
    <input type="text" class="form-control" id="title" name="title"  [(ngModel)]=userStory.title>
  </div>
  <div class="form-group">
    <label for="descr">User Story Desc</label>
    <input type="text" class="form-control" id="descr" name="descr"  [(ngModel)]=userStory.descr>
  </div>
  <div class="form-group">
    <label for="area">User Story point</label>
    <input type="text" class="form-control" id="storypoint" name="storypoint"  [(ngModel)]=userStory.storypoint>
  </div> 
  <div class="form-group">
    <label for="area">User Story Sprint</label>
    <input type="text" class="form-control" id="sprint" name="sprint"  [(ngModel)]=userStory.sprint>
  </div>                   
  <div class="form-group">
    <label for="area">User Story Area</label>
    <input type="text" class="form-control" id="area" name="area"  [(ngModel)]=userStory.area>
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button>
             
</form>
  
  `
})
export class AddNewStoriesComponent implements OnInit {

  @Input() selectedFeature: Features;
  userStory: UserStories = new UserStories("", "");

  @Output() onVoted = new EventEmitter<object>();


  ngOnInit() {
    console.log('This is the value for selectedFeature: ' + JSON.stringify(this.selectedFeature));
  }
  constructor(private featureService: FeatureServices) {

  }
  addUserStory(form: NgForm) {
    console.log('user story :' + this.userStory);
    this.featureService.processUserStories(systemConstant.INSERT, this.userStory)
      .subscribe(result => {
        console.log('new userstory processed :' + result);
        this.selectedFeature.userstories.push(result._id);
        console.log('Feature :' + JSON.stringify(this.selectedFeature));
        this.featureService.processFeature(systemConstant.INSERT, this.selectedFeature)
          .subscribe(result => {
            console.log('story attached to feature');
            //this.onAlertAdded.emit({type: "success",message:"user_story_added"});
             this.onVoted.emit({type:"success",message:"User story added Succesfully ."});
            this.userStory = new UserStories("", "");
          })

      })

  }
}
