var express = require('express');
var router = express.Router();
var mongoose  =  require('mongoose');

var Schema = mongoose.Schema;
console.log('adding new schema');
var taskSchema = new Schema({
    title:String,
    isDone:Boolean,
    content:{ type: String, required: true, default: 'test' },
    price:{ type: String, required: true, default: 'test' }
});


var Task = mongoose.model('task',taskSchema);


router.get('/task',(req,res,next)=>{  
    console.log('get request for get all task') 
    Task.find({}).exec((err,response)=>{
        console.log('am in get task api')
        if(err){
            console.log('Error occured');
        }else{
            res.json(response)
        }
    })
})


router.get('/task/:id',(req,res,next)=>{  
    var id = req.params.id;
    console.log('get request for getting task:'+id) 
    Task.findById(id).exec((err,response)=>{
        console.log('am in get task by Id')
        if(err){
            console.log('Error occured');
        }else{
            res.json(response)
        }
    })
})

router.post('/task',function(req,res){
    var tsk = new Task();
    tsk.title=req.body.title;
    tsk.isDone=req.body.isDone;
    tsk.save(function(err,task){
        if(err){
            console.log('Error while Save new task')
        }else{
            console.log('new task added:'+task);
            res.end('succesfully added task :'+tsk.title);
        }
    })
})

module.exports = router; 