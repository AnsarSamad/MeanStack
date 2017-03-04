var mongoose  =  require('mongoose');

var Schema = mongoose.Schema;
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