import { Component, Input, OnInit } from '@angular/core'
@Component({
    selector: 'alerts',
    template: `
    
        <div class="alert alert-{{alert.type}} alert-dismissible fade show" role="alert" >
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