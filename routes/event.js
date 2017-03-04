var express = require('express');
var router = express.Router();
var mongoose  =  require('mongoose');
var Event = require('../db/db');

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