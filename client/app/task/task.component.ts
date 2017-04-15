import {Component} from '@angular/core'
import {Task} from '../model/Task';
import {TaskService} from './task.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    moduleId:module.id,
    selector:'task',
    template:`
    
        <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
        <div>
            <button routerLink="../task" class="btn btn-primary">All Task</button>
            <button routerLink="addtask" class="btn btn-primary">Add Task</button>
        </div>
            <!-- loads child component list task and add new task -->
            <router-outlet></router-outlet>
        <div class="container">
            <div class="row">
                <div class="table-hover table-responsive table-bordered">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Activity</th>
                                <th>Status</th>
                                <th>AssignTo</th>
                                <th>Spritn</th>
                                <th>Hours</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tr *ngFor="let task of tasks">
                            <td>{{task.title}}</td>
                            <td>{{task.activity}}</td>
                            <td>{{task.status}}</td>
                            <td>{{task.assignto}}</td>
                            <td>{{task.sprint}}</td>
                            <td>{{task.hours}}</td>
                            <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                        </tr>
                    </table>
            </div>
        </div>
    </div>
    `   
})

export class TaskComponent{
tasks:Task[];

constructor(private taskService:TaskService){
    this.taskService.getTask().subscribe(tasks=>{
        this.tasks = tasks;
    });
   
    
}

addTask(){
    
}

    
}