var mongoose = require('mongoose');
var UserStory = require('../model/userstory');
var User = require('../model/user');
var Schema = mongoose.Schema;
var featureSchema = new Schema({

    title:String,    
    descr:String,
    created:Date,
    modified:Date,
    area:String,
    userstories : [{ type: Schema.Types.ObjectId, ref: 'UserStory' }],
    createdby:{type:Schema.Types.ObjectId,ref:'User'}

})


module.exports =  mongoose.model('feature',featureSchema);