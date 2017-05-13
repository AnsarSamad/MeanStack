import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
@Injectable()

export class AddEventService{
    constructor(private http:Http){

    }
    saveEvent(){
           const eventData = 
                        {
                            title:'test',
                            descr:'test',
                            place:'test',
                            fees:123,
                            tsk_title:'test',
                            tsk_content:'test',
                            tsk_price:'test'
                            
                        }
        return this.http.post('http://localhost:3000/api/events/',eventData).map(response => response.json());
    }
}