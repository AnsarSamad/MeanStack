import {NgModule }      from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {TaskService} from '../app/task/task.service';
import {TaskComponent} from '../app/task/task.component';
import {AppComponent }  from './app.component';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';
import {RouterModule, Routes,Route } from '@angular/router';
import {AddNewTaskComponent} from './task/addtask.component';
import {EventComponent} from '../app/controller/event.component'
import {EventService} from '../app/service/event.service'
import {AddNewEventComponent} from '../app/controller/addevent.component'
import {AddEventService} from '../app/service/addevent.service'
import {WeatherComponent} from '../app/controller/weather.component'
import {LoginComponent} from '../app/controller/login.component'
import {RegisterComponent} from '../app/controller/register.component'
import {DashBoardcomponent} from '../app/controller/dashboard.component'
import {FeatureComponent,StoryComponents} from '../app/controller/feature.component'
import {AddTaskService} from '../app/task/addtask.service'
import {FeatureServices } from '../app/service/feature.services'
import {FileUploadComponents } from '../app/controller/fileUpload.component'
import {AngularFireModule } from 'angularfire2'
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewStoriesComponent } from './controller/add-new-stories.component';
import {AlertsComponent} from './controller/alerts.component'



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
      {   // shows feature   as default
          path: '',
          redirectTo: 'feature',
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
      },
      { 
         path: 'feature',
         component: FeatureComponent,
         children: [{
           path: 'user-story',
           component:AddNewStoriesComponent
         }]
      },
      { 
         path: 'uploads',
         component: FileUploadComponents,
      }

  ]
 }
];

export const routing = RouterModule.forRoot(routes);
var firebaseConfig = {
          apiKey: "AIzaSyDp5PfXL2nQWqrKumXCuYUQSgVpW8HX9_U",
          authDomain: "tfsmean.firebaseapp.com",
          databaseURL: "https://tfsmean.firebaseio.com",
          projectId: "tfsmean",
          storageBucket: "tfsmean.appspot.com",
          messagingSenderId: "378897946454"
      };
@NgModule({
  imports:   [ 
    BrowserModule ,  
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot()
    ],
    providers: [TaskService,EventService,AddEventService,AddTaskService,FeatureServices],
    declarations: [
      AppComponent,
      LoginComponent,
      TaskComponent,      
      AddNewTaskComponent,
      EventComponent,
      AddNewEventComponent,
      WeatherComponent,
      RegisterComponent,
      DashBoardcomponent,
      FeatureComponent,
      FileUploadComponents,
      StoryComponents,
      AddNewStoriesComponent,
      AlertsComponent
     ],
  entryComponents: [StoryComponents],
    bootstrap: [
     AppComponent 
    ],

    
})
export class AppModule { }
