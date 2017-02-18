import{Component} from '@angular/core'
import {Event} from '../model/Event'
import { NgForm } from '@angular/forms';
import {Http} from '@angular/http'
import {AddEventService} from '../service/addevent.service'
@Component({
    moduleId:module.id,
    selector:'newEvent',
    templateUrl:'../html/addevent.component.html'
})

export class AddNewEventComponent{

event : Event;
// constructor(private http:Http){

// }
constructor(private addeventService:AddEventService){

}
    addEvent(form: NgForm){
        // const eventData = 
        //                 {
        //                     title:form.value.title,
        //                     descr:form.value.descr,
        //                     place:form.value.place,
        //                     fees:form.value.fees,
        //                     tsk_title:form.value.tsk_title,
        //                     tsk_content:form.value.tsk_content,
        //                     tsk_price:form.value.tsk_price
                            
        //                 } 
        
        //     console.log('direct value:'+JSON.stringify(eventData));
        //     this.http.post('http://localhost:3000/api/events/',eventData)
        //     .map(result=>JSON.stringify(result));
        this.addeventService.saveEvent()
        .subscribe(response=>console.log(response))
    }

}