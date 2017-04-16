import {Component} from '@angular/core'
import{Task} from '../model/Task'
import{Event} from '../model/Event'
import{EventService} from '../service/event.service'
import {Observable} from 'rxjs/Rx'
import 'rxjs/Rx'

@Component({
    moduleId:module.id,
    selector:'event',
    template:`
    
        <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
        <div>
            <button routerLink="../events" class="btn btn-primary">All Events</button>
            <button routerLink="addevent" class="btn btn-primary">Add Events</button>
        </div>
            <!-- loads child component list task and add new task -->
            <router-outlet></router-outlet>
          <div class="container">
            <div class="row">
                <div class="">
                    <table class="table table-hover table-responsive table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Place</th>
                                <th>Tasks</th>
                                <th>Fees</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let evnt of events">
                                <td>{{evnt.title}}</td>
                                <td>{{evnt.place}}</td>
                                <td>{{evnt.task.title}}</td>
                                <td>{{evnt.fees}}</td>
                                <td>{{evnt.descr}}</td>
                                <td>{{evnt.created}}</td>
                                <td><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `
})
export class EventComponent{
events:Event[]
mode:String = "start";
constructor(eventService:EventService){
    eventService.getEvents()
    .subscribe(result => {
        console.log('events from mongo :'+result)
        this.events = result;
    })

  
}

}