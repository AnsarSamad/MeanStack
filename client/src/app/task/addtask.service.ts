import {Injectable} from '@angular/core'
import {Task} from '../model/Task'
import {Http} from '@angular/http'
@Injectable()

export class AddTaskService{
    constructor(private http:Http){

    }
    addtask(task:Task){
        // this.http.post()
    }
}