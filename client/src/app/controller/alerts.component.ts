import { Component, Input, OnInit } from '@angular/core'
@Component({
    selector: 'alerts',
    template: `
    
        <div class="alert alert-success alert-dismissible fade show" role="alert" *ngIf="alert.type == 'success' ">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
           </button>
            <strong>{{alert.message}}</strong> 
        </div>
        <div class="alert alert-info alert-dismissible fade show" role="alert"  *ngIf="alert.type == 'info' ">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
           </button>
            <strong>{{alert.message}}</strong> 
        </div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert" *ngIf="alert.type == 'warning' ">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
           </button>
            <strong>{{alert.message}}</strong> 
        </div>
        <div class="alert alert-danger alert-dismissible fade show" role="alert" *ngIf="alert.type == 'error' ">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
           </button>
            <strong>{{alert.message}}</strong> 
        </div>
            
    `
})

export class AlertsComponent implements OnInit {

    @Input() alert: object;
    showAlerts: boolean = false;
    messageArray: Array<string> = [""];
    ngOnInit() {

    }
}