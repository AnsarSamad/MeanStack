var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var taskSchema = new Schema({
    title: String,
    activity: String,
    assignto: String,
    sprint: String,
    hours: Number,
    status: String,
    isDone: Boolean,
    content: String
});


module.exports = mongoose.model('Task', taskSchema);