var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserStory = require('../model/userstory');

router.post('/', (req, res) => {
    console.log('got a Post request to add new user feature')
    var id = req.body.userstory._id;
    var mode = req.body.mode;
    //This approach involves first retrieving the document from Mongo, then issuing an update command (triggered by calling save).
    UserStory.findById(id, function (err, userstory) {
        if (err) return handleError(err);
        console.log('user story found :' + JSON.stringify(userstory));
        if (mode == "insert") {
            var userstory = new UserStory();
        }
        userstory.title = req.body.userstory.title;
        userstory.descr = req.body.userstory.descr;
        userstory.storypoint = req.body.userstory.storypoint;
        userstory.sprint = req.body.userstory.sprint;
        userstory.area = req.body.userstory.area;
        userstory.assignTo = req.body.userstory.assignTo;
        userstory.task = req.body.userstory.task;
        userstory.created = req.body.userstory.created;
        userstory.modified = req.body.userstory.modified;
        console.log('saving userStory :' + JSON.stringify(userstory));
        userstory.save(function (err, updatedUserstory) {
            if (err) return err;
            res.send(updatedUserstory);
        });
    });

});

module.exports = router; 