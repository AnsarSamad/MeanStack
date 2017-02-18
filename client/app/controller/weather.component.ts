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
        console.log('getting weather data for location :'+this.address)
        this.http.get(`http://localhost:3000/api/weather/${this.address}`)
        .map((weather)=> weather.json())
        .subscribe((weatherObj)=>{
            this.weatherObj = weatherObj;
            console.log('weatherObj :'+JSON.stringify(this.weatherObj));
            this.isSuccess  = true;
        })
    }
}