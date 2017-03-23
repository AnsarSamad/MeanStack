var express = require('express');
var router = express.Router();
var mongoose  =  require('mongoose');
var UserStory = require('../model/userstory');

router.post('/',(req,res)=>{
    console.log('got a POst request to add new user story')
    var story = new UserStory();
    story.title=req.body.title;
    story.descr=req.body.descr;
    story.created=req.body.created;
    story.modified=req.body.modified;
    story.storypoint=req.body.storypoint;
    story.assignTo=req.body.assignTo;
    story.sprint=req.body.sprint;
    story.area=req.body.area;
    story.task=req.body.task;
    story.save((err,story)=>{
        if(err){
            console.log('Error occured:'+err.toString());
            res.end();
        }else{
            console.log('new Event Added :'+story.title)
            res.json(story);
        }
    })

});

module.exports = router; 