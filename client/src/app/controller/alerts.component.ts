import { Component, Input, OnInit } from '@angular/core'
@Component({
    selector: 'alerts',
    template: `
    
        <div class="alert alert-success" role="alert" *ngIf="alert.type == 'success' ">
            <strong>{{alert.message}}</strong> 
        </div>
        <div class="alert alert-info" role="alert"  *ngIf="alert.type == 'info' ">
            <strong>{{alert.message}}</strong> 
        </div>
        <div class="alert alert-warning" role="alert" *ngIf="alert.type == 'warning' ">
            <strong>{{alert.message}}</strong> 
        </div>
        <div class="alert alert-danger" role="alert" *ngIf="alert.type == 'error' ">
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