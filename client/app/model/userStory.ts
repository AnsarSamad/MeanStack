import {Task} from '../model/Task'
export class UserStories{
   
    title:string    
    descr:string
    created:Date
    modified:Date
    storypoint:number
    assignTo:string
    sprint:string
    area:string
    task:Array<Task>


    constructor(title:string,desc:string){
        this.title = title;
        this.descr = desc;
    }
        
}