import{Component} from '@angular/core'
import {Event} from '../model/Event'
import { NgForm } from '@angular/forms';
import {Http} from '@angular/http'
import {AddEventService} from '../service/addevent.service'
@Component({
    moduleId:module.id.toString(),
    selector:'newEvent',
    template:`
    
    <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleSelect1">Example select</label>
    <select class="form-control" id="exampleSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
    `
    //templateUrl:'../html/addevent.component.html'
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