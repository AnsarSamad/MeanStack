import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'
import {Http} from '@angular/http'
import {Router} from '@angular/router'


@Component({
    moduleId:module.id,
    selector:'login',
    templateUrl:'../html/login.component.html'
})

export class LoginComponent{
    isloggedIn:boolean = true;
    constructor(private http :Http , private router:Router){

    }

    showRegister(){
        console.log('show register action triggered')
    }

    validate(ngform:NgForm){
        console.log('values :'+ngform.value)
        this.http.post('http://localhost:3000/api/validate/login', {email:ngform.value.inputEmail,password:ngform.value.inputPassword})
        .map(result => result.json())
        .subscribe((result) => {
            this.isloggedIn = result.isvalid;
            if(this.isloggedIn){
                this.router.navigate(['./dash'])
            }
        })
    }
}