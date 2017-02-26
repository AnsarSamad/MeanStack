import{Component,Input,Output} from '@angular/core'
import{Router} from '@angular/router'
import{Http} from '@angular/http'
import {Observable} from 'rxjs/Observable';
@Component({
    moduleId:module.id,
    selector:'signup',
    templateUrl:'../html/register.component.html'
})


 

export class RegisterComponent{

email:string;
password:string
isSuccess :boolean  = true;
constructor(private http:Http , private router:Router){

}
 register(){    
      this.http.post('api/validate/register/',{email:this.email,password:this.password})
     .subscribe(
         (response) => {
              this.isSuccess = response.json().success  
              console.log('success:'+this.isSuccess);
              if(this.isSuccess){
                  this.router.navigate(['./dash']);
              } 
         });
        
}

}