export class Member{
    memberId : String
    membername:String
    isadmine:String
    constructor(memberId:String, name:String,admine:String){
        this.memberId = memberId;
        this.membername = name;
        this.isadmine = admine;
    }
}