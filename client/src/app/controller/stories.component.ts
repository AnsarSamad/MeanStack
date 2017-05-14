import { Component, Input } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StoryService } from '../service/story.service'
import { UserStories } from '../model/userStory'
@Component({
    selector: 'stories',
    template: `
            
            <div class="modal-header">
                <h4 class="modal-title">Hi there!</h4>
                <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <table class="table table-hover table-responsive table-bordered" *ngIf="mode != 'addStories' " >
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
                </table>


            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
        </div>
    
    `
})

export class StoryComponent {
    @Input() featureId: string;
    userStories: UserStories[];
    constructor(public activeModal: NgbActiveModal, private storyService: StoryService) {

    }


}