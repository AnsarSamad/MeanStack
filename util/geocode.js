request = require('request')
var geoCode = (address)=>{
    var encodedAddress  = encodeURIComponent(address);
    return new Promise((resolve,reject)=>{
            request({
                url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json:true
            },(err,response,body)=>{
                if(err){
                    console.log('Error Occured :'+err)
                    reject('Error Occured..'+err);
                }
                if(body.status === 'OK'){
                    resolve({
                        address:body.results[0].formatted_address,
                        latitude:body.results[0].geometry.location.lat,
                        longitude:body.results[0].geometry.location.lng,

                    })
                }else if(body.status === 'ZERO_RESULTS'){
                    reject('No Result Found')
                }
            });
    })
}

module.exports.getGeocode = geoCode;