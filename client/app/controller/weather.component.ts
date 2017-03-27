import {Component} from '@angular/core'
import {Http} from '@angular/http'
@Component({
    moduleId:module.id.toString(),
    selector:'weather',
    template:`
    
    

<link rel="stylesheet" href="../css/weather.css">
<body>

  <form class="navbar-form" role="search">
    <div class="input-group add-on">
      <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"  [(ngModel)]="address" id="address" name="address">
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit" (click)="getWeatherData()"><i class="glyphicon glyphicon-search"></i></button>
      </div>
    </div>
  </form>

    <div class="container" *ngIf="isSuccess">
		<div class="row">
			<div class="col-sm-4">
				<div id="card" class="weater">
					<div class="city-selected">
						<article>

							<div class="info">
								<div class="city"><span>City:</span> {{weatherObj?.address}}</div>
								<div class="night">{{weatherObj?.humidity}}</div>

								<div class="temp">{{weatherObj?.temperature}}°</div>

								
							</div>

							

						</article>
						
						
					</div>

				</div>
			</div>
		</div>
	</div>

</body>

    
    `
})
export class WeatherComponent{
    address:string;
    weatherObj:JSON;
    isSuccess:boolean = false;
    constructor(private http:Http){

    }

    getWeatherData(){
        console.log('getting weather data for location :'+this.address)
        this.http.get(`/api/weather/${this.address}`)
        .map((weather)=> weather.json())
        .subscribe((weatherObj)=>{
            this.weatherObj = weatherObj;
            console.log('weatherObj :'+JSON.stringify(this.weatherObj));
            this.isSuccess  = true;
        })
    }
}