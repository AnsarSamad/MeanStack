"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const addevent_service_1 = require("../service/addevent.service");
let AddNewEventComponent = class AddNewEventComponent {
    // constructor(private http:Http){
    // }
    constructor(addeventService) {
        this.addeventService = addeventService;
    }
    addEvent(form) {
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
            .subscribe(response => console.log(response));
    }
};
AddNewEventComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newEvent',
        template: `
    
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
    }),
    __metadata("design:paramtypes", [addevent_service_1.AddEventService])
], AddNewEventComponent);
exports.AddNewEventComponent = AddNewEventComponent;
//# sourceMappingURL=addevent.component.js.map