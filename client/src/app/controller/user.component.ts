import { Component } from '@angular/core'
import { UserService } from '../service/user.service'
import { User } from '../model/user'
@Component({
    selector: 'user',
    template: `
    
        <table class="table table-hover table-responsive table-bordered"  >                  
                            <thead>
                                <tr>
                                    <th >email</th>
                                    <th >password</th>  
                                    <th >Activated</th>
                                    <th >Admine</th>
                                    <th></th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let user of users">
                                    <td>{{user.local.email}}</td>
                                    <td>{{user.local.password}}</td> 
                                    <td>{{user.isactive}}</td>  
                                    <td>{{user.isadmine}}</td> 
                                    <td><button *ngIf="!user.isactive" class="btn-primary" (click)="activateUser(user._id)">Activate</button></td>                                 
                                    <td><a *ngIf="!user.isadmine" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Delete</a></td>
                                </tr>
                        </tbody>
        </table>

    `
})
export class UserComponent {
    users: User[]
    constructor(private userService: UserService) {
        this.userService.getUsers()
            .subscribe((result) => {
                this.users = result;
            })
    }
    activateUser(userId) {
        console.log('activating user:' + userId);
        this.userService.activate(userId)
            .subscribe((result) => {
                this.getUser(userId).isactive = true;
        })
    }

    getUser(userId):User {
       var tempUser: User;
        for (var i = 0; i < this.users.length; i++) {
            tempUser = this.users[i];
            if (tempUser._id == userId) {
                return tempUser;
            }
        }
    }
}