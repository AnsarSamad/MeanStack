export class Member{
    memberId : String
    membername:String
    isadmine:boolean
    constructor(memberId:String, name:String,admine:boolean){
        this.memberId = memberId;
        this.membername = name;
        this.isadmine = admine;
    }
}