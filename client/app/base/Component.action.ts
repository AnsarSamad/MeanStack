import {Member} from './member'
export abstract class ComponentAction{
    public static member:Member
    constructor(){

    }
    setMember(member:Member){
        ComponentAction.member = member;
    }
    getMember(){
        return ComponentAction.member;
    }

}