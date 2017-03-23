var express = require('express');
var router = express.Router();
var mongoose  =  require('mongoose');
var Feature = require('../model/feature');

router.get('/',(req,res,next)=>{  
    console.log('get request for get all features') 
    Feature.find({}).populate('createdby').exec((err,response)=>{
        if(err){
            console.log('Error occured');
        }else{
            res.json(response)
        }
    })
})


router.post('/',(req,res)=>{
    console.log('got a POst request to add new user feature')
    var feature = new Feature();
    feature.title=req.body.title;
    feature.descr=req.body.descr;
    feature.created=req.body.created;
    feature.modified=req.body.modified;    
    feature.area=req.body.area;
    feature.userstories=req.body.userstories;
    feature.createdby=req.body.createdby;
    feature.save((err,feature)=>{
        if(err){
            console.log('Error occured:'+err.toString());
            res.end();
        }else{
            console.log('new feature Added :'+feature.title)
            res.json(feature);
        }
    })

});

module.exports = router; 