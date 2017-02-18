import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
@Injectable()
export class EventService{
    constructor(private http:Http){
        
    }
    getEvents(){
        return this.http.get('http://localhost:3000/api/events/')
        .map(result=>result.json());
    }
}