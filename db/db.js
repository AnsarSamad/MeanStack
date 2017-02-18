var mongoose  =  require('mongoose');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(__dirname+'/config.properties');
var url = properties.get('db.url');
console.log('db url :'+url)

var Schema = mongoose.Schema;
console.log('adding new schema');

var eventSchema = new Schema({
    title:String,
    descr:String,
    created:Date,
    modified:{type: Date, default: Date.now},
    place:String,
    fees:Number,
    task:{
        title:String,
        isDone:Boolean,
        content:String,
        price:String
    }

})





module.exports =  mongoose.model('Event',eventSchema);