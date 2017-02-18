export class Task{

    title:string;
    isDone:boolean;
    content:string
    price:string
    constructor(title:string,done:boolean){
        this.title=title;
        this.isDone=done;
    }

    setContent(content:string){
        this.content = content;
    }
    setPrice(pr:string){
        this.price = pr;
    }
}