var mongoose = require('mongoose');
var Task = require('../model/task');
var Schema = mongoose.Schema;
var userstorySchema = new Schema({

    title:String,    
    descr:String,
    created:Date,
    modified:Date,
    storypoint:String,
    assignTo:String,
    sprint:String,
    area:String,
    task : [{ type: Schema.Types.ObjectId, ref: 'Task' }]

})


module.exports =  mongoose.model('userstory',userstorySchema);