import { Component, Input, OnInit } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StoryService } from '../service/story.service'
import { UserStories } from '../model/userStory'
@Component({
    selector: 'stories',
    template: `
            
            <div class="modal-header" *ngIf="isModel">
                <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <table class="table table-hover table-responsive table-bordered" *ngIf="mode != 'addStories' " >
            <tr *ngIf="!isStoriesFound; else storiesBlock" ><td>No Stories Found</td></tr>
            <ng-template #storiesBlock>
                        <thead>
                            <tr>
                                <th >Title</th>
                                <th >Descr</th>
                                <th >Storypoint</th>
                                <th >Area</th>
                                <th >Sprint</th>
                                <th >Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let story of userStories">
                                <td><a>{{story.title}}</a></td>
                                <td>{{story.descr}}</td>
                                <td>{{story.storypoint}}</td>
                                <td>{{story.area}}</td>
                                <td>{{story.sprint}}</td>
                                <td *ngIf ="story.task == null" >0</td>
                                <td *ngIf ="story.task != null" > {{story.task.length}} </td>
                                
                                
                            </tr>
                    </tbody>
                    </ng-template>
                </table>


            </div>
            <div class="modal-footer" *ngIf="isModel">
                <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
            </div>
    
    `
})

export class StoryComponent implements OnInit {
    @Input() featureId: string;
    userStories: UserStories[];
    isModel: boolean;
    isStoriesFound:boolean = false;
    constructor(public activeModal: NgbActiveModal, private storyService: StoryService) {
        // the values set by ngbmodel service is not accessable in constructor
        // accessable only in OnInit()
    }
    ngOnInit() {
        //if model show only feature specific user stories
        // else get all user stories
        if (this.isModel) {
            this.storyService.getStoriesByFeature(this.featureId)
                .subscribe((result) => {
                    this.userStories = result;
                })
        } else {
            this.storyService.getStories()
                .subscribe((result) => {
                    this.userStories = result;
                })
        }
        if (typeof this.userStories != "undefined" && this.userStories.length > 0) {
            this.isStoriesFound = true;
        }
    }

}