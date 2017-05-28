
import {UserStories} from '../model/userStory'
export class Features{
    _id:string
    title:String   
    descr:String
    created:Date
    modified:Date
    area:String
    userstory : Array<UserStories> = [];
    createdby  : String


    constructor(title:string,desc:string){
        this.title = title;
        this.descr = desc;
    }
        
}