import{Component} from '@angular/core'
import {ComponentAction} from '../base/Component.action'

@Component({
    moduleId:module.id,
    selector:'dashboard',
    /*template:`
    
    <body>
      <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
      <link href="../css/dashboard.css" rel="stylesheet">
        <nav class="navbar navbar-inverse navbar-fixed-top">
         <div class="container-fluid">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </button>
               <a class="navbar-brand" href="#">MeanStack</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
               <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Help</a></li>
               </ul>
               <form class="navbar-form navbar-right">
                  <input type="text" class="form-control" placeholder="Search...">
               </form>
            </div>
         </div>
      </nav>
      <div class="container-fluid">
         <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
               <ul class="nav nav-sidebar">
                  <li class="active"><a routerLink="events">Events <span class="sr-only">(current)</span></a></li>
                  <li><a routerLink="task">Task</a></li>
                  <li><a routerLink="weather">Weather</a></li>
               </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <!-- loads event component -->             
               <router-outlet></router-outlet>
            </div>
         </div>
      </div>
    </body>
    `*/
    templateUrl:'../html/dashboard-new.html'
    
})
export class DashBoardcomponent extends ComponentAction {
    user:String;
    private sub: any;
    constructor(){
        super();
        this.user = super.getMember().membername;
    }

}