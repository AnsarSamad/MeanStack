import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class TaskService{

    constructor(private http:Http){

    }
    getTask(){
        return this.http.get('/api/task')
        .map(result=>result.json());
    }
}