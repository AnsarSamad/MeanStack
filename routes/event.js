var express = require('express');
var router = express.Router();
var mongoose  =  require('mongoose');
var Event = require('../db/db');
// var path = require('path');
// var PropertiesReader = require('properties-reader');
// var properties = PropertiesReader(path.join(__dirname,'../db/config.properties'));
// var url = properties.get('db.url');
// mongoose.connect(url);

// console.log('inserting sample event :');
// var tpl = new Event();
// tpl.title = 'TPL';
// tpl.desc = 'Technopark League';
// tpl.created = new Date();
// tpl.modified = Date.now();
// tpl.place = 'Technopark';
// tpl.fees = 100;
// tpl.task.title = 'Cricket Match'
// tpl.task.isDone = false;
// tpl.task.content='Cricket match final';
// tpl.task.price='TPL Cup'

// tpl.save(function(err,event){
//     if(err){
//         console.log('Error Occured in creating Event:'+err.toString());
//     }else{
//         console.log('Created new Event :'+tpl.title);
//     }

// })  
console.log('am in event router');
router.get('/',(req,res,next)=>{  
    console.log('get request for get all events') 
    Event.find({}).exec((err,response)=>{
        console.log('am in get task api')
        if(err){
            console.log('Error occured');
        }else{
            res.json(response)
        }
    })
})

router.post('/',(req,res)=>{
    console.log('got a POst request to add new event')
    var event = new Event();
    event.title=req.body.title;
    event.descr=req.body.descr;
    event.created=req.body.created;
    event.modified = new Date();
    event.place=req.body.place;
    event.fees=req.body.fees;
    event.task.title=req.body.tsk_title;
    event.task.isDone=false;
    event.task.content=req.body.tsk_content;
    event.task.price=req.body.tsk_price;

    event.save((err,event)=>{
        if(err){
            console.log('Error occured:'+err.toString());
            res.end();
        }else{
            console.log('new Event Added :'+event.title)
            res.json(event);
        }
    })
})


module.exports = router; 