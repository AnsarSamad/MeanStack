import{Component} from '@angular/core'
import {ComponentAction} from '../base/Component.action'

@Component({
    moduleId:module.id.toString(),
    selector:'dashboard',    
    template:`
     <link rel="stylesheet" href="../css/dashboard.css">
       <body>

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
                        <li *ngIf=""><span class="glyphicon glyphicon-user" style="background: gray;"></span></li>
                        <li><a href="#">{{getMember().membername}}{{getMember().isadmine}}</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Profile</a></li>
                     </ul>
                     
                  </div>
               </div>
            </nav>
            <div class="container-fluid">
               <div class="row">
                  <div class="col-sm-3 col-md-2 sidebar">
                     <ul class="nav nav-sidebar">
                        <li class="active"><a [routerLink]="['events']">Events</a></li>
                        <li><a [routerLink]="['task']">Tasks</a></li>
                        <li><a [routerLink]="['weather']">Weather</a></li>
                     </ul>
                     
                  </div>
                  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                     <div class="table-responsive">
                        <table class="table table-striped">
                           am in dashboard
                              <router-outlet></router-outlet>
                           
                        </table>
                     </div>
                  </div>
               </div>
            </div>
              
         </body>
    
    `
    
})
export class DashBoardcomponent extends ComponentAction {
    user:String;
    private sub: any;
    constructor(){
        super();
        this.user = super.getMember().membername;
    }

}