import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'
import {AddTaskService} from './addtask.service'
import {Task} from '../model/Task'
@Component({
    moduleId:module.id,
    selector:'addtask',
    templateUrl:'addtask.component.html'
})
export class AddNewTaskComponent{

    constructor(private addTaskService : AddTaskService){

    }

    addTask(form:NgForm){
        console.log(form.value);
        const task = new Task(form.value.title,false);
        this.addTaskService.addtask(task);
    }

}