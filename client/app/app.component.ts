import { Component} from '@angular/core';

@Component({
  moduleId:module.id.toString(),
  selector: 'my-app',
  template: `
      
        <router-outlet>    </router-outlet>
        

        ` 
})
export class AppComponent  {
   name = 'Angular';
   
 }
