import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class TaskService{

    constructor(private http:Http){

    }
    getTask(){
        console.log('am in gettask service')
        return this.http.get('/api/task')
        .map(result=>result.json());
    }
}