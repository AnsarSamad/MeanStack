export class Task {

    title: string;
    activity: string;
    assignto: string;
    sprint: string;
    hours: number;
    status: string;
    isDone: boolean;
    content: string

    constructor(title: string, done: boolean) {
        this.title = title;
        this.isDone = done;
    }

    setContent(content: string) {
        this.content = content;
    }

}