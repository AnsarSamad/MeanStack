var express = require('express');
var router = express.Router();
var geoCode  = require('../util/geocode')
var weather = require('../util/weather')

router.get('/:address',(req,res,next)=>{ 
    const address  = req.params.address;
    console.log('fetching geo data for location :'+address)
    geoCode.getGeocode(address)
    .then((location)=>{
      return  weather.getWeather(location.address,location.latitude,location.longitude);
    },(errroMessage)=>{
        console.log('Error Occured:'+errroMessage.toString())
    }).then((weatherData)=>{        
        console.log(JSON.stringify(weatherData))
        res.json(weatherData);
    },(badWeatherData)=>{
        console.log('Bad Weather Data')
    })
});



module.exports = router;