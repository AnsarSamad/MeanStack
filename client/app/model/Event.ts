import {Task} from '../model/Task'
export class Event{
   
    title:string    
    descr:string
    created:Date
    modified:Date
    place:string
    fees?:number
    task:Task

    constructor(title:string,desc:string){
        this.title = title;
        this.descr = desc;
    }
    setCreated(crDate:Date){
        this.created = crDate;        
    }
    setModified(modDate  : Date){
        this.modified = modDate;
    }
    setPlace(pl:string){
        this.place = pl;
    }
    setFees(fs:number){
        this.fees = fs;
    }
    settask(tsk:Task){
        this.task = tsk;
    }
    
}