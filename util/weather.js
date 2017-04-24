var request = require('request')
var math = require('mathjs');

var getWeather  = (address,lat,lng)=>{
    return new Promise((resolve,reject)=>{
        request({
            url:`https://api.forecast.io/forecast/39023b6a228100ac6d4cf99174073d64/${lat},${lng}`,
            json:true
        },(err,response,body)=>{
            if(err){
                reject('Error occured:'+err.roString())
            }else if(resolve.statusCode===400){
                reject('Unable to fetch Data');
            }else{
                resolve({
                    address:address,
                    summary: body.currently.summary,
                    temperature:math.round(math.chain(body.currently.temperature).subtract(32).multiply(5/9).done(),2),//(Tc = Tf-32)*(5/9) 
                    humidity:body.currently.humidity
                })
            }
        });
    })
}

module.exports.getWeather = getWeather;