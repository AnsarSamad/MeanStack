import {Component} from '@angular/core'
import {Task} from '../model/Task';
import {TaskService} from './task.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    moduleId:module.id,
    selector:'task',
    templateUrl:'task.component.html'    
})

export class TaskComponent{
task:Task[];

constructor(private taskService:TaskService){
    this.taskService.getTask().subscribe(tasks=>{
        this.task = tasks;
    });
   
    
}

addTask(){
    
}

    
}