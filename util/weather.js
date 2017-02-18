var request = require('request')
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
                    temperature:body.currently.temperature,
                    humidity:body.currently.humidity
                })
            }
        });
    })
}

module.exports.getWeather = getWeather;