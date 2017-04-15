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
    console.log('got a Post request to add new user feature')    
    var id = req.body.feature._id;
    var mode = req.body.mode;

    //This approach involves first retrieving the document from Mongo, then issuing an update command (triggered by calling save).
    Feature.findById(id, function (err, feature) {
        if (err) return handleError(err);
            console.log('feature found :'+JSON.stringify(feature));
            if(mode == "insert"){
                var feature = new Feature();
            }
            feature.title=req.body.feature.title;
            feature.descr=req.body.feature.descr;
            feature.created=req.body.feature.created;
            feature.modified=req.body.feature.modified;    
            feature.area=req.body.feature.area;
            feature.userstories=req.body.feature.userstories;
            feature.createdby=req.body.feature.createdby;      
            console.log('saving feature :'+JSON.stringify(feature));    
            feature.save(function (err, updatedFeature) {
                if (err) return err;
                res.send(updatedFeature);
            });
    });

});

module.exports = router; 