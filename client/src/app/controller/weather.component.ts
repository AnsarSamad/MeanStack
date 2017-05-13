import {Component} from '@angular/core'
import {Http} from '@angular/http'
@Component({
    moduleId:module.id,
    selector:'weather',
    templateUrl:'../html/weather.component.html'
})
export class WeatherComponent{
    address:string;
    weatherObj:JSON;
    isSuccess:boolean = false;
    constructor(private http:Http){

    }

    getWeatherData(){
        this.http.get(`/api/weather/${this.address}`)
        .map((weather)=> weather.json())
        .subscribe((weatherObj)=>{
            this.weatherObj = weatherObj;
            this.isSuccess  = true;
        })
    }
}