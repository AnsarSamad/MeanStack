import{Component} from '@angular/core'
@Component({
    moduleId:module.id.toString(),
    selector:'menu',
    template:`
    
        <a [routerLink]="['/add']">Add task</a>
        <a [routerLink]="['/edit']">Edit T</a>
        <a [routerLink]="['/Other']">Other</a>
        <a [routerLink]="['/spotify']">Spotify</a>
        <router-outlet></router-outlet>
        `
})
export class menuComponent{

}