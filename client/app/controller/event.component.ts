import {Component} from '@angular/core'
import{Task} from '../model/Task'
import{Event} from '../model/Event'
import{EventService} from '../service/event.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    moduleId:module.id,
    selector:'event',
    templateUrl:'../html/event.component.html'
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