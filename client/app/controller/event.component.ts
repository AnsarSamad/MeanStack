import {Component} from '@angular/core'
import{Task} from '../model/Task'
import{Event} from '../model/Event'
import{EventService} from '../service/event.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    moduleId:module.id,
    selector:'event',
    template:`
    
    <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
    <div class="container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Place</th>
                <th>Tasks</th>
                <th>Fees</th>
                <th>Description</th>
                <th>Created</th>
                <th>Modified</th>
                <th class="text-center">Action</th>
            </tr>
        </thead>
        <tr *ngFor="let evnt of events">
            <td>{{evnt.title}}</td>
            <td>{{evnt.place}}</td>
            <td>{{evnt.task.title}}</td>
            <td>{{evnt.fees}}</td>
            <td>{{evnt.descr}}</td>
            <td>{{evnt.created}}</td>
            <td>{{evnt.modified}}</td>
            <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
        </tr>
    </table>
    </div>

    `
})
export class EventComponent{
events:Event[]
constructor(eventService:EventService){
    eventService.getEvents()
    .subscribe(result => {
        console.log('events from mongo :'+result)
        this.events = result;
    })

  
}

}