import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TaskService} from '../app/task/task.service';
import {TaskComponent} from '../app/task/task.component';
import { AppComponent }  from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes,Route } from '@angular/router';
import {AddNewTaskComponent} from './task/addtask.component';
import {EventComponent} from '../app/controller/event.component'
import {EventService} from '../app/service/event.service'
import {AddNewEventComponent} from '../app/controller/addevent.component'
import {AddEventService} from '../app/service/addevent.service'
import {WeatherComponent} from '../app/controller/weather.component'
import {LoginComponent} from '../app/controller/login.component'
import {RegisterComponent} from '../app/controller/register.component'
import {DashBoardcomponent} from '../app/controller/dashboard.component'
import {AddTaskService} from '../app/task/addtask.service'
//index routing , redirect to login for the blank request
const indexRoutes:Route = {
  path:'',component:LoginComponent
}

// for all invalid routers , it will redirect to login component
const fallbackRoutes = {
  path:'**',component:LoginComponent
}


// order is important, routes get called on the order which they defined
const routes: Routes = [
  indexRoutes,

  { path: 'register', component: RegisterComponent },
  { path: 'dash', component: DashBoardcomponent,
    children: [
      {   // shows events as default
          path: '',
          redirectTo: 'events',
          pathMatch: 'full'
      },
      {   
          path: 'events', 
          component: EventComponent,
            children:[
              {  
                  path: 'addevent',
                  component: AddNewEventComponent
              }
            ]
      },
      
      {  
          path: 'task',
          component: TaskComponent,
          children:[
              {  
                  path: 'addtask',
                  component: AddNewTaskComponent
              }
            ]
      },
      { 
         path: 'weather',
         component: WeatherComponent
      }
  ]
 }
];

export const routing = RouterModule.forRoot(routes);



@NgModule({
  imports:   [ 
    BrowserModule ,  
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
    ],
    providers: [TaskService,EventService,AddEventService,AddTaskService],
  declarations: [
     AppComponent,
     LoginComponent,
     TaskComponent,      
     AddNewTaskComponent,
     EventComponent,
     AddNewEventComponent,
     WeatherComponent,
     RegisterComponent,
     DashBoardcomponent
     ],
  bootstrap:    [
     AppComponent 
     ] 
    
})
export class AppModule { }
